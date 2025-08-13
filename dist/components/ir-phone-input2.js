import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-combobox2.js';

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:1rem;aspect-ratio:4/3;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}.phone_prefix_label.sc-ir-phone-input{padding:0 0.5rem;margin:0}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = /*@__PURE__*/ proxyCustomElement(class IrPhoneInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.textChange = createEvent(this, "textChange", 7);
        /**
         * Initial phone number value.
         */
        this.value = '';
        /**
         * Disables the phone input when true.
         */
        this.disabled = false;
        /**
         * If true, styles the input to indicate an error state.
         */
        this.error = false;
        /**
         * Default country ID used if no phone prefix is set.
         */
        this.default_country = null;
        /**
         * If provided, sets the phone prefix and updates selected country.
         */
        this.phone_prefix = null;
        /**
         * Country list, used to populate prefix and dropdown.
         * If not provided, fetched from the booking service.
         */
        this.countries = [];
        /**
         * Tracks current user input value.
         */
        this.inputValue = '';
        /**
         * Tracks visibility of the country dropdown.
         */
        this.isDropdownVisible = false;
        // private cmp_countries: ICountry[] = [];
        this.bookingService = new BookingService();
    }
    async componentWillLoad() {
        if (this.countries.length === 0) {
            const countries = await this.bookingService.getCountries(this.language);
            this.countries = countries;
        }
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
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputValue = newValue;
        }
    }
    handlePhoneChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.setCountryFromPhonePrefix();
        }
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    /**
     * Handles user input:
     * - Removes all characters except numbers and "+"
     * - Updates state and emits new phone number
     */
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.inputValue });
    }
    /**
     * Sets the current country based on `phone_prefix` prop or country ID.
     * Emits current phone prefix and phone number.
     */
    setCountryFromPhonePrefix() {
        var _a;
        let country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            country = this.countries.find(c => c.id.toString() === this.phone_prefix);
            if (!country) {
                return;
            }
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    /**
     * Sets the current country by its ID.
     * Emits current phone prefix and phone number.
     */
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
        return (h(Host, { key: 'e5d77020ace5beae434e4a737d6295a59fc1e12d' }, h("div", { key: 'b9ad71e8fb010e2d55cc9dfbb26a5cfd07502c18', class: "form-group mr-0" }, h("div", { key: '5ed27bc0ebb16e7e53a1cc8fec79fe7f20bffa5e', class: "input-group row m-0 p-0 position-relative" }, this.label && (h("div", { key: 'eef526dbbe9ea0ac8575b6a4d85a404baf675c9d', class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { key: 'ee6c2e34eb60d6bddb9e6af878023e12f9a425e3', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), h("div", { key: '5f74e9477ed30390c2a1ae605374c14c7c3b847a', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, h("button", { key: '77ce3b5c0dcac4ababf1719dbe30540c42462e55', type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : h("p", { class: "p-0 m-0 " }, locales.entries.Lcz_Select), h("svg", { key: '463152a35ebfc1c82b1ebdbe35a784d969c610df', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '041ee42e83d15590be3882b74d5851deb2e93200', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("p", { key: 'f7e980159f98b91bd36b9375bc2a69ccc6016fc2', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), h("input", { key: 'ec739e6eea147c93efe31c5fcff0ec84300dfc1b', "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), this.isDropdownVisible && (h("div", { key: 'ce55ee5d8bf07e1e7eb4a574f0d37609f3ae7d71', class: "ir-dropdown-container" }, h("ir-combobox", { key: 'cef7a02ad1f889b7ec2bee5f8317d240f46b4aed', onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
                image: c.flag,
            })) })))))));
    }
    get el() { return this; }
    static get watchers() { return {
        "value": ["handleValueChange"],
        "phone_prefix": ["handlePhoneChange"]
    }; }
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
        "countries": [1040],
        "testId": [1, "test-id"],
        "inputValue": [32],
        "isDropdownVisible": [32],
        "currentCountry": [32]
    }, [[4, "click", "handleDocumentClick"]], {
        "value": ["handleValueChange"],
        "phone_prefix": ["handlePhoneChange"]
    }]);
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