#!/bin/bash

ACCOUNT_LINE=( $1 )
ACCOUNT=${ACCOUNT_LINE[0]}
REGION=${ACCOUNT_LINE[1]:-us-east-1}
ROLE=$2
LOG_GROUP_PATTERN=$3
START_TIME=$4
END_TIME=$5
QUERY=$6
RUN_ID=$7

# Get credentials for the specified role and account
credentials=$(curl -s -S -b ~/.speedrun/cookie -L -X POST -H "Content-Type: application/json; charset=UTF-8" -d '{"role": "'$ROLE'", "duration":3600}' -X POST https://speedrun-api.us-west-2.nobackspacecrew.com/v1/credentials/${ACCOUNT})
if [[ $credentials != *"AccessKeyId"* ]]; then
  echo -e "\033[31mUnable to get credentials: ${credentials}\033[m"
  exit 1;
fi
export $(printf "AWS_DEFAULT_REGION=$REGION AWS_REGION=$REGION AWS_ACCESS_KEY_ID=%s AWS_SECRET_ACCESS_KEY=%s AWS_SESSION_TOKEN=%s AWS_CREDENTIAL_EXPIRATION=%s" $(echo $credentials | cut -d\" -f4,8,12,16 | tr '"' '\n'))

# Get account alias for account if there is one
ACCOUNT_ALIAS=$(aws iam list-account-aliases --query "AccountAliases[0]" --output text)
if [[ ACCOUNT_ALIAS == 'None' ]]; then
  ACCOUNT_ALIAS = $ACCOUNT
fi

# Find the first loggroup the matches the search pattern
LOG_GROUP_NAME=$(aws logs describe-log-groups --log-group-name-pattern $LOG_GROUP_PATTERN --query "logGroups[0].logGroupName" --output json | sed s/\"//g)
if [[ $LOG_GROUP_NAME == "null" ]]; then
    echo -e "\033[31mNo matching logGroup for pattern: '$LOG_GROUP_PATTERN'\033[m";
    exit 2;
fi

# start query
QUERY_ID=$(aws logs start-query --log-group-name $LOG_GROUP_NAME --start-time $START_TIME --end-time $END_TIME --query-string "$QUERY" --query \"queryId\" --output text)

# print details about query
printf "ACCOUNT: $ACCOUNT\n"\
"ACCOUNT_ALIAS: $ACCOUNT_ALIAS\n"\
"REGION: $REGION\n"\
"QUERY: $QUERY\n"\
"START: %s\n"\
"END: %s\n"\
"QUERY_ID: $QUERY_ID\n" "$(date -u -r $START_TIME)" "$(date -u -r $END_TIME)" | tee -a $ACCOUNT_ALIAS-$REGION-$RUN_ID.txt;

# poll for query completion
while [[ $(aws logs get-query-results --query-id=$QUERY_ID --query "status" --output text) =~ ^(Scheduled|Running)$ ]]
do
    sleep 2;
done
status=$(aws logs get-query-results --query-id=$QUERY_ID --query "status" --output text)
if [[ $status != 'Complete' ]]; then
    echo -e "\033[31mInvalid query status: '$status'\033[m";
    exit 3;
fi

# on completion, print header and results
aws logs get-query-results --query-id $QUERY_ID \
  --query "[@][?status=='Complete'].results[*][?field!='@ptr']. [field,value]|[][*][0] | [0]" \
  --output text --no-paginate | tee -a $ACCOUNT_ALIAS-$REGION-$RUN_ID.txt
aws logs get-query-results --query-id $QUERY_ID \
  --query "[@][?status=='Complete'].results[*][?field!='@ptr'].[field,value]|[][*][1]" \
  --output text --no-paginate | tee -a $ACCOUNT_ALIAS-$REGION-$RUN_ID.txt
