# Global Query
This is a companion to this [blog post](https://speedrun.nobackspacecrew.com/blog/2023/11/14/the-global-query.html)

A couple of notes about this block:

1. It is assumed that you have followed the instructions to create [Speedrun roles in your accounts](https://github.com/No-Backspace-Crew/Speedrun/wiki/Creating-Speedrun-Roles) and followed the necessary steps to [authenticate your command line for use with Speedrun](https://github.com/No-Backspace-Crew/Speedrun/wiki/Getting-AWS-Credentials#getting-cli-credentials).
2.  `${role}` is replaced by the current role in your dropdown.  If you want to use a different role, you can hardcode it, or set it for this block by modifying the `#copy` line to `#copy {role:'speedrun-DifferentRole'}` where `speedrun-DifferentRole` is the role you want to use.
3.  It will prompt you for `Log Group Pattern`, it uses this syntax [CWL-DescribeLogGroups-request-logGroupNamePattern](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DescribeLogGroups.html#CWL-DescribeLogGroups-request-logGroupNamePattern).
4.  It will prompt you for the End Time of the query, it uses any-date-parser to parse the date so these are [allowed formats](https://www.npmjs.com/package/any-date-parser#exhaustive-list-of-date-formats).
5.  The lookback is based on your End Time.
6.  The query is a multi-line text area, likely you want to test it using the CloudWatch Logs Insights console and then paste it when you get it working.
7.  The last argument is a random string that is used to name the output file.  This gives each run a unique id so you can run the script multiple times in the same directory and keep the results separate.

```
#copy
while read account
  do
      ./globalQuery.sh "$account" "${role}" "~~~Log Group Pattern~~~" ${endTime-~~~Lookback {type:'select', options:{'1 minute': 60,'1 hour':3600, '1 day': 86400, '3 days':259200, '1 week': 604800, '1 month':2678400}}~~~} "~~~endTime=EndTime {transform:"dayjs(value).valueOf()/1000", default:'${dayjs().format("YYYY-MM-DD HH:mm")}'}~~~" $'~~~globalQuery=Query {type:'textarea', transform:'bashEscape(value)'}~~~' ${Math.random().toString(36).substr(2)} &
  done < ~/accounts.txt
```
