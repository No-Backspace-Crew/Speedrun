// ==UserScript==
// @name         Speedrun
// @namespace    http://www.nobackspacecrew.com/
// @version      0.02
// @description  Table Flip Dev Ops
// @author       No Backspace Crew
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// @require      https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js
// @resource     select2css https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css
// @require      https://unpkg.com/dayjs@1.10.8/dayjs.min.js
// @require      https://unpkg.com/dayjs@1.10.8/plugin/utc.js
// @require      https://unpkg.com/dayjs@1.10.8/plugin/duration.js
// @require      https://unpkg.com/dayjs@1.10.8/plugin/relativeTime.js
// @require      https://unpkg.com/xregexp/xregexp-all.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_info
// @grant        GM_cookie
// @grant        window.onurlchange
// @match        https://github.com/*
// @match        https://www.github.com/*
// @match        https://*.console.aws.amazon.com/*
// @match        https://console.aws.amazon.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE90lEQVR4Xu1aaWxNQRhtSxGCltYrtWtDlaapNRpiiWhoiV2CH0hFIoQ0EiQiQprYYkkImvADEVFELCG1BaWx1E5qi63hKWnsamnJNz2N+frmzX333Zc85t0/c+feud+bOed8y5t7w8MMP8INX39YCICQAgxHIOQCwSqAuZ07V3mb28aSEkfIc8RIIEA0FgAsfHFMjIRr89Tn1H93oy21uW/fUuuvEoJOAcYCoFo4d6+mkx/Rpfe7ExxRQtAoIARAddQfGt2QmC0o/yKRj+sZPYTv/0z+LikhrrDQFpm2Hgpk1DcWgMwBCZT3kypTCd9J3dzUPiv4Su3Zuh+p5UoAGTknhXJwP6vouiVyLQ0KBOPc5n8HQFqPscRoC5eI1sePrfQItmrhLbtE03OxSfUkrHLm3paY7lVHMH/ll4gZiB1W64OAKcA4APiC76dOl5hLurGd+m/cIo8XX9tP4KsUkDLaReMimk0Rbc9R1M6YMJPa5q/Kqa0oE4rAYZV5jHdMAcYCoFp4SofGAuTLxRJD6PwoPU+nUESrRjepv21MV2rh+1AAN+IuFIpaly9ixOoL+bbItPXQ35MxHgD48KG1awiXEUsvSWSBYWQDj3L4czEyvj/dqiqZR+2yri2pTZ2R4/GRhfN3+cU8jPqtAGMB4AuHTwLZzJ2RdIpoj+twGfTj06bR6a3YRGpTyh56VALqAqs+j/m1cA0ie9v35Xkk27YCQgBU1+6I2mB05oF7dHrk3COv4EIJUEBY7zTJ1wf3FTFg/Z4HkjIO52V6tQtiMC9XuqhHslcd9agEvxVgLADTx2dTrf/GfUZizirzyAqoGGvqhmprI6Ou0tmnLlmWlKBiHrFJpUzbCjAegNkDFpAChpTKCjgVL6LupnOrPYIL3383LFf4NipGSUf6TumWOdIgHku2fp5F93UxybYCjAPgQKee0puafnH1vdJ08XUF3R/z+CqBrC2ZuTX2H6KmTuCKwThkkep+afEOssjrEP4zlhVgLABYOGccDN+tSCJQk+vfpzYrQ+zl4Q0Oxq2IakfXa1V+CkZ5vucVZK0Y4iPzUIJWAcYD8Do9XfL9vGcdCbwlL3d6BG9566k0fmADsZub6HpF7fBvcZL7cSXgJv4LQAGwx333oEt+b4D7Op/3OQYYCwCXPo/qHEneVykBdjCexwZE7w3vhcC6J4tdZX6cvnNSuoRso5uXZQUYDwCXvq8KANJWlYDxuvoC3wlgPN4R1r0r9gYPHxe7yVYVocwCxgMAF0Be9xVZ7mvnE8ZJ2QTZgX/5gSyDukLFJJ8flBDRTXxZErH3A7WRm154TfXKm8YDAAa/bnYRc/AxVHi+vo/ngPJKERWlqr5QRXedEsoXRdGjqvlqK0HjAfgxuw0poHJiE8m3wAhnEvsB2CdAVOe+/tAt9vwQC+xmGcxDpQR8S2RbAcYDAIQ5EJV3xLc6OBAjuK8WnehDl8qqnlKLqI76ANEeSrGrBK4AzEOXvbQxIAQAoxQFEr7X49kBw60y6ZQSYCe73RNpxrpsZVkBsGo8ANzHneqrlLC8Tj/6CdUus4p5qwr0WQFOLZjbMR4AAKKLCagYMR4+3yBGfF+AfQK//w0GimmdXeMBUCkhNrw93ULliHGoMHX5XgV80MQAXUwwDgAOiN1XcTqXC1oFhADQUefQ/X9GAQ6tt5aZEACBQvZfsfsbh8EmfXZLs6IAAAAASUVORK5CYIIA
// ==/UserScript==
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFRklEQVR4Xu1aa2hURxRejVF8FI2JWWOK+IiNebBdotVCbcGCGDStREkpWBAVpX+UlvwpUhChCD5Kiz9KW0HBtrQQNfiKlhQimuALVxvTyFZLqxjtmqRJ0VSiRivn3G9xTu7Nnb27C4lz98/ZuXfm7J3v+86ZM3N3WMDwzzDD5x/wAfAVYDgCfggMVgFsLCx8OtCz7YpGU0JeSpykA0RjAcDEN+XkKLhmh29Su/PyVLJbOzrIJquEQacAYwFwmrgMr/Err9Olf38oSIkSBo0CfACsrL8oawwxW9/1n0I+rpfP4dh/XPJQUcLkpiZPZHoalM6sbywAFW8V0Lpf9CRM+L5fGiN7o/4B2ZMj7pGVSgAZ1b+wcnD/nbOXtMjV6pQOxqXPFw6AsjkriNHcIGfrE3XbbMF2mnje7CwaN6lopIJV9cYrCtOvZTDzF/o4ZyB36NYHaVOAcQDICV8Nr1GYK7q8h9p3Y7yORy4eIPCdFBCqDFK/4RM/YDt3Gdm1760nm32ni2xvOysCH13m0T9lCjAWAKeJh6a/xCCfjygMofGo7TR9hSKmjP2V2t8uLyaL2IcCpJNYEyvqi/2cI3Y07vdEpqdBzz+M8QAghg99vpNwWbr5jEIWGMZqYCuHZxcz89+kW0+jH5HdUpxHNry22nbIJx9/nxTzcJq0AowFQE4cMQlkK77LpK/I9riOkEE7v2w1fW2eNItsqP2arRJQF+jGPJ4vN7iQ/O2p2W1LtmcF+ABYtTuyNhhdf7CVvh49dX1AcKEEKCAwr0yJ9bdf5xzw5Y+/K8o4srtiQL8gBs8VfIPrkXXbj9kqIWkFGAvAmqp1VOvfjTUozOkyj1UBFWO8blC8BQK6SnBiHrnJSZmeFWA8AIIo7SZiv3PxVo5tVIzaHrhj29cblBEyl3zT8yHdd8tJnhWQ4PPGuw95ABBrmJFbzKOfa8ksERV7iHidIBWDflhFrHZbZC95lHWI/JmEFWAsAJj4gc9GKSCu+LSX2m5KkOu+G6NyvZcVZL8ckiDzmIS2AowFQE68MzKTwMsaeY5s1U+879dVAJCXewBcx17AreKTisB4t5hPOAcYC4CsrMA4EATzDdN4t1Xa3Ub23OE6Jazmv7uEKsaWCfkSfGoX/vYPWSgC2Tszn98HSH+2TpK46JgDjAUAE8eJTHGId2Otza+Q3dx6hyyYD5TyGR4+pY31tny0LFhE1zNmjbO9X7S3VrmO/tJfqhXRTwHGAoCJLwmVExOri2u0mA9W3Kd+HdHJZPuucRvMgUn02zBjFSvp+M9K/0ALnyNAUdlltxRFdEZeVvymSglxBfgAWCc8OEObG+SKr675BNnbPa+SjZZMVJhCTOcU/q0oAfThes1ofttb9YDf+MSOci6IKwWrhJVToIDamVxpOo1zUoJuyd5PAcYCAMbckEMFpquEhjC/8QGD8VxRe54VYNUP+P14vWApAbkDCqr8g5WZt+sqhpCFEpwKN+0TIeMBUGAdoKGrhMe3u8lL973ZZPss5lEBonaHP1SAWD2QC8ZN51Xm/p+ca7AqYPVY+BefTWK3ij0LpqCtAB8AXQSsflIJGZXzbD04MS87OykLSpDM9+zjNz69p0poz/Gkhf9F1vVwPtm0nwkaDwAYdGIOMSpj3k1obv6wepwsv6i4knsWt3MK7ROhZB/4hQfADSCv96USwPxXU/h/g067VTfm8TwpU4DXCbqNMx4AmWNQJ6yaOkPBDnsWXeaHjAJ8AESMyH9+4O10oswPOQXggY0HQALhlfkhqwAfALd1M8H7g74OSHA+CXf/HzCVTn1rk1w+AAAAAElFTkSuQmCC
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSIVBzsUcchQnSyIXzhqFYpQIdQKrTqYXPoFTRqSFBdHwbXg4Mdi1cHFWVcHV0EQ/ABxdHJSdJES/5cUWsR4cNyPd/ced+8AoVFhmtU1Bmi6baaTCTGbWxVDrxAQQgRTiMrMMuYkKQXf8XWPAF/v4jzL/9yfo0/NWwwIiMSzzDBt4g3i6U3b4LxPHGElWSU+Jx416YLEj1xXPH7jXHRZ4JkRM5OeJ44Qi8UOVjqYlUyNeJI4pmo65QtZj1XOW5y1So217slfGM7rK8tcpzmEJBaxBAkiFNRQRgU24rTqpFhI037Cxz/o+iVyKeQqg5FjAVVokF0/+B/87tYqTIx7SeEE0P3iOB/DQGgXaNYd5/vYcZonQPAZuNLb/moDmPkkvd7WYkdA/zZwcd3WlD3gcgeIPhmyKbtSkKZQKADvZ/RNOWDgFuhd83pr7eP0AchQV6kb4OAQGClS9rrPu3s6e/v3TKu/H3fjcqlkj24iAAADAFBMVEUAAAATExMjIyMzMzNDQ0NTU1NfX193d3eHh4eXl5ejo6Ovr6/Dw8PT09Pn5+f//+sPDw8bGxsnJyc7OztPT09bW1tra2t/f3+Li4ubm5urq6u7u7vPz8/b29vv7+////9HAABnAAB/AACXAACvAADDAADbAADzAAD/Fxf/Ly//U1P/Z2f3f3//k5P/p6f/v79XAABzAACLAACjAAC7AADPAADnAAD/AAD/IyP/Q0P/W1v/d3f/i4v/m5v/r6//09NfNwBzOwCHOwCfPwC3RwDPSwDnTwD/UwD/dwD/gwD7mwD/rwD/vwD/zwD/yyv/3zdHRwBfXwB3dwCLiwCjowC7uwDPzwDX1wDj4wD//wD//zP//2P//5P//7v//9///+sAKwAANwAARwAAUwAAXwAAZwAAdwAAhwAAkwAAnwAApwAAswAAvwAAywAA4wAA6wAAAH8AAI8AAK8AAMMAAMsAANsAAOcvL/9TU/9na/9/f/+Li/+Xl/+jo//Hz//b2/8rK1M3N2dDQ2tPT3dbW4NnZ49zc5t/f6eLi7OXl7+jo8uvr9e7u+PDw+vLy/PT0/szAC9TAE9nAGd3AHeLAIuXAJenAKe3ALfHAMfXANfnAOf/AP//S///a///g///o/9HHx9TKytfNzdrQ0N3T09/V1eLY2OXb2+nf3+zi4u/l5fPp6fbs7Pnv7/vv7/3z88AAAAAAABjMwBvOwCHSwCjUwCrVwCrXwC7exPLewDHj1cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS0cAU18AW1sAAAAAe3sAg4sAl5MAo6MAAAAAy8sA19cAAAAAAADn//8AAAAAAAAAAAAAAAAAAACjew+vhxPDmxvPpxfbsxvnvyMAAAAAAAAAAAAAAAAAAAAAbwAAfwCD4wA3/zer/wAAAMsAe//z8///48vnuyMAAAAAAAAAAAAAAAAAAAAAAADzq5P7r3f3y7/z37fjl3Pnk4f/x5fzv5//67P/59Pnp4P708//48v/26sAAAD///9G5hWUAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAMTYAAB7CAdkmZ0QAAAAHdElNRQfmAgcVKiXVXEASAAACsUlEQVRYw82Wy5KqMBCG2btT9lBFsXaXV8Ca11Sq2Lg/1U8FRbiY1fRPJ1wElaN46vTCCUn/H32Ljuf9ZxaGcZwkSsVxeL+tVJLwdrgaEL4FUMp58Eq02FLKgdxqFSC0kvWA8an1Ffk48GeIjwFJAs8kGfmO3XEQhsPxhoAkOZ0kbLcSOXfudPr5GSCnk7xDVnOAB4D3CuDdA6RG08g6MVv3gcmalk6ScXsW4L0NiON5O2NrSua6W87a54QfAyazgWBZkVGeF2x1WdZ1UeQ5ZUCoiefScCkLoBmALEAtT+RwqlQUxbHWANR12bIBoHUcR5E4yDvu83H054Ahyyd3MoqIekBZOgBRFK37WvsIgASyXl53BFtGRmRShVeA/v3GAkw9xPAQoMkCMiIy+858rRmhtS+Pez7JLIDfcadnvADYi/bOOkD/5PORADjIWQhFQbaAZn84+P6BzQqxxAZi6ApJRbGQRIEYAIBiNwPsBgBRsViGqooiG+vucBCAMUYAYMphFFWV9wrgLwD8FQDO32jtFKhaXtfkDxtaG0O0HkAdgNYCMEAVG/muazxQZclXud/Asev4EwC5rjuAJdALQJZhhG+3qjI8xG2LIWQAxhEPxlTV7YaRzrLvACjN4NG2DtFwQXNQTOPkcpiltFiBNJ0CTAdoUPkpIE2Xq3C5iM/12sfQ8CA1/fuvVwFcLss1WAI0rH8DEAQjhJMHwTuAzv4GcDwi0iCA5/EIJXOw2bYAYPOrAIyyA+DzCKkLXgAY5a8BMExVhWF2gE5p/7SobJ7jrj3+VfgYcD7LjXXNnAAQPuTn8xcBKKT8sEkpRwC5yESPC7gRQNKQdtr+oXjSvlfhbwRwaUhDO0Pz1oW/EWBIo7f14W8EQBq4Wvx9iv+QcH3Wh78RwEH+wN4RbwL4R/YLoP+dOpbJVRQAAAAASUVORK5CYII=

/* globals jQuery, $, _, dayjs, XRegExp */

//eval(Babel.transform((<><![CDATA[
(async function() {
    'use strict';
    let awsuserInfoCookieParsed = false;
    var sessionVariables = {};
    const STORAGE_NAMESPACE = 'SR:';
    const TIMESTAMPS_KEY = `${STORAGE_NAMESPACE}timestamps`
    dayjs.extend(window.dayjs_plugin_utc);
    dayjs.extend(window.dayjs_plugin_duration);
    dayjs.extend(window.dayjs_plugin_relativeTime);

    function addSpeedrunLink() {
        const ARN_REGEX = /^arn:aws:sts::(?<account>\d+):assumed-role\/(?<role>speedrun-\w+)\/\w+/
        if($('#awsc-navigation__more-menu--list')) {
            if(!$('#speedRunLink').length || !awsuserInfoCookieParsed) {
                GM_cookie('list', { name: 'aws-userInfo' }, (cookies) => {
                    awsuserInfoCookieParsed = true;
                    if(cookies && cookies.length) {
                        let userInfo = JSON.parse(unescape(cookies[0].value));
                        let result = ARN_REGEX.exec(userInfo.arn);
                        if(result) {
                            console.log('Adding speedrun link');
                            let [arn, account, role] = result;
                            let navBar = $('#awsc-navigation__more-menu--list');
                            let helpButton = navBar.first().find('button').first();
                            let srLink = helpButton.clone();
                            srLink.attr('id','speedRunLink');
                            srLink.attr('title',`Speedrun Link in account: ${account} with role: ${role}`);
                            srLink.html(`<img width="20" height="20" style="vertical-align:middle" src="${GM_info.script.icon}"/>`);
                            srLink.on('click',(event)=>{
                                let url = new URL('https://oynsydbhl3.execute-api.us-west-2.amazonaws.com/dev/v1/federate');
                                url.searchParams.append('role',arn.replace(':sts:',':iam:').replace(/:assumed-role\/(.*?)\/.*$/,':role/$1'));
                                url.searchParams.append('destination',window.location.href.replace(/\.com\/cloudwatch\/home/,'.com/cloudwatch/deeplink.js'));
                                let curHtml = srLink.html();
                                console.log('Speedrun link',url.toString());
                                GM_setClipboard(url.toString());
                                srLink.html('Copied!');
                                setTimeout(()=>{srLink.html(curHtml)}, 2000);

                            });
                            helpButton.after(srLink);
                        }
                    }
                });
            }
            return true;
        }
        return false;
    }

    function decodeCloudWatchURIComponent(s) {
        return decodeURIComponent(s.toUpperCase().replace(/(\$25|\*)/g,'%'));
    }

    function unescapeCloudwatch(s) {
        return unescape(unescape(s.replaceAll('$','%')));
    }

    function unescapeCloudwatchLogs(s) {
        let result = {};
        let unescaped = unescape(s.replaceAll('$','%'));
        if(unescaped.indexOf('?')>-1){
            let params = new URLSearchParams(unescape(s.replaceAll('$','%')).replace(/^.*\?/,''));
            params.forEach(function(value, key) {
                result[key] = isNaN(parseInt(value)) ? unescape(value) : +value;
            });
        }
        return result;
    }

    function unescapeCloudwatchQueryDetails(obj){
        if (_.isString(obj) && obj.includes('*')) {
            return decodeURIComponent(obj.replace(/\*/g,'%'));
        } else if(isDict(obj)){
            for (const [key, value] of Object.entries(obj)) {
                obj[key] = unescapeCloudwatchQueryDetails(value);
            }
        } else if(Array.isArray(obj)) {
            obj = obj.map(item => unescapeCloudwatchQueryDetails(item));
        }
        return obj;
    }

    function unescapeCloudwatchInsights(s) {
        //make ' into strings
        s = s.replaceAll(/'([^~\)]*)/g,"\"$1\"");
        //make =~();? into objects
        s = s.replaceAll(/.*?(\w+)=~\((\w.*)\)(;?)/g, '{"$1":{$2}}$3');
        s = s.replaceAll(/;(\w+)=(~[^~]+)/g, ';{"$2":$3}');
        let offset = s.indexOf('~(');
        while(offset>-1) {
            let matches = XRegExp.matchRecursive(s.substring(offset), '~\\(', '\\)');
            let toReplace = "~(" + matches[0] + ")";
            //if it is $((\w)+(.*)) make it {"$1":$2}
            let replacement = /^\w+/.test(matches[0]) ? `${matches[0].replace(/^(\w+)(.*)/,'{"$1":$2}')}` : `[${matches[0]}]`;
            s = s.replace(toReplace,replacement);
            offset = s.indexOf('~(',offset);
        }

        //make keys that prefix an array
        s = s.replaceAll(/(\w+)\[/g,'\"$1\":[');
        //make keys into keys
        s = s.replaceAll(/([~\[{])(\w+)~/g,"$1\"$2\":");
        //replace any remaining ~ with ,
        s = s.replaceAll('~',',');
        //replace straggling keys i.e. ,\w+{
        s = s.replaceAll(/(,)(\w+)([{\[])/g,'$1"$2":$3');
        //replace any leading commas i.e. {, or [,
        s = s.replaceAll(/([{\[:]),/g,'$1');
        //insert comma between things like [] "[ and }{
        s = s.replaceAll(/([}\]"])([{\[])/g,'$1,$2');
        let result = {};
        for(let seg of s.split(';')){
            try {
                $.extend(result, JSON.parse(seg));
            }catch(error) {
                console.log(error);
            }
        }
        return unescapeCloudwatchQueryDetails(result);
    }
    //console.log(unescapeCloudwatchLogs("#logsV2:log-groups/log-group/$252Faws$252Flambda$252Fserverless-api-sample-dev-serverless-api-sample/log-events/2022$252F04$252F14$252F$255B$2524LATEST$255Ddf1b3ad5025b42aeb659fc10468fe964$3Fstart$3D1650006000000$26end$3D1650092399000$26filterPattern$3Da$253Db"));
    //console.log(unescapeCloudwatchInsights(unescapeCloudwatch("#logsV2:logs-insights$3FqueryDetail$3D~(end~0~start~-3600~timeType~'RELATIVE~unit~'seconds~editorString~'~isLiveTail~false~queryId~'~source~(~'*2faws*2flambda*2fserverless-api-sample-dev-serverless-api-sample))")));
    //console.log(unescapeCloudwatchInsights(unescapeCloudwatch("#metricsV2:graph=~(view~'timeSeries~stacked~false~metrics~(~(~(expression~'SEARCH*28*27*7bAWS*2fApiGateway*2cApiName*7d*27*2c*20*27Average*27*2c*20300*29~id~'e1~period~300))~(~'AWS*2fApiGateway~'4XXError~'ApiName~'dev-serverless-api-sample~(id~'m1)))~region~'us-west-2~stat~'Average~period~300~start~'2022-04-14T20*3a13*3a00.988Z~end~'2022-04-14T20*3a26*3a00.741Z);query=~'*7bAWS*2fApiGateway*2cApiName*7d")));
    //console.log(unescapeCloudwatchInsights(unescapeCloudwatch("#metricsV2:graph=~(region~'us-east-1~metrics~(~(~'AWS*2fLambda~'Throttles~'FunctionName~'IsRecyclingWeek~(stat~'Sum)))~view~'timeSeries~stacked~false~start~'2022-04-19T20*3a41*3a00.000Z~end~'2022-04-19T21*3a22*3a00.000Z~period~60~annotations~(horizontal~(~(label~'Throttles*20*3e*200*20for*201*20datapoints*20within*201*20minute~value~0)))~title~'Lambda-Throttles)")));

    function getFormattedTimeUnit(relativeTimeInSeconds) {
        const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
        let mapping = [{month:relativeTimeInSeconds/30/24/3600},
                       {week:relativeTimeInSeconds/7/24/3600},
                       {day:relativeTimeInSeconds/24/3600},
                       {hour:relativeTimeInSeconds/3600},
                       {minute:relativeTimeInSeconds/60},
                       {second:relativeTimeInSeconds}];
        for(let i=0; i<mapping.length; i++) {
            let key = Object.keys(mapping[i])[0];
            let value = mapping[i][key];
            if(value <= -1 || value>= 1 || i==mapping.length-1){
                return rtf.format(value, key);
            }
        }
    }

    function getTimestampsPrompt() {
        let timestamps = GM_getValue(TIMESTAMPS_KEY,[]);
        let lastHour = { label: "last hour", type: "relative", start: "-3600", end:"0" };
        //If you have accessed a timestamp <= 1 hour ago, push last hour to end of list, otherwise put it on front
        if(timestamps.length && dayjs(timestamps[0].timestamp).diff(dayjs(),'hour') < 0) {
            timestamps.unshift(lastHour);
        } else {
            timestamps.push(lastHour);
        }
        let timestampsMap = {};
        timestamps.forEach((item) => {
            timestampsMap[item.label] = JSON.stringify(item);
        });
        return `~~~srTimestampValue=Time Interval {"type":"select","cast":"json","options":${JSON.stringify(timestampsMap)},"default":${JSON.stringify(timestampsMap[timestamps[0].label])},"suppress":true}~~~`;
    }

    function convertDuration(timestamp) {
        if((timestamp+"").includes('P')) {
            return (timestamp.startsWith("-") ? -1 : 1) * dayjs.duration(timestamp.replace("-","")).asSeconds();
        }
        return timestamp;
    }

    function extractCloudWatchTime() {
        if (!/^\/cloudwatch\/home/.test(window.location.pathname)) {
            return;
        }
        let obj;
        let hash = window.location.hash;
        let src = firstGroup(/#(\w+:\w+-?\w*)/, hash);
        switch(src) {
            case 'logsV2:log-groups':
                obj = unescapeCloudwatchLogs(hash);
                break;
            case 'logsV2:logs-insights':
            case 'metricsV2:graph':
                obj = unescapeCloudwatchInsights(unescapeCloudwatch(hash));
                break;
            default:
                return;
        }

        //unescape(unescape(s.replaceAll('$','%')))
        //#logsV2:log-groups/log-group/$252Faws$252Flambda$252Fserverless-api-sample-dev-serverless-api-sample/log-events/2022$252F04$252F14$252F$255B$2524LATEST$255D456616728e3e40d093af1981cbe2d8b1$3Fstart$3D1649228400000$26end$3D1649235600000
        //#logsV2:logs-insights$3FqueryDetail$3D~(end~0~start~-3600~timeType~'RELATIVE~unit~'seconds~editorString~'~isLiveTail~false~queryId~'~source~(~'*2faws*2flambda*2fserverless-api-sample-dev-serverless-api-sample))
        //#metricsV2:graph=~(region~'us-east-1~metrics~(~(~'AWS*2fLambda~'Throttles~'FunctionName~'IsRecyclingWeek~(stat~'Sum)))~view~'timeSeries~stacked~false~start~'2022-04-19T20*3a41*3a00.000Z~end~'2022-04-19T21*3a22*3a00.000Z~period~60~annotations~(horizontal~(~(label~'Throttles*20*3e*200*20for*201*20datapoints*20within*201*20minute~value~0)))~title~'Lambda-Throttles)
        let start = firstNonNull(nullSafe(obj.queryDetail).start,nullSafe(obj.graph).start);
        let end = firstNonNull(nullSafe(obj.queryDetail).end,nullSafe(obj.graph).end);
        let timeType = nullSafe(obj.queryDetail).timeType || ((start+"").includes('P') ? 'RELATIVE' : ((start+"").includes('Z') ? 'ABSOLUTE' : undefined));
        if(start != undefined && end != undefined && timeType != undefined){
            var timestamp = {};
            timestamp.start = start;
            timestamp.end = end;
            if(timeType === 'RELATIVE'){
                timestamp.type = 'relative';
                timestamp.label = `${getFormattedTimeUnit(convertDuration(start))} - ${getFormattedTimeUnit(convertDuration(end))}`;
            }else{
                timestamp.label = `${timestamp.start} - ${timestamp.end}`.replace(/T/g,' ').replace(/\.\d{3}Z/g,'Z');
                timestamp.type = 'fixed';
            }
            if(timestamp.label) {
                console.log(`Extracted ${timestamp.type} timestamp`,timestamp);
                persistTimestamp(timestamp, TIMESTAMPS_KEY);
            }
        }
    }

    if(location.host.endsWith('console.aws.amazon.com')) {
        window.addEventListener('hashchange', extractCloudWatchTime, false);
        let bodyList = document.querySelector("body");
        let observer = new MutationObserver((mutations, o) => {
            if(addSpeedrunLink()) {
                o.disconnect();
            }
        });
        if(!addSpeedrunLink()) {
            observer.observe(bodyList, {attributeFilter: [ "id"], subtree:true});
        }
        extractCloudWatchTime();
        return;
    }
    var lastPath = location.pathname;
    const ISSUES_PATH_REGEX = /\/issues\/(\d+)$/;
    if (window.onurlchange === null) {
        //this gets invoked twice on page change, only update page on 2nd call
        window.addEventListener('urlchange', async (info) => {
            persistIfIssue();
            let location = new URL(info.url);
            if(lastPath !== location.pathname) {
                lastPath = location.pathname;
            } else if (!$('.srRunBtn').length && isWiki()) {
                //only update the page if it doesn't have run buttons and is a wiki
                await updatePage();
            }
            showToolbarOnWiki();
        });
    }

    const HEADER = /#(\w+(\.?\w)*)(?:[ \t]+(?:[Ss]ervice=)?(\w+(?:\.\w+)*))?([ \t]*{.*})?(?:[ \t]*\n)?/;
    const LITERAL = /\$\{.+?\}/
    const PROMPT = /~~~(?:(\w[\w-:]+)=)?(.+?)(\s*{.*?\}\s*)?~~~/
    const PROMPT_G = new RegExp(PROMPT, 'g');
    const COMMENT = /(^\s*|[^\s](\s+))((\/\/.*)(\n)?)/;
    const COMMENT_G = new RegExp(COMMENT, 'mg');
    const HAS_DOM_CONTENT_REGEX = /\[object \w*Element\]/;
    const SR_CONFIG = "srConfig";
    const GLOBAL_PREFIX = "g_";
    const SR_ENABLED_PATHS = `${STORAGE_NAMESPACE}enabledPaths`
    const SR_REGION_FILTER = "srRegionFilter";
    const SR_SERVICE_FILTER = "srServiceFilter";
    const varNameCache = new Map();
    const REGION_REGEX = /^(?<area>.*?) \((?<prettyName>.*?)\)/
    const WIKI_REGEX = /^(?<path>\/.*?\/.*?)\/wiki\/?/
    const LAST_REGION_KEY = `${STORAGE_NAMESPACE}lastRegion`
    const LAST_SERVICE_KEY = `${STORAGE_NAMESPACE}lastService`
    const ISSUES_KEY = `${STORAGE_NAMESPACE}issues`
    const LAST_CREDS = `${STORAGE_NAMESPACE}lastCreds`
    const CREDS_REQUEST = `curl -s -S -b ~/.speedrun/cookie -L -X POST --header "Content-Type: application/json; charset=UTF-8" -d '{"role": "$\{roleArn}"}' -X POST https://oynsydbhl3.execute-api.us-west-2.amazonaws.com/dev/v1/credentials`
    const PERL_EXTRACT = `perl -ne 'use Term::ANSIColor qw(:constants); my $line = $_; my %mapping = (SessionToken=>"AWS_SESSION_TOKEN",SecretAccessKey=>"AWS_SECRET_ACCESS_KEY",AccessKeyId=>"AWS_ACCESS_KEY_ID"); while (($key, $value) = each (%mapping)) {my $val = $line; die BOLD WHITE ON_RED . "Unable to get credentials did you run srinit and do you have access to the role?" . RESET . RED . "\\n$line" . RESET . "\\n" if ($line=~/error/);$val =~ s/.*?"$key":"(.*?)".*$/$1/e; chomp($val); print "export $value=$val\\n";}print "export AWS_DEFAULT_REGION=$\{region}\\n";'`
    const COPY_WITH_CREDS = `export AWS_ACCESS_KEY_ID="";export AWS_SECRET_ACCESS_KEY="";export AWS_SESSION_TOKEN="";\ncredentials=$(CREDS_REQUEST | ${PERL_EXTRACT});$(echo $credentials);`;

    let regionMap = {
        "US East (N. Virginia)": "us-east-1",
        "US East (Ohio)": "us-east-2",
        "US West (N. California)": "us-west-1",
        "US West (Oregon)": "us-west-2",
        "Africa (Cape Town)": "af-south-1",
        "Asia Pacific (Hong Kong)": "ap-east-1",
        "Asia Pacific (Jakarta)": "ap-southeast-3",
        "Asia Pacific (Mumbai)": "ap-south-1",
        "Asia Pacific (Osaka)": "ap-northeast-3",
        "Asia Pacific (Seoul)": "ap-northeast-2",
        "Asia Pacific (Singapore)": "ap-southeast-1",
        "Asia Pacific (Sydney)": "ap-southeast-2",
        "Asia Pacific (Tokyo)": "ap-northeast-1",
        "Canada (Central)": "ca-central-1",
        "Europe (Frankfurt)": "eu-central-1",
        "Europe (Ireland)": "eu-west-1",
        "Europe (London)": "eu-west-2",
        "Europe (Milan)": "eu-south-1",
        "Europe (Paris)": "eu-west-3",
        "Europe (Stockholm)": "eu-north-1",
        "Middle East (Bahrain)": "me-south-1",
        "South America (São Paulo)": "sa-east-1",
    };

    const partitionPrefixMap = {
        "cn-" : "aws-cn",
        "us-gov-" : "aws-us-gov"
    }

    const partitionNames = new Set();

    const regionNameMap = {};
    const partitionMap = {};

    Object.entries(regionMap).forEach(([name, region]) => {
        const partition = getPartition(region);
        partitionMap[partition] ? partitionMap[partition].push(region) : partitionMap[partition] = [region];
        const [,area,prettyName] = REGION_REGEX.exec(name);
        regionNameMap[region] = {name, area, prettyName, partition}
    });

    function isPartition(str) {
        return Object.keys(partitionMap).includes(str);
    }

    let templates = {
        settings : `~~~g_usernameOverride=Username Override~~~
                    ~~~g_role=Role {"default":"speedrun-ReadOnly"}~~~
                    ~~~g_aws-accountId=AWS Account Id for Classic~~~`,
        copy : "${content}",
        raw : {
            type: 'copy',
            raw: true,
        },
        noPrompts : {
            prompts : false,
        },
        withCreds : {
            creds : true
        },

        federate : {
            value: "${(typeof path === 'undefined') ? (((content||'').trim().length > 0) ? content.trim().replace(/^\\//,'') : `console/home?region=${region}`) : path.includes('?') ? path : `${path}/home?region=${region}`}"
        },
        federateService : {
            //Sort object by keys https://github.com/lodash/lodash/issues/1459
            value:"~~~path=Service {\"type\":\"select\",\"options\":\"${_(consoleOptions).toPairs().sortBy(0).fromPairs().value()}\",\"suppress\":true}~~~\n${path.includes('?') ? path : `${path}/home?region=${region}`}",
            consoleOptions: {
                "API Gateway" : "apigateway",
                "Athena": "athena/home?region=${region}#query",
                "CloudFormation": "cloudformation",
                "CloudFront": "cloudfront",
                "CloudWatch Alarms": "cloudwatch/home?region=${region}#alarmsV2:",
                "CloudWatch Dashboards": "cloudwatch/home?region=${region}#dashboards:",
                "CloudWatch Logs": "cloudwatch/home?region=${region}#logsV2:log-groups",
                "CloudWatch Logs Insights": "cloudwatch/home?region=${region}#logsV2:logs-insights",
                "CloudWatch Metrics": "cloudwatch/home?region=${region}#metricsV2:",
                "CodeBuild": "codesuite/codebuild/projects?region=${region}",
                "CodeDeploy": "codedeploy",
                "DynamoDB": "dynamodbv2",
                "EC2": "ec2",
                "ECS" : "ecs",
                "Home": "console",
                "IAM": "iamv2",
                "Kinesis" : "kinesis",
                "Lambda": "lambda",
                "Route 53": "route53",
                "RDS" : "rds",
                "S3": "s3",
                "SQS": "sqs",
                "Step Functions":"states/home?region=${region}#/statemachines"
            }
        },
        link : "${lastLine(content)}",
        DDBItem: {
            type : "federate",
            value : "dynamodbv2/home?region=${region}#edit-item?table=${tableName}&itemMode=2&pk=${key}&sk${typeof searchKey === 'undefined' ? '' : `=${searchKey}`}&route=ROUTE_ITEM_EXPLORER"
        },
        CWLInsights: {
            type : "federate",
            value : "cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail$3D$257E$2528end$257E0$257Estart$257E${typeof start === 'undefined' ? '-3600' : start}$257EtimeType$257E$2527RELATIVE$257Eunit$257E$2527seconds$257EeditorString$257E$2527${encodeCloudWatchInsightsParam(content)}$257EisLiveTail$257Efalse$257Esource$257E$2528${encodeCloudWatchURL(prepend(`~'`,arrayify(logGroups).map(x => encodeCloudWatchInsightsParam(x))).join(''))}$2529$2529"
        },
        CWLInsightsSRTimestamp: {
            type : "federate",
            value : "cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail$3D$257E$2528${srTimestamp()}$257EeditorString$257E$2527${encodeCloudWatchInsightsParam(content)}$257EisLiveTail$257Efalse$257Esource$257E$2528${encodeCloudWatchURL(prepend(`~'`,arrayify(logGroups).map(x => encodeCloudWatchInsightsParam(x))).join(''))}$2529$2529"
        }
    };

    var pageConfig = {};

    //https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    RegExp.escape = function(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    let user = $("meta[name='user-login']").attr("content");

    let tabNames = {
        "Preview" : "M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z",
        "Code" : "M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z",
        "Debug" : "M4.72.22a.75.75 0 011.06 0l1 .999a3.492 3.492 0 012.441 0l.999-1a.75.75 0 111.06 1.061l-.775.776c.616.63.995 1.493.995 2.444v.327c0 .1-.009.197-.025.292.408.14.764.392 1.029.722l1.968-.787a.75.75 0 01.556 1.392L13 7.258V9h2.25a.75.75 0 010 1.5H13v.5c0 .409-.049.806-.141 1.186l2.17.868a.75.75 0 01-.557 1.392l-2.184-.873A4.997 4.997 0 018 16a4.997 4.997 0 01-4.288-2.427l-2.183.873a.75.75 0 01-.558-1.392l2.17-.868A5.013 5.013 0 013 11v-.5H.75a.75.75 0 010-1.5H3V7.258L.971 6.446a.75.75 0 01.558-1.392l1.967.787c.265-.33.62-.583 1.03-.722a1.684 1.684 0 01-.026-.292V4.5c0-.951.38-1.814.995-2.444L4.72 1.28a.75.75 0 010-1.06zM6.173 5h3.654A.173.173 0 0010 4.827V4.5a2 2 0 10-4 0v.327c0 .096.077.173.173.173zM5.25 6.5a.75.75 0 00-.75.75V11a3.5 3.5 0 107 0V7.25a.75.75 0 00-.75-.75h-5.5z"

    }

    $("head").append(`<style>${GM_getResourceText('select2css')}
    /* Select2 theming to match github */

        .select2-container--default {
          line-height: 20px;
          font-size: 12px;
        }

        .select2-container--default .select2-selection--single {
          background-color:var(--color-canvas-default);
          border: 1px solid var(--color-border-default);
          border-radius: 6px;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
          color: var(--color-fg-default);
        }

        .select2-container--default .select2-results__option--selected {
          background-color: var(--color-btn-bg);
        }

        .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable {
          background-color: var(--color-accent-emphasis);
          color: var(--color-fg-default);
        }

        .select2-container--default.select2-container--disabled .select2-selection--single {
          cursor: not-allowed;
          background-color: var(--color-canvas-subtle);
        }

        .select2-dropdown {
          background-color: var(--color-canvas-default);
          border-color: var(--color-border-default);

        }

        .select2-search__field {
          border: 1px solid var(--color-border-default);
          border-radius: 6px;
        }
        .needsService {
          display:none
        }
         /* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  top: 4px;
  width: 30px;
  height: 16px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: var(--color-neutral-emphasis);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  left: 3px;
  bottom: 3px;
  background-color: var(--color-btn-primary-text);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--color-accent-emphasis);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--color-accent-emphasis);
}

input:checked + .slider:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 26px;
}

.slider.round:before {
  border-radius: 50%;
}
        </style>`);

    //let toolbar = $('<div/>',{"css":{"position":"fixed","top":"0","right":"0","padding":"2px","z-index":"50","border-radius":"5px", "background": "rgba(0, 0, 0, .6)"}});
    let toolbar = $('<div/>',{"id":"srToolbar","css":{"display":"none", "position":"fixed","top":"0","left": "50%","transform":"translate(-50%, 0)","padding":"2px","z-index":"50","border-radius":"5px", "background": "var(--color-header-bg)"}});
    toolbar.append(`<a id='toggleSRToolbar' href="#"><img width="25" height="25" style="vertical-align:middle" src="${GM_info.script.icon}"/></a>
  <label id='srToggleTitle' class="switch">
  <input id='srEnabled' type="checkbox"><span class="slider round"></span>
      </label>
      <span id='toolbar'>
      <span class='needsService'>
      <select id="service" class="select-sm width-fit" aria-label="Service"></select>
      <select id="region" class="select-sm width-fit" aria-label="Region"></select>
      <div class='BtnGroup'>
      <button title="Federate to AWS Console" class="btn btn-sm BtnGroup-item canBeDangerous" id="srFederate"><svg xmlns="http://www.w3.org/2000/svg" class="octicon color-fg-on-emphasis" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"></path></svg></button>
      <button title="Federate to service in AWS Console" class="btn btn-sm BtnGroup-item canBeDangerous" id="srFederateService"><svg xmlns="http://www.w3.org/2000/svg" class="octicon color-fg-on-emphasis" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"></path></svg></button>
      <button title="Get CLI credentials" class="btn btn-sm BtnGroup-item canBeDangerous" id="srGetCreds"><svg xmlns="http://www.w3.org/2000/svg" class="octicon color-fg-on-emphasis" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg></button>
      <button title="Copy account id" class="btn btn-sm BtnGroup-item" id="srCopyAccount"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></button>
      <button title="Force new credentials" class="btn btn-sm BtnGroup-item" id="srFlush"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg></button>
      </div>
      </span>
      <details id="githubIssuesDetails"class="details-reset details-overlay d-inline">
  <summary id="githubIssues" class="btn btn-sm" aria-haspopup="true">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" class="octicon octicon-tools"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
    <span class="dropdown-caret"></span>
  </summary>
  <details-menu class="SelectMenu right-0" role="menu">
          <div class="SelectMenu-modal">
<header class="SelectMenu-header d-flex flex-items-center flex-justify-between">

  <h3 class="SelectMenu-title">Recent Github issues</h3>

  <button class="SelectMenu-closeButton" type="button" aria-label="Close menu" data-toggle-for="githubIssuesDetails">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
</svg>
  </button>
</header>   <div id='githubIssuesList' class="SelectMenu-list">
          <a class="SelectMenu-item" aria-disabled="true">No recent GitHub issues</a>
            </div>
          </div>
        </details-menu>
</details>
      <div class='BtnGroup'>
      <a class="btn btn-sm BtnGroup-item" id="srSettings"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" class="octicon octicon-tools"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.4288 1.52471C7.61685 1.50836 7.80736 1.5 8 1.5C8.19264 1.5 8.38315 1.50836 8.5712 1.52471C8.60669 1.52779 8.67932 1.56149 8.70795 1.67093L8.99702 2.77622C9.14363 3.33676 9.54617 3.74277 9.99429 3.96473C10.1678 4.05067 10.3351 4.14753 10.4952 4.25443C10.9118 4.53261 11.4652 4.67836 12.0243 4.52497L13.1272 4.22235C13.2361 4.19246 13.3017 4.23831 13.3223 4.26758C13.5408 4.57848 13.7326 4.90924 13.8946 5.25654C13.9094 5.2884 13.9167 5.36792 13.8362 5.44746L13.0214 6.25258C12.6099 6.65921 12.4591 7.21008 12.4908 7.70918C12.4969 7.80524 12.5 7.9022 12.5 8C12.5 8.0978 12.4969 8.19476 12.4908 8.29082C12.4591 8.78992 12.6099 9.34079 13.0214 9.74742L13.8362 10.5525C13.9167 10.6321 13.9094 10.7116 13.8946 10.7435C13.7326 11.0908 13.5408 11.4215 13.3223 11.7324C13.3017 11.7617 13.2361 11.8075 13.1272 11.7777L12.0243 11.475C11.4652 11.3216 10.9118 11.4674 10.4952 11.7456C10.3351 11.8525 10.1678 11.9493 9.99429 12.0353C9.54617 12.2572 9.14363 12.6632 8.99702 13.2238L8.70795 14.3291C8.67932 14.4385 8.60669 14.4722 8.5712 14.4753C8.38315 14.4916 8.19264 14.5 8 14.5C7.80736 14.5 7.61685 14.4916 7.4288 14.4753C7.3933 14.4722 7.32067 14.4385 7.29205 14.3291L7.00296 13.2237C6.85636 12.6632 6.45383 12.2572 6.00572 12.0353C5.83221 11.9493 5.66496 11.8525 5.50487 11.7456C5.08825 11.4674 4.53481 11.3216 3.97577 11.475L2.87278 11.7777C2.76387 11.8075 2.69826 11.7617 2.67768 11.7324C2.45921 11.4215 2.26738 11.0908 2.10543 10.7435C2.09057 10.7116 2.08328 10.6321 2.16377 10.5525L2.97865 9.74736C3.39017 9.34074 3.541 8.78987 3.50924 8.29078C3.50314 8.19474 3.50003 8.09778 3.50003 8C3.50003 7.90222 3.50314 7.80526 3.50924 7.70922C3.541 7.21013 3.39017 6.65926 2.97865 6.25264L2.16377 5.44746C2.08328 5.36793 2.09057 5.28841 2.10543 5.25655C2.26738 4.90924 2.45921 4.57848 2.67769 4.26758C2.69826 4.23831 2.76387 4.19247 2.87278 4.22235L3.97577 4.52498C4.53481 4.67837 5.08825 4.53262 5.50487 4.25444C5.66496 4.14755 5.83221 4.05069 6.00572 3.96475C6.45382 3.74279 6.85636 3.33678 7.00296 2.77625L7.29205 1.67093C7.32067 1.56149 7.3933 1.52779 7.4288 1.52471ZM8 0C7.76394 0 7.53009 0.010245 7.29889 0.0303435C6.55611 0.0949143 6.00991 0.645042 5.84086 1.29138L5.55177 2.39671C5.53431 2.46349 5.47287 2.55476 5.33993 2.62061C5.10832 2.73533 4.88526 2.86452 4.67192 3.00697C4.54894 3.08908 4.43933 3.09674 4.37267 3.07845L3.26968 2.77581C2.62644 2.59932 1.87827 2.79629 1.45041 3.40515C1.18168 3.78757 0.945496 4.19473 0.745967 4.62262C0.430999 5.29808 0.634823 6.04545 1.10948 6.51446L1.92436 7.31963C1.9735 7.36819 2.02164 7.46677 2.01227 7.61399C2.00415 7.74171 2.00003 7.87043 2.00003 8C2.00003 8.12957 2.00415 8.25829 2.01227 8.38601C2.02164 8.53323 1.9735 8.63181 1.92436 8.68037L1.10948 9.48555C0.634822 9.95455 0.430999 10.7019 0.745967 11.3774C0.945495 11.8053 1.18168 12.2124 1.45041 12.5948C1.87827 13.2037 2.62644 13.4007 3.26968 13.2242L4.37267 12.9216C4.43933 12.9033 4.54895 12.9109 4.67192 12.993C4.88526 13.1355 5.10832 13.2647 5.33993 13.3794C5.47287 13.4452 5.53431 13.5365 5.55177 13.6033L5.84086 14.7086C6.00991 15.355 6.55611 15.9051 7.29889 15.9697C7.53009 15.9898 7.76394 16 8 16C8.23606 16 8.46991 15.9898 8.7011 15.9697C9.44388 15.9051 9.99009 15.355 10.1591 14.7086L10.4482 13.6033C10.4657 13.5365 10.5271 13.4453 10.6601 13.3794C10.8917 13.2647 11.1148 13.1355 11.3281 12.993C11.4511 12.9109 11.5607 12.9033 11.6274 12.9216L12.7303 13.2242C13.3736 13.4007 14.1217 13.2037 14.5496 12.5949C14.8183 12.2124 15.0545 11.8053 15.254 11.3774C15.569 10.7019 15.3652 9.95456 14.8905 9.48555L14.0757 8.68042C14.0265 8.63187 13.9784 8.53328 13.9878 8.38606C13.9959 8.25832 14 8.12959 14 8C14 7.87041 13.9959 7.74168 13.9878 7.61394C13.9784 7.46672 14.0265 7.36813 14.0757 7.31958L14.8905 6.51445C15.3652 6.04544 15.569 5.29807 15.254 4.62261C15.0545 4.19472 14.8183 3.78756 14.5496 3.40515C14.1217 2.79628 13.3736 2.59932 12.7303 2.77581L11.6274 3.07843C11.5607 3.09672 11.4511 3.08907 11.3281 3.00696C11.1148 2.8645 10.8917 2.7353 10.6601 2.62057C10.5271 2.55473 10.4657 2.46346 10.4482 2.39667L10.1591 1.29138C9.99009 0.64504 9.44388 0.0949126 8.7011 0.0303426C8.46991 0.0102447 8.23606 0 8 0ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"></path></svg></a>
      <a class="btn btn-sm BtnGroup-item" href='/No-Backspace-Crew/Warp/wiki/Speedrun Help' target='_blank' title="Speedrun ${GM_info.script.version}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"  class="octicon octicon-tools"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225A.613.613 0 019 6.25c0 .177-.04.264-.077.318a.956.956 0 01-.277.245c-.076.051-.158.1-.258.161l-.007.004a7.728 7.728 0 00-.313.195 2.416 2.416 0 00-.692.661.75.75 0 001.248.832.956.956 0 01.276-.245 6.3 6.3 0 01.26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725A2.76 2.76 0 008 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977a.75.75 0 101.342.67z"></path></svg></a>
      </div>
      </span>
    `);

    $("body").append(toolbar).append(`
<div class="position-fixed top-0 right-0 d-none" style='"top":"0","left": "50%","transform":"translate(-50%, 0)"' id='snackbar'>
  <div class="Toast Toast--success anim-fade-in fast">
    <span class="Toast-icon">
      <!-- <%= octicon "check" %> -->
      <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-check" aria-hidden="true">
        <path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
      </svg>
    </span>
    <span id="toast" class="Toast-content"></span>
  </div>
</div>
`).append(`<details id='srModal' class="fixed details-reset details-overlay details-overlay-dark">
  <summary aria-haspopup="dialog"></summary>
  <details-dialog class="Box height-fit overflow-auto Box-overlay--wide anim-fade-in fast">
    <div class="Box-header">
      <button id="modal-cancel" class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <!-- <%= octicon "x" %> -->
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <h3 class="Box-title" id='srModal-title'>Dialog</h3>
    </div>
    <div class="Box-body" id='srModal-body'>
    </div>
    <div class="Box-footer float-right">
      <button id="srModal-ok" type="button" class="btn btn-primary" autofocus data-close-dialog>Ok</button>
    </div>
  </details-dialog>
</details>`);



    let noop = function() {}

    function toast(str) {
        let snackbar = $("#snackbar");
        $('#toast').html(str);
        snackbar.removeClass('d-none');
        setTimeout(function(){ snackbar.addClass('d-none')}, 2500);
    }

    function nullSafe(obj) {
        return firstNonNull(obj, {});
    }

    //set mustExist to true if region must exist in regionNameMap
    function getPartition(region, mustExist) {
        if(!region || (mustExist && !(regionNameMap[region]))) {
            return undefined;
        }
        for (const [key, value] of Object.entries(partitionPrefixMap)) {
            if (region.startsWith(key)) {
                return value;
            }
        }
        return "aws";
    }

    function firstNonNull(...args) {
        return args.find(element => !(element == undefined));
    }

    // convert to an array if it isn't already
    // undefined if undefined
    function arrayify(o) {
        return o == undefined ? o : Array.isArray(o) ? o : [o];
    }

    //calls a method on an object or each member of an array
    function filter(method, param, o) {
        return o == undefined ? o : Array.isArray(o) ? o.filter(str => str[method](param)) : (o[method](param) ? o : undefined);
    }
    //find elements of an array/str that start with a prefix
    function prefixSearch(prefix, o){
        return filter('startsWith', prefix, o);
    }

    //find elements of an array/str that includes a string
    function includesSearch(includes, o){
        return filter('includes', includes, o);
    }

    //find elements of an array/str that contain a regex
    function regexSearch(regex, o){
        return o == undefined ? o : (Array.isArray(o) ? o.filter(str => regex.test(str)) : (regex.test(o) ? o : undefined));
    }

    //prepend a string to each element of an array/str
    function prepend(prefix, o){
        return o == undefined ? o : (Array.isArray(o) ? o.map(str => prefix + str) : prefix + o);
    }

    //return the last non-whitespace line of a string
    function lastLine(str) {
        return str == undefined ? str : str.trim().match(/.*$/);
    }

    //get the first group of a regex
    function firstGroup(regex, str) {
        return str == undefined ? str : firstNonNull(str.trim().match(regex),[undefined,undefined])[1];
    }


    function parseJSON(str, name) {
        try {
            return JSON.parse(str);
        } catch(err) {
            alertAndThrow("Unable to parse '" + (name || str) + "' due to: " + err, err);
        }
    }

    function jsonWithoutInternalVariables(variables) {
        //return prettyJSON(variables);
        return prettyJSON(variables,function replacer(key, value) { return (key=="internal") ? undefined : value;});
    }

    function prettyJSON(obj, replacer, spaces=2) {
        return JSON.stringify(obj, replacer, spaces);
    }

    //https://stackoverflow.com/questions/38304401/javascript-check-if-dictionary
    function isDict(d) {
        return !(d == undefined) && d.constructor == Object;
    }

    function reverseMap(obj) {
        return _.invert(obj);
    }

    function isValidVarName( name ) {
        try {
            Function('var ' + name);
        } catch( e ) {
            return false;
        }
        return true;
    }

    function encodeCloudWatchInsightsParam(str) {
        return encodeURIComponent(str).replace(/%([\dA-Z]{2}|(u\d{4}))/g, match => match.replace(/%/g, '*').toLowerCase());
    }


    function encodeCloudWatchURL(str, passes=2) {
        [...Array(passes)].forEach(() => {str = escape(str)});
        return str.replaceAll('%','$');
    }

    function cachedValidVarName(name) {
        return firstNonNull(varNameCache[name], varNameCache.set(name, isValidVarName(name)).get(name));
    }


    function persistTimestamp(timestamp, key, maxLength=5){
        if(timestamp.label){
            timestamp.timestamp = Date.now();
            let timestamps = GM_getValue(key,[]);
            //remove any already existing entry for this label/value
            timestamps = timestamps.filter((val) => !(timestamp.label === val.label) && !(timestamp.value && timestamp.value === val.value))
            timestamps.splice(0, 0, timestamp);
            while(timestamps.length>maxLength){
                timestamps.pop();
            }
            console.log('Persisting timestamp for:', timestamp);
            GM_setValue(key, timestamps);
        }
    }

    //https://stackoverflow.com/questions/41117799/string-interpolation-on-variable
    function interpolate(tpl, variables, suppressErrors) {
        try {
            sessionVariables = variables;
            var keys = Object.keys(variables).filter(key => cachedValidVarName(key)),
                //fn = new Function(...keys,'return `' + tpl.replace(/`/g, '\\`') + '`;'); //not sure why nested template literals are prevented
                fn = new Function(...keys,`return \`${tpl}\`;`);

            var result = fn(...keys.map(x => variables[x]));
            if(!suppressErrors && hasDOMContent(result)){
                throw new Error(`${result} contained DOM content, in ${tpl} ensure your variables are defined`);
            }
            return result;
        } catch(err) {
            if(suppressErrors) {
                return undefined;
            } else {
                alertAndThrow(`${err} while parsing:\n${tpl}`, err);
            }
        }
    };

    function retrieve(path) {
        return new Promise((resolve,reject) => {
            let [,root] = window.location.href.match(/^(.*?\/wiki)\//);
            GM_xmlhttpRequest({
                method: 'GET',
                url: `${root}/${path}`,
                onload: function(response) {
                    resolve(response.responseText);
                },
                onerror: function(err) {
                    reject(err);
                }
            });
        });
    }

    function interpolateLiteralsInString(str, variables, suppressErrors, wrap) {
        let offset = str.indexOf('${');
        while(offset>-1 && !variables.raw) {
            let matches = XRegExp.matchRecursive(str.substring(offset+1), '\\{', '\\}');
            let toReplace = "${" + matches[0] + "}";
            let replacement = wrap(interpolate(toReplace, variables, suppressErrors), toReplace);
            str = str.replace(toReplace,replacement);
            offset = str.indexOf('${',offset+replacement.length);
        }
        return str;
    }

    //recursively interpolate variables in arrays and dicts
    function deepInterpolate(obj, variables, suppressErrors){
        if (_.isString(obj) && obj.match(LITERAL)) {
            return interpolateLiteralsInString(obj, variables, suppressErrors, (result, match) => firstNonNull(result,match));
        } else if(isDict(obj)){
            for (const [key, value] of Object.entries(obj)) {
                var result = deepInterpolate(value, variables, suppressErrors);
                if(result) {
                    obj[key] = result;
                }
            }
        } else if(Array.isArray(obj)) {
            obj = obj.map(item => deepInterpolate(item, variables, suppressErrors));
        }
        return obj;
    }

    function hasDOMContent(str) {
        return !(str == undefined) && HAS_DOM_CONTENT_REGEX.test(str);
    }

    function isWiki() {
        return WIKI_REGEX.exec(location.pathname);
    }

    function persistIfIssue() {
        let issue = isIssue();
        if(issue && $('.gh-header-title > .markdown-title').length) {
            let [,issueNumber] = issue;
            persistTimestamp({label:`#${issueNumber} ${$('.gh-header-title > .markdown-title').text()}`,value:window.location.href}, ISSUES_KEY);
        }
    }

    function isIssue() {
        return ISSUES_PATH_REGEX.exec(location.pathname);
    }

    function showToolbarOnWiki() {
        isWiki() ? (GM_getValue('srToolbarVisible', true) ? `${$("#toolbar").show()}` : `${$("#toolbar").hide()}`) + $("#srToolbar").show() : $("#srToolbar").hide()
    }

    function getUserConfig() {
        return {
            "services" : {
                "${user}" : {
                    "role" : GM_getValue('g_role', 'speedrun-ReadOnly'),
                    "config" : {
                        "aws" : {
                            "account" : GM_getValue('g_aws-accountId', undefined)
                        }
                    }
                }
            }
        }
    }

    function escapeHTMLQuotesAnd$(str){
        return str.replace(/["$~]/g, m => ({'"':'&quot;', '$':'&#36;', '~':'&#126;'}[m]));
    }

    function escapeHTMLStartTags(str){
        return str ? _.escape(str) : str;
    }

    function getPrompts(content, tpl, variables){
        //inject srTimestamp prompt if you have it in your template/content and haven't overridden the start variable
        if((tpl && tpl.includes("srTimestamp(")) || (content && content.includes("srTimestamp(")) && !nullSafe(variables).start){
            content += getTimestampsPrompt();
        }
        const contentPrompts = [...content.matchAll(PROMPT_G)].map(x => ({location: 'content', prompt: x }));
        const templatePrompts = [...firstNonNull(tpl,"").matchAll(PROMPT_G)].map(x => ({location: 'template', prompt: x}));
        return _.concat(contentPrompts, templatePrompts);
    }

    function getURLSearchParam(key){
        return new URLSearchParams(window.location.search).get(key);
    }

    //touch the timestamp if a timestamp matches this label
    function touchTimestamp(label, key){
        let timestamps = GM_getValue(key,[]);
        timestamps.forEach((val) => {
            if(val.label === label){
                persistTimestamp(val, key);
            }
        });
    }

    function srTimestamp(type="cloudwatch"){
        let timestamp = sessionVariables.start ? {type:"relative", start:`${sessionVariables.start}`, end: `${firstNonNull(sessionVariables.end,'0')}`} : firstNonNull(sessionVariables.srTimestampValue,"{}");
        //A mapping of type to a function to convert a timestamp into the correct format.
        let conversionFunctionLookup = {
            "cloudwatch" : {
                "relative" : () => `end~${timestamp.end}~start~${timestamp.start}~timeType~'RELATIVE~unit~'seconds`,
                "fixed" : () => `end~'${timestamp.end.replace(/(:\d\d)Z/,"$1.999Z")}~start~'${timestamp.start.replace(/(:\d\d)Z/,"$1.000Z")}~timeType~'ABSOLUTE~tz~'UTC`
            }
        };
        let conversionFunction = nullSafe(conversionFunctionLookup[type])[timestamp.type];
        if(conversionFunction) {
            touchTimestamp(timestamp.label, TIMESTAMPS_KEY);
            return conversionFunction();
        }
        throw new Error(`Unsupported srTimestamp type: ${type} or format: ${timestamp.type}`);
    }

    function getPromptInfo(prompt) {
        let variable = prompt[1];
        let text = prompt[2];
        let configuration = prompt[3] ? parseJSON(prompt[3]) : {};
        let isGlobal = variable && variable.startsWith(GLOBAL_PREFIX);
        let sVariable = (variable && !isGlobal) ? localStorage.getItem(variable) : undefined;
        let sPrompt = localStorage.getItem(text);
        //TODO add ability to override value with url search param getURLSearchParam. Figure out how to only use that value once.
        var sessionValue = firstNonNull(isGlobal?GM_getValue(variable,undefined):undefined,sVariable,sPrompt,configuration.default,"");
        //override sessionValue if this is srTimestamp, we always want to set it to the default TODO make this a configuration option?
        if("srTimestampValue" === variable){
            sessionValue = configuration.default;
        }
        return {raw:prompt[0], variable:variable, prompt: text, configuration: configuration, value: sessionValue, default: configuration.default, condition: configuration.condition};
    }


    function getService() {
        return $('#service').val();
    }

    function getRegion() {
        return $('#region').val();
    }

    function getInputValue(input) {
        return input.is(':checkbox') ? input.is(':checked') : input.val();
    }

    function setInputValue(input, value) {
        input.is(':checkbox') ? input.prop('checked', value) : input.val(value);
        if(input.hasClass("select2-hidden-accessible")) {
            input.select2().trigger("change");
        }
    }

    function stringify(str) {
        JSON.stringify(str).slice(1, -1);
    }

    var exposedFunctions = {
        window : noop,
        alert : noop,
        document : noop,
        __proto__ : noop,
        eval : noop,
        localStorage: noop,
        location: noop,
        lastLine : lastLine,
        firstGroup: firstGroup,
        dayjs : dayjs,
        prettyJSON : prettyJSON,
        prefixSearch : prefixSearch,
        includesSearch : includesSearch,
        regexSearch : regexSearch,
        firstNonNull: firstNonNull,
        prepend: prepend,
        srTimestamp: srTimestamp,
        encodeCloudWatchInsightsParam: encodeCloudWatchInsightsParam,
        encodeCloudWatchURL: encodeCloudWatchURL,
        nullSafe: nullSafe,
        arrayify: arrayify,
        XRegExp: XRegExp,
        stringify: stringify,
        _ : _
    }

    function injectCustomFunctions(variables) {
        if(isDict(variables)) {
            for (const [key, value] of Object.entries(variables)) {
                if(key.startsWith('function:')) {
                    const functionName = key.replace('function:','');
                    const args = arrayify(firstNonNull(value.args,"str"));
                    const body = value.body;
                    if(!body) {
                        throw new Error(`function ${key} must have a body`);
                    }
                    delete variables[key];
                    variables[functionName] = new Function(...args, body);
                } else {
                    variables[key] = injectCustomFunctions(value);
                }
            }
        } else if(Array.isArray(variables)) {
            return variables.map(item => injectCustomFunctions(item));
        }
        return variables;
    }

    function overlayExposedFunctions(variables) {
        return $.extend(true, {}, injectCustomFunctions(variables), exposedFunctions);
    }

    // get variables for service and smash them together allowing for extension
    // if the service name is warp.federation.support
    // overlay the variables of warp, with warp.federation and with warp.federation.support
    function getServiceVariables(service, services) {
        return service ? service.split('.').reduceRight((variables, previous, index, arr) => $.extend(true, variables, nullSafe(services)[arr.slice(index).join('.')]), {}) : {};
    }

    // get variables for templates and smash them together allowing for extension
    // if the template name is copy.raw.warp
    // overlay the variables of copy with raw and with warp.
    function getTemplateVariables(template, templates) {
        return template ? template.split('.').reduce((variables, previous, index, arr) => {
            let templateValues = nullSafe(templates)[arr[index]];
            if(undefined === templateValues) {
                throw new Error(`template named: ${arr[index]} not defined`);
            }
            if(_.isString(templateValues)) {
                templateValues = {value: templateValues};
                if(index == 0) {
                    templateValues.type = firstNonNull(templateValues.value,"").startsWith('http') ? 'link' : arr[index];
                }
            } else {
                if(arr[index].startsWith('federate')) {
                    templateValues.type = firstNonNull(templateValues.type, 'federate');
                }
            }
            //make sure creds is set if this is federate
            if(templateValues.type == 'federate') {
                templateValues.creds = true;
            }
            return $.extend(true, variables, templateValues)}, {})
        : {} ;
    }

    //Add spaces before uppercase letters in value
    function prettyCamelCase(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1 $2");
    }

    function getServiceDropdownName(serviceName) {
        //Only pretty up final name in extension as service name for dropdown
        //A = A
        //A.B.C = C
        return prettyCamelCase(serviceName.replace('${user}',GM_getValue("g_usernameOverride") || user).replace('.*\.',''));
    }

    function isEnabledWikiPath() {
        let regex = isWiki();
        if (regex) {
            let [,path] = regex;
            return GM_getValue(SR_ENABLED_PATHS, {})[path];
        }

        return false;
    }

    function setEnabledWikiPath(enabled) {
        let regex = isWiki();
        if (regex) {
            let [,path] = regex;
            let currentEnabledPaths = GM_getValue(SR_ENABLED_PATHS, {});
            if(!enabled) {
                delete currentEnabledPaths[path];
            } else {
                currentEnabledPaths[path] = Date.now();
            }
            GM_setValue(SR_ENABLED_PATHS, currentEnabledPaths);
        }
    }

    async function nope(content, preview) {
        let pageVariables = _.cloneDeep(nullSafe(pageConfig));
        delete pageVariables.templates;
        delete pageVariables.services;
        let variables = {internal:{}, user: GM_getValue("g_usernameOverride") || user, region: getRegion(), service: getService(), content: content.replace(HEADER,"").replace(/\s+$/,"")};
        let details = parseContent(content);
        let templateVariables;

        try {
            templateVariables = getTemplateVariables(details.template, templates);
        } catch(err) {
            //rethrow if
            alertAndThrow(err);
        }

        variables.internal.template = templateVariables.value || "${content}";
        variables.internal.templateType = templateVariables.type;
        delete templateVariables.value;
        delete templateVariables.type;

        let serviceVariables = _.cloneDeep(getServiceVariables(variables.service, pageConfig.services));


        variables.internal.templateName = details.template
        variables.partition = getPartition(variables.region, true);
        let partitionVariables = variables.partition ? nullSafe(nullSafe(serviceVariables.config)[variables.partition]) : {};
        let regionVariables = variables.region ? nullSafe(nullSafe(serviceVariables.config)[variables.region]) : {};
        delete serviceVariables.config

        const entryVariables = nullSafe(details.variables);

        //Note, there are a few variables that are always defined on web pages like name.
        //https://stackoverflow.com/questions/26562719/is-variable-called-name-always-defined-in-javascript

        variables = $.extend(true, variables, pageVariables, templateVariables, serviceVariables, partitionVariables, regionVariables, entryVariables);
        variables = overlayExposedFunctions(variables);

        if(!preview && (variables.stripComments || !firstNonNull(variables.raw, false))) {
            //rip out comments
            variables.content = variables.content.replace(COMMENT_G, function(prompt) {
                const [,before,,,,after] = prompt.match(COMMENT);
                const leadingContent = firstNonNull(before,'').trim();
                return `${leadingContent.length ? leadingContent.concat(firstNonNull(after,'')) : ''}`;
            });
            //if / is escaped so it isn't treated as a comment, unescape it
            variables.content = variables.content.replace('&sol;','/');
        }
        sessionVariables = variables;

        variables.internal.prompts = getPrompts(content, variables.internal.template);

        let existingUserConfig = {};
        if (!preview) {
            if(hasElements(variables.internal.prompts)) {
                const div = $('<div>');
                const table = $('<table>');
                div.append(table);
                variables.internal.prompts.forEach(prompt => {
                    const info = getPromptInfo(prompt.prompt);
                    const row = $('<tr>');
                    const header = $('<td>', {class: 'p-2 text-right v-align-top'})
                    const label = $(`<label>${escapeHTMLStartTags(info.prompt)}</label>`);
                    header.append(label);
                    row.append(header);
                    var input = undefined;
                    info.interpolatedDefault = firstNonNull(interpolate(firstNonNull(info.default,""),variables, true), info.default);
                    info.interpolatedValue = firstNonNull(interpolate(firstNonNull(info.value,""),variables, true), info.value);
                    info.location = prompt.location;
                    let interpolatedDefaultText;
                    switch(info.configuration.type) {
                        case "checkbox":
                            input = $('<input>', {type:'checkbox'});
                            setInputValue(input, info.interpolatedValue && info.interpolatedValue != "false");
                            break;
                        case "select":
                            var options = info.configuration.options;
                            if(options && (typeof options === 'string')) {
                                var literal = options.match(LITERAL);
                                if(literal){
                                    options = interpolate(`\${JSON.stringify(${options.substring(2,options.length-1)})}`, variables, true);
                                }
                                options = parseJSON(options);
                            }

                            if(isDict(options) || hasElements(options)){
                                input = $("<select>", {class:"width-fit"});
                                if(Array.isArray(options)){
                                    //convert to a map
                                    options = _.zipObject(options, options);
                                }
                                Object.entries(options).forEach(([key, value]) => {
                                    input.append($(`<option ${value===info.value ? "selected" : ""}>`).text(key).val(value));
                                    if(info.interpolatedDefault && info.interpolatedDefault.length && value === info.interpolatedDefault) {
                                        interpolatedDefaultText = key;
                                    }
                                });
                            } else {
                                alertAndThrow(`No options specified for select prompt: ${info.prompt}`);
                            }
                            break;
                        case "textarea":
                            input = $('<textarea>', {rows:"5",cols:"40"});
                            input.val(info.interpolatedValue);
                            break;
                        default:
                            input = $('<input>', {size:40});
                            input.val(info.interpolatedValue);
                            break;
                    }
                    input.data('prompt', info);
                    var col = $('<td>', {class: 'p-2'})
                    col.append(input);
                    row.append(col);
                    col = $('<td>', {class: 'p-2 v-align-top'})
                    if(typeof info.interpolatedDefault === "boolean" || info.interpolatedDefault && info.interpolatedDefault.length) {
                        const text = interpolatedDefaultText || info.interpolatedDefault;
                        const button = $(`<button class="btn btn-sm Truncate" style="max-width: 100px;" type="button" aria-label="escapeHTMLStartTags(text)"><span class='Truncate-text' title='${escapeHTMLStartTags(text)}'>${escapeHTMLStartTags(text)}</span></button>`);
                        button.data('prompt', info);
                        button.data('source', input);
                        button.prop('disabled', info.interpolatedValue === info.interpolatedDefault);
                        input.on('input', function() {
                            button.prop('disabled', getInputValue(input) === button.data("prompt").interpolatedDefault);
                        });
                        button.on("click", function() {
                            setInputValue($(button.data('source')), button.data('prompt').interpolatedDefault);
                            button.prop('disabled', true);
                        });
                        col.append(button);
                    }
                    row.append(col);
                    table.append(row);
                });

                try {
                    let isSettings = variables.internal.templateName === 'settings';
                    if(isSettings) {
                        existingUserConfig = getUserConfig();
                    }
                    await dialog(div, isSettings ? `Speedrun V${GM_info.script.version} Settings` : 'Input', function() {
                        $('#srModal :input' ).not(':input[type=button],button').each(function() {
                            const prompt = $(this).data('prompt');
                            if(prompt) {
                                const value = getInputValue($(this));
                                var transformedValue = value;
                                if(prompt.configuration.transform){
                                    console.log('Transform:', prompt.configuration.transform);
                                    console.log('Value Before:', value);
                                    variables.value = value;
                                    transformedValue = interpolate(`\${${prompt.configuration.transform}}`, variables, false);
                                    console.log('Value After:', transformedValue);
                                }
                                if(prompt.configuration.cast){
                                    switch(prompt.configuration.cast){
                                        case "json":
                                            transformedValue = parseJSON(transformedValue);
                                            break;
                                        case "Number":
                                            transformedValue = Number(transformedValue);
                                            break;
                                        case "Boolean":
                                            transformedValue = Boolean(transformedValue);
                                            break;
                                        case "dayjs":
                                            transformedValue = dayjs(_.isNumeric(transformedValue) ? _.toNumber(transformedValue)*1000 : transformedValue);
                                            break;
                                        case "dayjs.utc":
                                            transformedValue = dayjs.utc(_.isNumeric(transformedValue) ? _.toNumber(transformedValue)*1000 : transformedValue);
                                            break;
                                        default:
                                            throw new Error(`Unknown cast: ${prompt.configuration.cast}`);
                                    }
                                }
                                localStorage.setItem(prompt.prompt,value);
                                if(prompt.variable) {
                                    variables[prompt.variable] = transformedValue;
                                    prompt.variable.startsWith(GLOBAL_PREFIX) ? GM_setValue(prompt.variable, value) : localStorage.setItem(prompt.variable, value);
                                }
                                var suffix = "";
                                if(prompt.configuration.suppress){
                                    suffix = "\n?";
                                    transformedValue = "";
                                }
                                var replacement = new RegExp(RegExp.escape(prompt.raw)+suffix);
                                if (prompt.location == 'content') {
                                    variables.content = variables.content.replace(replacement, transformedValue);
                                } else {
                                    variables.internal.template = variables.internal.template.replace(replacement, transformedValue);
                                }
                            }
                        });
                    })}
                catch(err) {
                    //TODO alert and throw?
                    console.log(err);
                    return;
                }

            }

            if(!variables.raw){
                // interpolate variables using 2 passes to account for variables that are defined later
                [1,2].forEach((pass) => {
                    Object.entries(variables).forEach(([key, value]) => {
                        const result = deepInterpolate(value, variables, pass==1 || preview);
                        if(result) {
                            variables[key] = result;
                        }
                    })});
            }

            variables.internal.result = interpolate(variables.internal.template, variables, preview);



            if(variables.creds) {
                if(variables.account && variables.role && variables.partition) {
                    variables.roleArn = `arn:${variables.partition}:iam::${variables.account}:role/${variables.role}`;
                } else {
                    alertAndThrow("Unable to determine role arn, role, account and partition must be defined");
                }
            }
            switch(variables.internal.templateType) {
                case "copy" :
                    //refactor to show key if creds are needed
                    if(needsNewCreds(variables)) {
                        variables.internal.result = interpolate(COPY_WITH_CREDS.replace('CREDS_REQUEST', CREDS_REQUEST),variables,false) + '\n' + variables.internal.result;
                    }
                    GM_setClipboard(variables.internal.result);
                    toast("📋 Copied");
                    persistCreds(variables);
                    break;
                case "link" :
                    window.open(variables.internal.result);
                    break;
                case "settings" :
                    if(!_.isEqual(existingUserConfig,getUserConfig()) || variables.user != GM_getValue("g_usernameOverride")) {
                        //toast("Settings updated");
                        location.reload();
                    }
                    break;
                case "federate" : {
                    // strip leading / if present or console links won't work
                    variables.internal.result = variables.internal.result.startsWith('/') ? variables.internal.result.substring(1) : variables.internal.result
                    // use cloudwatch/deeplink.js instead of home to better handle long urls
                    variables.internal.result = variables.internal.result.replace(/^cloudwatch\/home/,'cloudwatch/deeplink.js')
                    let consoleURL = `https://${variables.region}.console.aws.amazon.com/${variables.internal.result}`;
                    console.log('Console url', consoleURL);
                    let url = consoleURL;
                    if(needsNewCreds(variables)) {
                        url = new URL('https://oynsydbhl3.execute-api.us-west-2.amazonaws.com/dev/v1/federate');
                        url.searchParams.append('role',variables.roleArn);
                        url.searchParams.append('destination',consoleURL);
                        url = url.toString();
                        console.log('Federation url', url);
                    }
                    window.open(url);
                    persistCreds(variables);
                    break;
                }
                default:
                    alertAndThrow(`Unknown template type ${variables.internal.templateType}`);

            }
            //persist last region and service
            let lastRegion = getValue('#select2-region-container', true);
            if(lastRegion) {
                localStorage.setItem(LAST_REGION_KEY, lastRegion);
            }
            let lastService = getValue('#service');
            if(lastService) {
                localStorage.setItem(LAST_SERVICE_KEY, lastService);
            }
        } else if(!variables.content.trim().length) {
            variables.content = variables.internal.template;
        }
        return variables;
    }

    $('#toggleSRToolbar').click(function () {
        GM_setValue("srToolbarVisible",$('#toolbar').toggle().is(':visible'));
    });

    $('#srFederate,#srFederateService').click(async (event) => {
        await nope(`#f${$(event.delegateTarget).attr('id').replace('srF','')}`, false);
    });

    $("#service").on('change', function() {
        updateRegions();
        $("#region").trigger('change');
    });

    $("#region").on('change', function() {
        updateTabs();
    });

    $("#githubIssues").on('click', () => {
        if(!$('#githubIssuesList').is(':visible')){
            let issues = GM_getValue(ISSUES_KEY, []);
            if(issues.length) {
                $('#githubIssuesList').empty();
                for(let issue of issues) {
                    $('#githubIssuesList').append($("<a>", {class:"SelectMenu-item", href:issue.value, text:issue.label, target:"_blank"}));
                }
            }
        }
    });
    $("#srSettings").on('click', async () => {
        await nope('#settings', false);
    });

    $("#srEnabled").on('change', async (event) => {
        setEnabledWikiPath(event.target.checked);
        if(event.target.checked) {
            await updatePage();
        } else {
            location.reload();
        }
    });

    $("#srCopyAccount").on('click', async () => {
        await nope('#copy\n${account}', false);
    });

    $("#srGetCreds").on('click', async () => {
        await nope('#copy.withCreds {"forceNewCreds": true}\necho $credentials', false);
    });

    $("#srFlush").on('click', async () => {
        GM_deleteValue(`${LAST_CREDS}federate`);
        GM_deleteValue(`${LAST_CREDS}copy`);
        toast('Credentials flushed');
    });

    if(isWiki()){
        await updatePage();
    } else {
        persistIfIssue();
    }

    $(document).ready(function() {
        $('#service,#region').select2({
            dropdownAutoWidth : true,
            width:'copy'});
    });

    showToolbarOnWiki();

    function getValue(selector, useText) {
        let element = $(selector);
        if(element && element.is(':visible')) {
            return useText ? element.text() : element.val();
        }
        return undefined;
    }

    function updateRegions() {
        let service = $('#service')
        let lastRegion = getValue('#select2-region-container', true) || localStorage.getItem(LAST_REGION_KEY);
        let regions = [];
        for(const region of firstNonNull(getRegions(service.val(), pageConfig))) {
            let splits = region.split(' ', 2);
            let suffix = splits.length > 1 ? splits[1] : '';
            regions.push(`<option title='${regionNameMap[splits[0]].name}' value="${splits[0]}" ${region == lastRegion ? 'selected' : ''}>${region}</option>`);
        }
        $('#region').empty().append(regions).prop('disabled',regions.length==1);
    }


    async function updatePage() {
        sessionVariables = {};
        let [,path] = isWiki();
        let pageEnabled = isEnabledWikiPath();
        setInputValue($('#srEnabled'), pageEnabled);
        $('#srToggleTitle').attr('title', `${pageEnabled ? 'Disable' : 'Enable'} Speedrun for wikis on: ${path.substring(1)}`);
        // first pass to build page config
        pageConfig = await buildConfig(pageEnabled);


        let serviceDropdown = $("#service");
        let regionDropdown = $("#region");

        let hadServices = serviceDropdown.children().length > 0;
        let newServices = [];
        let lastService = getValue('#service') || localStorage.getItem(LAST_SERVICE_KEY);

        for (const [key, value] of Object.entries(getServices(pageConfig))) {
            newServices.push(`<option value="${key}" ${key == lastService ? 'selected' : ''} >${value.dropdownName}</option>`);
        };
        serviceDropdown.empty().append(newServices);
        if(hadServices != newServices.length>0) {
            $('.needsService').each((index, element)=>{newServices.length>0 ? $(element).show() : $(element).hide()});
        }

        serviceDropdown.prop('disabled', newServices.length == 1);

        // second pass to wire up content
        if(pageEnabled) {
            await wireUpContent();
        }

        serviceDropdown.trigger('change');

    }

    function setButtonDanger(btn, variables) {
        if(variables.danger || (variables.creds && _.isString(variables.role) && variables.role.toLowerCase().match(/(full|admin|write)/))) {
            btn.addClass('color-bg-danger-emphasis');
            btn.removeClass('btn-primary');
        } else {
            btn.removeClass('color-bg-danger-emphasis');
            btn.addClass('btn-primary');
        }
    }

    function updateTabs() {
        $('.srRunBtn').each(async function (item) {
            const btn = $(this);
            const variables = await nope(btn.data('code'), true);
            btn.data('previewTab').first("code").html(buildPreview(variables));
            btn.data('debugTab').first("code").html(jsonWithoutInternalVariables(variables));
            setButtonDanger(btn, variables);
            switch(variables.internal.templateType) {
                case 'link':
                    btn.text('Open');
                    break;
                case 'federate':
                    btn.text('Open AWS Console');
                    break;
                case 'copy':
                    btn.text('Copy');
                    break;
            }
        });
        let variables = undefined;
        $('.canBeDangerous').each(async function(item) {
            variables = variables ? variables : await nope('#copy.withCreds', true);
            setButtonDanger($(this), variables);
        });
    }
    function getServices(pageConfig) {
        let result = {};
        let services = nullSafe(nullSafe(pageConfig).services);
        if(services) {
            let serviceFilter = firstNonNull(arrayify(pageConfig[SR_SERVICE_FILTER]),[]);
            for(const [service, config] of Object.entries(services)) {
                if(!serviceFilter.length || serviceFilter.includes(service)) {
                    result[service] = {name : service,
                                       dropdownName:getServiceDropdownName(service),
                                       config: getServiceVariables(service, services),
                                       regions: getRegions(service, pageConfig)};
                }
            }
        }
        return result;
    }

    function getRegions(service, pageConfig) {
        let regionSet = new Set();
        let serviceVariables = $.extend({},pageConfig, getServiceVariables(service, pageConfig.services));
        let regionFilter = firstNonNull(arrayify(serviceVariables[SR_REGION_FILTER]),[]);
        for (const [region, config] of Object.entries(nullSafe(nullSafe(nullSafe(pageConfig.services)[service]).config))){
            let regions = isPartition(region) ? partitionMap[region] : [region];
            regions.forEach(region => {
                if(!regionFilter.length || regionFilter.includes(region)) {
                    regionSet.add(region);
                }
            });
        }
        return [...regionSet];
    }

    function parseContent(str, name) {
        const groups = str.match(HEADER);
        if(groups && groups[1] && (!name || name === groups[1])) {
            return {"template" : groups[1], "service" : groups[3], "variables": groups[4] ? parseJSON(groups[4]) : undefined, "body": str.replace(HEADER,"")};
        }
        return undefined;
    }

    function hasElements(arr) {
        return arr && Array.isArray(arr) && arr.length>0;
    }

    async function buildConfig(enabled) {
        let userConfig = getUserConfig();
        pageConfig = userConfig.services['${user}'].config.aws.account ? _.cloneDeep(userConfig) : {};
        const configs = [];
        if(enabled) {
            for (const pre of $("div.markdown-body pre")){
                const details = parseContent($(pre).text(), SR_CONFIG);
                if(details) {
                    if(details.variables && details.variables.transclude) {
                        for (const path of arrayify(details.variables.transclude)) {
                            const result = await retrieve(path);
                            $(result).find("div.markdown-body pre").each(function () {
                                const transclude = parseContent($(this).text(), SR_CONFIG);
                                if(transclude) {
                                    configs.push(parseJSON(transclude.body));
                                }
                            });
                        }
                    }
                    // if there is any body content overlay that
                    let body = details.body.trim()
                    if(body.length > 0) {
                        configs.push(parseJSON(body));
                    }
                }
            }
            //smash configs together
            if(hasElements(configs)) {
                configs.forEach(config => {
                    if(config.templates) {
                        templates = $.extend(true, templates, config.templates);
                        delete config.templates;
                    }
                    pageConfig = $.extend(true, pageConfig, config);
                });
            }
        }
        return pageConfig;
    }

    function hasTemplate(name) {
        if(!templates[name]){
            for(let piece of name.split('.')){
                if(!templates[piece]) {
                    return false;
                }
            }
        }
        return true;
    }

    function needsNewCreds(variables) {
        const lastCreds = variables.creds ? GM_getValue(LAST_CREDS + variables.internal.templateType, undefined) : undefined;
        variables.internal.newCreds = variables.creds && (variables.forceNewCreds || lastCreds==undefined || lastCreds.expiration <= (Date.now()+(5*60000)) || lastCreds.role != variables.roleArn);
        return variables.internal.newCreds
    }

    function persistCreds(variables) {
        if(variables.internal.newCreds) {
            GM_setValue(LAST_CREDS + variables.internal.templateType, {role: variables.roleArn, expiration: Date.now() + (60*60*1000)});
        }
    }

    async function wireUpContent() {
        let block = 0;
        for (const pre of $("div.markdown-body pre")) {
            block++;
            const code = $(pre).text();
            const groups = code.match(HEADER);
            if(groups && groups[1] && hasTemplate(groups[1])) {
                const nav = $('<nav class="UnderlineNav UnderlineNav--right" aria-label="Preview">');
                const actions = $('<div class="UnderlineNav-actions">');
                const runBtn = $('<button type="button" class="btn color-fg-on-emphasis btn-sm m-1 srRunBtn">Run</button>');
                actions.append(runBtn);
                nav.append(actions);
                runBtn.data('code', code);
                const navBody = $('<div class="UnderlineNav-body">');
                var index = 0;
                for (const [key, value] of Object.entries(tabNames)) {
                    const localBlock = block;
                    let tab = $(`<a id='tab-${key}-${localBlock}' class="UnderlineNav-item" href="#url" ${index++ == 0 ? 'aria-current="page"' : ''}><svg xmlns="http://www.w3.org/2000/svg" class="UnderlineNav-octicon octicon octicon-tools" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="${value}"></path></svg><span>${key}</span></a>`);
                    navBody.append(tab);
                    tab.click(function(tab) {
                        for (const [oTabKey, oTabValue] of Object.entries(tabNames)) {
                            let tabId = `${oTabKey}-${localBlock}`
                            if(oTabKey === key) {
                                $(this).attr('aria-current','page');
                                $(`#${tabId}`).show();
                            } else {
                                $(`#${tabId}`).hide();
                                $(`#tab-${tabId}`).removeAttr('aria-current');
                            }
                        }
                    });
                }
                nav.append(navBody);
                $(pre).parent().before(nav);
                $(pre).attr('id',`Preview-${block}`);
                runBtn.data('previewTab', $(pre));
                const codeTab = $(`<pre id='Code-${block}'><code>${code}</code></pre>`).hide();
                const debugTab = $(`<pre id='Debug-${block}'><code></code></pre>`).hide();
                runBtn.data('debugTab', debugTab);
                $(pre).after(codeTab);
                codeTab.after(debugTab);
                runBtn.click(async function() {
                    await nope($(this).data('code'), false);
                });
            }
        }
    }

    function colorizeComments(content, variables) {
        return firstNonNull(variables.internal.raw, false) && !firstNonNull(variables.stripComments, true) ? content :
        content.replace(COMMENT_G,function(comment) {
            let [,before,,,content,after] = comment.match(COMMENT);
            return `${before}<span class="Label Label--inline Label--secondary"><i>${escapeHTMLQuotesAnd$(content)}</i></span>${firstNonNull(after,"")}`;
        });
    }

    function colorizePrompts(content, variables) {
        return firstNonNull(variables.internal.prompts, true) ? content.replace(PROMPT_G,function(prompt) {
            let groups = prompt.match(PROMPT);
            return `<span title="${escapeHTMLQuotesAnd$(groups[0])}" class="Label Label--inline Label--accent">${groups[2]}</span>`.replace(/\}/g,"&#125;");
        }) : content;
    }

    function colorizeLiterals(content, variables) {
        return interpolateLiteralsInString(content, variables, true,
                                           (result, match) =>
                                           {return `<span title="${escapeHTMLQuotesAnd$(match)}" class="Label Label--inline Label--${result == undefined ? "danger" : "success"}">${firstNonNull(result, match)}</span>`});
    }

    function buildPreview(variables) {
        let preview = `<span class="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-1" title="${escapeHTMLQuotesAnd$(variables.internal.template)}">#${variables.internal.templateName}</span>${variables.internal.templateName != variables.internal.templateType ? `<span class="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis">type: ${variables.internal.templateType}</span>`:''}
${variables.content}`;
        preview = colorizeComments(preview, variables);
        preview = colorizePrompts(preview, variables);
        return colorizeLiterals(preview, variables);
    }

    $(document).on('select2:open', () => {
        const selects = document.querySelectorAll('.select2-container--open .select2-search__field');
        selects[selects.length-1].focus();
    });

    function alert(body, title) {
        $('#srModal-title').text(title || 'Alert');
        $('#srModal-body').html($('<p/>',{class:'text-mono'}).append(body));
        document.querySelector('#srModal').open = true;
    }

    function dialog(body, title, callback) {
        $('#srModal-title').text(title || 'Input');
        $('#srModal-body').html(body);
        $('#srModal').ready(new function() {
            $('#srModal').find("select").each(function(index, select) {
                $(select).select2({
                   dropdownAutoWidth : true,
                   width:'copy'});
                });
            $('#srModal-ok').focus();
        });
        document.querySelector('#srModal').open = true;
        return new Promise((resolve,reject) => {
            let isResolved = false;
            $('#srModal-ok').on( "click.sr", function() {
                //remove any existing listener
                isResolved = true;
                if(callback) {
                    callback();
                }
                $(this).off("click.sr");
                $('#srModal').off("details-dialog-close.sr");
                resolve();
            });
            $('#srModal').on("details-dialog-close.sr", function(event) {
                $('#srModal-ok').off("click.sr");
                $(this).off("details-dialog-close.sr");

                if(!isResolved) {
                    reject('User cancelled run');
                }
            });
        });
    }

    function alertAndThrow(message, cause) {
        alert(message);
        throw new Error(message, cause ? {cause : cause} : null);
    }

    //  ]]></>).toString(), { "targets": "> 0.25%, not dead"}).code);
})();