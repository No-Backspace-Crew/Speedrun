## Setting the stage

### Configuration via srConfig
Your project starts small with just you using it. As it grows you'll want to start introducing stages so you aren't testing in production.  Speedrun lets you pivot between stages for each page using a toolbar.  You do this by embedding `#srConfig` into a page.
This example shows you how you would configure two stages for the `Ticket Service` both in `us-west-2`, but with different AWS accounts.  The `role` has been set globally to 'ReadOnly'.

```
#srConfig
{
  role : "ReadOnly",
  services : {
    TicketService : {
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

> 💡 Tip Use the Debug tab on a block to see what the variables are currently set to.

```
#copy
//Click the Debug tab above to see all variables
${region}
${account}
${role}
```

[Continue to Page 3](a-better-README-3.md) [Return to Page 1](a-better-README-1.md)
