import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as changeLocale, u as updateUserPreference, a as app_store } from './app.store.js';
import { m as matchLocale } from './utils.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irLanguagePickerCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.block{display:block}.flex-grow{flex-grow:1}:host{display:block}.region-label{transform-origin:left top}select{-webkit-appearance:none;-moz-appearance:none;appearance:none;block-size:40px;padding-block-start:1rem}.title{color:#101828;flex-grow:0;font-size:20px;font-stretch:normal;font-style:normal;font-weight:600;height:32px;letter-spacing:normal;line-height:1.33}.select-icon:dir(rtl){left:1rem}.select-icon:dir(ltr){right:1rem}.static{position:static}.mb-5{margin-bottom:1.25rem}.mt-8{margin-top:2rem}.flex{display:flex}.w-\\[30rem\\]{width:30rem}.w-full{width:100%}.flex-col-reverse{flex-direction:column-reverse}.justify-end{justify-content:flex-end}.gap-4{gap:1rem}.space-y-\\[0\\.75rem\\]>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.p-4{padding:1rem}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}@media (min-width:640px){.sm\\:w-fit{width:fit-content}.sm\\:flex-row{flex-direction:row}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.inset-y-0{bottom:0;top:0}.end-0{inset-inline-end:0}.top-\\[50\\%\\]{top:50%}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.items-center{align-items:center}.rounded-md{border-radius:.375rem}.border{border-width:1px}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.pe-6{padding-inline-end:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.hidden{display:none}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-4{height:1rem}.w-4{width:1rem}.w-auto{width:auto}.flex-col{flex-direction:column}.justify-start{justify-content:flex-start}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.object-fill{object-fit:fill}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85/var(--tw-text-opacity))}@media (min-width:768px){.md\\:block{display:block}.md\\:flex{display:flex}.md\\:hidden{display:none}}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mt-4{margin-top:1rem}.h-\\[1px\\]{height:1px}.w-\\[45\\%\\]{width:45%}.justify-center{justify-content:center}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.bg-\\[var\\(--gray-200\\)\\]{background-color:var(--gray-200)}.text-\\[var\\(--gray-500\\)\\]{color:var(--gray-500)}.my-6{margin-bottom:1.5rem;margin-top:1.5rem}.mb-8{margin-bottom:2rem}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.h-5{height:1.25rem}.w-5{width:1.25rem}.fixed{position:fixed}.right-0{right:0}.right-4{right:1rem}.top-0{top:0}.top-4{top:1rem}.z-50{z-index:50}.h-6{height:1.5rem}.h-screen{height:100vh}.w-6{width:1.5rem}.min-w-\\[70\\%\\]{min-width:70%}.max-w-full{max-width:100%}.translate-x-0{--tw-translate-x:0px}.translate-x-0,.translate-x-\\[100\\%\\]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-\\[100\\%\\]{--tw-translate-x:100%}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed]{--tw-translate-x:100%}.data-\\[state\\=\\'closed\\'\\]\\:translate-x-\\[100\\%\\][data-state=closed],.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.data-\\[state\\=\\'opened\\'\\]\\:translate-x-0[data-state=opened]{--tw-translate-x:0px}.sticky{position:sticky}.bottom-0{bottom:0}.z-40{z-index:40}.mb-2{margin-bottom:.5rem}.line-clamp-3{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;overflow:hidden}.size-4{height:1rem;width:1rem}.w-40{width:10rem}.flex-1{flex:1 1 0%}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.overflow-hidden{overflow:hidden}.rounded-\\[var\\(--radius\\2c 8px\\)\\]{border-radius:var(--radius,8px)}.rounded-b-none{border-bottom-left-radius:0;border-bottom-right-radius:0}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-700\\/80{background-color:rgba(55,65,81,.8)}.p-2{padding:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.text-xs{font-size:.75rem;line-height:1rem}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-green-500{--tw-text-opacity:1;color:rgb(34 197 94/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-slate-900{--tw-text-opacity:1;color:rgb(15 23 42/var(--tw-text-opacity))}.line-through{text-decoration-line:line-through}@media (min-width:768px){.md\\:w-fit{width:fit-content}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.md\\:space-y-0>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(0px*var(--tw-space-y-reverse));margin-top:calc(0px*(1 - var(--tw-space-y-reverse)))}}@media (min-width:1024px){.lg\\:max-w-md{max-width:28rem}.lg\\:flex-row{flex-direction:row}.lg\\:justify-end{justify-content:flex-end}.lg\\:size-7{height:1.75rem;width:1.75rem}}.resize{resize:both}@media (min-width:640px){.sm\\:block{display:block}}";
const IrLanguagePickerStyle0 = irLanguagePickerCss;

const IrLanguagePicker = /*@__PURE__*/ proxyCustomElement(class IrLanguagePicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.closeDialog = createEvent(this, "closeDialog", 7);
        this.currencies = undefined;
        this.languages = undefined;
        this.selectedOptions = undefined;
    }
    async componentWillLoad() {
        await this.init();
    }
    async init() {
        if (this.languages && this.currencies) {
            this.selectedOptions = {
                language: this.languages[0],
                currency: this.currencies[0],
            };
        }
    }
    handleLanguageChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        this.selectedOptions = Object.assign(Object.assign({}, this.selectedOptions), { language: this.languages.find(l => l.id === Number(id)) });
    }
    handleCurrencyChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const id = e.detail;
        this.selectedOptions = Object.assign(Object.assign({}, this.selectedOptions), { currency: this.currencies.find(l => l.id === Number(id)) });
    }
    handleConfirm(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        changeLocale(this.selectedOptions.language.direction, matchLocale(this.selectedOptions.language.code));
        updateUserPreference({
            currency_id: this.selectedOptions.currency.code,
            language_id: this.selectedOptions.language.code,
        });
        this.closeDialog.emit(null);
    }
    render() {
        return (h("div", { key: 'a0391d424b8e696fc2508c8c082fa119a00b6b80', class: "p-4 sm:px-6 space-y-[0.75rem]" }, h("p", { key: 'a9b42ca75e61e1c1281d8c99cab4454e8ecbbe61', class: "mb-5 w-[30rem]  title" }, "Display settings"), h("ir-select", { key: 'd7fd78bbfbe1045fb8ec4a2bf058337c8add417f', value: app_store.userPreferences.language_id, onValueChange: this.handleLanguageChange.bind(this), label: "Language", select_id: "language_selector", data: this.languages.map(language => ({
                id: language.id,
                value: language.description,
            })) }), h("ir-select", { key: 'a046fe286063f7b7024924b214acbcb2fd00b8e4', value: app_store.userPreferences.currency_id, onValueChange: this.handleCurrencyChange.bind(this), label: "Currency", select_id: "currency_selector", data: this.currencies.map(currency => ({
                id: currency.id,
                value: `${currency.code} ${currency.symbol}`,
            })) }), h("div", { key: 'ddb93b9cca1a422f92a22afd3e68ae32034e9a85', class: "flex flex-col-reverse  w-full gap-4 justify-end sm:flex-row mt-8" }, h("ir-button", { key: 'cc26f55013d87664ef38ca9ce9b68c7f7751e2ea', onButtonClick: () => this.closeDialog.emit(null), size: "md", label: "Cancel", variants: "outline", class: "w-full sm:w-fit" }), h("ir-button", { key: '1de1285e765c9ad54fe1692547d3b3eaf0580ef0', size: "md", label: "Confirm", class: "w-full sm:w-fit", onClick: this.handleConfirm.bind(this) }))));
    }
    static get style() { return IrLanguagePickerStyle0; }
}, [1, "ir-language-picker", {
        "currencies": [16],
        "languages": [16],
        "selectedOptions": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-language-picker", "ir-button", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-language-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrLanguagePicker);
            }
            break;
        case "ir-button":
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

export { IrLanguagePicker as I, defineCustomElement as d };

//# sourceMappingURL=ir-language-picker2.js.map