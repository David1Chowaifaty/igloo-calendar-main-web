import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, F as Fragment } from './index-0a4a209a.js';
import { v as v4 } from './v4-964634d6.js';
import { i as icons } from './icons-457fd9f9.js';
import { I as IMask } from './index-e2caf943.js';
import { a as axios } from './axios-aa1335b8.js';
import { i as interceptor_requests, a as isRequestPending } from './ir-interceptor.store-e96f5930.js';
import { z, Z as ZodError, h as handleBodyOverflow } from './utils-f1b7543f.js';
import { T as Token } from './Token-acf5fbad.js';
import { A as AuthService } from './authenticate.service-b92cac55.js';
import { C as CONSTANTS, U as UserService } from './user.service-7c5a4439.js';
import { l as locales } from './locales.store-53ec3957.js';
import { H as HouseKeepingService } from './housekeeping.service-64b661f9.js';
import { c as calendar_data } from './calendar-data-26906e0c.js';
import { _ as _formatTime } from './functions-14871918.js';
import { h as hooks } from './moment-ab846cee.js';
import { c as commonjsGlobal } from './_commonjsHelpers-1789f0cf.js';
import { B as BookingService } from './booking.service-1764aa69.js';
import { R as RoomService } from './room.service-5bfa8a39.js';
import { l as lookup } from './index-7ee206df.js';
import './index-c1c77241.js';

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickHandler = createEvent(this, "clickHandler", 7);
        this.icon = 'ft-save';
        this.btn_color = 'primary';
        this.size = 'md';
        this.textSize = 'md';
        this.btn_block = true;
        this.btn_disabled = false;
        this.btn_type = 'button';
        this.isLoading = false;
        this.btn_id = v4();
        this.variant = 'default';
        this.visibleBackgroundOnHover = false;
        this.iconPosition = 'left';
        /** If true, will render `content` as HTML */
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
        return (h(Host, { key: 'a8a9e15968f06876384ab2f4b64823849a51d875' }, h("slot", { key: '444f939a52cd612ea164e08b3903a19d91039dfa' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
        this.type = 'button';
    }
    render() {
        return (h("button", { key: '867885c856b6938afacc3331ddd0c93cbf6ac4c4', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '866b2179ddbcb4384a072760fb60c655f51cec18', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

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

const irInputTextCss = ".sc-ir-input-text-h{margin:0;padding:0;display:inline}.border-theme.sc-ir-input-text{border:1px solid #cacfe7}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:#1e9ff2 !important}.error-message.sc-ir-input-text{font-size:0.875rem;padding:0;margin:0.5rem 0 0;color:var(--red, #ff4961)}.ir-input[data-state='empty'].sc-ir-input-text{color:#bbbfc6}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--blue)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--red, #ff4961)}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "textChange", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
        /** Additional inline styles for the input */
        this.inputStyles = '';
        /** Whether the input field is read-only */
        this.readonly = false;
        /** Input type (e.g., text, password, email) */
        this.type = 'text';
        /** Whether the form has been submitted */
        this.submitted = false;
        /** Whether to apply default input styling */
        this.inputStyle = true;
        /** Text size inside the input field */
        this.textSize = 'md';
        /** Position of the label: left, right, or center */
        this.labelPosition = 'left';
        /** Background color of the label */
        this.labelBackground = null;
        /** Text color of the label */
        this.labelColor = 'dark';
        /** Border color/style of the label */
        this.labelBorder = 'theme';
        /** Label width as a fraction of 12 columns (1-11) */
        this.labelWidth = 3;
        /** Variant of the input: default or icon */
        this.variant = 'default';
        /** Whether the input is disabled */
        this.disabled = false;
        /** Whether the input has an error */
        this.error = false;
        /** Whether the input should auto-validate */
        this.autoValidate = true;
        this.inputFocused = false;
    }
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4();
        }
    }
    componentDidLoad() {
        if (this.mask)
            this.initMask();
    }
    handleMaskChange() {
        this.initMask();
    }
    handleMaskChange1() {
        console.log(this.autoValidate);
    }
    // @Watch('error')
    // handleErrorChange(newValue: boolean, oldValue: boolean) {
    //   if (newValue !== oldValue) {
    //     if (this.autoValidate) {
    //       this.validateInput(this.value, true);
    //     }
    //   }
    // }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.validateInput(this.value);
        }
    }
    initMask() {
        if (!this.mask || this.maskInstance) {
            return;
        }
        this.maskInstance = IMask(this.inputRef, this.mask);
        this.maskInstance.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this.maskInstance.unmaskedValue === '';
            if (isEmpty) {
                this.inputRef.value = '';
                this.textChange.emit(null);
            }
            else {
                this.inputRef.value = this.maskInstance.value;
                this.textChange.emit(this.maskInstance.value);
            }
        });
    }
    async validateInput(value, forceValidation = false) {
        if (!this.autoValidate && !forceValidation) {
            if (this.error) {
                this.updateErrorState(false);
            }
            return;
        }
        if (this.zod) {
            try {
                if (!this.asyncParse) {
                    this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                else {
                    await this.zod.parseAsync(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                if (this.error) {
                    this.updateErrorState(false);
                }
            }
            catch (error) {
                console.log(error);
                this.updateErrorState(true);
            }
        }
    }
    handleInputChange(event) {
        const value = event.target.value;
        const isEmpty = value === '';
        if (this.maskInstance) {
            this.maskInstance.value = value;
        }
        const maskedValue = isEmpty ? null : this.maskInstance ? this.maskInstance.value : value;
        this.textChange.emit(maskedValue);
    }
    updateErrorState(b) {
        this.error = b;
        this.inputRef.setAttribute('aria-invalid', b ? 'true' : 'false');
    }
    handleBlur(e) {
        this.validateInput(this.value, this.submitted);
        this.inputFocused = false;
        this.inputBlur.emit(e);
    }
    render() {
        if (this.variant === 'icon') {
            return (h("fieldset", { class: "position-relative has-icon-left input-container" }, h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, h("slot", { name: "icon" }))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })));
        }
        return (h("div", { class: 'form-group' }, h("div", { class: "input-group row m-0" }, this.label && (h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && h("p", { class: "error-message" }, this.errorMessage)));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "mask": ["handleMaskChange"],
        "autoValidate": ["handleMaskChange1"],
        "value": ["handleValueChange"]
    }; }
};
IrInputText.style = IrInputTextStyle0;

class InterceptorError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'InterceptorError';
        this.code = code;
        // Ensure the prototype chain is correct (important for `instanceof` checks)
        Object.setPrototypeOf(this, InterceptorError.prototype);
    }
}

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
        this.suppressToastEndpoints = [];
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.endpointsCount = 0;
        this.isPageLoadingStopped = null;
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStopped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    setupAxiosInterceptors() {
        axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
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
    async handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        interceptor_requests[extractedUrl] = 'done';
        if (extractedUrl === '/Validate_OTP') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            this.showModal = true;
            this.email = response.data.ExceptionMsg;
            this.requestUrl = extractedUrl.slice(1, extractedUrl.length);
            this.pendingConfig = response.config;
            return new Promise((resolve, reject) => {
                this.pendingResolve = resolve;
                this.pendingReject = reject;
                setTimeout(() => {
                    var _a;
                    (_a = this.otpModal) === null || _a === void 0 ? void 0 : _a.openModal();
                }, 10);
            });
        }
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg, extractedUrl, response.data.ExceptionCode);
            throw new InterceptorError(response.data.ExceptionMsg, response.data.ExceptionCode);
        }
        if (this.showModal)
            this.showModal = false;
        return response;
    }
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
    async handleOtpFinished(ev) {
        if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
            return;
        }
        const otp = ev.detail;
        if (!otp) {
            this.pendingReject(new Error('OTP cancelled by user'));
        }
        else {
            try {
                const retryConfig = Object.assign(Object.assign({}, this.pendingConfig), { data: Object.assign({}, (typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {})) });
                const resp = await axios.request(retryConfig);
                this.pendingResolve(resp);
            }
            catch (err) {
                this.pendingReject(err);
            }
        }
        this.pendingConfig = undefined;
        this.pendingResolve = undefined;
        this.pendingReject = undefined;
    }
    render() {
        return (h(Host, { key: '93fc3344a29563163df08c7e7bd4a3abf610656f' }, this.isLoading && !this.isPageLoadingStopped && (h("div", { key: '06247fc526a05e25f0038b59acbaa68c99d12697', class: "loadingScreenContainer" }, h("div", { key: '629a1bbdf12d3940d1a18a43a2d5708b617d7e53', class: "loaderContainer" }, h("span", { key: 'a4dd7246f0ae6a514bcef988d0df0e852aa1ecae', class: "page-loader" })))), this.showModal && (h("ir-otp-modal", { key: '0f2b43f20ebd3e8c351670fa54caeb699f68889d', email: this.email, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
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
        return (h(Host, { key: '6a007b19d04e406da2eedc670ee2f4a75e24ccde' }, h("span", { key: '241a6b1c3cb7333c92d3175403ab09168a14b384', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:1rem;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.confirmModal = createEvent(this, "confirmModal", 7);
        this.cancelModal = createEvent(this, "cancelModal", 7);
        this.modalTitle = 'Modal Title';
        this.modalBody = 'Modal Body';
        this.rightBtnActive = true;
        this.leftBtnActive = true;
        this.rightBtnText = 'Confirm';
        this.leftBtnText = 'Close';
        this.isLoading = false;
        this.autoClose = true;
        this.rightBtnColor = 'primary';
        this.leftBtnColor = 'secondary';
        this.btnPosition = 'right';
        this.iconAvailable = false;
        this.icon = '';
        this.isOpen = false;
        this.item = {};
    }
    async closeModal() {
        this.isOpen = false;
    }
    async openModal() {
        this.isOpen = true;
    }
    btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        if (name === this.leftBtnText) {
            this.cancelModal.emit();
            this.item = {};
            this.closeModal();
        }
        else if (name === this.rightBtnText) {
            this.confirmModal.emit(this.item);
            this.item = {};
            if (this.autoClose) {
                this.closeModal();
            }
        }
    }
    render() {
        return [
            h("div", { key: '304ab63e9a7a2cc01042937e0b3c4d85ee4e336c', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: 'c1ab96af493a3e561db8fa68693312c2d26569df', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: 'ca5fecc2ea93d29b94b5dbb3d939e521c6adda26', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: '049d922310f3c37ea66555d4642c0f44a2604e9c', class: `ir-alert-header` }, h("p", { key: '00dc187623d95f12bc81d0369c9c812089337bb1' }, this.modalTitle))), h("div", { key: 'baf72fe972fb5d8ed76fdd11b41f1483df944348', class: "modal-body text-left p-0 mb-2" }, h("div", { key: '2b470d174a704bf82f4a298645a113f2bdae9ed8' }, this.modalBody)), h("div", { key: '30303bd7205be5ba19acd19f1d807ccab5b50ff3', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (h("ir-button", { key: '684f8fdab47e0aadb8ed91acfb0f90a811231386', btn_disabled: this.isLoading, icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText })), this.rightBtnActive && (h("ir-button", { key: '2100cbdf0239bdcd7f95b0cd90ce8cd9b57deae1', icon: '', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

const irOtpCss = ".otp-input-wrapper.sc-ir-otp{display:flex;gap:0.5rem}.otp-digit.sc-ir-otp{width:2.5rem !important;height:2.5rem !important;padding:0;font-size:24px;font-weight:500;text-align:center;background-color:#fff}.otp-digit.sc-ir-otp:disabled{background-color:#e9ecef;cursor:not-allowed}input[type='number'].sc-ir-otp::-webkit-inner-spin-button,input[type='number'].sc-ir-otp::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number'].sc-ir-otp{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit.sc-ir-otp{width:35px;height:45px;font-size:20px}.otp-input-wrapper.sc-ir-otp{gap:6px}}@media (max-width: 360px){.otp-digit.sc-ir-otp{width:30px;height:40px;font-size:18px}.otp-input-wrapper.sc-ir-otp{gap:4px}}";
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
        return (h(Host, { key: '73e2c4b4944ea23d9d6d7fe09f97f6f676b1e551', class: "otp-input-container" }, h("div", { key: 'daceea24a94d5502ee170c9253ef9ff523d71dd0', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index) => (h("input", { ref: el => (this.inputRefs[index] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit form-control input-sm", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index], onInput: e => this.handleInput(e, index), onKeyDown: e => this.handleKeyDown(e, index), onPaste: e => this.handlePaste(e, index), onFocus: this.handleFocus, "aria-label": `Digit ${index + 1} of ${this.length}` }))))));
    }
    static get watchers() { return {
        "length": ["handleLengthChange"]
    }; }
};
IrOtp.style = IrOtpStyle0;

class SystemService {
    async validateOTP(params) {
        const { data } = await axios.post('/Validate_OTP', params);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data;
    }
}

const irOtpModalCss = ":host{display:block}.modal-backdrop{background-color:rgba(0, 0, 0, 0.5) !important}.modal-header{border-bottom:0px !important;padding-block:0.5rem !important}.modal-content{padding-top:0.5rem !important;padding-bottom:0.5rem !important}.modal-footer{padding-top:0.5rem !important;border-top:0 !important}";
const IrOtpModalStyle0 = irOtpModalCss;

const IrOtpModal = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpFinished = createEvent(this, "otpFinished", 7);
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
        this.otpVerificationSchema = z.object({ email: z.string().nonempty(), requestUrl: z.string().nonempty(), otp: z.string().length(this.otpLength) });
        this.handleOtpComplete = (e) => {
            this.error = '';
            this.otp = e.detail;
        };
    }
    /** Open & reset everything */
    async openModal() {
        this.resetState();
        $(this.modalRef).modal({ backdrop: 'static', keyboard: false });
        $(this.modalRef).modal('show');
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        $(this.modalRef).modal('hide');
        this.clearTimer();
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
        const first = this.modalRef.querySelector('input');
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
            // emit the filled OTP back to the interceptor
            this.otpFinished.emit(this.otp);
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
        this.timer = 60;
        this.startTimer();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (h(Host, { key: '0640d72a438f546d09773b9a3b033e8f281b543b' }, h("div", { key: '6ea1027284a9c6097bc647fb62de2be49e838858', ref: el => (this.modalRef = el), class: "modal fade", id: "staticBackdrop", "aria-hidden": "true" }, h("div", { key: '98266693c25e457af74c5097425702b8ea4a5809', class: "modal-dialog modal-dialog-centered" }, h("div", { key: 'c86b4d94a507b405c05fd377b6d605041f8ed034', class: "modal-content" }, h("div", { key: 'feaaf86b57488bf9fe38ae9cf537e1187ee9726b', class: "modal-header" }, h("h5", { key: 'f72ac8bfa2792ac2adb93d4bdbc3543d2e8a0691', class: "modal-title" }, "Verify Your Identity")), h("div", { key: 'c937e92335bff77f7683c84a8ec420b7e9c33f2f', class: "modal-body d-flex  align-items-center flex-column" }, h("p", { key: '08cbb229bcb2f9af79f3730e90069f663885ea5a', class: "sm text-center" }, "We sent a verification code to ", h("span", { key: 'c40daf6ee301bfc625e40e756e3f4b054f3c8b3a', class: "text-primary" }, this.email)), h("ir-otp", { key: '6b19d00edf9ccbd5c51d0766ab5bd2609c8e316d', autoFocus: true, length: this.otpLength,
            // value={this.otp}
            onOtpComplete: this.handleOtpComplete }), this.error && h("p", { key: '6ecdcc3800657cdce107e3edb96ba07780b92fd5', class: "text-danger small mt-1 p-0 mb-0" }, this.error), this.showResend && (h(Fragment, { key: '5d5de693e47bb67105f75618ef3dcd6fe06d1d5c' }, this.timer > 0 ? (h("p", { class: "small mt-1" }, "Resend code in 00:", String(this.timer).padStart(2, '0'))) : (h("ir-button", { class: "mt-1", btn_color: "link", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            }, size: "sm", text: "Didn\u2019t receive code? Resend" }))))), h("div", { key: '45d1901326cb9e1b20efe767f0b90910d91b7f34', class: "modal-footer justify-content-auto" }, h("ir-button", { key: '72dcb32933a714d9c2e7d48f91991ccba48afe53', class: "w-100", btn_styles: 'flex-fill', text: "Verify now", isLoading: this.isLoading, btn_disabled: this.otp.length < this.otpLength || this.isLoading, onClick: () => this.verifyOtp() })))))));
    }
};
IrOtpModal.style = IrOtpModalStyle0;

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.passwordValidationChange = createEvent(this, "passwordValidationChange", 7);
        /**
         * The password string to validate
         */
        this.password = '';
    }
    handlePasswordChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.passwordValidationChange.emit(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/.test(newValue));
        }
    }
    get validLength() {
        if (!this.password) {
            return false;
        }
        return this.password.length >= 8 && this.password.length <= 16;
    }
    get hasUppercase() {
        if (!this.password) {
            return false;
        }
        return /[A-Z]/.test(this.password);
    }
    get hasLowercase() {
        if (!this.password) {
            return false;
        }
        return /[a-z]/.test(this.password);
    }
    get hasDigit() {
        if (!this.password) {
            return false;
        }
        return /[0-9]/.test(this.password);
    }
    get hasSpecialChar() {
        if (!this.password) {
            return false;
        }
        return /[!@#$%^&*()\-_=+]/.test(this.password);
    }
    render() {
        return (h("div", { key: '53c6e5b2c006353119063038149239299e155f87', class: "m-0 p-0" }, h("requirement-check", { key: '8bfe49066198084fedac490b14eec716b5d8c8fd', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'cad137dea6f488b4d3d33dfcf54c574fc7781600', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'dcd697f6953f60913074cc8f8a217066a61570a5', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '468b51423db3141d45f28f265c6c40c5cfd5de5e', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '717e6957b383a206102fc415295cf57867fbd619', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = IrPasswordValidatorStyle0;

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const sheetCss$1 = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";
const IrResetPasswordStyle1 = sheetCss$1;

const IrResetPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.token = new Token();
        this.authService = new AuthService();
        this.ResetPasswordSchema = z.object({
            password: z.string().regex(CONSTANTS.PASSWORD),
            confirm_password: z
                .string()
                .nullable()
                .refine(password => {
                if (!CONSTANTS.PASSWORD.test(password)) {
                    return false;
                }
                return password === this.password;
            }, { message: 'Password must be at least 8 characters long.' }),
        });
    }
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.token.setToken(this.ticket);
        }
    }
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
            if (error instanceof ZodError) {
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
    render() {
        var _a, _b;
        const insideSidebar = this.el.slot === 'sidebar-body';
        return (h("div", { key: 'b7a2e2c35048270f0b05191bb653fcd4ee411d95', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, !insideSidebar && (h(Fragment, { key: 'eb50576c8ac10490b2e237b622235da5b9cb5429' }, h("ir-interceptor", { key: 'bbf3d55e24befeab83f4771cef5f522964f27dea', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '1fc9375dfd64d728ef032a0334427f6bfeb43f0d' }))), h("form", { key: '38d0d666e1c5a45b63a79d689a80517fc5d6c5f8', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '0acccc3133ec8ccb160b4910b5bab428f5565fa5', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '752cc4e66fa76d86170d73605c6bed99cf5c8f88', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '5177e555e3754dbbcce18c54944658e60cd541be', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '0f1b86bff6325c3b71a778fd3a760ec98d222b04', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'a21f3d048a13899ce7578116f43f9c4d8073f7b2', class: "text-center mb-2" }, h("h4", { key: '6cb238e83d642558dfc8c7d7442059542a4cf64f', class: "mb-1" }, "Set New Password"), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '58cfd55ca39a47d0c3b6872d0c29a23bc9d3951b' }, h("div", { key: '414297df8e983bc8dd33eb178c007290f068fafc', class: 'mb-2' }, h("div", { key: '6303cf50777f25f87f6a77ef2ac195ca32c4a7f8', class: "m-0 p-0" }, h("div", { key: 'd38065275cc2b82b8c6793f28215ec975f797f83', class: 'position-relative' }, h("ir-input-text", { key: 'a3e5dcad0aa8c34d42e7b6d35a1c7bce71a556c8', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: 'c4eae50fd9a1bce4b43f0bd9c28d924e6702bf8f', class: "mb-1", password: this.password })), h("div", { key: '42def23e9abb9838d3611068d1735ac56881a781', class: 'position-relative' }, h("ir-input-text", { key: 'b0802981aa14fe6061697f1b5a3e13e16c2164e8', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm password", type: 'password' }))), !insideSidebar && (h("div", { key: 'cb3c9caca970385329127283a9fb332a262bde67', class: "d-flex flex-column mt-1 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: '4f46dcbaa15917823ab50e7d89f1392c230630f8', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: 'Cancel', size: "md", btn_color: "secondary" }), h("ir-button", { key: 'f30847957abe2469f63438358f990736e5d8511e', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md" })))))), insideSidebar && (h("div", { key: '09a5d73afb6ec77d64961ecacc2e5629bec27479', class: 'sheet-footer w-full' }, h("ir-button", { key: '3de82b962482148e38b4540b294a471c1ef76c5c', text: 'Cancel', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: 'ea95cf4977923dd8e879de8b7c2cbc9204d0c285', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: 'Change password', size: "md" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = IrResetPasswordStyle0 + IrResetPasswordStyle1;

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.selectChange = createEvent(this, "selectChange", 7);
        this.label = '<label>';
        this.selectedValue = null;
        this.LabelAvailable = true;
        this.firstOption = 'Select';
        this.selectStyle = true;
        this.showFirstOption = true;
        this.submited = false;
        this.size = 'md';
        this.textSize = 'md';
        this.labelPosition = 'left';
        this.labelBackground = null;
        this.labelColor = 'dark';
        this.labelBorder = 'theme';
        this.labelWidth = 3;
        this.select_id = v4();
        /** Whether the select has an error */
        this.error = false;
        this.initial = true;
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
        console.log(e.detail, this.select_id, e.detail === this.select_id);
        if (!this.selectEl || e.detail !== this.select_id) {
            return;
        }
        console.log('first1');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectEl.classList.add('border-danger');
    }
    componentwillload() { }
    disconnectedCallback() { }
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
        let label = (h("div", { key: 'a85dca949652fb14eeed054c00795135ee6b249a', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: '91747d7c1c24aabf153d164e6118ec58d4ac8679', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: 'c443c18d3ed365882f54cf1121afb18957282ae5', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: '7f0de0897c59fa1c167a10a548426741cca50c01', class: "input-group row m-0" }, label, h("select", { key: '76cae4e68038d99693b3c836e40db2da926029b1', disabled: this.disabled, "aria-invalid": this.error ? 'true' : 'false', "data-testid": this.testId, style: this.selectForcedStyles, ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${this.error ? 'border-danger' : ''} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && h("option", { key: '578068859de6fc7f6c43b7e9e737e48a63fb40fb', value: '' }, this.firstOption), this.data.map(item => {
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

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-left:var(--ir-sidebar-padding-left, unset);padding-right:var(--ir-sidebar-padding-right, unset)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding-block:var(--ir-sidebar-padding-block, 0);padding-inline:var(--ir-sidebar-padding-inline, 0.5rem);padding-top:var(--ir-sidebar-padding-top, unset);padding-bottom:var(--ir-sidebar-padding-bottom, unset);padding-left:var(--ir-sidebar-padding-left, unset);padding-right:var(--ir-sidebar-padding-right, unset)}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
const IrSidebarStyle0 = irSidebarCss;

const IrSidebar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.irSidebarToggle = createEvent(this, "irSidebarToggle", 7);
        this.side = 'right';
        this.showCloseButton = true;
        this.open = false;
    }
    applyStyles() {
        for (const property in this.sidebarStyles) {
            if (this.sidebarStyles.hasOwnProperty(property)) {
                this.sidebarRef.style[property] = this.sidebarStyles[property];
            }
        }
    }
    handleSidebarStylesChange() {
        this.applyStyles();
    }
    componentWillLoad() {
        // this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        // If esc key is pressed, close the modal
        this.applyStyles();
        // document.addEventListener('keydown', this.handleKeyDown);
    }
    handleOpenChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            handleBodyOverflow(newValue);
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            e.stopImmediatePropagation();
            e.stopPropagation();
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    async toggleSidebar() {
        this.irSidebarToggle.emit(this.open);
    }
    render() {
        let className = '';
        if (this.open) {
            className = 'active';
        }
        else {
            className = '';
        }
        return [
            h("div", { key: '5ecdcf66d8fc7d934d6edf49653ff58b9450b3d9', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: '1ba161ebe5be7385cc8df61e81200b214746797d', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: 'a467fae1d4afedbe20cf840a49ebcec8fb16dffd', class: 'sidebar-title' }, h("p", { key: '367da0005c7f8e70b36926366b43393dad12f56f', class: 'p-0 m-0' }, this.label), h("div", { key: '1e7cf7b79214598b27402d4259a00615d8edecec', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: 'f591ee4e987b4f7089b36514af55b21aec6745f4', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: '086793cc67137bc0b22fa4e00f06e480a1ff1878', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '9320f051d243ae8eb07fbfe63893cc3ee2fff462', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: '40a50d8df05d8e73121e3c85b03c21632c861814', name: "sidebar-body" })),
        ];
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"],
        "open": ["handleOpenChange"]
    }; }
};
IrSidebar.style = IrSidebarStyle0;

const irSwitchCss = ".sc-ir-switch-h{display:block;position:relative;box-sizing:border-box;--ir-root-width:36px;--ir-root-height:20px}.hidden-input.sc-ir-switch{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height)}.SwitchRoot.sc-ir-switch{all:unset;padding:0;margin:0;width:var(--ir-root-width);height:var(--ir-root-height);background-color:var(--ir-root-inactive-color, #ff4961);position:relative;box-shadow:rgba(0, 0, 0, 0.2) 0px 2px 10px;--webkit-tap-highlight-color:rgba(0, 0, 0, 0);border-radius:9999px;box-sizing:border-box}.SwitchRoot.sc-ir-switch:disabled{opacity:80%}.SwitchRoot.sc-ir-switch:focus-visible{outline:1px solid var(--ir-root-active-color, rgb(55, 188, 155));outline-offset:1px}.SwitchRoot[data-state='checked'].sc-ir-switch{background-color:var(--ir-root-active-color, rgb(55, 188, 155))}.SwitchThumb.sc-ir-switch{padding:0;margin:0;display:block;width:calc(var(--ir-root-height) - 3px);height:calc(var(--ir-root-height) - 3px);border-radius:9999px;background:white;box-shadow:rgba(0, 0, 0, 0.2) 0px;transition:transform 100ms ease 0s;transform:translateX(2px);will-change:transform}.SwitchThumb[data-state='checked'].sc-ir-switch{transform:translateX(calc(var(--ir-root-height) - 3px))}";
const IrSwitchStyle0 = irSwitchCss;

const IrSwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkChange = createEvent(this, "checkChange", 7);
        this.checked = false;
        this.disabled = false;
        this._id = '';
    }
    componentWillLoad() {
        this._id = this.generateRandomId(10);
    }
    componentDidLoad() {
        if (!this.switchRoot) {
            return;
        }
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    generateRandomId(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    handleCheckChange() {
        this.checked = !this.checked;
        this.switchRoot.setAttribute('aria-checked', this.checked ? 'true' : 'false');
        this.checkChange.emit(this.checked);
    }
    render() {
        return (h(Host, { key: '2c1b1d2723e43359136d016bdd3f8345e93c367f' }, h("button", { key: 'e5ec4feaad3dcb29bce3b618a8ea57e2356111e0', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, h("span", { key: '03e11377e8dc5b6d4c180bc288cd1254ccebd122', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), h("input", { key: '4cecd76fe9c847e7efb2df6c0b6a090fa1afb31b', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
};
IrSwitch.style = IrSwitchStyle0;

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.displayContext = 'default';
        this.justifyContent = 'start';
    }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: '5d41f963c2911f7af8f32a966f3225ebe32a4583' }, h("h4", { key: '6a2b0852e3399c36e92bd088d2d34ea423bbe07e', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: 'df9e64e7e8197c876ed30ef3441b65da0758b3db', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '52015eee6b3dca7d8a54b89c85a374af87dee3a0', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'e36fd00e63fa677e9408ff1a74c2cfc088e48f49', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: 'caf827b07bee280ab85db68c23a178656a355193', class: 'title-body' }, h("slot", { key: 'c1671149567271c1e41f7f1efbef749822ddc517', name: "title-body" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

const irToastCss = "button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}";
const IrToastStyle0 = irToastCss;

const IrToast = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.position = 'bottom-left';
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
        return h(Host, { key: '88aa20bfdf8d84aaa61b99742f135236058045e5' });
    }
    get element() { return getElement(this); }
};
IrToast.style = IrToastStyle0;

var uaParser_pack = {exports: {}};

/* UAParser.js v2.0.3
   Copyright © 2012-2025 Faisal Salman <f@faisalman.com>
   AGPLv3 License */

(function (module, exports) {
((i,l)=>{function U(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e}var E=500,P="user-agent",w="",B="?",R="function",n="undefined",c="object",V="string",u="browser",h="cpu",p="device",m="engine",f="os",g="result",v="name",k="type",x="vendor",y="version",C="architecture",L="major",T="model",G="console",S="mobile",r="tablet",e="smarttv",t="wearable",F="xr",D="embedded",$="inapp",W="brands",_="formFactors",X="fullVersionList",q="platform",Y="platformVersion",K="bitness",o="sec-ch-ua",Q=o+"-full-version-list",Z=o+"-arch",J=o+"-"+K,ii=o+"-form-factors",ei=o+"-"+S,ti=o+"-"+T,oi=o+"-"+q,ri=oi+"-version",ai=[W,X,S,T,q,Y,C,_,K],si="Amazon",a="Apple",ni="ASUS",wi="BlackBerry",s="Google",bi="Huawei",di="Microsoft",li="Motorola",ci="Nvidia",ui="OnePlus",hi="OPPO",pi="Samsung",mi="Sony",fi="Xiaomi",gi="Zebra",vi="Chromium",b="Chromecast",ki="Firefox",d="Opera",xi="Facebook",A="Mobile ",yi=" Browser",Ci="Windows",Ti=typeof i!==n,z=Ti&&i.navigator?i.navigator:l,O=z&&z.userAgentData?z.userAgentData:l,Si=function(i,e){if(typeof i===c&&0<i.length){for(var t in i)if(M(i[t])==M(e))return !0;return !1}return !!H(i)&&-1!==M(e).indexOf(M(i))},_i=function(i,e){for(var t in i)return /^(browser|cpu|device|engine|os)$/.test(t)||!!e&&_i(i[t])},H=function(i){return typeof i===V},qi=function(i){if(!i)return l;for(var e,t=[],o=zi(/\\?\"/g,i).split(","),r=0;r<o.length;r++)-1<o[r].indexOf(";")?(e=Hi(o[r]).split(";v="),t[r]={brand:e[0],version:e[1]}):t[r]=Hi(o[r]);return t},M=function(i){return H(i)?i.toLowerCase():i},Ai=function(i){return H(i)?zi(/[^\d\.]/g,i).split(".")[0]:l},j=function(i){for(var e in i){e=i[e];typeof e==c&&2==e.length?this[e[0]]=e[1]:this[e]=l;}return this},zi=function(i,e){return H(e)?e.replace(i,w):e},Oi=function(i){return zi(/\\?\"/g,i)},Hi=function(i,e){if(H(i))return i=zi(/^\s\s*/,i),typeof e===n?i:i.substring(0,E)},Mi=function(i,e){if(i&&e)for(var t,o,r,a,s,n=0;n<e.length&&!a;){for(var w=e[n],b=e[n+1],d=t=0;d<w.length&&!a&&w[d];)if(a=w[d++].exec(i))for(o=0;o<b.length;o++)s=a[++t],typeof(r=b[o])===c&&0<r.length?2===r.length?typeof r[1]==R?this[r[0]]=r[1].call(this,s):this[r[0]]=r[1]:3===r.length?typeof r[1]!==R||r[1].exec&&r[1].test?this[r[0]]=s?s.replace(r[1],r[2]):l:this[r[0]]=s?r[1].call(this,s,r[2]):l:4===r.length&&(this[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):l):this[r]=s||l;n+=2;}},N=function(i,e){for(var t in e)if(typeof e[t]===c&&0<e[t].length){for(var o=0;o<e[t].length;o++)if(Si(e[t][o],i))return t===B?l:t}else if(Si(e[t],i))return t===B?l:t;return e.hasOwnProperty("*")?e["*"]:i},ji={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Ni={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":l},Ii={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[y,[v,A+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[y,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,y],[/opios[\/ ]+([\w\.]+)/i],[y,[v,d+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[y,[v,d+" GX"]],[/\bopr\/([\w\.]+)/i],[y,[v,d]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[y,[v,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[y,[v,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[v,y],[/quark(?:pc)?\/([-\w\.]+)/i],[y,[v,"Quark"]],[/\bddg\/([\w\.]+)/i],[y,[v,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[y,[v,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[y,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[y,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[y,[v,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[y,[v,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[y,[v,"Smart Lenovo"+yi]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure"+yi],y],[/\bfocus\/([\w\.]+)/i],[y,[v,ki+" Focus"]],[/\bopt\/([\w\.]+)/i],[y,[v,d+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[y,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[y,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[y,[v,d+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[y,[v,"MIUI"+yi]],[/fxios\/([\w\.-]+)/i],[y,[v,A+ki]],[/\bqihoobrowser\/?([\w\.]*)/i],[y,[v,"360"]],[/\b(qq)\/([\w\.]+)/i],[[v,/(.+)/,"$1Browser"],y],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1"+yi],y],[/samsungbrowser\/([\w\.]+)/i],[y,[v,pi+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[y,[v,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[v,"Sogou Mobile"],y],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[v,y],[/(lbbrowser|rekonq)/i],[v],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[y,v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,xi],y,[k,$]],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[v,y,[k,$]],[/\bgsa\/([\w\.]+) .*safari\//i],[y,[v,"GSA"],[k,$]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[y,[v,"TikTok"],[k,$]],[/\[(linkedin)app\]/i],[v,[k,$]],[/(chromium)[\/ ]([-\w\.]+)/i],[v,y],[/headlesschrome(?:\/([\w\.]+)| )/i],[y,[v,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,"Chrome WebView"],y],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[y,[v,"Android"+yi]],[/chrome\/([\w\.]+) mobile/i],[y,[v,A+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,y],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[y,[v,A+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[v,A+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[y,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[y,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[v,y],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[v,A+ki],y],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],y],[/(wolvic|librewolf)\/([\w\.]+)/i],[v,y],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[y,[v,ki+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[v,[y,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[v,[y,/[^\d\.]+./,w]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[C,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[C,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[C,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[C,/ower/,w,M]],[/ sun4\w[;\)]/i],[[C,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[C,M]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[T,[x,pi],[k,r]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[T,[x,pi],[k,S]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[T,[x,a],[k,S]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[T,[x,a],[k,r]],[/(macintosh);/i],[T,[x,a]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[T,[x,"Sharp"],[k,S]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[T,[x,"Honor"],[k,r]],[/honor([-\w ]+)[;\)]/i],[T,[x,"Honor"],[k,S]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[T,[x,bi],[k,r]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[T,[x,bi],[k,S]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[T,/_/g," "],[x,fi],[k,r]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[T,/_/g," "],[x,fi],[k,S]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[T,[x,hi],[k,S]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[T,[x,N,{OnePlus:["304","403","203"],"*":hi}],[k,r]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[T,[x,"BLU"],[k,S]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[T,[x,"Vivo"],[k,S]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[T,[x,"Realme"],[k,S]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[T,[x,li],[k,S]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[T,[x,li],[k,r]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[T,[x,"LG"],[k,r]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,/\blg-?([\d\w]+) bui/i],[T,[x,"LG"],[k,S]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[T,[x,"Lenovo"],[k,r]],[/(nokia) (t[12][01])/i],[x,T,[k,r]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[T,/_/g," "],[k,S],[x,"Nokia"]],[/(pixel (c|tablet))\b/i],[T,[x,s],[k,r]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[T,[x,s],[k,S]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[T,[x,mi],[k,S]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[T,"Xperia Tablet"],[x,mi],[k,r]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[T,[x,ui],[k,S]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[T,[x,si],[k,r]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[T,/(.+)/g,"Fire Phone $1"],[x,si],[k,S]],[/(playbook);[-\w\),; ]+(rim)/i],[T,x,[k,r]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[T,[x,wi],[k,S]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[T,[x,ni],[k,r]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[T,[x,ni],[k,S]],[/(nexus 9)/i],[T,[x,"HTC"],[k,r]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[x,[T,/_/g," "],[k,S]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[T,[x,"TCL"],[k,r]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[T,[x,"TCL"],[k,S]],[/(itel) ((\w+))/i],[[x,M],T,[k,N,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[T,[x,"Acer"],[k,r]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[T,[x,"Meizu"],[k,S]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[T,[x,"Ulefone"],[k,S]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[T,[x,"Energizer"],[k,S]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[T,[x,"Cat"],[k,S]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[T,[x,"Smartfren"],[k,S]],[/droid.+; (a(?:015|06[35]|142p?))/i],[T,[x,"Nothing"],[k,S]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[T,[x,"Archos"],[k,r]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[T,[x,"Archos"],[k,S]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[x,T,[k,r]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[x,T,[k,S]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[x,T,[k,r]],[/(surface duo)/i],[T,[x,di],[k,r]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[T,[x,"Fairphone"],[k,S]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[T,[x,ci],[k,r]],[/(sprint) (\w+)/i],[x,T,[k,S]],[/(kin\.[onetw]{3})/i],[[T,/\./g," "],[x,di],[k,S]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[T,[x,gi],[k,r]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[T,[x,gi],[k,S]],[/smart-tv.+(samsung)/i],[x,[k,e]],[/hbbtv.+maple;(\d+)/i],[[T,/^/,"SmartTV"],[x,pi],[k,e]],[/tcast.+(lg)e?. ([-\w]+)/i],[x,T,[k,e]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[x,"LG"],[k,e]],[/(apple) ?tv/i],[x,[T,a+" TV"],[k,e]],[/crkey.*devicetype\/chromecast/i],[[T,b+" Third Generation"],[x,s],[k,e]],[/crkey.*devicetype\/([^/]*)/i],[[T,/^/,"Chromecast "],[x,s],[k,e]],[/fuchsia.*crkey/i],[[T,b+" Nest Hub"],[x,s],[k,e]],[/crkey/i],[[T,b],[x,s],[k,e]],[/(portaltv)/i],[T,[x,xi],[k,e]],[/droid.+aft(\w+)( bui|\))/i],[T,[x,si],[k,e]],[/(shield \w+ tv)/i],[T,[x,ci],[k,e]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[T,[x,"Sharp"],[k,e]],[/(bravia[\w ]+)( bui|\))/i],[T,[x,mi],[k,e]],[/(mi(tv|box)-?\w+) bui/i],[T,[x,fi],[k,e]],[/Hbbtv.*(technisat) (.*);/i],[x,T,[k,e]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[x,Hi],[T,Hi],[k,e]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[T,[k,e]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[k,e]],[/(ouya)/i,/(nintendo) (\w+)/i],[x,T,[k,G]],[/droid.+; (shield)( bui|\))/i],[T,[x,ci],[k,G]],[/(playstation \w+)/i],[T,[x,mi],[k,G]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[T,[x,di],[k,G]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[T,[x,pi],[k,t]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[x,T,[k,t]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[T,[x,hi],[k,t]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[T,[x,a],[k,t]],[/(opwwe\d{3})/i],[T,[x,ui],[k,t]],[/(moto 360)/i],[T,[x,li],[k,t]],[/(smartwatch 3)/i],[T,[x,mi],[k,t]],[/(g watch r)/i],[T,[x,"LG"],[k,t]],[/droid.+; (wt63?0{2,3})\)/i],[T,[x,gi],[k,t]],[/droid.+; (glass) \d/i],[T,[x,s],[k,F]],[/(pico) (4|neo3(?: link|pro)?)/i],[x,T,[k,F]],[/(quest( \d| pro)?s?).+vr/i],[T,[x,xi],[k,F]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[x,[k,D]],[/(aeobc)\b/i],[T,[x,si],[k,D]],[/(homepod).+mac os/i],[T,[x,a],[k,D]],[/windows iot/i],[[k,D]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[T,[k,N,{mobile:"Mobile",xr:"VR","*":r}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[k,r]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[k,S]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[T,[x,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[y,[v,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[v,y],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[y,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[v,y],[/ladybird\//i],[[v,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[y,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,y],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[v,[y,N,ji]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[y,N,ji],[v,Ci]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[y,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,"macOS"],[y,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[y,[v,b+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[y,[v,b+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[y,[v,b+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[y,[v,b+" Linux"]],[/crkey\/([\d\.]+)/i],[y,[v,b]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[y,v],[/(ubuntu) ([\w\.]+) like android/i],[[v,/(.+)/,"$1 Touch"],y],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i],[v,y],[/\(bb(10);/i],[y,[v,wi]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[y,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[y,[v,ki+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[y,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[y,[v,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,"Chrome OS"],y],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,y],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],y],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[v,y]]},Ui=(d={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},j.call(d.init,[[u,[v,y,L,k]],[h,[C]],[p,[k,T,x]],[m,[v,y]],[f,[v,y]]]),j.call(d.isIgnore,[[u,[y,L]],[m,[y]],[f,[y]]]),j.call(d.isIgnoreRgx,[[u,/ ?browser$/i],[f,/ ?os$/i]]),j.call(d.toString,[[u,[v,y]],[h,[C]],[p,[x,T]],[m,[v,y]],[f,[v,y]]]),d),Ei=function(e,i){var t=Ui.init[i],o=Ui.isIgnore[i]||0,r=Ui.isIgnoreRgx[i]||0,a=Ui.toString[i]||0;function s(){j.call(this,t);}return s.prototype.getItem=function(){return e},s.prototype.withClientHints=function(){return O?O.getHighEntropyValues(ai).then(function(i){return e.setCH(new Pi(i,!1)).parseCH().get()}):e.parseCH().get()},s.prototype.withFeatureCheck=function(){return e.detectFeature().get()},i!=g&&(s.prototype.is=function(i){var e,t=!1;for(e in this)if(this.hasOwnProperty(e)&&!Si(o,e)&&M(r?zi(r,this[e]):this[e])==M(r?zi(r,i):i)){if(t=!0,i!=n)break}else if(i==n&&t){t=!t;break}return t},s.prototype.toString=function(){var i,e=w;for(i in a)typeof this[a[i]]!==n&&(e+=(e?" ":w)+this[a[i]]);return e||n}),O||(s.prototype.then=function(i){function e(){for(var i in t)t.hasOwnProperty(i)&&(this[i]=t[i]);}var t=this,o=(e.prototype={is:s.prototype.is,toString:s.prototype.toString},new e);return i(o),o}),new s};function Pi(i,e){if(i=i||{},j.call(this,ai),e)j.call(this,[[W,qi(i[o])],[X,qi(i[Q])],[S,/\?1/.test(i[ei])],[T,Oi(i[ti])],[q,Oi(i[oi])],[Y,Oi(i[ri])],[C,Oi(i[Z])],[_,qi(i[ii])],[K,Oi(i[J])]]);else for(var t in i)this.hasOwnProperty(t)&&typeof i[t]!==n&&(this[t]=i[t]);}function Bi(i,e,t,o){return this.get=function(i){return i?this.data.hasOwnProperty(i)?this.data[i]:l:this.data},this.set=function(i,e){return this.data[i]=e,this},this.setCH=function(i){return this.uaCH=i,this},this.detectFeature=function(){if(z&&z.userAgent==this.ua)switch(this.itemType){case u:z.brave&&typeof z.brave.isBrave==R&&this.set(v,"Brave");break;case p:!this.get(k)&&O&&O[S]&&this.set(k,S),"Macintosh"==this.get(T)&&z&&typeof z.standalone!==n&&z.maxTouchPoints&&2<z.maxTouchPoints&&this.set(T,"iPad").set(k,r);break;case f:!this.get(v)&&O&&O[q]&&this.set(v,O[q]);break;case g:var e=this.data,i=function(i){return e[i].getItem().detectFeature().get()};this.set(u,i(u)).set(h,i(h)).set(p,i(p)).set(m,i(m)).set(f,i(f));}return this},this.parseUA=function(){return this.itemType!=g&&Mi.call(this.data,this.ua,this.rgxMap),this.itemType==u&&this.set(L,Ai(this.get(y))),this},this.parseCH=function(){var i,e=this.uaCH,t=this.rgxMap;switch(this.itemType){case u:case m:var o,r=e[X]||e[W];if(r)for(var a in r){var s=r[a].brand||r[a],a=r[a].version;this.itemType!=u||/not.a.brand/i.test(s)||o&&(!/chrom/i.test(o)||s==vi)||(s=N(s,{Chrome:"Google Chrome",Edge:"Microsoft Edge","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"}),this.set(v,s).set(y,a).set(L,Ai(a)),o=s),this.itemType==m&&s==vi&&this.set(y,a);}break;case h:var n=e[C];n&&("64"==e[K]&&(n+="64"),Mi.call(this.data,n+";",t));break;case p:if(e[S]&&this.set(k,S),e[T]&&(this.set(T,e[T]),this.get(k)&&this.get(x)||(Mi.call(n={},"droid 9; "+e[T]+")",t),!this.get(k)&&n.type&&this.set(k,n.type),!this.get(x)&&n.vendor&&this.set(x,n.vendor))),e[_]){if("string"!=typeof e[_])for(var w=0;!i&&w<e[_].length;)i=N(e[_][w++],Ni);else i=N(e[_],Ni);this.set(k,i);}break;case f:var b,n=e[q];n&&(b=e[Y],n==Ci&&(b=13<=parseInt(Ai(b),10)?"11":"10"),this.set(v,n).set(y,b)),this.get(v)==Ci&&"Xbox"==e[T]&&this.set(v,"Xbox").set(y,l);break;case g:var d=this.data,n=function(i){return d[i].getItem().setCH(e).parseCH().get()};this.set(u,n(u)).set(h,n(h)).set(p,n(p)).set(m,n(m)).set(f,n(f));}return this},j.call(this,[["itemType",i],["ua",e],["uaCH",o],["rgxMap",t],["data",Ei(this,i)]]),this}function I(i,e,t){var o,r,a,s,n;return typeof i===c?(e=_i(i,!0)?(typeof e===c&&(t=e),i):(t=i,l),i=l):typeof i!==V||_i(e,!0)||(t=e,e=l),t&&typeof t.append===R&&(o={},t.forEach(function(i,e){o[e]=i;}),t=o),this instanceof I?(r=typeof i===V?i:t&&t[P]?t[P]:z&&z.userAgent?z.userAgent:w,a=new Pi(t,!0),s=e?((i,e)=>{var t,o={},r=e;if(!_i(e))for(var a in r={},e)for(var s in e[a])r[s]=e[a][s].concat(r[s]||[]);for(t in i)o[t]=r[t]&&r[t].length%2==0?r[t].concat(i[t]):i[t];return o})(Ii,e):Ii,j.call(this,[["getBrowser",(n=function(i){return i==g?function(){return new Bi(i,r,s,a).set("ua",r).set(u,this.getBrowser()).set(h,this.getCPU()).set(p,this.getDevice()).set(m,this.getEngine()).set(f,this.getOS()).get()}:function(){return new Bi(i,r,s[i],a).parseUA().get()}})(u)],["getCPU",n(h)],["getDevice",n(p)],["getEngine",n(m)],["getOS",n(f)],["getResult",n(g)],["getUA",function(){return r}],["setUA",function(i){return H(i)&&(r=i.length>E?Hi(i,E):i),this}]]).setUA(r),this):new I(i,e,t).getResult()}I.VERSION="2.0.3",I.BROWSER=U([v,y,L,k]),I.CPU=U([C]),I.DEVICE=U([T,x,k,G,S,e,r,t,D]),I.ENGINE=I.OS=U([v,y]),(exports=module.exports?module.exports=I:exports).UAParser=I;var Ri,Vi=Ti&&(i.jQuery||i.Zepto);Vi&&!Vi.ua&&(Ri=new I,Vi.ua=Ri.getResult(),Vi.ua.get=function(){return Ri.getUA()},Vi.ua.set=function(i){Ri.setUA(i);var e,t=Ri.getResult();for(e in t)Vi.ua[e]=t[e];});})("object"==typeof window?window:commonjsGlobal);
}(uaParser_pack, uaParser_pack.exports));

const irUserFormPanelCss = ".sc-ir-user-form-panel-h{--font-family-sans-serif:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;--font-family-monospace:'Quicksand', Georgia, 'Times New Roman', Times, serif !important}.logins-history-section.sc-ir-user-form-panel{margin-top:1.5rem}.sc-ir-user-form-panel-h h4.sc-ir-user-form-panel{font-family:inherit !important}.logins-history-list.sc-ir-user-form-panel{border-radius:8px;list-style-type:none;padding:0;margin:0;margin-top:1rem}.login-entry.sc-ir-user-form-panel{padding:0.25rem 0rem;border-bottom:1px solid #e4e5ec}.login-entry.sc-ir-user-form-panel:last-child{border:none}.login-meta.sc-ir-user-form-panel{display:flex;gap:0.5rem}.login-datetime.sc-ir-user-form-panel,.login-location.sc-ir-user-form-panel{margin:0;font-size:0.75rem;color:#374151;font-weight:500}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#6b7280;margin:0;word-break:break-word}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;margin-top:0.5rem;line-height:1.4}.login-user-agent.sc-ir-user-form-panel p.sc-ir-user-form-panel{margin:0}.ua-browser.sc-ir-user-form-panel{font-weight:600;color:#1f2937}.ua-os.sc-ir-user-form-panel{color:#374151}.ua-device.sc-ir-user-form-panel{font-style:italic;color:#6b7280}.login-location.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.login-location.sc-ir-user-form-panel span.sc-ir-user-form-panel{display:flex;align-items:center;gap:0.25rem}.login-location.sc-ir-user-form-panel i.sc-ir-user-form-panel{font-size:0.75rem;color:#9ca3af}";
const IrUserFormPanelStyle0 = irUserFormPanelCss;

const sheetCss = ".sc-ir-user-form-panel-h{height:100%}.sheet-container.sc-ir-user-form-panel{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-user-form-panel{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-user-form-panel{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-user-form-panel{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-user-form-panel{flex-direction:row;align-items:center}}";
const IrUserFormPanelStyle1 = sheetCss;

const IrUserFormPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        var _a;
        this.userTypes = (Map);
        this.isEdit = false;
        this.language = 'en';
        this.superAdminId = '5';
        this.allowedUsersTypes = [];
        this.isLoading = false;
        this.autoValidate = false;
        this.showFullHistory = false;
        this.userInfo = {
            type: '',
            id: -1,
            is_active: false,
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
        this.errors = null;
        this.showPasswordValidation = false;
        this.housekeepingService = new HouseKeepingService();
        this.userService = new UserService();
        this.disableFields = false;
        this.isPropertyAdmin = false;
        this.mobileMask = {};
        this.userSchema = z.object({
            mobile: z.string().min(1).max(20),
            email: z.string().email(),
            password: z
                .string()
                .nullable()
                // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
                .refine(password => {
                var _a;
                if (this.user && !((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.password)) {
                    return true;
                }
                return CONSTANTS.PASSWORD.test(password);
            }, { message: 'Password must be at least 8 characters long.' }),
            type: z.union([z.literal(1), z.literal((_a = this.superAdminId) !== null && _a !== void 0 ? _a : '5'), z.coerce.string().nonempty().min(2)]),
            username: z
                .string()
                .min(3)
                .refine(async (name) => {
                if (this.user && this.user.username) {
                    return true;
                }
                if (name.length >= 3) {
                    return !(await new UserService().checkUserExistence({ UserName: name }));
                }
                return true;
            }, { message: 'Username already exists.' }),
        });
    }
    //make user active by default
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = Object.assign(Object.assign({}, this.user), { password: '' });
            // this.disableFields = true;
        }
        this.isPropertyAdmin = this.userTypeCode.toString() === '17';
        if (this.isPropertyAdmin) {
            this.updateUserField('type', '16');
        }
        this.mobileMask = {
            mask: `{${calendar_data.country.phone_prefix}} 000000000000`,
            lazy: false,
            autofix: true,
            placeholderChar: '\u200B',
        };
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async createOrUpdateUser() {
        try {
            this.isLoading = true;
            this.emailErrorMessage = undefined;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = Object.assign(Object.assign({}, this.userInfo), { password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password, type: Number(this.userInfo.type) });
            console.log('toValidateUserInfo', Object.assign(Object.assign({}, toValidateUserInfo), { mobile: toValidateUserInfo.mobile.split(' ').join('').replace(calendar_data.country.phone_prefix, '') }));
            await this.userSchema.parseAsync(Object.assign(Object.assign({}, toValidateUserInfo), { mobile: toValidateUserInfo.mobile.split(' ').join('').replace(calendar_data.country.phone_prefix, '') }));
            if (this.errors) {
                this.errors = null;
            }
            await this.userService.handleExposedUser(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            const e = {};
            if (error instanceof ZodError) {
                console.error(error);
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
            }
            else if (error instanceof InterceptorError && error.code === 'EMAIL_EXISTS') {
                e['email'] = true;
                this.emailErrorMessage = 'This email is already in use. Please create another one.';
            }
            this.errors = e;
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name) {
            return;
        }
        const usermame = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', usermame);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return (h("form", { key: '3b114a3e72be6226f91c301dc9f30b758f8f0cd9', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, h("ir-title", { key: '1879c6e3eda4c5c04a6258680652598a55a3e03b', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? this.user.username : 'Create New User' }), h("section", { key: '9148a2c7a73e7f034a99ba514e0fe78437de0fa0', class: "px-1 sheet-body" }, h("ir-input-text", { key: 'f974f151bf77f8a9d28505489525ac807da51c2a', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.email, label: locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40, errorMessage: this.emailErrorMessage }), h("ir-input-text", { key: '68473cdbfe67d698f4db2d9349a2ee350bad7839', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: (_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile, asyncParse: true, autoValidate: this.user ? (((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile) !== this.user.mobile ? true : false) : this.autoValidate, label: "Mobile", mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), (this.user && ((_e = (_d = this.user) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.toString()) === this.superAdminId) || this.isPropertyAdmin ? null : (h("div", { class: "mb-1" }, h("ir-select", { testId: "user_type", error: ((_f = this.errors) === null || _f === void 0 ? void 0 : _f.type) && !this.userInfo.type, disabled: this.disableFields, label: "Role", data: this.allowedUsersTypes.map(t => ({
                text: t.value,
                value: t.code,
            })), selectedValue: (_g = this.userInfo.type) === null || _g === void 0 ? void 0 : _g.toString(), onSelectChange: e => this.updateUserField('type', e.detail) }))), ((_j = (_h = this.user) === null || _h === void 0 ? void 0 : _h.type) === null || _j === void 0 ? void 0 : _j.toString()) !== '5' && (h("ir-input-text", { key: '6026644c73603bec716006b374dd59ffbd7bed59', testId: "username", zod: this.userSchema.pick({ username: true }), wrapKey: "username", autoValidate: this.autoValidate, error: (_k = this.errors) === null || _k === void 0 ? void 0 : _k.username, label: "Username", disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('username', e.detail), value: this.userInfo.username, onInputBlur: this.handleBlur.bind(this), maxLength: 40 })), !this.user ? (h(Fragment, null, h("ir-input-text", { testId: "password", autoValidate: this.user ? (!((_l = this.userInfo) === null || _l === void 0 ? void 0 : _l.password) ? false : true) : this.autoValidate, label: 'Password', value: this.userInfo.password, type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: (_m = this.errors) === null || _m === void 0 ? void 0 : _m.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (this.haveAdminPrivileges &&
            this.user.type.toString() !== this.superAdminId &&
            (((_o = this.user) === null || _o === void 0 ? void 0 : _o.type.toString()) === '17' && ((_p = this.userTypeCode) === null || _p === void 0 ? void 0 : _p.toString()) === '17' ? null : (h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, h("h4", { class: "m-0 p-0 logins-history-title" }, "Password"), h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: "Change password", btn_color: "link" }))))), ((_r = (_q = this.user) === null || _q === void 0 ? void 0 : _q.sign_ins) === null || _r === void 0 ? void 0 : _r.length) > 0 && (h("section", { key: 'c9bb76a7b8ad94550b16a33b0a2b275d9312dd4e', class: "logins-history-section mt-2" }, h("div", { key: '964c25d340a02de0e6eb3f13cedd779e69ba3cf3', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, h("h4", { key: '897d91711a038e182d40d69af6234ed46cb8642b', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (h("ir-button", { key: 'bc7f916ff81062f67565866b052aea71fc0cf3c3', btn_styles: 'pr-0', text: !this.showFullHistory ? 'View all' : 'View less', btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), h("ul", { key: '68a255501b5af23c12835aacd1995986e54b50f4', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            var _a, _b, _c;
            const ua = uaParser_pack.exports.UAParser(s.user_agent);
            return (h("li", { class: "login-entry", key: s.date + '_' + i }, h("div", { class: "login-meta" }, h("p", { class: "login-datetime" }, hooks(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", _formatTime((_a = s.hour) === null || _a === void 0 ? void 0 : _a.toString(), (_b = s.minute) === null || _b === void 0 ? void 0 : _b.toString()), " |"), h("p", { class: "login-location" }, h("span", { class: "login-ip" }, "IP: ", s.ip), " \u00A0|\u00A0", h("span", { class: "login-country" }, "Location: ", s.country), " \u00A0|\u00A0", h("span", { class: "login-os" }, "OS: ", (_c = ua.os.name) !== null && _c !== void 0 ? _c : 'N/A', " ", ua.os.version)))));
        })))), h("ir-sidebar", { key: '01763aea1291baa25d9b9c0fcc4efd155ae43c01', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (h("ir-reset-password", { key: '764f64a4b498ae9ce82e89ad22401e87a59cab22', skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))), h("div", { key: 'd3d77dc55e9ef5335dfb6082c0acb4788efab9cd', class: "sheet-footer" }, h("ir-button", { key: 'dc243de925085baed7ffce01e99ec4f25f8fae48', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: 'c2ae20086b72b0b22c8957137ebef187b37ea9f2', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
    }
};
IrUserFormPanel.style = IrUserFormPanelStyle0 + IrUserFormPanelStyle1;

const irUserManagementCss = ".sc-ir-user-management-h{display:block;height:100%}";
const IrUserManagementStyle0 = irUserManagementCss;

const IrUserManagement = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isSuperAdmin = true;
        this.isLoading = true;
        this.users = [];
        this.allowedUsersTypes = [];
        this.token = new Token();
        this.roomService = new RoomService();
        this.userService = new UserService();
        this.bookingService = new BookingService();
        this.userTypes = new Map();
        this.superAdminId = '5';
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async initializeApp() {
        try {
            this.isLoading = true;
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
            const requests = [this.fetchUserTypes(), this.fetchUsers(), this.roomService.fetchLanguage(this.language)];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            await Promise.all(requests);
            this.socket = lookup('https://realtime.igloorooms.com/');
            this.socket.on('MSG', async (msg) => {
                await this.handleSocketMessage(msg);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleSocketMessage(msg) {
        const msgAsObject = JSON.parse(msg);
        if (!msgAsObject) {
            return;
        }
        const { REASON, KEY, PAYLOAD } = msgAsObject;
        if (KEY.toString() !== this.property_id.toString()) {
            return;
        }
        let result = JSON.parse(PAYLOAD);
        console.log(KEY, result);
        // const reasonHandlers: Partial<Record<bookingReasons, Function>> = {
        //   DORESERVATION: this.updateUserVerificationStatus,
        // };
        const reasonHandlers = {};
        const handler = reasonHandlers[REASON];
        if (handler) {
            await handler.call(this, result);
        }
        else {
            console.warn(`Unhandled REASON: ${REASON}`);
        }
    }
    updateUserVerificationStatus(result) {
        const users = [...this.users];
        const idx = users.findIndex(u => u.id === result.id);
        if (idx === -1) {
            console.warn(`User ${result.id} not found`);
            return;
        }
        users[idx] = Object.assign(Object.assign({}, users[idx]), { is_email_verified: result.is_email_verified });
        this.users = users;
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers();
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === this.superAdminId)
                    return 0;
                if (t === '17')
                    return 1;
                return 2;
            };
            //sort by priority
            const p1 = priority(u1), p2 = priority(u2);
            if (p1 !== p2) {
                return p1 - p2;
            }
            //sort by user id
            if (p1 === 1) {
                const id1 = u1.id.toString(), id2 = u2.id.toString(), me = this.userId.toString();
                if (id1 === me)
                    return -1; // u1 is me → goes before u2
                if (id2 === me)
                    return 1; // u2 is me → u1 goes after
            }
            // 3) sort by username
            return u1.username.localeCompare(u2.username);
        });
    }
    async fetchUserTypes() {
        var _a, _b, _c, _d;
        const res = await Promise.all([this.bookingService.getSetupEntriesByTableName('_USER_TYPE'), this.bookingService.getLov()]);
        const allowedUsers = (_b = (_a = res[1]) === null || _a === void 0 ? void 0 : _a.My_Result) === null || _b === void 0 ? void 0 : _b.allowed_user_types;
        for (const e of res[0]) {
            const value = e[`CODE_VALUE_${(_d = (_c = this.language) === null || _c === void 0 ? void 0 : _c.toUpperCase()) !== null && _d !== void 0 ? _d : 'EN'}`];
            if (allowedUsers.find(f => f.code === e.CODE_NAME)) {
                this.allowedUsersTypes.push({ code: e.CODE_NAME, value });
            }
            this.userTypes.set(e.CODE_NAME.toString(), value);
        }
    }
    disconnectedCallback() {
        this.socket.disconnect();
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("ir-loading-screen", null)));
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", { suppressToastEndpoints: ['/Change_User_Pwd', '/Handle_Exposed_User'] }), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, h("h3", { class: "mb-1 mb-md-0" }, "Extranet Users")), h("div", { class: "", style: { gap: '1rem' } }, h("ir-user-management-table", { allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: [this.superAdminId, '17'].includes((_a = this.userTypeCode) === null || _a === void 0 ? void 0 : _a.toString()), userTypes: this.userTypes, class: "card", isSuperAdmin: ((_b = this.userTypeCode) === null || _b === void 0 ? void 0 : _b.toString()) === this.superAdminId, users: this.users })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrUserManagement.style = IrUserManagementStyle0;

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:block}.badge.sc-ir-user-management-table{border:none;padding:0.2rem 0.3rem}.badge.sc-ir-user-management-table:disabled{cursor:default}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const tableCss = ".ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table:last-child{width:100%}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:#e3f3fa !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--blue)}";
const IrUserManagementTableStyle1 = tableCss;

const IrUserManagementTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.resetData = createEvent(this, "resetData", 7);
        this.users = [];
        this.userTypes = new Map();
        this.superAdminId = '5';
        this.allowedUsersTypes = [];
        this.currentTrigger = null;
        this.user = null;
        this.userService = new UserService();
    }
    componentWillLoad() {
        this.assignPermissions();
    }
    handleChange(n, o) {
        if (n !== o) {
            this.assignPermissions();
        }
    }
    assignPermissions() {
        this.canCreate = this.haveAdminPrivileges;
        this.canDelete = this.haveAdminPrivileges;
        this.canEdit = true;
    }
    async handleUserActiveChange(e, user) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.userService.handleExposedUser({
            email: user.email,
            id: user.id,
            is_active: e.detail,
            mobile: user.mobile,
            password: user.password,
            type: user.type,
            username: user.username,
        });
        this.toast.emit({
            position: 'top-right',
            title: 'Saved Successfully',
            description: '',
            type: 'success',
        });
    }
    async executeUserAction(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            await this.userService.handleExposedUser({
                email: this.user.email,
                id: this.user.id,
                is_active: this.user.is_active,
                is_email_verified: this.modalType === 'verify' ? false : this.user.is_email_verified,
                mobile: this.user.mobile,
                password: this.user.password,
                type: this.user.type,
                username: this.user.username,
                is_to_remove: this.modalType === 'delete',
            });
            this.resetData.emit(null);
        }
        finally {
            this.resetModalState();
            this.modalRef.closeModal();
        }
    }
    // private async sendVerificationEmail(user: User) {
    //   try {
    //     console.log(user);
    //     await this.userService.sendVerificationEmail();
    //     this.toast.emit({
    //       position: 'top-right',
    //       title: `We've sent a verification email to ${this.maskEmail(user.email)}.`,
    //       description: '',
    //       type: 'success',
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    renderCurrentTrigger() {
        var _a, _b;
        if (!this.currentTrigger) {
            return null;
        }
        return (h("ir-user-form-panel", { superAdminId: this.superAdminId, allowedUsersTypes: this.allowedUsersTypes, userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
    }
    openModal(user, type) {
        if (!this.modalRef || !user) {
            return;
        }
        this.user = user;
        this.modalType = type;
        this.modalRef.openModal();
    }
    maskEmail(email) {
        if (!email || !email.includes('@'))
            return '';
        const [localPart, domain] = email.split('@');
        const visible = localPart.slice(0, 1); // show only the first letter
        const masked = '*'.repeat(Math.max(localPart.length - 1, 1)); // mask rest
        return `${visible}${masked}@${domain}`;
    }
    resetModalState() {
        this.user = null;
        this.modalType = null;
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        return (h(Host, { key: '33f6ffa76bb68394e025f14605e6593aaa7529e1' }, h("section", { key: '74a4db0a20b729b17ce3075d3e75c045f84ba4a1', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, h("table", { key: 'f71226d515a4140945f5ed67a960e499bbb21fbf', class: "table" }, h("thead", { key: '218b4b18db75f9505cce33b690f2deae323ccd91' }, h("tr", { key: '1857d95123569a0d1204c3d1ea926bf9f6e6384b' }, h("th", { key: 'a687d7adba56b6253791c9585b624a13ba7529f9', class: "text-left" }, (_a = locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), h("th", { key: '56d71ca83aaf39ee11c2251ae0d4be0f36983c64', class: "text-left" }, locales.entries.Lcz_Email), h("th", { key: '607bd8e4f99e6cc58ce0d774d62810c7a50b1a75', class: "text-left" }, (_b = locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), h("th", { key: 'e7dede6c828323043fb0ef89b147ac07f19bef30', class: "text-left" }, "Role"), h("th", { key: 'eefc7fb5fc53706104ae34af8534a2b113f6aa51', class: "text-left" }, "Last signed in"), h("th", { key: 'b395288a55e110035a76f6640d9298e15e1aff01', class: "text-left" }, "Created at"), this.haveAdminPrivileges && h("th", { key: '25fe309df42a910e4e4bb413d718999c235e63a4' }, "Active"), this.haveAdminPrivileges && h("th", { key: '0d9adb3747b8c85e99f9125582360f9c8af1e851' }, "Email verified"), h("th", { key: '13fc8adee58ef27652c16cfb4b432ea7e017a613', class: 'action-row' }, this.canCreate && (h("ir-icon", { key: '5caa58cea76a18eed1191a1803c40b143f78d1d1', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, h("svg", { key: '257ddf86c3019ee8535406cf72da48002ba87703', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, h("path", { key: '8cdc9d8797e534b9dc389385fbf4cbdb8cbe0e1b', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), h("tbody", { key: 'bc5981b4cac5c610d77d873abc9fae64f160b5c3' }, this.users.map(user => {
            var _a;
            const isUserSuperAdmin = user.type.toString() === this.superAdminId;
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            return (h("tr", { key: user.id, class: "ir-table-row" }, h("td", null, user.username), h("td", null, user.email), h("td", null, (_a = user.mobile) !== null && _a !== void 0 ? _a : 'N/A'), h("td", null, user.type.toString() === this.superAdminId ? 'Super admin' : this.userTypes.get(user.type.toString())), h("td", null, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? hooks(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + _formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A'), h("td", null, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : hooks(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), this.haveAdminPrivileges && (h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active }))), this.haveAdminPrivileges && (h("td", null, h("p", { "data-testid": "user-verification",
                // title={user.is_email_verified ? '' : 'Click to resend verification email.'}
                class: `m-0 badge ${user.is_email_verified ? 'badge-success' : 'badge-danger'}` }, user.is_email_verified ? 'Verified' : 'Not verified'))), h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (h("div", { class: "icons-container  d-flex align-items-center", style: { gap: '0.5rem' } }, this.canEdit && (h("ir-icon", { "data-testid": "edit", title: locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                    this.currentTrigger = {
                        type: 'user',
                        isEdit: true,
                        user,
                    };
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (h("ir-icon", { "data-testid": "delete", title: locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                    this.openModal(user, 'delete');
                } }, h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))));
        })))), h("ir-sidebar", { key: '4fb43609475a2039ef142e2a580209dbf7275183', open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), h("ir-modal", { key: 'f9180ee618146d8e7952856917618aea09ce2bf9', autoClose: false, modalBody: this.modalType === 'delete' ? `Are you sure you want to delete ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?` : `Are you sure you want to unverify ${this.maskEmail((_f = this.user) === null || _f === void 0 ? void 0 : _f.email)}`, rightBtnColor: "danger", isLoading: isRequestPending('/Handle_Exposed_User'), onCancelModal: this.resetModalState.bind(this), rightBtnText: this.modalType === 'verify' ? locales.entries.Lcz_Confirm : locales.entries.Lcz_Delete, onConfirmModal: this.executeUserAction.bind(this), ref: el => (this.modalRef = el) })));
    }
    static get watchers() { return {
        "haveAdminPrivileges": ["handleChange"]
    }; }
};
IrUserManagementTable.style = IrUserManagementTableStyle0 + IrUserManagementTableStyle1;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
const RequirementCheckStyle0 = requirementCheckCss;

const RequirementCheck = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether this requirement has been satisfied (true/false).
         */
        this.isValid = false;
        /**
         * The requirement text to display (e.g. "At least one lowercase letter").
         */
        this.text = '';
    }
    render() {
        return (h("div", { key: 'd49be60e576313633e5b64319f3815904489b814', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'c17dcd398826e6b445b4abde95cf148a0f359e84', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'c40e310e17429b9ffa6d393dd5194c69f445b1d9' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrButton as ir_button, IrCommon as ir_common, IrIcon as ir_icon, IrIcons as ir_icons, IrInputText as ir_input_text, IrInterceptor as ir_interceptor, IrLoadingScreen as ir_loading_screen, IrModal as ir_modal, IrOtp as ir_otp, IrOtpModal as ir_otp_modal, IrPasswordValidator as ir_password_validator, IrResetPassword as ir_reset_password, IrSelect as ir_select, IrSidebar as ir_sidebar, IrSwitch as ir_switch, IrTitle as ir_title, IrToast as ir_toast, IrUserFormPanel as ir_user_form_panel, IrUserManagement as ir_user_management, IrUserManagementTable as ir_user_management_table, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-button_21.entry.js.map