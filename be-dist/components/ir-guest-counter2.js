import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irGuestCounterCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.flex{display:flex}.border{border-width:1px}.counter-container{background:#fff;border:1px solid var(--gray-100);border-radius:min(var(--radius,.5rem),.5rem);box-shadow:0 12px 16px -4px rgba(16,24,40,.08),0 4px 6px -2px rgba(16,24,40,.03);box-sizing:border-box;display:flex;flex-direction:column;gap:20px;height:100%;padding:10px}.counter-item{align-items:center;color:var(--gray-800,#1d2939);display:flex;gap:32px;justify-content:space-between}.counter-item p{margin:0}.counter-buttons-group{align-items:center;display:flex}.counter-buttons-group p{text-align:center;width:35px}.main-text{font-size:1rem!important;font-weight:400;line-height:1.25rem!important;padding-bottom:4px!important}.secondary-text{font-size:12px;line-height:16px}.done-button{margin-top:10px;width:100%}.static{position:static}.h-\\[14px\\]{height:14px}.w-\\[12\\.25px\\]{width:12.25px}.p-4{padding:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.items-center{align-items:center}.justify-center{justify-content:center}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.size-4{height:1rem;width:1rem}.h-full{height:100%}.w-full{width:100%}.border-0{border-width:0}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.pb-6{padding-bottom:1.5rem}.lowercase{text-transform:lowercase}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:p-4{padding:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.absolute{position:absolute}.right-3{right:.75rem}.top-3{top:.75rem}.z-50{z-index:50}.table{display:table}.grid{display:grid}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}";
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
        this.child = undefined;
        this.adults = undefined;
        this.adultCount = this.minAdultCount;
        this.childrenCount = this.minChildrenCount;
    }
    componentWillLoad() {
        this.adultCount = this.adults || this.minAdultCount;
        this.childrenCount = this.child || this.minAdultCount;
    }
    handleAdultsChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.adultCount) {
            this.adultCount = newValue;
        }
    }
    handleChildChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue !== this.childrenCount) {
            this.childrenCount = newValue;
        }
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
        return (h("div", { key: 'bc4f77bfc92ec9147aef97a59901604adc4d6a00', class: "counter-container p-4" }, h("div", { key: '990492adb5c3ff8525b238a54ea2e8fde54cc870', class: "counter-item" }, h("div", { key: 'b89c07e464e2c8f42ff78d993fb70219ceefad55' }, h("p", { key: '4791cfc3fb325d68ac249c164dc869872aa59c81', class: "main-text" }, "Adults"), h("p", { key: 'c3c53a552fea2eeac9d5f2ae5fbeeab7bd47f70c', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: 'b44b4d843793db59ecd4d7d19655057274e613ba', class: "counter-buttons-group" }, h("ir-button", { key: '9772d9be6e5851547373d2da4a5226b4a04c373d', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '4f17a860b5d0f576e7761bfdb3be70b6510407f6' }, this.adultCount), h("ir-button", { key: '0d573eb44c63ca91a8469d68fbf1d4d1a8be6812', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'd79ee47d3f41b9fa67abe693ce8f892f8d8c1b10', class: "counter-item" }, h("div", { key: '1bb74184df1e458dea274e63c11ceda510c6294a' }, h("p", { key: 'aad289ffb69affff867464ee0d2c997c22fc4020', class: "main-text" }, "Children"), h("p", { key: '0c3b5a2b03610cc4edecd713f80c19f38a2de8b0', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: '263fd49b23208c95f4835a07e7d65f7540839f8a', class: "counter-buttons-group" }, h("ir-button", { key: '7bfe93abe1515012fd609306253c215472255747', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '266d8942cef9f1f49adbed5ebf9083d5cce780b3' }, this.childrenCount), h("ir-button", { key: '094e9605028b5b3f40abbae013ee3c5c9dcd85b3', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), h("ir-button", { key: '8b70f6cb7b3bf47d811ac82750401278cab2e976', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
            // label={localizedWords.entries.Lcz_Done}
            label: "Done", "aria-label": "Confirm selection" })));
    }
    static get watchers() { return {
        "adults": ["handleAdultsChange"],
        "child": ["handleChildChange"]
    }; }
    static get style() { return IrGuestCounterStyle0; }
}, [1, "ir-guest-counter", {
        "minAdultCount": [2, "min-adult-count"],
        "maxAdultCount": [2, "max-adult-count"],
        "minChildrenCount": [2, "min-children-count"],
        "maxChildrenCount": [2, "max-children-count"],
        "childMaxAge": [2, "child-max-age"],
        "child": [2],
        "adults": [2],
        "adultCount": [32],
        "childrenCount": [32]
    }, undefined, {
        "adults": ["handleAdultsChange"],
        "child": ["handleChildChange"]
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