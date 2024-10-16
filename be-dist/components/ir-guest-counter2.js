import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irGuestCounterCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.flex{display:flex}.border{border-width:1px}.counter-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),.5rem);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-sizing:border-box;display:flex;flex-direction:column;gap:20px;height:100%;padding:10px}.counter-item{align-items:center;color:var(--gray-800,#1d2939);display:flex;gap:32px;justify-content:space-between}.counter-item p{margin:0}.counter-buttons-group{align-items:center;display:flex}.counter-buttons-group p{text-align:center;width:35px}.main-text{font-size:1rem!important;font-weight:400;line-height:1.25rem!important;padding-bottom:4px!important}.secondary-text{font-size:12px;line-height:16px}.done-button{margin-top:10px;width:100%}.static{position:static}.fixed{position:fixed}.size-4{height:1rem;width:1rem}.h-full{height:100%}.w-full{width:100%}.border-0{border-width:0}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-4{padding:1rem}.pb-6{padding-bottom:1.5rem}.lowercase{text-transform:lowercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:p-4{padding:1rem}}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.items-center{align-items:center}.justify-center{justify-content:center}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.h-5{height:1.25rem}.w-5{width:1.25rem}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.h-\\[14px\\]{height:14px}.w-\\[12\\.25px\\]{width:12.25px}";
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
        return (h("div", { key: '24c038f77bc9a0b086f9fe417530836f546ec4eb', class: "counter-container p-4" }, h("div", { key: '2b847b0325a85e951f6117c546a319e3f9b3b91b', class: "counter-item" }, h("div", { key: 'a37eb647cc8f75e1a51de4e13fae40a9fa7c87ff' }, h("p", { key: '95d5141f06576f3ba52bf5c2c23ff431c8493ba2', class: "main-text" }, "Adults"), h("p", { key: '24a49ae7c5d175431ba3dd7be1353f10820169b4', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: '36f0c69de5338c817b4bcff9350d7f1cbd816625', class: "counter-buttons-group" }, h("ir-button", { key: 'd2b1b4dd0f8f510adbb1363f18aca6e9d25d93c1', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '4f20b6957aea6417647a5dc7dae84246ad9a3fbe' }, this.adultCount), h("ir-button", { key: 'b6a295e14e4d11722a0336aadd5a541c3d0e2a28', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'd0f2a9912b442bf8775bd380b9e26f37b03d2349', class: "counter-item" }, h("div", { key: 'f956f69a49864be16a10eaaab941ebae2da1a467' }, h("p", { key: 'ae12ac10c41908238df97feb320f01ee97bbdfd6', class: "main-text" }, "Children"), h("p", { key: 'a2b578940d5d17fad96b8c8f36fd116824f94c39', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: '52f9ac643b1ba439c1a961ca1773a10aa9a06261', class: "counter-buttons-group" }, h("ir-button", { key: '891370d18a8e0a464faa3cdd23ab477306d9689c', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'e3536f893b50eb247e3841bb278ea2a1f137cd8d' }, this.childrenCount), h("ir-button", { key: '46502946afabafe92b9eaecd7753e77385bba12a', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), h("ir-button", { key: '76d52a91703b65490fa7858bf22186ac413373cf', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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