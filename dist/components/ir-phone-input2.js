import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service2.js';
import { d as defineCustomElement$1 } from './ir-combobox2.js';

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:18px;width:24px;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = /*@__PURE__*/ proxyCustomElement(class IrPhoneInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.textChange = createEvent(this, "textChange", 7);
        this.countries = [];
        this.bookingService = new BookingService();
        this.label = undefined;
        this.value = '';
        this.disabled = false;
        this.error = false;
        this.token = undefined;
        this.language = undefined;
        this.default_country = null;
        this.phone_prefix = null;
        this.placeholder = undefined;
        this.inputValue = '';
        this.isDropdownVisible = false;
        this.currentCountry = undefined;
    }
    async componentWillLoad() {
        if (!this.token) {
            throw new Error('Missing token');
        }
        this.bookingService.setToken(this.token);
        const countries = await this.bookingService.getCountries(this.language);
        this.countries = countries;
        if (this.phone_prefix) {
            this.setCountryFromPhonePrefix();
        }
        else {
            if (this.default_country) {
                this.setCurrentCountry(this.default_country);
            }
        }
        this.inputValue = this.value;
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.inputValue });
    }
    setCountryFromPhonePrefix() {
        var _a;
        const country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    setCurrentCountry(id) {
        var _a;
        const country = this.countries.find(country => country.id === id);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '796615094b198901127549ec2d18ebd9f550df9e' }, h("div", { key: '34407f18b7cefd56cffcf675869e53dfcf4ba1a4', class: "form-group mr-0" }, h("div", { key: '7a236351a2f2d01c4f0844e5845b12cdcc4845a5', class: "input-group row m-0 p-0 position-relative" }, this.label && (h("div", { key: '3a0f3595a93c0c81b138d33062d4d0acdfb30a09', class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { key: '1655e0142621f621c1f2eafa19e8a0067f043ebb', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), h("div", { key: '240278eed9b622cf024f8a5e459ffcc7b6e740bd', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, h("button", { key: 'd8183cd870ea5b0aeabc37a44ba1b7ec1a999466', onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, h("img", { key: '232e50f6fc756eb1d7107864fba7aa9c027bc645', src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }), h("svg", { key: '1dae3e5c09ef8c17be4ea3ae2e7c3a3e5e90d03e', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '4d01dc1585450523890a1204acb621cce989f804', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("label", { key: '317e9426783721ba9b7627d4f852e669a19f5718' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), h("input", { key: 'ba31de2ee261a8fd0c2a859e8759ff823ef82a90', type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), ' ', this.isDropdownVisible && (h("div", { key: '577c74e165cf030bc4b0f1b59559a9ad30674200', class: "ir-dropdown-container" }, h("ir-combobox", { key: '0be12d48fdaa1d0ee16fd1c3d313359662a9aa82', onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
            })) })))))));
    }
    get el() { return this; }
    static get style() { return IrPhoneInputStyle0; }
}, [2, "ir-phone-input", {
        "label": [1],
        "value": [1],
        "disabled": [4],
        "error": [4],
        "token": [1],
        "language": [1],
        "default_country": [2],
        "phone_prefix": [1],
        "placeholder": [1],
        "inputValue": [32],
        "isDropdownVisible": [32],
        "currentCountry": [32]
    }, [[4, "click", "handleDocumentClick"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-phone-input", "ir-combobox"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPhoneInput);
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPhoneInput as I, defineCustomElement as d };

//# sourceMappingURL=ir-phone-input2.js.map