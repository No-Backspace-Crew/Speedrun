# Using Identity Center as a credentials broker

If you'd like to configure Speedrun to use [Identity Center](https://aws.amazon.com/about-aws/whats-new/2024/04/aws-iam-identity-center-shortcut-links-aws-access-portal/) as a credentials broker make sure you understand the limitations.

1. Only federation into the AWS console works.  It does not work for invoking a lambda or a step function directly from your markdown or for getting credentials for the command line.
3. It does support 1-click deeplinks.

## Switching to the Identity Center credentials broker

To use the Identity Center credentials broker, click the gear icon in the Speedrun toolbar to enter settings.  Then change the **Credentials Broker** to Identity Center (Experimental).  You can set the default permission set for your personal account. Setting this will configure what permission set to use when you use select your GitHub username in the dropdowns.  The screenshot below shows the the necessary fields to configure Identity Center.

![Necessary settings for Identity Center](https://github.com/No-Backspace-Crew/Speedrun/assets/97474956/747f5b07-9775-4164-8546-2f05af60ccfb)

## Configuration

Instead of configuring a `role` you need to provide an `account` and `permSet` in your [configuration](https://github.com/No-Backspace-Crew/Speedrun/wiki/Speedrun-Configuration).

````
```
#srConfig
{
    services : {
        MiddleOutService : {
            regions : {
                "us-west-2 - Beta" : {
                    "permSet" : "middleout-beta"
                },
                "us-west-2 - Prod" : {
                    "permSet" : "middleout-prod"
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
