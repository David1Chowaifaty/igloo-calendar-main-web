import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment, g as getElement } from './index-0a4a209a.js';
import { v as v4 } from './v4-964634d6.js';
import { i as icons } from './icons-c78fdb83.js';
import { a as axios } from './axios-aa1335b8.js';
import { i as interceptor_requests } from './ir-interceptor.store-e96f5930.js';
import { I as InterceptorError } from './InterceptorError-ebd732df.js';
import { T as Token } from './Token-6c389e24.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-53ec3957.js';
import { R as RoomService } from './room.service-b78587f7.js';
import { P as PropertyService } from './property.service-37a9aad7.js';
import { f as formatAmount } from './utils-bf32d8ec.js';
import { c as calendar_data } from './calendar-data-a6093df2.js';
import { S as SystemService } from './system.service-35fa8e7e.js';
import { z } from './index-6ecc32cd.js';
import './index-c1c77241.js';

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickHandler = createEvent(this, "clickHandler", 7);
        /**
         * The color theme of the button.
         */
        this.btn_color = 'primary';
        /**
         * The size of the button.
         */
        this.size = 'md';
        /**
         * The size of the text inside the button.
         */
        this.textSize = 'md';
        /**
         * Whether the button should expand to the full width of its container.
         */
        this.btn_block = true;
        /**
         * Disables the button when set to true.
         */
        this.btn_disabled = false;
        /**
         * The button type attribute (`button`, `submit`, or `reset`).
         */
        this.btn_type = 'button';
        /**
         * Displays a loading indicator when true and disables the button.
         */
        this.isLoading = false;
        /**
         * A unique identifier for the button instance.
         */
        this.btn_id = v4();
        /**
         * Visual variant of the button: either standard (`default`) or icon-only (`icon`).
         */
        this.variant = 'default';
        /**
         * If true, applies a visible background when hovered.
         */
        this.visibleBackgroundOnHover = false;
        /**
         * Position of the icon relative to the button text.
         */
        this.iconPosition = 'left';
        /**
         * If true, renders the text property as raw HTML inside the button.
         */
        this.renderContentAsHtml = false;
    }
    handleButtonAnimation(e) {
        if (!this.buttonEl || e.detail !== this.btn_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    /**
     * Triggers a bounce animation on the button.
     */
    async bounce() {
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    render() {
        const disabled = this.btn_disabled || this.isLoading;
        if (this.variant === 'icon') {
            return (h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: disabled }, this.isLoading ? h("span", { class: "icon-loader" }) : h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: disabled }, this.icon_name && this.iconPosition === 'left' && h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && h("ir-icons", { style: this.icon_style, name: this.icon_name })));
    }
};
IrButton.style = IrButtonStyle0;

const irCheckboxCss = ".sc-ir-checkbox-h{display:flex;align-items:center;width:fit-content}button.sc-ir-checkbox{all:unset}.CheckboxRoot.sc-ir-checkbox{background-color:white;width:20px;height:20px;border-radius:4px;display:flex;align-items:center;justify-content:center;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.CheckboxRoot.sc-ir-checkbox:disabled{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3);pointer-events:none}.CheckboxRoot[data-state='checked'].sc-ir-checkbox{background-color:#1e9ff2;color:white;border-color:#1e9ff2}input[type='checkbox'].sc-ir-checkbox{background-color:initial;cursor:default;appearance:auto;box-sizing:border-box;margin:3px 3px 3px 4px;padding:initial;border:initial}.checkbox.sc-ir-checkbox{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0px;width:20px;height:20px}";
const IrCheckboxStyle0 = irCheckboxCss;

const IrCheckbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkChange = createEvent(this, "checkChange", 7);
        /**
         * Whether the checkbox is checked.
         */
        this.checked = false;
        /**
         * The unique ID of the checkbox element.
         */
        this.checkboxId = v4();
        /**
         * Internal state tracking whether the checkbox is currently checked.
         */
        this.currentChecked = false;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    /**
     * Watcher for the `checked` property. Syncs internal state with external prop changes.
     */
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    /**
     * Handles user interaction with the checkbox and updates its state.
     */
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h(Host, { key: 'c32addff4607d9f82cccc95670835ace10575615' }, h("button", { key: 'b49ff5d9deb72c8e184eee50dba2bf77f4178094', disabled: this.disabled, name: this.name, onClick: this.handleCheckChange.bind(this), id: this.checkboxId, "data-state": this.currentChecked || this.indeterminate ? 'checked' : 'unchecked', value: 'on', ref: ref => (this.checkboxRef = ref), type: "button", role: "checkbox", class: "CheckboxRoot" }, this.currentChecked && (h("svg", { key: '69556231ab54d4e3f88da0da2296a138415cd036', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '1e64e1f34e76c3bf014e46f41c5e4b9e16e0098f', fill: "currentColor", d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))), this.indeterminate && (h("svg", { key: 'b5a3ef810aeeb0eb9aef92e120d6c50fdce5e1d0', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'adab88e37692d2d8198416e99c8ce295c137ec7e', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" })))), h("input", { key: '54fa1ac914ca5f49eecb596ce4934b5373565337', type: "checkbox", indeterminate: this.indeterminate, "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.currentChecked, class: "checkbox" }), this.label && (h("label", { key: 'a0de47033096bb54106ea19ed30c27f1d2b80976', htmlFor: this.checkboxId, class: this.labelClass }, this.label))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrCheckbox.style = IrCheckboxStyle0;

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const IrCommon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.extraResources = '';
        this.resources = onlineResources;
    }
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return (h(Host, { key: '6fc88c7331ad4efcf233b133c074bc3e43ae1982' }, h("slot", { key: '297907a8c4100df70cc84b36a2aa780e7de3020d' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irIconsCss = ".sc-ir-icons-h{display:block;box-sizing:border-box;margin:0;padding:0}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}";
const IrIconsStyle0 = irIconsCss;

const IrIcons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = IrIconsStyle0;

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        /**
         * List of endpoint paths that should trigger loader logic and OTP handling.
         */
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
        /**
         * List of endpoints for which to suppress toast messages.
         */
        this.suppressToastEndpoints = [];
        /**
         * Indicates whether the loader is visible.
         */
        this.isShown = false;
        /**
         * Global loading indicator toggle.
         */
        this.isLoading = false;
        /**
         * Indicates if the intercepted request involves unassigned units.
         */
        this.isUnassignedUnit = false;
        /**
         * Count of `/Get_Exposed_Calendar` calls in progress.
         */
        this.endpointsCount = 0;
        /**
         * Identifier of the endpoint that manually disabled page loader.
         */
        this.isPageLoadingStopped = null;
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStopped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    /**
     * Sets up Axios request and response interceptors.
     */
    setupAxiosInterceptors() {
        axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    /**
     * Removes query params from URL for consistent endpoint matching.
     */
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    /**
     * Returns true if the given endpoint is listed as "handled".
     */
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    /**
     * Handles outbound Axios requests.
     * - Triggers global loader for certain endpoints
     * - Tracks `/Get_Exposed_Calendar` calls separately
     */
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        interceptor_requests[extractedUrl] = 'pending';
        config.params = config.params || {};
        // if (this.ticket) {
        //   config.params.Ticket = this.ticket;
        // }
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStopped !== extractedUrl) {
            if (extractedUrl !== '/Get_Exposed_Calendar') {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl === '/Get_Exposed_Calendar') {
            this.endpointsCount = this.endpointsCount + 1;
        }
        return config;
    }
    /**
     * Handles inbound Axios responses:
     * - Resets loader
     * - Handles OTP flows and exception messages
     */
    async handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        interceptor_requests[extractedUrl] = 'done';
        if (extractedUrl === '/Validate_Exposed_OTP') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            return this.handleOtpResponse({ response, extractedUrl });
        }
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleResponseExceptions({ response, extractedUrl });
        }
        return response;
    }
    /**
     * Handles and throws known API exception messages.
     */
    handleResponseExceptions({ response, extractedUrl }) {
        this.handleError(response.data.ExceptionMsg, extractedUrl, response.data.ExceptionCode);
        throw new InterceptorError(response.data.ExceptionMsg, response.data.ExceptionCode);
    }
    /**
     * Handles OTP-required API responses:
     * - Shows OTP modal
     * - Stores request context
     * - Defers resolution to OTP modal
     */
    handleOtpResponse({ extractedUrl, response }) {
        this.showModal = true;
        this.email = response.data.ExceptionMsg;
        const name = extractedUrl.slice(1);
        this.baseOTPUrl = name;
        if (name === 'Check_OTP_Necessity') {
            let methodName;
            try {
                const body = typeof response.config.data === 'string' ? JSON.parse(response.config.data) : response.config.data;
                methodName = body.METHOD_NAME;
            }
            catch (e) {
                console.error('Failed to parse request body for METHOD_NAME', e);
                methodName = name; // fallback
            }
            this.requestUrl = methodName;
        }
        else {
            this.requestUrl = name;
        }
        this.pendingConfig = response.config;
        this.response = response;
        return new Promise((resolve, reject) => {
            this.pendingResolve = resolve;
            this.pendingReject = reject;
            setTimeout(() => {
                var _a;
                (_a = this.otpModal) === null || _a === void 0 ? void 0 : _a.openModal();
            }, 10);
        });
    }
    /**
     * Displays error toasts unless the endpoint is configured to suppress them.
     */
    handleError(error, url, code) {
        const shouldSuppressToast = this.suppressToastEndpoints.includes(url);
        if (!shouldSuppressToast || (shouldSuppressToast && !code)) {
            this.toast.emit({
                type: 'error',
                title: error,
                description: '',
                position: 'top-right',
            });
        }
        return Promise.reject(error);
    }
    /**
     * Handles the OTP modal completion.
     * Retries the request or cancels based on user action.
     */
    async handleOtpFinished(ev) {
        if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
            return;
        }
        const { otp, type } = ev.detail;
        if (type === 'cancel') {
            const cancelResp = {
                config: this.pendingConfig,
                data: { cancelled: true, baseOTPUrl: this.baseOTPUrl },
                status: 0,
                statusText: 'OTP Cancelled',
                headers: {},
                request: {},
            };
            this.pendingResolve(cancelResp);
        }
        else if (type === 'success') {
            if (!otp) {
                this.pendingReject(new Error('OTP cancelled by user'));
            }
            else if (this.baseOTPUrl === 'Check_OTP_Necessity') {
                // don't resend, just resolve with the original response
                this.pendingResolve(this.response);
            }
            else {
                try {
                    const retryConfig = Object.assign(Object.assign({}, this.pendingConfig), { data: typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {} });
                    const resp = await axios.request(retryConfig);
                    this.pendingResolve(resp);
                }
                catch (err) {
                    this.pendingReject(err);
                }
            }
        }
        // common clean-up
        this.pendingConfig = undefined;
        this.pendingResolve = undefined;
        this.pendingReject = undefined;
        this.showModal = false;
        this.baseOTPUrl = null;
    }
    render() {
        return (h(Host, { key: '0d26f3a423be1b53dbbd1f247a994cb3da14fc7f' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: 'd8acf1ed86ff5378c9df9cdcaad2c5a2adccc1f7', class: "loadingScreenContainer" }, h("div", { key: 'a4f32f33efb9af5dbb9c63dfd7488976aa74155e', class: "loaderContainer" }, h("span", { key: 'c910686008bfc631d73b8b24da27dd8bedc488d4', class: "page-loader" })))), this.showModal && (h("ir-otp-modal", { key: 'b64f60a84971128c1aededb28aa54a68236a9d26', email: this.email, baseOTPUrl: this.baseOTPUrl, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
    }
};
IrInterceptor.style = IrInterceptorStyle0;

const irLoadingScreenCss = ".sc-ir-loading-screen-h{display:fixed;height:100vh;width:100vw;z-index:1000;top:0;left:0;display:flex;align-items:center;justify-content:center;background:white}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.message = '';
    }
    render() {
        return (h(Host, { key: 'f1c983e735cae3ff1b4325dee8783e1deb5a49ac' }, h("span", { key: '1522d3c81575345d858a917ff5cd1553cbabe4ea', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irMonthlyBookingsReportCss = ".sc-ir-monthly-bookings-report-h{display:block}";
const IrMonthlyBookingsReportStyle0 = irMonthlyBookingsReportCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrMonthlyBookingsReport = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isPageLoading = true;
        this.isLoading = null;
        this.reports = [];
        this.tokenService = new Token();
        this.roomService = new RoomService();
        this.propertyService = new PropertyService();
    }
    componentWillLoad() {
        this.baseFilters = {
            date: {
                description: hooks().format('MMMM YYYY'),
                firstOfMonth: hooks().startOf('month').format('YYYY-MM-DD'),
                lastOfMonth: hooks().endOf('month').format('YYYY-MM-DD'),
            },
            include_previous_year: false,
        };
        this.filters = this.baseFilters;
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleApplyFiltersChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = e.detail;
        this.getReports();
    }
    async init() {
        try {
            let propertyId = this.propertyid;
            if (!this.propertyid && !this.p) {
                throw new Error('Property ID or username is required');
            }
            // let roomResp = null;
            if (!propertyId) {
                console.log(propertyId);
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                });
                // roomResp = propertyData;
                propertyId = propertyData.My_Result.id;
            }
            this.property_id = propertyId;
            const requests = [this.roomService.fetchLanguage(this.language), this.getReports()];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    async getReports(isExportToExcel = false) {
        try {
            const getReportObj = (report) => {
                return {
                    day: report.Date,
                    units_booked: report.Units_booked,
                    occupancy_percent: report.Occupancy,
                    adr: report.ADR,
                    rooms_revenue: report.Rooms_Revenue,
                    total_guests: report === null || report === void 0 ? void 0 : report.Total_Guests,
                };
            };
            this.isLoading = isExportToExcel ? 'export' : 'filter';
            const { date, include_previous_year } = this.filters;
            const requests = [
                this.propertyService.getMonthlyStats({
                    from_date: date.firstOfMonth,
                    to_date: date.lastOfMonth,
                    property_id: this.property_id,
                    is_export_to_excel: isExportToExcel,
                }),
            ];
            if (include_previous_year) {
                requests.push(this.propertyService.getMonthlyStats({
                    from_date: hooks(date.firstOfMonth, 'YYYY-MM-DD').add(-1, 'year').format('YYYY-MM-DD'),
                    to_date: hooks(date.lastOfMonth, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'),
                    property_id: this.property_id,
                }));
            }
            const results = await Promise.all(requests);
            const currentReports = results[0];
            let enrichedReports = [];
            const { DailyStats } = currentReports, rest = __rest(currentReports, ["DailyStats"]);
            this.stats = Object.assign({}, rest);
            if (include_previous_year && results[isExportToExcel ? 1 : 2]) {
                const previousYearReports = results[isExportToExcel ? 1 : 2];
                let formattedReports = previousYearReports.DailyStats.map(getReportObj);
                enrichedReports = DailyStats.map(getReportObj).map(current => {
                    const previous = formattedReports.find(prev => prev.day === hooks(current.day, 'YYYY-MM-DD').add(-1, 'years').format('YYYY-MM-DD'));
                    return Object.assign(Object.assign({}, current), { last_year: previous !== null && previous !== void 0 ? previous : null });
                });
            }
            else {
                enrichedReports = DailyStats.map(getReportObj);
            }
            this.reports = [...enrichedReports];
        }
        catch (e) {
            console.log(e);
        }
        finally {
            this.isLoading = null;
        }
    }
    StatsCard({ icon, subtitle, title, value }) {
        if (!value) {
            return null;
        }
        return (h("div", { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("p", { class: "m-0 p-0" }, title), h("ir-icons", { name: icon })), h("h4", { class: "m-0 p-0" }, h("b", { class: "m-0 p-0" }, value)), subtitle && h("p", { class: "m-0 p-0 small text-muted" }, subtitle)));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Daily Occupancy"), h("ir-button", { size: "sm", btn_color: "outline", isLoading: this.isLoading === 'export', text: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Export, onClickHandler: async (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                await this.getReports(true);
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } })), h("section", null, h("div", { class: "d-flex flex-column flex-md-row w-100", style: { gap: '1rem', alignItems: 'stretch' } }, this.StatsCard({
            icon: ((_b = this.stats) === null || _b === void 0 ? void 0 : _b.Occupancy_Difference_From_Previous_Month) < 0 ? 'arrow-trend-down' : 'arrow-trend-up',
            title: 'Average Occupancy',
            value: this.stats.AverageOccupancy ? ((_c = this.stats) === null || _c === void 0 ? void 0 : _c.AverageOccupancy.toFixed(2)) + '%' : null,
            subtitle: `${((_d = this.stats) === null || _d === void 0 ? void 0 : _d.Occupancy_Difference_From_Previous_Month) < 0 ? '' : '+'}${(_e = this.stats) === null || _e === void 0 ? void 0 : _e.Occupancy_Difference_From_Previous_Month.toFixed(2)}% from last month`,
        }), this.StatsCard({
            icon: 'hotel',
            title: 'Total Units',
            value: ((_f = this.stats) === null || _f === void 0 ? void 0 : _f.TotalUnitsBooked) ? (_g = this.stats) === null || _g === void 0 ? void 0 : _g.TotalUnitsBooked.toString() : null,
            subtitle: 'Booked',
        }), this.StatsCard({
            icon: 'calendar',
            title: 'Peak Days',
            value: ((_h = this.stats) === null || _h === void 0 ? void 0 : _h.PeakDays.length) === 0 ? null : (_k = (_j = this.stats) === null || _j === void 0 ? void 0 : _j.PeakDays) === null || _k === void 0 ? void 0 : _k.map(pd => hooks(pd.Date, 'YYYY-MM-DD').format('D').concat('th')).join(' - '),
            subtitle: `${Math.max(...(((_l = this.stats.PeakDays) === null || _l === void 0 ? void 0 : _l.map(pd => pd.OccupancyPercent)) || []))}% occupancy`,
        }), this.StatsCard({
            icon: 'user_group',
            title: 'Total Guests',
            value: (_o = (_m = this.reports) === null || _m === void 0 ? void 0 : _m.reduce((prev, curr) => prev + curr.total_guests, 0)) === null || _o === void 0 ? void 0 : _o.toString(),
            subtitle: `Stayed`,
        })), h("div", { class: "d-flex flex-column flex-lg-row mt-1 ", style: { gap: '1rem' } }, h("ir-monthly-bookings-report-filter", { isLoading: this.isLoading === 'filter', class: "filters-card", baseFilters: this.baseFilters }), h("ir-monthly-bookings-report-table", { reports: this.reports }))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrMonthlyBookingsReport.style = IrMonthlyBookingsReportStyle0;

const irMonthlyBookingsReportFilterCss = ".sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}";
const IrMonthlyBookingsReportFilterStyle0 = irMonthlyBookingsReportFilterCss;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.collapsed = false;
        this.dates = [];
    }
    componentWillLoad() {
        this.dates = this.generateMonths();
        this.filters = this.baseFilters;
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = this.baseFilters;
        this.applyFilters.emit(this.filters);
    }
    generateMonths() {
        const firstOfThisMonth = hooks().startOf('month');
        const startDate = hooks().subtract(1, 'year').startOf('month');
        const dates = [];
        const format = 'YYYY-MM-DD';
        let cursor = startDate.clone();
        while (cursor.format(format) !== firstOfThisMonth.format(format)) {
            dates.push({
                description: cursor.format('MMMM YYYY'),
                firstOfMonth: cursor.format('YYYY-MM-DD'),
                lastOfMonth: cursor.clone().endOf('month').format('YYYY-MM-DD'),
            });
            cursor.add(1, 'month');
        }
        dates.push({
            description: firstOfThisMonth.format('MMMM YYYY'),
            firstOfMonth: firstOfThisMonth.format('YYYY-MM-DD'),
            lastOfMonth: firstOfThisMonth.clone().endOf('month').format('YYYY-MM-DD'),
        });
        return dates.reverse();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h("div", { key: '75e88d73572b746557ef99bb5ff5ee47510e19af', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '918cd3ba93aeae0aef840f37b80ecc2b8806d363', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '095675eca080a0891f682c0283e29e458cc3aa03', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'b212fc3f6c42da29152bc38fab6a6c84d1a0cd58', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '0a0943d7db90054b26380171c07a47bfc2b97c96', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '9f4ad6678cccbb700c0c4759e248fff5f187baf3', class: "m-0 p-0 flex-grow-1" }, ((_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), h("div", { key: '2d0f401ac23a11490abb0523ba2cb7730309f03f', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: '8197dd02d8e29a223285d5d4c667c99c5e88af7f', class: "pt-1 filter-group" }, h("label", { key: 'c6859da1fc928f6cf89610b30b3e0a01fa42ace0', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: 'bd6b2e15cff530d7db57d70449d92e6d72045687', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, LabelAvailable: false, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: '520878894919c508565c366d0045b01f3272f67c', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '25ca20323e94fd5270b0ccf4173d7ffb1f83d6ae', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'a9c4ae5db7da1f70c73cdf1bb12dea3ab059c5ef', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '4d282935bb0aca0affd0c6740dc823c8fb11713c', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '577796a45fe75e7e079efde2a0c1a349859204cf', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'b8cc21d775818ff7f19d8f61414532000ff1a963', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '19a2f0917db0e727629a8be5f037e9325f44c941', class: 'card p-1  table-container table-responsive' }, h("table", { key: '2ca5b2ac503e9d9475a605cccfaffbe8c2a09b43', class: "table" }, h("thead", { key: '1be7a210db90cbad9448451843b5851e71308ab6', class: "table-header" }, h("tr", { key: 'c1a686f51d5b2398b69db12dcd4832cdc702e241' }, h("th", { key: '3c554d9e1cf50a13f0f3b4127da53ee91dc98295', class: "text-center" }, "Date"), h("th", { key: 'c3640a8c3647c69d714bf535f12a7845f799b339', class: "text-center" }, "Units booked"), h("th", { key: '600f4314898a36c0baf30033ef59274dc84872d9', class: "text-center" }, "Total guests"), h("th", { key: '1b44da257d1db52d96276d862971c05c1fa61733', class: "text-right" }, h("ir-tooltip", { key: '80bd0e979cf34bf95bfb8efc15649495841dc1d3', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'c618d47c494a2449957dc8b08c47a39c0a5e6f1c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '848415db4bcd5871574a59af4a7cab4c08a93e2b', class: "text-right" }, "Rooms revenue"), h("th", { key: '9d6a2a04e07a41d9b7f1d57b3687103680265701', class: "" }, "Occupancy"))), h("tbody", { key: '85dea415bf253fdc09b94f9b456c3b65aed635c9' }, this.reports.length === 0 && (h("tr", { key: 'f89129e4878174d7d523e8bf24077b9333ac7d42' }, h("td", { key: '8e53c3c5bc20c900a4b50172fb73c58cee5d093c', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '41e928364b871c37518329ac17efeeb4e871767c' }, h("tr", { key: '7040af861c965e8198502d70bb11d8d6ae5f00e8' }, h("td", { key: 'ccb1ce10ed8d502f77113fdfe4b8b58ecf88a0d5', colSpan: 5 }), h("td", { key: 'b92c6872b0d2f136f39375c1b5bc7dc718498056', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '14dbb34aaa33a5198b831d025bf7c27ba6f288c2', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '6682ec7594efed2a85db2323508b9a9c546d03c0', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6b8ed88391d6fcd2f71d1108ccb519806c32a756', class: "legend bg-primary" }), h("p", { key: '30c515d9e5cb15f008e4f6377e5be92dc413de4e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'cf884301783d66b85591bcc86cea2d78bd6db25f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'fd170a6a9b0629b6ac1bbb7fba9f62496653594b', class: "legend secondary" }), h("p", { key: 'a984872ff233c1b8a3eafdd85eef739edfa32ad0', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

const irOtpCss = ".otp-input-wrapper.sc-ir-otp{display:flex;gap:0.5rem;justify-content:space-evenly}.otp-digit.sc-ir-otp{--otp-size:3rem;width:var(--otp-size) !important;height:var(--otp-size) !important;padding:0;font-size:24px;font-weight:500;text-align:center;background-color:#fff;padding:0 !important}.otp-digit.sc-ir-otp:disabled{background-color:#e9ecef;cursor:not-allowed}input[type='number'].sc-ir-otp::-webkit-inner-spin-button,input[type='number'].sc-ir-otp::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number'].sc-ir-otp{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit.sc-ir-otp{width:35px;height:45px;font-size:20px}.otp-input-wrapper.sc-ir-otp{gap:6px}}@media (max-width: 360px){.otp-digit.sc-ir-otp{width:30px;height:40px;font-size:18px}.otp-input-wrapper.sc-ir-otp{gap:4px}}";
const IrOtpStyle0 = irOtpCss;

const IrOtp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpChange = createEvent(this, "otpChange", 7);
        this.otpComplete = createEvent(this, "otpComplete", 7);
        /**
         * The length of the OTP code
         */
        this.length = 6;
        /**
         * Whether the input is disabled
         */
        this.disabled = false;
        /**
         * Placeholder character to display
         */
        this.placeholder = '';
        /**
         * Input type - can be 'text', 'password', 'number', or 'tel'
         */
        this.type = 'number';
        /**
         * Auto focus on the first input when component loads
         */
        this.autoFocus = true;
        /**
         * Whether to mask the input (show dots instead of text)
         */
        this.secure = false;
        /**
         * Allow only numbers (0-9) as input
         */
        this.numbersOnly = false;
        /**
         * Current OTP value as an array of characters
         */
        this.otpValues = [];
        /**
         * Reference to input elements
         */
        this.inputRefs = [];
        /**
         * Update the current OTP value at the specified index
         */
        this.handleInput = (event, index) => {
            const input = event.target;
            let value = input.value;
            // For number input type, restrict to digits only
            if (this.numbersOnly) {
                value = value.replace(/[^0-9]/g, '');
            }
            // Take only the last character if someone enters multiple
            if (value.length > 1) {
                value = value.slice(-1);
                input.value = value;
            }
            this.otpValues[index] = value;
            this.emitChanges();
            // Move to next input if this one is filled
            if (value && index < this.length - 1) {
                this.inputRefs[index + 1].focus();
            }
        };
        /**
         * Handle keyboard navigation
         */
        this.handleKeyDown = (event, index) => {
            switch (event.key) {
                case 'Backspace':
                    if (!this.otpValues[index] && index > 0) {
                        // If current field is empty and backspace is pressed, go to previous field
                        this.inputRefs[index - 1].focus();
                        // Prevent default to avoid browser navigation
                        event.preventDefault();
                    }
                    break;
                case 'Delete':
                    // Clear current input on delete
                    this.otpValues[index] = '';
                    this.emitChanges();
                    break;
                case 'ArrowLeft':
                    // Move to previous input on left arrow
                    if (index > 0) {
                        this.inputRefs[index - 1].focus();
                        event.preventDefault();
                    }
                    break;
                case 'ArrowRight':
                    // Move to next input on right arrow
                    if (index < this.length - 1) {
                        this.inputRefs[index + 1].focus();
                        event.preventDefault();
                    }
                    break;
                case 'Home':
                    // Move to first input
                    this.inputRefs[0].focus();
                    event.preventDefault();
                    break;
                case 'End':
                    // Move to last input
                    this.inputRefs[this.length - 1].focus();
                    event.preventDefault();
                    break;
            }
        };
        /**
         * Handle paste event to populate the OTP fields
         */
        this.handlePaste = (event, index) => {
            var _a;
            event.preventDefault();
            const pastedData = ((_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text')) || '';
            // If numbersOnly is enabled, filter non-number characters
            const filteredData = this.numbersOnly ? pastedData.replace(/[^0-9]/g, '') : pastedData;
            // Fill OTP values with pasted data
            for (let i = 0; i < Math.min(filteredData.length, this.length - index); i++) {
                this.otpValues[index + i] = filteredData[i];
            }
            // Update inputs with new values
            this.inputRefs.forEach((input, idx) => {
                input.value = this.otpValues[idx] || '';
            });
            // Focus on the next empty input or the last one
            const nextEmptyIndex = this.otpValues.findIndex(val => !val);
            if (nextEmptyIndex !== -1 && nextEmptyIndex < this.length) {
                this.inputRefs[nextEmptyIndex].focus();
            }
            else {
                this.inputRefs[this.length - 1].focus();
            }
            this.emitChanges();
        };
        /**
         * Focus handler to select all text when focused
         */
        this.handleFocus = (event) => {
            const input = event.target;
            if (input.value) {
                setTimeout(() => input.select(), 0);
            }
        };
    }
    /**
     * Initialize the component
     */
    componentWillLoad() {
        this.otpValues = Array(this.length).fill('');
        if (this.defaultValue) {
            this.setValue(this.defaultValue);
        }
    }
    /**
     * Focus the first input after component renders
     */
    componentDidLoad() {
        if (this.autoFocus && this.inputRefs[0]) {
            setTimeout(() => {
                this.inputRefs[0].focus();
            }, 0);
        }
    }
    /**
     * Watch for length changes and update the OTP values array
     */
    handleLengthChange(newLength) {
        if (newLength < 1)
            return;
        const oldLength = this.otpValues.length;
        if (newLength > oldLength) {
            // Add empty slots
            this.otpValues = [...this.otpValues, ...Array(newLength - oldLength).fill('')];
        }
        else if (newLength < oldLength) {
            // Remove extra slots
            this.otpValues = this.otpValues.slice(0, newLength);
        }
        this.emitChanges();
    }
    /**
     * Helper method to emit change events
     */
    emitChanges() {
        const otpValue = this.otpValues.join('');
        this.otpChange.emit(otpValue);
        // If all fields are filled, trigger the complete event
        if (this.otpValues.every(val => val !== '') && this.otpValues.length === this.length) {
            this.otpComplete.emit(otpValue);
        }
    }
    /**
     * Manually clear all inputs
     */
    clear() {
        this.otpValues = Array(this.length).fill('');
        this.inputRefs.forEach(input => {
            input.value = '';
        });
        this.emitChanges();
        // Focus the first input after clearing
        if (this.inputRefs[0]) {
            this.inputRefs[0].focus();
        }
    }
    /**
     * Set OTP values programmatically
     */
    setValue(value) {
        const valueArray = value.split('');
        for (let i = 0; i < this.length; i++) {
            this.otpValues[i] = i < valueArray.length ? valueArray[i] : '';
        }
        // Update the actual input elements
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        this.emitChanges();
    }
    render() {
        return (h(Host, { key: '157366b4cdf3337a416a5ee7653f92280b8e0f5d', class: "otp-input-container" }, h("div", { key: '2569ded2aa21419fa521dd7a62f773d20407548e', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index) => (h("input", { ref: el => (this.inputRefs[index] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit form-control input-sm", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index], onInput: e => this.handleInput(e, index), onKeyDown: e => this.handleKeyDown(e, index), onPaste: e => this.handlePaste(e, index), onFocus: this.handleFocus, "aria-label": `Digit ${index + 1} of ${this.length}` }))))));
    }
    static get watchers() { return {
        "length": ["handleLengthChange"]
    }; }
};
IrOtp.style = IrOtpStyle0;

const irOtpModalCss = ":host{display:block}:root{--otp-modal-padding:1.5rem}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.otp-modal-header{border-bottom:0px !important}.otp-modal{z-index:9999999 !important;border:none;padding:0 !important;box-sizing:border-box;border:1px solid rgba(0, 0, 0, 0.2);border-radius:0.35rem;outline:0}.otp-modal-content{background-color:white;border:none;border-radius:0.35rem;outline:0}.otp-modal-title{margin-bottom:0;line-height:1.45}.otp-modal-body{max-height:100% !important;padding:0 var(--otp-modal-padding)}.otp-modal-header{display:flex;justify-content:space-between;padding:var(--otp-modal-padding);padding-bottom:1rem;border-top-left-radius:0.35rem;border-top-right-radius:0.35rem}.otp-modal-dialog{z-index:9999999 !important}.otp-modal-footer{border-top:0 !important;display:flex;gap:0.5rem;flex-direction:column;padding:var(--otp-modal-padding);padding-top:0.5rem !important}.verification-message{max-width:90%}.modal-loading-container{height:250px;width:80vw}@media (min-width: 768px){.otp-modal-dialog,.otp-modal-content{width:fit-content !important}.otp-modal-footer{flex-direction:row;align-items:center}.modal-loading-container{width:380px !important}.verification-message{max-width:350px !important}}";
const IrOtpModalStyle0 = irOtpModalCss;

const IrOtpModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpFinished = createEvent(this, "otpFinished", 7);
        this.language = 'en';
        /** Number of seconds to wait before allowing OTP resend */
        this.resendTimer = 60;
        /** Whether the resend option should be visible */
        this.showResend = true;
        /** Number of digits the OTP should have */
        this.otpLength = 6;
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.systemService = new SystemService();
        this.roomService = new RoomService();
        this.tokenService = new Token();
        this.otpVerificationSchema = z.object({ email: z.string().nonempty(), requestUrl: z.string().nonempty(), otp: z.string().length(this.otpLength) });
        this.handleOtpComplete = (e) => {
            this.error = '';
            this.otp = e.detail;
        };
    }
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
        }
        this.fetchLocale();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.tokenService.setToken(newValue);
            this.fetchLocale();
        }
    }
    handleKeyDownChange(e) {
        var _a;
        if (e.key === 'Escape' && ((_a = this.dialogRef) === null || _a === void 0 ? void 0 : _a.open)) {
            e.preventDefault();
        }
    }
    /** Open & reset everything */
    async openModal() {
        this.resetState();
        // $(this.modalRef).modal({ backdrop: 'static', keyboard: false });
        // $(this.modalRef).modal('show');
        if (typeof this.dialogRef.showModal === 'function') {
            this.dialogRef.showModal();
        }
        else {
            // fallback for browsers without dialog support
            this.dialogRef.setAttribute('open', '');
        }
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        // $(this.modalRef).modal('hide');
        if (typeof this.dialogRef.close === 'function') {
            this.dialogRef.close();
        }
        else {
            this.dialogRef.removeAttribute('open');
        }
        this.otp = null;
        this.clearTimer();
    }
    async fetchLocale() {
        if (!this.tokenService.getToken()) {
            return;
        }
        this.isInitializing = true;
        await this.roomService.fetchLanguage(this.language, ['_USER_MGT']);
        this.isInitializing = false;
    }
    resetState() {
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.clearTimer();
    }
    startTimer() {
        this.clearTimer();
        this.timerInterval = window.setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            }
            else {
                this.clearTimer();
            }
        }, 1000);
    }
    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    async focusFirstInput() {
        await new Promise(r => setTimeout(r, 50));
        const first = this.dialogRef.querySelector('input');
        first && first.focus();
    }
    async verifyOtp() {
        if (this.otp.length < this.otpLength)
            return;
        this.isLoading = true;
        this.otpVerificationSchema.parse({
            otp: this.otp,
            requestUrl: this.requestUrl,
            email: this.email,
        });
        try {
            await this.systemService.validateOTP({ METHOD_NAME: this.requestUrl, OTP: this.otp });
            this.otpFinished.emit({ otp: this.otp, type: 'success' });
            this.closeModal();
        }
        catch (err) {
            this.error = 'Verification failed. Please try again.';
        }
        finally {
            this.isLoading = false;
        }
    }
    async resendOtp() {
        if (this.timer > 0)
            return;
        // Resend otp
        try {
            await this.systemService.resendOTP({ METHOD_NAME: this.requestUrl });
            this.timer = 60;
            this.startTimer();
        }
        catch (error) {
            console.log(error);
        }
    }
    handleCancelClicked() {
        if (this.baseOTPUrl === 'Check_OTP_Necessity') {
            this.closeModal();
            this.otpFinished.emit({
                otp: null,
                type: 'cancelled',
            });
            return;
        }
        window.location.reload();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        var _a;
        return (h(Host, { key: '194627de4e4f6a196bfc984828e5516baaae87fa' }, h("dialog", { key: '790ea2b5f3713b63efdfe08271146746174cbe94', ref: el => (this.dialogRef = el), class: "otp-modal", "aria-modal": "true" }, h("form", { key: '5083553b6426cc0e720bbdae7826c1aef8aaf6a2', method: "dialog", class: "otp-modal-content" }, this.isInitializing || !locales.entries ? (h("div", { class: 'd-flex align-items-center justify-content-center modal-loading-container' }, h("ir-spinner", null))) : (h(Fragment, null, h("header", { class: "otp-modal-header" }, h("h5", { class: "otp-modal-title" }, locales.entries.Lcz_VerifyYourIdentity)), h("section", { class: "otp-modal-body d-flex align-items-center flex-column" }, h("p", { class: "verification-message text-truncate" }, locales.entries.Lcz_WeSentYuoVerificationCode, " ", this.email), h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && h("p", { class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, null, this.timer > 0 ? (h("p", { class: "small mt-1" }, locales.entries.Lcz_ResendCode, " 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: 'Didn’t receive code? Resend' }))))), h("footer", { class: "otp-modal-footer justify-content-auto" }, h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales.entries.Lcz_Cancel, btn_color: "secondary", onClick: this.handleCancelClicked.bind(this) }), h("ir-button", { class: "w-100", btn_styles: "flex-fill", text: locales.entries.Lcz_VerifyNow, isLoading: this.isLoading, btn_disabled: ((_a = this.otp) === null || _a === void 0 ? void 0 : _a.length) < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrOtpModal.style = IrOtpModalStyle0;

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (h(Host, { key: '05225daa6470948a221bcf74ad9dbcf5260299ec', class: "progress-main" }, h("span", { key: '2e0f09126b074420242ad8e0ae3459a520c40397', class: "progress-totle" }, this.percentage), h("div", { key: '581caf8e6c0151a998a0952bf85e072c0ff5902c', class: "progress-line" }, h("div", { key: '649f279a3f9b84d063c1115daa814e9f0533070e', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectChange = createEvent(this, "selectChange", 7);
        // Text shown in the label
        this.label = '<label>';
        // Selected value of the select
        this.selectedValue = null;
        // Whether to render the label
        this.LabelAvailable = true;
        // Placeholder text for the first option
        this.firstOption = 'Select';
        // Enable/disable default form styling
        this.selectStyle = true;
        // Whether to show the first placeholder option
        this.showFirstOption = true;
        // Set to true when the form is submitted
        this.submited = false;
        // Size of the select: 'sm' | 'md' | 'lg'
        this.size = 'md';
        // Size of the text: 'sm' | 'md' | 'lg'
        this.textSize = 'md';
        // Position of the label
        this.labelPosition = 'left';
        // Background color of the label
        this.labelBackground = null;
        // Text color of the label
        this.labelColor = 'dark';
        // Border color of the label
        this.labelBorder = 'theme';
        // Width of the label (Bootstrap cols)
        this.labelWidth = 3;
        // Unique ID for the select element
        this.select_id = v4();
        // Whether the select has an error state
        this.error = false;
        // Tracks if the field has been touched
        this.initial = true;
        // Tracks if the field is valid
        this.valid = false;
        this.count = 0;
    }
    watchHandler(newValue) {
        if (newValue !== null && this.required) {
            this.valid = true;
        }
    }
    watchHandler2(newValue) {
        if (newValue && this.required) {
            this.initial = false;
        }
    }
    handleButtonAnimation(e) {
        if (!this.selectEl || e.detail !== this.select_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectEl.classList.add('border-danger');
    }
    // Handle select change event
    // Example: onInput={this.handleSelectChange.bind(this)}
    handleSelectChange(event) {
        this.selectEl.classList.remove('border-danger');
        if (this.required) {
            this.initial = false;
            this.valid = event.target.checkValidity();
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
        else {
            this.selectedValue = event.target.value;
            this.selectChange.emit(this.selectedValue);
        }
    }
    render() {
        let className = 'form-control';
        let label = (h("div", { key: '65b60a49927f3627bbaaaa88f62ec8cc6fd4a5a7', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: 'aece2d462ac32401d1c0c6666da360f4def40d31', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: '646b46d2df4b5fdd637967b72feb0ffc08b401fb', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: 'eabdc0497883d613791ef9ebf4253e0fdd1f216e', class: "input-group row m-0" }, label, h("select", { key: '98044c7e75fd781cbdbfc1a2d99b70341ec107ba', disabled: this.disabled, "aria-invalid": this.error ? 'true' : 'false', "data-testid": this.testId, style: this.selectForcedStyles, ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${this.error ? 'border-danger' : ''} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && h("option", { key: 'e762b6dbd8cb76d7db0136d28787ca6c146648b3', value: '' }, this.firstOption), this.data.map(item => {
            if (this.selectedValue === item.value) {
                return (h("option", { selected: true, value: item.value }, item.text));
            }
            else {
                return h("option", { value: item.value }, item.text);
            }
        })))));
    }
    static get watchers() { return {
        "selectedValue": ["watchHandler"],
        "submited": ["watchHandler2"]
    }; }
};
IrSelect.style = IrSelectStyle0;

const irSpinnerCss = ":host{width:var(--ir-spinner-size, 1.25rem);height:var(--ir-spinner-size, 1.25rem);border:var(--ir-spinner-border-width, 2.5px) solid var(--ir-spinner-color, #3f3f3f);border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrSpinnerStyle0 = irSpinnerCss;

const IrSpinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * CSS unit used for `size` and `borderWidth`.
         * Can be `'px'` or `'rem'`.
         */
        this.unit = 'rem';
    }
    componentWillLoad() {
        this.initStyles();
    }
    handleSpinnerSizeChange() {
        this.initStyles();
    }
    handleSpinnerBorderWidthChange() {
        this.initStyles();
    }
    handleSpinnerUnitChange() {
        this.initStyles();
    }
    handleSpinnerColorChange() {
        this.initStyles();
    }
    /**
     * Applies CSS custom properties based on current prop values.
     */
    initStyles() {
        if (this.size) {
            this.applyCssElement(`${this.size}${this.unit}`, '--ir-spinner-size');
        }
        if (this.borderWidth) {
            this.applyCssElement(`${this.borderWidth}${this.unit}`, '--ir-spinner-size');
        }
        if (this.color) {
            this.applyCssElement(`${this.color}`, '--ir-spinner-color');
        }
    }
    /**
     * Helper function to set CSS custom properties on the host element.
     *
     * @param value - The CSS value to apply
     * @param key - The CSS custom property name (e.g., `--ir-spinner-size`)
     */
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return h(Host, { key: 'aa925c4b49ec63e4bfeed91b6a2285db308ff953' });
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "size": ["handleSpinnerSizeChange"],
        "borderWidth": ["handleSpinnerBorderWidthChange"],
        "unit": ["handleSpinnerUnitChange"],
        "color": ["handleSpinnerColorChange"]
    }; }
};
IrSpinner.style = IrSpinnerStyle0;

const irToastCss = "button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}";
const IrToastStyle0 = irToastCss;

const IrToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Position where toasts will appear.
         * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
         */
        this.position = 'bottom-left';
        /**
         * Array of active toast messages.
         */
        this.toasts = [];
    }
    onToast(event) {
        const toast = event.detail;
        this.showToast(toast);
    }
    showToast(toast) {
        const toastrOptions = {
            positionClass: 'toast-top-right',
            closeButton: true,
            timeOut: toast.duration || 5000,
        };
        switch (toast.type) {
            case 'success':
                toastr.success(toast.title, '', toastrOptions);
                break;
            case 'error':
                toastr.error(toast.title, '', toastrOptions);
                break;
        }
    }
    render() {
        return h(Host, { key: '4c2295a4a38fc556e7141c0c6bd1ea2f8bf19bfd' });
    }
    get element() { return getElement(this); }
};
IrToast.style = IrToastStyle0;

const irTooltipCss = ".sc-ir-tooltip-h{position:relative}.tooltip-icon.sc-ir-tooltip{margin:0 5px;padding:0}.tooltip-inner-custom.sc-ir-tooltip{min-width:max-content !important}";
const IrTooltipStyle0 = irTooltipCss;

const IrTooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether the tooltip content should be rendered using `innerHTML`.
         * If false, treats message as plain text.
         */
        this.withHtml = true;
        /**
         * When true, allows a custom element to trigger the tooltip using a named slot.
         * If false, a default info icon is used.
         */
        this.customSlot = false;
        /**
         * Defines the horizontal alignment of the tooltip trigger content.
         *
         * - `'start'`: Aligns the trigger to the left within its container.
         * - `'center'`: Centers the trigger horizontally (default).
         * - `'end'`: Aligns the trigger to the right within its container.
         *
         * This alignment affects how the trigger (e.g., icon or slotted element)
         * is positioned inside the outer tooltip container.
         */
        this.alignment = 'center';
    }
    /**
     * Handles showing or hiding the tooltip.
     *
     * - If `shouldOpen` is `true`, the tooltip is shown after a 300ms delay.
     * - If `false`, the tooltip is hidden immediately.
     *
     * @param shouldOpen - whether the tooltip should be shown or hidden.
     *
     * Example:
     * ```ts
     * this.toggleOpen(true);  // show tooltip
     * this.toggleOpen(false); // hide tooltip
     * ```
     */
    toggleOpen(shouldOpen) {
        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
        }
        if (shouldOpen) {
            this.tooltipTimeout = setTimeout(() => {
                this.open = true;
            }, 300);
        }
        else {
            this.open = false;
        }
    }
    render() {
        const alignment = (() => {
            switch (this.alignment) {
                case 'start':
                    return 'justify-content-start';
                case 'end':
                    return 'justify-content-end';
                case 'center':
                    return 'justify-content-center';
                default:
                    return 'justify-content-center';
            }
        })();
        return (h(Host, { class: "m-0 p-0" }, h("span", { style: this.containerStyle, class: `m-0 p-0 d-flex align-items-center ${alignment} ${this.containerClass}`, onMouseEnter: () => this.toggleOpen(true), onMouseLeave: () => this.toggleOpen(false) }, !this.customSlot ? (
        // <svg data-toggle="tooltip" data-placement="top" xmlns="http://www.w3.org/2000/svg" height="16" width="16" class="tooltip-icon" viewBox="0 0 512 512">
        //   <path
        //     fill="#6b6f82"
        //     d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        //   />
        // </svg>
        h("svg", { xmlns: "http://www.w3.org/2000/svg", class: 'm-0 p-0', height: "16", width: "16", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" }))) : (h("slot", { name: "tooltip-trigger" }))), this.open && (h("div", { class: "tooltip bottom show position-absolute", role: "tooltip" }, h("div", { class: "tooltip-arrow" }), h("div", { class: `tooltip-inner fit ${this.customSlot && 'tooltip-inner-custom'}` }, h("span", { innerHTML: this.message }))))));
    }
};
IrTooltip.style = IrTooltipStyle0;

export { IrButton as ir_button, IrCheckbox as ir_checkbox, IrCommon as ir_common, IrIcons as ir_icons, IrInterceptor as ir_interceptor, IrLoadingScreen as ir_loading_screen, IrMonthlyBookingsReport as ir_monthly_bookings_report, IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table, IrOtp as ir_otp, IrOtpModal as ir_otp_modal, IrProgressIndicator as ir_progress_indicator, IrSelect as ir_select, IrSpinner as ir_spinner, IrToast as ir_toast, IrTooltip as ir_tooltip };

//# sourceMappingURL=ir-button_16.entry.js.map