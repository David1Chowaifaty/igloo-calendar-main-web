import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as localizedWords } from './utils.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-guest-counter2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-popup2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irWidgetOccupancyPopupCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.static{position:static}.absolute{position:absolute}.relative{position:relative}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.lowercase{text-transform:lowercase}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:host ir-popup .ir-widget__guests-trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:min(var(--radius,.5rem),.5rem);box-sizing:border-box;cursor:pointer;display:flex!important;font-size:.875rem;gap:.875rem;height:40px;justify-content:flex-start;min-width:0;padding:.25rem .875rem;width:100%}:host ir-popup .ir-widget__guests-trigger.--absolute-icon{padding-inline-start:2.25rem}.ir-widget__guests-trigger:disabled{cursor:not-allowed!important;opacity:.5}:host ir-popup .ir-widget__guests-trigger.ir-widget__trigger--loading{pointer-events:none}:host ir-popup .ir-widget__guests-trigger[aria-expanded=true]{border-color:var(--gray-700)}:host ir-popup .ir-widget__guests-trigger ir-icons{left:auto;position:static}:host ir-popup .ir-widget__guests-trigger p{color:inherit;margin:0}.ir-multi-property-occupancy-popup__popup::part(body){all:unset;padding:0}.ir-widget__icon{height:1rem;width:1rem}.ir-widget__guests{margin:0}.ir-widget__text-lower{text-transform:lowercase}.ir-widget__loading-icon{border-radius:999px;display:inline-block;height:1rem;width:1rem}.ir-widget__loading-text{align-items:center;display:flex;flex:1;min-width:0}.ir-widget__loading-line{border-radius:999px;display:inline-block;height:.5rem}.ir-widget__loading-line.--primary{width:62%}.ir-widget__shimmer{background-color:#e6e8ec;overflow:hidden;position:relative}.ir-widget__shimmer:after{animation:ir-widget-shimmer 1.6s ease-in-out infinite;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.65),transparent);content:\"\";inset:0;position:absolute;transform:translateX(-100%)}@keyframes ir-widget-shimmer{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}@media (prefers-reduced-motion:reduce){.ir-widget__shimmer:after{animation:none}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.fixed{position:fixed}.block{display:block}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}";
const IrWidgetOccupancyPopupStyle0 = irWidgetOccupancyPopupCss;

const IrWidgetOccupancyPopup = /*@__PURE__*/ proxyCustomElement(class IrWidgetOccupancyPopup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.guestsChange = createEvent(this, "guestsChange", 7);
        this.absoluteIcon = false;
    }
    renderAdultChildTrigger(slot = 'trigger') {
        var _a, _b, _c;
        const { adultCount, childrenCount } = this.guests || { adultCount: 0, childrenCount: 0 };
        const childMaxAge = (_c = (_b = (_a = this.property) === null || _a === void 0 ? void 0 : _a.adult_child_constraints) === null || _b === void 0 ? void 0 : _b.child_max_age) !== null && _c !== void 0 ? _c : 0;
        return (h("button", { disabled: this.disabled, class: `ir-widget__guests-trigger relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "guests-trigger", slot: slot }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex  items-center' : '' }, h("ir-icons", { name: "user", class: `${slot}-icon`, removeClassName: true, height: 16, width: 16, svgClassName: "ir-widget__icon" })), h("p", { class: 'ir-widget__guests' }, adultCount > 0 ? (h("span", null, h("span", { class: "ir-widget__text-lower" }, adultCount, " ", adultCount === 1 ? localizedWords.entries.Lcz_Adult : localizedWords.entries.Lcz_Adults), childMaxAge > 0 && (h("span", { class: "ir-widget__text-lower" }, ", ", childrenCount, " ", childrenCount === 1 ? localizedWords.entries.Lcz_Child : localizedWords.entries.Lcz_Children)))) : (h("span", null, "Guests")))));
    }
    renderLoadingTrigger(slot = 'trigger') {
        return (h("div", { class: `ir-widget__guests-trigger ir-widget__trigger--loading relative ${this.absoluteIcon ? '--absolute-icon' : ''}`, part: "guests-trigger", slot: slot, "aria-busy": "true" }, h("div", { class: this.absoluteIcon ? 'pointer-events-none absolute inset-y-0 start-2 flex items-center' : '' }, h("span", { class: "ir-widget__loading-icon ir-widget__shimmer" })), h("div", { class: "ir-widget__loading-text" }, h("span", { class: "ir-widget__loading-line --primary ir-widget__shimmer" }))));
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (h(Host, { key: 'b2e71727e479fbe8e21c03d8a5e5d52df843e69f' }, h("ir-popup", { key: '7b571c2bda963fd07cc54856170f3afeaac01436', class: "ir-multi-property-occupancy-popup__popup", ref: el => (this.guestsWidgetPopupRef = el) }, this.isLoading ? this.renderLoadingTrigger('anchor') : this.renderAdultChildTrigger('anchor'), !this.isLoading && (h("ir-guest-counter", { key: 'de52b37ff24768990add1f57c64d89307e640129', error: this.error, adults: (_a = this.guests) === null || _a === void 0 ? void 0 : _a.adultCount, child: (_b = this.guests) === null || _b === void 0 ? void 0 : _b.childrenCount, minAdultCount: 0, maxAdultCount: (_d = (_c = this.property) === null || _c === void 0 ? void 0 : _c.adult_child_constraints) === null || _d === void 0 ? void 0 : _d.adult_max_nbr, maxChildrenCount: (_f = (_e = this.property) === null || _e === void 0 ? void 0 : _e.adult_child_constraints) === null || _f === void 0 ? void 0 : _f.child_max_nbr, childMaxAge: (_h = (_g = this.property) === null || _g === void 0 ? void 0 : _g.adult_child_constraints) === null || _h === void 0 ? void 0 : _h.child_max_age, onUpdateCounts: e => this.guestsChange.emit(Object.assign({}, e.detail)), part: "guest-counter", onCloseGuestCounter: () => this.guestsWidgetPopupRef.close() })))));
    }
    static get style() { return IrWidgetOccupancyPopupStyle0; }
}, [1, "ir-widget-occupancy-popup", {
        "guests": [16],
        "property": [16],
        "error": [4],
        "disabled": [4],
        "absoluteIcon": [4, "absolute-icon"],
        "isLoading": [4, "is-loading"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-widget-occupancy-popup", "ir-button", "ir-guest-counter", "ir-icons", "ir-popup", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-widget-occupancy-popup":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrWidgetOccupancyPopup);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-guest-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrWidgetOccupancyPopup as I, defineCustomElement as d };

//# sourceMappingURL=ir-widget-occupancy-popup2.js.map