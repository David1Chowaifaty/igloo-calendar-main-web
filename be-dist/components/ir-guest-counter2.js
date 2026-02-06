import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { a as calculateInfantNumber, l as localizedWords } from './utils.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irGuestCounterCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.flex{display:flex}.border{border-width:1px}.counter-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),.5rem);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-sizing:border-box;display:flex;flex-direction:column;gap:20px;height:100%;padding:10px;width:250px}.counter-item{align-items:center;color:var(--gray-800,#1d2939);display:flex;gap:32px;justify-content:space-between}.counter-item p{margin:0}.counter-buttons-group{align-items:center;display:flex}.counter-buttons-group p{text-align:center;width:35px}.main-text{font-size:1rem!important;font-weight:400;line-height:1.25rem!important;padding-bottom:4px!important}.secondary-text{font-size:12px;line-height:16px}.done-button{margin-top:10px;width:100%}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.fixed{position:fixed}.block{display:block}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.hidden{display:none}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.relative{position:relative}.m-0{margin:0}.h-\\[14px\\]{height:14px}.w-\\[12\\.25px\\]{width:12.25px}.p-0{padding:0}.p-4{padding:1rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}";
const IrGuestCounterStyle0 = irGuestCounterCss;

const IrGuestCounter = /*@__PURE__*/ proxyCustomElement(class IrGuestCounter extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.updateCounts = createEvent(this, "updateCounts", 7);
        this.closeGuestCounter = createEvent(this, "closeGuestCounter", 7);
        // Properties
        this.minAdultCount = 1;
        this.maxAdultCount = 5;
        this.minChildrenCount = 0;
        this.maxChildrenCount = 5;
        this.childMaxAge = 17;
        this.error = false;
        // Local state
        this.adultCount = this.minAdultCount;
        this.childrenCount = this.minChildrenCount;
        this.childrenAges = [];
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
            this.emitCountHandler();
        }
    }
    decrementAdultCount() {
        if (this.adultCount > this.minAdultCount) {
            this.adultCount--;
            this.emitCountHandler();
        }
    }
    incrementChildrenCount() {
        if (this.childrenCount < this.maxChildrenCount) {
            const newValue = this.childrenCount + 1;
            if (newValue > this.maxChildrenCount) {
                return;
            }
            this.childrenAges.push('');
            this.childrenCount++;
            this.emitCountHandler();
        }
    }
    decrementChildrenCount() {
        if (this.childrenCount > this.minChildrenCount) {
            const newValue = this.childrenCount - 1;
            if (newValue < this.minChildrenCount) {
                return;
            }
            this.childrenAges.pop();
            this.childrenCount--;
            this.emitCountHandler();
        }
    }
    validateChildrenAges() {
        if (this.childrenAges.some(c => c === '')) {
            this.error = true;
            return;
        }
        this.closeGuestCounter.emit(null);
        // this.popover.forceClose();
    }
    emitCountHandler() {
        const infant_nbr = calculateInfantNumber(this.childrenAges);
        const config = {
            adultCount: this.adultCount,
            childrenCount: this.childrenCount,
            infants: infant_nbr,
            childrenAges: this.childrenAges,
        };
        this.updateCounts.emit(config);
    }
    addChildrenAndAdult() {
        this.validateChildrenAges();
    }
    render() {
        var _a;
        return (h("div", { key: '445f201898b4c20b8afa86329bdec76d85826905', class: "counter-container p-4" }, h("div", { key: 'df7a13b1bddf95cc83be7098e1a8831124a8569e', class: "counter-item" }, h("div", { key: '571baead73fd8b83a61d5ea96df8d985e296e225' }, h("p", { key: '568dd53c6c107782dc0f4d38aa8db52295c5c3e6', class: "main-text" }, "Adults"), h("p", { key: 'f87ce75f2c6f91c010e7a491297f340562e5d8e8', class: "secondary-text" }, "Ages ", this.childMaxAge + 1, "+")), h("div", { key: 'd9938842f0ae92a2c0f0857a20bd00c98d6551a6', class: "counter-buttons-group" }, h("ir-button", { key: 'dfcf3dd9deb5a72e7ab7fe36da0058555449c787', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'c722f7ea9f4d5d4d3cdac6dc984787b4902e005b' }, this.adultCount), h("ir-button", { key: 'bb1331c1aaa4065deacbf03fb12bf92c6de7efdb', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: '4e61e053c3240030f4c50d371267639519e99d44', class: "counter-item" }, h("div", { key: '061b1cc98dbbe2cbf318babbcec420e2c337f7f5' }, h("p", { key: '1adc9d78ad217b84e2d525de7055ad454a46bb68', class: "main-text" }, "Children"), h("p", { key: '59a041e41547f6be7639a1852a5166aba7de5c78', class: "secondary-text" }, "Ages 0-", this.childMaxAge)), h("div", { key: 'b477da059b0279b3d2044f52a695154e3054fed2', class: "counter-buttons-group" }, h("ir-button", { key: 'eef8f4de33f0ce58e86400ed117fc143c42ecab4', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '8904b06de4acdd0ba21ec2e2e7f40a925efcf1e8' }, this.childrenCount), h("ir-button", { key: 'a19e14ff2573857494effab92d77fdb41439776f', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), (_a = this.childrenAges) === null || _a === void 0 ? void 0 :
            _a.map((v, i) => (h("div", null, h("ir-select", { addDummyOption: true, value: v, key: `child_${i}_age`, "data-state": this.error && v === '' ? 'error' : '', variant: "double-line", label: `Child ${i + 1} age`, onValueChange: e => {
                    const prev = [...this.childrenAges];
                    prev[i] = e.detail.toString();
                    this.childrenAges = [...prev];
                    this.emitCountHandler();
                }, data: [...Array(this.childMaxAge + 1)].map((_, index) => ({
                    id: index.toString(),
                    value: index === 0 ? localizedWords.entries['Lcz_under1'] : index.toString(),
                })) }), this.error && v === '' && h("p", { class: 'm-0 p-0 text-xs text-red-500' }, localizedWords.entries.Lcz_enterchildage)))), h("ir-button", { key: '2a48a541911a5419e5ec9885fe52e229b4e7417e', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
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
        "error": [1028],
        "adultCount": [32],
        "childrenCount": [32],
        "childrenAges": [32]
    }, undefined, {
        "adults": ["handleAdultsChange"],
        "child": ["handleChildChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-guest-counter", "ir-button", "ir-icons", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-guest-counter":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrGuestCounter);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
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

export { IrGuestCounter as I, defineCustomElement as d };

//# sourceMappingURL=ir-guest-counter2.js.map