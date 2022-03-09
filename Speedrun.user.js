// ==UserScript==
// @name         Speedrun
// @namespace    http://www.nobackspacecrew.com/
// @version      1.0
// @description  Table Flip Dev Ops
// @author       No Backspace Crew
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @require      https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// @require      https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js
// @resource     select2css https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css
// @require      https://unpkg.com/dayjs@1.10.8/dayjs.min.js
// @require      https://unpkg.com/dayjs@1.10.8/plugin/utc.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        window.onurlchange
// @include      /https?:\/\/(www\.)?github.com/
// @icon         data:image/png;base64,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
// ==/UserScript==

/* globals jQuery, $, _, dayjs, waitForKeyElements */

//eval(Babel.transform((<><![CDATA[
(async function() {
    'use strict';
    var i,t;
    var lastPath = undefined;
    if (window.onurlchange === null) {
        window.addEventListener('urlchange', (info) => {
            let location = new URL(info.url);
            if(!lastPath || lastPath !== location.pathname) {
                lastPath = location.pathname;
                console.log("TODO: Rerender");
            }
        });
    }

    var sessionVariables = {};

    const HEADER = /#(\w+\.?\w*)(?:[ \t]+(?:[Ss]ervice=)?(\w+(?:\.\w+)*))?([ \t]*{.*})?(?:[ \t]*\n)?/;
    const LITERAL = /\$\{.+?\}/
    const LITERAL_G = new RegExp(LITERAL,'g');
    const PROMPT = /~~~(?:(\w[\w-:]+)=)?(.+?)(\s*{.*?\}\s*)?~~~/
    const PROMPT_G = new RegExp(PROMPT, 'g');
    const COMMENT = /(^\s*|[^\s](\s+))((\/\/.*)(\n)?)/;
    const COMMENT_G = new RegExp(COMMENT, 'mg');
    const HAS_DOM_CONTENT_REGEX = new RegExp('\[object \w*Element\]');
    const SR_CONFIG = "srConfig";
    const GLOBAL_PREFIX = "g:";
    const STORAGE_NAMESPACE = "SR:";
    const SR_REGION_FILTER = "srRegionFilter";
    const SR_SERVICE_FILTER = "srServiceFilter";
    const varNameCache = new Map();
    dayjs.extend(window.dayjs_plugin_utc);

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
        regionNameMap[region] = {name:name, partition:partition}
    });

    function isPartition(str) {
        return Object.keys(partitionMap).includes(str);
    }

    let templates = {
        settings : "",
        copy : "${content}",
        copyRaw : {
            type: "copy",
            raw: true
        },
        copyRawNoPrompts : {
            type: "copy",
            prompts : false,
            raw : true
        },
        copyWithCreds : {
            type: "copy",
            creds : true
        },
        federate : {
            type: "federate",
            creds : true
        },
        link : "${lastLine(content)}",
        CWLInsights: {
            type : "federate",
            value : "cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail=~(end~0~start~${typeof start === 'undefined' ? '-3600' : start}~timeType~'RELATIVE~unit~'seconds~tz~'UTC~editorString~'${content}~isLiveTail~false~source~(~'${join(logGroups,\"~'\")}))",
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

.select2-container--default .select2-selection--single {
  background-color:var(--color-canvas-default);
  border: 1px solid var(--color-border-default);
  border-radius: 1px;
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

.select2-dropdown {
  background-color: var(--color-canvas-default);
}</style>`);

    //let toolbar = $('<div/>',{"css":{"position":"fixed","top":"0","right":"0","padding":"2px","z-index":"50","border-radius":"5px", "background": "rgba(0, 0, 0, .6)"}});
    let toolbar = $('<div/>',{"css":{"position":"fixed","top":"0","left": "50%","transform":"translate(-50%, 0)","padding":"2px","z-index":"50","border-radius":"5px", "background": "var(--color-header-bg)"}});
    toolbar.append(`
      <a id='toggleSRToolbar' href="#"><img width="25" height="25" style="vertical-align:middle" src="data:image/png;base64,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"/></a>
      <span id='toolbar'>
      <select id="service" class="form-select select-sm" aria-label="Service">
      </select>
      <select id="region" class="form-select select-sm" aria-label="Region">
      </select>
      <a class="btn btn-sm" id="rocket"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"></path></svg></a>
      <a class="btn btn-sm"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"></path></svg></a>
      <a class="btn btn-sm"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg></a>
      <a class="btn btn-sm"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></a>
      <a class="btn btn-sm"><svg xmlns="http://www.w3.org/2000/svg" href='/No-Backspace-Crew/Warp/wiki/Help' target='_blank' class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225A.613.613 0 019 6.25c0 .177-.04.264-.077.318a.956.956 0 01-.277.245c-.076.051-.158.1-.258.161l-.007.004a7.728 7.728 0 00-.313.195 2.416 2.416 0 00-.692.661.75.75 0 001.248.832.956.956 0 01.276-.245 6.3 6.3 0 01.26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725A2.76 2.76 0 008 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977a.75.75 0 101.342.67z"></path></svg></a>
      </span>
    `);

    $("body").append(toolbar).append(`
<div class="position-fixed top-0 right-0 d-none" style='"top":"0","left": "50%","transform":"translate(-50%, 0)"'id='snackbar'>
  <div class="Toast Toast--success anim-fade-in fast">
    <span class="Toast-icon">
      <!-- <%= octicon "check" %> -->
      <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-check" aria-hidden="true">
        <path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
      </svg>
    </span>
    <span id="toast" class="Toast-content">Success message goes here.</span>
  </div>
</div>
`).append(`<details id='srModal' class="fixed details-reset details-overlay details-overlay-dark">
  <summary aria-haspopup="dialog"></summary>
  <details-dialog class="Box Box-overlay--wide anim-fade-in fast">
    <div class="Box-header">
      <button id="modal-cancel" class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <!-- <%= octicon "x" %> -->
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>
      <h3 class="Box-title" id='srModal-title'>Dialog</h3>
    </div>
    <div class="Box-body overflow-auto" id='srModal-body'>
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
        return args.find(element => (element !== undefined && element!== null));
    }

    // convert to an array if it isn't already
    // undefined if undefined
    function arrayify(o) {
        return (o === undefined || o === null) ? o : Array.isArray(o) ? o : [o];
    }

    //find elements of an array/str that start with a prefix
    function prefixSearch(prefix, o){
        return o ? (Array.isArray(o) ? o.filter(str => str.startsWith(prefix)) : (o.startsWith(prefix) ? o : undefined)) : o;
    }

    //find elements of an array/str that includes a string
    function includesSearch(includes, o){
        return o ? (Array.isArray(o) ? o.filter(str => str.includes(includes)) : (o.includes(includes) ? o : undefined)) : o;
    }

    //find elements of an array/str that contain a regex
    function regexSearch(regex, o){
        return o ? (Array.isArray(o) ? o.filter(str => regex.test(str)) : (regex.test(o) ? o : undefined)) : o;
    }

    //prepend a string to each element of an array/str
    function prepend(prefix, o){
        return o ? (Array.isArray(o) ? o.map(str => prefix + str) : prefix + o) : o;
    }

    //return the last non-whitespace line of a string
    function lastLine(str) {
        return str ? str.trim().match(/.*$/) : str;
    }

    function parseJSON(str, name) {
        try {
            return JSON.parse(str);
        } catch(err) {
            alertAndThrow("Unable to parse " + (name || str) + ":" + err, err);
        }
    }

    function jsonWithoutInternalVariables(variables) {
        //return prettyJSON(variables);
        return prettyJSON(variables,function replacer(key, value) { return (key=="internal") ? undefined : value;});
    }

    function prettyJSON(obj, replacer, spaces) {
        return JSON.stringify(obj, replacer, spaces || 2);
    }

    //https://stackoverflow.com/questions/38304401/javascript-check-if-dictionary
    function isDict(d) {
        return typeof d==='object' && d!==null && !(d instanceof Array) && !(d instanceof Date);
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

    function cachedValidVarName(name) {
        return firstNonNull(varNameCache[name], varNameCache.set(name, isValidVarName(name)).get(name));
    }



    //https://stackoverflow.com/questions/41117799/string-interpolation-on-variable
    function interpolate(tpl, variables, suppressErrors) {
        try {
            sessionVariables = variables;
            var keys = Object.keys(variables).filter(key => cachedValidVarName(key)),
                fn = new Function(...keys,'return `' + tpl.replace(/`/g, '\\`') + '`;');
            var result = fn(...keys.map(x => variables[x]));
            if(!suppressErrors && hasDOMContent(tpl)){
                throw new Error(`${result} contained DOM content, ensure your variables are defined `);
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
            let groups = window.location.href.match(/^(.*?\/wiki)\//);
            let root = groups[1];
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

    //recursively interpolate variables in arrays and dicts
    function deepInterpolate(obj, variables, suppressErrors){
        if ("string" === typeof obj && obj.match(LITERAL)) {
            return obj.replace(LITERAL_G,function(match) {
                return firstNonNull(interpolate(match, variables, suppressErrors), match);
            });
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
        return str & HAS_DOM_CONTENT_REGEX.test(str);
    }

    function escapeHTMLQuotesAnd$(str){
        return str.replace(/["$]/g, m => ({'"':'&quot;', '$':'&#36;'}[m]));
    }

    function escapeHTMLStartTags(str){
        return str ? _.escape(str) : str;
    }

    function getPrompts(content, tpl){
        const contentPrompts = [...content.matchAll(PROMPT_G)].map(x => ({location: 'content', prompt: x }));
        const templatePrompts = [...firstNonNull(tpl,"").matchAll(PROMPT_G)].map(x => ({location: 'template', prompt: x}));
        return _.concat(contentPrompts, templatePrompts);
    }

    function getURLSearchParam(key){
        return new URLSearchParams(window.location.search).get(key);
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
    }

    var exposedFunctions = {
        lastLine : lastLine,
        window : new Function(),
        dayjs : dayjs,
        prettyJSON : prettyJSON,
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
    // if the service name is A.B.C
    // overlay the variables of A, with A.B and with A.B.C
    function getServiceVariables(service, services) {
        return service ? service.split('.').reduceRight((variables, previous, index, arr) => $.extend(true, variables, nullSafe(services)[arr.slice(index).join('.')]), {}) : {};
    }

    function prettyCamelCase(str) {
        return str.replace(/([a-z])([A-Z])/g, "$1 $2");
    }

    function getServiceDropdownName(serviceName) {
        //Only camel case final name in extension as service name for dropdown
        //A = A
        //A.B.C = C
        return prettyCamelCase(serviceName.replace('.*\.',''));
    }

    async function nope(content, preview) {
        let pageVariables = _.cloneDeep(nullSafe(pageConfig));
        delete pageVariables.templates;
        delete pageVariables.services;
        let variables = {internal:{}, user: user, region: getRegion(), service: getService(), content: content.replace(HEADER,"").replace(/\s+$/,"")};
        let details = parseContent(content);
        let template = _.cloneDeep(templates[details.template]);
        let templateVariables = {};
        if(!template) {
            alertAndThrow(Error(`${details.template} not a defined template`));
        }
        if(isDict(template)) {
            variables.internal.template = template.value || "${content}";
            delete template.value;
            delete template.type;
            templateVariables = template;
        } else {
            variables.internal.template = template;
        }

        //TODO get from dropdown
        let serviceVariables = _.cloneDeep(getServiceVariables(variables.service, pageConfig.services));


        variables.internal.templateName = details.template
        variables.partition = getPartition(variables.region, true);
        let partitionVariables = variables.partition ? nullSafe(nullSafe(serviceVariables.config)[variables.partition]) : {};
        let regionVariables = variables.region ? nullSafe(nullSafe(serviceVariables.config)[variables.region]) : {};
        delete serviceVariables.config

        const entryVariables = nullSafe(details.variables);


        variables = $.extend(true, variables, pageVariables, templateVariables, serviceVariables, partitionVariables, regionVariables, entryVariables);
        variables = overlayExposedFunctions(variables);

        if(variables.stripComments || !firstNonNull(variables.raw, false) && !preview) {
            //rip out comments
            variables.content = variables.content.replace(COMMENT_G, function(prompt) {
                const groups = prompt.match(COMMENT);
                const leadingContent = firstNonNull(groups[1],'').trim();
                return `${leadingContent.length ? leadingContent.concat(firstNonNull(groups[5]),'') : ''}`;
            });
            //if / is escaped so it isn't treated as a comment, unescape it
            variables.content = variables.content.replace('&sol;','/');
        }

        variables.internal.prompts = getPrompts(content, variables.internal.template);


        if (!preview) {
            if(hasElements(variables.internal.prompts)) {
                const div = $('<div/>');
                const table = $('<table/>');
                div.append(table);
                variables.internal.prompts.forEach(prompt => {
                    const info = getPromptInfo(prompt.prompt);
                    const row = $('<tr/>');
                    const header = $('<td/>', {class: 'p-2'})
                    const label = $(`<label class='v-align-top float-right'>${escapeHTMLStartTags(info.prompt)}</label>`);
                    header.append(label);
                    row.append(header);
                    var input = undefined;
                    info.interpolatedDefault = firstNonNull(interpolate(firstNonNull(info.default,""),variables, true), info.default);
                    info.interpolatedValue = firstNonNull(interpolate(firstNonNull(info.value,""),variables, true), info.value);
                    info.location = prompt.location;
                    switch(info.configuration.type) {
                        case "checkbox":
                            input = $(`<input type='checkbox'/>`);
                            setInputValue(input, info.interpolatedValue && info.interpolatedValue != "false");
                            break;
                        case "select":
                            var options = info.configuration.options;
                            if(options && (typeof options === 'string')) {
                                var literal = options.match(LITERAL);
                                if(literal){
                                    options = interpolate(`\${JSON.stringify(${literal[1]})}`, variables, true);
                                }
                                options = parseJSON(options);
                            }
                            if(isDict(options) || hasElements(options)){
                                input = $("<select>");
                                if(Array.isArray(options)){
                                    //convert to a map
                                    options = _.zipObject(options, options);
                                }
                                Object.entries(options).forEach(([key, value]) => {
                                    input.append($(`<option value='${value}' ${value===info.interpolatedValue ? "selected" : ""}>${key}</option>`));
                                });
                            } else {
                                alertAndThrow(`No options specified for select prompt: ${info.prompt}`);
                            }
                            break;
                        case "textarea":
                            input = $('<textarea/>', {rows:"5",cols:"40"});
                            input.val(info.interpolatedValue);
                            break;
                        default:
                            input = $('<input/>');
                            input.val(info.interpolatedValue);
                            break;
                    }
                    input.data('prompt', info);
                    var col = $('<td/>', {class: 'p-2'})
                    col.append(input);
                    row.append(col);
                    col = $('<td/>', {class: 'p-2'})
                    if(typeof info.interpolatedDefault === "boolean" || info.interpolatedDefault && info.interpolatedDefault.length) {
                        const text = info.interpolatedDefault;
                        const button = $(`<button class="btn btn-sm Truncate v-align-top" style="max-width: 100px;" type="button" aria-label="escapeHTMLStartTags(text)"><span class='Truncate-text' title='${escapeHTMLStartTags(text)}'>${escapeHTMLStartTags(text)}</span></button>`);
                        button.data('prompt', info);
                        button.data('source', input);
                        button.prop('disabled', info.interpolatedValue === text);
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
                    await dialog(div, 'Input', function() {
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
                                            transformedValue = JSON.parse(transformedValue);
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
                                    localStorage.setItem(prompt.variable, value);
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
                    console.log(err);
                    return;
                }

            } else if (variables.content.trim().length == 0) {
                variables.content = variables.internal.template;
            }

            if(!variables.raw){
                // interpolate variables using 2 passes to account for variables that are defined later
                [1,2].forEach((pass) => {
                    Object.entries(variables).forEach(([key, value]) => {
                        const result = deepInterpolate(value, variables, pass==1 || preview);
                        if(result) {
                            variables[key] = result;
                        }
                    }
                )});
            }

            variables.internal.result = interpolate(variables.internal.template, variables, preview);

            //TODO automatically set template type based on template name
            if ("copy" === (variables.internal.template.type || variables.internal.templateName)) {
                GM_setClipboard(variables.internal.result);
                toast("📋 Copied");
            } else if ("link" === variables.internal.template.type || variables.internal.templateName) {
                window.open(variables.internal.result);
            }
        } else if(!variables.content.trim().length) {
            variables.content = variables.internal.template;
        }
        return variables;
    }

    $('#toggleSRToolbar').click(function () {
        $('#toolbar').toggle();
    });

    $('#rocket').click(function () {
        //document.querySelector('#srModal').open = true;
    });

    // first pass to build page config
    await buildConfig();

    for (const [key, value] of Object.entries(getServices(pageConfig))) {
        $("#service").append(`<option value="${key}">${value.dropdownName}</option>`);
    };
    for (const [key, value] of Object.entries(regionMap)) {
        $("#region").append(`<option value="${value}">${key} - ${value}</option>`);
    };

    $(document).ready(function() {
        $('#service,#region').select2({width:'copy'});
    });

    // second pass to wire up content
    await wireUpContent();


    

    function getServices(pageConfig) {
        let result = {};
        let services = nullSafe(nullSafe(pageConfig).services);
        if(services) {
            let serviceFilter = firstNonNull(arrayify(pageConfig[SR_SERVICE_FILTER]),[]);
            console.log(serviceFilter);
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
        let regionFilter = firstNonNull(arrayify(pageConfig[SR_REGION_FILTER]),[]);
        //console.log(regionFilter);
        console.log(service, pageConfig.services[service]);
        for (const [region, config] of Object.entries(nullSafe(nullSafe(pageConfig.services)[service]).config)){
            let regions = isPartition(region) ? partitionMap[region] : [region];
            regions.forEach(region => {
                if(!regionFilter.length || regionFilter.includes(region)) {
                    regionSet.add(region)
                }
            });
        }
        return [...regionSet];
    }

    function parseContent(str, name) {
        const groups = str.match(HEADER);
        if(groups && groups[1] && (!name || name === groups[1])) {
            return {"template" : groups[1], "service" : groups[2], "variables": groups[3] ? parseJSON(groups[3]) : undefined, "body": str.replace(HEADER,"")};
        }
        return undefined;
    }

    function hasElements(arr) {
        return arr && Array.isArray(arr) && arr.length>0;
    }

    async function buildConfig() {
        const configs = [];
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

                    // if there is any body content overlay that
                    let body = details.body.trim()
                    if(body.length > 0) {
                        configs.push(parseJSON(body));
                    }
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

    async function wireUpContent() {
        let block = 0;
        for (const pre of $("div.markdown-body pre")) {
            block++;
            const code = $(pre).text();
            const groups = code.match(HEADER);
            if(groups && groups[1] && templates[groups[1]]) {
                const nav = $('<nav class="UnderlineNav UnderlineNav--right" aria-label="Preview">');
                const actions = $('<div class="UnderlineNav-actions">');
                const runBtn = $('<button type="button" class="btn btn-primary btn-sm m-1">Run</button>');
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
                const variables = await nope(code, true);
                $(pre).parent().before(nav);
                $(pre).attr('id',`Preview-${block}`);
                const codeTab = $(`<pre id='Code-${block}'><code>${code}</code></pre>`).hide();
                const debugTab = $(`<pre id='Debug-${block}'><code>${jsonWithoutInternalVariables(variables)}</code></pre>`).hide();
                $(pre).after(codeTab);
                $(pre).first("code").html(buildPreview(variables));
                $(pre).prepend(`<span class="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis">#${groups[1]}</span><br/>`);
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
            let groups = comment.match(COMMENT);
            return `${groups[1]}<span class="Label Label--inline"><i>${escapeHTMLQuotesAnd$(groups[4])}</i></span>${firstNonNull(groups[5],"")}`;
        });
    }

    //TODO tooltip is deprecated and doesn't is partially hidden
    function colorizePrompts(content, variables) {
        return firstNonNull(variables.internal.prompts, true) ? content.replace(PROMPT_G,function(prompt) {
            let groups = prompt.match(PROMPT);
            return `<span aria-label="${escapeHTMLQuotesAnd$(groups[0])}" class="tooltipped tooltipped-s Label Label--inline Label--accent">${groups[2]}</span>`.replace(/\}/g,"&#125;");
        }) : content;
    }

    function colorizeLiterals(content, variables) {
        return content.replace(LITERAL_G, function(match) {
            let result = interpolate(match, variables, true);
            return `<span aria-label="${escapeHTMLQuotesAnd$(match)}" class="tooltipped tooltipped-s Label Label--inline Label--${result? "success" : "danger"}">${firstNonNull(result, match)}</span>`;
        });
    }

    function buildPreview(variables) {
        let preview = variables.content;
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