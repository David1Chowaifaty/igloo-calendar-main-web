import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { m as moment } from './app.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-popup2.js';

const irWidgetDatePopupCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.block{display:block}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:host ir-popup .ir-widget__date-trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:min(var(--radius,.5rem),.5rem);box-sizing:border-box;cursor:pointer;display:flex!important;font-size:.875rem;gap:.875rem;height:40px;justify-content:flex-start;min-width:0;padding:.25rem .875rem;width:100%}:host ir-popup .ir-widget__date-trigger.--absolute-icon{padding-inline-start:2.25rem}.ir-widget__date-trigger:disabled{cursor:not-allowed!important;opacity:.5}:host ir-popup .ir-widget__date-trigger.ir-widget__trigger--loading{pointer-events:none}:host ir-popup .ir-widget__date-trigger[aria-expanded=true]{border-color:var(--gray-700)}.ir-multi-property-date-popup__popup:not([modal]){display:none}.ir-multi-property-date-popup__popup::part(body){height:90vh;overflow-y:auto;width:80dvw}.ir-multi-property-date-popup__popup[modal]::part(body){height:100%;inset:0;padding-bottom:2rem;position:fixed;width:auto}.ir-multi-property-date-popup__header{align-items:center;background-color:#fff;display:flex;justify-content:flex-end;position:sticky;top:0;z-index:9999}@media (min-width:640px){.ir-multi-property-date-popup__popup[modal]{display:none}.ir-multi-property-date-popup__popup:not([modal]){display:block}.ir-multi-property-date-popup__popup::part(body){height:330px;overflow-y:auto;width:auto}}@media only screen and (min-width:1200px){.ir-multi-property-date-popup__popup::part(body){height:382px}}:host ir-popup .ir-widget__date-trigger ir-icons{left:auto;position:static}:host ir-popup .ir-widget__date-trigger p{color:inherit;margin:0}.ir-widget__icon{height:1rem;width:1rem}.ir-widget__loading-icon{border-radius:999px;display:inline-block;height:1rem;width:1rem}.ir-widget__loading-range{align-items:center;display:flex;flex:1;gap:.5rem;min-width:0}.ir-widget__loading-line{border-radius:999px;display:inline-block;height:.5rem}.ir-widget__loading-line.--short{width:36%}.ir-widget__loading-line.--medium{width:44%}.ir-widget__shimmer{background-color:#e6e8ec;overflow:hidden;position:relative}.ir-widget__shimmer:after{animation:ir-widget-shimmer 1.6s ease-in-out infinite;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.65),transparent);content:\"\";inset:0;position:absolute;transform:translateX(-100%)}@keyframes ir-widget-shimmer{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}@media (prefers-reduced-motion:reduce){.ir-widget__shimmer:after{animation:none}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}";
const IrWidgetDatePopupStyle0 = irWidgetDatePopupCss;

const IrWidgetDatePopup = /*@__PURE__*/ proxyCustomElement(class IrWidgetDatePopup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.dateChange = createEvent(this, "dateChange", 7);
        this.absoluteIcon = false;
    }
    componentDidLoad() {
        var _a;
        this.mediaQueryList = window.matchMedia('(min-width: 640px)');
        this.handleMediaChange = e => {
            var _a;
            if (e.matches) {
                // We crossed into >= 640px
                (_a = this.mobileDatePopupModal) === null || _a === void 0 ? void 0 : _a.close();
            }
        };
        // Run once in case we load already at >= 640px
        if (this.mediaQueryList.matches) {
            (_a = this.mobileDatePopupModal) === null || _a === void 0 ? void 0 : _a.close();
        }
        this.mediaQueryList.addEventListener('change', this.handleMediaChange);
    }
    disconnectedCallback() {
        var _a;
        (_a = this.mediaQueryList) === null || _a === void 0 ? void 0 : _a.removeEventListener('change', this.handleMediaChange);
    }
    renderDateTrigger(slot = 'trigger') {
        var _a, _b;
        const from = (_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date;
        const to = (_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date;
        let fromLabel = '';
        let toLabel = '';
        if (from) {
            fromLabel = moment(from).format('DD MMM YYYY');
        }
        if (to) {
            toLabel = moment(to).format('DD MMM YYYY');
        }
        return (h("button", { disabled: this.disabled, class: `ir-widget__date-trigger relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "date-trigger", slot: slot }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex  items-center' : '' }, h("ir-icons", { name: "calendar", svgClassName: "ir-widget__icon", removeClassName: true, height: 16, width: 16 })), fromLabel && toLabel ? (h("div", null, h("p", null, h("span", null, fromLabel), h("span", null, " - "), h("span", null, toLabel)))) : (h("div", null, h("p", null, "Your dates")))));
    }
    renderLoadingTrigger(slot = 'trigger') {
        return (h("div", { class: `ir-widget__date-trigger ir-widget__trigger--loading relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "date-trigger", slot: slot, "aria-busy": "true" }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex  items-center' : '' }, h("span", { class: "ir-widget__loading-icon ir-widget__shimmer" })), h("div", { class: "ir-widget__loading-range" }, h("span", { class: "ir-widget__loading-line --short ir-widget__shimmer" }), h("span", { class: "ir-widget__loading-line --medium ir-widget__shimmer" }))));
    }
    renderDateRange() {
        var _a, _b;
        return (h("ir-date-range", { dateModifiers: this.dateModifiers, minDate: moment(), style: { '--radius': 'var(--ir-widget-radius)' }, fromDate: ((_a = this.dates) === null || _a === void 0 ? void 0 : _a.from_date) ? moment(this.dates.from_date) : null, toDate: ((_b = this.dates) === null || _b === void 0 ? void 0 : _b.to_date) ? moment(this.dates.to_date) : null, locale: this.locale, maxSpanDays: this.maxSpanDays, onDateChange: e => {
                var _a;
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { end, start } = e.detail;
                if (end && start) {
                    this.dateWidgetPopupRef.close();
                    (_a = this.mobileDatePopupModal) === null || _a === void 0 ? void 0 : _a.close();
                }
                this.dateChange.emit({
                    from_date: start,
                    to_date: end,
                });
            } }));
    }
    render() {
        return (h(Host, { key: 'f67a1acc36e75c9d21d2723cfd683a5f9368474f' }, h("ir-popup", { key: '39d51223cf3b3ed419f26d4e44c35fe35c7e91ea', modal: true, withArrow: true, class: "ir-multi-property-date-popup__popup", ref: el => (this.mobileDatePopupModal = el) }, this.isLoading ? this.renderLoadingTrigger('anchor') : this.renderDateTrigger('anchor'), !this.isLoading && (h("header", { key: '4c62383e58bb1c56ae22233a1e60ff6c1dfbf09b', class: 'ir-multi-property-date-popup__header' }, h("ir-button", { key: '242a92260e3a6d7a7059c4cd7c16b80d88d4ebfd', onButtonClick: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.mobileDatePopupModal.close();
            }, iconName: "xmark", variants: "icon" }))), !this.isLoading && this.renderDateRange()), h("ir-popup", { key: '57e684d42b907805e6391f2a35fb3e53481606e6', withArrow: true, class: "ir-multi-property-date-popup__popup", ref: el => (this.dateWidgetPopupRef = el) }, this.isLoading ? this.renderLoadingTrigger('anchor') : this.renderDateTrigger('anchor'), !this.isLoading && this.renderDateRange())));
    }
    static get style() { return IrWidgetDatePopupStyle0; }
}, [1, "ir-widget-date-popup", {
        "dateModifiers": [8, "date-modifiers"],
        "dates": [16],
        "locale": [1],
        "disabled": [4],
        "maxSpanDays": [2, "max-span-days"],
        "absoluteIcon": [4, "absolute-icon"],
        "isLoading": [4, "is-loading"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-widget-date-popup", "ir-button", "ir-date-range", "ir-icons", "ir-popup"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-widget-date-popup":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrWidgetDatePopup);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrWidgetDatePopup as I, defineCustomElement as d };

//# sourceMappingURL=ir-widget-date-popup2.js.map