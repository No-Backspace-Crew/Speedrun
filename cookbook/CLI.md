# Using the AWS CLI

Using Speedrun to build command lines has a few advantages

1. You only enter your inputs, Speedrun builds the command line
2. Speedrun can transform your inputs so you aren't focused on escaping quotes and other special characters
3. Using a browser to build command lines is much faster than using a terminal, you get dropdowns, javascript and variable completion
4. The credentials are scoped, time limited and associated with the Github account that you are logged in with
5. No more boilerplate to validate and format inputs or get credentials

> **💡 Tip**
> Click the Code tab to see the underlying Markdown for an entry.  Click the ![copy](https://user-images.githubusercontent.com/97474956/201821050-e1acc9f6-d41f-4485-9616-0b694f211d4e.svg) icon to copy the underlying Markdown to the clipboard.

Here, we are using the [copy](https://github.com/No-Backspace-Crew/Speedrun/wiki/Templates#copy) template with the extension `withCreds` to query a table in dynamodb for a song lyric.  We transform the lyric to be lowercase, escape it and trim it.  We set the default value to `photograph`.  Then we use the `--query` feature of the AWS CLI to use JMESPath to extract just the `occurences` attribute of the result.  Speedrun takes care of wrapping the command with the code necessary to get credentials.

```
#copy.withCreds
aws dynamodb get-item --table-name nickleback-lyrics \
--key $'{"word":{"S":"~~~Lyric {transform:'bashEscape(value.toLowerCase().trim())', default:'photograph'}~~~"}}' \
--query Item.occurences \
--output text
```

If you wanted to do this with a template instead of writing out the whole command you might do it like this.  Look at the `#srConfig` below for the [definition of `CLIDDBQuery`](#configuration).  Note this doesn't do any filtering of the output like the first example and will display the whole item.

```
#CLIDDBQuery {tableName:'nickleback-lyrics', primaryKey:'word'}
~~~keyValue=Lyric {transform:'value.toLowerCase().trim()', default:'photograph'}~~~
```

> **:star_struck: Pro Tip**
> To use the AWS CLI effectively, learn about the AWS CLI option [--query](https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-filter.html#cli-usage-filter-client-side) and [JMESPath](https://jmespath.org/) to extract just the data you want from the results.  Also familiarize yourself with the [$() and `` syntax](https://www.redhat.com/sysadmin/backtick-operator-vs-parens) for subshells.


This is one is :fire: hot :fire: it combines prompts, JMESPath, JavaScript and bash to let you query your CloudWatch logs.

```
#copy.withCreds
LOG_GROUP_NAME=`aws logs describe-log-groups \
  --query "logGroups[?starts_with(logGroupName,'~~~Prefix~~~')].logGroupName" --output text`
QUERY_ID=`aws logs start-query --log-group-names $LOG_GROUP_NAME \
--end-time '~~~endTime=End Time {"default":"${dayjs().format('YYYY-MM-DD')}", "transform":"dayjs(value,'YYYY-MM-DD').unix()"}~~~' \
--start-time '${dayjs.unix(endTime).subtract(~~~Lookback {type:'select', options:{'1 day': 1, '3 days': 3, '7 days': 7}}~~~,'day').unix()}' \
--query-string $'~~~Query {"type":"textarea","transform":"bashEscape(value)"}~~~' \
--query 'queryId' --output text`
while [ `aws logs get-query-results --query-id $QUERY_ID --query "status=='Scheduled' || status=='Running'" --output text` = "True" ]
do
  sleep 1;
done 
aws logs get-query-results --query-id $QUERY_ID --query "[@][?status=='Complete'].results[*][?field!='@ptr'].[field,value]|[][*][0] | [0]" --output text
aws logs get-query-results --query-id $QUERY_ID --query "[@][?status=='Complete'].results[*][?field!='@ptr'].[field,value]|[][*][1]" --output text
```

## Configuration
```
#srConfig
{
  role: 'ReadOnly', //you can leave off the speedrun- prefix and it will prepend it for you
  templates: {
    CLIDDBQuery: { //this is the name of the template
      type : "copy", //we want it to copy to the clipboard
      creds :  true, //we want to get credentials
      //the value is set to the command line we want to run with parameterized tablename, primary key and key value the user supplies
      value : "aws dynamodb get-item --table-name ${tableName} --key '{\"${primaryKey}\":{\"S\":\"${bashEscape(keyValue)}\"}}'"
    }
  },
  services:
  {
    LyricsDatabase: {
      regions: {
        'us-west-2' : {
           account:111111111111 //at the minimum you need an account and role to be able to federate into the console
          },
        'us-east-2' : {
          account:222222222222 //the credentials broker won't let you get credentials for this demo account but will build the command
        }
      }
    }
  },
  srHideUserService: true, //this is to suppress your personal service in the dropdown and is not normally necessary
  srShowConfig: true //this is to always show this config and is not normally necessary
}

```

[Return to Cookbook](https://github.com/No-Backspace-Crew/Speedrun/wiki/Cookbook)
