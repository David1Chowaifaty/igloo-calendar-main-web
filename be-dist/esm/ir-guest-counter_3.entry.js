import { r as registerInstance, c as createEvent, h, H as Host } from './index-243eecac.js';
import { l as localizedWords } from './localization.store-375cacee.js';
import { c as calculateInfantNumber, e as moment } from './utils-41d5079a.js';

const irGuestCounterCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.flex{display:flex}.border{border-width:1px}.counter-container{background:#fff;border:1px solid var(--gray-200,#eaecf0);border-radius:min(var(--radius,.5rem),.5rem);box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);box-sizing:border-box;display:flex;flex-direction:column;gap:20px;height:100%;padding:10px;width:250px}.counter-item{align-items:center;color:var(--gray-800,#1d2939);display:flex;gap:32px;justify-content:space-between}.counter-item p{margin:0}.counter-buttons-group{align-items:center;display:flex}.counter-buttons-group p{text-align:center;width:35px}.main-text{font-size:1rem!important;font-weight:400;line-height:1.25rem!important;padding-bottom:4px!important}.secondary-text{font-size:12px;line-height:16px}.done-button{margin-top:10px;width:100%}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.static{position:static}.fixed{position:fixed}.block{display:block}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.hidden{display:none}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}.relative{position:relative}.m-0{margin:0}.h-\\[14px\\]{height:14px}.w-\\[12\\.25px\\]{width:12.25px}.p-0{padding:0}.p-4{padding:1rem}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity,1))}";
const IrGuestCounterStyle0 = irGuestCounterCss;

const IrGuestCounter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrGuestCounter.style = IrGuestCounterStyle0;

const irWidgetDatePopupCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.block{display:block}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:host ir-popup .ir-widget__date-trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:min(var(--radius,.5rem),.5rem);box-sizing:border-box;cursor:pointer;display:flex!important;font-size:.875rem;gap:.875rem;height:40px;justify-content:flex-start;min-width:0;padding:.25rem .875rem;width:100%}:host ir-popup .ir-widget__date-trigger.--absolute-icon{padding-inline-start:2.25rem}.ir-widget__date-trigger:disabled{cursor:not-allowed!important;opacity:.5}:host ir-popup .ir-widget__date-trigger.ir-widget__trigger--loading{pointer-events:none}:host ir-popup .ir-widget__date-trigger[aria-expanded=true]{border-color:var(--gray-700)}.ir-multi-property-date-popup__popup:not([modal]){display:none}.ir-multi-property-date-popup__popup::part(body){height:90vh;overflow-y:auto;width:80dvw}.ir-multi-property-date-popup__popup[modal]::part(body){height:100%;inset:0;padding-bottom:2rem;position:fixed;width:auto}.ir-multi-property-date-popup__header{align-items:center;background-color:#fff;display:flex;justify-content:flex-end;position:sticky;top:0;z-index:9999}@media (min-width:640px){.ir-multi-property-date-popup__popup[modal]{display:none}.ir-multi-property-date-popup__popup:not([modal]){display:block}.ir-multi-property-date-popup__popup::part(body){height:330px;overflow-y:auto;width:auto}}@media only screen and (min-width:1200px){.ir-multi-property-date-popup__popup::part(body){height:382px}}:host ir-popup .ir-widget__date-trigger ir-icons{left:auto;position:static}:host ir-popup .ir-widget__date-trigger p{color:inherit;margin:0}.ir-widget__icon{height:1rem;width:1rem}.ir-widget__loading-icon{border-radius:999px;display:inline-block;height:1rem;width:1rem}.ir-widget__loading-range{align-items:center;display:flex;flex:1;gap:.5rem;min-width:0}.ir-widget__loading-line{border-radius:999px;display:inline-block;height:.5rem}.ir-widget__loading-line.--short{width:36%}.ir-widget__loading-line.--medium{width:44%}.ir-widget__shimmer{background-color:#e6e8ec;overflow:hidden;position:relative}.ir-widget__shimmer:after{animation:ir-widget-shimmer 1.6s ease-in-out infinite;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.65),transparent);content:\"\";inset:0;position:absolute;transform:translateX(-100%)}@keyframes ir-widget-shimmer{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}@media (prefers-reduced-motion:reduce){.ir-widget__shimmer:after{animation:none}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}";
const IrWidgetDatePopupStyle0 = irWidgetDatePopupCss;

const IrWidgetDatePopup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrWidgetDatePopup.style = IrWidgetDatePopupStyle0;

const irWidgetOccupancyPopupCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}.static{position:static}.absolute{position:absolute}.relative{position:relative}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.border{border-width:1px}.lowercase{text-transform:lowercase}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}:host ir-popup .ir-widget__guests-trigger{align-items:center;background:#fff;border:1px solid var(--gray-300,#d0d5dd);border-radius:min(var(--radius,.5rem),.5rem);box-sizing:border-box;cursor:pointer;display:flex!important;font-size:.875rem;gap:.875rem;height:40px;justify-content:flex-start;min-width:0;padding:.25rem .875rem;width:100%}:host ir-popup .ir-widget__guests-trigger.--absolute-icon{padding-inline-start:2.25rem}.ir-widget__guests-trigger:disabled{cursor:not-allowed!important;opacity:.5}:host ir-popup .ir-widget__guests-trigger.ir-widget__trigger--loading{pointer-events:none}:host ir-popup .ir-widget__guests-trigger[aria-expanded=true]{border-color:var(--gray-700)}:host ir-popup .ir-widget__guests-trigger ir-icons{left:auto;position:static}:host ir-popup .ir-widget__guests-trigger p{color:inherit;margin:0}.ir-multi-property-occupancy-popup__popup::part(body){all:unset;padding:0}.ir-widget__icon{height:1rem;width:1rem}.ir-widget__guests{margin:0}.ir-widget__text-lower{text-transform:lowercase}.ir-widget__loading-icon{border-radius:999px;display:inline-block;height:1rem;width:1rem}.ir-widget__loading-text{align-items:center;display:flex;flex:1;min-width:0}.ir-widget__loading-line{border-radius:999px;display:inline-block;height:.5rem}.ir-widget__loading-line.--primary{width:62%}.ir-widget__shimmer{background-color:#e6e8ec;overflow:hidden;position:relative}.ir-widget__shimmer:after{animation:ir-widget-shimmer 1.6s ease-in-out infinite;background:linear-gradient(90deg,transparent,hsla(0,0%,100%,.65),transparent);content:\"\";inset:0;position:absolute;transform:translateX(-100%)}@keyframes ir-widget-shimmer{0%{transform:translateX(-100%)}to{transform:translateX(100%)}}@media (prefers-reduced-motion:reduce){.ir-widget__shimmer:after{animation:none}}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}.fixed{position:fixed}.block{display:block}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.h-5{height:1.25rem}.w-5{width:1.25rem}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.table{display:table}.grid{display:grid}.capitalize{text-transform:capitalize}.items-center{align-items:center}.justify-center{justify-content:center}.pointer-events-none{pointer-events:none}.inset-y-0{bottom:0;top:0}.end-1{inset-inline-end:.25rem}.start-2{inset-inline-start:.5rem}.px-\\[0\\.3rem\\]{padding-left:.3rem;padding-right:.3rem}.ps-9{padding-inline-start:2.25rem}.pt-1{padding-top:.25rem}.text-xs{font-size:.75rem;line-height:1rem}.text-\\[\\#667085\\]{--tw-text-opacity:1;color:rgb(102 112 133/var(--tw-text-opacity,1))}";
const IrWidgetOccupancyPopupStyle0 = irWidgetOccupancyPopupCss;

const IrWidgetOccupancyPopup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrWidgetOccupancyPopup.style = IrWidgetOccupancyPopupStyle0;

export { IrGuestCounter as ir_guest_counter, IrWidgetDatePopup as ir_widget_date_popup, IrWidgetOccupancyPopup as ir_widget_occupancy_popup };

//# sourceMappingURL=ir-guest-counter_3.entry.js.map