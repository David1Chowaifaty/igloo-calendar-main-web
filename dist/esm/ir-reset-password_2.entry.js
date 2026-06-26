import { r as registerInstance, c as createEvent, d as getElement, h, F as Fragment } from './index-D7D7fhZS.js';
import { T as Token } from './Token-CkxFIO_J.js';
import { A as AuthService } from './authenticate.service-s4w9_YTS.js';
import { R as RoomService } from './room.service-RYuSnrxp.js';
import { S as SystemService } from './system.service-DN8zRqj9.js';
import { l as locales } from './locales.store-C0aS6UDK.js';
import { C as CONSTANTS } from './constants-DI4DZmiQ.js';
import { l as libExports } from './index-DeW5X45W.js';
import { U as UserService } from './user.service-Bvb1PhLE.js';
import { c as calendar_data } from './calendar-data-15-64PrB.js';
import { _ as _formatTime } from './functions-81yL-Vms.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-TzZ5wfUy.js';
import './utils-DvzWTdKJ.js';
import './type-D7rOPtKA.js';

const irResetPasswordCss = () => `.base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}`;

const sheetCss$1 = () => `.sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}`;

const IrResetPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
    }
    get el() { return getElement(this); }
    username;
    old_pwd;
    ticket;
    skip2Fa;
    language = 'en';
    confirmPassword;
    password;
    showValidator = false;
    autoValidate = false;
    error = {};
    submitted = false;
    isLoading = false;
    isFetching = false;
    closeSideBar;
    token = new Token();
    authService = new AuthService();
    systemService = new SystemService();
    roomService = new RoomService();
    initialized = false;
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    componentDidLoad() {
        this.init();
    }
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    async init() {
        if (!this.ticket || this.initialized) {
            return;
        }
        const [localized_words] = await Promise.all([
            this.roomService.fetchLanguage(this.language, ['_USER_MGT']),
            this.systemService.checkOTPNecessity({
                METHOD_NAME: 'Change_User_Pwd',
            }),
        ]);
        locales.entries = localized_words.entries;
        locales.direction = localized_words.direction;
        this.initialized = false;
    }
    ResetPasswordSchema = libExports.z.object({
        password: libExports.z.string().regex(CONSTANTS.PASSWORD),
        confirm_password: libExports.z
            .string()
            .nullable()
            .refine(password => {
            if (!CONSTANTS.PASSWORD.test(password)) {
                return false;
            }
            return password === this.password;
        }, { message: 'Password must be at least 8 characters long.' }),
    });
    async handleChangePassword(e) {
        e.preventDefault();
        try {
            this.error = {};
            this.isLoading = true;
            this.autoValidate = true;
            this.ResetPasswordSchema.parse({
                password: this.password,
                confirm_password: this.confirmPassword,
            });
            await this.authService.changeUserPwd({
                username: this.username,
                new_pwd: this.password,
                old_pwd: this.old_pwd,
            });
            if (!this.skip2Fa) {
                // this.submitted = true;
                window.history.back();
            }
            if (this.el.slot === 'sidebar-body') {
                this.closeSideBar.emit();
            }
        }
        catch (error) {
            if (error instanceof libExports.ZodError) {
                let validationErrors = {};
                error.issues.map(issue => {
                    const path = issue.path[0];
                    console.log(path, issue);
                    if (path === 'password') {
                        this.showValidator = true;
                    }
                    validationErrors[path] = true;
                });
                this.error = validationErrors;
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    handleOtpFinished(e) {
        if (e.detail.type === 'success') {
            return;
        }
        if (this.el.slot !== 'sidebar-body') {
            window.history.back();
        }
        else {
            this.closeSideBar.emit();
        }
    }
    render() {
        const insideSidebar = this.el.slot === 'sidebar-body';
        // if (!locales.entries && !insideSidebar) {
        //   return <ir-loading-screen></ir-loading-screen>;
        // }
        return (h("div", { key: '6ed69dbcd61e2df9b9cfd28d3381a43865e0fda6', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: '0e91c53f30787b186c5acd84ddab948369d79b94' }, !insideSidebar && (h(Fragment, { key: '760fc18e5b4eafc7dd9adc316a9645d2a7fbebd7' }, h("ir-interceptor", { key: 'f2c937fd570677b3696f8685e83f750ce1680b56', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '46ed2f25857aa6f0869c3c4809c8d8aa64a3e2f0' }))), h("form", { key: 'c2682646b6e13f26f528c33c289e0dbcb623933e', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: 'ee4c7fc748a386612866a02165bb804e5cdfa3b0', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '6e6d06006558b3a365e7ff38c9cd678ff2aa287e', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '01834079d28841672ee55f2e5e3ef23acc90bbde', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '96fd32b0a22343b5c3b3ec36f8b43554e453bec9', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '5dc893802ec3f5ae2b405cd072d90054eb5979fc', class: "text-center mb-2" }, h("h4", { key: '9c799ed82c654cfcb37d3b257e5e3def0b38b592', class: "mb-1" }, locales?.entries?.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '0cf2951f29005ef31a26545d2e16f61b151f3bc0' }, h("div", { key: '1af5331662127b180bf7d4133f1edd64586a85e3', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '8a27abafe463c0e34667da32e5c4313451533ad5', class: "m-0 p-0" }, h("div", { key: '79e0dce6a65fe38f954535d73bde7c7f0c15836e', class: 'position-relative' }, h("ir-validator", { key: '362a393386fa64e55dbde3ea1ef7669e6b4c4717', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: '4f2c358ab56e8e88e720a7766fc91bc5eb337ca5', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: locales.entries?.Lcz_NewPassword, value: this.password }))), this.showValidator && h("ir-password-validator", { key: 'c8e78004a722ded4713670e3ca326502cd858a34', class: "mb-1", password: this.password })), h("div", { key: 'd7bb402e04178f758aa6a4246288aae5a24b2517', class: 'position-relative' }, h("ir-validator", { key: '8c5035f821683477e3022897748266671b45baee', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: '6cc1e63f036c6c897729c7886a43ec47c7e6bf13', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: locales.entries?.Lcz_ConfirmPassword, value: this.confirmPassword })))), !insideSidebar && (h("div", { key: '83d856773f9cb42a72cb829151763eae96e87fd6', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: '8bd1f52361f03e5fef296ddaaa26e85f37dc48d6',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={locales.entries?.Lcz_Cancel}
            size: "m", appearance: "filled", variant: "neutral" }, locales.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'aa4273a80c356fa219ecafcef541a3754da452ea',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "m", variant: "brand" }, locales.entries?.Lcz_ChangePassword)))))), insideSidebar && (h("div", { key: '8e7a38a4f58a8a6d01a9cb71085f5cdfa18ea4f6', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: '8bd8181c4e000b280741dd7e233ec085585bc0d7', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '3b34633633eeff6591c4a1959e775c70b2b52f9f', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "m" }, locales.entries.Lcz_ChangePassword)))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrResetPassword.style = irResetPasswordCss() + sheetCss$1();

var uaParser$1 = {exports: {}};

var uaParser = uaParser$1.exports;

var hasRequiredUaParser;

function requireUaParser () {
	if (hasRequiredUaParser) return uaParser$1.exports;
	hasRequiredUaParser = 1;
	(function (module, exports) {
		/////////////////////////////////////////////////////////////////////////////////
		/* UAParser.js v2.0.3
		   Copyright © 2012-2025 Faisal Salman <f@faisalman.com>
		   AGPLv3 License *//*
		   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
		   Supports browser & node.js environment. 
		   Demo   : https://uaparser.dev
		   Source : https://github.com/faisalman/ua-parser-js */
		/////////////////////////////////////////////////////////////////////////////////

		/* jshint esversion: 3 */ 
		/* globals window */

		(function (window, undefined$1) {
		    
		    //////////////
		    // Constants
		    /////////////

		    var LIBVERSION  = '2.0.3',
		        UA_MAX_LENGTH = 500,
		        USER_AGENT  = 'user-agent',
		        EMPTY       = '',
		        UNKNOWN     = '?',

		        // typeof
		        FUNC_TYPE   = 'function',
		        UNDEF_TYPE  = 'undefined',
		        OBJ_TYPE    = 'object',
		        STR_TYPE    = 'string',

		        // properties
		        UA_BROWSER  = 'browser',
		        UA_CPU      = 'cpu',
		        UA_DEVICE   = 'device',
		        UA_ENGINE   = 'engine',
		        UA_OS       = 'os',
		        UA_RESULT   = 'result',
		        
		        NAME        = 'name',
		        TYPE        = 'type',
		        VENDOR      = 'vendor',
		        VERSION     = 'version',
		        ARCHITECTURE= 'architecture',
		        MAJOR       = 'major',
		        MODEL       = 'model',

		        // device types
		        CONSOLE     = 'console',
		        MOBILE      = 'mobile',
		        TABLET      = 'tablet',
		        SMARTTV     = 'smarttv',
		        WEARABLE    = 'wearable',
		        XR          = 'xr',
		        EMBEDDED    = 'embedded',

		        // browser types
		        INAPP       = 'inapp',

		        // client hints
		        BRANDS      = 'brands',
		        FORMFACTORS = 'formFactors',
		        FULLVERLIST = 'fullVersionList',
		        PLATFORM    = 'platform',
		        PLATFORMVER = 'platformVersion',
		        BITNESS     = 'bitness',
		        CH_HEADER   = 'sec-ch-ua',
		        CH_HEADER_FULL_VER_LIST = CH_HEADER + '-full-version-list',
		        CH_HEADER_ARCH      = CH_HEADER + '-arch',
		        CH_HEADER_BITNESS   = CH_HEADER + '-' + BITNESS,
		        CH_HEADER_FORM_FACTORS = CH_HEADER + '-form-factors',
		        CH_HEADER_MOBILE    = CH_HEADER + '-' + MOBILE,
		        CH_HEADER_MODEL     = CH_HEADER + '-' + MODEL,
		        CH_HEADER_PLATFORM  = CH_HEADER + '-' + PLATFORM,
		        CH_HEADER_PLATFORM_VER = CH_HEADER_PLATFORM + '-version',
		        CH_ALL_VALUES       = [BRANDS, FULLVERLIST, MOBILE, MODEL, PLATFORM, PLATFORMVER, ARCHITECTURE, FORMFACTORS, BITNESS],

		        // device vendors
		        AMAZON      = 'Amazon',
		        APPLE       = 'Apple',
		        ASUS        = 'ASUS',
		        BLACKBERRY  = 'BlackBerry',
		        GOOGLE      = 'Google',
		        HUAWEI      = 'Huawei',
		        LENOVO      = 'Lenovo',
		        HONOR       = 'Honor',
		        LG          = 'LG',
		        MICROSOFT   = 'Microsoft',
		        MOTOROLA    = 'Motorola',
		        NVIDIA      = 'Nvidia',
		        ONEPLUS     = 'OnePlus',
		        OPPO        = 'OPPO',
		        SAMSUNG     = 'Samsung',
		        SHARP       = 'Sharp',
		        SONY        = 'Sony',
		        XIAOMI      = 'Xiaomi',
		        ZEBRA       = 'Zebra',

		        // browsers
		        CHROME      = 'Chrome',
		        CHROMIUM    = 'Chromium',
		        CHROMECAST  = 'Chromecast',
		        EDGE        = 'Edge',
		        FIREFOX     = 'Firefox',
		        OPERA       = 'Opera',
		        FACEBOOK    = 'Facebook',
		        SOGOU       = 'Sogou',

		        PREFIX_MOBILE  = 'Mobile ',
		        SUFFIX_BROWSER = ' Browser',

		        // os
		        WINDOWS     = 'Windows';
		   
		    var isWindow            = typeof window !== UNDEF_TYPE,
		        NAVIGATOR           = (isWindow && window.navigator) ? 
		                                window.navigator : 
		                                undefined$1,
		        NAVIGATOR_UADATA    = (NAVIGATOR && NAVIGATOR.userAgentData) ? 
		                                NAVIGATOR.userAgentData : 
		                                undefined$1;

		    ///////////
		    // Helper
		    //////////

		    var extend = function (defaultRgx, extensions) {
		            var mergedRgx = {};
		            var extraRgx = extensions;
		            if (!isExtensions(extensions)) {
		                extraRgx = {};
		                for (var i in extensions) {
		                    for (var j in extensions[i]) {
		                        extraRgx[j] = extensions[i][j].concat(extraRgx[j] ? extraRgx[j] : []);
		                    }
		                }
		            }
		            for (var k in defaultRgx) {
		                mergedRgx[k] = extraRgx[k] && extraRgx[k].length % 2 === 0 ? extraRgx[k].concat(defaultRgx[k]) : defaultRgx[k];
		            }
		            return mergedRgx;
		        },
		        enumerize = function (arr) {
		            var enums = {};
		            for (var i=0; i<arr.length; i++) {
		                enums[arr[i].toUpperCase()] = arr[i];
		            }
		            return enums;
		        },
		        has = function (str1, str2) {
		            if (typeof str1 === OBJ_TYPE && str1.length > 0) {
		                for (var i in str1) {
		                    if (lowerize(str1[i]) == lowerize(str2)) return true;
		                }
		                return false;
		            }
		            return isString(str1) ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
		        },
		        isExtensions = function (obj, deep) {
		            for (var prop in obj) {
		                return /^(browser|cpu|device|engine|os)$/.test(prop) || (deep ? isExtensions(obj[prop]) : false);
		            }
		        },
		        isString = function (val) {
		            return typeof val === STR_TYPE;
		        },
		        itemListToArray = function (header) {
		            if (!header) return undefined$1;
		            var arr = [];
		            var tokens = strip(/\\?\"/g, header).split(',');
		            for (var i = 0; i < tokens.length; i++) {
		                if (tokens[i].indexOf(';') > -1) {
		                    var token = trim(tokens[i]).split(';v=');
		                    arr[i] = { brand : token[0], version : token[1] };
		                } else {
		                    arr[i] = trim(tokens[i]);
		                }
		            }
		            return arr;
		        },
		        lowerize = function (str) {
		            return isString(str) ? str.toLowerCase() : str;
		        },
		        majorize = function (version) {
		            return isString(version) ? strip(/[^\d\.]/g, version).split('.')[0] : undefined$1;
		        },
		        setProps = function (arr) {
		            for (var i in arr) {
		                var propName = arr[i];
		                if (typeof propName == OBJ_TYPE && propName.length == 2) {
		                    this[propName[0]] = propName[1];
		                } else {
		                    this[propName] = undefined$1;
		                }
		            }
		            return this;
		        },
		        strip = function (pattern, str) {
		            return isString(str) ? str.replace(pattern, EMPTY) : str;
		        },
		        stripQuotes = function (str) {
		            return strip(/\\?\"/g, str); 
		        },
		        trim = function (str, len) {
		            if (isString(str)) {
		                str = strip(/^\s\s*/, str);
		                return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
		            }
		    };

		    ///////////////
		    // Map helper
		    //////////////

		    var rgxMapper = function (ua, arrays) {

		            if(!ua || !arrays) return;

		            var i = 0, j, k, p, q, matches, match;

		            // loop through all regexes maps
		            while (i < arrays.length && !matches) {

		                var regex = arrays[i],       // even sequence (0,2,4,..)
		                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
		                j = k = 0;

		                // try matching uastring with regexes
		                while (j < regex.length && !matches) {

		                    if (!regex[j]) { break; }
		                    matches = regex[j++].exec(ua);

		                    if (!!matches) {
		                        for (p = 0; p < props.length; p++) {
		                            match = matches[++k];
		                            q = props[p];
		                            // check if given property is actually array
		                            if (typeof q === OBJ_TYPE && q.length > 0) {
		                                if (q.length === 2) {
		                                    if (typeof q[1] == FUNC_TYPE) {
		                                        // assign modified match
		                                        this[q[0]] = q[1].call(this, match);
		                                    } else {
		                                        // assign given value, ignore regex match
		                                        this[q[0]] = q[1];
		                                    }
		                                } else if (q.length === 3) {
		                                    // check whether function or regex
		                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
		                                        // call function (usually string mapper)
		                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined$1;
		                                    } else {
		                                        // sanitize match using given regex
		                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined$1;
		                                    }
		                                } else if (q.length === 4) {
		                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined$1;
		                                }
		                            } else {
		                                this[q] = match ? match : undefined$1;
		                            }
		                        }
		                    }
		                }
		                i += 2;
		            }
		        },

		        strMapper = function (str, map) {

		            for (var i in map) {
		                // check if current value is array
		                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
		                    for (var j = 0; j < map[i].length; j++) {
		                        if (has(map[i][j], str)) {
		                            return (i === UNKNOWN) ? undefined$1 : i;
		                        }
		                    }
		                } else if (has(map[i], str)) {
		                    return (i === UNKNOWN) ? undefined$1 : i;
		                }
		            }
		            return map.hasOwnProperty('*') ? map['*'] : str;
		    };

		    ///////////////
		    // String map
		    //////////////

		    var windowsVersionMap = {
		            'ME'        : '4.90',
		            'NT 3.11'   : 'NT3.51',
		            'NT 4.0'    : 'NT4.0',
		            '2000'      : 'NT 5.0',
		            'XP'        : ['NT 5.1', 'NT 5.2'],
		            'Vista'     : 'NT 6.0',
		            '7'         : 'NT 6.1',
		            '8'         : 'NT 6.2',
		            '8.1'       : 'NT 6.3',
		            '10'        : ['NT 6.4', 'NT 10.0'],
		            'RT'        : 'ARM'
		        },
		        
		        formFactorsMap = {
		            'embedded'  : 'Automotive',
		            'mobile'    : 'Mobile',
		            'tablet'    : ['Tablet', 'EInk'],
		            'smarttv'   : 'TV',
		            'wearable'  : 'Watch',
		            'xr'        : ['VR', 'XR'],
		            '?'         : ['Desktop', 'Unknown'],
		            '*'         : undefined$1
		    };

		    //////////////
		    // Regex map
		    /////////////

		    var defaultRegexes = {

		        browser : [[

		            // Most common regardless engine
		            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
		            ], [VERSION, [NAME, PREFIX_MOBILE + 'Chrome']], [
		            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
		            ], [VERSION, [NAME, 'Edge']], [

		            // Presto based
		            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
		            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
		            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
		            ], [NAME, VERSION], [
		            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
		            ], [VERSION, [NAME, OPERA+' Mini']], [
		            /\bop(?:rg)?x\/([\w\.]+)/i                                          // Opera GX
		            ], [VERSION, [NAME, OPERA+' GX']], [
		            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
		            ], [VERSION, [NAME, OPERA]], [

		            // Mixed
		            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i            // Baidu
		            ], [VERSION, [NAME, 'Baidu']], [
		            /\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i                       // Maxthon
		            ], [VERSION, [NAME, 'Maxthon']], [
		            /(kindle)\/([\w\.]+)/i,                                             // Kindle
		            /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,      
		                                                                                // Lunascape/Maxthon/Netfront/Jasmine/Blazer/Sleipnir
		            // Trident based
		            /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,        // Avant/IEMobile/SlimBrowser/SlimBoat/Slimjet
		            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

		            // Blink/Webkit/KHTML based                                         // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon/LG Browser/Otter/qutebrowser/Dooble
		            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,
		                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ//Vivaldi/DuckDuckGo/Klar/Helio/Dragon
		            /(heytap|ovi|115|surf)browser\/([\d\.]+)/i,                         // HeyTap/Ovi/115/Surf
		            /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i                              // Ecosia/Weibo
		            ], [NAME, VERSION], [
		            /quark(?:pc)?\/([-\w\.]+)/i                                         // Quark
		            ], [VERSION, [NAME, 'Quark']], [
		            /\bddg\/([\w\.]+)/i                                                 // DuckDuckGo
		            ], [VERSION, [NAME, 'DuckDuckGo']], [
		            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
		            ], [VERSION, [NAME, 'UCBrowser']], [
		            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
		            /\bqbcore\/([\w\.]+).+microm/i,
		            /micromessenger\/([\w\.]+)/i                                        // WeChat
		            ], [VERSION, [NAME, 'WeChat']], [
		            /konqueror\/([\w\.]+)/i                                             // Konqueror
		            ], [VERSION, [NAME, 'Konqueror']], [
		            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
		            ], [VERSION, [NAME, 'IE']], [
		            /ya(?:search)?browser\/([\w\.]+)/i                                  // Yandex
		            ], [VERSION, [NAME, 'Yandex']], [
		            /slbrowser\/([\w\.]+)/i                                             // Smart Lenovo Browser
		            ], [VERSION, [NAME, 'Smart ' + LENOVO + SUFFIX_BROWSER]], [
		            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
		            ], [[NAME, /(.+)/, '$1 Secure' + SUFFIX_BROWSER], VERSION], [
		            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
		            ], [VERSION, [NAME, FIREFOX+' Focus']], [
		            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
		            ], [VERSION, [NAME, OPERA+' Touch']], [
		            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
		            ], [VERSION, [NAME, 'Coc Coc']], [
		            /dolfin\/([\w\.]+)/i                                                // Dolphin
		            ], [VERSION, [NAME, 'Dolphin']], [
		            /coast\/([\w\.]+)/i                                                 // Opera Coast
		            ], [VERSION, [NAME, OPERA+' Coast']], [
		            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
		            ], [VERSION, [NAME, 'MIUI' + SUFFIX_BROWSER]], [
		            /fxios\/([\w\.-]+)/i                                                // Firefox for iOS
		            ], [VERSION, [NAME, PREFIX_MOBILE + FIREFOX]], [
		            /\bqihoobrowser\/?([\w\.]*)/i                                       // 360
		            ], [VERSION, [NAME, '360']], [
		            /\b(qq)\/([\w\.]+)/i                                                // QQ
		            ], [[NAME, /(.+)/, '$1Browser'], VERSION], [
		            /(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i
		            ], [[NAME, /(.+)/, '$1' + SUFFIX_BROWSER], VERSION], [              // Oculus/Sailfish/HuaweiBrowser/VivoBrowser/PicoBrowser
		            /samsungbrowser\/([\w\.]+)/i                                        // Samsung Internet
		            ], [VERSION, [NAME, SAMSUNG + ' Internet']], [
		            /metasr[\/ ]?([\d\.]+)/i                                            // Sogou Explorer
		            ], [VERSION, [NAME, SOGOU + ' Explorer']], [
		            /(sogou)mo\w+\/([\d\.]+)/i                                          // Sogou Mobile
		            ], [[NAME, SOGOU + ' Mobile'], VERSION], [
		            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
		            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
		            /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i   // QQ/2345
		            ], [NAME, VERSION], [
		            /(lbbrowser|rekonq)/i                                               // LieBao Browser/Rekonq
		            ], [NAME], [
		            /ome\/([\w\.]+) \w* ?(iron) saf/i,                                  // Iron
		            /ome\/([\w\.]+).+qihu (360)[es]e/i                                  // 360
		            ], [VERSION, NAME], [

		            // WebView
		            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
		            ], [[NAME, FACEBOOK], VERSION, [TYPE, INAPP]], [
		            /(Klarna)\/([\w\.]+)/i,                                             // Klarna Shopping Browser for iOS & Android
		            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,                             // Kakao App
		            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,                                  // Naver InApp
		            /(daum)apps[\/ ]([\w\.]+)/i,                                        // Daum App
		            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
		            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
		            /(alipay)client\/([\w\.]+)/i,                                       // Alipay
		            /(twitter)(?:and| f.+e\/([\w\.]+))/i,                               // Twitter
		            /(instagram|snapchat)[\/ ]([-\w\.]+)/i                              // Instagram/Snapchat
		            ], [NAME, VERSION, [TYPE, INAPP]], [
		            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
		            ], [VERSION, [NAME, 'GSA'], [TYPE, INAPP]], [
		            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i                        // TikTok
		            ], [VERSION, [NAME, 'TikTok'], [TYPE, INAPP]], [
		            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
		            ], [NAME, [TYPE, INAPP]], [

		            /(chromium)[\/ ]([-\w\.]+)/i                                        // Chromium
		            ], [NAME, VERSION], [

		            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
		            ], [VERSION, [NAME, CHROME+' Headless']], [

		            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
		            ], [[NAME, CHROME+' WebView'], VERSION], [

		            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
		            ], [VERSION, [NAME, 'Android' + SUFFIX_BROWSER]], [

		            /chrome\/([\w\.]+) mobile/i                                         // Chrome Mobile
		            ], [VERSION, [NAME, PREFIX_MOBILE + 'Chrome']], [

		            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
		            ], [NAME, VERSION], [

		            /version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i                 // Safari Mobile
		            ], [VERSION, [NAME, PREFIX_MOBILE + 'Safari']], [
		            /iphone .*mobile(?:\/\w+ | ?)safari/i
		            ], [[NAME, PREFIX_MOBILE + 'Safari']], [
		            /version\/([\w\.\,]+) .*(safari)/i                                  // Safari
		            ], [VERSION, NAME], [
		            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
		            ], [NAME, [VERSION, '1']], [

		            /(webkit|khtml)\/([\w\.]+)/i
		            ], [NAME, VERSION], [

		            // Gecko based
		            /(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i                        // Firefox Mobile
		            ], [[NAME, PREFIX_MOBILE + FIREFOX], VERSION], [
		            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
		            ], [[NAME, 'Netscape'], VERSION], [
		            /(wolvic|librewolf)\/([\w\.]+)/i                                    // Wolvic/LibreWolf
		            ], [NAME, VERSION], [
		            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
		            ], [VERSION, [NAME, FIREFOX+' Reality']], [
		            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
		            /(swiftfox)/i,                                                      // Swiftfox
		            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
		                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
		            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
		                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
		            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
		            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

		            // Other
		            /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
		                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Obigo/Mosaic/Go/ICE/UP.Browser/Ladybird
		            /\b(links) \(([\w\.]+)/i                                            // Links
		            ], [NAME, [VERSION, /_/g, '.']], [
		            
		            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
		            ], [NAME, [VERSION, /[^\d\.]+./, EMPTY]]
		        ],

		        cpu : [[

		            /\b((amd|x|x86[-_]?|wow|win)64)\b/i                                 // AMD64 (x64)
		            ], [[ARCHITECTURE, 'amd64']], [

		            /(ia32(?=;))/i,                                                     // IA32 (quicktime)
		            /\b((i[346]|x)86)(pc)?\b/i                                          // IA32 (x86)
		            ], [[ARCHITECTURE, 'ia32']], [

		            /\b(aarch64|arm(v?[89]e?l?|_?64))\b/i                               // ARM64
		            ], [[ARCHITECTURE, 'arm64']], [

		            /\b(arm(v[67])?ht?n?[fl]p?)\b/i                                     // ARMHF
		            ], [[ARCHITECTURE, 'armhf']], [

		            // PocketPC mistakenly identified as PowerPC
		            /( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i
		            ], [[ARCHITECTURE, 'arm']], [

		            /((ppc|powerpc)(64)?)( mac|;|\))/i                                  // PowerPC
		            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

		            / sun4\w[;\)]/i                                                     // SPARC
		            ], [[ARCHITECTURE, 'sparc']], [

		            /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i
		                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
		            ], [[ARCHITECTURE, lowerize]]
		        ],

		        device : [[

		            //////////////////////////
		            // MOBILES & TABLETS
		            /////////////////////////

		            // Samsung
		            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
		            /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
		            /samsung[- ]((?!sm-[lr])[-\w]+)/i,
		            /sec-(sgh\w+)/i
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

		            // Apple
		            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i                          // iPod/iPhone
		            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
		            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
		            /applecoremedia\/[\w\.]+ \((ipad)/i,
		            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
		            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
		            /(macintosh);/i
		            ], [MODEL, [VENDOR, APPLE]], [

		            // Sharp
		            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
		            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

		            // Honor
		            /\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i
		            ], [MODEL, [VENDOR, HONOR], [TYPE, TABLET]], [
		            /honor([-\w ]+)[;\)]/i
		            ], [MODEL, [VENDOR, HONOR], [TYPE, MOBILE]], [

		            // Huawei
		            /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i
		            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
		            /(?:huawei)([-\w ]+)[;\)]/i,
		            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
		            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

		            // Xiaomi
		            /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
		            /\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i                                // Mi Pad tablets
		            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

		            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,                  // Xiaomi POCO
		            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
		            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
		            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
		            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,        // Xiaomi Redmi 'numeric' models
		            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i, // Xiaomi Mi
		            / ([\w ]+) miui\/v?\d/i
		            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [

		            // OPPO
		            /; (\w+) bui.+ oppo/i,
		            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
		            ], [MODEL, [VENDOR, OPPO], [TYPE, MOBILE]], [
		            /\b(opd2(\d{3}a?))(?: bui|\))/i
		            ], [MODEL, [VENDOR, strMapper, { 'OnePlus' : ['304', '403', '203'], '*' : OPPO }], [TYPE, TABLET]], [

		            // BLU Vivo Series
		            /(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'BLU'], [TYPE, MOBILE]], [            
		            // Vivo
		            /; vivo (\w+)(?: bui|\))/i,
		            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
		            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

		            // Realme
		            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
		            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

		            // Motorola
		            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
		            /\bmot(?:orola)?[- ](\w*)/i,
		            /((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
		            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

		            // LG
		            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
		            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
		            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
		            /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,
		            /\blg-?([\d\w]+) bui/i
		            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

		            // Lenovo
		            /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
		            /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i
		            ], [MODEL, [VENDOR, LENOVO], [TYPE, TABLET]], [

		            // Nokia
		            /(nokia) (t[12][01])/i
		            ], [VENDOR, MODEL, [TYPE, TABLET]], [
		            /(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,
		            /nokia[-_ ]?(([-\w\. ]*))/i
		            ], [[MODEL, /_/g, ' '], [TYPE, MOBILE], [VENDOR, 'Nokia']], [

		            // Google
		            /(pixel (c|tablet))\b/i                                             // Google Pixel C/Tablet
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
		            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

		            // Sony
		            /droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
		            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
		            /sony tablet [ps]/i,
		            /\b(?:sony)?sgp\w+(?: bui|\))/i
		            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

		            // OnePlus
		            / (kb2005|in20[12]5|be20[12][59])\b/i,
		            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
		            ], [MODEL, [VENDOR, ONEPLUS], [TYPE, MOBILE]], [

		            // Amazon
		            /(alexa)webm/i,
		            /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,                           // Kindle Fire without Silk / Echo Show
		            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
		            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
		            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

		            // BlackBerry
		            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
		            ], [MODEL, VENDOR, [TYPE, TABLET]], [
		            /\b((?:bb[a-f]|st[hv])100-\d)/i,
		            /\(bb10; (\w+)/i                                                    // BlackBerry 10
		            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

		            // Asus
		            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
		            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
		            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
		            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

		            // HTC
		            /(nexus 9)/i                                                        // HTC Nexus 9
		            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
		            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

		            // ZTE
		            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
		            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
		            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

		            // TCL
		            /tcl (xess p17aa)/i,
		            /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i
		            ], [MODEL, [VENDOR, 'TCL'], [TYPE, TABLET]], [
		            /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i
		            ], [MODEL, [VENDOR, 'TCL'], [TYPE, MOBILE]], [

		            // itel
		            /(itel) ((\w+))/i
		            ], [[VENDOR, lowerize], MODEL, [TYPE, strMapper, { 'tablet' : ['p10001l', 'w7001'], '*' : 'mobile' }]], [

		            // Acer
		            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
		            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

		            // Meizu
		            /droid.+; (m[1-5] note) bui/i,
		            /\bmz-([-\w]{2,})/i
		            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [
		                
		            // Ulefone
		            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Ulefone'], [TYPE, MOBILE]], [

		            // Energizer
		            /; (energy ?\w+)(?: bui|\))/i,
		            /; energizer ([\w ]+)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Energizer'], [TYPE, MOBILE]], [

		            // Cat
		            /; cat (b35);/i,
		            /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Cat'], [TYPE, MOBILE]], [

		            // Smartfren
		            /((?:new )?andromax[\w- ]+)(?: bui|\))/i
		            ], [MODEL, [VENDOR, 'Smartfren'], [TYPE, MOBILE]], [

		            // Nothing
		            /droid.+; (a(?:015|06[35]|142p?))/i
		            ], [MODEL, [VENDOR, 'Nothing'], [TYPE, MOBILE]], [

		            // Archos
		            /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
		            /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i
		            ], [MODEL, [VENDOR, 'Archos'], [TYPE, TABLET]], [
		            /archos ([\w ]+)( b|\))/i,
		            /; (ac[3-6]\d\w{2,8})( b|\))/i 
		            ], [MODEL, [VENDOR, 'Archos'], [TYPE, MOBILE]], [

		            // MIXED
		            /(imo) (tab \w+)/i,                                                 // IMO
		            /(infinix) (x1101b?)/i                                              // Infinix XPad
		            ], [VENDOR, MODEL, [TYPE, TABLET]], [

		            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
		                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron/Infinix/Tecno/Micromax/Advan
		            /; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,               // BLU/HMD/IMO/TCL
		            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
		            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
		            /(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,                          // Lenovo
		            /(oppo) ?([\w ]+) bui/i                                             // OPPO
		            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

		            /(kobo)\s(ereader|touch)/i,                                         // Kobo
		            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
		            /(kindle)\/([\w\.]+)/i                                              // Kindle
		            ], [VENDOR, MODEL, [TYPE, TABLET]], [

		            /(surface duo)/i                                                    // Surface Duo
		            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
		            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
		            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
		            /((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i              // Nvidia Tablets
		            ], [MODEL, [VENDOR, NVIDIA], [TYPE, TABLET]], [
		            /(sprint) (\w+)/i                                                   // Sprint Phones
		            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
		            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
		            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
		            /droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i               // Zebra
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
		            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

		            ///////////////////
		            // SMARTTVS
		            ///////////////////

		            /smart-tv.+(samsung)/i                                              // Samsung
		            ], [VENDOR, [TYPE, SMARTTV]], [
		            /hbbtv.+maple;(\d+)/i
		            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
		            /tcast.+(lg)e?. ([-\w]+)/i                                          // LG SmartTV
		            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
		            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
		            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
		            /(apple) ?tv/i                                                      // Apple TV
		            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
		            /crkey.*devicetype\/chromecast/i                                    // Google Chromecast Third Generation
		            ], [[MODEL, CHROMECAST+' Third Generation'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /crkey.*devicetype\/([^/]*)/i                                       // Google Chromecast with specific device type
		            ], [[MODEL, /^/, 'Chromecast '], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /fuchsia.*crkey/i                                                   // Google Chromecast Nest Hub
		            ], [[MODEL, CHROMECAST+' Nest Hub'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /crkey/i                                                            // Google Chromecast, Linux-based or unknown
		            ], [[MODEL, CHROMECAST], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
		            /(portaltv)/i                                                       // Facebook Portal TV
		            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, SMARTTV]], [
		            /droid.+aft(\w+)( bui|\))/i                                         // Fire TV
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
		            /(shield \w+ tv)/i                                                  // Nvidia Shield TV
		            ], [MODEL, [VENDOR, NVIDIA], [TYPE, SMARTTV]], [
		            /\(dtv[\);].+(aquos)/i,
		            /(aquos-tv[\w ]+)\)/i                                               // Sharp
		            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
		            /(bravia[\w ]+)( bui|\))/i                                          // Sony
		            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
		            /(mi(tv|box)-?\w+) bui/i                                            // Xiaomi
		            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
		            /Hbbtv.*(technisat) (.*);/i                                         // TechniSAT
		            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
		            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
		            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i         // HbbTV devices
		            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
		                                                                                // SmartTV from Unidentified Vendors
		            /droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i
		            ], [MODEL, [TYPE, SMARTTV]], [
		            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
		            ], [[TYPE, SMARTTV]], [

		            ///////////////////
		            // CONSOLES
		            ///////////////////

		            /(ouya)/i,                                                          // Ouya
		            /(nintendo) (\w+)/i                                                 // Nintendo
		            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
		            /droid.+; (shield)( bui|\))/i                                       // Nvidia Portable
		            ], [MODEL, [VENDOR, NVIDIA], [TYPE, CONSOLE]], [
		            /(playstation \w+)/i                                                // Playstation
		            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
		            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
		            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

		            ///////////////////
		            // WEARABLES
		            ///////////////////

		            /\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i                       // Samsung Galaxy Watch
		            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, WEARABLE]], [
		            /((pebble))app/i,                                                   // Pebble
		            /(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i        // Asus ZenWatch / LG Watch / Pixel Watch
		            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
		            /(ow(?:19|20)?we?[1-3]{1,3})/i                                      // Oppo Watch
		            ], [MODEL, [VENDOR, OPPO], [TYPE, WEARABLE]], [
		            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i                              // Apple Watch
		            ], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [
		            /(opwwe\d{3})/i                                                     // OnePlus Watch
		            ], [MODEL, [VENDOR, ONEPLUS], [TYPE, WEARABLE]], [
		            /(moto 360)/i                                                       // Motorola 360
		            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, WEARABLE]], [
		            /(smartwatch 3)/i                                                   // Sony SmartWatch
		            ], [MODEL, [VENDOR, SONY], [TYPE, WEARABLE]], [
		            /(g watch r)/i                                                      // LG G Watch R
		            ], [MODEL, [VENDOR, LG], [TYPE, WEARABLE]], [
		            /droid.+; (wt63?0{2,3})\)/i
		            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [

		            ///////////////////
		            // XR
		            ///////////////////

		            /droid.+; (glass) \d/i                                              // Google Glass
		            ], [MODEL, [VENDOR, GOOGLE], [TYPE, XR]], [
		            /(pico) (4|neo3(?: link|pro)?)/i                                    // Pico
		            ], [VENDOR, MODEL, [TYPE, XR]], [
		            /(quest( \d| pro)?s?).+vr/i                                         // Meta Quest
		            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, XR]], [

		            ///////////////////
		            // EMBEDDED
		            ///////////////////

		            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
		            ], [VENDOR, [TYPE, EMBEDDED]], [
		            /(aeobc)\b/i                                                        // Echo Dot
		            ], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [
		            /(homepod).+mac os/i                                                // Apple HomePod
		            ], [MODEL, [VENDOR, APPLE], [TYPE, EMBEDDED]], [
		            /windows iot/i
		            ], [[TYPE, EMBEDDED]], [

		            ////////////////////
		            // MIXED (GENERIC)
		            ///////////////////

		            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i
		            ], [MODEL, [TYPE, strMapper, { 'mobile' : 'Mobile', 'xr' : 'VR', '*' : TABLET }]], [
		            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
		            ], [[TYPE, TABLET]], [
		            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
		            ], [[TYPE, MOBILE]], [
		            /droid .+?; ([\w\. -]+)( bui|\))/i                                  // Generic Android Device
		            ], [MODEL, [VENDOR, 'Generic']]
		        ],

		        engine : [[

		            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
		            ], [VERSION, [NAME, EDGE+'HTML']], [

		            /(arkweb)\/([\w\.]+)/i                                              // ArkWeb
		            ], [NAME, VERSION], [

		            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
		            ], [VERSION, [NAME, 'Blink']], [

		            /(presto)\/([\w\.]+)/i,                                             // Presto
		            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna/Servo
		            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
		            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
		            /(icab)[\/ ]([23]\.[\d\.]+)/i,                                      // iCab

		            /\b(libweb)/i                                                       // LibWeb
		            ], [NAME, VERSION], [
		            /ladybird\//i
		            ], [[NAME, 'LibWeb']], [

		            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
		            ], [VERSION, NAME]
		        ],

		        os : [[

		            // Windows
		            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
		            ], [NAME, VERSION], [
		            /(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i         // Windows Phone
		            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
		            /windows nt 6\.2; (arm)/i,                                          // Windows RT
		            /windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,
		            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
		            ], [[VERSION, strMapper, windowsVersionMap], [NAME, WINDOWS]], [

		            // iOS/macOS
		            /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,             // iOS
		            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
		            /cfnetwork\/.+darwin/i
		            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
		            /(mac os x) ?([\w\. ]*)/i,
		            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
		            ], [[NAME, 'macOS'], [VERSION, /_/g, '.']], [

		            // Google Chromecast
		            /android ([\d\.]+).*crkey/i                                         // Google Chromecast, Android-based
		            ], [VERSION, [NAME, CHROMECAST + ' Android']], [
		            /fuchsia.*crkey\/([\d\.]+)/i                                        // Google Chromecast, Fuchsia-based
		            ], [VERSION, [NAME, CHROMECAST + ' Fuchsia']], [
		            /crkey\/([\d\.]+).*devicetype\/smartspeaker/i                       // Google Chromecast, Linux-based Smart Speaker
		            ], [VERSION, [NAME, CHROMECAST + ' SmartSpeaker']], [
		            /linux.*crkey\/([\d\.]+)/i                                          // Google Chromecast, Legacy Linux-based
		            ], [VERSION, [NAME, CHROMECAST + ' Linux']], [
		            /crkey\/([\d\.]+)/i                                                 // Google Chromecast, unknown
		            ], [VERSION, [NAME, CHROMECAST]], [

		            // Mobile OSes
		            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
		            ], [VERSION, NAME], [                                               
		            /(ubuntu) ([\w\.]+) like android/i                                  // Ubuntu Touch
		            ], [[NAME, /(.+)/, '$1 Touch'], VERSION], [
		                                                                                // Android/Blackberry/WebOS/QNX/Bada/RIM/KaiOS/Maemo/MeeGo/S40/Sailfish OS/OpenHarmony/Tizen
		            /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i
		            ], [NAME, VERSION], [
		            /\(bb(10);/i                                                        // BlackBerry 10
		            ], [VERSION, [NAME, BLACKBERRY]], [
		            /(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i       // Symbian
		            ], [VERSION, [NAME, 'Symbian']], [
		            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
		            ], [VERSION, [NAME, FIREFOX+' OS']], [
		            /web0s;.+rt(tv)/i,
		            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
		            ], [VERSION, [NAME, 'webOS']], [
		            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i                              // watchOS
		            ], [VERSION, [NAME, 'watchOS']], [

		            // Google ChromeOS
		            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i                                  // Chromium OS
		            ], [[NAME, "Chrome OS"], VERSION],[

		            // Smart TVs
		            /panasonic;(viera)/i,                                               // Panasonic Viera
		            /(netrange)mmh/i,                                                   // Netrange
		            /(nettv)\/(\d+\.[\w\.]+)/i,                                         // NetTV

		            // Console
		            /(nintendo|playstation) (\w+)/i,                                    // Nintendo/Playstation
		            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)
		            /(pico) .+os([\w\.]+)/i,                                            // Pico

		            // Other
		            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
		            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
		            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
		            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
		                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
		            /(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,                     // Hurd/Linux
		            /(gnu) ?([\w\.]*)/i,                                                // GNU
		            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
		            /(haiku) (\w+)/i                                                    // Haiku
		            ], [NAME, VERSION], [
		            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
		            ], [[NAME, 'Solaris'], VERSION], [
		            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
		            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
		            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
		            /(unix) ?([\w\.]*)/i                                                // UNIX
		            ], [NAME, VERSION]
		        ]
		    };

		    /////////////////
		    // Factories
		    ////////////////

		    var defaultProps = (function () {
		            var props = { init : {}, isIgnore : {}, isIgnoreRgx : {}, toString : {}};
		            setProps.call(props.init, [
		                [UA_BROWSER, [NAME, VERSION, MAJOR, TYPE]],
		                [UA_CPU, [ARCHITECTURE]],
		                [UA_DEVICE, [TYPE, MODEL, VENDOR]],
		                [UA_ENGINE, [NAME, VERSION]],
		                [UA_OS, [NAME, VERSION]]
		            ]);
		            setProps.call(props.isIgnore, [
		                [UA_BROWSER, [VERSION, MAJOR]],
		                [UA_ENGINE, [VERSION]],
		                [UA_OS, [VERSION]]
		            ]);
		            setProps.call(props.isIgnoreRgx, [
		                [UA_BROWSER, / ?browser$/i],
		                [UA_OS, / ?os$/i]
		            ]);
		            setProps.call(props.toString, [
		                [UA_BROWSER, [NAME, VERSION]],
		                [UA_CPU, [ARCHITECTURE]],
		                [UA_DEVICE, [VENDOR, MODEL]],
		                [UA_ENGINE, [NAME, VERSION]],
		                [UA_OS, [NAME, VERSION]]
		            ]);
		            return props;
		    })();

		    var createIData = function (item, itemType) {

		        var init_props = defaultProps.init[itemType],
		            is_ignoreProps = defaultProps.isIgnore[itemType] || 0,
		            is_ignoreRgx = defaultProps.isIgnoreRgx[itemType] || 0,
		            toString_props = defaultProps.toString[itemType] || 0;

		        function IData () {
		            setProps.call(this, init_props);
		        }

		        IData.prototype.getItem = function () {
		            return item;
		        };

		        IData.prototype.withClientHints = function () {

		            // nodejs / non-client-hints browsers
		            if (!NAVIGATOR_UADATA) {
		                return item
		                        .parseCH()
		                        .get();
		            }

		            // browsers based on chromium 85+
		            return NAVIGATOR_UADATA
		                    .getHighEntropyValues(CH_ALL_VALUES)
		                    .then(function (res) {
		                        return item
		                                .setCH(new UACHData(res, false))
		                                .parseCH()
		                                .get();
		            });
		        };

		        IData.prototype.withFeatureCheck = function () {
		            return item.detectFeature().get();
		        };

		        if (itemType != UA_RESULT) {
		            IData.prototype.is = function (strToCheck) {
		                var is = false;
		                for (var i in this) {
		                    if (this.hasOwnProperty(i) && !has(is_ignoreProps, i) && lowerize(is_ignoreRgx ? strip(is_ignoreRgx, this[i]) : this[i]) == lowerize(is_ignoreRgx ? strip(is_ignoreRgx, strToCheck) : strToCheck)) {
		                        is = true;
		                        if (strToCheck != UNDEF_TYPE) break;
		                    } else if (strToCheck == UNDEF_TYPE && is) {
		                        is = !is;
		                        break;
		                    }
		                }
		                return is;
		            };
		            IData.prototype.toString = function () {
		                var str = EMPTY;
		                for (var i in toString_props) {
		                    if (typeof(this[toString_props[i]]) !== UNDEF_TYPE) {
		                        str += (str ? ' ' : EMPTY) + this[toString_props[i]];
		                    }
		                }
		                return str || UNDEF_TYPE;
		            };
		        }

		        if (!NAVIGATOR_UADATA) {
		            IData.prototype.then = function (cb) { 
		                var that = this;
		                var IDataResolve = function () {
		                    for (var prop in that) {
		                        if (that.hasOwnProperty(prop)) {
		                            this[prop] = that[prop];
		                        }
		                    }
		                };
		                IDataResolve.prototype = {
		                    is : IData.prototype.is,
		                    toString : IData.prototype.toString
		                };
		                var resolveData = new IDataResolve();
		                cb(resolveData);
		                return resolveData;
		            };
		        }

		        return new IData();
		    };

		    /////////////////
		    // Constructor
		    ////////////////

		    function UACHData (uach, isHttpUACH) {
		        uach = uach || {};
		        setProps.call(this, CH_ALL_VALUES);
		        if (isHttpUACH) {
		            setProps.call(this, [
		                [BRANDS, itemListToArray(uach[CH_HEADER])],
		                [FULLVERLIST, itemListToArray(uach[CH_HEADER_FULL_VER_LIST])],
		                [MOBILE, /\?1/.test(uach[CH_HEADER_MOBILE])],
		                [MODEL, stripQuotes(uach[CH_HEADER_MODEL])],
		                [PLATFORM, stripQuotes(uach[CH_HEADER_PLATFORM])],
		                [PLATFORMVER, stripQuotes(uach[CH_HEADER_PLATFORM_VER])],
		                [ARCHITECTURE, stripQuotes(uach[CH_HEADER_ARCH])],
		                [FORMFACTORS, itemListToArray(uach[CH_HEADER_FORM_FACTORS])],
		                [BITNESS, stripQuotes(uach[CH_HEADER_BITNESS])]
		            ]);
		        } else {
		            for (var prop in uach) {
		                if(this.hasOwnProperty(prop) && typeof uach[prop] !== UNDEF_TYPE) this[prop] = uach[prop];
		            }
		        }
		    }

		    function UAItem (itemType, ua, rgxMap, uaCH) {

		        this.get = function (prop) {
		            if (!prop) return this.data;
		            return this.data.hasOwnProperty(prop) ? this.data[prop] : undefined$1;
		        };

		        this.set = function (prop, val) {
		            this.data[prop] = val;
		            return this;
		        };

		        this.setCH = function (ch) {
		            this.uaCH = ch;
		            return this;
		        };

		        this.detectFeature = function () {
		            if (NAVIGATOR && NAVIGATOR.userAgent == this.ua) {
		                switch (this.itemType) {
		                    case UA_BROWSER:
		                        // Brave-specific detection
		                        if (NAVIGATOR.brave && typeof NAVIGATOR.brave.isBrave == FUNC_TYPE) {
		                            this.set(NAME, 'Brave');
		                        }
		                        break;
		                    case UA_DEVICE:
		                        // Chrome-specific detection: check for 'mobile' value of navigator.userAgentData
		                        if (!this.get(TYPE) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[MOBILE]) {
		                            this.set(TYPE, MOBILE);
		                        }
		                        // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
		                        if (this.get(MODEL) == 'Macintosh' && NAVIGATOR && typeof NAVIGATOR.standalone !== UNDEF_TYPE && NAVIGATOR.maxTouchPoints && NAVIGATOR.maxTouchPoints > 2) {
		                            this.set(MODEL, 'iPad')
		                                .set(TYPE, TABLET);
		                        }
		                        break;
		                    case UA_OS:
		                        // Chrome-specific detection: check for 'platform' value of navigator.userAgentData
		                        if (!this.get(NAME) && NAVIGATOR_UADATA && NAVIGATOR_UADATA[PLATFORM]) {
		                            this.set(NAME, NAVIGATOR_UADATA[PLATFORM]);
		                        }
		                        break;
		                    case UA_RESULT:
		                        var data = this.data;
		                        var detect = function (itemType) {
		                            return data[itemType]
		                                    .getItem()
		                                    .detectFeature()
		                                    .get();
		                        };
		                        this.set(UA_BROWSER, detect(UA_BROWSER))
		                            .set(UA_CPU, detect(UA_CPU))
		                            .set(UA_DEVICE, detect(UA_DEVICE))
		                            .set(UA_ENGINE, detect(UA_ENGINE))
		                            .set(UA_OS, detect(UA_OS));
		                }
		            }
		            return this;
		        };

		        this.parseUA = function () {
		            if (this.itemType != UA_RESULT) {
		                rgxMapper.call(this.data, this.ua, this.rgxMap);
		            }
		            if (this.itemType == UA_BROWSER) {
		                this.set(MAJOR, majorize(this.get(VERSION)));
		            }
		            return this;
		        };

		        this.parseCH = function () {
		            var uaCH = this.uaCH,
		                rgxMap = this.rgxMap;
		    
		            switch (this.itemType) {
		                case UA_BROWSER:
		                case UA_ENGINE:
		                    var brands = uaCH[FULLVERLIST] || uaCH[BRANDS], prevName;
		                    if (brands) {
		                        for (var i in brands) {
		                            var brandName = brands[i].brand || brands[i],
		                                brandVersion = brands[i].version;
		                            if (this.itemType == UA_BROWSER && !/not.a.brand/i.test(brandName) && (!prevName || (/chrom/i.test(prevName) && brandName != CHROMIUM))) {
		                                brandName = strMapper(brandName, {
		                                    'Chrome' : 'Google Chrome',
		                                    'Edge' : 'Microsoft Edge',
		                                    'Chrome WebView' : 'Android WebView',
		                                    'Chrome Headless' : 'HeadlessChrome',
		                                    'Huawei Browser' : 'HuaweiBrowser',
		                                    'MIUI Browser' : 'Miui Browser',
		                                    'Opera Mobi' : 'OperaMobile',
		                                    'Yandex' : 'YaBrowser'
		                                });
		                                this.set(NAME, brandName)
		                                    .set(VERSION, brandVersion)
		                                    .set(MAJOR, majorize(brandVersion));
		                                prevName = brandName;
		                            }
		                            if (this.itemType == UA_ENGINE && brandName == CHROMIUM) {
		                                this.set(VERSION, brandVersion);
		                            }
		                        }
		                    }
		                    break;
		                case UA_CPU:
		                    var archName = uaCH[ARCHITECTURE];
		                    if (archName) {
		                        if (archName && uaCH[BITNESS] == '64') archName += '64';
		                        rgxMapper.call(this.data, archName + ';', rgxMap);
		                    }
		                    break;
		                case UA_DEVICE:
		                    if (uaCH[MOBILE]) {
		                        this.set(TYPE, MOBILE);
		                    }
		                    if (uaCH[MODEL]) {
		                        this.set(MODEL, uaCH[MODEL]);
		                        if (!this.get(TYPE) || !this.get(VENDOR)) {
		                            var reParse = {};
		                            rgxMapper.call(reParse, 'droid 9; ' + uaCH[MODEL] + ')', rgxMap);
		                            if (!this.get(TYPE) && !!reParse.type) {
		                                this.set(TYPE, reParse.type);
		                            }
		                            if (!this.get(VENDOR) && !!reParse.vendor) {
		                                this.set(VENDOR, reParse.vendor);
		                            }
		                        }
		                    }
		                    if (uaCH[FORMFACTORS]) {
		                        var ff;
		                        if (typeof uaCH[FORMFACTORS] !== 'string') {
		                            var idx = 0;
		                            while (!ff && idx < uaCH[FORMFACTORS].length) {
		                                ff = strMapper(uaCH[FORMFACTORS][idx++], formFactorsMap);
		                            }
		                        } else {
		                            ff = strMapper(uaCH[FORMFACTORS], formFactorsMap);
		                        }
		                        this.set(TYPE, ff);
		                    }
		                    break;
		                case UA_OS:
		                    var osName = uaCH[PLATFORM];
		                    if(osName) {
		                        var osVersion = uaCH[PLATFORMVER];
		                        if (osName == WINDOWS) osVersion = (parseInt(majorize(osVersion), 10) >= 13 ? '11' : '10');
		                        this.set(NAME, osName)
		                            .set(VERSION, osVersion);
		                    }
		                    // Xbox-Specific Detection
		                    if (this.get(NAME) == WINDOWS && uaCH[MODEL] == 'Xbox') {
		                        this.set(NAME, 'Xbox')
		                            .set(VERSION, undefined$1);
		                    }           
		                    break;
		                case UA_RESULT:
		                    var data = this.data;
		                    var parse = function (itemType) {
		                        return data[itemType]
		                                .getItem()
		                                .setCH(uaCH)
		                                .parseCH()
		                                .get();
		                    };
		                    this.set(UA_BROWSER, parse(UA_BROWSER))
		                        .set(UA_CPU, parse(UA_CPU))
		                        .set(UA_DEVICE, parse(UA_DEVICE))
		                        .set(UA_ENGINE, parse(UA_ENGINE))
		                        .set(UA_OS, parse(UA_OS));
		            }
		            return this;
		        };

		        setProps.call(this, [
		            ['itemType', itemType],
		            ['ua', ua],
		            ['uaCH', uaCH],
		            ['rgxMap', rgxMap],
		            ['data', createIData(this, itemType)]
		        ]);

		        return this;
		    }

		    function UAParser (ua, extensions, headers) {

		        if (typeof ua === OBJ_TYPE) {
		            if (isExtensions(ua, true)) {
		                if (typeof extensions === OBJ_TYPE) {
		                    headers = extensions;               // case UAParser(extensions, headers)           
		                }
		                extensions = ua;                        // case UAParser(extensions)
		            } else {
		                headers = ua;                           // case UAParser(headers)
		                extensions = undefined$1;
		            }
		            ua = undefined$1;
		        } else if (typeof ua === STR_TYPE && !isExtensions(extensions, true)) {
		            headers = extensions;                       // case UAParser(ua, headers)
		            extensions = undefined$1;
		        }

		        // Convert Headers object into a plain object
		        if (headers && typeof headers.append === FUNC_TYPE) {
		            var kv = {};
		            headers.forEach(function (v, k) { kv[k] = v; });
		            headers = kv;
		        }
		        
		        if (!(this instanceof UAParser)) {
		            return new UAParser(ua, extensions, headers).getResult();
		        }

		        var userAgent = typeof ua === STR_TYPE ? ua :                                       // Passed user-agent string
		                                (headers && headers[USER_AGENT] ? headers[USER_AGENT] :     // User-Agent from passed headers
		                                ((NAVIGATOR && NAVIGATOR.userAgent) ? NAVIGATOR.userAgent : // navigator.userAgent
		                                    EMPTY)),                                                // empty string

		            httpUACH = new UACHData(headers, true),
		            regexMap = extensions ? 
		                        extend(defaultRegexes, extensions) : 
		                        defaultRegexes,

		            createItemFunc = function (itemType) {
		                if (itemType == UA_RESULT) {
		                    return function () {
		                        return new UAItem(itemType, userAgent, regexMap, httpUACH)
		                                    .set('ua', userAgent)
		                                    .set(UA_BROWSER, this.getBrowser())
		                                    .set(UA_CPU, this.getCPU())
		                                    .set(UA_DEVICE, this.getDevice())
		                                    .set(UA_ENGINE, this.getEngine())
		                                    .set(UA_OS, this.getOS())
		                                    .get();
		                    };
		                } else {
		                    return function () {
		                        return new UAItem(itemType, userAgent, regexMap[itemType], httpUACH)
		                                    .parseUA()
		                                    .get();
		                    };
		                }
		            };
		            
		        // public methods
		        setProps.call(this, [
		            ['getBrowser', createItemFunc(UA_BROWSER)],
		            ['getCPU', createItemFunc(UA_CPU)],
		            ['getDevice', createItemFunc(UA_DEVICE)],
		            ['getEngine', createItemFunc(UA_ENGINE)],
		            ['getOS', createItemFunc(UA_OS)],
		            ['getResult', createItemFunc(UA_RESULT)],
		            ['getUA', function () { return userAgent; }],
		            ['setUA', function (ua) {
		                if (isString(ua))
		                    userAgent = ua.length > UA_MAX_LENGTH ? trim(ua, UA_MAX_LENGTH) : ua;
		                return this;
		            }]
		        ])
		        .setUA(userAgent);

		        return this;
		    }

		    UAParser.VERSION = LIBVERSION;
		    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR, TYPE]);
		    UAParser.CPU = enumerize([ARCHITECTURE]);
		    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
		    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

		    ///////////
		    // Export
		    //////////

		    // check js environment
		    {
		        // nodejs env
		        if (module.exports) {
		            exports = module.exports = UAParser;
		        }
		        exports.UAParser = UAParser;
		    }

		    // jQuery/Zepto specific (optional)
		    // Note:
		    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
		    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
		    //   and we should catch that.
		    var $ = isWindow && (window.jQuery || window.Zepto);
		    if ($ && !$.ua) {
		        var parser = new UAParser();
		        $.ua = parser.getResult();
		        $.ua.get = function () {
		            return parser.getUA();
		        };
		        $.ua.set = function (ua) {
		            parser.setUA(ua);
		            var result = parser.getResult();
		            for (var prop in result) {
		                $.ua[prop] = result[prop];
		            }
		        };
		    }

		})(typeof window === 'object' ? window : uaParser); 
	} (uaParser$1, uaParser$1.exports));
	return uaParser$1.exports;
}

var uaParserExports = requireUaParser();

const irUserFormPanelCss = () => `.sc-ir-user-form-panel-h{--font-family-sans-serif:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;--font-family-monospace:'Quicksand', Georgia, 'Times New Roman', Times, serif !important}.logins-history-section.sc-ir-user-form-panel{margin-top:1.5rem}.sc-ir-user-form-panel-h h4.sc-ir-user-form-panel{font-family:inherit !important}.logins-history-list.sc-ir-user-form-panel{border-radius:8px;list-style-type:none;padding:0;margin:0;margin-top:1rem}.login-entry.sc-ir-user-form-panel{padding:0.25rem 0rem;border-bottom:1px solid #e4e5ec}.login-entry.sc-ir-user-form-panel:last-child{border:none}.login-meta.sc-ir-user-form-panel{display:flex;gap:0.5rem}.login-datetime.sc-ir-user-form-panel,.login-location.sc-ir-user-form-panel{margin:0;font-size:0.75rem;color:#374151;font-weight:500}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#6b7280;margin:0;word-break:break-word}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;margin-top:0.5rem;line-height:1.4}.login-user-agent.sc-ir-user-form-panel p.sc-ir-user-form-panel{margin:0}.ua-browser.sc-ir-user-form-panel{font-weight:600;color:#1f2937}.ua-os.sc-ir-user-form-panel{color:#374151}.ua-device.sc-ir-user-form-panel{font-style:italic;color:#6b7280}.login-location.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.login-location.sc-ir-user-form-panel span.sc-ir-user-form-panel{display:flex;align-items:center;gap:0.25rem}.login-location.sc-ir-user-form-panel i.sc-ir-user-form-panel{font-size:0.75rem;color:#9ca3af}`;

const sheetCss = () => `.sc-ir-user-form-panel-h{height:100%}.sheet-container.sc-ir-user-form-panel{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-user-form-panel{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-user-form-panel{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-user-form-panel{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-user-form-panel{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-user-form-panel{flex-direction:row;align-items:center}}`;

const IrUserFormPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData");
        this.closeSideBar = createEvent(this, "closeSideBar");
    }
    formId;
    user;
    userTypes = (Map);
    isEdit = false;
    language = 'en';
    property_id;
    haveAdminPrivileges;
    superAdminId = '5';
    userTypeCode;
    allowedUsersTypes = [];
    baseUserTypeCode;
    showFullHistory = false;
    userInfo = {
        type: '',
        id: -1,
        is_active: true,
        sign_ins: null,
        created_on: null,
        mobile: '',
        name: '',
        note: '',
        password: '',
        email: '',
        property_id: null,
        username: null,
        phone_prefix: null,
    };
    showPasswordValidation = false;
    isUsernameTaken;
    isOpen;
    resetData;
    closeSideBar;
    userService = new UserService();
    disableFields = false;
    isPropertyAdmin = false;
    token = new Token();
    mobileMask = {};
    userSchema = libExports.z.object({
        mobile: libExports.z.string().optional(),
        email: libExports.z
            .string()
            .email()
            .refine(async (email) => {
            if (this.user && this.user.email === email) {
                return true; // unchanged email
            }
            const exists = await new UserService().checkUserExistence({
                Email: email,
                UserName: '',
            });
            return !exists;
        }, { message: 'Email already exists.' }),
        password: libExports.z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' }),
        type: libExports.z.union([libExports.z.literal(1), libExports.z.literal(Number(this.superAdminId?.toString() ?? '5')), libExports.z.coerce.string().nonempty().min(2)]),
        username: libExports.z
            .string()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username) {
                return true;
            }
            if (name.length >= 3) {
                const exists = await new UserService().checkUserExistence({
                    UserName: name,
                });
                return !exists;
            }
            return true;
        }, { message: 'Username already exists.' }),
    });
    //make user active by default
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.userInfo = { ...this.user, password: '' };
            // this.disableFields = true;
        }
        this.isPropertyAdmin = this.userTypeCode.toString() === '17';
        if (this.isPropertyAdmin) {
            this.updateUserField('type', '17');
        }
        this.mobileMask = {
            mask: `{${calendar_data.country.phone_prefix}} 000000000000`,
            lazy: false,
            autofix: true,
            placeholderChar: '\u200B',
        };
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async createOrUpdateUser() {
        try {
            const resolvedPassword = this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password;
            const normalizedMobile = this.userInfo.mobile?.split(' ')?.join('')?.replace(calendar_data.country.phone_prefix, '') ?? '';
            const userPayload = {
                ...this.userInfo,
                base_user_type_code: this.baseUserTypeCode,
                property_id: this.property_id,
                password: resolvedPassword,
                type: Number(this.userInfo.type),
                mobile: normalizedMobile,
            };
            console.log('toValidateUserInfo', userPayload);
            await this.userSchema.parseAsync(userPayload);
            await this.userService.handleExposedUser(userPayload);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h("form", { key: '064b47bb0ae1836cc009122df063a3f16c092034', id: this.formId,
            // class="sheet-container"
            onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, h("div", { key: 'c62ecc8da367753a364e3c94f4db8458ae9bfe48', class: "d-flex flex-column", style: { gap: '1rem' } }, h("ir-validator", { key: 'daac6ffc2b0ff7fef6fec0586f62a12c86bb8f59', asyncValidation: true, showErrorMessage: true, value: this.userInfo.email, schema: this.userSchema.shape.email }, h("ir-input", { key: '73792e2637bc368bd02a1f8e74e3600095912143', maxlength: 40, "onText-change": e => this.updateUserField('email', e.detail), value: this.userInfo.email, label: locales.entries.Lcz_Email, "data-testid": "email", id: "user-email" })), h("ir-validator", { key: '3519980565320cc19b4a26c0956da6da5e5f1461', showErrorMessage: true, value: this.userInfo.mobile, schema: this.userSchema.shape.mobile }, h("ir-input", { key: '6d7fc786c98b204ea7c649891298c762fd366624', "onText-change": e => this.updateUserField('mobile', e.detail), value: this.userInfo.mobile, label: locales.entries.Lcz_Mobile, "data-testid": "mobile", mask: this.mobileMask })), (this.user && this.user?.type?.toString() === this.superAdminId) || this.isPropertyAdmin ? null : (h("ir-validator", { value: this.userInfo.type?.toString(), schema: this.userSchema.shape.type }, h("wa-select", { "data-testId": "user_type",
            // error={this.errors?.type && !this.userInfo.type}
            disabled: this.disableFields, label: "Role", value: this.userInfo.type?.toString(), size: "s", defaultValue: this.userInfo.type?.toString(), placeholder: locales.entries.Lcz_Select, onchange: e => this.updateUserField('type', e.target.value) }, this.allowedUsersTypes.map(t => (h("wa-option", { value: t.code }, t.value)))))), this.user?.type?.toString() !== '5' && (h(Fragment, { key: '554a4e191cda6f046b72ed89c0932a5e18cbba6f' }, h("input", { key: '9918ddd1c73d935679957745cefeeed377011807', type: "text", name: "dummy", style: { display: 'none' } }), h("ir-validator", { key: 'b912dfe53917ec9211f260966599577b747b3fd3', asyncValidation: true, schema: this.userSchema.shape.username, value: this.userInfo.username }, h("ir-input", { key: '8652f01070e87d93b50128dead607fed9ddf66f8', "onText-change": e => this.updateUserField('username', e.detail), autocomplete: "off", maxlength: 40, value: this.userInfo.username, disabled: this.disableFields, label: locales.entries.Lcz_Username })))), !this.user ? (h(Fragment, null, h("input", { type: "text", name: "dummy", style: { display: 'none' } }), h("ir-validator", { value: this.userInfo.password, schema: this.userSchema.shape.password }, h("ir-input", { "data-testId": "password", label: locales.entries.Lcz_Password, value: this.userInfo.password, autocomplete: "off", passwordToggle: true, type: "password", id: "password", maxlength: 16, onInputFocus: () => (this.showPasswordValidation = true), "onInput-blur": () => {
                // if (this.user) this.showPasswordValidation = false;
            }, "onText-change": e => this.updateUserField('password', e.detail) })), this.showPasswordValidation && h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (
        // this.haveAdminPrivileges &&
        // this.user.type.toString() !== this.superAdminId &&
        // (this.user?.type.toString() === '17' && this.userTypeCode?.toString() === '17' ? null : (
        h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, h("h4", { class: "m-0 p-0 logins-history-title" }, locales.entries.Lcz_Password), h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: locales.entries.Lcz_ChangePassword, btn_color: "link" }))
        // ))
        )), this.user?.sign_ins?.length > 0 && (h("section", { key: '362cf3e0e62155ec4eb85286c5815a1b577b6b10', class: "logins-history-section mt-2" }, h("div", { key: '5a523bdf3e829865408eca624c523f21f70ae033', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, h("h4", { key: '3d5f52fe1a95f8d74bb968b1c8a8aee8be0b4f86', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (h("ir-button", { key: '44d8e5148d0efe1ae9b62d047b5a6bb3b6af5b94', btn_styles: 'pr-0', text: !this.showFullHistory ? locales.entries.Lcz_ViewAll : locales.entries.Lcz_ViewLess, btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), h("ul", { key: '178ed5b1f58cbcb28e9d207266e8c5227b902b64', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            const ua = uaParserExports.UAParser(s.user_agent);
            return (h("li", { class: "login-entry", key: s.date + '_' + i }, h("div", { class: "login-meta" }, h("p", { class: "login-datetime" }, hooks(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", _formatTime(s.hour?.toString(), s.minute?.toString()), " |"), h("p", { class: "login-location" }, h("span", { class: "login-ip" }, locales.entries.Lcz_IP, ": ", s.ip), ' ', "\u00A0|\u00A0", h("span", { class: "login-country" }, locales.entries.Lcz_Location, ": ", s.country), ' ', "\u00A0|\u00A0", h("span", { class: "login-os" }, "OS: ", ua.os.name ?? 'N/A', " ", ua.os.version)))));
        })))), h("ir-sidebar", { key: '8e6b89c2caf467e2763bce5dfa97531aa012cff9', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (h("ir-reset-password", { key: '86d4b77c61b7dc135aaec209b0bcb92c15784399', ticket: this.token.getToken(), skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))));
    }
};
IrUserFormPanel.style = irUserFormPanelCss() + sheetCss();

export { IrResetPassword as ir_reset_password, IrUserFormPanel as ir_user_form_panel };
