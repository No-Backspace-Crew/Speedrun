## Building command lines

Let's start with one of the most quintessential tools, [curl](https://github.com/curl/curl). The simplest `curl` command fetches the html for a site.  We'll use Speedrun to prompt for the url.  The prompt syntax is `~~~Prompt Text~~~`.  


```
#copy
curl ~~~Url~~~
```


When you click the **Copy** button, it will prompt you for the `Url`.  Once you're ready, click **Ok** to copy the command line to your clipboard.


### Setting a default value

You can customize the prompt by setting parameters using [json5](https://json5.org/) syntax.  This is the same as above, but with a default value.


```
#copy
curl ~~~Url {default:'ifconfig.me'}~~~
```


When you click the **Copy** button, it will prompt you for the `Url`. Notice how it pre-fills the value with what you entered last time you set a `Url`, or the default value if you haven't set a `Url` before.  This is so you always pick up where you left off.  Click the button to the right to reset the value to the default.

Again, clicking the **Ok** button will copy the command line to your clipboard.

### Downloading a file

Downloading a file requires you to set both a `Url` and a `filename`.  Here we'll assign the url to a variable `url` and try and extract the filename from it using JavaScript with the `${}` syntax.  If the `Url` doesn't end with something with a file extension, it will default to `output`.  Notice how even though we define `url` after attempting to extract the filename it still works.  This is because variables are resolved at runtime and order doesn't matter.


```
#copy
curl -o ${/\.\w{1,4}$/.test(url)?url.substring(url.lastIndexOf('/')+1):'output'} ~~~url=URL~~~
```


### Advanced example

The tool [imaginAIry](https://github.com/brycedrennan/imaginAIry) can be used to generate AI images.  If you look at the README you'll find an intense command line to mask part of an image and generate a new image.  That command looks like this:

```
imagine \
    --init-image pearl_earring.jpg \
    --mask-prompt "face AND NOT (bandana OR hair OR blue fabric){*6}" \
    --mask-mode keep \
    --init-image-strength .2 \
    --fix-faces \
    "a modern female president" "a female robot" "a female doctor" "a female firefighter"
```

Let's wrap it for ease of use and give it default values and a few prompts with dropdowns:

```
#copy
imagine \
    --init-image ~~~Image File {default:'pearl_earring.jpg'}~~~ \
    -r ~~~Number of Images {type:'select', options:['1','5','10']}~~~ \
    --mask-prompt "~~~Mask {default:'face AND NOT (bandana OR hair OR blue fabric){*6}'}~~~" \
    --mask-mode keep \
    --init-image-strength .2 --steps ~~~Steps {type:'select', options:['15','20','30']}~~~ \
    "~~~Customization {default:'a modern female president'}~~~"
```
