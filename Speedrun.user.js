// ==UserScript==
// @name         Speedrun
// @namespace    https://speedrun.nobackspacecrew.com/
// @version      1.123
// @description  Markdown to build tools
// @author       No Backspace Crew
// @require      https://speedrun.nobackspacecrew.com/js/jquery@3.7.0/jquery-3.7.0.min.js
// @require      https://speedrun.nobackspacecrew.com/js/lodash@4.17.21/lodash.min.js
// @require      https://speedrun.nobackspacecrew.com/js/select2@4.1.0-rc.0/select2.min.js
// @resource     select2css https://speedrun.nobackspacecrew.com/css/select2@4.1.0-rc.0/select2.min.css
// @require      https://speedrun.nobackspacecrew.com/js/dayjs@1.11.2/dayjs.min.js
// @require      https://speedrun.nobackspacecrew.com/js/dayjs@1.11.2/plugin/utc.js
// @require      https://speedrun.nobackspacecrew.com/js/dayjs@1.11.2/plugin/duration.js
// @require      https://speedrun.nobackspacecrew.com/js/dayjs@1.11.2/plugin/relativeTime.js
// @require      https://speedrun.nobackspacecrew.com/js/dayjs-parser@0.9.3/dayjs-parser.min.js
// @require      https://speedrun.nobackspacecrew.com/js/xregexp@5.1.1/xregexp.min.js
// @require      https://speedrun.nobackspacecrew.com/js/json5@2.1.1/index.min.js
// @require      https://speedrun.nobackspacecrew.com/js/srInvoke@0.0.2/srInvoke.min.js
// @require      https://speedrun.nobackspacecrew.com/js/dompurify@3.0.3/purify.min.js
// @require      https://speedrun.nobackspacecrew.com/js/modern-screenshot@4.4.36/modern-screenshot.min.js
// @sandbox      JavaScript
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_getResourceText
// @grant        GM_info
// @grant        GM_download
// @grant        GM_addElement
// @grant        GM_openInTab
// @grant        window.onurlchange
// @match        https://github.com/*
// @match        https://www.github.com/*
// @match        https://*.console.aws.amazon.com/*
// @match        https://console.aws.amazon.com/*
// @connect      speedrun-api.us-west-2.nobackspacecrew.com
// @connect      speedrun-api-beta.us-west-2.nobackspacecrew.com
// @connect      lambda.us-east-1.amazonaws.com
// @connect      lambda.us-east-2.amazonaws.com
// @connect      lambda.us-west-1.amazonaws.com
// @connect      lambda.us-west-2.amazonaws.com
// @connect      lambda.af-south-1.amazonaws.com
// @connect      lambda.ap-east-1.amazonaws.com
// @connect      lambda.ap-south-2.amazonaws.com
// @connect      lambda.ap-southeast-3.amazonaws.com
// @connect      lambda.ap-southeast-4.amazonaws.com
// @connect      lambda.ap-south-1.amazonaws.com
// @connect      lambda.ap-northeast-3.amazonaws.com
// @connect      lambda.ap-northeast-2.amazonaws.com
// @connect      lambda.ap-southeast-1.amazonaws.com
// @connect      lambda.ap-southeast-2.amazonaws.com
// @connect      lambda.ap-northeast-1.amazonaws.com
// @connect      lambda.ca-central-1.amazonaws.com
// @connect      lambda.eu-central-1.amazonaws.com
// @connect      lambda.eu-central-2.amazonaws.com
// @connect      lambda.eu-west-1.amazonaws.com
// @connect      lambda.eu-west-2.amazonaws.com
// @connect      lambda.eu-south-1.amazonaws.com
// @connect      lambda.eu-west-3.amazonaws.com
// @connect      lambda.eu-north-1.amazonaws.com
// @connect      lambda.eu-south-2.amazonaws.com
// @connect      lambda.me-south-1.amazonaws.com
// @connect      lambda.me-central-1.amazonaws.com
// @connect      lambda.sa-east-1.amazonaws.com
// @connect      states.us-east-1.amazonaws.com
// @connect      states.us-east-2.amazonaws.com
// @connect      states.us-west-1.amazonaws.com
// @connect      states.us-west-2.amazonaws.com
// @connect      states.af-south-1.amazonaws.com
// @connect      states.ap-east-1.amazonaws.com
// @connect      states.ap-south-2.amazonaws.com
// @connect      states.ap-southeast-3.amazonaws.com
// @connect      states.ap-southeast-4.amazonaws.com
// @connect      states.ap-south-1.amazonaws.com
// @connect      states.ap-northeast-3.amazonaws.com
// @connect      states.ap-northeast-2.amazonaws.com
// @connect      states.ap-southeast-1.amazonaws.com
// @connect      states.ap-southeast-2.amazonaws.com
// @connect      states.ap-northeast-1.amazonaws.com
// @connect      states.ca-central-1.amazonaws.com
// @connect      states.eu-central-1.amazonaws.com
// @connect      states.eu-central-2.amazonaws.com
// @connect      states.eu-west-1.amazonaws.com
// @connect      states.eu-west-2.amazonaws.com
// @connect      states.eu-south-1.amazonaws.com
// @connect      states.eu-west-3.amazonaws.com
// @connect      states.eu-north-1.amazonaws.com
// @connect      states.eu-south-2.amazonaws.com
// @connect      states.me-south-1.amazonaws.com
// @connect      states.me-central-1.amazonaws.com
// @connect      states.sa-east-1.amazonaws.com
// @connect      lambda-url.us-east-1.on.aws
// @connect      lambda-url.us-east-2.on.aws
// @connect      lambda-url.us-west-1.on.aws
// @connect      lambda-url.us-west-2.on.aws
// @connect      lambda-url.af-south-1.on.aws
// @connect      lambda-url.ap-east-1.on.aws
// @connect      lambda-url.ap-south-2.on.aws
// @connect      lambda-url.ap-southeast-3.on.aws
// @connect      lambda-url.ap-southeast-4.on.aws
// @connect      lambda-url.ap-south-1.on.aws
// @connect      lambda-url.ap-northeast-3.on.aws
// @connect      lambda-url.ap-northeast-2.on.aws
// @connect      lambda-url.ap-southeast-1.on.aws
// @connect      lambda-url.ap-southeast-2.on.aws
// @connect      lambda-url.ap-northeast-1.on.aws
// @connect      lambda-url.ca-central-1.on.aws
// @connect      lambda-url.eu-central-1.on.aws
// @connect      lambda-url.eu-central-2.on.aws
// @connect      lambda-url.eu-west-1.on.aws
// @connect      lambda-url.eu-west-2.on.aws
// @connect      lambda-url.eu-south-1.on.aws
// @connect      lambda-url.eu-west-3.on.aws
// @connect      lambda-url.eu-north-1.on.aws
// @connect      lambda-url.eu-south-2.on.aws
// @connect      lambda-url.me-south-1.on.aws
// @connect      lambda-url.me-central-1.on.aws
// @connect      lambda-url.sa-east-1.on.aws
// @connect      cloudformation.us-east-1.amazonaws.com
// @connect      cloudformation.us-east-2.amazonaws.com
// @connect      cloudformation.us-west-1.amazonaws.com
// @connect      cloudformation.us-west-2.amazonaws.com
// @connect      cloudformation.af-south-1.amazonaws.com
// @connect      cloudformation.ap-east-1.amazonaws.com
// @connect      cloudformation.ap-south-2.amazonaws.com
// @connect      cloudformation.ap-southeast-3.amazonaws.com
// @connect      cloudformation.ap-southeast-4.amazonaws.com
// @connect      cloudformation.ap-south-1.amazonaws.com
// @connect      cloudformation.ap-northeast-3.amazonaws.com
// @connect      cloudformation.ap-northeast-2.amazonaws.com
// @connect      cloudformation.ap-southeast-1.amazonaws.com
// @connect      cloudformation.ap-southeast-2.amazonaws.com
// @connect      cloudformation.ap-northeast-1.amazonaws.com
// @connect      cloudformation.ca-central-1.amazonaws.com
// @connect      cloudformation.eu-central-1.amazonaws.com
// @connect      cloudformation.eu-central-2.amazonaws.com
// @connect      cloudformation.eu-west-1.amazonaws.com
// @connect      cloudformation.eu-west-2.amazonaws.com
// @connect      cloudformation.eu-south-1.amazonaws.com
// @connect      cloudformation.eu-west-3.amazonaws.com
// @connect      cloudformation.eu-north-1.amazonaws.com
// @connect      cloudformation.eu-south-2.amazonaws.com
// @connect      cloudformation.me-south-1.amazonaws.com
// @connect      cloudformation.me-central-1.amazonaws.com
// @connect      cloudformation.sa-east-1.amazonaws.com
// @connect      events.us-east-1.amazonaws.com
// @connect      events.us-east-2.amazonaws.com
// @connect      events.us-west-1.amazonaws.com
// @connect      events.us-west-2.amazonaws.com
// @connect      events.af-south-1.amazonaws.com
// @connect      events.ap-east-1.amazonaws.com
// @connect      events.ap-south-2.amazonaws.com
// @connect      events.ap-southeast-3.amazonaws.com
// @connect      events.ap-southeast-4.amazonaws.com
// @connect      events.ap-south-1.amazonaws.com
// @connect      events.ap-northeast-3.amazonaws.com
// @connect      events.ap-northeast-2.amazonaws.com
// @connect      events.ap-southeast-1.amazonaws.com
// @connect      events.ap-southeast-2.amazonaws.com
// @connect      events.ap-northeast-1.amazonaws.com
// @connect      events.ca-central-1.amazonaws.com
// @connect      events.eu-central-1.amazonaws.com
// @connect      events.eu-central-2.amazonaws.com
// @connect      events.eu-west-1.amazonaws.com
// @connect      events.eu-west-2.amazonaws.com
// @connect      events.eu-south-1.amazonaws.com
// @connect      events.eu-west-3.amazonaws.com
// @connect      events.eu-north-1.amazonaws.com
// @connect      events.eu-south-2.amazonaws.com
// @connect      events.me-south-1.amazonaws.com
// @connect      events.me-central-1.amazonaws.com
// @connect      events.sa-east-1.amazonaws.com
// @connect      oidc.us-east-1.amazonaws.com
// @connect      oidc.us-east-2.amazonaws.com
// @connect      oidc.us-west-1.amazonaws.com
// @connect      oidc.us-west-2.amazonaws.com
// @connect      oidc.af-south-1.amazonaws.com
// @connect      oidc.ap-east-1.amazonaws.com
// @connect      oidc.ap-south-2.amazonaws.com
// @connect      oidc.ap-southeast-3.amazonaws.com
// @connect      oidc.ap-southeast-4.amazonaws.com
// @connect      oidc.ap-south-1.amazonaws.com
// @connect      oidc.ap-northeast-3.amazonaws.com
// @connect      oidc.ap-northeast-2.amazonaws.com
// @connect      oidc.ap-southeast-1.amazonaws.com
// @connect      oidc.ap-southeast-2.amazonaws.com
// @connect      oidc.ap-northeast-1.amazonaws.com
// @connect      oidc.ca-central-1.amazonaws.com
// @connect      oidc.eu-central-1.amazonaws.com
// @connect      oidc.eu-central-2.amazonaws.com
// @connect      oidc.eu-west-1.amazonaws.com
// @connect      oidc.eu-west-2.amazonaws.com
// @connect      oidc.eu-south-1.amazonaws.com
// @connect      oidc.eu-west-3.amazonaws.com
// @connect      oidc.eu-north-1.amazonaws.com
// @connect      oidc.eu-south-2.amazonaws.com
// @connect      oidc.me-south-1.amazonaws.com
// @connect      oidc.me-central-1.amazonaws.com
// @connect      oidc.sa-east-1.amazonaws.com
// @connect      portal.sso.us-east-1.amazonaws.com
// @connect      portal.sso.us-east-2.amazonaws.com
// @connect      portal.sso.us-west-1.amazonaws.com
// @connect      portal.sso.us-west-2.amazonaws.com
// @connect      portal.sso.af-south-1.amazonaws.com
// @connect      portal.sso.ap-east-1.amazonaws.com
// @connect      portal.sso.ap-south-2.amazonaws.com
// @connect      portal.sso.ap-southeast-3.amazonaws.com
// @connect      portal.sso.ap-southeast-4.amazonaws.com
// @connect      portal.sso.ap-south-1.amazonaws.com
// @connect      portal.sso.ap-northeast-3.amazonaws.com
// @connect      portal.sso.ap-northeast-2.amazonaws.com
// @connect      portal.sso.ap-southeast-1.amazonaws.com
// @connect      portal.sso.ap-southeast-2.amazonaws.com
// @connect      portal.sso.ap-northeast-1.amazonaws.com
// @connect      portal.sso.ca-central-1.amazonaws.com
// @connect      portal.sso.eu-central-1.amazonaws.com
// @connect      portal.sso.eu-central-2.amazonaws.com
// @connect      portal.sso.eu-west-1.amazonaws.com
// @connect      portal.sso.eu-west-2.amazonaws.com
// @connect      portal.sso.eu-south-1.amazonaws.com
// @connect      portal.sso.eu-west-3.amazonaws.com
// @connect      portal.sso.eu-north-1.amazonaws.com
// @connect      portal.sso.eu-south-2.amazonaws.com
// @connect      portal.sso.me-south-1.amazonaws.com
// @connect      portal.sso.me-central-1.amazonaws.com
// @connect      portal.sso.sa-east-1.amazonaws.com
// @connect      speedrun.nobackspacecrew.com
// @connect      awsapps.com
// @updateURL    https://speedrun.nobackspacecrew.com/userscripts/Speedrun.meta.js
// @downloadURL  https://speedrun.nobackspacecrew.com/userscripts/Speedrun.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFKElEQVR4Xu1aWUhUURjWybKissWahvYyzBIbairJkvYsilYqqCCSIjCMkGijXoKgjWiFDHpoeYg2WolswzKspGwVsc0WTMYS222x5T9+0fm513O7M8LUufPyzzn33DPnfN/3L3PuDQ/T/BOu+f7DHAAcBWiOgOMCoSqA9NjY7zWtbXNhYVDIC8oktQGitgBg48uioyVcW3ifUvtVfnuyq8vKyAaqhJBTgLYAmG2cu1fU9AfUVbEvJihKCBkFOABUR/3hzRoSs1nlHyTy0Z/SW/j+1x6fJSW0zsmxRaatm2oz6msLwJjkGMr7cVVewndafCnZ4qyPZC9GvCXLlQAyMs4K5eD62Nyblsi1NKg2GOdz/ncAJPcZIVVy2dfP1Aj2ogGTaTyY93RrRhi1jKsnYZWRfkdiuk8dwfz1byJmIHZYrQ9qTQHaAoCNFw/fIjH3ubSQ2l1vbyXLFcEVkDDBTeNczWcI6xtHNnXKXLItSsrJVvqFIvCxyjzGB10B2gLAN57QqTGBfPuxiN5o5+XmURtKABP9IpvQ14WTRX6H70MBEs0/G6U5u6hr40ERI9ZdPmiLTFs38cX8amsLANLX0Q3rCZfxmRFkv7y4RDbi3SGy4TOzJdyghJ4lOdT/wX+TLJSAbOBNzTDCO2zJwr0BMY9JA1aAtgDwjVe9Foz4C4QPzz18n+yJ7AcEcsroxZTn605YQP2IDXH5wpcLvLPJIlvMKNxNbV4XWPV5rK+VezDNs+vATkOybSvAAaC6dj+yXNTuZszD12AB3NdGk6jrlieJbD13LFmePaAIn8tF13lsgcL4/JkTu1OXO0koa87ak4ZKCFgB2gLAEUebM8IVgLYn9RjFBM682fghiR66dD63RCjhyCayp0+tIRKhLM486gUek/A7thWgPQBpyYuIwaEvLkiknWsjou627HWG4PJsYMb47wrSXySG9O1FhiuhInMW9Ud506VxO97Po7YZ8wErQDsADnfxSf/v+7eONCOP+q+8rCQ78WGeVAcg3yPa80l4fYAKsShhPg31JfrkW67dkJgPq25X5G+mftU5hOUYoC0A2DhnHAzfq4wjpHtEFpA1G5c2aKUxg0wCPLrjMj9gwXnDbyX9JfOWY4D2ALxMSpJ8f2dxZwJvxfM9hu6zqu1MGj+ovjjN7eoWeXtW1ACyqPy4L8P3i1fH1jgvmMvyiFNj/lH5PB+vjAHaAsClz6O6Ifx/dJopAfMgJqASxL9CVHaXYsQpMRRUP3qg9JPn756V2sg2qnVZVoD2AHDp/60CgLRKCZyRIfHDqOtTmThR4h+8J4B+PCOMuCfOBvH+gNVnhaYxQHsA4AJjU0S0PX5anNPb9TWuhMSRVyVywRyyDOoKs9/j66uaKk6Vq+6Kp8d4f0ClBFMFaA8A6Pm43U3R2K6PYR4OKBjnFaVZfWEYEH52Yt5RGc9oiCtevFtUvrQpWdsKcACoRuBLWjtSAHzMtf+Noe/yLMHTKH/Lq6hUnPAgz9vNMlxhUAIUW3fbsxqLPWUlqD0AQJgDgWiL60Acbfg4mPZ/f0KXENWRFfi/SLtK4DEG6whYAQ4ALPyiQML7ejw7gEHcpqobgqUEzDOnwyNpxQFnAZ5+tAeAAxKstl0l2GUe61ZmgWBtUDWP9gAAIDMgkE0ufmogYQmfx3kBzglUsSfkFOAAwHyEK6FleEepcsRwszpD5XIhqwAzJWgHAGfQ7qM4lRJCJguoFqo9ACqA7F7/ZxRgd4Oq+xwAVAj979d/ALo5bH2kwaUtAAAAAElFTkSuQmCC
// ==/UserScript==

/* globals jQuery, $, _, dayjs, XRegExp, JSON5, srInvoke, DOMPurify, domToPng */

//eval(Babel.transform((<><![CDATA[
(async function() {
    'use strict';
    let updatingPageTimer = undefined;
    let updatingPage = false;
    let awsuserInfoCookieParsed = false;
    let favIcons = {
        false:{},
        true:{}
};
 let curRegion = undefined;
 let dataAndEvents = {};
let credentialsCache = {};
let stackCache = {};
let functionCache = {};
const AsyncFunction = async function () {}.constructor;
let toolbarShown = false;
let githubSearchBarObserver = undefined;

const STORAGE_NAMESPACE = 'SR:';

//update check
const UPDATE_CHECK_KEY = `${STORAGE_NAMESPACE}version`;
let lastUpdateCheck = GM_getValue(UPDATE_CHECK_KEY, {timestamp: "", version: GM_info.script.version});
let newSRVersion = getLatestVersion(lastUpdateCheck.version) != GM_info.script.version ? lastUpdateCheck.version : undefined;
const currentDate = new Date().toISOString().split('T')[0];
if(currentDate > lastUpdateCheck.timestamp) {
    lastUpdateCheck.timestamp = currentDate;
    GM_setValue(UPDATE_CHECK_KEY, lastUpdateCheck);
    console.log('Running update check');
    retrieve(GM_info.scriptUpdateURL, false, false).then((value) => {
        let version = value.match(/\/\/\s*@version\s+(\d+\..*)/);
        if(version && version[1] && version[1] != lastUpdateCheck.version) {
            lastUpdateCheck.version = getLatestVersion(version[1]);
            GM_setValue(UPDATE_CHECK_KEY, lastUpdateCheck);
            newSRVersion = lastUpdateCheck.version != GM_info.script.version ? lastUpdateCheck.version : undefined;
        }
        console.log(newSRVersion ? `New version found: V${newSRVersion}` : "No updates today");
        if(newSRVersion) {
            insertSRUpdateButton(true);
        }
    });
}

if(window.location.hostname == 'github.com' || window.location.hostname == 'www.github.com') {
    $('link[rel~="icon"]').each((i,el) => {
        el = $(el);
        favIcons.false[el.attr('rel')] = {href: el.attr('href'), type: el.attr('type')};
        favIcons.true[el.attr('rel')] = {href: GM_info.script.icon, type: 'image/png'};
    });
    $('body').click(function(event) {
        //when you click on the body, close the github issues dropdown if visible.
        if($('#githubIssuesList').is(":visible") && ($(event.target).parents('#githubIssuesDetailsCloseBtn,#srToolbar').length==0 || $(event.target).parents('#githubIssuesList').length > 0)) {
            $('#githubIssuesDetails').removeAttr("open");
        }
    });
}
const FEDERATION_ENDPOINT = `https://speedrun-api${GM_getValue('g_use_beta_endpoint', false)?"-beta":""}.us-west-2.nobackspacecrew.com/v1`;
var IDENTITY_CENTER_ENDPOINT = GM_getValue('g_identity_center_endpoint', undefined);
const ASSUME_COMMAND = `${GM_getValue('g_use_beta_endpoint', false)?"d":""}assume`;
var sessionVariables = {};
const TIMESTAMPS_KEY = `${STORAGE_NAMESPACE}timestamps`;
const LAST_CREDS = `${STORAGE_NAMESPACE}lastCreds`;

class CredentialsBroker {
    getValidTemplateTypes() {throw new Error('Not implemented');};
    validate(variables) {
        throw new Error('Not implemented');
    }
    async getCredentials(variables) {
        throw new Error('Not implemented');
    }
    getCacheKey() {
        throw new Error('Not implemented');
    }
    getDangerKey() {
        throw new Error('Not implemented');
    }
    isDemoAccount(variables) {
        return
    }
}
class SpeedrunCredentialsBroker extends CredentialsBroker {
    getValidTemplateTypes() {return ['federate','lambda','copy','stepfunction','eventbridge']};
    validate(variables) {
        if(variables.account && variables.role && variables.partition) {
            //prepend speedrun to role name
            if(!variables.role.startsWith('speedrun-')) {
                variables.role = `speedrun-${variables.role}`
                }
            variables.roleArn = `arn:${variables.partition}:iam::${variables.account}:role/${variables.role}`;
        } else {
            throw new Error("Unable to determine role arn, role, account and partition must be defined");
        }
    }
    async getCredentials(variables) {
        switch(variables.internal.credentialsType || variables.internal.templateType) {
            case 'federate':
                return {
                    url: variables.internal.newCreds ? getFederationLink(variables.roleArn, variables.internal.consoleUrl, variables.roleDuration) : variables.internal.consoleUrl
                }
                break;
            case 'copy':
                variables.internal.duration = normalizeDuration(variables.roleDuration);
                return await interpolate(COPY_WITH_CREDS.replace('CREDS_REQUEST', CREDS_REQUEST.replace('DURATION',variables.internal.duration?`,"duration":${variables.internal.duration}`:'')),variables,false) + '\nif [ $? -eq 0 ]; then\nunset AWS_PROFILE\n' + variables.internal.result + "\nfi";
                break;
            case 'lambda':
            case 'stepfunction':
            case 'cfn':
            case 'eventbridge':
                return await getWebCredentials(variables.account, variables.role, variables.forceNewCreds, variables.roleDuration);
                break;
        }
    }
    getCacheKey() {
        return 'roleArn'
    }
    getDangerKey() {
        return 'role'
    }

    isDemoAccount(variables) {
        return variables.account && variables.account.startsWith("-");
    }
}

class GrantedCredentialsBroker extends CredentialsBroker {
    getValidTemplateTypes() {return ['federate','copy']};
    validate(variables) {
        if(!variables.profile || !variables.region) {
            throw new Error("profile and region must be defined");
        }
    }
    async getCredentials(variables) {
        return variables.internal.templateType == 'federate' ? { text: `${ASSUME_COMMAND} ${variables.internal.newCreds ? variables.profile : '-ar' } -cd '${variables.internal.consoleUrl.replaceAll("'","%27")}'`}
        : await interpolate(COPY_WITH_CREDS_GRANTED, variables, false) + '\nif [ $? -eq 0 ]; then\n' + variables.internal.result + "\nfi";
    }
    getCacheKey() {
        return 'profile';
    }
    getDangerKey() {
        return 'profile'
    }
}

class IdentityCenterCredentialsBroker extends CredentialsBroker {
    getValidTemplateTypes() {return ['federate','lambda','copy','stepfunction','eventbridge']};
    validate(variables) {
        if(!variables.permSet || !variables.region || !variables.account) {
            throw new Error("permission set (permSet) and region must be defined");
        }
        variables.accountAndPermSet = `${variables.account}:${variables.permSet}`;
    }
    async detectIDCRegion(startUrl) {
        let existingCreds = GM_getValue(startUrl,{});
        if(!existingCreds.region) {
            const text = await retrieve(startUrl);
            existingCreds.region = text.replaceAll(/.*?region\":\"([^\"]+).*/gm, '$1');
            if(!existingCreds.region) {
                throw new Error('Unable to detect Identity Center region to get credentials, check your url');
            }
            GM_setValue(startUrl, existingCreds);
        }
        return existingCreds;
    }

    async registerClient(startUrl, existingCreds) {
        if(!existingCreds.clientId || (existingCreds.clientSecretExpiresAt || 0)*1000 < (Date.now()+10000)) {
            const request = {url:`https://oidc.${existingCreds.region}.amazonaws.com/client/register`,
                             method: 'POST',
                             headers:{'Content-Type': 'application/json'},
                             body: JSON.stringify({"clientName": "Speedrun", "clientType": "public", "scopes": ["sso:account:access"]})};
            const result = await invoke(request);
            delete existingCreds.refreshToken;
            if(result.status != 200) {
                throw new Error('Unable to register Speedrun as a client with Identity Center to get credentials');
            }
            existingCreds = {...existingCreds, ...result.response};
            GM_setValue(startUrl, existingCreds);
        }
        return existingCreds;
    }

    async startDeviceAuthorization(startUrl, existingCreds) {
        if(!existingCreds.refreshToken) {
            const request = {url:`https://oidc.${existingCreds.region}.amazonaws.com/device_authorization`,

                             method: 'POST',
                             headers:{'Content-Type': 'application/json'},
                             body: JSON.stringify({"clientId": existingCreds.clientId, "clientSecret": existingCreds.clientSecret, startUrl})};
            const result = await invoke(request);
            if(result.status != 200) {
                throw new Error('Unable to register this browser with Identity Center to get credentials');
            }
            existingCreds.deviceCode = result.response.deviceCode;
            return result.response.verificationUriComplete;
        }
        return undefined;
    }

    async completeDeviceAuthorization(startUrl, existingCreds, url) {
        if(!url) {
            return existingCreds;
        }
        let authToast = $("#authToast");
        let tab = undefined;
        try {
            return await new Promise(async (resolve, reject) => {
                authToast.attr('hidden',false);
                await sleep(200);
                tab = GM_openInTab(url, {active:true,setParent:true});
                let attempts = 550;
                tab.onclose = () => {
                    attempts = 0;
                };
                $('#authToastCancelled').on('click.sr', () => {authToast.attr('hidden', true);attempts = 0});
                let timer = setInterval(async ()=>{
                    try {
                        if(attempts-- == 0) {
                            throw new Error('Timed out waiting for user authentication.  Unable to get credentials');
                        }
                        const tokenRequest = {
                            url:`https://oidc.${existingCreds.region}.amazonaws.com/token`,
                            method: 'POST',
                            headers:{'Content-Type': 'application/json'},
                            body: JSON.stringify({"clientId": existingCreds.clientId, "clientSecret": existingCreds.clientSecret, "grantType":"urn:ietf:params:oauth:grant-type:device_code",
                                                  "deviceCode":existingCreds.deviceCode})};
                        const tokenResult = await invoke(tokenRequest);
                        //todo expired
                        if(tokenResult.status == 400) {
                            if(tokenResult.response.error != 'authorization_pending'){
                                throw new Error('Unable to complete browser registration with Identity Center to get credentials');
                            }
                        }
                        else if(tokenResult.status != 200) {
                            throw attempts == -1 ? new Error('Unable to get credentials, user cancelled authentication') : new Error('Unable to complete browser registration with Identity Center to get credentials');
                        } else {
                            clearInterval(timer);
                            existingCreds = {...existingCreds, ...tokenResult.response};
                            existingCreds.accessTokenExpiration = Date.now() + 3600000;
                            GM_setValue(startUrl, existingCreds);
                            resolve(existingCreds);
                        }
                    } catch(e) {
                        clearInterval(timer);
                        reject(e);
                    }
                }, 1000)
                });
        }finally {
            authToast.attr('hidden', true);
            $('#authToastCancelled').off('click.sr');
            if(tab && !tab.closed) {
                tab.close();
            }
            window.focus();
        }
    }

    async refreshAccessToken(startUrl, existingCreds){
        if(!existingCreds.accessTokenExpiration || existingCreds.accessTokenExpiration < Date.now() - 10000) {
            const tokenRequest = {url:`https://oidc.${existingCreds.region}.amazonaws.com/token`,
                                  method: 'POST',
                                  headers:{'Content-Type': 'application/json'},
                                  body: JSON.stringify({"clientId": existingCreds.clientId, "clientSecret": existingCreds.clientSecret, "grantType":"refresh_token",
                                                        "refreshToken":existingCreds.refreshToken})};
            const tokenResult = await invoke(tokenRequest);
            if(tokenResult.response.error == 'invalid_grant') {
                //refresh token is bad or expired, clear it so we can restart device auth
                delete existingCreds.refreshToken;
                return existingCreds;
            }
            if(tokenResult.status != 200) {
                throw new Error('Unable to refresh access token with Identity Center to get credentials');
            }
            existingCreds = {...existingCreds, ...tokenResult.response};
            existingCreds.accessTokenExpiration = Date.now() + 3600000;
            GM_setValue(startUrl, existingCreds);
        }
        return existingCreds;
    }

    getCachedCredentials(account, role, forceNewCreds, duration) {
        const cacheKey = `${account}:${role}`;
        const cachedCredentials = credentialsCache[cacheKey];
        if(!forceNewCreds && cachedCredentials && !needsRefresh(cachedCredentials.expiration, cachedCredentials.duration)) {
            console.log('Using cached credentials');
            return cachedCredentials.credentials;
        }
    }

    async getCredentials(variables) {
        const type = variables.internal.credentialsType || variables.internal.templateType;
        switch(type) {
            case 'federate':
                return {
                    url: variables.internal.newCreds ? getFederationLink(variables.permSet, variables.internal.consoleUrl, variables.roleDuration, variables.account) : variables.internal.consoleUrl
                }
                break;
            case 'lambda':
            case 'stepfunction':
            case 'cfn':
            case 'eventbridge':
            case 'copy': {
                let credentials = this.getCachedCredentials(variables.account, variables.permSet, variables.forceNewCreds, variables.roleDuration);
                if(credentials) {
                    return credentials;
                }
                const startUrl = variables.ssoStartUrl || GM_getValue('g_identity_center_endpoint', undefined);
                if(!startUrl) {
                    throw new Error('ssoStartUrl is required to get credentials');
                }
                startUrl.replaceAll(/\/(start(\/)?)$/gm,'/start');

                // detect region
                let existingCreds = await this.detectIDCRegion(startUrl);

                // get sso client
                existingCreds = await this.registerClient(startUrl, existingCreds);

                for(let pass=0; pass<2; pass++) {
                    // start device auth
                    let deviceUrl = await this.startDeviceAuthorization(startUrl, existingCreds);
                    existingCreds = await this.completeDeviceAuthorization(startUrl, existingCreds, deviceUrl);
                    existingCreds = await this.refreshAccessToken(startUrl, existingCreds);
                    //if refresh token still exists it's good, break out of loop, no need do another device auth pass
                    if(existingCreds.refreshToken) {
                        pass = 2;
                    }
                }
                const request = {url:`https://portal.sso.${existingCreds.region}.amazonaws.com/federation/credentials?role_name=${variables.permSet}&account_id=${variables.account}`,
                                 method: 'GET',
                                 headers:{'x-amz-sso_bearer_token': existingCreds.accessToken},
                                };
                const result = await invoke(request);
                if(result.status != 200) {
                    throw new Error(`Unable to get credentials: ${result.responseText}`);
                }
                credentialsCache[`${variables.account}:${variables.permSet}`] = {credentials: result.response.roleCredentials};

                if(type=='copy') {
                    return `export AWS_CREDENTIAL_EXPIRATION=${dayjs(result.response.roleCredentials.expiration).toISOString()}
export AWS_ACCESS_KEY_ID=${result.response.roleCredentials.accessKeyId}
export AWS_SECRET_ACCESS_KEY=${result.response.roleCredentials.secretAccessKey}
export AWS_SESSION_TOKEN=${result.response.roleCredentials.sessionToken}
export AWS_DEFAULT_REGION=${variables.region}
export AWS_REGION=${variables.region}
${variables.internal.result}`
                }
                return result.response.roleCredentials;

                break
            }
        }
    }
    getCacheKey() {
        return 'accountAndPermSet';
    }
    getDangerKey() {
        return 'permSet';
    }
}

let credentialsBroker = getCredentialsBroker();

dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_duration);
dayjs.extend(window.dayjs_plugin_relativeTime);
dayjs.extend(window.dayjs_plugin_dayjs_parser);
DOMPurify.addHook('afterSanitizeAttributes', function (node) {
    // set all elements owning target to target=_blank
    if ('target' in node) {
        node.setAttribute('target', '_blank');
        node.setAttribute('rel', 'noopener');
    }
});
var lastPath = location.pathname + location.search;

function getFederationLink(arn, destination, duration, account) {
    const normalizedDuration = normalizeDuration(duration);
    const isRole = arn.includes(":role/");
    let url = undefined;
    if(isRole) {
        url = new URL(`${FEDERATION_ENDPOINT}/federate/${arn.split(':')[4]}`)
        url.searchParams.append('role',arn.split(/:(?:assumed-)?role\//)[1]);
    }
    else {
        url = new URL(`${IDENTITY_CENTER_ENDPOINT.replaceAll(/\/(start(\/)?)$/gm,'')}/start/#/console`);
        url.searchParams.append('account_id', account);
        url.searchParams.append('role_name', arn);
    }
    url.searchParams.append('destination',destination.replace(/\.com\/cloudwatch\/home/,'.com/cloudwatch/deeplink.js'));
    if(normalizedDuration) {
        url.searchParams.append('duration', normalizedDuration);
    }
    return url.toString();
}

function getCookie(cookieName) {
    let name = `${cookieName}=`;
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');
    for(let cookie of cookies) {
        cookie = cookie.trimStart();
        if (cookie.startsWith(name)){
            return cookie.substring(name.length);
        }
    }
    return undefined;
}

function addSpeedrunLink() {
    if($('#awsc-navigation__more-menu--list').length > 0) {
        if(!$('#speedRunLink').length || !awsuserInfoCookieParsed) {
            if(awsuserInfoCookieParsed) {
                return;
            }
            let cookie = getCookie('aws-userInfo');
            awsuserInfoCookieParsed = true;
            let lastRolePersisted = false;
            let region = $("meta[name='awsc-mezz-region']").attr("content");
            if(cookie && region) {
                let userInfo = JSON.parse(cookie);
                const ARN_REGEX = /^(arn:aws:sts::(?<account>\d+):assumed-role\/(?<role>(AWSReservedSSO_[\w+=,.@-]+?(_[a-z0-9]+)|speedrun-[\w+=,.@-]{1,53})))\/[\w+=,.@-]{2,64}$/m
                let result = ARN_REGEX.exec(userInfo.arn);
                if(result) {
                    console.log('Adding speedrun link');
                    let [,arn, account, role] = result;
                    let expiration = undefined;
                    let isIdentityCenter = false;
                    let permSet = undefined;
                    if(role.startsWith('AWSReservedSSO_')){
                        isIdentityCenter = true;
                        permSet = role.substring(15);
                        arn = permSet = permSet.substring(0,permSet.lastIndexOf('_'));
                        IDENTITY_CENTER_ENDPOINT = userInfo.issuer.substring(0,userInfo.issuer.indexOf('/start')+6);
                    } else {
                        arn = `arn:aws:iam::${account}:role/${role}`;
                        //attempt to extract expiration time from speedrun issuer
                        if(userInfo.issuer && userInfo.issuer.startsWith(FEDERATION_ENDPOINT)){
                            try {
                                expiration = new URL(userInfo.issuer).searchParams.get('expiration');
                                if(expiration) {
                                    expiration = parseInt(expiration);
                                }
                            } catch(e) {
                                console.error('Invalid issuer expiration',userInfo.issuer);
                            }
                        }
                    }
                    persistIfNewRoleOrExpiration(isIdentityCenter?`${account}:${permSet}`:arn, region, expiration);
                    lastRolePersisted=true;
                    let navBar = $('#awsc-navigation__more-menu--list');
                    let helpButton = navBar.first().find('button').first();
                    let srLink = helpButton.clone();
                    srLink.attr('id','speedRunLink');
                    srLink.attr('title',`Speedrun Link in account: ${account} with ${isIdentityCenter? `permission set: ${permSet}` : `role: ${role}`}`);
                    srLink.html(`<img width="20" height="20" style="vertical-align:middle" src="${GM_info.script.icon}"/>`);
                    srLink.on('click',(event)=>{
                        let url = getFederationLink(arn,window.location.href,undefined,isIdentityCenter?account:undefined);
                        let curHtml = srLink.html();
                        console.log('Speedrun link',url);
                        GM_setClipboard(url);
                        srLink.html('Copied!');
                        setTimeout(()=>{srLink.html(curHtml)}, 2000);

                    });
                    helpButton.before(srLink);
                }
            }
            if(!lastRolePersisted && !awsuserInfoCookieParsed) {
                persistIfNewRoleOrExpiration();
                lastRolePersisted = true;
            }
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
        try {
            return decodeURIComponent(obj.replace(/\*/g,'%'));
        } catch(e) {
            return obj;
        }
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
            $.extend(result, JSON.parse(seg.split('&')[0]));
        }catch(error) {
            console.log(`Unable to parse: ${seg}`);
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

function waitForSelector(selector, source = document) {
    return new Promise(resolve => {
        if (source.querySelector(selector)) {
            return resolve(source.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (source.querySelector(selector)) {
                resolve(source.querySelector(selector));
                observer.disconnect();
            }

        });

        observer.observe(source.body, {
            childList: true,
            subtree: true
        });
    });
}

function extractCloudWatchTimeAndAddSnapshot() {
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
        case 'alarmsV2:alarm':
            waitForSelector('#microConsole-Alarms').then(async (result) => {
                while(result.contentWindow.document.readyState !== 'complete'){
                    await sleep(500);
                }
                waitForSelector('div > button[data-test-id=btn-refresh]', result.contentWindow.document).then(
                    async(refreshDiv) =>
                    {
                        if(!result.contentWindow.document.getElementById('srSnapshot')) {
                            // sleep until refresh button stops spinning.
                            while($(refreshDiv).attr('disabled') == 'disabled'){
                                await sleep(100);
                            }
                            let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M29 26H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.46l1.71-2.55A1 1 0 0 1 12 4h8a1 1 0 0 1 .83.45L22.54 7H29a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1ZM4 24h24V9h-6a1 1 0 0 1-.83-.45L19.46 6h-6.92l-1.71 2.55A1 1 0 0 1 10 9H4Z"/><path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a6 6 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4Z"/></svg>';
                            let snapshotDiv = $(refreshDiv).parent().clone();
                            let snapshotButton = $(snapshotDiv).find('button');
                            snapshotButton.attr('id','srSnapshot').attr('title','Snapshot visualization').attr('aria-label','Snapshot visualization').attr('data-test-id','snapshot');
                            snapshotButton.off('click');
                            let span = snapshotButton.find('span');
                            span.find('svg').replaceWith($(svg));
                            snapshotButton.on('click', (event)=> {
                                domSnapshot(refreshDiv.ownerDocument.querySelector('.graph-section-content').parentElement, `CloudWatch-${dayjs().format()}.png`);
                            });
                            $(refreshDiv).parent().after(snapshotDiv);
                        }
                    }
                );
            });
            return;
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
        let timestamp = {};
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

    if(src=='logsV2:logs-insights') {
        waitForSelector('#microConsole-Logs').then(async (result) => {
            while(result.contentWindow.document.readyState !== 'complete'){
                await sleep(500);
            }
            const buttonPortalSelector = '.query-detail-tab-button-options';
            waitForSelector(buttonPortalSelector, result.contentWindow.document).then(
                histogram =>
                {
                    if(!result.contentWindow.document.getElementById('srSnapshot')) {
                        let svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M29 26H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h6.46l1.71-2.55A1 1 0 0 1 12 4h8a1 1 0 0 1 .83.45L22.54 7H29a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1ZM4 24h24V9h-6a1 1 0 0 1-.83-.45L19.46 6h-6.92l-1.71 2.55A1 1 0 0 1 10 9H4Z"/><path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a6 6 0 0 1-6 6Zm0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4Z"/></svg>';
                        let isLargeButton = false;
                        let snapshotButton = $(histogram).find('> button');
                        if (!snapshotButton.length) {
                            snapshotButton = $(histogram).find('button');
                            isLargeButton = true;
                        }
                        snapshotButton = snapshotButton.first().clone();
                        snapshotButton.attr('id','srSnapshot').attr('title','Snapshot visualization').attr('aria-label','Snapshot visualization').attr('data-test-id','snapshot');
                        if (isLargeButton) {
                            snapshotButton.addClass('logs--button-separator-left');
                            snapshotButton.find('span').text('Snapshot');
                        } else {
                            snapshotButton.find('svg').replaceWith(svg);
                        }
                        snapshotButton.off('click');
                        snapshotButton.on('click', (event)=> {
                            if(histogram) {
                                domSnapshot(histogram.ownerDocument.querySelector('.logs__histogram') || histogram.ownerDocument.querySelector('.cw-chart'), `CloudWatch-${dayjs().format()}.png`);
                            }
                        });
                        $(result.contentWindow.document).find(buttonPortalSelector).append(snapshotButton);
                    }
                }
            );
        });
    }
}

function isSRPage() {
    // when page not found this id appears
    if($('#not-found-search').length) {
        return false;
    }
    let result = WIKI_REGEX.exec(location.pathname) || REPO_REGEX.exec(location.pathname) || ACTIONS_REGEX.exec(location.pathname);
    if(REPO_REGEX.exec(location.pathname) && location.search) {
        const params = new URLSearchParams(location.search);
        if(params.has('plain')) {
            return false;
        }
    }
    return result && !result.groups.path.match(/^\/(sessions|login|settings|features)\//i) ? result : null;
}

if(location.host.endsWith('console.aws.amazon.com')) {
    window.addEventListener('hashchange', extractCloudWatchTimeAndAddSnapshot, false);
    let bodyList = document.querySelector("body");
    if(bodyList) {
        let observer = new MutationObserver((mutations, o) => {
            if(addSpeedrunLink()) {
                o.disconnect();
            }
        });
        if(!addSpeedrunLink()) {
            observer.observe(bodyList, {attributeFilter: [ "data-testid"], childList:true});
        }
        extractCloudWatchTimeAndAddSnapshot();
    }
    return;
}

const ISSUES_PATH_REGEX = /\/issues\/(\d+)$/;
if (window.onurlchange === null) {
    window.addEventListener('urlchange', async (info) => {
        let location = new URL(info.url);
        //if(lastPath !== location.pathname + location.search) {
        persistIfIssue();
        scheduleUpdate(location);
        //}
    });
}

async function updatePageTimerFired(location) {
    updatingPageTimer = undefined;
    if(isSRPage()) {
        persistLastPath(location);
        //wait for page to render
        await waitForSelector('.markdown-body > *');
        let maxAttempts = 50;
        while(doneLoading()>0 && maxAttempts-- > 0) {
            await sleep(100);
        }
        if(maxAttempts > 0) {
            await updatePage(`urlchange ${lastPath}`);
        } else {
            console.log('No changes detected');
            return;
        }
    } else {
        persistLastPath(location);
    }
    showToolbarOnPage();
}

function scheduleUpdate(location) {
    if(updatingPageTimer) {
        clearTimeout(updatingPageTimer);
    }
    updatingPageTimer = setTimeout(updatePageTimerFired, 100, location);
}

function persistLastPath(location) {
    console.log(`Changing lastpath to ${location.pathname + location.search} from ${lastPath}` );
    lastPath = location.pathname + location.search;
}

async function sleep(interval=500) {
    return new Promise(resolve => setTimeout(resolve, interval));
}

function destroySelect2(...selectors) {
    selectors.forEach(selector => {
        let element = $(selector);
        if (element && element.hasClass("select2-hidden-accessible")) {
            element.next().remove();
        }});
}

function bindDataAndEvents() {
    destroySelect2("#service","#region");
    Object.keys(dataAndEvents).forEach((key) => {
        let element = $(`#${key}`);
        if(element) {
            if(dataAndEvents[key].data) {
                for (const [dKey, value] of Object.entries(dataAndEvents[key].data)) {
                    element.data(dKey, value);
                }
            }
            if(dataAndEvents[key].events) {
                element.off();
                for (const [event, value] of Object.entries(dataAndEvents[key].events)) {
                    element.on(event, value);
                }
            }
        } else {
            console.warning(`Unable to bind, no such id: ${key}`);
        }
    })
    $('#service,#region').select2(
        {
            dropdownAutoWidth : true,
            width:'copy'
        });
    $('#service').children().length ? $('#service').next().show() : $('#service').next().hide();
}

const HEADER = /^#(!?\w+(\.?\w)*)(?:[ \t]+(?:[Ss]ervice=)([^\s-]+))?([ \t]*{.*})?(?:[ \t]*\n)?/;
const LITERAL = /\$\{.+?\}/s;
const PROMPT = /~~~(?:(\w[\w-:]+)=)?(.+?)(\s*{.*?\}\s*)?~~~/;
const PROMPT_G = new RegExp(PROMPT, 'g');
const COMMENT = /(^\s*|[^\s](\s+))((\/\/.*)(\n)?)/;
const COMMENT_G = new RegExp(COMMENT, 'mg');
const OUTPUT = /^-{3,}output-{3,}/im;
const TRAILING_WHITESPACE = /\s+$/;
const HAS_DOM_CONTENT_REGEX = /\[object \w*Element\]/;
const SR_CONFIG = "srConfig";
const GLOBAL_PREFIX = "g_";
const SR_ENABLED_PATHS = `${STORAGE_NAMESPACE}enabledPaths`;
const SR_REGION_FILTER = "srRegionFilter";
const SR_HIDE_USER_SERVICE = "srHideUserService";
const SR_SERVICE_FILTER = "srServiceFilter";
const USER_SERVICE = "${user}";
const varNameCache = new Map();
const REGION_REGEX = /^(?<area>.*?) \((?<prettyName>.*?)\)/;
const WIKI_REGEX = /^(?<path>\/.*?\/.*?)\/wiki\/?.*(?<!\/_(edit|new))$/i;
const REPO_REGEX = /^(?<path>\/[^\/]+\/[^\/]+)(\/|(\/blob\/.*\/[^\/]+\.md)|(\/tree\/([^\/]\/?)+(.*\/[^\/]+\.md)?))?$/i;
const ACTIONS_REGEX = /^(?<path>\/.*?\/.*?\/actions)\/runs\/\d+$/i;
const LAST_REGION_KEY = `${STORAGE_NAMESPACE}lastRegion`;
const LAST_SERVICE_KEY = `${STORAGE_NAMESPACE}lastService`;
const ISSUES_KEY = `${STORAGE_NAMESPACE}issues`;
const CREDS_REQUEST = `curl -s -S -b ~/.speedrun/cookie -L -X POST -H "Content-Type: application/json; charset=UTF-8" -A "Speedrun V${GM_info.script.version}" -d '{"role": "$\{role}"DURATION}' -X POST ${FEDERATION_ENDPOINT}/credentials/$\{account}`;
const PERL_EXTRACT = `perl -ne 'use Term::ANSIColor qw(:constants); my $line = $_; my %mapping = (SessionToken=>"AWS_SESSION_TOKEN",SecretAccessKey=>"AWS_SECRET_ACCESS_KEY",AccessKeyId=>"AWS_ACCESS_KEY_ID",Expiration=>"AWS_CREDENTIAL_EXPIRATION"); while (($key, $value) = each (%mapping)) {my $val = $line; die BOLD WHITE ON_RED . "Unable to get credentials did you run srinit and do you have access to the role?" . RESET . RED . "\\n$line" . RESET . "\\n" if ($line=~/error/);$val =~ s/.*?"$key":"(.*?)".*$/$1/e; chomp($val); print "export $value=$val\\n";}print "export AWS_DEFAULT_REGION=$\{region}\\nexport AWS_REGION=$\{region}\\n";'`
const COPY_WITH_CREDS = `credentials=$(CREDS_REQUEST | ${PERL_EXTRACT}) && $(echo $credentials)`;
const COPY_WITH_CREDS_GRANTED = `${ASSUME_COMMAND} $\{profile}`;
const COPY_WITH_REGION = `export AWS_DEFAULT_REGION=$\{region}\nexport AWS_REGION=$\{region}\n`;
const USED_SEARCH_PARAMS = new Set();
let regionMap = {
    "US East (N. Virginia)": "us-east-1",
    "US East (Ohio)": "us-east-2",
    "US West (N. California)": "us-west-1",
    "US West (Oregon)": "us-west-2",
    "Africa (Cape Town)": "af-south-1",
    "Asia Pacific (Hong Kong)": "ap-east-1",
    "Asia Pacific (Hyderabad)": "ap-south-2",
    "Asia Pacific (Jakarta)": "ap-southeast-3",
    "Asia Pacific (Melbourne)": "ap-southeast-4",
    "Asia Pacific (Mumbai)": "ap-south-1",
    "Asia Pacific (Osaka)": "ap-northeast-3",
    "Asia Pacific (Seoul)": "ap-northeast-2",
    "Asia Pacific (Singapore)": "ap-southeast-1",
    "Asia Pacific (Sydney)": "ap-southeast-2",
    "Asia Pacific (Tokyo)": "ap-northeast-1",
    "Canada (Central)": "ca-central-1",
    "Europe (Frankfurt)": "eu-central-1",
    "Europe (Zurich)": "eu-central-2",
    "Europe (Ireland)": "eu-west-1",
    "Europe (London)": "eu-west-2",
    "Europe (Milan)": "eu-south-1",
    "Europe (Paris)": "eu-west-3",
    "Europe (Stockholm)": "eu-north-1",
    "Europe (Zaragoza)": "eu-south-2",
    "Middle East (Bahrain)": "me-south-1",
    "Middle East (UAE)": "me-central-1",
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

addEventListener('popstate', async (event) => {
    //when the back button is pressed, all events/data is lost, this is an attempt to wire those back up
    let result = isSRPage();
    if(result) {
        setTimeout(async () => {
            let [,path] = result;
            let pageEnabled = await updatePageConfig(path);
            bindDataAndEvents();
            showToolbarOnPage();
            $("#service").trigger('change');
        }
                   , 50);
    }
});

function isPartition(str) {
    return Object.keys(partitionMap).includes(str);
}
let templates = {
    settings : `~~~g_usernameOverride=Username Override {label:'Override your GitHub username when setting the user variable (optional)'}~~~
                    ~~~g_aws-accountId=AWS Account Id {placeholder:'123456789012', pattern:'\\\\d{12}', label:"Your personal AWS account id <a href='https://github.com/No-Backspace-Crew/Speedrun/wiki/Creating-Speedrun-Roles'>Read more</a>"}~~~
                    ~~~g_role=Role {"default":"speedrun-ReadOnly", label:"Your personal default role"}~~~
                    ~~~g_use_beta_endpoint=Use Beta Endpoint {"type":"checkbox","default":false, "cast":"Boolean", label:"For testing beta features"}~~~
                    ~~~g_credentials_broker=Credentials Broker {"type":"select",options: {'Speedrun (Preferred)':'speedrun', 'Identity Center (Experimental)':'identitycenter','Granted (Experimental)':'granted'}, "default":'speedrun', label:"The credentials broker to get credentials from"}~~~
                    ~~~g_granted_profile=Granted Profile {label:"If using Granted, your personal profile"}~~~
                    ~~~g_identity_center_endpoint=Identity Center Url {label:"Identity Center start url if using your personal profile", placeholder:'https://your_subdomain.awsapps.com', pattern:'https:\\\\/\\\\/[a-z0-9\\\\-]+\\\\.awsapps\\\\.com(\\\\/(start(\\\\/)?))?'}~~~
                    ~~~g_identity_center_permSet=Identity Center Permission Set  {label:"If using Identity Center, your permission set"}~~~
                    ~~~g_force_new_creds=Force New Credentials {"type":"checkbox","default":false, "cast":"Boolean", label:"Gets new credentials every request, useful during testing"}~~~`,
    copy : "${content}",
    download : {
        value: "data:${contentType};base64,${btoa(unescape(encodeURIComponent(content)))}",
        filename: "${dayjs().format()}.txt",
        contentType: "text/plain"
    },
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
            "Amazon Verified Permissions":"verifiedpermissions",
            "Amplify": "amplify",
            "API Gateway": "apigateway",
            AppConfig : "systems-manager/appconfig/?region=${region}",
            "AppSync": "appsync",
            "Athena": "athena/home?region=${region}#query",
            "Auto Scaling": "awsautoscaling",
            Bedrock: "bedrock",
            "Billing": "billing",
            "Certificate Manager": "acm",
            "CloudFormation": "cloudformation",
            "CloudFront": "cloudfront/v4/home?region=us-east-1",
            "CloudShell": "cloudshell",
            "CloudTrail": "cloudtrail",
            "CloudWatch Alarms": "cloudwatch/home?region=${region}#alarmsV2:",
            "CloudWatch Dashboards": "cloudwatch/home?region=${region}#dashboards:",
            "CloudWatch Logs": "cloudwatch/home?region=${region}#logsV2:log-groups",
            "CloudWatch Logs Insights": "cloudwatch/home?region=${region}#logsV2:logs-insights",
            "CloudWatch Metrics": "cloudwatch/home?region=${region}#metricsV2:",
            "CloudWatch X-Ray": "cloudwatch/home?region=${region}#xray:traces",
            "CodeBuild": "codesuite/codebuild/projects?region=${region}",
            "CodeDeploy": "codedeploy",
            "Cognito" : "cognito",
            "DynamoDB": "dynamodbv2",
            "EC2": "ec2",
            "ECS": "ecs",
            "EKS": "eks",
            "Elastic Beanstalk": "elasticbeanstalk",
            "EventBridge": "events",
            "Home": "console",
            "IAM": "iamv2",
            "Identity Center": "singlesignon",
            "Kinesis": "kinesis",
            "KMS": "kms",
            "Lambda": "lambda",
            "Load Balancers": "ec2/home?region=${region}#LoadBalancers:",
            "Organizations": "organizations/v2",
            "Parameter Store": "systems-manager/parameters/?region=${region}&tab=Table",
            "Resource Access Manager": "ram",
            "Resource Explorer": "resource-explorer",
            "Route 53": "route53",
            "RDS": "rds",
            "Secrets Manager": "secretsmanager",
            SES: "ses",
            "SNS": "sns",
            "SQS": "sqs",
            "Step Functions":"states/home?region=${region}#/statemachines",
            "S3": "s3",
            "Systems Manager": "systems-manager",
            "VPC": "vpc"
        }
    },
    link : "${lastLine(content)}",
    DDBItem: {
        type : "federate",
        value : "dynamodbv2/home?region=${region}#edit-item?table=${tableName}&itemMode=2&pk=${partitionKey}&sk${typeof sortKey === 'undefined' ? '' : `=${sortKey}`}&route=ROUTE_ITEM_EXPLORER"
    },
    DDBTable: {
        type : "federate",
        value : "dynamodbv2/home?region=${region}#item-explorer?initialTagKey=&table=${tableName}"
    },
    EC2Instance: {
        type: "federate",
        value: "ec2/home?region=${region}#InstanceDetails:instanceId=${typeof instanceId === 'undefined' ? content.trim() : `${instanceId}`}"
    },
    S3Bucket: {
        type : "federate",
        value : "s3/buckets/${bucket}?region=${region}&tab=objects"
    },
    S3Object: {
        type : "federate",
        value : "s3/object/${bucket}?region=${region}&prefix=${key}"
    },
    CWLInsights: {
        type : "federate",
        value : "cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail$3D$257E$2528end$257E0$257Estart$257E${typeof start === 'undefined' ? '-3600' : start}$257EtimeType$257E$2527RELATIVE$257Eunit$257E$2527seconds$257EeditorString$257E$2527${encodeCloudWatchInsightsParam(content)}$257EisLiveTail$257Efalse$257Esource$257E$2528${encodeCloudWatchURL(prepend(`~'`,arrayify(logGroups).map(x => encodeCloudWatchInsightsParam(x))).join(''))}$2529$2529"
    },
    CWLInsightsSRTimestamp: {
        type : "federate",
        value : "cloudwatch/home?region=${region}#logsV2:logs-insights$3FqueryDetail$3D$257E$2528${srTimestamp()}$257EeditorString$257E$2527${encodeCloudWatchInsightsParam(content)}$257EisLiveTail$257Efalse$257Esource$257E$2528${encodeCloudWatchURL(prepend(`~'`,arrayify(logGroups).map(x => encodeCloudWatchInsightsParam(x))).join(''))}$2529$2529"
    },
    CloudWatchLogs : {
        type: "federate",
        value : "cloudwatch/home?region=${region}#logsV2:log-groups/log-group/${encodeCloudWatchURL(logGroup)}"
    },
    NewGitHubWiki : {
        type: "link",
        value: "https://github.com/${slugify(org)}/${slugify(repo)}/wiki/_new?wiki[name]=${encodeURIComponent(title)}&wiki[body]=${encodeURIComponent(content)}"
    },
    EditGitHubWiki : {
        type: "link",
        value: "https://github.com/${slugify(org)}/${slugify(repo)}/wiki/${slugify(title)}/_edit"
    },
    '!CWDashboard' : {
        type: "iframe",
        value: "https://cloudwatch.amazonaws.com/dashboard.html?dashboard=${dashboardName}&context=${content}"
    },
    '!YouTube' : {
        type: "iframe",
        width: 560,
        height: 340,
        value: "https://www.youtube.com/embed/${content}",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen:'true'
    },
    iframe : {
    },
    lambda : {
        value: "${content.trim().length = 0 ? undefined : content}",
        creds: true
    },
    '!lambda' : {
        value: "${content.trim().length = 0 ? undefined : content}",
        creds: true,
        type: 'lambda'
    },
    '!stepfunction' : {
        type: 'stepfunction',
        value: "${content.trim().length = 0 ? undefined : content}",
        creds: true
    },
    '!eventbridge' : {
        type: 'eventbridge',
        value: "${content.trim().length = 0 ? undefined : content}",
        creds: true
    },
    stepfunctionExecution : {
        type: "federate",
        value: "states/home?region=${region}#/v2/executions/details/${executionArn?executionArn:`arn:${partition}:states:${region}:${account}:execution:${functionName}:${execution}`}"
    }
};

var pageConfig = {};

//https://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function escapeRegex(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

let user = $("meta[name='user-login']").attr("content");

let tabNames = {
    "Preview" : "M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z",
    "Code" : "M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z",
    "Debug" : "M4.72.22a.75.75 0 011.06 0l1 .999a3.492 3.492 0 012.441 0l.999-1a.75.75 0 111.06 1.061l-.775.776c.616.63.995 1.493.995 2.444v.327c0 .1-.009.197-.025.292.408.14.764.392 1.029.722l1.968-.787a.75.75 0 01.556 1.392L13 7.258V9h2.25a.75.75 0 010 1.5H13v.5c0 .409-.049.806-.141 1.186l2.17.868a.75.75 0 01-.557 1.392l-2.184-.873A4.997 4.997 0 018 16a4.997 4.997 0 01-4.288-2.427l-2.183.873a.75.75 0 01-.558-1.392l2.17-.868A5.013 5.013 0 013 11v-.5H.75a.75.75 0 010-1.5H3V7.258L.971 6.446a.75.75 0 01.558-1.392l1.967.787c.265-.33.62-.583 1.03-.722a1.684 1.684 0 01-.026-.292V4.5c0-.951.38-1.814.995-2.444L4.72 1.28a.75.75 0 010-1.06zM6.173 5h3.654A.173.173 0 0010 4.827V4.5a2 2 0 10-4 0v.327c0 .096.077.173.173.173zM5.25 6.5a.75.75 0 00-.75.75V11a3.5 3.5 0 107 0V7.25a.75.75 0 00-.75-.75h-5.5z",
    "Output" : "M0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25Zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25ZM7.25 8a.749.749 0 0 1-.22.53l-2.25 2.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L5.44 8 3.72 6.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.25 2.25c.141.14.22.331.22.53Zm1.5 1.5h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5Z"
}

function injectToolbar() {
    if(!$('#srToolbar').length) {
        $("head").append(`<style>${GM_getResourceText('select2css')}
        input:invalid.srInput , textarea:invalid.srInput {
          border: 2px solid var(--fgColor-danger)
        }
    /* Select2 theming to match github */

        .select2-container--default {
          line-height: 20px;
          font-size: 12px;
        }

        .select2-container--default .select2-selection--single {
          background-color:var(--bgColor-default);
          border: 1px solid var(--borderColor-default);
          border-radius: 6px;
        }

        .select2-container--default .select2-selection--single .select2-selection__rendered {
          color: var(--fgColor-default);
        }

        .select2-container--default.select2-container--disabled .select2-selection__rendered {
          padding-right: 8px !important;
          color: var(--control-fgColor-disabled);
        }

        .select2-container--default .select2-results__option--selected {
          background-color: var(--button-default-bgColor-selected);
        }

        .select2-container--default .select2-results__option--highlighted.select2-results__option--selectable {
          background-color: var(--fgColor-accent);
          color: var(--fgColor-default);
        }

        .select2-container--default.select2-container--disabled .select2-selection--single {
          cursor: not-allowed;
          color: var(--control-fgColor-disabled);
          background-color: var(--control-bgColor-disabled);
        }

        .select2-container--default.select2-container--disabled span.select2-selection__arrow {
          display: none;
        }

        .select2-dropdown {
          background-color: var(--bgColor-default);
          border-color: var(--borderColor-default);
        }

        .select2-search__field {
          border: 1px solid var(--borderColor-default);
          border-radius: 6px;
        }
        .needsRegion {
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
  background-color: var(--bgColor-neutral-emphasis);
  -webkit-transition: .4s;
  transition: .4s;
  filter: grayscale(1);

}

.slider:before {
  position: absolute;
  content: "";
  height: 32px;
  width: 32px;
  left: -8px;
  bottom: -8px;
  background: url('data:image/gif;base64,R0lGODlhIAAgAMZyAEopN08qQGUmKVIsP24nJ4McXV4rP3IqKHYsKoMuLKchSXQzMnowRX0zKpIuNaAuO4I5NMMkVL0pOIU7NpQ2QYk6PcYmUYs7QY08P8MqUY4+MK80P5E+PpFAOpJAOphBN9IuTJlCO7Q6Pp5FOZ9HOZ5JOKFIOaNMNdY8YOY6Peg7O59SReg8Pq1ROt9CPepAO+pBObJTPutDVrNXOdJSL+pKP+dOO+9RMu9Oa+FXQe1TWsVjPMxqPu5hMephQellL/djJe5pMc9yQvZqWftwHe9zLdZ7RvF2Qft2Hvp3HPh5H/WBI/p9QPmGHvmGH/iJGfqMMfeUF/eWF/mTRfeZH/eZIfeaHfuYP/edIfqcMfejL/ijVPm0KfmzQfqyTPm4KPq1SPq3Tvm2YvnCLvu9a/vAYvvAcvvIY/nNTvrZafrgaPvqefruefvskfvvkv7z6f37xf3/zv///////////////////////////////////////////////////////yH5BAEKAH8ALAAAAAAgACAAAAfNgH+Cg4SFhoeIiYqLjI2Oj5CRkosqMjVKk4gqN0NbTZmGKj1IXF1PoIQqQVhfY2BOqIIRNlBsbWphsX8RKExrcW9luhEgOmJwb2bDIDBLaW5kyzBAZ2xa0kBZaNexxC9AV15WmQEVggUZLDhTXlWoCB9/ChYpR1RUug0xDxJFUVK6/jhw8YNGEiIB/xjI4YNCwj8DPIjYkGBGwAEdRowQpGEHqAMQAHTAwIHQhRCZFpAogYHBwwktjKxAmVDACSE8HgoiYEKnz59Agw4KBAA7');
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--bgColor-accent-emphasis);
  filter: none;
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--bgColor-accent-emphasis);
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
.copyCursor {
    cursor: copy;
}

.copyCursor:hover {
  color:var(--fgColor-accent);
}

.minimalPadding {
  padding: 1px 6px;
}

body:has(details#srModal[open]) {
    overflow: hidden;
}
</style>`);

        // https://stackoverflow.com/a/67456813/3006039
        function isChrome() {
            return navigator.userAgentData && navigator.userAgentData.brands && navigator.userAgentData.brands.some(b => b.brand === 'Google Chrome');
        }

        function needsTMSettingsUpdate() {
            if(!isChrome()) {
                return false;
            }
            try {
                new Function('return false');
            } catch(e) {
                if(e.message && e.message.includes('unsafe-eval')){
                    return true;
                }
            }
            return false;
        }
        let toolbar = $('<div/>',{"id":"srToolbar","class":"position-fixed top-0 left-0","css":{"display":"none", "transform":"translate(calc(50vw - 50%))","padding":"2px","z-index":"50","border-radius":"5px", "background": `${GM_getValue('g_use_beta_endpoint', false) ? 'var(--label-plum-bgColor-active)' : 'var(--page-header-bgColor)'}`, 'text-align': 'center'}});
        toolbar.append(`<a id='toggleSRToolbar' href="#"><img alt="Speedrun" src="${GM_info.script.icon}" style="image-rendering:pixelated; background: #383838; padding: 2px 2px 2px 2px; border-radius: 50%;vertical-align: middle;" width="25px" height="25px"/></a>
      <span id='toolbar'>
  <label id='srToggleTitle' class="switch">
  <input id='srEnabled' type="checkbox"><span class="slider round"></span>
      </label>
      <select id="service" class="select-sm width-fit" aria-label="Service"></select>
      <span class='needsRegion'>
      <select id="region" class="select-sm width-fit" aria-label="Region"></select>
      <div class='BtnGroup'>
      <button title="Federate to AWS Console" class="minimalPadding btn btn-sm BtnGroup-item canBeDangerous" id="srFederate"><svg xmlns="http://www.w3.org/2000/svg" class="octicon color-fg-on-emphasis" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M14.064 0a8.75 8.75 0 00-6.187 2.563l-.459.458c-.314.314-.616.641-.904.979H3.31a1.75 1.75 0 00-1.49.833L.11 7.607a.75.75 0 00.418 1.11l3.102.954c.037.051.079.1.124.145l2.429 2.428c.046.046.094.088.145.125l.954 3.102a.75.75 0 001.11.418l2.774-1.707a1.75 1.75 0 00.833-1.49V9.485c.338-.288.665-.59.979-.904l.458-.459A8.75 8.75 0 0016 1.936V1.75A1.75 1.75 0 0014.25 0h-.186zM10.5 10.625c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 00.119-.213v-2.066zM3.678 8.116L5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 00-.213.119l-1.2 1.95 1.782.547zm5.26-4.493A7.25 7.25 0 0114.063 1.5h.186a.25.25 0 01.25.25v.186a7.25 7.25 0 01-2.123 5.127l-.459.458a15.21 15.21 0 01-2.499 2.02l-2.317 1.5-2.143-2.143 1.5-2.317a15.25 15.25 0 012.02-2.5l.458-.458h.002zM12 5a1 1 0 11-2 0 1 1 0 012 0zm-8.44 9.56a1.5 1.5 0 10-2.12-2.12c-.734.73-1.047 2.332-1.15 3.003a.23.23 0 00.265.265c.671-.103 2.273-.416 3.005-1.148z"></path></svg></button>
      <button title="Federate to service in AWS Console" class="minimalPadding btn btn-sm BtnGroup-item canBeDangerous" id="srFederateService"><svg xmlns="http://www.w3.org/2000/svg" class="octicon color-fg-on-emphasis" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M7.998 14.5c2.832 0 5-1.98 5-4.5 0-1.463-.68-2.19-1.879-3.383l-.036-.037c-1.013-1.008-2.3-2.29-2.834-4.434-.322.256-.63.579-.864.953-.432.696-.621 1.58-.046 2.73.473.947.67 2.284-.278 3.232-.61.61-1.545.84-2.403.633a2.788 2.788 0 01-1.436-.874A3.21 3.21 0 003 10c0 2.53 2.164 4.5 4.998 4.5zM9.533.753C9.496.34 9.16.009 8.77.146 7.035.75 4.34 3.187 5.997 6.5c.344.689.285 1.218.003 1.5-.419.419-1.54.487-2.04-.832-.173-.454-.659-.762-1.035-.454C2.036 7.44 1.5 8.702 1.5 10c0 3.512 2.998 6 6.498 6s6.5-2.5 6.5-6c0-2.137-1.128-3.26-2.312-4.438-1.19-1.184-2.436-2.425-2.653-4.81z"></path></svg></button>
      <!--<button title="Open CloudShell" class="minimalPadding btn btn-sm BtnGroup-item canBeDangerous" id="srCloudShell"><svg xmlns="http://www.w3.org/2000/svg" version="2.0" focusable="false" aria-hidden="true" class="octicon color-fg-on-emphasis" width="20" height="20" viewBox="0 0 20 20"><path d="M5 5l2.997 2.998L5 11m4.997-.002H12m3-7.626A2.374 2.374 0 0012.627 1H3.37A2.372 2.372 0 001 3.372v9.256a2.373 2.373 0 002.37 2.373h9.257A2.375 2.375 0 0015 12.628V3.372z" stroke="currentColor" stroke-width="2" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg></button>-->
      <button title="Get CLI credentials" class="minimalPadding btn btn-sm BtnGroup-item canBeDangerous" id="srGetCreds"><svg xmlns="http://www.w3.org/2000/svg" class="octicon color-fg-on-emphasis" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg></button>
      <button title="Copy account id" class="minimalPadding btn btn-sm BtnGroup-item" id="srCopyAccount"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path></svg></button>
      <button title="Force new credentials" class="minimalPadding btn btn-sm BtnGroup-item" id="srFlush"><svg xmlns="http://www.w3.org/2000/svg" class="octicon octicon-tools" viewBox="0 0 20 20" width="20" height="20"><path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path></svg></button>
      </div>
      </span>
      <details id="githubIssuesDetails" class="details-reset details-overlay d-inline">
        <summary id="githubIssues" class="minimalPadding btn btn-sm" aria-haspopup="true" title="Recent Github Issues">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" class="octicon octicon-tools"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          <span class="dropdown-caret"></span>
        </summary>
        <details-menu class="SelectMenu right-0" style="height: fit-content" role="menu">
          <div class="SelectMenu-modal">
            <header class="SelectMenu-header">
              <span class="SelectMenu-title">Recent Github issues</span>
                <button id="githubIssuesDetailsCloseBtn" class="SelectMenu-closeButton" type="button" aria-label="Close menu" data-toggle-for="githubIssuesDetails">
                  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
                    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                  </svg>
                </button>
            </header>
            <div id='githubIssuesList' class="SelectMenu-list">
              <a class="SelectMenu-item" aria-disabled="true" role="menuitem">No recent GitHub issues</a>
            </div>
         </div>
        </details-menu>
      </details>
      <div class='BtnGroup'>
        ${insertSRUpdateButton()}
        ${needsTMSettingsUpdate() ? '<a href="https://github.com/No-Backspace-Crew/Speedrun/wiki/Installing-on-Chrome" target="_blank" class="minimalPadding btn btn-sm BtnGroup-item" id="srTMUpdate" title="TamperMonkey Change"><span class="Label mr-1 color-fg-attention">TamperMonkey settings change required, click to learn more</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" class="color-fg-attention octicon octicon-tools"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg></a>':''}
        <a class="minimalPadding btn btn-sm BtnGroup-item" id="srSettings" title="Settings"><span id='accountRequired' hidden class="Label mr-1 color-fg-attention">${user ? 'Account required on some blocks, click to configure' : 'Signin to Github to use page' } </span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" class="octicon octicon-tools"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.4288 1.52471C7.61685 1.50836 7.80736 1.5 8 1.5C8.19264 1.5 8.38315 1.50836 8.5712 1.52471C8.60669 1.52779 8.67932 1.56149 8.70795 1.67093L8.99702 2.77622C9.14363 3.33676 9.54617 3.74277 9.99429 3.96473C10.1678 4.05067 10.3351 4.14753 10.4952 4.25443C10.9118 4.53261 11.4652 4.67836 12.0243 4.52497L13.1272 4.22235C13.2361 4.19246 13.3017 4.23831 13.3223 4.26758C13.5408 4.57848 13.7326 4.90924 13.8946 5.25654C13.9094 5.2884 13.9167 5.36792 13.8362 5.44746L13.0214 6.25258C12.6099 6.65921 12.4591 7.21008 12.4908 7.70918C12.4969 7.80524 12.5 7.9022 12.5 8C12.5 8.0978 12.4969 8.19476 12.4908 8.29082C12.4591 8.78992 12.6099 9.34079 13.0214 9.74742L13.8362 10.5525C13.9167 10.6321 13.9094 10.7116 13.8946 10.7435C13.7326 11.0908 13.5408 11.4215 13.3223 11.7324C13.3017 11.7617 13.2361 11.8075 13.1272 11.7777L12.0243 11.475C11.4652 11.3216 10.9118 11.4674 10.4952 11.7456C10.3351 11.8525 10.1678 11.9493 9.99429 12.0353C9.54617 12.2572 9.14363 12.6632 8.99702 13.2238L8.70795 14.3291C8.67932 14.4385 8.60669 14.4722 8.5712 14.4753C8.38315 14.4916 8.19264 14.5 8 14.5C7.80736 14.5 7.61685 14.4916 7.4288 14.4753C7.3933 14.4722 7.32067 14.4385 7.29205 14.3291L7.00296 13.2237C6.85636 12.6632 6.45383 12.2572 6.00572 12.0353C5.83221 11.9493 5.66496 11.8525 5.50487 11.7456C5.08825 11.4674 4.53481 11.3216 3.97577 11.475L2.87278 11.7777C2.76387 11.8075 2.69826 11.7617 2.67768 11.7324C2.45921 11.4215 2.26738 11.0908 2.10543 10.7435C2.09057 10.7116 2.08328 10.6321 2.16377 10.5525L2.97865 9.74736C3.39017 9.34074 3.541 8.78987 3.50924 8.29078C3.50314 8.19474 3.50003 8.09778 3.50003 8C3.50003 7.90222 3.50314 7.80526 3.50924 7.70922C3.541 7.21013 3.39017 6.65926 2.97865 6.25264L2.16377 5.44746C2.08328 5.36793 2.09057 5.28841 2.10543 5.25655C2.26738 4.90924 2.45921 4.57848 2.67769 4.26758C2.69826 4.23831 2.76387 4.19247 2.87278 4.22235L3.97577 4.52498C4.53481 4.67837 5.08825 4.53262 5.50487 4.25444C5.66496 4.14755 5.83221 4.05069 6.00572 3.96475C6.45382 3.74279 6.85636 3.33678 7.00296 2.77625L7.29205 1.67093C7.32067 1.56149 7.3933 1.52779 7.4288 1.52471ZM8 0C7.76394 0 7.53009 0.010245 7.29889 0.0303435C6.55611 0.0949143 6.00991 0.645042 5.84086 1.29138L5.55177 2.39671C5.53431 2.46349 5.47287 2.55476 5.33993 2.62061C5.10832 2.73533 4.88526 2.86452 4.67192 3.00697C4.54894 3.08908 4.43933 3.09674 4.37267 3.07845L3.26968 2.77581C2.62644 2.59932 1.87827 2.79629 1.45041 3.40515C1.18168 3.78757 0.945496 4.19473 0.745967 4.62262C0.430999 5.29808 0.634823 6.04545 1.10948 6.51446L1.92436 7.31963C1.9735 7.36819 2.02164 7.46677 2.01227 7.61399C2.00415 7.74171 2.00003 7.87043 2.00003 8C2.00003 8.12957 2.00415 8.25829 2.01227 8.38601C2.02164 8.53323 1.9735 8.63181 1.92436 8.68037L1.10948 9.48555C0.634822 9.95455 0.430999 10.7019 0.745967 11.3774C0.945495 11.8053 1.18168 12.2124 1.45041 12.5948C1.87827 13.2037 2.62644 13.4007 3.26968 13.2242L4.37267 12.9216C4.43933 12.9033 4.54895 12.9109 4.67192 12.993C4.88526 13.1355 5.10832 13.2647 5.33993 13.3794C5.47287 13.4452 5.53431 13.5365 5.55177 13.6033L5.84086 14.7086C6.00991 15.355 6.55611 15.9051 7.29889 15.9697C7.53009 15.9898 7.76394 16 8 16C8.23606 16 8.46991 15.9898 8.7011 15.9697C9.44388 15.9051 9.99009 15.355 10.1591 14.7086L10.4482 13.6033C10.4657 13.5365 10.5271 13.4453 10.6601 13.3794C10.8917 13.2647 11.1148 13.1355 11.3281 12.993C11.4511 12.9109 11.5607 12.9033 11.6274 12.9216L12.7303 13.2242C13.3736 13.4007 14.1217 13.2037 14.5496 12.5949C14.8183 12.2124 15.0545 11.8053 15.254 11.3774C15.569 10.7019 15.3652 9.95456 14.8905 9.48555L14.0757 8.68042C14.0265 8.63187 13.9784 8.53328 13.9878 8.38606C13.9959 8.25832 14 8.12959 14 8C14 7.87041 13.9959 7.74168 13.9878 7.61394C13.9784 7.46672 14.0265 7.36813 14.0757 7.31958L14.8905 6.51445C15.3652 6.04544 15.569 5.29807 15.254 4.62261C15.0545 4.19472 14.8183 3.78756 14.5496 3.40515C14.1217 2.79628 13.3736 2.59932 12.7303 2.77581L11.6274 3.07843C11.5607 3.09672 11.4511 3.08907 11.3281 3.00696C11.1148 2.8645 10.8917 2.7353 10.6601 2.62057C10.5271 2.55473 10.4657 2.46346 10.4482 2.39667L10.1591 1.29138C9.99009 0.64504 9.44388 0.0949126 8.7011 0.0303426C8.46991 0.0102447 8.23606 0 8 0ZM9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"></path></svg></a>
        <a class="minimalPadding btn btn-sm BtnGroup-item" href='/No-Backspace-Crew/Speedrun/wiki/Speedrun-User-Interface' target='_blank' title="Speedrun V${GM_info.script.version} Help"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"  class="octicon octicon-tools"><path fill-rule="evenodd" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zM6.92 6.085c.081-.16.19-.299.34-.398.145-.097.371-.187.74-.187.28 0 .553.087.738.225A.613.613 0 019 6.25c0 .177-.04.264-.077.318a.956.956 0 01-.277.245c-.076.051-.158.1-.258.161l-.007.004a7.728 7.728 0 00-.313.195 2.416 2.416 0 00-.692.661.75.75 0 001.248.832.956.956 0 01.276-.245 6.3 6.3 0 01.26-.16l.006-.004c.093-.057.204-.123.313-.195.222-.149.487-.355.692-.662.214-.32.329-.702.329-1.15 0-.76-.36-1.348-.863-1.725A2.76 2.76 0 008 4c-.631 0-1.155.16-1.572.438-.413.276-.68.638-.849.977a.75.75 0 101.342.67z"></path></svg></a>
      </div>
      </span>
    `);

        $("body").prepend(toolbar).append(`
<div class="position-fixed bottom-0 right-0" hidden style='z-index:100' id='snackbar'>
  <div class="Toast Toast--success">
    <span class="Toast-icon">
      <!-- <%= octicon "check" %> -->
      <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-check" aria-hidden="true">
        <path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
      </svg>
    </span>
    <span id="toast" class="Toast-content"></span>
  </div>
</div>
<div class="position-fixed bottom-0 right-0" hidden style='z-index:100' id='authToast'>
  <div class="Toast Toast--loading">
    <span class="Toast-icon">
      <svg class="Toast--spinner" viewBox="0 0 32 32" width="18" height="18">
        <path
          fill="#959da5"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
        />
        <path fill="#ffffff" d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"></path>
      </svg>
    </span>
    <span class="Toast-content">Waiting for authentication</span>
    <button class="Toast-dismissButton" id="authToastCancelled">
      <!-- <%= octicon "x" %> -->
      <svg width="12" height="16" viewBox="0 0 12 16" class="octicon octicon-x" aria-hidden="true">
        <path
          fill-rule="evenodd"
          d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
        />
      </svg>
    </button>
  </div>
</div>
`).append(`<details id='srModal' class="details-reset details-overlay details-overlay-dark">
  <summary aria-haspopup="dialog"></summary>
  <details-dialog class="Box d-flex flex-column Box-overlay--wide">
    <div class="Box-header m-0">
      <span class="Box-title" id='srModal-title'>Dialog</span>
      <button id="modal-cancel" class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <!-- <%= octicon "x" %> -->
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
      </button>    </div>
    <div class="Box-body overflow-auto">
    <div id="srModal-error" class="flash mt-2 flash-error" hidden>
    </div>
    <div id="srModal-body">
    </div>
    </div>
    <div class="Box-footer text-right">
      <button id="srModal-ok" type="button" class="btn btn-primary" autofocus data-close-dialog>Ok</button>
    </div>
  </details-dialog>
</details>`);
        dataAndEvents.toggleSRToolbar = {
            events:
            {
                click:function () {
                    GM_setValue("srToolbarVisible",$('#toolbar').toggle().is(':visible'));
                }
            }
        };

        dataAndEvents.srFederate = dataAndEvents.srFederateService = {events: {'click.sr': async (event) => {
            await nope(`#f${$(event.delegateTarget).attr('id').replace('srF','')}`,false, undefined, $(event.delegateTarget));
        }}};

        /*dataAndEvents.srCloudShell = {events: {'click.sr': async (event) => {
            await nope(`#federate {path:'cloudshell'}`,false, undefined, $(event.delegateTarget));
        }}};*/

        dataAndEvents.region = {events: {'change': function() {
            updateTabs();
            curRegion = extractRegion($('#region option:selected').text());
        }}};

        dataAndEvents.service = {events: {'change': function() {
            updateRegions();
            $("#region").trigger('change');
        }}};


        dataAndEvents.githubIssues = { events: {'click.sr': () => {
            if(!$('#githubIssuesList').is(':visible')){
                let issues = GM_getValue(ISSUES_KEY, []);
                if(issues.length) {
                    $('#githubIssuesList').empty();
                    for(let issue of issues) {
                        $('#githubIssuesList').append($("<a>", {class:"SelectMenu-item", role: "menuitem", href:issue.value, text:issue.label, target:"_blank"}));
                    }
                }
            }
        }}};
        dataAndEvents.srSettings = { events: {'click.sr': async () => {
            await nope('#settings');
        }}};

        dataAndEvents.srUpdate = { events: {'click.sr': srUpdateClickHandler}};

        dataAndEvents.srEnabled = { events: {'change': async (event) => {
            setEnabledPath(event.target.checked);
            if(event.target.checked) {
                $('.srDone').remove();
                await updatePage('srEnabled');
            } else {
                location.reload();
            }
        }}};

        dataAndEvents.srCopyAccount = { events: {'click': async () => {
            await nope('#copy\n${account}');
        }}};

        dataAndEvents.srGetCreds = { events: {'click': async (event) => {
            await nope('#copy.withCreds {"forceNewCreds": true}\necho Credentials Expiration: $AWS_CREDENTIAL_EXPIRATION',false);
        }}};

        dataAndEvents.srFlush = { events: {'click': async () => {
            GM_deleteValue(`${LAST_CREDS}federate`);
            GM_deleteValue(`${LAST_CREDS}copy`);
            credentialsCache = {};
            stackCache = {};
            toast('Credentials flushed');
        }}};
    }
}

let noop = function() {}

function toast(str) {
    let snackbar = $("#snackbar");
    $('#toast').html(str);
    snackbar.attr('hidden',false);
    setTimeout(function(){ snackbar.attr('hidden',true); }, 2500);
}

function insertSRUpdateButton(add=false){
    if(newSRVersion){
        const button = `<a class="minimalPadding btn btn-sm BtnGroup-item" id="srUpdate" href='${GM_info.script.downloadURL}' target='_blank' title="Update Speedrun to V${newSRVersion}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" class="octicon octicon-tools color-fg-attention"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></a>`
        if(!add) {
            return button;
        } else {
            const $button = $(button);
            $button.on('click.sr', srUpdateClickHandler);
            $('#srUpdate').length == 0 ? $('#srSettings').parent().prepend($button) : $('#srUpdate').attr('title',$button.attr('title'));
        }
    }
    return '';
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

//based on https://gist.github.com/codeguy/6684588
function slugify(s) {
    return s != undefined ?
        s.toString() // Cast to string (optional)
        .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
        .trim() // Remove whitespace from both sides of a string (optional)
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-+/g, '-') // Replace multiple - with single -
        .replace(/-$/g,'') : s; //Remove trailing newline
}

function parseJSON(str, name) {
    try {
        return JSON5.parse(str);
    } catch(err) {
        alertAndThrow("Unable to parse '" + (name || str) + "' due to: " + err, err);
    }
}

function jsonWithoutInternalVariables(variables) {
    //return prettyJSON(variables);
    return prettyJSON(variables,function replacer(key, value) { return (key=="internal" || key=="JSON5") ? undefined : value;});
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
    return encodeURIComponent(str).replace(/['()*]/g, m => ({'\'':'%27', '(':'%28', ')':'%29', '*':'%2A'}[m])).replace(/%([\dA-Z]{2}|(u\d{4}))/g, match => match.replace(/%/g, '*').toLowerCase());
}


function encodeCloudWatchURL(str, passes=2) {
    [...Array(passes)].forEach(() => {str = encodeURIComponent(str).replace(/['()*]/g, m => ({'\'':'%27', '(':'%28', ')':'%29', '*':'%2A'}[m]))});
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
async function interpolate(tpl, variables, suppressErrors, throwErrors=true) {
    try {
        sessionVariables = variables;
        let keys = Object.keys(variables).filter(key => cachedValidVarName(key) && key !== 'internal');
        //        keys.delete
        //fn = new Function(...keys,'return `' + tpl.replace(/`/g, '\\`') + '`;'); //not sure why nested template literals are prevented
        let isAsync = tpl.includes('await ');
        let cacheKey = tpl+keys;
        let fn = functionCache[cacheKey];
        if(!fn) {
            fn = isAsync ? new AsyncFunction(...keys,`return \`${tpl}\``) : new Function(...keys,`return \`${tpl}\``);
            functionCache[cacheKey] = fn;
        }
        let result = isAsync ? await fn(...keys.map(x => variables[x])) : fn(...keys.map(x => variables[x]));
        if(!suppressErrors && hasDOMContent(result)){
            throw new Error(`${result} contained DOM content, in ${tpl} ensure your variables are defined`);
        }
        return result;
    } catch(err) {
        if(suppressErrors) {
            return undefined;
        } else if(throwErrors) {
            alertAndThrow(`${err} while parsing:\n${tpl}`, err);
        } else {
            throw new Error(`${err} while parsing:\n${tpl}`, err);
        }
    }
};

function retrieve(path, raw=false, cache=true) {
    return new Promise((resolve,reject) => {
        let [,root] = window.location.href.match(/^(.*?.com\/[^\/]+\/[^\/]+(\/(blob\/[^\/]+|wiki))?)/i);
        let url = path.startsWith('https://') ? path : `${root}/${path.replaceAll(/^\//g,'')}`;
        GM_xmlhttpRequest({
            method: 'GET',
            url,
            headers: {...getUserAgentHeader(), ...(cache?{}:{'Cache-Control': 'no-cache'})},
            onload: function(response) {
                resolve(raw ? response : response.responseText);
            },
            onerror: function(err) {
                reject(err);
            }
        });
    });
}

function parseHeaders(headers) {
    return headers.split('\n').reduce((acc,value) => {if(value.trim()!="")
    {
        let header = value.split(":",2);
        acc[header[0].toLowerCase()]=header[1].trim();
    }
                                                      return acc;
                                                     }
                                      ,{});
}

function invoke(request, raw=false) {
    return new Promise((resolve,reject) => {
        GM_xmlhttpRequest({
            method: request.method,
            url: request.protocol ? `${request.protocol}//${request.host}${request.path}` : request.url,
            headers: {...getUserAgentHeader(), ...(request.headers ? {...request.headers} : {})},
            data: request.body,
            onload: function(response) {
                const headers = parseHeaders(response.responseHeaders);
                response.headers = headers;
                resolve(raw ? response : {headers, responseText:response.responseText, status: response.status, response:headers['content-type']==='application/json' ? JSON.parse(response.responseText) : response.responseText});
            },
            onerror: function(err) {
                reject(err);
            }
        });
    });
}

function xml2json(xml) {
    var obj = {};
    if (xml.children.length > 0) {
        for (var i = 0; i < xml.children.length; i++) {
            var item = xml.children.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = xml2json(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xml2json(item));
            }
        }
    } else {
        obj = xml.textContent;
    }
    return obj;
}

function formatDescribeStacks(obj){
    let result = {outputs:{}, tags:{}};
    for(let output of arrayify(obj.DescribeStacksResponse.DescribeStacksResult.Stacks.member.Outputs.member)) {
        result.outputs[output.OutputKey] = output.OutputValue;
    }
    for(const output of arrayify(obj.DescribeStacksResponse.DescribeStacksResult.Stacks.member.Tags.member)) {
        result.tags[output.Key] = output.Value;
    }
    result.creationTime = obj.DescribeStacksResponse.DescribeStacksResult.Stacks.member.CreationTime
    result.lastUpdatedTime = obj.DescribeStacksResponse.DescribeStacksResult.Stacks.member.LastUpdatedTime
    result.arn = obj.DescribeStacksResponse.DescribeStacksResult.Stacks.member.StackId.replaceAll(/\/[^\/]+$/g,'');
    return result;
}

function acfn(name, path, region) {
    let regionPortion = region && region!=sessionVariables.region ? ",'${region}":"";
    return `\$\{(await cfn('${name}'${regionPortion})).${path}\}`;
}

async function cfn(name, region) {
    //if in preview mode, throw an exception to prevent making external calls
    if(!sessionVariables.internal.running || sessionVariables.internal.pass != 2) {
        throw new Error('Not available in preview');
    }
    region = region || sessionVariables.region;
    const stackCacheKey = `${sessionVariables.account}:${region}:${name}`;
    let result = stackCache[stackCacheKey];
    if(!result){
        sessionVariables.internal.credentialsType = 'cfn';
        credentialsBroker.validate(sessionVariables);
        let credentials = await credentialsBroker.getCredentials(sessionVariables);
        delete sessionVariables.internal.credentialsType;
        let headers = {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8', 'User-Agent': `Speedrun V${GM_info.script.version}`};
        let params = new URLSearchParams();
        params.append('Action','DescribeStacks');
        params.append('Version','2010-05-15');
        params.append('StackName',name);
        const request = await srInvoke.invokeService(credentials, 'cloudformation', region, new URL(`https://cloudformation.${region}.amazonaws.com/`),'POST',headers,params.toString());
        let response = await invoke(request, true);
        if(response.status != 200) {
            throw new Error(`${response.status} ${response.statusText}: ${response.responseText}`);
        }
        let describeStack = formatDescribeStacks(xml2json(new DOMParser().parseFromString(response.responseText,"application/xml")));
        console.log(`Caching ${stackCacheKey}`,describeStack);
        stackCache[stackCacheKey] = describeStack;
        result = describeStack;
    }
    return result;
}

async function getWebCredentials(account, role, forceNewCreds, duration) {
    const cacheKey = `${account}:${role}`;
    const cachedCredentials = credentialsCache[cacheKey];
    if(!forceNewCreds && cachedCredentials && !needsRefresh(cachedCredentials.expiration, cachedCredentials.duration)) {
        console.log('Using cached credentials');
        return cachedCredentials.credentials;
    }
    const normalizedDuration = normalizeDuration(duration);
    const webCredentialsUrl = `${FEDERATION_ENDPOINT}/webcredentials/${account}?role=${role}${normalizedDuration?`&duration=${normalizedDuration}`:''}`;
    let result = await retrieve(webCredentialsUrl, true);
    // if it redirects to github auth
    if(result.finalUrl && !result.finalUrl.startsWith(FEDERATION_ENDPOINT)) {
        //authenticate in a popup
        let popup = undefined;
        let authToast = $("#authToast");
        authToast.attr('hidden',false);

        let authPopup = new Promise((resolve, reject) => {
            popup = GM_openInTab(`${FEDERATION_ENDPOINT}/user/authenticate?closeOnSuccess=true`,{active:true,setParent:true});
            popup.onclose = () => {
                resolve();
            };
            $('#authToastCancelled').on('click.sr', () => {reject('Authentication cancelled')});
        });

        try {
            await authPopup;
        } catch(e) {
            console.log(e);
            return;
        } finally {
            $('#authToastCancelled').off('click.sr');
            authToast.attr('hidden', true);
            if(!popup.closed) {
                popup.close();
            }
            window.focus();
        }
        // try again to get credentials
        result = await retrieve(webCredentialsUrl, true);
        if(result.finalUrl && !result.finalUrl.startsWith(FEDERATION_ENDPOINT)) {
            throw new Error('Unable to get credentials: GitHub authentication failed');
        }
    }


    if(result.status != 200) {
        throw new Error(`${result.status} ${result.statusText}: ${result.responseText}`);
    } else {
        let parsed = JSON.parse(result.responseText);
        let credentials = {accessKeyId:parsed.AccessKeyId, secretAccessKey:parsed.SecretAccessKey, sessionToken:parsed.SessionToken}
        let expiration = dayjs(parsed.Expiration).valueOf();
        credentialsCache[cacheKey] = {expiration,credentials,duration:(expiration-Date.now())/1000};
        return {accessKeyId:parsed.AccessKeyId, secretAccessKey:parsed.SecretAccessKey, sessionToken:parsed.SessionToken};
    }
}

async function interpolateLiteralsInString(str, variables, suppressErrors, wrap) {
    let offset = str.indexOf('${');
    while(offset>-1) {
        let matches = XRegExp.matchRecursive(str.substring(offset+1), '\\{', '\\}');
        let toReplace = "${" + matches[0] + "}";
        let replacement = wrap(await interpolate(toReplace, variables, suppressErrors), toReplace);
        str = str.substring(0,offset) + str.substring(offset).replace(toReplace,()=>replacement);
        offset = str.indexOf('${',offset+replacement.length);
    }
    return str;
}

//recursively interpolate variables in arrays and dicts
async function deepInterpolate(obj, variables, suppressErrors){
    if (_.isString(obj) && obj.match(LITERAL)) {
        return await interpolateLiteralsInString(obj, variables, suppressErrors, (result, match) => firstNonNull(result,match));
    } else if(isDict(obj)){
        for (const [key, value] of Object.entries(obj)) {
            let result = await deepInterpolate(value, variables, suppressErrors);
            if(result) {
                obj[key] = result;
            }
        }
    } else if(Array.isArray(obj)) {
        obj = Promise.all(obj.map(async (item) => await deepInterpolate(item, variables, suppressErrors)));
    }
    return obj;
}

function hasDOMContent(str) {
    return !(str == undefined) && HAS_DOM_CONTENT_REGEX.test(str);
}

function persistIfIssue(location=window.location) {
    let issue = isIssue(location);
    if(issue && $('.gh-header-title > .markdown-title').length) {
        let [,issueNumber] = issue;
        persistTimestamp({label:`#${issueNumber} ${$('.gh-header-title > .markdown-title').text()}`,value:window.location.href}, ISSUES_KEY);
        persistLastPath(location);
    }
}

function isIssue(location) {
    return ISSUES_PATH_REGEX.exec(location.pathname);
}

function doneLoading() {
    return $('.srDone').length;
}

function showToolbarOnPage() {
    isSRPage() && (toolbarShown || doneLoading()) ? (GM_getValue('srToolbarVisible', true) ? `${$("#toolbar").show()}` : `${$("#toolbar").hide()}`) + $("#srToolbar").show() : $("#srToolbar").hide()
    setFavIcon();
}

async function setFavIcon() {
    await sleep(500);
    let isVisible = isEnabledPath();
    let head = $('head');
    $('link[rel~="icon"]').each((i,el) => {
        el = $(el);
        let details = favIcons[isVisible+''][el.attr('rel')];
        if(details.href != el.attr('href')){
            //el.remove();
            el.attr('href', details.href);
            //head.append(el);
        }
    });
}

function getUserConfig() {
    return {
        "services" : {
            [USER_SERVICE] : {
                "role" : GM_getValue('g_role', 'speedrun-ReadOnly'),
                "profile" : GM_getValue('g_granted_profile', undefined),
                "permSet" : GM_getValue('g_identity_center_permSet', undefined),
                "regions" : {
                    "aws" : {
                        "account" : GM_getValue('g_aws-accountId')
                    }
                }
            }
        }
    };
}

function escapeHTMLQuotesAnd$(str){
    return str ? str.replace(/["$~]/g, m => ({'"':'&quot;', '$':'&#36;', '~':'&#126;'}[m])) : str;
}

function whitespaceToHTML(str){
    return str ? str.replace('\n','<br>').replace('  ',' &nbsp;') : str;
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

function getURLSearchParamOnce(key){
    return USED_SEARCH_PARAMS.has(key)? undefined : new URLSearchParams(window.location.search).get(key);
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

function syntaxHighlight(json) {
    if (typeof json != 'string') {
        json = prettyJSON(json);
    }
    json = json.replace(/[&<>]/g, m => ({'&':'&amp;', '<':'&lt;', '>':'&gt;'}[m]));
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'pl-c1';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'pl-s';
            }
        }
        return `<span class='${cls}'>${match}</span>`;
    });
}

function getPromptInfo(prompt) {
    let variable = prompt[1];
    let text = prompt[2];
    let configuration = prompt[3] ? parseJSON(prompt[3]) : {};
    let isGlobal = variable && variable.startsWith(GLOBAL_PREFIX);
    let sVariable = (variable && !isGlobal) ? localStorage.getItem(variable) : undefined;
    let sPrompt = localStorage.getItem(text);
    let urlValue = getURLSearchParamOnce(text);
    let sessionValue = firstNonNull(isGlobal?GM_getValue(variable,undefined):undefined,urlValue, sVariable,sPrompt,configuration.default,"");
    //override sessionValue if this is srTimestamp, we always want to set it to the default TODO make this a configuration option?
    if("srTimestampValue" === variable){
        sessionValue = configuration.default;
    }
    return {raw:prompt[0], variable, prompt: text, configuration, urlValue, value: sessionValue, default: configuration.default, condition: configuration.condition};
}


function getService() {
    return $('#service').val();
}

function getRegion() {
    return $('#region').val() || undefined;
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

function stringify(o) {
    return JSON.stringify(o).replaceAll(/^"(.*)"$/g,"$1");
}

function bashEscape(str) {
    return str ? stringify(str).replaceAll("'","\\'") : str;
}

function throwError() {
    throw Error();
}

function isNumeric(n) {
    return _.isNumber(n) || (!_.isEmpty(n) && !_.isNaN(parseFloat(n)));
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
    slugify: slugify,
    stringify: stringify,
    bashEscape: bashEscape,
    _ : _,
    cfn: cfn,
    acfn:acfn,
    JSON5: JSON5,
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
    return $.extend(true, {}, injectCustomFunctions(variables), exposedFunctions, getUndefinedGlobals(variables));
}

function getUndefinedGlobals(variables) {
    //There are a few variables that are always defined on web pages like name status and title, make them throw an error if used and but not set
    //https://stackoverflow.com/questions/26562719/is-variable-called-name-always-defined-in-javascript
    return {name: variables.name||throwError,title: variables.title||throwError,status: variables.status||throwError};
}

// get variables for service and smash them together allowing for extension
// if the service name is warp.federation.support
// overlay the variables of warp, with warp.federation and with warp.federation.support
function getServiceVariables(service, services) {
    return service ? service.split('.').reduceRight((variables, current, index, arr) => $.extend(true, variables, nullSafe(services)[arr.slice(0,arr.length-index).join('.')]), {}) : {};
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
                templateValues.type = firstNonNull(templateValues.value,"").startsWith('http') ? 'link' : arr[0];
            }
        } else {
            if(arr[index].startsWith('federate')) {
                templateValues.type = firstNonNull(variables.type, templateValues.type, 'federate');
            } else {
                templateValues.type = firstNonNull(variables.type, templateValues.type, arr[index]);
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
    return str.replace(/([a-z]|[A-Z]+)([A-Z])/g, "$1 $2");
}

function getServiceDropdownName(serviceName) {
    //Only pretty up final name in extension as service name for dropdown
    //A = A
    //A.B.C = C
    return prettyCamelCase(serviceName.replace(USER_SERVICE,GM_getValue("g_usernameOverride") || user).replace(/^.*\./,''));
}

function applyIfNotNull(obj, f) {
    return (typeof obj === 'undefined') || obj === null ? obj : f.call(obj);
}

function isAlwaysOnPath(path) {
    if(!path) {
        let regex = isSRPage();
        if (regex) {
            [,path] = regex;
        }
    }
    path = applyIfNotNull(path, String.prototype.toLowerCase);
    return path === '/no-backspace-crew/speedrun' || path === `/${user}/${user}`;
}

function isEnabledPath() {
    let regex = isSRPage();
    if (regex) {
        let [,path] = regex;
        path = path.toLowerCase();
        return GM_getValue(SR_ENABLED_PATHS, {})[path] != undefined || isAlwaysOnPath(path);
    }
    return false;
}

function validateInputs() {
    $("#srModal-link, #srModal-ok").prop('disabled', $(".srInput:invalid").length != 0);
}

function setEnabledPath(enabled) {
    let regex = isSRPage();
    if (regex) {
        let [,path] = regex;
        path = path.toLowerCase();
        let currentEnabledPaths = GM_getValue(SR_ENABLED_PATHS, {});
        if(!enabled) {
            delete currentEnabledPaths[path];
        } else {
            currentEnabledPaths[path] = Date.now();
        }
        GM_setValue(SR_ENABLED_PATHS, currentEnabledPaths);
    }
}

function getPathFromObject(o, path) { return path.split(".").reduce((r, k) => r?.[k], o) };

function safeInterpolate(tpl, variables){
    if(tpl === undefined || tpl === null){
        return undefined;
    }
    return tpl.replaceAll(/\${(.*?)}/g, (_, path) => {
        let val = getPathFromObject(variables, path);
        if(val === undefined) {
            throw new Error(`${_} cannot be interpolated from untrusted input`);
        }
        return val;
    });
}

function copyAndAppendToOutput(outputText, runBtn) {
    const outputTabId = runBtn && runBtn.data('outputTab');
    if(outputTabId) {
        const output = $(`#${outputTabId} > div`);
        const timelineItem = `<div class="TimelineItem">
            <div class="TimelineItem-badge">
              <svg class="octicon"
                   width="18" height="18"
                   viewBox="0 0 16 16" >
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5a.75.75 0 0 1 1.5 0Z" >
                </path>
              </svg>
            </div>
            <div class="TimelineItem-body"><span class='color-fg-success'>${new Date().toLocaleTimeString()}</span><br/><code style='word-wrap:pre-wrap'>${escapeHTMLStartTags(outputText)}</code></div>
          </div>
          `;
        output.append(timelineItem);
        $(`#tab-${outputTabId}`).removeClass('d-none').click();
    }
    GM_setClipboard(outputText);
    toast("📋 Copied");
}

async function nope(content, preview = false, anchor, runBtn) {
    let pageVariables = _.cloneDeep(nullSafe(pageConfig));
    delete pageVariables.templates;
    delete pageVariables.services;
    let variables = {internal:{region:getRegion()}, user: GM_getValue("g_usernameOverride") || user, region: extractRegion(getRegion()), service: getService()};
    let details = parseContent(content);
    variables.content = details.body;
    variables.internal.showPin = details.service != undefined;
    variables.internal.running = !preview;
    variables.service = firstNonNull(details.service, variables.service);
    if(variables.service) {
        variables.srServiceName = getServiceDropdownName(variables.service);
    }
    if(variables.internal.region) {
        variables.srRegionName = variables.internal.region;
    }
    let templateVariables;

    try {
        templateVariables = getTemplateVariables(details.template, templates);
    } catch(err) {
        //rethrow if
        alertAndThrow(err);
    }

    variables.internal.template = templateVariables.value || "${content}";
    variables.internal.templateType = templateVariables.type;
    variables.internal.preview = variables.internal.content = variables.content;
    delete templateVariables.value;
    delete templateVariables.type;

    let serviceVariables = _.cloneDeep(getServiceVariables(variables.service, pageConfig.services));


    variables.internal.templateName = details.template
    variables.partition = getPartition(variables.region, true);
    let partitionVariables = variables.partition ? nullSafe(nullSafe(serviceVariables.regions)[variables.partition]) : {};
    let regionVariables = variables.internal.region ? nullSafe(nullSafe(serviceVariables.regions)[variables.internal.region]) : {};
    delete serviceVariables.regions

    const entryVariables = nullSafe(details.variables);

    variables = $.extend(true, variables, pageVariables, templateVariables, serviceVariables, partitionVariables, regionVariables);
    variables.internal.overriddenAccount = entryVariables.account && entryVariables.account != variables.account ? entryVariables.account : undefined;
    variables.internal.overriddenRegion = entryVariables.region && entryVariables.region != variables.region ? entryVariables.region : undefined;
    variables.internal.showPin ||= (variables.internal.overriddenAccount != undefined && variables.internal.overriddenAccount != variables.account);
    variables.internal.showRegionPin = (variables.internal.overriddenRegion != undefined && variables.internal.overriddenRegion != variables.region);
    variables = $.extend(true, variables, entryVariables);
    variables = overlayExposedFunctions(variables);

    if(!preview && firstNonNull(variables.stripComments, !variables.raw)) {
        //rip out comments
        variables.content = variables.content.replace(COMMENT_G, function(prompt) {
            const [,before,,,,after] = prompt.match(COMMENT);
            const leadingContent = firstNonNull(before,'').trim();
            return `${leadingContent.length ? leadingContent.concat(firstNonNull(after,'')) : ''}`;
        });
        //if / is escaped so it isn't treated as a comment, unescape it
        variables.content = variables.content.replace('&sol;','/');
    }

    //strip output
    if(!(preview || variables.raw)) {
        let arr = variables.content.split(OUTPUT,2);
        if(arr.length > 1) {
            variables.content = arr[0];
            variables.internal.output = arr[1].replace(TRAILING_WHITESPACE,"");
        }
    }
    sessionVariables = variables;

    variables.internal.prompts = getPrompts(content, variables.internal.template);
    let existingUserConfig = {}, existingCredentialsBroker = undefined;
    if (!preview) {
        if(hasElements(variables.internal.prompts) && !(variables.prompts === false)) {
            const div = $('<div>');
            const table = $('<table>');
            div.append(table);
            for(const prompt of variables.internal.prompts) {
                const info = getPromptInfo(prompt.prompt);
                const row = $('<tr>');
                const header = $('<td>', {class: 'p-1 text-right v-align-top'})
                const label = $(`<label>${escapeHTMLStartTags(info.prompt)}</label>`);
                header.append(label);
                row.append(header);
                let input = undefined;
                info.interpolatedDefault = firstNonNull(await interpolate(firstNonNull(info.default,""),variables, true), info.default);
                //use url value if set and = to value.
                if(info.urlValue && info.urlValue == info.value) {
                    info.interpolatedValue = safeInterpolate(info.value,variables);
                } else {
                    info.interpolatedValue = firstNonNull(await interpolate(firstNonNull(info.value,""),variables, true), info.value);
                }
                info.location = prompt.location;
                let interpolatedDefaultText;
                switch(info.configuration.type) {
                    case "checkbox":
                        input = $('<input>', {type:'checkbox'});
                        setInputValue(input, info.interpolatedValue && info.interpolatedValue != "false");
                        break;
                    case "select":
                        {
                            let options = info.configuration.options;
                            if(options && (typeof options === 'string')) {
                                let literal = options.match(LITERAL);
                                if(literal){
                                    options = await interpolate(`\${JSON.stringify(${options.substring(2,options.length-1)})}`, variables, true);
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
                                    input.append($(`<option ${String(value)===info.value ? "selected" : ""}>`).text(key).val(value));
                                    if(info.interpolatedDefault && info.interpolatedDefault.length && String(value) === info.interpolatedDefault) {
                                        interpolatedDefaultText = key;
                                    }
                                });
                            } else {
                                alertAndThrow(`No options specified for select prompt: ${info.prompt}`);
                            }
                        }
                        break;
                    case "textarea":
                        input = $('<textarea>', {rows:firstNonNull(info.configuration.rows,5),cols:firstNonNull(info.configuration.cols,40), placeholder: firstNonNull(info.configuration.placeholder,"")});
                        input.val(info.interpolatedValue);
                        break;
                    default:
                        input = $('<input>', {size:firstNonNull(info.configuration.size,40), placeholder: firstNonNull(info.configuration.placeholder,"")});
                        info.configuration.type == 'password' ? input.attr('type', 'password') : input.val(info.interpolatedValue);
                        break;
                }
                input.data('prompt', info);
                let col = $('<td>', {class: 'p-1'})
                col.append(input);
                input.addClass('srInput');

                if(info.configuration.label) {
                    col.append(`<p class="note">${DOMPurify.sanitize(info.configuration.label, {ALLOWED_TAGS: ['b','a','i','u'], ATTRIBUTES: ['target']})}</p>`);
                }
                ['pattern', 'maxlength', 'minlength', 'required'].forEach(attr => {
                    if(info.configuration[attr]) {
                        input.addClass('srValidated');
                        input.attr(attr, info.configuration[attr]);
                        input.on('input', function() {
                            validateInputs();
                        });
                    }
                });
                row.append(col);
                col = $('<td>', {class: 'p-1 v-align-top'})
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
            };

            try {
                let isSettings = variables.internal.templateName === 'settings';
                if(isSettings) {
                    existingUserConfig = getUserConfig();
                    existingCredentialsBroker = GM_getValue("g_credentials_broker", 'speedrun')
                }
                var deeplink = undefined;
                if(anchor) {
                    deeplink = $('<button id="srModal-link" class="btn btn-secondary mr-1" type="button" aria-label="Create deeplink" data-close-dialog><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg> Deeplink</button>');
                    deeplink.click(function () {
                        let url = new URL(`${window.location.origin}${window.location.pathname}`);
                        if(anchor.length) {
                            url.hash = anchor.attr('href').substring(1);
                        }
                        let parameters = new URLSearchParams();
                        parameters.append('srRegion', extractRegion(getValue('#select2-region-container', true)));
                        parameters.append('srService', getValue('#service'));
                        if(runBtn && runBtn.prop('id')) {
                            parameters.append('srButton', runBtn.prop('id'));
                        }
                        $('#srModal :input' ).not(':input[type=button],button').each(function() {
                            const prompt = $(this).data('prompt');
                            if(prompt) {
                                const value = getInputValue($(this));
                                parameters.append(prompt.prompt,value);
                            }
                            url.search = parameters.toString();
                            GM_setClipboard(url.toString());
                            toast("📋 Deeplink Copied");
                        });
                    });
                }
                let label = runBtn ? runBtn.attr('aria-label') : undefined;
                await dialog(div, isSettings ? `Speedrun V${GM_info.script.version} Settings` : `${firstNonNull(variables.inputTitle,'Input')}${label ? `: ${label}` : '' }`, async function() {
                    for(const input of $('#srModal :input' ).not(':input[type=button],button')) {
                        const $input = $(input);
                        const prompt = $input.data('prompt');
                        if(prompt) {
                            const value = getInputValue($input);
                            let transformedValue = value;
                            if(prompt.configuration.transform){
                                console.log('Transform:', prompt.configuration.transform);
                                console.log('Value Before:', value);
                                variables.value = value;
                                try {
                                    transformedValue = await interpolate(`\${${prompt.configuration.transform}}`, variables, false, false);
                                } catch(e) {
                                    throw new Error(`Unable to run transform: ${prompt.configuration.transform} on: '${value}' for prompt: ${prompt.prompt} due to: ${e.message}`, e);
                                }
                                console.log('Value After:', transformedValue);
                            }
                            try {
                                if(prompt.configuration.cast){
                                    switch(prompt.configuration.cast){
                                        case "json":
                                            transformedValue = parseJSON(transformedValue);
                                            break;
                                        case "Number":
                                            transformedValue = Number(transformedValue);
                                            break;
                                        case "Boolean":
                                            transformedValue = (String(transformedValue).toLowerCase() == "true")
                                            break;
                                        case "dayjs":
                                            transformedValue = dayjs(isNumeric(transformedValue) ? _.toNumber(transformedValue)*1000 : transformedValue);
                                            break;
                                        case "dayjs.utc":
                                            transformedValue = dayjs.utc(isNumeric(transformedValue) ? _.toNumber(transformedValue)*1000 : transformedValue);
                                            break;
                                        default:
                                            throw new Error(`Unknown cast: ${prompt.configuration.cast}`);
                                    }
                                }
                            } catch(e) {
                                throw new Error(`Unable to run cast: ${prompt.configuration.cast} on: '${value}' for prompt: ${prompt.prompt} due to: ${e.message}`, e);
                            }
                            if(getURLSearchParam(prompt.prompt)) {
                                USED_SEARCH_PARAMS.add(prompt.prompt);
                            }
                            if(prompt.variable) {
                                variables[prompt.variable] = transformedValue;
                                if(prompt.type != 'password') {
                                    prompt.variable.startsWith(GLOBAL_PREFIX) ? GM_setValue(prompt.variable, value) : localStorage.setItem(prompt.variable, value);
                                }
                            } else if(prompt.type != 'password') {
                                localStorage.setItem(prompt.prompt, value);
                            }
                            let suffix = "";
                            if(prompt.configuration.suppress){
                                suffix = "\n?";
                                transformedValue = "";
                            }
                            let replacement = new RegExp(escapeRegex(prompt.raw)+suffix);
                            if (prompt.location == 'content') {
                                variables.content = variables.content.replace(replacement, transformedValue);
                            } else {
                                variables.internal.template = variables.internal.template.replace(replacement, transformedValue);
                            }
                        }
                    }
                }, deeplink, runBtn? runBtn.data('danger'):false);
            } catch(err) {
                console.log(err);
                return;
            }

        }
    }

    // interpolate variables using 2 passes to account for variables that are defined later
    for(let pass of [1,2]){
        variables.internal.pass = pass;
        for(let [key, value] of Object.entries(variables)) {
            // don't interpolate internal keys or content if raw is turned on
            if(key == 'internal' || (variables.raw && key == 'content')) {
                continue;
            }
            const result = await deepInterpolate(value, variables, pass==1 || preview || variables.ignoreErrors);
            if(result) {
                variables[key] = result;
            }
        }
    };

    variables.internal.result = await deepInterpolate(variables.internal.template, variables, variables.ignoreErrors || preview);
    variables.internal.credentialsBroker = (variables.ssoStartUrl && credentialsBroker.constructor.name != 'IdentityCenterCredentialsBroker') ?
        new IdentityCenterCredentialsBroker()
    : credentialsBroker;

    if(!preview) {
        try {
            if(variables.creds) {
                if(!variables.internal.credentialsBroker.getValidTemplateTypes().includes(variables.internal.templateType)) {
                    throw new Error(`The template ${variables.internal.templateType} is not supported by the ${credentialsBroker.constructor.name}`);
                }
                variables.internal.credentialsBroker.validate(variables);
            }
            if(GM_getValue("g_force_new_creds", false)) {
                variables.forceNewCreds = true;
            }
            switch(variables.internal.templateType) {
                case "copy" :
                    //refactor to show key if creds are needed
                    if(needsNewCreds(variables)) {
                        if(variables.internal.credentialsBroker.isDemoAccount(variables)) {
                            throw new Error(`Getting credentials not enabled on demo accounts`);
                        }
                        variables.internal.result = await variables.internal.credentialsBroker.getCredentials(variables);
                    } else if(variables.internal.newRegion) {
                        variables.internal.result = await interpolate(COPY_WITH_REGION, variables, false) + variables.internal.result;
                    }
                    copyAndAppendToOutput(variables.internal.result, runBtn);

                    persistLastRole(variables);
                    break;
                case "link" :
                    window.open(variables.internal.result);
                    break;
                case "settings" :
                    if(!_.isEqual(existingUserConfig,getUserConfig()) || !_.isEqual(existingCredentialsBroker, GM_getValue("g_credentials_broker", 'speedrun')) || GM_getValue("g_usernameOverride") ? variables.user != GM_getValue("g_usernameOverride") : user!=variables.user || FEDERATION_ENDPOINT.includes('-beta') != GM_getValue("g_use_beta_endpoint", false) || credentialsBroker.constructor.name != getCredentialsBroker().constructor.name) {
                        await sleep(500);
                        location.reload();
                        credentialsBroker = getCredentialsBroker();
                    }
                    break;
                case "federate" : {
                    if(variables.internal.credentialsBroker.isDemoAccount(variables)) {
                        throw new Error(`Federation not enabled on demo accounts`);
                    }
                    // strip leading / if present or console links won't work
                    variables.internal.result = variables.internal.result.startsWith('/') ? variables.internal.result.substring(1) : variables.internal.result
                    // use cloudwatch/deeplink.js instead of home to better handle long urls
                    variables.internal.result = variables.internal.result.replace(/^cloudwatch\/home/,'cloudwatch/deeplink.js')
                    variables.internal.consoleUrl = `https://${variables.region}.console.aws.amazon.com/${variables.internal.result}`;
                    console.log('Console url', variables.internal.consoleUrl);
                    needsNewCreds(variables);
                    let result = await variables.internal.credentialsBroker.getCredentials(variables);
                    if(result.url) {
                        if(result.url != variables.internal.consoleUrl) {
                            console.log(`Federation url`, result.url)
                        }
                        window.open(result.url);
                    } else {
                        GM_setClipboard(result.text);
                        toast("📋 Copied");
                    }
                    persistLastRole(variables);
                    break;
                }
                case "download" : {
                    GM_download({url:variables.internal.result, name:variables.filename, saveAs: Boolean(variables.saveAs),
                                 onerror: (download)=>{throw new Error(`Unable to download: ${download.error}.${download.details? ` ${download.details}`:''}`);},
                                 onload: () => {toast(`💾 Downloaded as: ${variables.filename}`);}});

                    break;
                }
                case "iframe" : {
                    injectIFrame($(`#${runBtn.data('previewTab')}`).first('code').get(0), variables);
                    break;
                }
                case "lambda" : {
                    if(variables.account && String(variables.account).startsWith('-')) {
                        throw new Error(`Lambda not enabled on demo accounts`);
                    }
                    const isFunctionUrl = variables.functionUrl != undefined;
                    if(!isFunctionUrl && !variables.functionName) {
                        throw new Error('functionUrl or functionName is required');
                    }
                    let lambdaCredentials = await variables.internal.credentialsBroker.getCredentials(variables);
                    const request = await srInvoke.invokeLambda(variables.functionName, variables.functionUrl, variables.internal.result === 'undefined'? undefined:variables.internal.result,variables.region,lambdaCredentials);
                    const response = await invoke(request, isFunctionUrl);
                    let lambdaResult = undefined;
                    if(isFunctionUrl) {
                        if(response.headers['x-amzn-requestid']) {
                            console.log(`Lambda RequestId: ${response.headers['x-amzn-requestid']}`);
                        }
                        if(response.status != 200) {
                            throw new Error(`${response.status} ${response.statusText}: ${response.responseText}`);
                        }
                        lambdaResult = response.responseText;
                    } else {
                        if(response.headers['x-amzn-requestid']) {
                            console.log(`Lambda RequestId: ${response.headers['x-amzn-requestid']}`);
                        }
                        console.log(response);
                        if(!(response.status == 200 || response.response.statusCode == "200")) {
                            throw new Error(`Invalid lambda response: ${response.status}: ${response.responseText}`);
                        }
                        lambdaResult = response.response.body || response.responseText;
                    }
                    if(variables.internal.output) {
                        variables.$ = lambdaResult.trim().match(/^\{.*?\}$/)? JSON.parse(lambdaResult) : lambdaResult;
                        lambdaResult = await deepInterpolate(variables.internal.output, $.extend(variables,{raw:false}), false);
                    }
                    copyAndAppendToOutput(lambdaResult, runBtn);
                    break;
                }
                case "eventbridge" : {
                    if(variables.account && String(variables.account).startsWith('-')) {
                        throw new Error(`EventBridge not enabled on demo accounts`);
                    }
                    if(!variables.eventBusName){
                        throw new Error('eventBusName is required');
                    }
                    let credentials = await variables.internal.credentialsBroker.getCredentials(variables);
                    let body = {
                        "Entries":[
                            {
                                "EventBusName": variables.eventBusName,
                                "Source": variables.source || "cc.speedrun",
                                "Detail": variables.internal.result,
                                "DetailType": variables.detailType || `Speedrun V${GM_info.script.version} Invocation`
                            }
                        ]
                    };
                    let headers = {
                        'X-Amz-Target': 'AWSEvents.PutEvents',
                        'Content-Type': 'application/x-amz-json-1.1',
                        'User-Agent': `Speedrun V${GM_info.script.version}`
                    }

                    const request = await srInvoke.invokeService(credentials, 'events', variables.region, new URL(`https://events.${variables.region}.amazonaws.com`), undefined, headers, JSON.stringify(body));
                    let response = await invoke(request, true);
                    if(response.status != 200 || JSON.parse(response.responseText).FailedEntryCount > 0) {
                        throw new Error(`${response.status} ${response.statusText}: ${response.responseText}`);
                    }
                    const eventId = JSON.parse(response.responseText).Entries[0].EventId;
                    console.log(`Published event to eventbridge with id: ${eventId}`);
                    toast(`Published: ${eventId}`);
                    break;
                }
                case "stepfunction" : {
                    if(variables.account && String(variables.account).startsWith('-')) {
                        throw new Error(`Step Functions not enabled on demo accounts`);
                    }
                    if(variables.functionName == undefined) {
                        throw new Error('functionName is required');
                    }
                    let credentials = await variables.internal.credentialsBroker.getCredentials(variables);
                    let headers = {'X-Amz-Target': 'AWSStepFunctions.StartExecution', 'Content-Type': 'application/x-amz-json-1.0', 'User-Agent': `Speedrun V${GM_info.script.version}`};
                    let body = {"stateMachineArn":  `arn:${variables.partition}:states:${variables.region}:${variables.account}:stateMachine:${variables.functionName}`,
                                "input": variables.internal.result
                               }
                    const request = await srInvoke.invokeService(credentials, 'states', variables.region, new URL(`https://states.${variables.region}.amazonaws.com`),'POST',headers,JSON.stringify(body));
                    let response = await invoke(request, true);
                    if(response.status != 200) {
                        throw new Error(`${response.status} ${response.statusText}: ${response.responseText}`);
                    }
                    let executionArn = JSON.parse(response.responseText).executionArn;
                    await nope(`#stepfunctionExecution {region: "${variables.region}", account: "${variables.account}", partition: "${variables.partition}", role: "${variables.role}", executionArn: "${executionArn}"}\n`);
                    break;
                }
                default:
                    throw new Error(`Unknown template type ${variables.internal.templateType}`);
                    break;
            }
        } catch (e) {
            alertAndThrow(e);
        }
        //persist last region and service
        let lastRegion = extractRegion(getValue('#select2-region-container', true));
        if(lastRegion) {
            localStorage.setItem(LAST_REGION_KEY, lastRegion);
        }
        let lastService = getValue('#service');
        if(lastService) {
            localStorage.setItem(LAST_SERVICE_KEY, lastService);
        }
    } else if(!variables.internal.content.trim().length) {
        variables.content = variables.internal.template;
        variables.internal.preview = variables.internal.template == '${content}' ? '' : variables.internal.template;
    }
    return variables;
}

if(isSRPage()){
    await updatePage(`page load: ${lastPath}`);
} else {
    persistIfIssue();
}

showToolbarOnPage();

$(document).ready(async function() {

    if(window.location.hash && window.location.search) {
        const el = document.getElementById('user-content-' + window.location.hash.substring(1));
        if(el) {
            el.scrollIntoView({behavior: 'smooth', block: 'start'});
            let buttonId = getURLSearchParam('srButton');
            const runBtn = buttonId?$(`#${buttonId}`) : $(el).parent().nextAll().find('.srRunBtn').first();
            if(runBtn && runBtn.length) {
                runBtn.focus();
                runBtn.addClass('anim-pulse');
                let cleanup = (stopPulsing=false)=>{
                    if(stopPulsing) {
                        runBtn.removeClass('anim-pulse');
                    }
                };
                runBtn.click(()=>cleanup(true));
                runBtn.hover(()=>cleanup(true));
            }
        }
    }
});

function getUserAgentHeader() {
    return {'User-Agent': `Speedrun V${GM_info.script.version}`}
}

function injectIFrame(location, variables) {
    const validAttributes = ['allow','allowfullscreen','height','loading','name','sandbox','allow-top-navigation','src','width','frameBorder'];
    let overlay = {'name':'Speedrun Content'}
    if(!variables.name instanceof Function){
        delete overlay.name;
    }
    const attributes = $.extend({'width':860, frameBorder:0, height:480, 'src':variables.internal.result},variables, overlay);
    location.textContent = '';
    GM_addElement(location,'iframe',validAttributes.reduce((accumulator,element) => {if(element in attributes) {accumulator[element]=attributes[element]}; return accumulator},{}));
}

function getValue(selector, useText) {
    let element = $(selector);
    if(element && element.is(':visible')) {
        return useText ? element.text() : element.val();
    }
    return undefined;
}

function extractRegion(textRegionValue) {
    return textRegionValue ? textRegionValue.replace(/ - [\w \.]+$/,'') : textRegionValue;
}

function updateRegions() {
    let service = $('#service');
    let lastRegion = curRegion || safeInterpolate(getURLSearchParam('srRegion'),{}) || localStorage.getItem(LAST_REGION_KEY);
    let regions = [];
    let currentOptGroup = undefined;
    let numRegions = 0;
    for(const region of firstNonNull(getRegions(service.val(), pageConfig))) {
        let splits = region.split(' ', 2);
        let suffix = splits.length > 1 ? splits[1] : '';
        if(!currentOptGroup || currentOptGroup.attr('label') !== regionNameMap[splits[0]].area) {
            currentOptGroup = $(`<optgroup label='${regionNameMap[splits[0]].area}'/>`);
            regions.push(currentOptGroup);
        }
        currentOptGroup.append($(`<option title='${regionNameMap[splits[0]].name}' value="${region}" ${region == lastRegion ? 'selected' : ''}>${region} - ${regionNameMap[splits[0]].prettyName}</option>`));
        numRegions++;
    }
    const region = $('#region');
    let hadRegions = region.children().length > 0;
    if(hadRegions != regions.length>0) {
        $('.needsRegion').each((index, element)=>{regions.length>0 ? $(element).show() : $(element).hide()});
    }
    region.empty().append(regions).prop('disabled',numRegions == 1).attr('hidden',numRegions ==0);
    regions.length > 0 ? region.next().show() : region.next().hide();
}


async function updatePage(reason) {
    console.log(`Updating page due to ${reason}`);
    if(updatingPage) {
        console.log("Page update in progress, ignoring");
        return;
    }
    try {
        updatingPage = true;
        // TODO see if this can be cleaned up, it works, but dirty
        if($('#srWikiSearch').length == 0 && $('#wiki-pages-filter').length == 1) {
            $('#wiki-pages-filter').wrap('<div class="input-group">').after($('<span id="srWikiSearch" class="input-group-button"><button type="button" title="Full-text Search" class="btn btn-sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" width="14" height="16" class="octicon octicon-search"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg></button></span>'))
            $('#srWikiSearch').on('click', async () => {
                let searchTerm = getValue('#wiki-pages-filter');
                if(searchTerm) {
                    let searchURL = new URL('https://www.github.com/search?type=wikis');
                    const result = isSRPage();
                    if(result) {
                        let [,path] = result;
                        searchURL.searchParams.set('q',`${searchTerm} repo:${path.substring(1)}`);
                        window.location.href = searchURL.href;
                    }
                }
            });
            $('#wiki-pages-filter').keypress(function(event) {
                if (event.key === "Enter") {
                    $('#srWikiSearch').click();
                }
            });
        }

        // hide speedrun toolbar when search is displayed
        if(isSRPage()) {
            const searchSelector = 'search-suggestions-dialog';
            waitForSelector(`#${searchSelector}`).then(async (result) => {
                if(githubSearchBarObserver) {
                    githubSearchBarObserver.disconnect();
                }

                githubSearchBarObserver = new MutationObserver(mutations => {
                    //console.log(mutations[0]);
                    if(doneLoading()){
                        mutations[0].oldValue == null || mutations[0].oldValue == 'true' ? $("#srToolbar").hide() : $("#srToolbar").show();
                    }
                });

                githubSearchBarObserver.observe(document.getElementById(searchSelector), {
                    attributeFilter:['aria-disabled'],
                    attributeOldValue:true
                });
            });
        }

        if(doneLoading()){
            console.log("Page already current, ignoring");
            return;
        }

        sessionVariables = {};
        let result = isSRPage();
        let path = undefined;
        if(result) {
            [,path] = result;
        }
        injectToolbar();
        let pageEnabled = await updatePageConfig(path);

        // second pass to wire up content
        if(pageEnabled) {
            await wireUpContent();
        }

        bindDataAndEvents();
        $("#service").trigger('change');

        for(const block of $(".markdown-body p > code, .markdown-body li > code, .markdown-body td > code, .markdown-body :header > code").not('code + span.copyCursor')) {
            $(block).after(`<span class='copyCursor'><clipboard-copy aria-label="Copy text" value="${$(block).text()}" data-view-component="true" tabindex="0" role="button">    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy" style="display: inline-block;">    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path></svg>    <svg style="display: none;" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check color-fg-success">    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path></svg></clipboard-copy></span>`);
        }
        $('button.js-wiki-more-pages-link').each(function(item) {
            $(this).trigger('click');
        });
    } catch(e){
        alertAndThrow(e);
    } finally {
        updatingPage = false;
        $('.markdown-body').append($('<span>', { class : 'srDone'}));
        toolbarShown = true;
    }

}

async function updatePageConfig(path) {
    let pageEnabled = isEnabledPath();
    if(path) {
        setInputValue($('#srEnabled'), pageEnabled);
        //Don't show toolbar toggle on pages it can't be disabled
        isAlwaysOnPath(path) ? $('#srToggleTitle').hide() : $('#srToggleTitle').show();
        $('#srToggleTitle').attr('title', `${pageEnabled ? 'Disable' : 'Enable'} Speedrun for markdown in: ${path.substring(1)}`);
    }
    // first pass to build page config
    pageConfig = await buildConfig(pageEnabled);


    let serviceDropdown = $("#service");

    let newServices = [];
    let lastService = getValue('#service') || safeInterpolate(getURLSearchParam('srService'),{user: GM_getValue("g_usernameOverride") || user}) || localStorage.getItem(LAST_SERVICE_KEY);

    for (const [key, value] of Object.entries(getServices(pageConfig))) {
        newServices.push(`<option value="${key}" ${key == lastService ? 'selected' : ''} >${value.dropdownName}</option>`);
    };
    serviceDropdown.empty().append(newServices);
    serviceDropdown.prop('disabled', newServices.length == 1);
    newServices.length > 0 ? serviceDropdown.show() : serviceDropdown.hide();
    return pageEnabled;
}

function setButtonDanger(btn, variables) {
    if(variables.danger || (variables.creds && _.isString(variables[variables.internal.credentialsBroker.getDangerKey()]) && variables[variables.internal.credentialsBroker.getDangerKey()].toLowerCase().match(/(full|admin|write)/))) {
        btn.addClass('color-bg-danger-emphasis');
        btn.removeClass('btn-primary');
        btn.data('danger', true);
    } else {
        btn.removeClass('color-bg-danger-emphasis');
        btn.addClass('btn-primary');
        btn.data('danger', false);
    }

    if(variables.creds) {
        let hasService = document.querySelector("#region").length > 0
        btn.attr('aria-label', !hasService ? 'Configure an account in settings to use this' : `${variables.internal.overriddenAccount || variables.srServiceName}${variables.internal.showPin? "📌":""}: ${(variables.internal.overriddenRegion || curRegion||"")}${variables.internal.showRegionPin? "📌":""} (${variables[variables.internal.credentialsBroker.getDangerKey()]})`);
        if(!btn.hasClass('canBeDangerous') && !btn.find('svg').length > 0) {
            btn.prepend($('<svg xmlns="http://www.w3.org/2000/svg" class="octicon color-fg-on-emphasis" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.5 5.5a4 4 0 112.731 3.795.75.75 0 00-.768.18L7.44 10.5H6.25a.75.75 0 00-.75.75v1.19l-.06.06H4.25a.75.75 0 00-.75.75v1.19l-.06.06H1.75a.25.25 0 01-.25-.25v-1.69l5.024-5.023a.75.75 0 00.181-.768A3.995 3.995 0 016.5 5.5zm4-5.5a5.5 5.5 0 00-5.348 6.788L.22 11.72a.75.75 0 00-.22.53v2C0 15.216.784 16 1.75 16h2a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V14h.75a.75.75 0 00.53-.22l.5-.5a.75.75 0 00.22-.53V12h.75a.75.75 0 00.53-.22l.932-.932A5.5 5.5 0 1010.5 0zm.5 6a1 1 0 100-2 1 1 0 000 2z"></path></svg><span> </span>'));
            btn.addClass('tooltipped tooltipped-e tooltipped-no-delay');
        }
        btn.prop('disabled', !hasService);
    } else {
        btn.prop('disabled', false);
    }
}

function updateTabs() {
    let hasService = document.querySelector("#region").length > 0
    $('#accountRequired').attr('hidden',true);
    let pageNeedsCreds = false;
    $('.srRunBtn').each(async function (item) {
        const btn = $(this);
        const variables = await nope(btn.data('code'), true);
        try {
            if(variables.internal.templateType != 'iframe' || (variables.internal.templateType == 'iframe' && variables.internal.prompts && variables.internal.prompts.length)) {
                $(`#${btn.data('previewTab')}`).first("code").html(await buildPreview(variables));
            } else {
                btn.hide();
                injectIFrame($(`#${btn.data('previewTab')}`).first('code').get(0), variables);
            }
        } catch(e) {
            alertAndThrow(`Unable to preview: ${e.message}`, e);
        }
        $(`#${btn.data('debugTab')}`).first("pre").html(syntaxHighlight(jsonWithoutInternalVariables(variables)));
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
            case 'download':
                btn.text('Download');
                break;
            case 'iframe':
                btn.text('Load');
                break;
        }
        setButtonDanger(btn, variables);
        if(variables.creds) {
            if(!pageNeedsCreds) {
                $('#accountRequired').attr('hidden',hasService);
                pageNeedsCreds = true;
            }
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
        // hide user service if there is > 1 service or hide user service is true
        let hideUserService = (Object.keys(services).length > 1 && pageConfig[SR_HIDE_USER_SERVICE]) != false || pageConfig[SR_HIDE_USER_SERVICE] == true
        for(const [service, config] of Object.entries(services)) {
            if((!serviceFilter.length || serviceFilter.includes(service)) && !(service == USER_SERVICE && hideUserService)) {
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
    for (const [region, config] of Object.entries(nullSafe(serviceVariables.regions))){
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
        let body = str.replace(HEADER,"").replace(TRAILING_WHITESPACE,"");
        return {template: groups[1], "service" : groups[3], "variables": groups[4] ? parseJSON(groups[4]) : undefined, body};
    }
    return undefined;
}

function hasElements(arr) {
    return arr && Array.isArray(arr) && arr.length>0;
}

async function buildConfig(enabled) {
    let userConfig = getUserConfig();
    pageConfig = (user && userConfig.services[USER_SERVICE].regions.aws.account) ? _.cloneDeep(userConfig) : {};
    const configs = [];
    let numPreBlocks = 0;
    if(enabled) {
        let preBlocks = $(".markdown-body pre");
        for (const pre of preBlocks){
            numPreBlocks++;
            const details = parseContent($(pre).text(), SR_CONFIG);
            if(details) {
                // hide sr config by default
                if(!doneLoading() && $(pre).parents('.details-reset').length == 0) {
                    $(pre).parent().wrap('<details class="details-reset"></details>')
                        .before(`<summary class="btn srConfig" title='Show Speedrun Config'>Show <img width="20" height="20" style="background-color:transparent;vertical-align:middle" src="${GM_info.script.icon}"/> Config <span class="dropdown-caret"></span></summary>`)
                        .prev().on('click', function(event) {
                        let btn = $(event.delegateTarget);
                        let text = btn.contents().get(0);
                        let toggleText = text.nodeValue.includes('Show') ? 'Hide' : 'Show';
                        btn.attr('title', `${toggleText} Speedrun Config`);
                        text.nodeValue = `${toggleText} `;
                    });
                }
                if(details.variables && details.variables.transclude) {
                    for (const path of arrayify(details.variables.transclude)) {
                        const result = await retrieve(path);
                        $(result).find(".markdown-body pre").each(function () {
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
            for(const config of configs){
                if(config.templates) {
                    templates = $.extend(true, templates, config.templates);
                    delete config.templates;
                }
                pageConfig = $.extend(true, pageConfig, config);
            };
        }
        if(pageConfig.srShowConfig || numPreBlocks == 1){
            $('.srConfig[title^="Show"]').trigger('click');
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

function persistIfNewRoleOrExpiration(roleArn, region, expiration) {
    const roleKey = `${LAST_CREDS}federate`;
    if(!roleArn) {
        console.log('Console role changed');
        GM_deleteValue(roleKey);
    } else {
        const lastCreds = GM_getValue(roleKey, undefined);
        if(!lastCreds || (lastCreds.role && lastCreds.role != roleArn || (expiration && (lastCreds.expiration+10000 > expiration || expiration + 10000 > lastCreds.expiration)))) {
            if(!lastCreds || lastCreds.role != roleArn) {
                console.log(`Console role changed from ${lastCreds ? lastCreds.role : 'not set'} to ${roleArn}`);
            } else {
                console.log(`Updating expiration of role for ${roleArn} to: ${new Date(expiration)}`);
            }
            persistLastRole({internal: {newCreds:true, templateType:'federate', expiration}, roleArn, region});
        }
    }
}

// if duration <= 12 it's in hours
// if duration <= 720 it's in minutes
// if duration > 720 it's in seconds
// if missing it's undefined
function normalizeDuration(duration) {
    if(duration === undefined) {
        return duration;
    }
    const originalDuration = duration;
    if(!isNumeric(duration) || duration <= 0 || duration > 43200) {
        throw new Error('${duration} is an invalid duration');
    }
    if (duration <= 12) {
        duration *= 3600;
    } else if (duration <= 720) {
        duration *= 60;
    }
    if(duration < 15*60) {
        throw new Error(`Invalid duration: ${originalDuration} minimum duration is 15 minutes`);
    }
    return duration;
}

// Refresh 5 minutes before expiration if duration is >= 1 hour else 2 minutes before expiration
function needsRefresh(expiration, duration=3600) {
    return expiration <= (Date.now()+((duration >= 3600 ? 5 : 2) *60000))
}

function needsNewCreds(variables) {
    const lastCreds = variables.creds ? GM_getValue(LAST_CREDS + variables.internal.templateType, undefined) : undefined;
    variables.internal.newCreds = variables.creds && (variables.forceNewCreds || lastCreds==undefined || needsRefresh(lastCreds.expiration, lastCreds.duration) || lastCreds.role != variables[credentialsBroker.getCacheKey()]);
    variables.internal.newRegion = variables.creds && (variables.forceNewCreds || lastCreds==undefined || needsRefresh(lastCreds.expiration, lastCreds.duration) || lastCreds.region != variables.region);
    return variables.internal.newCreds
}

function persistLastRole(variables) {
    if(variables.internal.newCreds) {
        let normalizedDuration = normalizeDuration(variables.roleDuration) || 3600;
        let expiration = variables.internal.expiration ? variables.internal.expiration : Date.now() + normalizedDuration*1000;
        GM_setValue(LAST_CREDS + variables.internal.templateType, {role: variables[credentialsBroker.getCacheKey()], region: variables.region, expiration, duration: normalizedDuration || 3600});
    }
}

async function wireUpContent() {
    let block = 0;
    for (const pre of $(".markdown-body pre")) {
        const code = $(pre).text();
        const groups = code.match(HEADER);
        if(groups && groups[1] && hasTemplate(groups[1])) {
            const isEmbed = groups[1].startsWith('!');
            block++;
            //wrap the copy content with ticks.
            let codeFence = "```";
            while(code.includes(codeFence)){
                codeFence+='`';
            }
            const wrappedCode = `${codeFence}\n${code}${codeFence}`;
            const copy = $(pre).parent().find('clipboard-copy');
            if(copy.length){
                copy.attr('value', wrappedCode);
            }
            const nav = $(`<nav id="sr-nav-${block}" class="d-flex UnderlineNav--right" style="margin-bottom:4px;" aria-label="Preview">`);
            const actions = $('<div class="UnderlineNav-actions">');
            const runBtnId = `sr-btn-${block}`;
            const runBtn = $(`<button id="${runBtnId}" type="button" class="btn color-fg-on-emphasis btn-sm m-1 srRunBtn">Run</button>`);
            runBtn.prop('disabled',true);
            actions.append(runBtn);
            nav.append(actions);
            dataAndEvents[runBtnId] = {'data': {code}, 'events': {}};


            const navBody = $('<div class="UnderlineNav-body">');
            var index = 0;
            for (const [key, value] of Object.entries(tabNames)) {
                const localBlock = block;
                let tab = $(`<span id='tab-${key}-${localBlock}' class="UnderlineNav-item${key==='Output'?' d-none':''}" ${index++ == 0 ? 'aria-current="page"' : ''}><svg xmlns="http://www.w3.org/2000/svg" class="UnderlineNav-octicon octicon octicon-tools" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="${value}"></path></svg><span>${key}</span></span>`);
                navBody.append(tab);
                dataAndEvents[`tab-${key}-${localBlock}`] = {events:{click:function(tab) {
                    for (const [oTabKey, oTabValue] of Object.entries(tabNames)) {
                        let tabId = `${oTabKey}-${localBlock}`
                            if(oTabKey === key) {
                                const clipboard = $(this).closest('nav').next('div').find('div.zeroclipboard-container');
                                key === 'Preview' ? clipboard.removeClass('d-none') : clipboard.addClass('d-none');
                                $(this).attr('aria-current','page');
                                $(`#${tabId}`).show();
                            } else {
                                $(`#${tabId}`).hide();
                                $(`#tab-${tabId}`).removeAttr('aria-current');
                            }
                    }
                }}};
                nav.append(navBody);
                $(pre).parent().before(nav);
                dataAndEvents[runBtnId].data.anchor = runBtn.closest("nav").prevAll("div.markdown-heading").find('a.anchor').last();
                $(pre).attr('id',`Preview-${block}`);
                dataAndEvents[runBtnId].data.previewTab = $(pre).attr('id');

                const codeTab = $(`<pre id='Code-${block}'><code>${escapeHTMLStartTags(wrappedCode)}</code></pre>`).hide();
                const debugTab = $(`<pre id='Debug-${block}'><div class='highlight highlight-source-js notranslate position-relative overflow-auto'><pre></pre></div></pre>`).hide();
                const outputTab = $(`<pre id='Output-${block}' class='width-full'><div class="d-flex flex-column" style='max-height: 40em'></pre>`).hide();
                dataAndEvents[runBtnId].data.debugTab = `Debug-${block}`;
                dataAndEvents[runBtnId].data.outputTab = `Output-${block}`;
                $(pre).after(codeTab);
                codeTab.after(debugTab);
                debugTab.after(outputTab);
                dataAndEvents[runBtnId].events.click = async function() {
                    await nope(runBtn.data('code'), false, runBtn.data('anchor'), runBtn);
                };
            }
        }
    }
}

function colorizeComments(content, variables) {
    return firstNonNull(variables.stripComments, !variables.raw) ?
        content.replace(COMMENT_G,function(comment) {
        let [,before,,,content,after] = comment.match(COMMENT);
        return `${before}<span class="Label Label--inline Label--secondary"><i>${escapeHTMLQuotesAnd$(content)}</i></span>${firstNonNull(after,"")}`;
    }) : content;
}

function colorizeOutput(content, variables) {
    return firstNonNull(!variables.raw) ?
        content.replace(OUTPUT,'<span class="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis mr-1">Output Transform</span>')
    : content;
}

//html encode curly braces
function encodeCurlies(str) {
    return str == undefined ? str : str.replace(/[\{\}]/g, m => ({'{':'&#123;', '}':'&#125;'}[m]));
}

function colorizePrompts(content, variables) {
    return firstNonNull(variables.internal.prompts, true) ? content.replace(PROMPT_G,function(prompt) {
        if(variables.prompts === false) {
            return encodeCurlies(prompt)
        } else {
            let groups = prompt.match(PROMPT);
            return encodeCurlies(`<span title="${escapeHTMLQuotesAnd$(groups[0])}" class="Label Label--inline Label--accent">${groups[2]}</span>`);
        }
    }) : content;
}

async function colorizeLiterals(content, variables) {
    return variables.raw ? content : await interpolateLiteralsInString(content, variables, true,
                                                                       (result, match) =>
                                                                       {let escaped = escapeHTMLQuotesAnd$(match);
                                                                        return `<span title="${escaped}" class="Label Label--inline Label--${result == undefined ? "danger" : "success"}" style='box-decoration-break: clone;'>${whitespaceToHTML(firstNonNull(result, match))}</span>`});
}

async function buildPreview(variables) {
    let preview = `<span class="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-1" title="${escapeHTMLQuotesAnd$(variables.internal.template)}">#${variables.internal.templateName}</span>${variables.internal.templateName.replaceAll(/^!/g,'') != variables.internal.templateType ? `<span class="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis">type: ${variables.internal.templateType}${variables.creds?"":" "}</span>`:''}
${variables.internal.preview}`;
    preview = colorizeComments(preview, variables);
    preview = colorizeOutput(preview, variables);
    preview = colorizePrompts(preview, variables);
    if(variables.content == variables.internal.template){
        variables.content = "";
    }
    return await colorizeLiterals(preview, variables);
}

$(document).on('select2:open', () => {
    const selects = document.querySelectorAll('.select2-container--open .select2-search__field');
    selects[selects.length-1].focus();
});

function alert(body, title) {
    $('#srModal-title').text(title || 'Alert');
    $('#srModal-body').html($('<p/>',{class:'text-mono'}).append(body));
    $('#srModal-error').attr('hidden',true);
    $('#srModal-ok').prevAll().remove();
    //todo make this a separate modal?
    setTimeout(() => {document.querySelector('#srModal').open = true}, 100);
}

function dialog(body, title, callback, footerContent, dangerous) {
    $('#srModal-title').text(title || 'Input');
    $('#srModal-body').html(body);
    $('#srModal-error').attr('hidden',true);
    let okBtn = $('#srModal-ok');
    okBtn.prevAll().remove();
    if(footerContent) {
        okBtn.before(footerContent);
    }
    okBtn.addClass(dangerous ? 'color-bg-danger-emphasis' : 'btn-primary');
    okBtn.removeClass(dangerous ? 'btn-primary' : 'color-bg-danger-emphasis');

    $('#srModal').ready(new function() {
        $('#srModal').find("select").each(function(index, select) {
            $(select).select2({
                dropdownAutoWidth : true,
                width:'style'});
        });
        $('#srModal-ok').focus();
    });
    if ($('.srValidated').length > 0) {
        validateInputs();
    }
    document.querySelector('#srModal').open = true;
    return new Promise((resolve,reject) => {
        let isResolved = false;
        $('#srModal-ok').on( "click.sr", async function(event) {
            if(callback) {
                try {
                    await callback();
                } catch(e) {
                    alert(escapeHTMLQuotesAnd$(e.message || e));
                    event.preventDefault();
                    event.stopPropagation();
                    reject(e);
                }
            }
            isResolved = true;
            //remove any existing listener
            $('#srModal-ok').off("click.sr");
            $('#srModal').off("details-dialog-close.sr");
            resolve();
        });
        $('#srModal').on("details-dialog-close.sr", function(event) {
            $('#srModal-ok').off("click.sr");
            if(!isResolved) {
                $('srModal').off("details-dialog-close.sr");
                reject('User cancelled run');
            }
        });
    });
}

function alertAndThrow(message, cause) {
    console.log(cause || message);
    alert(escapeHTMLStartTags(message));
    if(message instanceof Error && !cause) {
        throw new Error(message);
    }
    throw cause || message;
}

function getCredentialsBroker() {
    if(window.location.pathname.toLowerCase().startsWith('/no-backspace-crew/speedrun')){
        return new SpeedrunCredentialsBroker();
    }
    switch (GM_getValue("g_credentials_broker", 'speedrun')) {
        case "speedrun":
            return new SpeedrunCredentialsBroker();
            break;
        case "granted":
            return new GrantedCredentialsBroker();
            break;
        case "identitycenter":
            return new IdentityCenterCredentialsBroker();
            break;
        default:
            alertAndThrow('Unknown credentials broker');
            break;
    }
}

function rightPad(array, newLength, padding) {
    array.push(...Array(newLength - array.length).fill(padding));
}

function getLatestVersion(remoteVersion) {
    let [latestVersion, localVersion] = Array(2).fill(GM_info.script.version);
    const semver = localVersion.split('.').map((v) => parseInt(v, 10));
    const remoteSemver = remoteVersion.split('.').map((v) => parseInt(v, 10));
    if(semver.length != remoteSemver.length) {
        semver.length > remoteSemver.length ? rightPad(remoteSemver, semver.length, 0) : rightPad(semver, remoteSemver.length, 0);
    }
    for(const i in semver) {
        if (semver[i] < remoteSemver[i]) {
            latestVersion = remoteVersion;
            break;
        } else if(semver[i] > remoteSemver[i]) {
            break;
        }
    }
    return latestVersion;
}

function domSnapshot(element, filename){
    domToPng(element,{scale:2,sandbox:element.ownerDocument, debug:true, style:element.style, autoDestruct:true,
                      //only include certain styles for logs histogram for speed
                      includeStyleProperties: element.className && element.className.includes('histogram') ?
                      ['background-color','color','font-weight','line-height','display','font-size','font-family','fill', 'stroke','stroke-width','font']:null}).then(imgURI => {
        const download = GM_addElement('a');
        download.href = imgURI;
        download.download = filename;
        download.click();
        download.remove();
    });
}

function srUpdateClickHandler(event) {
    const srUpdate = $('#srUpdate');
    srUpdate.on('click.sr', (e) => {
        e.preventDefault();
        e.stopPropagation();
        location.reload()
        return false;
    });
    srUpdate.attr('title',`Update page to Speedrun V.${newSRVersion}`);
    srUpdate.find('svg').replaceWith('<svg class="octicon octicon-tools color-fg-attention" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path d="M1.705 8.005a.75.75 0 0 1 .834.656 5.5 5.5 0 0 0 9.592 2.97l-1.204-1.204a.25.25 0 0 1 .177-.427h3.646a.25.25 0 0 1 .25.25v3.646a.25.25 0 0 1-.427.177l-1.38-1.38A7.002 7.002 0 0 1 1.05 8.84a.75.75 0 0 1 .656-.834ZM8 2.5a5.487 5.487 0 0 0-4.131 1.869l1.204 1.204A.25.25 0 0 1 4.896 6H1.25A.25.25 0 0 1 1 5.75V2.104a.25.25 0 0 1 .427-.177l1.38 1.38A7.002 7.002 0 0 1 14.95 7.16a.75.75 0 0 1-1.49.178A5.5 5.5 0 0 0 8 2.5Z"></path></svg>');
}
//  ]]></>).toString(), { "targets": "> 0.25%, not dead"}).code);
})();