import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irGuestCounterCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.flex{display:flex}.border{border-width:1px}.counter-container{background:#fff;border:1px solid var(--gray-100);border-radius:min(var(--radius,.5rem),.5rem);box-shadow:0 12px 16px -4px rgba(16,24,40,.08),0 4px 6px -2px rgba(16,24,40,.03);box-sizing:border-box;display:flex;flex-direction:column;gap:20px;height:100%;padding:10px}.counter-item{align-items:center;color:var(--gray-800,#1d2939);display:flex;gap:32px;justify-content:space-between}.counter-item p{margin:0}.counter-buttons-group{align-items:center;display:flex}.counter-buttons-group p{text-align:center;width:35px}.main-text{font-size:1rem!important;font-weight:400;line-height:1.25rem!important;padding-bottom:4px!important}.secondary-text{font-size:12px;line-height:16px}.done-button{margin-top:10px;width:100%}.static{position:static}.sticky{position:sticky}.size-4{height:1rem;width:1rem}.h-full{height:100%}.w-full{width:100%}.border-0{border-width:0}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-4{padding:1rem}.pb-6{padding-bottom:1.5rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:p-4{padding:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.h-\\[14px\\]{height:14px}.w-\\[12\\.25px\\]{width:12.25px}.items-center{align-items:center}.justify-center{justify-content:center}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.h-5{height:1.25rem}.w-5{width:1.25rem}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}";
const IrGuestCounterStyle0 = irGuestCounterCss;

const IrGuestCounter = /*@__PURE__*/ proxyCustomElement(class IrGuestCounter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.updateCounts = createEvent(this, "updateCounts", 7);
        this.closeGuestCounter = createEvent(this, "closeGuestCounter", 7);
        this.minAdultCount = 1;
        this.maxAdultCount = 5;
        this.minChildrenCount = 0;
        this.maxChildrenCount = 5;
        this.childMaxAge = 17;
        this.adultCount = this.minAdultCount;
        this.childrenCount = this.minChildrenCount;
    }
    incrementAdultCount() {
        if (this.adultCount < this.maxAdultCount) {
            this.adultCount++;
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    decrementAdultCount() {
        if (this.adultCount > this.minAdultCount) {
            this.adultCount--;
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    incrementChildrenCount() {
        if (this.childrenCount < this.maxChildrenCount) {
            this.childrenCount++;
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    decrementChildrenCount() {
        if (this.childrenCount > this.minChildrenCount) {
            this.childrenCount--;
            this.updateCounts.emit({ adultCount: this.adultCount, childrenCount: this.childrenCount });
        }
    }
    addChildrenAndAdult() {
        this.closeGuestCounter.emit(null);
    }
    render() {
        return (h("div", { key: '3b65a63ca3b77dff27d1bd1562fdf02b6543f351', class: "counter-container" }, h("div", { key: '3615888dcc3d358eca85522567969356f2e57a3b', class: "counter-item" }, h("div", { key: '6044b2e7ac7e058853dbd823fb879874c04244fb' }, h("p", { key: '41a7c47563450ce40f9d5feaa01a28a2a5175f5b', class: "main-text" }, "Adults"), h("p", { key: '48a645645b49102eb8ea4a592acf6d655056e236', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: '0b7dd2e60806a651eefaf052648b79e640e12243', class: "counter-buttons-group" }, h("ir-button", { key: '8fda6dbc38649f8f4fd34c2da3d540913dcdd6cf', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'd8342521f885137bde01e885bec30e02a7c07e22' }, this.adultCount), h("ir-button", { key: '2f6baa284a5099046484d2c1ca0fcca99c87d5d5', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), h("div", { key: '18b1ffe3289c44bcad04b1fadbfccff99f77743b', class: "counter-item" }, h("div", { key: '2cc2050f846ae3c2052a4d1b1a9862f71cb66bb1' }, h("p", { key: '8e98b2e516853f71a35657bdb76cf7edd7e6ec4d', class: "main-text" }, "Children"), h("p", { key: '8ecdc2db0cc69c7fa0ad263e63f78f723199dab7', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: '3323af88b1054cad3791fb2ae2680a21bf61a6e6', class: "counter-buttons-group" }, h("ir-button", { key: '87bacef10e6eddc9a623653dd73216ba5047d6e0', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'd0dd8a73f3e8d3142f81b21692e364b31059f072' }, this.childrenCount), h("ir-button", { key: '1b2f94263fa476410b5654bc4a3788d539fe1590', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" }))), h("ir-button", { key: 'd8587deebc45cda01e836d25ac2254b4c11e739d', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
            // label={localizedWords.entries.Lcz_Done}
            label: "Done", "aria-label": "Confirm selection" })));
    }
    static get style() { return IrGuestCounterStyle0; }
}, [1, "ir-guest-counter", {
        "minAdultCount": [2, "min-adult-count"],
        "maxAdultCount": [2, "max-adult-count"],
        "minChildrenCount": [2, "min-children-count"],
        "maxChildrenCount": [2, "max-children-count"],
        "childMaxAge": [2, "child-max-age"],
        "adultCount": [32],
        "childrenCount": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-guest-counter", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-guest-counter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGuestCounter);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrGuestCounter as I, defineCustomElement as d };

//# sourceMappingURL=ir-guest-counter2.js.map