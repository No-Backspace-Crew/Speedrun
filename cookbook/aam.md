# Using Account Access Manager as a credentials broker

If you'd like to configure Speedrun to use [Account Access Manager](https://docs.aws.amazon.com/IAM/latest/UserGuide/account-access-manager.html) as a credentials broker note these points:

1. Getting CLI creds embeds the credentials in the command that is copied to the clipboard.
2. Full Account Access Manager support requires [Speedrun v1.166](https://speedrun.nobackspacecrew.com/userscripts/Speedrun.user.js) or later.

## Switching to the Account Access Manager credentials broker

To use the Account Access Manager credentials broker, click the gear icon in the Speedrun toolbar to enter settings. Then change the **Credentials Broker** to Account Access Manager (Experimental), and set your **Account Access Manager Url** and default **Role** for your personal account. Setting this will configure what role to use when you select your GitHub username in the dropdowns.

<img width="646" height="800" alt="SCR-20261111-icaa" src="https://github.com/user-attachments/assets/8858c81c-1a1e-4c27-8a5e-3c7d7a6beb6f" />

Alternatively if you set the variable `aamUrl` anywhere in your `#srConfig`, it will override this setting. If you are configuring pages for your team include something like this on your page.

````
#copy
```
#srConfig
{
  aamUrl: '~~~Account Access Manager url~~~'
}
```
````

Once you've configured Account Access Manager, a new button will appear on the toolbar to refresh AAM Configuration. Click this button to authenticate with Account Access Manager and load all of your accounts and roles. These values are cached in local storage and drive the Speedrun dropdowns. If you obtain new roles or access to new accounts, click this button again to refresh your configuration for the dropdowns.

## Configuration

### Disabling Dynamic Loading of Account Access Manager Configuration
If you don't like the dropdown layout of dynamic configuration or need to enable additional regions add `dynamicAAMConfig: false` to your `#srConfig` and use the guidance below to manually create the srConfig configuration necessary to drive your Speedrun dropdowns.

### Automatic configuration generation
If you don't want to build your Speedrun configuration by hand, use this helper to have Speedrun generate a config that includes all of your accounts and roles for you.

```
#buildConfig
~~~aamUrl=Account Access Manager Url {label:"Account Access Manager Url", placeholder:'https://your_tenant.account-access.us-east-1.app.aws', pattern:'https:\\/\\/[a-z0-9\\-]+\\.account-access\\.[a-z0-9\\-]+\\.app\\.aws(\\/(console(\\/)?)?)?'}~~~
```

### Manual configuration creation

Provide an `account` and `role` in your [configuration](https://github.com/No-Backspace-Crew/Speedrun/wiki/Speedrun-Configuration).

````
```
#srConfig
{
    aamUrl: "https://your_tenant.account-access.us-east-1.app.aws",
    services : {
        MiddleOutService : {
            regions : {
                "us-west-2 - Beta" : {
                    "role" : "middleout-beta",
                    "account" : "111111111111"
                },
                "us-west-2 - Prod" : {
                    "role" : "middleout-prod",
                    "account" : "222222222222"
                }
            }
        }
    }
}
```
````

You can define the `role` at a higher level and use JavaScript if you want to generate it.

````
```
#srConfig
{
    aamUrl: "https://your_tenant.account-access.us-east-1.app.aws",
    services : {
        MiddleOutService : {
            role: "middleout-${srRegionName.split(' - ')[1].toLowerCase()}",
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
            role: "frontend-${srRegionName.split(' - ')[1].toLowerCase()}",
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
