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
        return (h(Host, { key: 'bdc44b5bf262381d00b4a793aaab38338a7e609e' }, h("div", { key: '72a566303e0b1d4437f13f6fe55481c2c2dc4d29', class: "form-group mr-0" }, h("div", { key: 'b9dd1de7132518627ad83eb93ae2f9d4488ae370', class: "input-group row m-0 p-0 position-relative" }, this.label && (h("div", { key: '0ba4141cdd2d7499a77fddb14e747ee444f29939', class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { key: 'df998948027002512f07719f68a7a3c490126fab', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), h("div", { key: 'eb2d3607584b8e1caed1411b61ff3b997e2966c5', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, h("button", { key: 'ec3c51897faf9aa94cae608a2b4b8ddf21da1668', type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : h("p", { class: "p-0 m-0 " }, locales.entries.Lcz_Select), h("svg", { key: 'f8adb06672e463dfecf7f2a6f34adfd828a9f943', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '3d30076701dd932a0b61b457a647a75c788351d6', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("p", { key: 'ee8ab7936c17b34043d1c9a521dc04b8df828c11', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), h("input", { key: 'f8e73c65c84f326572c0ef8eb8167956da4bfedb', "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), this.isDropdownVisible && (h("div", { key: 'fdb61b2c39530c27f033bc489b3dd9897a09f0d7', class: "ir-dropdown-container" }, h("ir-combobox", { key: 'e56218e2277dde3df36395edfc8d3293eab7f3d3', onComboboxValueChange: e => {
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