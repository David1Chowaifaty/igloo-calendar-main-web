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
const booking_service = require('./booking.service-bc3e3d2d.js');
const room_service = require('./room.service-89962a18.js');
const moment = require('./moment-1780b03a.js');
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
        return (index.h(index.Host, { key: 'bac823826af9d855bdfb19d0322da7aab5d9ba30' }, index.h("slot", { key: '5bb44fd84aec2ac353d4b265502f043ba6061821' })));
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
        return (index.h("button", { key: '38cd0a678a06c0b6e99a36e8ce8c0c3b835bcf90', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: 'd95e9887ab6e651d432dcbc8934bd47a824f4d97', name: "icon" })));
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
        return (index.h(index.Host, { key: 'e4a43e5ea797d1e7bdd9a75fc5041515f9a7aa51' }, this.isLoading && !this.isPageLoadingStopped && (index.h("div", { key: '69a45707738812af0c7acf4cfb5725d36c7de42d', class: "loadingScreenContainer" }, index.h("div", { key: 'df052c171a305b5c132d608de15af78629107039', class: "loaderContainer" }, index.h("span", { key: '3bd1bc280d14d67d9316502928bce7a07c1e6469', class: "page-loader" }))))));
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
        return (index.h(index.Host, { key: '6a14f0383c1d112adff52c81359b5f55f5030498' }, index.h("span", { key: '9e36d523537d7e8536f8b900e1a9ceef6989d2ee', class: "loader" })));
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
            index.h("div", { key: '06d67fb8ec8efe389f702aecc3405d5f44f523ab', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            index.h("div", { key: 'aecf8e98f81faf54bf1f8bbb48503f1f67e3af9c', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, index.h("div", { key: '70b4120fc8bb897993058d5181a8221b0b710b1b', class: `ir-alert-content p-2` }, this.showTitle && (index.h("div", { key: '22df187486a4ff0c445819ff66c15750a4c88074', class: `ir-alert-header` }, index.h("p", { key: 'f12642b735c5ada48191678f53aa4817fc8ebc2a' }, this.modalTitle))), index.h("div", { key: '9c17fae0e4f869fd8f10f991b84086d018885b10', class: "modal-body text-left p-0 mb-2" }, index.h("div", { key: 'd3f18e78edc5cf4df257af43e5d860543a1011e7' }, this.modalBody)), index.h("div", { key: 'ea54cec4fe0f3513b9acca71987192dd77bf9635', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (index.h("ir-button", { key: '60c76cee90d9808bd5ea775d96bb2f3ec7acb16e', btn_disabled: this.isLoading, icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText })), this.rightBtnActive && (index.h("ir-button", { key: '6a7744aecfed7ab7980a220d60e057c3f6825164', icon: '', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
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
        let label = (index.h("div", { key: '7d726a600bb2abf526fe104dd9b39e487b3f7881', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { key: 'd03091db298ab946db87d3d2d0328575cd73e216', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (index.h("div", { key: 'b5373c461cf498d501d70e4416f09574f329e93c', class: `form-group m-0 ${this.selectContainerStyle}` }, index.h("div", { key: 'd0ee4c72dfb436e9f21a13c7a86bb50d2e363230', class: "input-group row m-0" }, label, index.h("select", { key: 'fc18e68a85e7ce2113a96867ea0a3ab7f226818e', disabled: this.disabled, "aria-invalid": this.error ? 'true' : 'false', "data-testid": this.testId, style: this.selectForcedStyles, ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${this.error ? 'border-danger' : ''} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && index.h("option", { key: 'a1225fcf56aa30e6d3434ddc41e5077ce0aa3a9a', value: '' }, this.firstOption), this.data.map(item => {
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
            index.h("div", { key: '489576383f52bfa8ccc17d423cd1775d43a810bc', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            index.h("div", { key: 'f4e8e9502a0428a1a7a6d819178e66e5d3a3e530', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (index.h("div", { key: '300b0aecd7bdad6d788a60f36bde8eb19e999299', class: 'sidebar-title' }, index.h("p", { key: '0cb6206bcdfbb497fee60ee40a4fbbe732d36fc3', class: 'p-0 m-0' }, this.label), index.h("div", { key: '1921683bc00739464fe8b558f47a65c13d513419', class: 'p-0 m-0 sidebar-icon-container' }, index.h("ir-icon", { key: 'ffba33bd99338cbc5121ecb9d84a493606059a53', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, index.h("svg", { key: 'ccf447ecac7a092f352360ba30d26a119e88c982', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '5a21c9415414676a14cf53fc86107b2cea9b5954', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), index.h("slot", { key: '2d2c6328297dac96dcf895587a197f3d1e0304dc', name: "sidebar-body" })),
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
        return (index.h(index.Host, { key: '10f9aec02c16a714c4d471a3544417e1afe8a756' }, index.h("button", { key: '6dbb6d08ac9865810de396e61be85dee157af079', disabled: this.disabled, ref: el => (this.switchRoot = el), type: "button", id: this.switchId || this._id, onClick: this.handleCheckChange.bind(this), role: "switch", "data-state": this.checked ? 'checked' : 'unchecked', value: 'on', class: "SwitchRoot" }, index.h("span", { key: '9b5fd516795c0e2163847c11e8f996f13819fbd9', class: "SwitchThumb", "data-state": this.checked ? 'checked' : 'unchecked' })), index.h("input", { key: '6f57f9f8eab912c20c70efe36e0840cf61231b83', type: "checkbox", checked: this.checked, "aria-hidden": "true", tabIndex: -1, value: 'on', class: "hidden-input" })));
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
        return index.h(index.Host, { key: '55d1fe29bcb3bc83077a3dd73d21b80875c03218' });
    }
    get element() { return index.getElement(this); }
};
IrToast.style = IrToastStyle0;

const irUserFormPanelCss = ".sc-ir-user-form-panel-h{--font-family-sans-serif:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;--font-family-monospace:'Quicksand', Georgia, 'Times New Roman', Times, serif !important}";
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
        this.userInfo = {
            type: '',
            id: -1,
            is_active: false,
            last_sign_in: null,
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
        this.bookingService = new booking_service.BookingService();
        this.disableFields = false;
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
            this.disableFields = this.isSuperAdmin;
        }
        await this.bookingService.getSetupEntriesByTableName('_USER_TYPE');
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (index.h("form", { key: '61cbcdfbf065193d3caead7cf130369108b77d56', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, index.h("ir-title", { key: '3b0bb72eb1c71928d474136e76947c6b758bdf4f', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? 'Edit User' : 'Create New User' }), index.h("section", { key: '1f169f9f97d47760f8457e5620bbb06ee512a193', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: '8f9e797d5a63f5f4fe74aa0060dede73e2b67015', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.email, label: locales_store.locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-input-text", { key: 'd33ef4f3a089f06143235df44c8d8f85b85ce4c5', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: (_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile, asyncParse: true, autoValidate: this.user ? (((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile) !== this.user.mobile ? true : false) : this.autoValidate, label: "Mobile", mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), this.user && ((_e = (_d = this.user) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.toString()) === '1' ? null : (index.h("div", { class: "mb-1" }, index.h("ir-select", { disabled: this.disableFields, label: "Role", data: [
                { text: 'Frontdesk', value: '16' },
                { text: 'Property Admin', value: '17' },
            ], selectedValue: this.userInfo.type, onSelectChange: e => this.updateUserField('type', e.detail) }))), index.h("ir-input-text", { key: '2a8c13d48a952fbbdb973b0c1bfd3ab37aaafd1c', testId: "username", zod: this.userSchema.pick({ username: true }), wrapKey: "username", autoValidate: this.autoValidate, error: (_f = this.errors) === null || _f === void 0 ? void 0 : _f.username, label: "Username", disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('username', e.detail), value: this.userInfo.username, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), !this.user ? (index.h(index.Fragment, null, index.h("ir-input-text", { testId: "password", autoValidate: this.user ? (!((_g = this.userInfo) === null || _g === void 0 ? void 0 : _g.password) ? false : true) : this.autoValidate, label: 'Password', value: this.userInfo.password, type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: (_h = this.errors) === null || _h === void 0 ? void 0 : _h.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("h4", { class: "m-0 p-0" }, "Password"), index.h("ir-button", { btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: "Change password", btn_color: "link" }))), index.h("ir-sidebar", { key: 'daf1c6c30a74cb1f250eadaa1165fe245d63ce44', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (index.h("ir-reset-password", { key: '388de0393fb2a928d40e95d990b3f6c882056ff5', skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))), index.h("div", { key: 'c4af94bc7fce8d574f3ec99ab01d549455abfa39', class: "sheet-footer" }, index.h("ir-button", { key: '17a885ce58b04a0691aed0358cd2dcb419beffcb', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '65f3110b5874f3befacd0fbe290714b5656eab9e', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save }))));
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
        this.users = [...users];
    }
    async fetchUserTypes() {
        var _a, _b;
        const entries = await this.bookingService.getSetupEntriesByTableName('_USER_TYPE');
        for (const e of entries) {
            this.userTypes.set(e.CODE_NAME.toString(), e[`CODE_VALUE_${(_b = (_a = this.language) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : 'EN'}`]);
        }
    }
    render() {
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("ir-loading-screen", null)));
        }
        return (index.h(index.Host, null, index.h("ir-toast", null), index.h("ir-interceptor", null), index.h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, index.h("div", { class: "d-flex  pb-2 align-items-center justify-content-between" }, index.h("h3", { class: "mb-1 mb-md-0" }, "Extranet Users")), index.h("div", { class: "", style: { gap: '1rem' } }, index.h("ir-user-management-table", { userTypes: this.userTypes, class: "card", isSuperAdmin: this.isSuperAdmin, users: this.users })))));
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
        this.users = [];
        this.isSuperAdmin = true;
        this.userTypes = new Map();
        this.currentTrigger = null;
        this.user = null;
        this.userService = new user_service.UserService();
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
    render() {
        var _a, _b, _c, _d, _e;
        return (index.h(index.Host, { key: 'ead9ed0b413579c9f610ba8ac31b265b8de27ca2' }, index.h("section", { key: '4602b560168cac59eec884295cdda5cb89a7069e', class: "table-container h-100 p-1 w-100 m-0 table-responsive" }, index.h("table", { key: '92ee0a07a91da167e2f693ec67b84c3b03276f1e', class: "table" }, index.h("thead", { key: 'f9255a6ce081b62857ded039600a90a56621c8c0' }, index.h("tr", { key: '64a949ded16e2740fd137aeafa174aaa07c0fc7a' }, index.h("th", { key: 'a622daa530c231d858e6441c9e11f9870e711b85', class: "text-left" }, (_a = locales_store.locales.entries.Lcz_Username) !== null && _a !== void 0 ? _a : 'Username'), index.h("th", { key: 'a899f36d920c326170d9ca40c608376f3238006c', class: "text-left" }, locales_store.locales.entries.Lcz_Email), index.h("th", { key: 'fb9b86b74f7edf8d32de88d79a87a0359eae4f1a', class: "text-left" }, (_b = locales_store.locales.entries.Lcz_Mobile) !== null && _b !== void 0 ? _b : 'Mobile'), index.h("th", { key: '04210b4a190086ba3f4d351c46980506926b14bb', class: "text-left" }, "Role"), index.h("th", { key: 'e3e3b922a6aa868b286ec704b567fbed3c49bf1a', class: "text-left" }, "Last signed in"), index.h("th", { key: '007e2280a3a0cbbb4f3ee10db52cf9de305fbb9f', class: "text-left" }, "Created at"), index.h("th", { key: 'd4a2c156046d356cf5d9d5660575ad79e9fcb181' }, "Active"), index.h("th", { key: 'ca824f57450e5058290b8616ee93ac0314437924' }, index.h("ir-icon", { key: '127197cd7347734c29c7801ac034e6cd168c61e4', style: { paddingLeft: '0.875rem' }, "data-testid": "new_user", title: locales_store.locales.entries.Lcz_CreateHousekeeper, onIconClickHandler: () => {
                this.currentTrigger = {
                    type: 'user',
                    isEdit: false,
                    user: null,
                };
            } }, index.h("svg", { key: 'e7fa2c09e2c94c68df29afaa29ba530b03dfdb27', slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "17.5", viewBox: "0 0 448 512" }, index.h("path", { key: '682a4e382034167f16aedc833a3ff52303ec89f5', fill: "currentColor", d: "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" })))))), index.h("tbody", { key: '1afc13b9130a4ab9f103cb3eb818a06c782e2341' }, this.users.map(user => {
            var _a;
            const isSuperAdmin = user.type.toString() === '1';
            return (index.h("tr", { key: user.id, class: "ir-table-row" }, index.h("td", null, user.username), index.h("td", null, user.email), index.h("td", null, (_a = user.mobile) !== null && _a !== void 0 ? _a : 'N/A'), index.h("td", null, this.userTypes.get(user.type.toString())), index.h("td", null, new Date(user.last_sign_in).getFullYear() === 1900 || !user.last_sign_in ? 'N/A' : moment.hooks(user.last_sign_in, 'YYYY-MM-DD').format('MMM, DD YYYY')), index.h("td", null, new Date(user.created_on).getFullYear() === 1900 || !user.created_on ? 'N/A' : moment.hooks(user.created_on, 'YYYY-MM-DD').format('MMM, DD YYYY')), index.h("td", null, !isSuperAdmin && index.h("ir-switch", { onCheckChange: e => this.handleUserActiveChange(e, user), checked: user.is_active })), index.h("td", null, index.h("div", { class: "icons-container d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("ir-icon", { "data-testid": "edit", title: locales_store.locales.entries.Lcz_EditHousekeeper, onIconClickHandler: () => {
                    this.currentTrigger = {
                        type: 'user',
                        isEdit: true,
                        user,
                    };
                }, icon: "ft-save color-ir-light-blue-hover h5 pointer sm-margin-right" }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "20", width: "20", viewBox: "0 0 512 512" }, index.h("path", { fill: "#6b6f82", d: "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" }))), !isSuperAdmin && (index.h("ir-icon", { "data-testid": "delete", title: locales_store.locales.entries.Lcz_DeleteHousekeeper, icon: "ft-trash-2 danger h5 pointer", onIconClickHandler: () => {
                    this.user = user;
                    this.modalRef.openModal();
                } }, index.h("svg", { slot: "icon", fill: "#ff2441", xmlns: "http://www.w3.org/2000/svg", height: "16", width: "14.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" }))))))));
        })))), index.h("ir-sidebar", { key: 'bfaf516871bcee34aadb258b1d70355edbf1c172', open: this.currentTrigger !== null && ((_c = this.currentTrigger) === null || _c === void 0 ? void 0 : _c.type) !== 'delete', onIrSidebarToggle: () => (this.currentTrigger = null), showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
                '--sidebar-width': this.currentTrigger ? (((_d = this.currentTrigger) === null || _d === void 0 ? void 0 : _d.type) === 'unassigned_units' ? 'max-content' : '40rem') : 'max-content',
            } }, this.renderCurrentTrigger()), index.h("ir-modal", { key: '5dae75591e92329ebd25a7917d6060397aea8c57', autoClose: false, modalBody: `Are you sure you want to delete ${(_e = this.user) === null || _e === void 0 ? void 0 : _e.username}?`, rightBtnColor: "danger", rightBtnText: locales_store.locales.entries.Lcz_Delete, onConfirmModal: this.removeUser.bind(this), ref: el => (this.modalRef = el) })));
    }
    async removeUser(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
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
        return (index.h("ir-user-form-panel", { isSuperAdmin: this.isSuperAdmin, onCloseSideBar: () => (this.currentTrigger = null), slot: "sidebar-body", user: (_a = this.currentTrigger) === null || _a === void 0 ? void 0 : _a.user, isEdit: (_b = this.currentTrigger) === null || _b === void 0 ? void 0 : _b.isEdit }));
    }
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
        return (index.h("div", { key: '3d908abd2cbdc6c19819b87ea7300c85ddd5e81c', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'cbf7ac693e874157eb38445294654694fcc808e0', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'a0254d322b4ae74cf52ed345f7705c156d49ad01' }, this.text)));
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