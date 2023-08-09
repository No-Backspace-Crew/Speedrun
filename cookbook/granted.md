# Using Granted as a credentials broker
> ⚠️ **Alert**
> This page requires Speedrun v1.79 or higher to render correctly, check the installed version by hovering over the question mark (❔) in the toolbar.

If you'd like to configure Speedrun to use [Granted](https://granted.dev) as a credentials broker to build `assume` commands make sure you understand the limitations.

1. Only federation into the AWS console and getting credentials for the command line work.  It does not work for invoking a lambda or a step function directly from your markdown.
2. Federation to the console requires you to paste the command into your terminal instead of being done via http redirects.

## Switching to the Granted credentials broker

To use the Granted credentials broker, click the gear icon in the Speedrun toolbar to enter settings.  Then change the **Credentials Broker** to Granted (Experimental).  You can optionally set the default profile for your personal account. Setting this will configure what profile to use when you use select your GitHub username in the dropdowns.

<img width="779" alt="Granted Configuration" src="https://github.com/No-Backspace-Crew/Speedrun/assets/97474956/b5dda28d-c4a5-48bc-a61a-d3412773ce8a">


## Configuration

Instead of configuring a `role` and `account` you need to provide a `profile` in your [configuration](https://github.com/No-Backspace-Crew/Speedrun/wiki/Speedrun-Configuration).

````
```
#srConfig
{
    services : {
        MiddleOutService : {
            regions : {
                "us-west-2 - Beta" : {
                    "profile" : "middleout-beta"
                },
                "us-west-2 - Prod" : {
                    "profile" : "middleout-prod"
                }
            }
        }
    }
}
```
````

You can define the profile at a higher level and use JavaScript if you like to generate it.

````
```
#srConfig
{
    services : {
        MiddleOutService : {
            profile: "middleout-${srRegionName.split(' - ')[1].toLowerCase()}",
            regions: {
                "us-west-2 - Beta" : {
                },
                "us-west-2 - Prod" : {
                }
            }
        },
        PiedPiperFrontendService : {
            profile: "frontend-${srRegionName.split(' - ')[1].toLowerCase()}",
            regions : {
                "us-west-2 - Beta" : {
                },
                "us-west-2 - Prod" : {
                }
            }
        }
    }
}
```
````
[Return to Cookbook](https://github.com/No-Backspace-Crew/Speedrun/wiki/Cookbook)
