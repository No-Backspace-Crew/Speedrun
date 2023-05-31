[Return to Page 2 (Setting the stage)](a-better-README-2.md)

## Setting the stage (Cont'd)

### Adding variables and using JavaScript

You can add your own variables to the configuration and use JavaScript to resolve them.  Let's add a `logGroup` variable that is made up of a prefix and the stage.  We'll define it at the service level so it's available to all stages.

```
#srConfig
{
  role : "ReadOnly",
  services : {
    TicketService : {
       logGroup : "/aws/lambda/${service.toLowerCase()}-${srRegionName.substring(srRegionName.lastIndexOf('-')+2).toLowerCase()}",
       regions: {
         "us-west-2 - Prod" : {
            "account" : "11111111111"
         },
         "us-west-2 - Beta" : {
            "account" : "22222222222"
         }
       }
     }
  },
  srShowConfig: true,
  srHideUserService: true
}
```

Now when you pick a stage, the `logGroup` will be set to `/aws/lambda/ticketservice-prod` or `/aws/lambda/ticketservice-beta` depending on which stage you pick.

> 💡 Tip Use the Debug tab on a block to see what the variables are currently set to.

```
#copy
//Click the Debug tab above to see all variables
${region}
${account}
${role}
${logGroup}
```

### Getting AWS credentials

If you're using AWS, the config above can get you AWS credentials in a role.  You can use `#copy.withCreds` to get command line credentials.  Maybe you want to add the commands to deploy your [CDK](https://docs.aws.amazon.com/cdk/latest/guide/getting_started.html) stack.  Notice how we override the role for this block to `Deployment` otherwise it would be set to the page config of `ReadOnly`.

```
#copy.withCreds {role:'Deployment'}
cdk deploy
```

If you instead want to federate into the AWS console, use the `#federate` template.  The toolbar gives you quick access, but if you want to go to a specific place, using the federate template and provide the console path.

```
#federate
cloudwatch/home?region=${region}#logsV2:log-groups/log-group/${encodeCloudWatchURL(logGroup)}
```

There's already a [template](https://github.com/No-Backspace-Crew/Speedrun/wiki/Templates) to do this, so you can do the same thing with `#CloudWatchLogs`:

```
#CloudWatchLogs
```
### Advanced configuration
You can put your configuration in a central location and transclude it so you don't need to embed it on each page.  You can also use composition to overlay multiple configurations allowing you to override variables. Read more [here](https://github.com/No-Backspace-Crew/Speedrun/wiki/Speedrun-Configuration).

## Federation links
Federation links work for authorized users whether they have Speedrun installed or not.  They allow you to get credentials in a role and federate to a specific location in the AWS console.  This is perfect for sharing links with peers or accessing the AWS console from your mobile device.  I use deep links to review my CloudWatch daily analytics dashboard on my phone.  To build a federation link, just click the Speedrun icon in the AWS console toolbar.

![Toolbar](https://user-images.githubusercontent.com/97474956/220422715-5ac37c8d-fe43-409e-8e76-a76b17873897.png)

## Magic Copy
Magic copy allows you to copy any inline code block to the clipboard with a click.  `No highlighting required!`

![Magic Copy](https://user-images.githubusercontent.com/97474956/233499060-b99da96a-4a13-416a-bd26-610467c685dd.gif)

## IFrames

You can embed any web page in a Speedrun page using iFrames.  Perhaps you want to add a YouTube video or CloudWatch Dashboard.  Use the [`#iframe`](https://github.com/No-Backspace-Crew/Speedrun/wiki/Templates#iframe) template or one of the builtin ones like `#!YouTube`.

```
#!YouTube
LXboNl2vWH8
```

## Conclusion
With Speedrun, you can do a lot more in your GitHub markdown.  This blog only scratches the surface.  Refer to the [documentation](https://github.com/No-Backspace-Crew/Speedrun/wiki) and [cookbooks](https://github.com/No-Backspace-Crew/Speedrun/wiki/cookbook) for more examples.  I'd love to hear your feedback! Join our <a href="https://d%69sc%6Frd.gg/E7TRpqb%58RY">Discord</a> to get help, get and share tips and see release notes.

[Return to Page 1 (Building Command Lines)](a-better-README-1.md)
