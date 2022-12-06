# CloudWatch Logs Insights

One of the best reasons to use Speedrun is to run CloudWatch Insights queries.  To do this you need config somewhere that defines the `account`, `role`, `logGroups` and optional `start` and `end`.  Use the built-in [CWLInsights template](https://github.com/No-Backspace-Crew/Speedrun/wiki/Templates#cwlinsights).

> **💡 Tip**
> Click the Code tab to see the underlying Markdown for an entry.  Click the ![copy](https://user-images.githubusercontent.com/97474956/201821050-e1acc9f6-d41f-4485-9616-0b694f211d4e.svg) icon to copy the underlying Markdown to the clipboard.

Here, we make a query that looks back 2 hours for a particular request id.

```
#CWLInsights {start:-7200}
filter requestId='~~~Request Id~~~' |
order by @timestamp asc
```

If you want to display a dropdown of the last 5 time intervals use the built-in [CWLInsightsSRTimestamp template](https://github.com/No-Backspace-Crew/Speedrun/wiki/Templates#cwlinsightssrtimestamp).  Don't specify `start` time unless you want to suppress showing the last 5 time intervals dropdown.

```
#CWLInsightsSRTimestamp
filter requestId='~~~Request Id~~~' |
order by @timestamp asc
```

Since these are built-in templates, you don't need to define them yourself, if you are curious how they are built, this would be the code you would put in your `templates` section of the `#srConfig`. They were built by parameterizing the CloudWatch Insight URL and reverse engineering the encoding format for the parameters.

```
CWLInsights: {
  type : "federate",
  value : "cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail$3D$257E$2528end$257E0$257Estart$257E${typeof start === 'undefined' ? '-3600' : start}$257EtimeType$257E$2527RELATIVE$257Eunit$257E$2527seconds$257EeditorString$257E$2527${encodeCloudWatchInsightsParam(content)}$257EisLiveTail$257Efalse$257Esource$257E$2528${encodeCloudWatchURL(prepend(`~'`,arrayify(logGroups).map(x => encodeCloudWatchInsightsParam(x))).join(''))}$2529$2529"
},
CWLInsightsSRTimestamp: {
  type : "federate",
  value : "cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail$3D$257E$2528${srTimestamp()}$257EeditorString$257E$2527${encodeCloudWatchInsightsParam(content)}$257EisLiveTail$257Efalse$257Esource$257E$2528${encodeCloudWatchURL(prepend(`~'`,arrayify(logGroups).map(x => encodeCloudWatchInsightsParam(x))).join(''))}$2529$2529"
}
```

```
#srConfig
{
  role: 'ReadOnly', //you can leave off the speerun- prefix and it will prepend it for you
  services:
  {
    WingWalker: {
      logGroups: 'wingwalker-${region}',
      regions: {
        'us-west-2' : {
           account:-111111111111 //at the minimum you need an account and role to be able to federate into the console
          },
        'us-east-2' : {
          account:-222222222222 //demo accounts start with -, the script will throw an error instead of attempting to federate into the account
        }
      }
    }
  },
  srHideUserService: true, //this is to suppress your personal service in the dropdown and is not normally necessary
  srShowConfig: true //this is to always show this config and is not normally necessary
}

```

[Return to Cookbook](https://github.com/No-Backspace-Crew/Speedrun/wiki/Cookbook)
