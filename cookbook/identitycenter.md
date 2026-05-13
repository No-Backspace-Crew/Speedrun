# Using Identity Center as a credentials broker

If you'd like to configure Speedrun to use [Identity Center](https://aws.amazon.com/about-aws/whats-new/2024/04/aws-iam-identity-center-shortcut-links-aws-access-portal/) as a credentials broker note these points:

1. Getting CLI creds embeds the credentials in the command that is copied to the clipboard.
2. Full Identity Center support requires [Speedrun v1.119](https://speedrun.nobackspacecrew.com/userscripts/Speedrun.user.js) or later.

## Switching to the Identity Center credentials broker

To use the Identity Center credentials broker, click the gear icon in the Speedrun toolbar to enter settings.  Then change the **Credentials Broker** to Identity Center (Experimental).  You can set the default permission set for your personal account. Setting this will configure what permission set to use when you select your GitHub username in the dropdowns.  The screenshot below shows the necessary fields to configure Identity Center.

![Necessary settings for Identity Center](https://github.com/No-Backspace-Crew/Speedrun/assets/97474956/747f5b07-9775-4164-8546-2f05af60ccfb)

Alternatively if you set the variable `ssoStartUrl` anywhere in your `#srConfig`, it will override this setting.  If you are configuring pages for your team include something like this on your page.

````
#copy
```
#srConfig
{
  ssoStartUrl: '~~~SSO start url~~~'
}
```
````

Once you've configured Identity Center, a new button will appear on the toolbar to refresh Identity Center Configuration. Click this button to authenticate with Identity Center and load all of your accounts and permission sets. These values are cached in local storage and drive the Speedrun dropdowns. If you obtain new permissions or access to new accounts, click this button again to refresh your configuration for the dropdowns.

<img width="405" height="114" alt="image" src="https://github.com/user-attachments/assets/1c4a682e-5b45-40ff-b074-07458cf5857b" />


>[!TIP]
>Identity Center sessions expire after 8 hours.  If you would prefer not to authenticate so often, your Identity Center administrator can extend your session duration to last up to 90 days by following [these instructions](https://docs.aws.amazon.com/singlesignon/latest/userguide/user-interactive-sessions.html).

## Configuration

### Automatic configuration generation
If you don't want to build your Speedrun configuration by hand, use this helper to have Speedrun generate a config that includes all of your accounts and permission sets for you.

```
#buildConfig
~~~ssoStartUrl=Identity Center Url {label:"Identity Center Start Url", placeholder:'https://your_subdomain.awsapps.com', pattern:'https:\\/\\/[a-z0-9\\-]+\\.awsapps\\.com(\\/(start(\\/)?))?'}~~~
```

### Manual configuration creation

Instead of configuring a `role` you need to provide an `account` and `permSet` in your [configuration](https://github.com/No-Backspace-Crew/Speedrun/wiki/Speedrun-Configuration).

````
```
#srConfig
{
    services : {
        MiddleOutService : {
            regions : {
                "us-west-2 - Beta" : {
                    "permSet" : "middleout-beta",
                    "account" : "11111111111"
                },
                "us-west-2 - Prod" : {
                    "permSet" : "middleout-prod",
                    "account" : "222222222222"
                }
            }
        }
    }
}
```
````

You can define the `permSet` at a higher level and use JavaScript if you want to generate it.

````
```
#srConfig
{
    services : {
        MiddleOutService : {
            permSet: "middleout-${srRegionName.split(' - ')[1].toLowerCase()}",
            regions: {
                "us-west-2 - Beta" : {
                   "account" : "111111111111"
                },
                "us-west-2 - Prod" : {
                   "account" : "222222222222"
                }
            }
        },
        PiedPiperFrontendService : {
            permSet: "frontend-${srRegionName.split(' - ')[1].toLowerCase()}",
            regions : {
                "us-west-2 - Beta" : {
                   "account" : "333333333333"
                },
                "us-west-2 - Prod" : {
                   "account" : "444444444444"
                }
            }
        }
    }
}
```
````
[Return to Cookbook](https://github.com/No-Backspace-Crew/Speedrun/wiki/Cookbook)
