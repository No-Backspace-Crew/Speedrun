# Using iframes

Use iframes to embed third party content into your documentation. You can embed things like:

1. [CloudWatch Dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html)
2. YouTube videos
3. CodePens

No configuration is necessary to embed iframes on your page unless you want to dynamically change the content based on what you've selected in the toolbar.

## YouTube Video

### Video based on Configuration
This uses the built-in `#!YouTube` template.  Use the toolbar to select the service and change the video.  The body is set to the video id.

```
#!YouTube
${video}
```

### Video based on Prompts
This uses the built-in `#!YouTube` template.  This shows a prompt to select the video.  Click the Load button to load the video.

```
#!YouTube {title:'Speedrun Demo'}
~~~Video {type:'select',options:{'Ricky A.':'dQw4w9WgXcQ','CEO Demo':'fu_MC0rujXw'},default:'fu_MC0rujXw'}~~~
```

## CodePen

This uses the raw `#iframe` template.  It overrides the `height` to `300`, and sets the body to the full `src` for the `iframe`.  The `title` sets the title of the `iframe`.

```
#iframe {title:'Confetti Button', height:300}
https://codepen.io/marcobiedermann/embed/ExvvyLQ?default-tab=html%2Cresult
```

## Cloudwatch Dashboard

> **:exclamation: Alert**
> Unfortunately, AWS appears to have added a x-frames-option DENY to their dashboards blocking embedding so this is not currently working.  I've [reached out](https://repost.aws/questions/QUoBjvddKbRze4_xjTyY-Uzw/regression-in-cloudwatch-dashboard-iframe-embed-stopped-working)

This is a public cloudwatch dashboard.  It uses the built-in template `#!CWDashboard` and specifies the `dashboardName`.  Set the body to the `context` from the dashboard url.

```
#!CWDashboard {dashboardName:'LambdaStats'}
eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTIwNTM0ODk2MzE4NSIsIlUiOiJ1cy1lYXN0LTFfUmt2d0hPZlV1IiwiQyI6IjdwZGVzZ2dmZ2VhczVsamwxZDVmdXBqcGFzIiwiSSI6InVzLWVhc3QtMTphYTgzYmZlMy1jODdlLTQyMDItYjZjZS1lZjZkMTIwZDIyOTciLCJPIjoiYXJuOmF3czppYW06OjIwNTM0ODk2MzE4NTpyb2xlL3NlcnZpY2Utcm9sZS9DV0RCU2hhcmluZy1QdWJsaWNSZWFkT25seUFjY2Vzcy1ZUVVVN09CRCIsIk0iOiJQdWJsaWMifQ%3D%3D
```

## Configuration
```
#srConfig
{
  services:
  {
    BagOfClicks: {
      video: '0Q78T51rqt0'
    },
    GreatScott: {
      video: 'LXboNl2vWH8'
    }
  },
  srShowConfig: true,
  srHideUserService: true
}

```

[Return to Cookbook](https://github.com/No-Backspace-Crew/Speedrun/wiki/Cookbook)
