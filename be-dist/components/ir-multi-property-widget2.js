import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { l as localizedWords } from './utils.js';
import { d as defineCustomElement$8 } from './ir-button2.js';
import { d as defineCustomElement$7 } from './ir-date-range2.js';
import { d as defineCustomElement$6 } from './ir-guest-counter2.js';
import { d as defineCustomElement$5 } from './ir-icons2.js';
import { d as defineCustomElement$4 } from './ir-popup2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-widget-date-popup2.js';
import { d as defineCustomElement$1 } from './ir-widget-occupancy-popup2.js';

const irMultiPropertyWidgetCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.block{display:block}.flex{display:flex}:host{min-width:300px;pointer-events:all;width:100%}:host>ir-popup{--radius:0.875rem}.ir-widget__date-popup::part(content),.ir-widget__guests-popup::part(content){width:min(22.5rem,92vw)}.ir-multi-property-widget__not-found{font-size:.875rem;text-align:center}:host ir-select{display:block;width:100%}.ir-multi-property-widget__select .select-el{height:40px}.anchor-icon::part(icon){height:1rem;width:1rem}.ir-multi-property-widget__body{display:flex;flex-direction:column;gap:1rem;padding:1rem}.ir-multi-property-widget__body ir-button[part=cta]{margin-top:.5rem;width:100%}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.fixed{position:fixed}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.hidden{display:none}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.relative{position:relative}";
const IrMultiPropertyWidgetStyle0 = irMultiPropertyWidgetCss;

const IrMultiPropertyWidget = /*@__PURE__*/ proxyCustomElement(class IrMultiPropertyWidget extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.propertyChange = createEvent(this, "propertyChange", 7);
        this.cityChange = createEvent(this, "cityChange", 7);
        this.dateChange = createEvent(this, "dateChange", 7);
        this.guestsChange = createEvent(this, "guestsChange", 7);
        this.bookNow = createEvent(this, "bookNow", 7);
        this.linkedProperties = [];
    }
    capitalize(word) {
        if (!word)
            return '';
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    render() {
        var _a, _b, _c, _d;
        const noPropertiesFound = this.level2Properties.properties.get(this.selectedCity).length === 0;
        return (h(Host, { key: 'cb24abfb31b558d28cb7206305b63af5576d5412' }, h("div", { key: '1f925ab5b8178e7564982229d016db49361c98a1', class: "ir-multi-property-widget__body", part: "container" }, h("ir-select", { key: 'b5f7da5fc75f9af287af760b15f65f63d4731f8b', class: "ir-multi-property-widget__select", part: "property-select", value: this.selectedCity, onValueChange: e => this.cityChange.emit(e.detail.toString()), data: (_b = (_a = this.level2Properties) === null || _a === void 0 ? void 0 : _a.cities) === null || _b === void 0 ? void 0 : _b.map(city => ({
                id: city,
                value: this.capitalize(city),
            })), icon: true }, h("ir-icons", { key: 'ca55e385a2eb52284b5b973c20bde8ec2a2ec162', name: 'location-dot', slot: "icon", removeClassName: true, height: 16, width: 16 })), noPropertiesFound ? (h("p", { class: "ir-multi-property-widget__not-found" }, "No property found")) : (h("ir-select", { icon: true, class: "ir-multi-property-widget__select", part: "property-select", value: this.selectedPropertyId, onValueChange: e => this.propertyChange.emit(e.detail), data: (_c = this.level2Properties.properties.get(this.selectedCity)) === null || _c === void 0 ? void 0 : _c.map(property => ({
                id: property.property_id,
                value: property.property_name,
            })) }, h("ir-icons", { name: 'hotel', slot: "icon", removeClassName: true, height: 16, width: 16 }))), h("ir-widget-date-popup", { key: '5d5013010249a7c41868265653aa32d87ba18cce', class: "ir-widget__date-popup", dateModifiers: this.dateModifiers, "absolute-icon": true, dates: this.dates, locale: this.locale, disabled: noPropertiesFound, maxSpanDays: (_d = this.property) === null || _d === void 0 ? void 0 : _d.max_nights, isLoading: this.isFetchingProperty, onDateChange: e => {
                this.dateChange.emit(e.detail);
            } }), h("ir-widget-occupancy-popup", { key: 'c17c94e55bf0714ad904712b5027a7cee6595d5e', isLoading: this.isFetchingProperty, disabled: noPropertiesFound, "absolute-icon": true, class: "ir-widget__guests-popup", error: this.error, guests: this.guests, property: this.property, onGuestsChange: e => this.guestsChange.emit(e.detail) }), h("ir-button", { key: '5eda39cb991c1dbf4c8462fcc37b789fc7825fb9', part: "cta", disabled: this.isFetchingProperty || noPropertiesFound, size: "md", label: localizedWords.entries.Lcz_BookNow, onButtonClick: () => this.bookNow.emit() }))));
    }
    static get style() { return IrMultiPropertyWidgetStyle0; }
}, [1, "ir-multi-property-widget", {
        "position": [513],
        "linkedProperties": [16],
        "selectedPropertyId": [8, "selected-property-id"],
        "dateModifiers": [8, "date-modifiers"],
        "property": [16],
        "isFetchingProperty": [4, "is-fetching-property"],
        "locale": [1],
        "dates": [16],
        "guests": [16],
        "error": [4],
        "locations": [16],
        "level2Properties": [16],
        "selectedCity": [1, "selected-city"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-multi-property-widget", "ir-button", "ir-date-range", "ir-guest-counter", "ir-icons", "ir-popup", "ir-select", "ir-widget-date-popup", "ir-widget-occupancy-popup"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-multi-property-widget":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMultiPropertyWidget);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-guest-counter":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-widget-date-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-widget-occupancy-popup":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMultiPropertyWidget as I, defineCustomElement as d };

//# sourceMappingURL=ir-multi-property-widget2.js.map