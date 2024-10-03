
````
#NewGitHubWiki {org:'${user}',repo:'${user}',title:'Speedrun Escape Room Challenge', stripComments:false, prompts:false}

![Fake Keanu and Sandra](https://daerty.com/assets/speedrun.png)

# Background

A terrorist has wired a bomb to your bus.  You can't slow down below 50 mph or it will blow up.  You have 60 minutes to diffuse the bomb.  All you have is [this website](https://www.daerty.com) and some broken speedrun blocks.

# Challenge 1
```
#!lambda {functionName:'FIXME'}
// TODO build json body
```
<details>

<summary>Hints</summary>

1. This is how you [run javascript](https://github.com/No-Backspace-Crew/Speedrun/wiki/Getting-Started#running-javascript)
2. You have access to a [few javascript helpers and libraries](https://github.com/No-Backspace-Crew/Speedrun/wiki/Using-JavaScript#functions)

</details>

# Challenge 2
```
#DDBItem {tableName:'FIXME'}
// TODO user prompt for partitionKey
```
<details>

<summary>Hints</summary>

1. When you prompt for something you can [assign it to a variable](https://github.com/No-Backspace-Crew/Speedrun/wiki/Prompts#assigning-a-prompt-to-a-variable).

</details>

# Challenge 3

```
#CWLInsights {logGroups:'FIXME'}
// TODO prompt user for id
filter strcontains(@message,'')
```

# Challenge 4
```
#copy.withCreds {role:'FIXME'}
// TODO Use aws s3 cp to get the file
```

<details>

<summary>Hints</summary>

1. To get credentials in the command line, you need to install and run [`srinit`](https://github.com/No-Backspace-Crew/Speedrun/wiki/Getting-Started#install-srinit) to authenticate. If you don't have a linux/mac/WSL box, use CloudShell in a private window in a personal AWS account.

</details>

# Challenge 5
<details>

<summary>Hints</summary>

1. You can create a one-click federation link [like this](https://github.com/No-Backspace-Crew/Speedrun/wiki/Federation-Links#automatically-building-the-link)

</details>

```
#srConfig
{
  role: '${user=="deeheber"?"speedrun-escape":"speedrun-escape-participant"}',
  services: {
     EscapeRoom: {
        regions: {
          'us-west-2': { account: '361769586799'}
        }
     }
  }
}
```
````
