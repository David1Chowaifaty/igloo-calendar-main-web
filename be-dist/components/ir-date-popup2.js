import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { a as app_store } from './app.store.js';
import { d as defineCustomElement$4 } from './ir-date-range2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-popover2.js';
import { d as dateFns } from './utils.js';

const irDatePopupCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.border{border-width:1px}:host{display:block}.date-range-container{background:#fff;border:1px solid var(--gray-100);border-radius:8px;box-shadow:0 12px 16px -4px rgba(16,24,40,.08),0 4px 6px -2px rgba(16,24,40,.03);box-sizing:border-box}.popover-trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:var(--radius,8px);box-sizing:border-box;color:var(--gray-700);cursor:pointer;display:inline-flex;gap:16px;line-height:1;min-width:230px;padding:5px 14px}.popover-trigger:active,.popover-trigger:focus-visible,.popover-trigger[data-state=opened]{border-color:var(--brand-300,#84caff);box-shadow:0 1px 2px 0 rgba(16,24,40,.08),0 0 0 4px var(--brand-100,#d1e9ff)}.popover-trigger p{font-size:.75rem;margin:0;padding:0}.date{color:var(--gray-600);font-size:.875rem!important;font-weight:400;margin-top:3px!important}.static{position:static}.flex{display:flex}.w-full{width:100%}.max-w-96{max-width:24rem}.flex-1{flex:1 1 0%}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.rounded-md{border-radius:.375rem}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:w-fit{width:fit-content}.sm\\:flex-row{flex-direction:row}.sm\\:flex-wrap{flex-wrap:wrap}.sm\\:justify-center{justify-content:center}}@media (min-width:1024px){.lg\\:mr-10{margin-right:2.5rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.h-5{height:1.25rem}.h-full{height:100%}.w-3{width:.75rem}.w-5{width:1.25rem}.items-end{align-items:flex-end}.gap-8{gap:2rem}.border-0{border-width:0}.text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139/var(--tw-text-opacity))}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}@media (min-width:640px){.sm\\:border{border-width:1px}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:w-3{width:.75rem}.md\\:p-4{padding:1rem}}@media (min-width:640px){.sm\\:p-4{padding:1rem}}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:0}.top-0{top:0}.z-40{z-index:40}.z-50{z-index:50}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.size-4{height:1rem;width:1rem}.w-40{width:10rem}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-2{gap:.5rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-b-none{border-bottom-left-radius:0;border-bottom-right-radius:0}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.px-4{padding-left:1rem;padding-right:1rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:size-7{height:1.75rem;width:1.75rem}}.absolute{position:absolute}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-4{top:1rem}.mt-8{margin-top:2rem}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}";
const IrDatePopupStyle0 = irDatePopupCss;

const IrDatePopup = /*@__PURE__*/ proxyCustomElement(class IrDatePopup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.minDate = dateFns.addDays(new Date(), -1);
        this.dates = {
            start: null,
            end: null,
        };
        this.isPopoverOpen = false;
    }
    handleDatesChange() {
        if (this.dates.end && this.isPopoverOpen) {
            this.popover.toggleVisibility();
        }
    }
    componentWillLoad() {
        this.minDate.setHours(0, 0, 0, 0);
    }
    dateTrigger() {
        return (h("div", { class: "popover-trigger w-full sm:w-fit", slot: "trigger" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "18", width: "12.5", viewBox: "0 0 448 512" }, h("path", { fill: "currentColor", d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" })), h("div", { class: "flex items-center gap-8 flex-1" }, h("div", null, h("p", null, "Check in"), h("p", { class: 'date' }, this.dates.start ? dateFns.format(this.dates.start, 'MMM dd', { locale: app_store.selectedLocale }) : h("span", { class: "text-slate-500" }, "Add date"))), h("div", { class: "flex flex-col items-end h-full" }, h("div", null, h("ir-icons", { name: "minus", svgClassName: " h-5 w-5 md:w-3 w-3" }))), h("div", null, h("p", null, "Check out"), h("p", { class: "date" }, this.dates.end ? dateFns.format(this.dates.end, 'MMM dd', { locale: app_store.selectedLocale }) : h("span", { class: "text-slate-500" }, "Add date"))))));
    }
    render() {
        return (h(Host, { key: 'a464155977bb77a7634262ed0d61e6821e4fbb23' }, h("ir-popover", { key: 'da5f75427305b3f2b832fdb6e5835c4ca376a237', ref: el => (this.popover = el), onOpenChange: e => (this.isPopoverOpen = e.detail) }, this.dateTrigger(), h("div", { key: '3545ccb3705dbcb7131a5c147bcaae705ee95925', slot: "popover-content", class: "date-range-container p-2 md:p-4 border-0 w-full shadow-none sm:border sm:w-auto sm:shadow-sm " }, h("ir-date-range", { key: 'b880c3f522cb6b80eedcc701d2361be5aaf17275', fromDate: this.dates.start, toDate: this.dates.end, locale: app_store.selectedLocale, maxSpanDays: 5, minDate: this.minDate })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "dates": ["handleDatesChange"]
    }; }
    static get style() { return IrDatePopupStyle0; }
}, [1, "ir-date-popup", {
        "dates": [16],
        "isPopoverOpen": [32]
    }, undefined, {
        "dates": ["handleDatesChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-date-popup", "ir-date-range", "ir-dialog", "ir-icons", "ir-popover"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-date-popup":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDatePopup);
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-popover":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrDatePopup as I, defineCustomElement as d };

//# sourceMappingURL=ir-date-popup2.js.map