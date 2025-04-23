'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const v4 = require('./v4-9b297151.js');
const icons = require('./icons-bda9ba7f.js');
const index$1 = require('./index-e9a28e3e.js');
const axios = require('./axios-6e678d52.js');
const irInterceptor_store = require('./ir-interceptor.store-77ca6836.js');
const Token = require('./Token-049041c2.js');
const authenticate_service = require('./authenticate.service-eff00d14.js');
const user_service = require('./user.service-97b2c0e2.js');
const index$2 = require('./index-db8b30d9.js');
const utils = require('./utils-3227b0c9.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const housekeeping_service = require('./housekeeping.service-c883b967.js');
const calendarData = require('./calendar-data-004d3283.js');
const functions = require('./functions-1d46da3c.js');
const moment = require('./moment-1780b03a.js');
const _commonjsHelpers = require('./_commonjsHelpers-b3309d7b.js');
const booking_service = require('./booking.service-bc3e3d2d.js');
const room_service = require('./room.service-89962a18.js');
require('./index-467172e1.js');

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler", 7);
        this.icon = 'ft-save';
        this.btn_color = 'primary';
        this.size = 'md';
        this.textSize = 'md';
        this.btn_block = true;
        this.btn_disabled = false;
        this.btn_type = 'button';
        this.isLoading = false;
        this.btn_id = v4.v4();
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
            return (index.h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: disabled }, this.isLoading ? index.h("span", { class: "icon-loader" }) : index.h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (index.h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: disabled }, this.icon_name && this.iconPosition === 'left' && index.h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (index.h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (index.h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? index.h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && index.h("ir-icons", { style: this.icon_style, name: this.icon_name })));
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
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: 'a8a9e15968f06876384ab2f4b64823849a51d875' }, index.h("slot", { key: '444f939a52cd612ea164e08b3903a19d91039dfa' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconClickHandler = index.createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (index.h("button", { key: 'a7382fe52469d13bcb85ac3cbdc99b36f9cde734', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: '49ea3dfc872b7553ce5585581ba876ef59a4de0b', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

const irIconsCss = ".sc-ir-icons-h{display:block;box-sizing:border-box;margin:0;padding:0}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}";
const IrIconsStyle0 = irIconsCss;

const IrIcons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const svgPath = icons.icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, index.h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = IrIconsStyle0;

const irInputTextCss = ".sc-ir-input-text-h{margin:0;padding:0;display:inline}.border-theme.sc-ir-input-text{border:1px solid #cacfe7}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:#1e9ff2 !important}.error-message.sc-ir-input-text{font-size:0.875rem;padding:0;margin:0.5rem 0 0;color:var(--red, #ff4961)}.ir-input[data-state='empty'].sc-ir-input-text{color:#bbbfc6}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--blue)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--red, #ff4961)}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.inputBlur = index.createEvent(this, "inputBlur", 7);
        this.inputFocus = index.createEvent(this, "inputFocus", 7);
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
            this.id = v4.v4();
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
        this.maskInstance = index$1.IMask(this.inputRef, this.mask);
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
        console.log('autoValidate=>', this.autoValidate);
        if (!this.autoValidate && !forceValidation) {
            console.log('here', 'error', this.error);
            if (this.error) {
                this.updateErrorState(false);
            }
            return;
        }
        console.log('first');
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
            return (index.h("fieldset", { class: "position-relative has-icon-left input-container" }, index.h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, index.h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, index.h("slot", { name: "icon" }))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })));
        }
        return (index.h("div", { class: 'form-group' }, index.h("div", { class: "input-group row m-0" }, this.label && (index.h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && index.h("p", { class: "error-message" }, this.errorMessage)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "mask": ["handleMaskChange"],
        "autoValidate": ["handleMaskChange1"],
        "value": ["handleValueChange"]
    }; }
};
IrInputText.style = IrInputTextStyle0;

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.endpointsCount = 0;
        this.isPageLoadingStopped = null;
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStopped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    setupAxiosInterceptors() {
        axios.axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        irInterceptor_store.interceptor_requests[extractedUrl] = 'pending';
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
    handleResponse(response) {
        var _a;
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        irInterceptor_store.interceptor_requests[extractedUrl] = 'done';
        if ((_a = response.data.ExceptionMsg) === null || _a === void 0 ? void 0 : _a.trim()) {
            this.handleError(response.data.ExceptionMsg);
            throw new Error(response.data.ExceptionMsg);
        }
        return response;
    }
    handleError(error) {
        this.toast.emit({
            type: 'error',
            title: error,
            description: '',
            position: 'top-right',
        });
        return Promise.reject(error);
    }
    render() {
        return (index.h(index.Host, { key: '8a9a04ba9e198dd54eccf8f815ba8f44d253aefa' }, this.isLoading && !this.isPageLoadingStopped && (index.h("div", { key: '1d68df27f000329d5b92bc4555cdcb44bf879523', class: "loadingScreenContainer" }, index.h("div", { key: 'c02de485fa7ab2324c77de36d08dfec1d3a5e0fb', class: "loaderContainer" }, index.h("span", { key: '3229a7aac22a5968b1529281784eff50222f6906', class: "page-loader" }))))));
    }
};
IrInterceptor.style = IrInterceptorStyle0;

const irLoadingScreenCss = ".sc-ir-loading-screen-h{display:fixed;height:100vh;width:100vw;z-index:1000;top:0;left:0;display:flex;align-items:center;justify-content:center;background:white}.loader.sc-ir-loading-screen{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-loading-screen{position:absolute;z-index:100001;padding:20px;top:50%;left:50%;transform:translate(-50%, -50%);background:white;display:flex;align-items:center;justify-content:center;gap:20px;border-radius:5px}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrLoadingScreenStyle0 = irLoadingScreenCss;

const IrLoadingScreen = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.message = '';
    }
    render() {
        return (index.h(index.Host, { key: '75752a042844a0a8a515100fd8f481c64231360a' }, index.h("span", { key: 'd6a0b21889ebb3da754379d71db383178f7240e8', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:10px;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrModalStyle0 = irModalCss;

const IrModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.confirmModal = index.createEvent(this, "confirmModal", 7);
        this.cancelModal = index.createEvent(this, "cancelModal", 7);
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
            index.h("div", { key: 'd694ff2379a7c0ed3d0913654880f72139202f1a', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            index.h("div", { key: 'd74e90f016581d77865b99c45f0208685af3dddf', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, index.h("div", { key: '9e8491d54aa113c7314053533d71e0809ade38f7', class: `ir-alert-content p-2` }, this.showTitle && (index.h("div", { key: '125fa3c6cea2628c432b745cbb64383e873df826', class: `ir-alert-header` }, index.h("p", { key: '899576520d33cf8440da7f640326e6d3f2374be1' }, this.modalTitle))), index.h("div", { key: 'bdf9b0596c80bebbddd9702c22b74187416f9b9e', class: "modal-body text-left p-0 mb-2" }, index.h("div", { key: 'e7a61ddeee48b8a0a275f3576ba41bbc339d2dc5' }, this.modalBody)), index.h("div", { key: 'd12b94f1015aae55c25eaca0bc51907f69f88fd7', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (index.h("ir-button", { key: '45dd56f1950e70b4a73c41c5d7744c98f6483ff8', btn_disabled: this.isLoading, icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText })), this.rightBtnActive && (index.h("ir-button", { key: '2d01abcd9b89a8f08fd8e1672e6b4b5473c680df', icon: '', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.passwordValidationChange = index.createEvent(this, "passwordValidationChange", 7);
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
        return (index.h("div", { key: '9b5f8a0bb646206b3157cb0f612527e21c7d183a', class: "m-0 p-0" }, index.h("requirement-check", { key: '65f7e8cbceb5d17ba488bfd6a8ef2afc600ee93b', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '8b7696b933865eff8713101046c409456edbd978', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '148ea22b97b49aeb8a6f8d7b015c630891ec4942', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '5d21d1cdfefe4e25a11a81896e4ea7f9904d38f5', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '1e205e0ffef26905771957d01e6455ef4f61e45c', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        index.registerInstance(this, hostRef);
        this.authFinish = index.createEvent(this, "authFinish", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.token = new Token.Token();
        this.authService = new authenticate_service.AuthService();
        this.ResetPasswordSchema = index$2.z.object({
            password: index$2.z.string().regex(user_service.CONSTANTS.PASSWORD),
            confirm_password: index$2.z
                .string()
                .nullable()
                .refine(password => {
                if (!user_service.CONSTANTS.PASSWORD.test(password)) {
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
                this.submitted = true;
            }
            if (this.el.slot === 'sidebar-body') {
                this.closeSideBar.emit();
            }
        }
        catch (error) {
            if (error instanceof index$2.ZodError) {
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
        return (index.h("div", { key: '8575aef0bf7e629674467a3048b4387f0d4d5eb7', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, index.h("ir-interceptor", { key: '798918b63b1b182a9708a87e5de8a51f3910c496' }), index.h("ir-toast", { key: '998f4cb2c1a68cd8f2ab320d8e15195daeca0f70' }), index.h("form", { key: '405b077b9f50af7a0c830502d80c67855b259856', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && index.h("ir-title", { key: 'cd0bf1ad3fe2fd3df294dcd7632f2ea97cceb9c5', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), index.h("div", { key: 'b5102e76eda2592a86e702ddadcdd79a5fabc74d', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, index.h("svg", { key: '949367cd74ca22efa3c63ed3ed262375877b4861', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, index.h("path", { key: '5580257f3f1d402dd8b08d44ff42944a134f6796', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), index.h("div", { key: '1a5e48e3cefa8a4c45a5f7f5a3fbe2e99fe21f19', class: "text-center mb-2" }, index.h("h4", { key: 'e2cf001749902de1a9ca9aaad93066bed7cae15a', class: "mb-1" }, "Set new Password"), this.submitted ? (index.h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (index.h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (index.h("section", { key: '44d0eb23961128e8ca558e9190325d3fbf5e5cf2' }, index.h("div", { key: 'ba9178b3e9202212e86514d4ffbb0f41fff92941', class: 'mb-2' }, index.h("div", { key: '8d2b28a4d25265cd4844bcb29ceef96e9878e6c1', class: "m-0 p-0" }, index.h("div", { key: '7fbe083d7e6d62dd4d801552b44d77c6199065b9', class: 'position-relative' }, index.h("ir-input-text", { key: '94d4401605ddaa70765c759d17336ddd0516521c', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New Password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && index.h("ir-password-validator", { key: 'f732c8cd3f156c98680c1c7792e1f145b7c414b8', class: "mb-1", password: this.password })), index.h("div", { key: 'a13421ee45622b4e4a3aea38aef0b2602f3e9540', class: 'position-relative' }, index.h("ir-input-text", { key: '7c0e8116659026e3da6cac96ac9cfd8f24722f3e', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm Password", type: 'password' }))), !insideSidebar && index.h("ir-button", { key: '288b373e34337d7836ee5919eccb72a5a39fb218', isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md", class: "login-btn mt-1" })))), insideSidebar && (index.h("div", { key: '7dbd7973637e65c1b2a3815c878821f23175a40e', class: 'sheet-footer w-full' }, index.h("ir-button", { key: '91f583944f9474fd645b24d1feec8256b18aadf6', text: 'Cancel', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), index.h("ir-button", { key: '75166d0b4be19366f07af8ee555da14ed8668cc9', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: 'Change password', size: "md" }))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = IrResetPasswordStyle0 + IrResetPasswordStyle1;

const irSelectCss = ".border-theme.sc-ir-select{border:1px solid #cacfe7}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}.bounce-3.sc-ir-select{animation:bounce 1s 1}";
const IrSelectStyle0 = irSelectCss;

const IrSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.selectChange = index.createEvent(this, "selectChange", 7);
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
        this.select_id = v4.v4();
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
        let label = (index.h("div", { key: 'f5249c076a3874bee3bf12f1f71e2e28e2690842', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { key: '95b70d85097c3ea1df1c6b1dc6a26fa7cf66b43c', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (index.h("div", { key: '2694607e02f8a68b12379ecb9f46234c9eb4e98f', class: `form-group m-0 ${this.selectContainerStyle}` }, index.h("div", { key: '954a1e07f4226f813f5b4025a4beb1f40f916862', class: "input-group row m-0" }, label, index.h("select", { key: 'd4582cd6369df9b7fe40c4b990460c2ee41fa6e4', disabled: this.disabled, "aria-invalid": this.error ? 'true' : 'false', "data-testid": this.testId, style: this.selectForcedStyles, ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${this.error ? 'border-danger' : ''} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && index.h("option", { key: '783976daa074583f432180f035864e207fbde0e5', value: '' }, this.firstOption), this.data.map(item => {
            if (this.selectedValue === item.value) {
                return (index.h("option", { selected: true, value: item.value }, item.text));
            }
            else {
                return index.h("option", { value: item.value }, item.text);
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
        index.registerInstance(this, hostRef);
        this.irSidebarToggle = index.createEvent(this, "irSidebarToggle", 7);
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
            utils.handleBodyOverflow(newValue);
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
            index.h("div", { key: 'e71138cc77f0ae37ff5e390b8e4e78ffb1b7e592', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            index.h("div", { key: '9e86384b9762413590bf77a63ba1f385bd1478d6', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (index.h("div", { key: '3f7ee6caa4fc8e528b00a8c793d1bd462367fff6', class: 'sidebar-title' }, index.h("p", { key: 'cde985e2b02439186ec8144916f97ad80b383f0c', class: 'p-0 m-0' }, this.label), index.h("div", { key: '7cd214f78403946a008b3aab3d811d76901b170c', class: 'p-0 m-0 sidebar-icon-container' }, index.h("ir-icon", { key: '3f1334481f6f441bafa32facbc23b838d6d65866', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, index.h("svg", { key: '38be788f579a85ad39989874edacc9262f3eedb8', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '32f79a1b58e03dd49e282e7502ee460bc3ddfc71', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), index.h("slot", { key: '277497e81cba24e1f9c0e4b2a128ec8619d1633a', name: "sidebar-body" })),
        ];
    }
    get el() { return index.getElement(this); }
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
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange", 7);
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
        return (index.h(index.Host, { key: 'bc855d3ca30151334a79050424aa170222a938fc' }, index.h("button", { key: 'd72172dc881de25a2116f1f03c0d0e7d1dd14a10', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, index.h("span", { key: '6c50d5b1863693a7bc355cbeb3f1e58f7ed5213c', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), index.h("input", { key: 'e42826a78e46db9fe326c0982233b67f221618a4', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
    }
};
IrSwitch.style = IrSwitchStyle0;

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
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
        return (index.h(index.Host, { key: '45b59c38518c49c24dcc7feb2b500e05b1e84fdb' }, index.h("h4", { key: '21ee79bf959871d69576e7a3fdaa363ff2c8d0b1', class: "text-left font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: 'e0e38259e0cd0e5728e8b70b7a01a2864937534e', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '4758cc4b33709b30a870bf2d57ee9f1eee67f438', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '83cb9be650ccd91cbccb0bdc18290f9448ff26b0', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: 'fe6626c1e9fbac790de304edfc112ffc16a99ff1', class: 'title-body' }, index.h("slot", { key: '14687c5c281f0febd57b3de1206459b21e14c65e', name: "title-body" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

const irToastCss = "button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-success:#2b9a66;position:fixed;bottom:0;right:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}[position='top-left'].sc-ir-toast-h{top:0;left:0}[position='top-right'].sc-ir-toast-h{top:0;right:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;left:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;right:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(var(--rd-offset-width))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}";
const IrToastStyle0 = irToastCss;

const IrToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return index.h(index.Host, { key: '3799aabe2d1c1b6cfffc5d81cda4feffeb6b3c3b' });
    }
    get element() { return index.getElement(this); }
};
IrToast.style = IrToastStyle0;

var uaParser_pack = {exports: {}};

/* UAParser.js v2.0.3
   Copyright © 2012-2025 Faisal Salman <f@faisalman.com>
   AGPLv3 License */

(function (module, exports) {
((i,l)=>{function U(i){for(var e={},t=0;t<i.length;t++)e[i[t].toUpperCase()]=i[t];return e}var E=500,P="user-agent",w="",B="?",R="function",n="undefined",c="object",V="string",u="browser",h="cpu",p="device",m="engine",f="os",g="result",v="name",k="type",x="vendor",y="version",C="architecture",L="major",T="model",G="console",S="mobile",r="tablet",e="smarttv",t="wearable",F="xr",D="embedded",$="inapp",W="brands",_="formFactors",X="fullVersionList",q="platform",Y="platformVersion",K="bitness",o="sec-ch-ua",Q=o+"-full-version-list",Z=o+"-arch",J=o+"-"+K,ii=o+"-form-factors",ei=o+"-"+S,ti=o+"-"+T,oi=o+"-"+q,ri=oi+"-version",ai=[W,X,S,T,q,Y,C,_,K],si="Amazon",a="Apple",ni="ASUS",wi="BlackBerry",s="Google",bi="Huawei",di="Microsoft",li="Motorola",ci="Nvidia",ui="OnePlus",hi="OPPO",pi="Samsung",mi="Sony",fi="Xiaomi",gi="Zebra",vi="Chromium",b="Chromecast",ki="Firefox",d="Opera",xi="Facebook",A="Mobile ",yi=" Browser",Ci="Windows",Ti=typeof i!==n,z=Ti&&i.navigator?i.navigator:l,O=z&&z.userAgentData?z.userAgentData:l,Si=function(i,e){if(typeof i===c&&0<i.length){for(var t in i)if(M(i[t])==M(e))return !0;return !1}return !!H(i)&&-1!==M(e).indexOf(M(i))},_i=function(i,e){for(var t in i)return /^(browser|cpu|device|engine|os)$/.test(t)||!!e&&_i(i[t])},H=function(i){return typeof i===V},qi=function(i){if(!i)return l;for(var e,t=[],o=zi(/\\?\"/g,i).split(","),r=0;r<o.length;r++)-1<o[r].indexOf(";")?(e=Hi(o[r]).split(";v="),t[r]={brand:e[0],version:e[1]}):t[r]=Hi(o[r]);return t},M=function(i){return H(i)?i.toLowerCase():i},Ai=function(i){return H(i)?zi(/[^\d\.]/g,i).split(".")[0]:l},j=function(i){for(var e in i){e=i[e];typeof e==c&&2==e.length?this[e[0]]=e[1]:this[e]=l;}return this},zi=function(i,e){return H(e)?e.replace(i,w):e},Oi=function(i){return zi(/\\?\"/g,i)},Hi=function(i,e){if(H(i))return i=zi(/^\s\s*/,i),typeof e===n?i:i.substring(0,E)},Mi=function(i,e){if(i&&e)for(var t,o,r,a,s,n=0;n<e.length&&!a;){for(var w=e[n],b=e[n+1],d=t=0;d<w.length&&!a&&w[d];)if(a=w[d++].exec(i))for(o=0;o<b.length;o++)s=a[++t],typeof(r=b[o])===c&&0<r.length?2===r.length?typeof r[1]==R?this[r[0]]=r[1].call(this,s):this[r[0]]=r[1]:3===r.length?typeof r[1]!==R||r[1].exec&&r[1].test?this[r[0]]=s?s.replace(r[1],r[2]):l:this[r[0]]=s?r[1].call(this,s,r[2]):l:4===r.length&&(this[r[0]]=s?r[3].call(this,s.replace(r[1],r[2])):l):this[r]=s||l;n+=2;}},N=function(i,e){for(var t in e)if(typeof e[t]===c&&0<e[t].length){for(var o=0;o<e[t].length;o++)if(Si(e[t][o],i))return t===B?l:t}else if(Si(e[t],i))return t===B?l:t;return e.hasOwnProperty("*")?e["*"]:i},ji={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Ni={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":l},Ii={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[y,[v,A+"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[y,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,y],[/opios[\/ ]+([\w\.]+)/i],[y,[v,d+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[y,[v,d+" GX"]],[/\bopr\/([\w\.]+)/i],[y,[v,d]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[y,[v,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[y,[v,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:lg |qute)browser)\/([-\w\.]+)/i,/(heytap|ovi|115|surf)browser\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[v,y],[/quark(?:pc)?\/([-\w\.]+)/i],[y,[v,"Quark"]],[/\bddg\/([\w\.]+)/i],[y,[v,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[y,[v,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[y,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[y,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[y,[v,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[y,[v,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[y,[v,"Smart Lenovo"+yi]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure"+yi],y],[/\bfocus\/([\w\.]+)/i],[y,[v,ki+" Focus"]],[/\bopt\/([\w\.]+)/i],[y,[v,d+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[y,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[y,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[y,[v,d+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[y,[v,"MIUI"+yi]],[/fxios\/([\w\.-]+)/i],[y,[v,A+ki]],[/\bqihoobrowser\/?([\w\.]*)/i],[y,[v,"360"]],[/\b(qq)\/([\w\.]+)/i],[[v,/(.+)/,"$1Browser"],y],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1"+yi],y],[/samsungbrowser\/([\w\.]+)/i],[y,[v,pi+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[y,[v,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[v,"Sogou Mobile"],y],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[v,y],[/(lbbrowser|rekonq)/i],[v],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[y,v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,xi],y,[k,$]],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(instagram|snapchat)[\/ ]([-\w\.]+)/i],[v,y,[k,$]],[/\bgsa\/([\w\.]+) .*safari\//i],[y,[v,"GSA"],[k,$]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[y,[v,"TikTok"],[k,$]],[/\[(linkedin)app\]/i],[v,[k,$]],[/(chromium)[\/ ]([-\w\.]+)/i],[v,y],[/headlesschrome(?:\/([\w\.]+)| )/i],[y,[v,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,"Chrome WebView"],y],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[y,[v,"Android"+yi]],[/chrome\/([\w\.]+) mobile/i],[y,[v,A+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,y],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[y,[v,A+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[v,A+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[y,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[y,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[v,y],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[v,A+ki],y],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],y],[/(wolvic|librewolf)\/([\w\.]+)/i],[v,y],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[y,[v,ki+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[v,[y,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[v,[y,/[^\d\.]+./,w]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[C,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[C,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[C,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[C,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[C,"arm"]],[/((ppc|powerpc)(64)?)( mac|;|\))/i],[[C,/ower/,w,M]],[/ sun4\w[;\)]/i],[[C,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i],[[C,M]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[T,[x,pi],[k,r]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[T,[x,pi],[k,S]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[T,[x,a],[k,S]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[T,[x,a],[k,r]],[/(macintosh);/i],[T,[x,a]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[T,[x,"Sharp"],[k,S]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[T,[x,"Honor"],[k,r]],[/honor([-\w ]+)[;\)]/i],[T,[x,"Honor"],[k,S]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[T,[x,bi],[k,r]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[T,[x,bi],[k,S]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[T,/_/g," "],[x,fi],[k,r]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,/ ([\w ]+) miui\/v?\d/i],[[T,/_/g," "],[x,fi],[k,S]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[T,[x,hi],[k,S]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[T,[x,N,{OnePlus:["304","403","203"],"*":hi}],[k,r]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[T,[x,"BLU"],[k,S]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[T,[x,"Vivo"],[k,S]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[T,[x,"Realme"],[k,S]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto(?! 360)[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[T,[x,li],[k,S]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[T,[x,li],[k,r]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[T,[x,"LG"],[k,r]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch))(\w+)/i,/\blg-?([\d\w]+) bui/i],[T,[x,"LG"],[k,S]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[T,[x,"Lenovo"],[k,r]],[/(nokia) (t[12][01])/i],[x,T,[k,r]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*))/i],[[T,/_/g," "],[k,S],[x,"Nokia"]],[/(pixel (c|tablet))\b/i],[T,[x,s],[k,r]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[T,[x,s],[k,S]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[T,[x,mi],[k,S]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[T,"Xperia Tablet"],[x,mi],[k,r]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[T,[x,ui],[k,S]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[T,[x,si],[k,r]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[T,/(.+)/g,"Fire Phone $1"],[x,si],[k,S]],[/(playbook);[-\w\),; ]+(rim)/i],[T,x,[k,r]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[T,[x,wi],[k,S]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[T,[x,ni],[k,r]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[T,[x,ni],[k,S]],[/(nexus 9)/i],[T,[x,"HTC"],[k,r]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[x,[T,/_/g," "],[k,S]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[T,[x,"TCL"],[k,r]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[T,[x,"TCL"],[k,S]],[/(itel) ((\w+))/i],[[x,M],T,[k,N,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[T,[x,"Acer"],[k,r]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[T,[x,"Meizu"],[k,S]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[T,[x,"Ulefone"],[k,S]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[T,[x,"Energizer"],[k,S]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[T,[x,"Cat"],[k,S]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[T,[x,"Smartfren"],[k,S]],[/droid.+; (a(?:015|06[35]|142p?))/i],[T,[x,"Nothing"],[k,S]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[T,[x,"Archos"],[k,r]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[T,[x,"Archos"],[k,S]],[/(imo) (tab \w+)/i,/(infinix) (x1101b?)/i],[x,T,[k,r]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|hmd|imo|tcl)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i,/(oppo) ?([\w ]+) bui/i],[x,T,[k,S]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[x,T,[k,r]],[/(surface duo)/i],[T,[x,di],[k,r]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[T,[x,"Fairphone"],[k,S]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[T,[x,ci],[k,r]],[/(sprint) (\w+)/i],[x,T,[k,S]],[/(kin\.[onetw]{3})/i],[[T,/\./g," "],[x,di],[k,S]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[T,[x,gi],[k,r]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[T,[x,gi],[k,S]],[/smart-tv.+(samsung)/i],[x,[k,e]],[/hbbtv.+maple;(\d+)/i],[[T,/^/,"SmartTV"],[x,pi],[k,e]],[/tcast.+(lg)e?. ([-\w]+)/i],[x,T,[k,e]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[x,"LG"],[k,e]],[/(apple) ?tv/i],[x,[T,a+" TV"],[k,e]],[/crkey.*devicetype\/chromecast/i],[[T,b+" Third Generation"],[x,s],[k,e]],[/crkey.*devicetype\/([^/]*)/i],[[T,/^/,"Chromecast "],[x,s],[k,e]],[/fuchsia.*crkey/i],[[T,b+" Nest Hub"],[x,s],[k,e]],[/crkey/i],[[T,b],[x,s],[k,e]],[/(portaltv)/i],[T,[x,xi],[k,e]],[/droid.+aft(\w+)( bui|\))/i],[T,[x,si],[k,e]],[/(shield \w+ tv)/i],[T,[x,ci],[k,e]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[T,[x,"Sharp"],[k,e]],[/(bravia[\w ]+)( bui|\))/i],[T,[x,mi],[k,e]],[/(mi(tv|box)-?\w+) bui/i],[T,[x,fi],[k,e]],[/Hbbtv.*(technisat) (.*);/i],[x,T,[k,e]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[x,Hi],[T,Hi],[k,e]],[/droid.+; ([\w- ]+) (?:android tv|smart[- ]?tv)/i],[T,[k,e]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[k,e]],[/(ouya)/i,/(nintendo) (\w+)/i],[x,T,[k,G]],[/droid.+; (shield)( bui|\))/i],[T,[x,ci],[k,G]],[/(playstation \w+)/i],[T,[x,mi],[k,G]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[T,[x,di],[k,G]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[T,[x,pi],[k,t]],[/((pebble))app/i,/(asus|google|lg|oppo) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[x,T,[k,t]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[T,[x,hi],[k,t]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[T,[x,a],[k,t]],[/(opwwe\d{3})/i],[T,[x,ui],[k,t]],[/(moto 360)/i],[T,[x,li],[k,t]],[/(smartwatch 3)/i],[T,[x,mi],[k,t]],[/(g watch r)/i],[T,[x,"LG"],[k,t]],[/droid.+; (wt63?0{2,3})\)/i],[T,[x,gi],[k,t]],[/droid.+; (glass) \d/i],[T,[x,s],[k,F]],[/(pico) (4|neo3(?: link|pro)?)/i],[x,T,[k,F]],[/(quest( \d| pro)?s?).+vr/i],[T,[x,xi],[k,F]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[x,[k,D]],[/(aeobc)\b/i],[T,[x,si],[k,D]],[/(homepod).+mac os/i],[T,[x,a],[k,D]],[/windows iot/i],[[k,D]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+?(mobile|vr|\d) safari/i],[T,[k,N,{mobile:"Mobile",xr:"VR","*":r}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[k,r]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[k,S]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[T,[x,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[y,[v,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[v,y],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[y,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[v,y],[/ladybird\//i],[[v,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[y,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,y],[/(windows (?:phone(?: os)?|mobile|iot))[\/ ]?([\d\.\w ]*)/i],[v,[y,N,ji]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[y,N,ji],[v,Ci]],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[y,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,"macOS"],[y,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[y,[v,b+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[y,[v,b+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[y,[v,b+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[y,[v,b+" Linux"]],[/crkey\/([\d\.]+)/i],[y,[v,b]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[y,v],[/(ubuntu) ([\w\.]+) like android/i],[[v,/(.+)/,"$1 Touch"],y],[/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen|webos)\w*[-\/\.; ]?([\d\.]*)/i],[v,y],[/\(bb(10);/i],[y,[v,wi]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[y,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[y,[v,ki+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[y,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[y,[v,"watchOS"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,"Chrome OS"],y],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux)(?: arm\w*| x86\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,y],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],y],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[v,y]]},Ui=(d={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},j.call(d.init,[[u,[v,y,L,k]],[h,[C]],[p,[k,T,x]],[m,[v,y]],[f,[v,y]]]),j.call(d.isIgnore,[[u,[y,L]],[m,[y]],[f,[y]]]),j.call(d.isIgnoreRgx,[[u,/ ?browser$/i],[f,/ ?os$/i]]),j.call(d.toString,[[u,[v,y]],[h,[C]],[p,[x,T]],[m,[v,y]],[f,[v,y]]]),d),Ei=function(e,i){var t=Ui.init[i],o=Ui.isIgnore[i]||0,r=Ui.isIgnoreRgx[i]||0,a=Ui.toString[i]||0;function s(){j.call(this,t);}return s.prototype.getItem=function(){return e},s.prototype.withClientHints=function(){return O?O.getHighEntropyValues(ai).then(function(i){return e.setCH(new Pi(i,!1)).parseCH().get()}):e.parseCH().get()},s.prototype.withFeatureCheck=function(){return e.detectFeature().get()},i!=g&&(s.prototype.is=function(i){var e,t=!1;for(e in this)if(this.hasOwnProperty(e)&&!Si(o,e)&&M(r?zi(r,this[e]):this[e])==M(r?zi(r,i):i)){if(t=!0,i!=n)break}else if(i==n&&t){t=!t;break}return t},s.prototype.toString=function(){var i,e=w;for(i in a)typeof this[a[i]]!==n&&(e+=(e?" ":w)+this[a[i]]);return e||n}),O||(s.prototype.then=function(i){function e(){for(var i in t)t.hasOwnProperty(i)&&(this[i]=t[i]);}var t=this,o=(e.prototype={is:s.prototype.is,toString:s.prototype.toString},new e);return i(o),o}),new s};function Pi(i,e){if(i=i||{},j.call(this,ai),e)j.call(this,[[W,qi(i[o])],[X,qi(i[Q])],[S,/\?1/.test(i[ei])],[T,Oi(i[ti])],[q,Oi(i[oi])],[Y,Oi(i[ri])],[C,Oi(i[Z])],[_,qi(i[ii])],[K,Oi(i[J])]]);else for(var t in i)this.hasOwnProperty(t)&&typeof i[t]!==n&&(this[t]=i[t]);}function Bi(i,e,t,o){return this.get=function(i){return i?this.data.hasOwnProperty(i)?this.data[i]:l:this.data},this.set=function(i,e){return this.data[i]=e,this},this.setCH=function(i){return this.uaCH=i,this},this.detectFeature=function(){if(z&&z.userAgent==this.ua)switch(this.itemType){case u:z.brave&&typeof z.brave.isBrave==R&&this.set(v,"Brave");break;case p:!this.get(k)&&O&&O[S]&&this.set(k,S),"Macintosh"==this.get(T)&&z&&typeof z.standalone!==n&&z.maxTouchPoints&&2<z.maxTouchPoints&&this.set(T,"iPad").set(k,r);break;case f:!this.get(v)&&O&&O[q]&&this.set(v,O[q]);break;case g:var e=this.data,i=function(i){return e[i].getItem().detectFeature().get()};this.set(u,i(u)).set(h,i(h)).set(p,i(p)).set(m,i(m)).set(f,i(f));}return this},this.parseUA=function(){return this.itemType!=g&&Mi.call(this.data,this.ua,this.rgxMap),this.itemType==u&&this.set(L,Ai(this.get(y))),this},this.parseCH=function(){var i,e=this.uaCH,t=this.rgxMap;switch(this.itemType){case u:case m:var o,r=e[X]||e[W];if(r)for(var a in r){var s=r[a].brand||r[a],a=r[a].version;this.itemType!=u||/not.a.brand/i.test(s)||o&&(!/chrom/i.test(o)||s==vi)||(s=N(s,{Chrome:"Google Chrome",Edge:"Microsoft Edge","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"}),this.set(v,s).set(y,a).set(L,Ai(a)),o=s),this.itemType==m&&s==vi&&this.set(y,a);}break;case h:var n=e[C];n&&("64"==e[K]&&(n+="64"),Mi.call(this.data,n+";",t));break;case p:if(e[S]&&this.set(k,S),e[T]&&(this.set(T,e[T]),this.get(k)&&this.get(x)||(Mi.call(n={},"droid 9; "+e[T]+")",t),!this.get(k)&&n.type&&this.set(k,n.type),!this.get(x)&&n.vendor&&this.set(x,n.vendor))),e[_]){if("string"!=typeof e[_])for(var w=0;!i&&w<e[_].length;)i=N(e[_][w++],Ni);else i=N(e[_],Ni);this.set(k,i);}break;case f:var b,n=e[q];n&&(b=e[Y],n==Ci&&(b=13<=parseInt(Ai(b),10)?"11":"10"),this.set(v,n).set(y,b)),this.get(v)==Ci&&"Xbox"==e[T]&&this.set(v,"Xbox").set(y,l);break;case g:var d=this.data,n=function(i){return d[i].getItem().setCH(e).parseCH().get()};this.set(u,n(u)).set(h,n(h)).set(p,n(p)).set(m,n(m)).set(f,n(f));}return this},j.call(this,[["itemType",i],["ua",e],["uaCH",o],["rgxMap",t],["data",Ei(this,i)]]),this}function I(i,e,t){var o,r,a,s,n;return typeof i===c?(e=_i(i,!0)?(typeof e===c&&(t=e),i):(t=i,l),i=l):typeof i!==V||_i(e,!0)||(t=e,e=l),t&&typeof t.append===R&&(o={},t.forEach(function(i,e){o[e]=i;}),t=o),this instanceof I?(r=typeof i===V?i:t&&t[P]?t[P]:z&&z.userAgent?z.userAgent:w,a=new Pi(t,!0),s=e?((i,e)=>{var t,o={},r=e;if(!_i(e))for(var a in r={},e)for(var s in e[a])r[s]=e[a][s].concat(r[s]||[]);for(t in i)o[t]=r[t]&&r[t].length%2==0?r[t].concat(i[t]):i[t];return o})(Ii,e):Ii,j.call(this,[["getBrowser",(n=function(i){return i==g?function(){return new Bi(i,r,s,a).set("ua",r).set(u,this.getBrowser()).set(h,this.getCPU()).set(p,this.getDevice()).set(m,this.getEngine()).set(f,this.getOS()).get()}:function(){return new Bi(i,r,s[i],a).parseUA().get()}})(u)],["getCPU",n(h)],["getDevice",n(p)],["getEngine",n(m)],["getOS",n(f)],["getResult",n(g)],["getUA",function(){return r}],["setUA",function(i){return H(i)&&(r=i.length>E?Hi(i,E):i),this}]]).setUA(r),this):new I(i,e,t).getResult()}I.VERSION="2.0.3",I.BROWSER=U([v,y,L,k]),I.CPU=U([C]),I.DEVICE=U([T,x,k,G,S,e,r,t,D]),I.ENGINE=I.OS=U([v,y]),(exports=module.exports?module.exports=I:exports).UAParser=I;var Ri,Vi=Ti&&(i.jQuery||i.Zepto);Vi&&!Vi.ua&&(Ri=new I,Vi.ua=Ri.getResult(),Vi.ua.get=function(){return Ri.getUA()},Vi.ua.set=function(i){Ri.setUA(i);var e,t=Ri.getResult();for(e in t)Vi.ua[e]=t[e];});})("object"==typeof window?window:_commonjsHelpers.commonjsGlobal);
}(uaParser_pack, uaParser_pack.exports));

const irUserFormPanelCss = ".sc-ir-user-form-panel-h{--font-family-sans-serif:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;--font-family-monospace:'Quicksand', Georgia, 'Times New Roman', Times, serif !important}.logins-history-section.sc-ir-user-form-panel{margin-top:1.5rem}.logins-history-list.sc-ir-user-form-panel{border-radius:8px;list-style-type:none;padding:0;margin:0;margin-top:1rem}.login-entry.sc-ir-user-form-panel{padding:0.75rem 0rem;margin-bottom:0.75rem;border-bottom:1px solid #e4e5ec}.login-entry.sc-ir-user-form-panel:last-child{border:none}.login-meta.sc-ir-user-form-panel{display:flex;justify-content:space-between;margin-bottom:0.25rem}.login-datetime.sc-ir-user-form-panel,.login-location.sc-ir-user-form-panel{margin:0;font-size:0.875rem;color:#374151;font-weight:500}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#6b7280;margin:0;word-break:break-word}.login-user-agent.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;margin-top:0.5rem;line-height:1.4}.login-user-agent.sc-ir-user-form-panel p.sc-ir-user-form-panel{margin:0.125rem 0}.ua-browser.sc-ir-user-form-panel{font-weight:600;color:#1f2937}.ua-os.sc-ir-user-form-panel{color:#374151}.ua-device.sc-ir-user-form-panel{font-style:italic;color:#6b7280}.login-location.sc-ir-user-form-panel{font-size:0.75rem;color:#4b5563;display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.login-location.sc-ir-user-form-panel span.sc-ir-user-form-panel{display:flex;align-items:center;gap:0.25rem}.login-location.sc-ir-user-form-panel i.sc-ir-user-form-panel{font-size:0.75rem;color:#9ca3af}";
const IrUserFormPanelStyle0 = irUserFormPanelCss;

const sheetCss = ".sc-ir-user-form-panel-h{height:100%}.sheet-container.sc-ir-user-form-panel{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-user-form-panel{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-user-form-panel{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-user-form-panel{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-user-form-panel{flex-direction:row;align-items:center}}";
const IrUserFormPanelStyle1 = sheetCss;

const IrUserFormPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.userTypes = (Map);
        this.isEdit = false;
        this.language = 'en';
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
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
        this.userService = new user_service.UserService();
        this.disableFields = false;
        this.isPropertyAdmin = false;
        this.mobileMask = {};
        this.userSchema = index$2.z.object({
            mobile: index$2.z.string().min(1).max(12),
            email: index$2.z.string().email(),
            password: index$2.z
                .string()
                .nullable()
                // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
                .refine(password => {
                var _a;
                if (this.user && !((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.password)) {
                    return true;
                }
                return user_service.CONSTANTS.PASSWORD.test(password);
            }, { message: 'Password must be at least 8 characters long.' }),
            username: index$2.z
                .string()
                .min(3)
                .refine(async (name) => {
                if (this.user && this.user.username) {
                    return true;
                }
                if (name.length >= 3) {
                    return !(await new user_service.UserService().checkUserExistence({ UserName: name }));
                }
                return true;
            }, { message: 'Username already exists.' }),
        });
    }
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = Object.assign(Object.assign({}, this.user), { password: '' });
            this.disableFields = true;
        }
        this.isPropertyAdmin = this.userTypeCode.toString() === '17';
        if (this.isPropertyAdmin) {
            this.updateUserField('type', '16');
        }
        this.mobileMask = {
            mask: `{${calendarData.calendar_data.country.phone_prefix}} 000000000000`,
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
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = Object.assign(Object.assign({}, this.userInfo), { password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password });
            console.log('toValidateUserInfo', Object.assign(Object.assign({}, toValidateUserInfo), { mobile: toValidateUserInfo.mobile.split(' ').join('').replace(calendarData.calendar_data.country.phone_prefix, '') }));
            await this.userSchema.parseAsync(Object.assign(Object.assign({}, toValidateUserInfo), { mobile: toValidateUserInfo.mobile.split(' ').join('').replace(calendarData.calendar_data.country.phone_prefix, '') }));
            if (this.errors) {
                this.errors = null;
            }
            await this.userService.handleExposedUser(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            const e = {};
            if (error instanceof index$2.ZodError) {
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
                this.errors = e;
            }
            console.error(error);
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return (index.h("form", { key: '300a64be788aa16153d531c90e62c9bfa03fb7a2', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, index.h("ir-title", { key: 'cb825a36be4a94e72c7a5c145dfbac808da892ac', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? this.user.username : 'Create New User' }), index.h("section", { key: 'e4bf0ad5f6b8ed809b5aebca825c0c5896156414', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: 'e5ab62f1b1708687a96eae366cae0b2a869abf35', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.email, label: locales_store.locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-input-text", { key: '18de06a9bc3231cbc73e9ef3ccb862dfc0d15efc', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: (_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile, asyncParse: true, autoValidate: this.user ? (((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile) !== this.user.mobile ? true : false) : this.autoValidate, label: "Mobile", mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), (this.user && ((_e = (_d = this.user) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.toString()) === '1') || this.isPropertyAdmin ? null : (index.h("div", { class: "mb-1" }, index.h("ir-select", { disabled: this.disableFields, label: "Role", data: [
                { text: 'Frontdesk', value: '16' },
                { text: 'Property Admin', value: '17' },
            ], selectedValue: this.userInfo.type, onSelectChange: e => this.updateUserField('type', e.detail) }))), index.h("ir-input-text", { key: '732c57e9e86177fa9d25bc350ae441e36a7935b1', testId: "username", zod: this.userSchema.pick({ username: true }), wrapKey: "username", autoValidate: this.autoValidate, error: (_f = this.errors) === null || _f === void 0 ? void 0 : _f.username, label: "Username", disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('username', e.detail), value: this.userInfo.username, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), !this.user ? (index.h(index.Fragment, null, index.h("ir-input-text", { testId: "password", autoValidate: this.user ? (!((_g = this.userInfo) === null || _g === void 0 ? void 0 : _g.password) ? false : true) : this.autoValidate, label: 'Password', value: this.userInfo.password, type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: (_h = this.errors) === null || _h === void 0 ? void 0 : _h.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (this.haveAdminPrivileges &&
            this.user.type.toString() !== '1' &&
            (((_j = this.user) === null || _j === void 0 ? void 0 : _j.type.toString()) === '17' && ((_k = this.userTypeCode) === null || _k === void 0 ? void 0 : _k.toString()) === '17' ? null : (index.h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, index.h("h4", { class: "m-0 p-0 logins-history-title" }, "Password"), index.h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: "Change password", btn_color: "link" }))))), ((_l = this.user.sign_ins) === null || _l === void 0 ? void 0 : _l.length) > 0 && (index.h("section", { key: '54a2f065cda1429dcc628470824e13e511c7a31c', class: "logins-history-section mt-2" }, index.h("div", { key: '95190417475627c1573a50ebefd9a9b0b191e044', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, index.h("h4", { key: '242d9ad428366467ab38dcc7dc026a3dd0414e22', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (index.h("ir-button", { key: '7fb6685a7570455134fb1ad038b54398479a725d', btn_styles: 'pr-0', text: !this.showFullHistory ? 'View all' : 'View less', btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), index.h("ul", { key: 'ec7b55329d4994852fbb0182140fcbdc106492f5', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            var _a, _b, _c;
            const ua = uaParser_pack.exports.UAParser(s.user_agent);
            return (index.h("li", { class: "login-entry", key: s.date + '_' + i }, index.h("div", { class: "login-meta" }, index.h("p", { class: "login-datetime" }, moment.hooks(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", functions._formatTime((_a = s.hour) === null || _a === void 0 ? void 0 : _a.toString(), (_b = s.minute) === null || _b === void 0 ? void 0 : _b.toString())), index.h("p", { class: "login-location" }, index.h("span", { class: "login-ip" }, "IP: ", s.ip), " \u00A0|\u00A0", index.h("span", { class: "login-country" }, "Location: ", s.country), " \u00A0|\u00A0", index.h("span", { class: "login-os" }, "OS: ", (_c = ua.os.name) !== null && _c !== void 0 ? _c : 'N/A', " ", ua.os.version))), ua.device.type && (index.h("div", { class: "login-user-agent" }, index.h("p", { class: "ua-device" }, ua.device.vendor || '', " ", ua.device.model, " (", ua.device.type, ")")))));
        })))), index.h("ir-sidebar", { key: 'a7b23a6e4b7d9e544f81f732a5c24ca0fbfa3c17', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (index.h("ir-reset-password", { key: '17c397d24b20f1cbc4e118f07ae17e9e408d2686', skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))), index.h("div", { key: '45eddc43c7e892c214b3751c732e37459e5e5164', class: "sheet-footer" }, index.h("ir-button", { key: '732c37618f7d50ff51e227ebe10c7c8db47d2ac3', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '9365043f9b33482d84d9feca9572b095bb8d8c7b', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save }))));
    }
};
IrUserFormPanel.style = IrUserFormPanelStyle0 + IrUserFormPanelStyle1;

const irUserManagementCss = ".sc-ir-user-management-h{display:block;height:100%}";
const IrUserManagementStyle0 = irUserManagementCss;

const IrUserManagement = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.language = '';
        this.ticket = '';
        this.isSuperAdmin = true;
        this.isLoading = true;
        this.users = [];
        this.token = new Token.Token();
        this.roomService = new room_service.RoomService();
        this.userService = new user_service.UserService();
        this.bookingService = new booking_service.BookingService();
        this.userTypes = new Map();
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
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
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleResetData(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.fetchUsers();
    }
    async fetchUsers() {
        const users = await this.userService.getExposedPropertyUsers();
        this.users = [...users].sort((u1, u2) => {
            const priority = (u) => {
                const t = u.type.toString();
                if (t === '1')
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
        var _a, _b;
        const entries = await this.bookingService.getSetupEntriesByTableName('_USER_TYPE');
        for (const e of entries) {
            this.userTypes.set(e.CODE_NAME.toString(), e[`CODE_VALUE_${(_b = (_a = this.language) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : 'EN'}`]);
        }
    }
    render() {
        var _a, _b;
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Extranet Users")), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { userTypeCode: this.userTypeCode, haveAdminPrivileges: ['1', '17'].includes((_a = this.userTypeCode) === null || _a === void 0 ? void 0 : _a.toString()), userTypes: this.userTypes, class: "card", isSuperAdmin: ((_b = this.userTypeCode) === null || _b === void 0 ? void 0 : _b.toString()) === '1', users: this.users })))));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrUserManagement.style = IrUserManagementStyle0;

const irUserManagementTableCss = ".sc-ir-user-management-table-h{display:block}";
const IrUserManagementTableStyle0 = irUserManagementTableCss;

const tableCss = ".ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-user-management-table td.sc-ir-user-management-table:last-child{width:100%}.table.sc-ir-user-management-table td.sc-ir-user-management-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-user-management-table thead.sc-ir-user-management-table th.sc-ir-user-management-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{background:#e3f3fa !important}.selected.sc-ir-user-management-table td.sc-ir-user-management-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-user-management-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-user-management-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-user-management-table svg.sc-ir-user-management-table{color:var(--blue)}";
const IrUserManagementTableStyle1 = tableCss;

const IrUserManagementTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.users = [];
        this.userTypes = new Map();
        this.currentTrigger = null;
        this.user = null;
        this.userService = new user_service.UserService();
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
            is_active: user.is_active,
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
    async removeUser(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            await this.userService.handleExposedUser({
                email: this.user.email,
                id: this.user.id,
                is_active: this.user.is_active,
                mobile: this.user.mobile,
                password: this.user.password,
                type: this.user.type,
                username: this.user.username,
                is_to_remove: true,
            });
            this.resetData.emit(null);
        }
        finally {
            this.user = null;
            this.modalRef.closeModal();
        }
    }
    renderCurrentTrigger() {
        var _a, _b;
        if (!this.currentTrigger) {
            return null;
        }
        return (index.h("ir-user-form-panel", { userTypeCode: this.userTypeCode, haveAdminPrivileges: this.haveAdminPrivileges, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
    }
    render() {
        var _a, _b, _c, _d, _e;
        return (index.h(index.Host, { key: '2e45e166da781d94f8a9dbe8dfc367d23a30cebe' }, index.h("section", { key: '4854235577b83aecd7aa339ddd765bf7439444b1', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, index.h("table", { key: '1484cb44cd6eb8b62af5482166882d2ad375b27c', class: "table" }, index.h("thead", { key: '223c42a18ff250e707edd480b33b542d6f89ddf7' }, index.h("tr", { key: 'a89e442d8f7d5876acbbd89113478c8fb34c9a53' }, index.h("th", { key: '12b5286ed9d2b5eb2c35ed4775e06ab0b59ab278', class: "text-left" }, (_a = locales_store.locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), index.h("th", { key: '8448693278c8af9dfe61bfcbc854031c3d6e0683', class: "text-left" }, locales_store.locales.entries.Lcz_Email), index.h("th", { key: '6c5a1279cfdcd72749d2dd2c1f0b241228f58d1d', class: "text-left" }, (_b = locales_store.locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), index.h("th", { key: '1afa9c2da508b5fbeb5416bd16fea0bfcc2b94c4', class: "text-left" }, "Role"), index.h("th", { key: 'd8bf37384028688aa2ac0eb451615ea2c1844473', class: "text-left" }, "Last signed in"), index.h("th", { key: 'bc3a89ab89790d08b1b2fe7bc072ea7e74f24e9b', class: "text-left" }, "Created at"), this.haveAdminPrivileges && index.h("th", { key: '1abace3ac5ab10c32234bba1a3b6e8ea7d3477a4' }, "Active"), index.h("th", { key: '3d5c68aafc498fa455aaa412c4a883b853117196', class: 'action-row' }, this.canCreate && (index.h("ir-icon", { key: '7b46db5b3663492b298ef79d646d0ad85f312f8b', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales_store.locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, index.h("svg", { key: 'fbe512a33f0f96871017b9bbbb890f8d203fdc97', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { key: 'd3b4ee897389db16a237c7f6c7d419f3f0efd9d0', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" }))))))), index.h("tbody", { key: 'e3f6ce4edaa193e2b5eab6e73b5fac787d560b20' }, this.users.map(user => {
            var _a;
            const isUserSuperAdmin = user.type.toString() === '1';
            const latestSignIn = user.sign_ins ? user.sign_ins[0] : null;
            return (index.h("tr", { key: user.id, class: "ir-table-row" }, index.h("td", null, user.username), index.h("td", null, user.email), index.h("td", null, (_a = user.mobile) !== null && _a !== void 0 ? _a : 'N/A'), index.h("td", null, this.userTypes.get(user.type.toString())), index.h("td", null, latestSignIn && new Date(latestSignIn.date).getFullYear() > 1900
                ? moment.hooks(latestSignIn.date, 'YYYY-MM-DD').format('DD-MMM-YYYY') + ' ' + functions._formatTime(latestSignIn.hour.toString(), latestSignIn.minute.toString())
                : 'N/A'), index.h("td", null, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : moment.hooks(user.created_on, 'YYYY-MM-DD').format('DD-MMM-YYYY')), this.haveAdminPrivileges && (index.h("td", null, this.haveAdminPrivileges && !this.isSuperAdmin && user.type.toString() === '17'
                ? null
                : !isUserSuperAdmin && index.h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active }))), index.h("td", { class: 'action-row' }, (this.canEdit || this.canDelete) && ((!this.isSuperAdmin && !isUserSuperAdmin) || this.isSuperAdmin) && (index.h("div", { class: "icons-container  d-flex align-items-center", style: { gap: '0.5rem' } }, this.canEdit && (index.h("ir-icon", { "data-testid": "edit", title: locales_store.locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                    this.currentTrigger = {
                        type: 'user',
                        isEdit: true,
                        user,
                    };
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" })))), this.canDelete && !isUserSuperAdmin && (this.isSuperAdmin || user.type.toString() !== '17') && (index.h("ir-icon", { "data-testid": "delete", title: locales_store.locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                    this.user = user;
                    this.modalRef.openModal();
                } }, index.h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" })))))))));
        })))), index.h("ir-sidebar", { key: '83b70eefcda9d13ad80818c073ae42beb32c883c', open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), index.h("ir-modal", { key: 'ae1ec741daf784ba104ff5794b3e6b5bda340438', autoClose: false, modalBody: `Are you sure you want to delete ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?`, rightBtnColor: "danger", isLoading: irInterceptor_store.isRequestPending('/Handle_Exposed_User'), rightBtnText: locales_store.locales.entries.Lcz_Delete, onConfirmModal: this.removeUser.bind(this), ref: el => (this.modalRef = el) })));
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
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '6617ee69d647e592784482ad6161c32eaadde8c6', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '998950644d2bd4253421ef9332eeacfbd7f4b6ab', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '614da3b1d79ab3bcf82944d19ec6a4507ae772b3' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_button = IrButton;
exports.ir_common = IrCommon;
exports.ir_icon = IrIcon;
exports.ir_icons = IrIcons;
exports.ir_input_text = IrInputText;
exports.ir_interceptor = IrInterceptor;
exports.ir_loading_screen = IrLoadingScreen;
exports.ir_modal = IrModal;
exports.ir_password_validator = IrPasswordValidator;
exports.ir_reset_password = IrResetPassword;
exports.ir_select = IrSelect;
exports.ir_sidebar = IrSidebar;
exports.ir_switch = IrSwitch;
exports.ir_title = IrTitle;
exports.ir_toast = IrToast;
exports.ir_user_form_panel = IrUserFormPanel;
exports.ir_user_management = IrUserManagement;
exports.ir_user_management_table = IrUserManagementTable;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-button_19.cjs.entry.js.map