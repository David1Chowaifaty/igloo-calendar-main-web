import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$1 } from './ir-combobox2.js';

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:1rem;aspect-ratio:4/3;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}.phone_prefix_label.sc-ir-phone-input{padding:0 0.5rem;margin:0}.sc-ir-phone-input-h{--ir-floating-label-fg:#6c757d;--ir-floating-label-fg-focus:#495057;--ir-floating-label-bg:#fff;--ir-floating-label-scale:0.88;--ir-floating-label-float-translateY:-70%;--ir-floating-label-resting-offset-inline:0.9rem;--ir-floating-phone-input-radius:0.21rem;--ir-floating-phone-input-height:2rem;--ir-danger:#dc3545;--ir-disabled-fg:#9aa0a6}.sc-ir-phone-input-h .input-container.has-floating.sc-ir-phone-input{position:relative;padding-top:0.9rem}.sc-ir-phone-input-h .floating-label.sc-ir-phone-input{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none;position:absolute;padding:0 0.4rem;z-index:10;color:var(--ir-floating-label-fg);background:white;transition:transform 120ms ease, color 120ms ease, top 120ms ease, background-color 120ms ease, opacity 120ms ease;opacity:0.95;line-height:1;white-space:nowrap}.sc-ir-phone-input-h .floating-label.sc-ir-phone-input:dir(rtl){right:95px}.sc-ir-phone-input-h .floating-label.sc-ir-phone-input:dir(ltr){left:95px}.sc-ir-phone-input-h .floating-label.active.sc-ir-phone-input{top:0;transform:translateY(var(--ir-floating-label-float-translateY)) scale(var(--ir-floating-label-scale));background:var(--ir-floating-label-bg);color:var(--ir-floating-label-fg-focus);font-size:12px;padding:0;opacity:0.95}";
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
        /** Internal: input focus state for floating label. */
        this.hasFocus = false;
        // private cmp_countries: ICountry[] = [];
        this.bookingService = new BookingService();
        /** Internal: ids for label/input pairing (a11y). */
        this.inputId = `ir-phone-input-${Math.random().toString(36).slice(2)}`;
        this.labelId = `ir-phone-input-label-${Math.random().toString(36).slice(2)}`;
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
        const useFloating = this.floatingLabel && this.label;
        const showSideLabel = !!this.label && !useFloating;
        const isActive = this.hasFocus || !!this.inputValue; // float when focused or has value
        return (h(Host, { key: '30f7e4c7595436b22d6c134846ffd6082952ba2e' }, h("div", { key: '7bda15469ae8a21cb9bce680d86717e5e7c511a4', class: "form-group mr-0" }, h("div", { key: '7ecb95f954adb61b24fe31ecfbd487cf6f80f494', class: "input-group row m-0 p-0 position-relative" }, showSideLabel && (h("div", { key: 'a7478461b0097961314f8b260bf5ee8ed72abd67', class: `input-group-prepend col-3 p-0 text-dark border-none` }, h("label", { key: '3665458754275a6876595a1dd39ff0ff4c9587c6', class: `input-group-text border-theme flex-grow-1 text-dark` }, this.label))), h("div", { key: 'f65b35123e1d0bf8a27efc16427dd837988b261a', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, h("button", { key: 'c2aa7e4b0c8a21fc03ff5f216f5897defcc50464', type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : h("p", { class: "p-0 m-0 " }, locales.entries.Lcz_Select), h("svg", { key: '4edd0d100a5a5e9547ec46e04af45bcfc079df23', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '41b7cf6c3e250efa22d25e592985694404e6e9ca', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("p", { key: 'ef0fa3d34613960102a0e992492f04ec0e5febfe', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), useFloating && (h("label", { key: '60ab7f541821b8e1890901f3a2d22b409905ac59', id: this.labelId, class: `floating-label ${isActive ? 'active' : ''}`, htmlFor: this.inputId }, this.label)), h("input", { key: 'd5ff515e443cbf8651c9df3ea338f2682568ea07', "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e), onFocus: () => {
                this.hasFocus = true;
            }, onBlur: () => {
                this.hasFocus = false;
            } })), this.isDropdownVisible && (h("div", { key: 'bf92a1857859c7c6654d0c34c3967496c20459c1', class: "ir-dropdown-container" }, h("ir-combobox", { key: '3aeeb5157916e697e08645054e11864748c98a3f', onComboboxValueChange: e => {
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
        "floatingLabel": [516, "floating-label"],
        "inputValue": [32],
        "isDropdownVisible": [32],
        "currentCountry": [32],
        "hasFocus": [32]
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