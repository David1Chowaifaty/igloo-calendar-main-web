import { r as registerInstance, c as createEvent, h } from './index-3ddfa666.js';

const irGuestCounterCss = "/*! tailwindcss v3.4.9 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.flex{display:flex}.border{border-width:1px}.counter-container{background:#fff;border:1px solid var(--gray-100);border-radius:min(var(--radius,.5rem),.5rem);box-shadow:0 12px 16px -4px rgba(16,24,40,.08),0 4px 6px -2px rgba(16,24,40,.03);box-sizing:border-box;display:flex;flex-direction:column;gap:20px;height:100%;padding:10px}.counter-item{align-items:center;color:var(--gray-800,#1d2939);display:flex;gap:32px;justify-content:space-between}.counter-item p{margin:0}.counter-buttons-group{align-items:center;display:flex}.counter-buttons-group p{text-align:center;width:35px}.main-text{font-size:1rem!important;font-weight:400;line-height:1.25rem!important;padding-bottom:4px!important}.secondary-text{font-size:12px;line-height:16px}.done-button{margin-top:10px;width:100%}.static{position:static}.fixed{position:fixed}.size-4{height:1rem;width:1rem}.h-full{height:100%}.w-full{width:100%}.border-0{border-width:0}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.p-4{padding:1rem}.pb-6{padding-bottom:1.5rem}.lowercase{text-transform:lowercase}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-none{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}@media (min-width:640px){.sm\\:w-auto{width:auto}.sm\\:border{border-width:1px}.sm\\:p-4{padding:1rem}.sm\\:shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}}@media (min-width:768px){.md\\:p-6{padding:1.5rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.h-5{height:1.25rem}.w-5{width:1.25rem}.hidden{display:none}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:768px){.md\\:hidden{display:none}}.h-\\[14px\\]{height:14px}.w-\\[12\\.25px\\]{width:12.25px}";
const IrGuestCounterStyle0 = irGuestCounterCss;

const IrGuestCounter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '80b5ce573c2fa4b26fc67e03c028b7792369bb44', class: "counter-container p-4" }, h("div", { key: '8a29b862ca827424c8c8cf9d54241425c47e7ef9', class: "counter-item" }, h("div", { key: '8d7fe416bb44b33a3723d72376952946f9b4c239' }, h("p", { key: 'a40011b8b199ae3c0c12be58988593be778d8b5b', class: "main-text" }, "Adults"), h("p", { key: '9c33f4ab41f795d5f15576a204bc1a196654f939', class: "secondary-text" }, "Age ", this.childMaxAge + 1, "+")), h("div", { key: '579494de7ab14a75142f878b196472943a1edbea', class: "counter-buttons-group" }, h("ir-button", { key: 'd80b8209e72601d53fbeca660a49d4a6b6693650', iconName: "minus", disabled: this.adultCount === this.minAdultCount, variants: "icon", onButtonClick: this.decrementAdultCount.bind(this), "aria-label": "Decrease adult count", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: 'ae76aa89d5b8b3798d3623069317c5dd49172051' }, this.adultCount), h("ir-button", { key: '76ec5836e4bc6477d5637aa4d830100033890586', iconName: "plus", disabled: this.adultCount === this.maxAdultCount, variants: "icon", onButtonClick: this.incrementAdultCount.bind(this), "aria-label": "Increase adult count", svgClassName: "h-[14px] w-[12.25px]" }))), this.childMaxAge > 0 && (h("div", { key: 'b9817de7c81417506e723c82d3143b1eedb941fa', class: "counter-item" }, h("div", { key: 'ae92010e6de68578bae1773aa3a42c822413cf81' }, h("p", { key: '345b5522d2a229a18abb346ae40f1d9b9f10f995', class: "main-text" }, "Children"), h("p", { key: '3cb2bba0175cadecc839b0f4fc8784fe771c9f74', class: "secondary-text" }, "Ages 1-", this.childMaxAge)), h("div", { key: '72c28598660d8b5da6ba6e5613b7813f4f135823', class: "counter-buttons-group" }, h("ir-button", { key: '0b75c1ac099a0d1efa015d5e008f8ce1dbd5553e', disabled: this.childrenCount === this.minChildrenCount, variants: "icon", onButtonClick: this.decrementChildrenCount.bind(this), "aria-label": "Decrease child count", iconName: "minus", svgClassName: "h-[14px] w-[12.25px]" }), h("p", { key: '41d891c63ad920da91c47c7dd98ff89459149299' }, this.childrenCount), h("ir-button", { key: 'bf33448244d27f9b15996d323d924d4802dab8cb', disabled: this.childrenCount === this.maxChildrenCount, variants: "icon", onButtonClick: this.incrementChildrenCount.bind(this), "aria-label": "Increase child count", iconName: "plus", svgClassName: "h-[14px] w-[12.25px]" })))), h("ir-button", { key: 'bf3a6953167ec072d084549ca25fb09b94ac4b7c', onButtonClick: this.addChildrenAndAdult.bind(this), size: "md", class: "done-button",
            // label={localizedWords.entries.Lcz_Done}
            label: "Done", "aria-label": "Confirm selection" })));
    }
    static get watchers() { return {
        "adults": ["handleAdultsChange"],
        "child": ["handleChildChange"]
    }; }
};
IrGuestCounter.style = IrGuestCounterStyle0;

export { IrGuestCounter as ir_guest_counter };

//# sourceMappingURL=ir-guest-counter.entry.js.map