#CloudWatch Logs Insights

One of the best use-cases to use Speedrun is to build CloudWatch Insights queries.  To do this you need config somewhere that defines the `account`, `role`, `logGroups` and optional `start` and `end`.  Use the built-in [CWLInsights template](https://github.com/No-Backspace-Crew/Speedrun/wiki/Templates#cwlinsights).

Here, we make a query that looks back 2 hours for a particular request id.

```
#CWLInsights {start:-7200}
filter requestId='~~~RequestId~~~' |
order by @timestamp asc
```

```
#srConfig
{
  role: 'ReadOnly',
  services:
  {
    WingWalker: {
      logGroups: 'wingwalker-${region}',
      regions: {
        'us-west-2' : {
           account:-111111111111 //at the minimum you need an account and role to be able to get federate
          },
        'us-east-2' : {
          account:-222222222222
        }
      }
    }
  },
  srHideUserService: true,
  srShowConfig: true
}
```

[Return to Cookbook](https://github.com/No-Backspace-Crew/Speedrun/wiki/Cookbook)
