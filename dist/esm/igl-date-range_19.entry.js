import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-1d2aa5ad.js';
import { l as locales } from './locales.store-95a78d6b.js';
import { c as calculateDaysBetweenDates } from './booking-474f3a5d.js';
import { h as hooks } from './moment-ab846cee.js';
import { v as v4 } from './v4-964634d6.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-f355e1d9.js';
import { c as calendar_data } from './calendar-data-e1b88280.js';
import { i as isRequestPending, a as interceptor_requests } from './ir-interceptor.store-1b562ec6.js';
import { T as Token } from './Token-acf5fbad.js';
import { R as RoomService } from './room.service-7d6a9238.js';
import { i as icons } from './icons-bcb47550.js';
import { a as axios } from './axios-aa1335b8.js';
import './index-e42e9935.js';
import './utils-130c2742.js';

const iglDateRangeCss = ".sc-igl-date-range-h{display:flex;align-items:center !important;font-size:14px !important}.date-range-input.sc-igl-date-range{margin:0;padding:0;display:flex;flex:1;cursor:pointer;width:100%;user-select:none;font-size:14px !important}.iglRangeNights.sc-igl-date-range{margin:0;padding:0}.date-view.sc-igl-date-range{position:absolute;background:white;pointer-events:none;cursor:pointer;display:block;margin-left:14px;margin-right:14px;font-size:13.65px !important;display:flex;align-items:center;inset:0}.date-view.sc-igl-date-range svg.sc-igl-date-range{padding:0 !important;margin:0;margin-right:10px}.calendarPickerContainer.sc-igl-date-range{display:flex !important;position:relative !important;text-align:left;align-items:center !important;padding:0 !important;margin:0;border:1px solid var(--ir-date-range-border, #379ff2);width:var(--ir-date-range-width, 245px);transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.calendarPickerContainer.sc-igl-date-range:focus-within{border-color:#379ff2}.calendarPickerContainer[data-state='disabled'].sc-igl-date-range{border:0px;width:280px}.date-view[data-state='disabled'].sc-igl-date-range,.date-range-input[data-state='disabled'].sc-igl-date-range{margin:0;cursor:default}.date-range-container-cn.sc-igl-date-range{position:relative;width:fit-content}.date-range-container-cn.sc-igl-date-range:focus-within .date-range-container.sc-igl-date-range{border:1px solid #379ff2}.date-range-container.sc-igl-date-range{position:relative;gap:1rem;font-size:0.975rem;line-height:1.45;border-radius:0.21rem;border:1px solid #cacfe7;color:#3b4781;padding:0.75rem 1rem;box-sizing:border-box !important;font-weight:400;background-color:#fff;background-clip:padding-box;height:2rem;pointer-events:none;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.date-range-container-cn.sc-igl-date-range .date-range-input.sc-igl-date-range{position:absolute;width:100% !important;inset:0;cursor:pointer}.date-range-container.disabled.sc-igl-date-range{border:none;padding-left:0;padding-right:0}.date-range-input[data-state='disabled'].sc-igl-date-range{cursor:default}";
const IglDateRangeStyle0 = iglDateRangeCss;

const IglDateRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateSelectEvent = createEvent(this, "dateSelectEvent", 7);
        this.toast = createEvent(this, "toast", 7);
        this.disabled = false;
        this.withDateDifference = true;
        this.variant = 'default';
        this.renderAgain = false;
        this.totalNights = 0;
        this.fromDateStr = 'from';
        this.toDateStr = 'to';
    }
    componentWillLoad() {
        this.initializeDates();
    }
    handleDataChange(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initializeDates();
        }
    }
    initializeDates() {
        let dt = new Date();
        dt.setHours(0, 0, 0, 0);
        dt.setDate(dt.getDate() + 1);
        if (this.defaultData) {
            if (this.defaultData.fromDate) {
                this.fromDate = new Date(this.defaultData.fromDate);
                this.fromDate.setHours(0, 0, 0, 0);
                this.fromDateStr = this.getFormattedDateString(this.fromDate);
            }
            if (this.defaultData.toDate) {
                this.toDate = new Date(this.defaultData.toDate);
                this.toDate.setHours(0, 0, 0, 0);
                this.toDateStr = this.getFormattedDateString(this.toDate);
            }
        }
        if (this.fromDate && this.toDate) {
            this.calculateTotalNights();
            // this.handleDateSelectEvent('selectedDateRange', {
            //   fromDate: this.fromDate.getTime(),
            //   toDate: this.toDate.getTime(),
            //   fromDateStr: this.fromDateStr,
            //   toDateStr: this.toDateStr,
            //   dateDifference: this.totalNights,
            // });
        }
        return [this.fromDateStr, this.toDateStr];
    }
    calculateTotalNights() {
        this.totalNights = calculateDaysBetweenDates(hooks(this.fromDate).format('YYYY-MM-DD'), hooks(this.toDate).format('YYYY-MM-DD'));
    }
    getFormattedDateString(dt) {
        return dt.getDate() + ' ' + dt.toLocaleString('default', { month: 'short' }).toLowerCase() + ' ' + dt.getFullYear();
    }
    handleDateSelectEvent(key, data = '') {
        this.dateSelectEvent.emit({ key, data });
    }
    handleDateChange(evt) {
        const { start, end } = evt.detail;
        this.fromDate = start.toDate();
        this.toDate = end.toDate();
        this.calculateTotalNights();
        this.handleDateSelectEvent('selectedDateRange', {
            fromDate: this.fromDate.getTime(),
            toDate: this.toDate.getTime(),
            fromDateStr: start.format('DD MMM YYYY'),
            toDateStr: end.format('DD MMM YYYY'),
            dateDifference: this.totalNights,
        });
        this.renderAgain = !this.renderAgain;
    }
    render() {
        if (this.variant === 'booking') {
            return (h("div", { class: `p-0 m-0 date-range-container-cn` }, h("ir-date-range", { maxDate: this.maxDate, class: 'date-range-input', disabled: this.disabled, fromDate: this.fromDate, toDate: this.toDate, minDate: this.minDate, autoApply: true, "data-state": this.disabled ? 'disabled' : 'active', onDateChanged: evt => {
                    this.handleDateChange(evt);
                } }), h("div", { class: `d-flex align-items-center m-0  date-range-container ${this.disabled ? 'disabled' : ''}` }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("span", null, hooks(this.fromDate).format('MMM DD, YYYY')), h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", null, hooks(this.toDate).format('MMM DD, YYYY')), this.totalNights && h("span", { class: "m-0 p-0" }, this.totalNights + (this.totalNights > 1 ? ` ${locales.entries.Lcz_Nights}` : ` ${locales.entries.Lcz_Night}`)))));
        }
        return (h(Host, null, h("div", { class: `p-0 m-0 date-range-container-cn` }, h("ir-date-range", { maxDate: this.maxDate, class: 'date-range-input', disabled: this.disabled, fromDate: this.fromDate, toDate: this.toDate, minDate: this.minDate, autoApply: true, "data-state": this.disabled ? 'disabled' : 'active', onDateChanged: evt => {
                this.handleDateChange(evt);
            } }), h("div", { class: `d-flex align-items-center m-0  date-range-container ${this.disabled ? 'disabled' : ''}` }, h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" })), h("span", null, hooks(this.fromDate).format('MMM DD, YYYY')), h("svg", { xmlns: "http://www.w3.org/2000/svg", class: "m-0 p-0", height: "14", width: "14", viewBox: "0 0 512 512" }, h("path", { fill: "currentColor", d: "M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" })), h("span", null, hooks(this.toDate).format('MMM DD, YYYY'))))));
    }
    static get watchers() { return {
        "defaultData": ["handleDataChange"]
    }; }
};
IglDateRange.style = IglDateRangeStyle0;

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
        if (this.variant === 'icon') {
            return (h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: this.btn_disabled }, this.isLoading ? h("span", { class: "icon-loader" }) : h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: this.btn_disabled || this.isLoading }, this.icon_name && this.iconPosition === 'left' && h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
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
        this.checked = false;
        this.checkboxId = v4();
        this.currentChecked = false;
    }
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h(Host, { key: 'f3935e4f897b72697acf2bbe4109704309084c83' }, h("button", { key: '3a74431192504cc48f0d5cc30d7d335c02183ac5', disabled: this.disabled, name: this.name, onClick: this.handleCheckChange.bind(this), id: this.checkboxId, "data-state": this.currentChecked || this.indeterminate ? 'checked' : 'unchecked', value: 'on', ref: ref => (this.checkboxRef = ref), type: "button", role: "checkbox", class: "CheckboxRoot" }, this.currentChecked && (h("svg", { key: '094cce31ce6950426c75c86e1d3815ebdf84c29c', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '4ae846ad4e334cd75d60eb8eb6d1944c9673b2b8', fill: "currentColor", d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))), this.indeterminate && (h("svg", { key: '69bb096daf6a4cdc7716d4e8fe8a151fe1a96421', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'aa241cfb76ac2a2214ce7e7cdfa06606da45dd9d', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" })))), h("input", { key: '232c0401c1a6184e9caa906f5757b3e501d9f3cc', type: "checkbox", indeterminate: this.indeterminate, "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.currentChecked, class: "checkbox" }), this.label && h("label", { key: '476c12d613540d09ce3f1e2b6caf289893414ae5', htmlFor: this.checkboxId }, this.label)));
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
        return (h(Host, { key: '64b08f8ac7af84aaa2e3113339dd473c2e0dce6c' }, h("slot", { key: '3bc8183d26cba49ec68336d2756c116b46b24dcc' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irDateRangeCss = ".sc-ir-date-range-h{display:block;width:100%}.date-range-input.sc-ir-date-range{width:100%}";
const IrDateRangeStyle0 = irDateRangeCss;

const IrDateRange = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dateChanged = createEvent(this, "dateChanged", 7);
        this.firstDay = 1;
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        this.format = 'MMM DD, YYYY';
        this.separator = ' - ';
        this.applyLabel = 'Apply';
        this.cancelLabel = 'Cancel';
        this.fromLabel = 'Form';
        this.toLabel = 'To';
        this.customRangeLabel = 'Custom';
        this.weekLabel = 'W';
        this.disabled = false;
        this.singleDatePicker = false;
        this.maxSpan = {
            days: 240,
        };
    }
    handleMinDateChange() {
        $(this.dateRangeInput).data('daterangepicker').remove();
        this.initializeDateRangePicker();
    }
    datePropChanged() {
        this.updateDateRangePickerDates();
    }
    async openDatePicker() {
        this.openDatePickerTimeout = setTimeout(() => {
            this.dateRangeInput.click();
        }, 20);
    }
    updateDateRangePickerDates() {
        const picker = $(this.dateRangeInput).data('daterangepicker');
        if (!picker) {
            console.error('Date range picker not initialized.');
            return;
        }
        // Adjust how dates are set based on whether it's a single date picker or range picker.
        if (this.singleDatePicker) {
            const newDate = this.date ? hooks(this.date) : hooks();
            picker.setStartDate(newDate);
            picker.setEndDate(newDate); // For single date picker, start and end date might be the same.
        }
        else {
            const newStartDate = this.fromDate ? hooks(this.fromDate) : hooks();
            const newEndDate = this.toDate ? hooks(this.toDate) : newStartDate.clone().add(1, 'days');
            picker.setStartDate(newStartDate);
            picker.setEndDate(newEndDate);
        }
    }
    componentWillLoad() {
        if (!document.getElementById('ir-daterangepicker-style')) {
            const style = document.createElement('style');
            style.id = 'ir-daterangepicker-style';
            style.textContent = `
        .daterangepicker {
          margin-top: 14px;
        }
      `;
            document.head.appendChild(style);
        }
    }
    componentDidLoad() {
        this.dateRangeInput = this.element.querySelector('.date-range-input');
        this.initializeDateRangePicker();
        this.updateDateRangePickerDates();
    }
    initializeDateRangePicker() {
        $(this.dateRangeInput).daterangepicker({
            singleDatePicker: this.singleDatePicker,
            opens: this.opens,
            startDate: hooks(this.fromDate),
            endDate: hooks(this.toDate),
            minDate: hooks(this.minDate || hooks(new Date()).format('YYYY-MM-DD')),
            maxDate: this.maxDate ? hooks(this.maxDate) : undefined,
            maxSpan: this.maxSpan,
            autoApply: this.autoApply,
            locale: {
                format: this.format,
                separator: this.separator,
                applyLabel: this.applyLabel,
                cancelLabel: this.cancelLabel,
                fromLabel: this.fromLabel,
                toLabel: this.toLabel,
                customRangeLabel: this.customRangeLabel,
                weekLabel: this.weekLabel,
                daysOfWeek: this.daysOfWeek,
                monthNames: this.monthNames,
                firstDay: this.firstDay,
            },
        }, (start, end) => {
            this.dateChanged.emit({ start, end });
        });
    }
    disconnectedCallback() {
        if (this.openDatePickerTimeout) {
            clearTimeout(this.openDatePickerTimeout);
        }
        $(this.dateRangeInput).data('daterangepicker').remove();
    }
    render() {
        return (h(Host, { key: '70e85c0ebc41b32f846aa7ecbb36b1f562362ff0' }, h("input", { key: 'e1c941c44edaf93db6a2752c8b7cd98adece3fc6', class: "date-range-input", type: "button", disabled: this.disabled })));
    }
    get element() { return getElement(this); }
    static get watchers() { return {
        "minDate": ["handleMinDateChange"],
        "date": ["datePropChanged"]
    }; }
};
IrDateRange.style = IrDateRangeStyle0;

const irHkArchiveCss = ".sc-ir-hk-archive-h{display:block}";
const IrHkArchiveStyle0 = irHkArchiveCss;

const IrHkArchive = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.filters = {
            from_date: hooks().add(-90, 'days').format('YYYY-MM-DD'),
            to_date: hooks().format('YYYY-MM-DD'),
            filtered_by_hkm: [],
            filtered_by_unit: [],
        };
        this.data = [];
        this.isLoading = null;
        this.houseKeepingService = new HouseKeepingService();
        this.units = [];
    }
    componentWillLoad() {
        this.initializeData();
        this.setUpUnits();
    }
    setUpUnits() {
        const units = [];
        calendar_data.roomsInfo.forEach(r => {
            r.physicalrooms.forEach(room => {
                units.push({ id: room.id, name: room.name });
            });
        });
        this.units = units;
    }
    async initializeData() {
        await this.getArchivedTasks();
    }
    async getArchivedTasks() {
        var _a;
        const res = await this.houseKeepingService.getArchivedHKTasks(Object.assign({ property_id: Number(this.propertyId) }, this.filters));
        this.data = (_a = [...(res || [])]) === null || _a === void 0 ? void 0 : _a.map(t => (Object.assign(Object.assign({}, t), { id: v4() })));
    }
    handleDateRangeChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { start, end } = e.detail;
        this.updateFilters({
            from_date: start.format('YYYY-MM-DD'),
            to_date: end.format('YYYY-MM-DD'),
        });
    }
    updateFilters(props) {
        this.filters = Object.assign(Object.assign({}, this.filters), props);
    }
    async searchArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'search';
            await this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    async exportArchive(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.isLoading = 'excel';
            this.getArchivedTasks();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = null;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (h(Host, { key: 'f88dc0c2af973e9eb0ec4b4f509a560faacc70a0' }, h("ir-title", { key: 'ec47e965acd4d66390d414bcb98181e643161b80', class: "px-1", label: "Cleaning Archives (90 days)", displayContext: "sidebar" }), h("section", { key: '81d2537dedb0d1f4f0c8335477f09b729471c64f', class: "px-1" }, h("div", { key: '1fcbd65f5b0ad9119322c19ebde7bb0eafcd6dd5', class: "d-flex" }, h("ir-select", { key: '66aa8ca66f47db5603026de3ad7f26bd334f68c0', class: "w-100", showFirstOption: false, LabelAvailable: false, data: [
                { text: 'All units', value: '000' },
                ,
                ...(_a = this.units) === null || _a === void 0 ? void 0 : _a.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_unit: [] });
                }
                else {
                    this.updateFilters({ filtered_by_unit: [e.detail] });
                }
            } }), h("ir-select", { key: '47aca3b3b8a8430f1db239d37e784a8b5de8eac1', class: "ml-1 w-100", selectedValue: ((_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.filtered_by_hkm) === null || _c === void 0 ? void 0 : _c.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.filtered_by_hkm[0]) === null || _e === void 0 ? void 0 : _e.toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_f = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _f === void 0 ? void 0 : _f.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                if (e.detail === '000') {
                    this.updateFilters({ filtered_by_hkm: [] });
                }
                else {
                    this.updateFilters({ filtered_by_hkm: [e.detail] });
                }
            } })), h("div", { key: 'a7029408ef114d09e2d1649d50bfeca1fad80b4b', class: "d-flex mt-1 align-items-center" }, h("igl-date-range", { key: '796b445ab9df3bd471c36895138a41ff1bda8efe', class: "mr-1", dateLabel: locales.entries.Lcz_Dates, minDate: hooks().add(-90, 'days').format('YYYY-MM-DD'), defaultData: {
                fromDate: this.filters.from_date,
                toDate: this.filters.to_date,
            } }), h("ir-button", { key: '4f96739dbd534976fec2706b41b726469a7cb3ac', title: (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Search, variant: "icon", icon_name: "search", class: "mr-1", isLoading: this.isLoading === 'search', onClickHandler: e => this.searchArchive(e) }), h("ir-button", { key: '781965bd24ec340890d435da636403584e24901f', title: (_h = locales.entries) === null || _h === void 0 ? void 0 : _h.Lcz_ExportToExcel, variant: "icon", icon_name: "file", isLoading: this.isLoading === 'excel', onClickHandler: e => this.exportArchive(e) })), ((_j = this.data) === null || _j === void 0 ? void 0 : _j.length) === 0 && !isRequestPending('/Get_Archived_HK_Tasks') ? (h("p", { class: 'text-center mt-2' }, "No Results Found")) : (h("table", { class: "mt-2" }, h("thead", null, h("th", { class: "sr-only" }, "period"), h("th", { class: "sr-only" }, "housekeeper name"), h("th", { class: "sr-only" }, "unit"), h("th", { class: "sr-only" }, "booking number")), h("tbody", null, (_k = this.data) === null || _k === void 0 ? void 0 : _k.map(d => (h("tr", { key: d.id }, h("td", { class: "pr-2" }, d.date), h("td", { class: "px-2" }, d.house_keeper), h("td", { class: "px-2" }, d.unit), h("td", { class: "px-2" }, d.booking_nbr ? (h("ir-button", { btn_color: "link", btnStyle: {
                width: 'fit-content',
                padding: '0',
                margin: '0',
            }, labelStyle: {
                padding: '0',
            }, text: d.booking_nbr.toString(), onClick: () => {
                window.open(`https://x.igloorooms.com/manage/acbookingeditV2.aspx?BN=${d.booking_nbr}`, '_blank');
            } })) : ('N/A')))))))))));
    }
};
IrHkArchive.style = IrHkArchiveStyle0;

const irHkTasksCss = ".sc-ir-hk-tasks-h{display:block}@media only screen and (max-width: 900px){.table-container.sc-ir-hk-tasks{width:max-content !important}}";
const IrHkTasksStyle0 = irHkTasksCss;

const IrHkTasks = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clearSelectedHkTasks = createEvent(this, "clearSelectedHkTasks", 7);
        this.language = '';
        this.ticket = '';
        this.isLoading = false;
        this.selectedDuration = '';
        this.selectedHouseKeeper = '0';
        this.selectedRoom = null;
        this.archiveOpened = false;
        this.tasks = [];
        this.selectedTasks = [];
        this.hkNameCache = {};
        this.roomService = new RoomService();
        this.houseKeepingService = new HouseKeepingService();
        this.token = new Token();
    }
    componentWillLoad() {
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.init();
    }
    handleCloseSidebar(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.isSidebarOpen = false;
    }
    async init() {
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
            const requests = [
                this.houseKeepingService.getHkTasks({ property_id: this.property_id, from_date: hooks().format('YYYY-MM-DD'), to_date: hooks().format('YYYY-MM-DD') }),
                this.houseKeepingService.getExposedHKSetup(this.property_id),
                this.roomService.fetchLanguage(this.language),
            ];
            if (this.propertyid) {
                requests.push(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                    include_units_hk_status: true,
                }));
            }
            const results = await Promise.all(requests);
            const tasks = results[0];
            if (tasks) {
                this.updateTasks(tasks);
            }
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    buildHousekeeperNameCache() {
        var _a, _b;
        this.hkNameCache = {};
        (_b = (_a = housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.forEach(hk => {
            if (hk.id != null && hk.name != null) {
                this.hkNameCache[hk.id] = hk.name;
            }
        });
    }
    updateTasks(tasks) {
        this.buildHousekeeperNameCache();
        this.tasks = tasks.map(t => (Object.assign(Object.assign({}, t), { id: v4(), housekeeper: (() => {
                var _a, _b, _c;
                const name = this.hkNameCache[t.hkm_id];
                if (name) {
                    return name;
                }
                const hkName = (_c = (_b = (_a = housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.find(hk => hk.id === t.hkm_id)) === null || _c === void 0 ? void 0 : _c.name;
                this.hkNameCache[t.hkm_id] = hkName;
                return hkName;
            })() })));
    }
    handleHeaderButtonPress(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { name } = e.detail;
        switch (name) {
            case 'cleaned':
                (_a = this.modal) === null || _a === void 0 ? void 0 : _a.openModal();
                break;
            case 'export':
                break;
            case 'archive':
                this.isSidebarOpen = true;
                break;
        }
    }
    async handleModalConfirmation(e) {
        try {
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (this.selectedTasks.length === 0) {
                return;
            }
            await this.houseKeepingService.executeHKAction({
                actions: this.selectedTasks.map(t => ({ description: 'Cleaned', hkm_id: t.hkm_id === 0 ? null : t.hkm_id, unit_id: t.unit.id, booking_nbr: t.booking_nbr })),
            });
            await this.fetchTasksWithFilters();
        }
        finally {
            this.selectedTasks = [];
            this.clearSelectedHkTasks.emit();
            this.modal.closeModal();
        }
    }
    async applyFilters(e) {
        try {
            this.isApplyFiltersLoading = true;
            e.stopImmediatePropagation();
            e.stopPropagation();
            this.filters = Object.assign({}, e.detail);
            await this.fetchTasksWithFilters();
        }
        catch (error) {
            console.log(error);
        }
        finally {
            this.isApplyFiltersLoading = false;
        }
    }
    async fetchTasksWithFilters() {
        var _a;
        const { cleaning_periods, housekeepers, cleaning_frequencies, dusty_units, highlight_check_ins } = (_a = this.filters) !== null && _a !== void 0 ? _a : {};
        const tasks = await this.houseKeepingService.getHkTasks({
            housekeepers,
            cleaning_frequencies: cleaning_frequencies === null || cleaning_frequencies === void 0 ? void 0 : cleaning_frequencies.code,
            dusty_units: dusty_units === null || dusty_units === void 0 ? void 0 : dusty_units.code,
            highlight_window: highlight_check_ins === null || highlight_check_ins === void 0 ? void 0 : highlight_check_ins.code,
            property_id: this.property_id,
            from_date: hooks().format('YYYY-MM-DD'),
            to_date: (cleaning_periods === null || cleaning_periods === void 0 ? void 0 : cleaning_periods.code) || hooks().format('YYYY-MM-DD'),
        });
        if (tasks) {
            this.updateTasks(tasks);
        }
    }
    render() {
        if (this.isLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", null), h("ir-interceptor", null), h("section", { class: "p-2 d-flex flex-column", style: { gap: '1rem' } }, h("ir-tasks-header", { onHeaderButtonPress: this.handleHeaderButtonPress.bind(this), isCleanedEnabled: this.selectedTasks.length > 0 }), h("div", { class: "d-flex flex-column flex-md-row mt-1 ", style: { gap: '1rem' } }, h("ir-tasks-filters", { isLoading: this.isApplyFiltersLoading, onApplyFilters: e => {
                this.applyFilters(e);
            } }), h("ir-tasks-table", { onRowSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.selectedTasks = e.detail;
            }, class: "flex-grow-1 w-100", tasks: this.tasks }))), h("ir-modal", { autoClose: false, ref: el => (this.modal = el), isLoading: isRequestPending('/Execute_HK_Action'), onConfirmModal: this.handleModalConfirmation.bind(this), iconAvailable: true, icon: "ft-alert-triangle danger h1", leftBtnText: locales.entries.Lcz_NO, rightBtnText: locales.entries.Lcz_Yes, leftBtnColor: "secondary", rightBtnColor: 'primary', modalTitle: locales.entries.Lcz_Confirmation, modalBody: 'Update selected unit(s) to Clean' }), h("ir-sidebar", { open: this.isSidebarOpen, side: 'right', id: "editGuestInfo", onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isSidebarOpen = false;
            }, showCloseButton: false }, this.isSidebarOpen && h("ir-hk-archive", { propertyId: this.property_id, slot: "sidebar-body" }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrHkTasks.style = IrHkTasksStyle0;

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (h("button", { key: 'd64ce3c491b847e9a8790224415088322dd81101', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '0e10404beb2eb691ad7161e88a1ba693b1c97e57', name: "icon" })));
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

const irInterceptorCss = ".page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:white}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;left:0;height:100vh;width:100vw;z-index:100000;background:rgba(0, 0, 0, 0.2);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrInterceptorStyle0 = irInterceptorCss;

const IrInterceptor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toast = createEvent(this, "toast", 7);
        this.isShown = false;
        this.isLoading = false;
        this.isUnassignedUnit = false;
        this.endpointsCount = 0;
        this.isPageLoadingStoped = null;
        this.handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings'];
    }
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStoped = e.detail;
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
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStoped !== extractedUrl) {
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
            this.isPageLoadingStoped = null;
        }
        interceptor_requests[extractedUrl] = 'done';
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
        return (h(Host, { key: 'a908c483c10095b716ff7572ef0716192903f24f' }, this.isLoading && !this.isPageLoadingStoped && (h("div", { key: '931db26acd622e63330c02fc948574be37614a4c', class: "loadingScreenContainer" }, h("div", { key: 'b39a369ccca4b01e444d14191b06ea272ee46c99', class: "loaderContainer" }, h("span", { key: 'ac6c895aa4e950e9252ff17820e36f32695d6aad', class: "page-loader" }))))));
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
        return (h(Host, { key: 'c8d0f9d33be9ab10b362bdea7f16b654decfb063' }, h("span", { key: '74eb20aa90bcbbdac7412683e64308ac4d693469', class: "loader" })));
    }
};
IrLoadingScreen.style = IrLoadingScreenStyle0;

const irModalCss = ".backdropModal.sc-ir-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-modal{padding:10px;background:white;border-radius:5px}.ir-alert-header.sc-ir-modal{display:flex;font-size:1rem;font-weight:700}.modal.sc-ir-modal{z-index:1001 !important}.modal-dialog.sc-ir-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-modal{gap:10px}.ir-modal.sc-ir-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
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
            h("div", { key: '36cc70ff17e3519862ffcff3c381b0ca8b6994f0', class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.cancelModal.emit();
                    if (this.autoClose && !this.isLoading) {
                        this.closeModal();
                    }
                } }),
            h("div", { key: '81948f9191df9edd07ac92b359f35325fa903453', "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, h("div", { key: '3f8fcf0c7fbc8b7eb24dca2afe2ec2310bc12054', class: `ir-alert-content p-2` }, this.showTitle && (h("div", { key: 'bc17fad3f4542967c8d7011fb5c15aa58addd933', class: `ir-alert-header` }, h("p", { key: 'cc1ce9f01a23652eaa664f32c02a820616e534d0' }, this.modalTitle))), h("div", { key: '4820b3813e2195798999738ec280599405af7c17', class: "modal-body text-left p-0 mb-2" }, h("div", { key: '39ff866daaaae5df46357fb83057f7bd7a9f9bb9' }, this.modalBody)), h("div", { key: '348865248a2baa4e55e86373a34b1aae16cede44', class: `ir-alert-footer border-0  d-flex justify-content-${this.btnPosition === 'center' ? 'center' : this.btnPosition === 'left' ? 'start' : 'end'}` }, this.leftBtnActive && (h("ir-button", { key: '1bd184929dba6ddcae29a56f615e1ed8322f7b82', btn_disabled: this.isLoading, icon: '', btn_color: this.leftBtnColor, btn_block: true, text: this.leftBtnText, name: this.leftBtnText })), this.rightBtnActive && (h("ir-button", { key: 'b31072eb04cb8ece2500cbfe05ba5ff007c93ec3', icon: '', btn_color: this.rightBtnColor, btn_disabled: this.isLoading, isLoading: this.isLoading, btn_block: true, text: this.rightBtnText, name: this.rightBtnText }))))),
        ];
    }
};
IrModal.style = IrModalStyle0;

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
        let label = (h("div", { key: '3a79d530c4ae85606730039f90d6e77f08c9e66d', class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { key: 'f656d850e51b740282adca9a07bf364e7d659455', htmlFor: this.select_id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : '')));
        if (this.selectStyle === false) {
            className = '';
        }
        if (this.required && !this.valid && !this.initial) {
            className = `${className} border-danger`;
        }
        if (!this.LabelAvailable) {
            label = '';
        }
        return (h("div", { key: '2f690e6456b14a63c95f57159c5812ebf4df036b', class: `form-group m-0 ${this.selectContainerStyle}` }, h("div", { key: '76c3d41fc00e7ac4146df173691ecbe8dda4450a', class: "input-group row m-0" }, label, h("select", { key: '3d668d28b289c2bb91bba687ccab2031afe850f6', style: this.selectForcedStyles, ref: el => (this.selectEl = el), id: this.select_id, class: `${this.selectStyles} ${className} form-control-${this.size} text-${this.textSize} col-${this.LabelAvailable ? 12 - this.labelWidth : 12}`, onInput: this.handleSelectChange.bind(this), required: this.required }, this.showFirstOption && h("option", { key: '8f3d3ee04748241e6642a4f951dd1c02db95079d', value: '' }, this.firstOption), this.data.map(item => {
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

const irSidebarCss = ".backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;cursor:pointer;background:rgba(0, 0, 0, 0.5);z-index:99;transition:all 0.5s;opacity:0;pointer-events:none;transition:all 0.5s}.backdrop.active{opacity:1;pointer-events:all}.sidebar-right{position:fixed;top:0;right:-120%;bottom:0;width:var(--sidebar-width, 40rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:100;overflow-y:hidden;color:var(--sidebar-color, #000);background-color:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-right.active{right:0;overflow-y:auto}.sidebar-left{position:fixed;top:0;left:-100%;bottom:0;width:var(--sidebar-width, 30rem);max-width:100%;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:all 0.5s;z-index:200;overflow-y:hidden;color:var(--sidebar-color, #000);background:var(--sidebar-backgound, #fff);padding:var(--ir-sidebar-padding, 0.5rem 0)}.sidebar-title{display:flex;align-items:center;justify-content:space-between;padding:0 1rem;border-bottom:1px solid #e4e5ec}.sidebar-title p{font-weight:500;font-size:1.2rem}.sidebar-left.active{left:0;overflow-y:scroll}.close{position:absolute;top:0.5rem;right:1rem;width:1rem;height:1rem;cursor:pointer}";
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
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    componentDidLoad() {
        // If esc key is pressed, close the modal
        this.applyStyles();
        document.addEventListener('keydown', this.handleKeyDown);
    }
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            return this.toggleSidebar();
        }
        else {
            return;
        }
    }
    // Unsubscribe to the event when the component is removed from the DOM
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
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
            h("div", { key: '3faa8d5eca6d616bba38ea2135ddd2c8511d6d46', class: `backdrop ${className}`, onClick: () => {
                    this.toggleSidebar();
                } }),
            h("div", { key: '90372907cd18e2434193f46b2636b963df89f3b1', ref: el => (this.sidebarRef = el), class: `sidebar-${this.side} ${className}` }, this.showCloseButton && (h("div", { key: 'dd12447011c86ff440594e1d351a717ee86fbdc0', class: 'sidebar-title' }, h("p", { key: '8076dbfffcc7ba75cfe1ea28a894bf90ff205b44', class: 'p-0 m-0' }, this.label), h("div", { key: 'd5d37b7752e42590c0e399ee070839ad10a9096e', class: 'p-0 m-0 sidebar-icon-container' }, h("ir-icon", { key: '3620c6a641cb5c136a9b9a6aec8d7592f103db64', class: "", onIconClickHandler: () => {
                    this.toggleSidebar();
                } }, h("svg", { key: '0764e63115f9fe9d18b4148304237232b24beb98', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'cb60e3f85b54024365a3aac509af43ee27ae103f', fill: "#6b6f82", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))), h("slot", { key: '0e4b1f764975a7f06c0f5c78c2f4bd92c3ba2043', name: "sidebar-body" })),
        ];
    }
    static get watchers() { return {
        "sidebarStyles": ["handleSidebarStylesChange"]
    }; }
};
IrSidebar.style = IrSidebarStyle0;

const irTasksFiltersCss = ".sc-ir-tasks-filters-h{display:block;min-width:20vw;height:100%}@media (min-width: 768px){.collapse-btn.sc-ir-tasks-filters{display:none}#hkTasksFiltersCollapse.collapse.sc-ir-tasks-filters:not(.show){display:block}}";
const IrTasksFiltersStyle0 = irTasksFiltersCss;

const IrTasksFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
        this.filters = {
            cleaning_periods: {
                code: '',
            },
            housekeepers: {
                ids: [],
            },
            cleaning_frequencies: { code: '' },
            dusty_units: { code: '' },
            highlight_check_ins: { code: '' },
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        var _a, _b, _c, _d, _e;
        this.baseFilters = {
            cleaning_periods: (_a = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _a === void 0 ? void 0 : _a.cleaning_periods[0],
            housekeepers: { ids: (_b = housekeeping_store.hk_criteria.housekeepers) === null || _b === void 0 ? void 0 : _b.map(h => h.id) },
            cleaning_frequencies: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_frequencies[0],
            dusty_units: (_d = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _d === void 0 ? void 0 : _d.dusty_periods[0],
            highlight_check_ins: (_e = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _e === void 0 ? void 0 : _e.highlight_checkin_options[0],
        };
        this.filters = Object.assign({}, this.baseFilters);
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
        this.filters = Object.assign({}, this.baseFilters);
        this.applyFilters.emit(this.filters);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        return (h("div", { key: '0ab43eb17ea5044643fa26c5f38dbdb3bdec2cbc', class: "card mb-0 p-1 d-flex flex-column" }, h("div", { key: 'eb1602381b1a0c0592f8a566c1602461b9af3e70', class: "d-flex align-items-center justify-content-between" }, h("div", { key: '9399faadd850f3bdf2ba0540f200846905f60050', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '9334fcfa03a8cc031b285d400da37500035e693e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '67cf103696b99d01c2bedbdd5e69f6e816845491', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'e471386eedc5bd07a4c11ecc5c7feb05a134841d', class: "m-0 p-0 flex-grow-1" }, "Filters")), h("ir-button", { key: 'bea4ff677eb2243bcb1eb99897bce6be6439a6cf', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#hkTasksFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", class: "mr-1 collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '61bb78025e3b420132c31484768ad3cd62c892fa', class: "m-0 p-0 collapse", id: "hkTasksFiltersCollapse" }, h("div", { key: '32963c826f7ddb25e1d0afde01c19ab08dfde307', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '6b60a4303ab726c6ab7f8af444db2cacd211d574', class: "pt-1" }, h("p", { key: '1cd81ad57e0b696774ff5d5bdfc0a201e51f1ff8', class: "m-0 p-0" }, "Period"), h("ir-select", { key: '3c6ac5b7e73ba08e680fc5137409a2181f617db3', selectedValue: (_b = (_a = this.filters) === null || _a === void 0 ? void 0 : _a.cleaning_periods) === null || _b === void 0 ? void 0 : _b.code, LabelAvailable: false, showFirstOption: false, data: (_c = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _c === void 0 ? void 0 : _c.cleaning_periods.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_periods: { code: e.detail } });
            } })), h("fieldset", { key: '5b1895c331210a54a3dd250f1310ace91484ea3e' }, h("p", { key: '4adc903639e33a90d5e1fef57b46e81af504b713', class: "m-0 p-0" }, "Housekeepers"), h("ir-select", { key: '78fbc5fd97262f8b2d5ff60f95764f5996a6e34c', selectedValue: ((_e = (_d = this.filters) === null || _d === void 0 ? void 0 : _d.housekeepers) === null || _e === void 0 ? void 0 : _e.ids.length) === housekeeping_store.hk_criteria.housekeepers.length ? '000' : (_g = (_f = this.filters) === null || _f === void 0 ? void 0 : _f.housekeepers) === null || _g === void 0 ? void 0 : _g.ids[0].toString(), LabelAvailable: false, showFirstOption: false, data: [
                { text: 'All housekeepers', value: '000' },
                ...(_h = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _h === void 0 ? void 0 : _h.housekeepers.map(v => ({
                    text: v.name,
                    value: v.id.toString(),
                })),
            ], onSelectChange: e => {
                var _a, _b;
                if (e.detail === '000') {
                    this.updateFilter({ housekeepers: { ids: (_b = (_a = this.baseFilters) === null || _a === void 0 ? void 0 : _a.housekeepers) === null || _b === void 0 ? void 0 : _b.ids } });
                }
                else {
                    this.updateFilter({ housekeepers: { ids: [e.detail] } });
                }
            } })), h("fieldset", { key: '6ecf776f5d4b7b781a5e2d6669fe1e65b063802f' }, h("p", { key: '77871f09f24f97ff5890582fd3ba31ae02ec4353', class: "m-0 p-0" }, "Cleaning frequency"), h("ir-select", { key: '85acf32bacb79792f51c3e02b1d9f06f21eda32b', selectedValue: (_k = (_j = this.filters) === null || _j === void 0 ? void 0 : _j.cleaning_frequencies) === null || _k === void 0 ? void 0 : _k.code, LabelAvailable: false, showFirstOption: false, data: (_l = housekeeping_store === null || housekeeping_store === void 0 ? void 0 : housekeeping_store.hk_criteria) === null || _l === void 0 ? void 0 : _l.cleaning_frequencies.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                this.updateFilter({ cleaning_frequencies: { code: e.detail } });
            } })), h("fieldset", { key: '215b34c96ab6ad5c6c73902bf0aa7b6896a2b3ba' }, h("p", { key: '589af6173a26da7a89750dfabfe284a666ffe2d7', class: "m-0 p-0" }, "Dusty units"), h("ir-select", { key: 'bc165763d8c246eaa98b00bee28d851d7e2ce9d3', showFirstOption: false, LabelAvailable: false, data: (_o = (_m = housekeeping_store.hk_criteria) === null || _m === void 0 ? void 0 : _m.dusty_periods) === null || _o === void 0 ? void 0 : _o.map(v => ({
                text: v.description,
                value: v.code,
            })), onSelectChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ dusty_units: { code: e.detail } });
            } })), h("fieldset", { key: '99a2999710db6e6f0cfcb348a91a09cd9efc51f4', class: "mb-1" }, h("p", { key: '54e6871b20061b6046ff4fbfde7bd204dc8dca9d', class: "m-0 p-0" }, "Highlight check-ins"), h("ir-select", { key: '0c6fb939e4134364a3a3dec082bec3e1510ddbc8', selectedValue: (_q = (_p = this.filters) === null || _p === void 0 ? void 0 : _p.highlight_check_ins) === null || _q === void 0 ? void 0 : _q.code, LabelAvailable: false, showFirstOption: false, onSelectChange: e => {
                this.updateFilter({ highlight_check_ins: { code: e.detail } });
            }, data: (_s = (_r = housekeeping_store.hk_criteria) === null || _r === void 0 ? void 0 : _r.highlight_checkin_options) === null || _s === void 0 ? void 0 : _s.map(v => ({
                text: v.description,
                value: v.code,
            })) })), h("div", { key: 'd3515ace3b9e39bc36acf6b0fd4c4394917ccbc8', class: "d-flex align-items-center justify-content-end", style: { gap: '1rem' } }, h("ir-button", { key: 'd34fa4c4d73d508db73ff494487c0c6137e2a530', btn_type: "button", text: "Reset", size: "sm", btn_color: "outline", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '25da376cac7e3f2acff20577678f2c81d78c79f6', btn_type: "button", isLoading: this.isLoading, text: "Apply", size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
};
IrTasksFilters.style = IrTasksFiltersStyle0;

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '903ff4ceebb0279911e5f2c85f8b799b0e185f9d', class: "d-flex align-items-center justify-content-between" }, h("h3", { key: '8769c746e274f1e268a32494273eb4d4275b5281' }, "Housekeeping Tasks"), h("div", { key: '66481ab316d48713f052bb3924d7aa5245710509', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: 'db8fe6513ab4ade32025c2d4220336aa59dbabf8', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }), h("ir-button", { key: 'de6b4aa2f0396c4f95005109ce80e97434a85a94', size: "sm", btn_color: "outline", text: "Archive", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: 'df3f3be1d8abfd76ffb79f4150be63407901e5a4', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
};
IrTasksHeader.style = IrTasksHeaderStyle0;

const irTasksTableCss = ".sc-ir-tasks-table-h{display:flex;align-items:center}.selected-row.sc-ir-tasks-table{background-color:rgba(0, 0, 255, 0.1)}.selected-row.sc-ir-tasks-table:hover{background-color:rgba(0, 0, 255, 0.15)}.header-content.sc-ir-tasks-table{height:100%}.sortable.sc-ir-tasks-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-tasks-table svg.sc-ir-tasks-table{color:var(--blue)}.task-row.sc-ir-tasks-table,.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{padding:0.25rem 0.5rem !important;white-space:nowrap;max-width:max-content !important;border:0}.highlighted-unit.sc-ir-tasks-table{background:#000;color:white;padding:0.2rem 0.3rem;border-radius:4px}.table.sc-ir-tasks-table th.sc-ir-tasks-table,.table.sc-ir-tasks-table td.sc-ir-tasks-table{text-align:start}.table-container.sc-ir-tasks-table{max-height:80vh}.task-table-row.sc-ir-tasks-table{background:white !important}.task-table-row.sc-ir-tasks-table:hover{background:#e2e6ea3f !important}.selected.sc-ir-tasks-table{background:#e3f3fa !important}.sortable.sc-ir-tasks-table:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-tasks-table:active{color:#212529;background-color:#dae0e5;border-color:#d3d9df}";
const IrTasksTableStyle0 = irTasksTableCss;

const IrTasksTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.animateCleanedButton = createEvent(this, "animateCleanedButton", 7);
        this.rowSelectChange = createEvent(this, "rowSelectChange", 7);
        this.tasks = [];
        /**
         * Tracks which task IDs are currently selected via checkboxes.
         */
        this.selectedIds = [];
        /**
         * Controls whether the "Confirm Clean" modal is shown.
         */
        this.showConfirmModal = false;
        /**
         * The key we are sorting by (e.g., "date", "unit", "status", "housekeeper").
         */
        this.sortKey = 'date';
        /**
         * The sort direction: ASC or DESC.
         */
        this.sortDirection = 'ASC';
        this.checkableTasks = [];
    }
    componentWillLoad() {
        this.sortTasks('date', 'ASC');
        if (this.tasks) {
            this.assignCheckableTasks();
        }
    }
    /**
     * Sorts the tasks by the given key. If no direction is provided,
     * it toggles between ascending and descending.
     */
    handleSort(key) {
        let newDirection = this.sortDirection;
        // If we're clicking the same column, flip the direction. If a new column, default to ASC.
        if (this.sortKey === key) {
            newDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            newDirection = 'ASC';
        }
        this.sortTasks(key, newDirection);
    }
    handleClearSelectedHkTasks(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.selectedIds = [];
    }
    handleTasksChange(newTasks) {
        if (newTasks === null || newTasks === void 0 ? void 0 : newTasks.length) {
            this.selectedIds = [];
            this.assignCheckableTasks();
        }
    }
    /**
     * Helper to sort tasks array in state.
     */
    /**
     * Sorts the tasks by the given key in ASC or DESC order.
     * If values for `key` are duplicates, it sorts by `date` ascending.
     * If `date` is also the same, it finally sorts by `unit.name` ascending.
     */
    sortTasks(key, direction) {
        const sorted = [...this.tasks].sort((a, b) => {
            var _a, _b, _c, _d;
            // Primary comparison: a[key] vs b[key]
            let aPrimary = a[key];
            let bPrimary = b[key];
            if (key === 'status') {
                aPrimary = a[key].description;
                bPrimary = b[key].description;
            }
            if (aPrimary < bPrimary) {
                return direction === 'ASC' ? -1 : 1;
            }
            if (aPrimary > bPrimary) {
                return direction === 'ASC' ? 1 : -1;
            }
            // First tiebreaker: compare by date (always ascending)
            if (a.date < b.date)
                return -1;
            if (a.date > b.date)
                return 1;
            // Second tiebreaker: compare by unit.name (always ascending)
            if (((_a = a.unit) === null || _a === void 0 ? void 0 : _a.name) < ((_b = b.unit) === null || _b === void 0 ? void 0 : _b.name))
                return -1;
            if (((_c = a.unit) === null || _c === void 0 ? void 0 : _c.name) > ((_d = b.unit) === null || _d === void 0 ? void 0 : _d.name))
                return 1;
            return 0;
        });
        // Update component state
        this.tasks = sorted;
        this.sortKey = key;
        this.sortDirection = direction;
    }
    /**
     * Helper to toggle selection for a single row.
     */
    toggleSelection(id) {
        if (this.selectedIds.includes(id)) {
            this.selectedIds = this.selectedIds.filter(item => item !== id);
        }
        else {
            this.selectedIds = [...this.selectedIds, id];
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    emitSelectedTasks() {
        if (this.tasks.length === 0) {
            return;
        }
        const filteredTasks = this.tasks.filter(t => this.selectedIds.includes(t.id));
        this.rowSelectChange.emit(filteredTasks);
    }
    /**
     * Checks if every row is selected.
     */
    get allSelected() {
        return this.checkableTasks.length > 0 && this.selectedIds.length === this.checkableTasks.length;
    }
    /**
     * Toggles selection on all visible tasks at once.
     */
    toggleSelectAll() {
        if (this.allSelected) {
            this.selectedIds = [];
        }
        else {
            this.selectedIds = this.checkableTasks.map(t => t.id);
            this.animateCleanedButton.emit(null);
        }
        this.emitSelectedTasks();
    }
    /**
     * Assigns checkable tasks based on predefined criteria.
     *
     * This method filters tasks and determines which ones are eligible
     * to be selected using checkboxes. A task is considered "checkable"
     * if its date is today or earlier.
     *
     * The filtered tasks are stored in `this.checkableTasks`, ensuring
     * only relevant tasks can be interacted with by users.
     */
    assignCheckableTasks() {
        const tasks = [];
        this.tasks.forEach(task => {
            if (this.isCheckable(task)) {
                tasks.push(task);
            }
        });
        this.checkableTasks = [...tasks];
    }
    /**
     * Determines if a task is checkable.
     *
     * A task is considered checkable if its date is today or any day before.
     * This prevents users from selecting tasks with future dates.
     *
     * @param {string} date - The task's date in 'YYYY-MM-DD' format.
     * @returns {boolean} - Returns `true` if the task's date is today or earlier, otherwise `false`.
     */
    isCheckable(task) {
        if (!task.hkm_id) {
            return false;
        }
        return hooks(task.date, 'YYYY-MM-DD').isSameOrBefore(hooks(), 'days');
    }
    render() {
        return (h("div", { key: '5411b152b8ea911b9a54a6867442b4122bf935da', class: "card table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: 'b19fa2991af98a4cb11e12334ac3f09fac831186', class: "table" }, h("thead", { key: 'b41cb4f57657adc68d888f7e7c1790f9258b18e3', class: "table-header" }, h("tr", { key: '1e0e02505f2254eaa37c53cfeb8fa15573347948' }, h("th", { key: '2c1bac6183fbf1d8f224d200875e9d77d9d7a4aa' }, h("ir-checkbox", { key: 'fe04eedeef8da7bc5b83c7553b35969f962bd6f9', indeterminate: this.selectedIds.length > 0 && this.selectedIds.length < this.checkableTasks.length, checked: this.allSelected, onCheckChange: () => this.toggleSelectAll() })), h("th", { key: '63cfa273064e11eb994721d98b653710f734d6bb' }, "Period"), h("th", { key: 'dcafdbee419ae981bd667efe815c8023d272b97d' }, "Unit"), h("th", { key: 'facbe6f6e49fa1e8130a7c1d1f6ff5273e27b239', class: 'sortable', onClick: () => this.handleSort('status') }, h("div", { key: '86958e4eef4a3bc76f4f2192accc0063be965269', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: 'f4e2f3fa929b7f43a63995ac3b7e6ef857b32c88' }, "Status"), h("svg", { key: '1e1d59cd8298a1862052f8a9b2a78900fbf73dc0', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: 'e96e3e21948525c30fea660003e78371a6deef60', d: "m21 16-4 4-4-4" }), h("path", { key: '8182583634243b651b71e21876220cdc5b804a58', d: "M17 20V4" }), h("path", { key: '6a1602f0b760f83fc3b2222b93b4005b2f1cce8d', d: "m3 8 4-4 4 4" }), h("path", { key: '9a67444fbe83c6fd123cac58ffeac6ca20e20bce', d: "M7 4v16" })))), h("th", { key: '7fe0c07d914da317b3e9549e23eeb36302f339be' }, "Hint"), h("th", { key: '474c75bc7257e45cd0956541ca088078abeadec8' }, "A"), h("th", { key: '9e31a1ae1c2a399feee2a1d416190d946e4ae8a6' }, "C"), h("th", { key: '2eea3de1349bb3fefda4c5650773e7dabce3dd0a' }, "I"), h("th", { key: 'a023943e7d4e164a6e1852d2b9a66d36c30b01bb', style: { textAlign: 'start' }, class: 'sortable', onClick: () => this.handleSort('housekeeper') }, h("div", { key: '834dddcf85e84f91d3fae765e81dc8c3dac05ba3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("span", { key: '87c07e74aa3a5a81506aca352217f5190a865af0' }, "Housekeeper"), h("svg", { key: '5ae0319fd8e8f2ba53e2546aa28e7c41eb0a4f67', xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", class: "lucide lucide-arrow-up-down" }, h("path", { key: '1670c67552d3e1ce57408e48dcf03c7fc8cf3c97', d: "m21 16-4 4-4-4" }), h("path", { key: '21ff5c326ad98c7a0e495d55f1aa33012ec007b2', d: "M17 20V4" }), h("path", { key: 'c634856db31588292156189512083499c4e71c25', d: "m3 8 4-4 4 4" }), h("path", { key: '28c5d49b9fb3bb6b0d40b26ccf544bdb45df02f7', d: "M7 4v16" })))))), h("tbody", { key: 'a6d9a000c30c6224545602ca3de49019a02b4b58' }, this.tasks.length === 0 && (h("tr", { key: 'f2fe8b423be5b7a39f678beda334922b72088762' }, h("td", { key: 'b3e41444cf8978e5f08220f38ba154b80c566666', colSpan: 9, class: "text-center" }, h("div", { key: 'ac5ef302c6a4f1f02970a620dc3e5309ca9de6e4', style: { height: '300px' }, class: "d-flex align-items-center justify-content-center" }, h("span", { key: '81b406854a85600c3fdf9d7ecb037a2662870c5b' }, " No Tasks Found"))))), this.tasks.map(task => {
            var _a;
            const isSelected = this.selectedIds.includes(task.id);
            const isCheckable = this.isCheckable(task);
            return (h("tr", { style: isCheckable && { cursor: 'pointer' }, onClick: () => {
                    if (!isCheckable) {
                        return;
                    }
                    this.toggleSelection(task.id);
                }, class: { 'selected': isSelected, 'task-table-row': true }, key: task.id }, h("td", { class: "task-row" }, isCheckable && h("ir-checkbox", { checked: isSelected })), h("td", { class: "task-row" }, task.formatted_date), h("td", { class: "task-row" }, h("span", { class: { 'highlighted-unit': task.is_highlight } }, task.unit.name)), h("td", { class: "task-row" }, task.status.description), h("td", { class: "task-row" }, task.hint), h("td", { class: "task-row" }, task.adult), h("td", { class: "task-row" }, task.child), h("td", { class: "task-row" }, task.infant), h("td", { class: "w-50 task-row", style: { textAlign: 'start' } }, (_a = task.housekeeper) !== null && _a !== void 0 ? _a : 'Unassigned')));
        })))));
    }
    static get watchers() { return {
        "tasks": ["handleTasksChange"]
    }; }
};
IrTasksTable.style = IrTasksTableStyle0;

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
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
        return (h(Host, { key: '2eb05ade46f9ce12b4cb82a944af51185a1d39f9' }, h("h4", { key: 'a9373ced9e5fe3e719c06aa89ac2ffb50422de68', class: "text-left font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: 'ad2db3c999012c6d9cafa093087693c52c533ef9', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '81195971b64a733f91cc2286538f2016bee30bb5', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'a6b2080f2d5c6b40f73bf92ab9539e42e9e46e65', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: 'd7210a83e714fd562480a00ea213da97185b8f93', class: 'title-body' }, h("slot", { key: 'acbdef14de649c9dc801a78b13843794ec6826f9', name: "title-body" })))));
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
        return h(Host, { key: '76f52cbb3274f0d2bb90a9584c97a61a0671af29' });
    }
    get element() { return getElement(this); }
};
IrToast.style = IrToastStyle0;

export { IglDateRange as igl_date_range, IrButton as ir_button, IrCheckbox as ir_checkbox, IrCommon as ir_common, IrDateRange as ir_date_range, IrHkArchive as ir_hk_archive, IrHkTasks as ir_hk_tasks, IrIcon as ir_icon, IrIcons as ir_icons, IrInterceptor as ir_interceptor, IrLoadingScreen as ir_loading_screen, IrModal as ir_modal, IrSelect as ir_select, IrSidebar as ir_sidebar, IrTasksFilters as ir_tasks_filters, IrTasksHeader as ir_tasks_header, IrTasksTable as ir_tasks_table, IrTitle as ir_title, IrToast as ir_toast };

//# sourceMappingURL=igl-date-range_19.entry.js.map