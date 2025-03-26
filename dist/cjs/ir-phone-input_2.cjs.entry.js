'use strict';

var index = require('./index-Dt9a74kn.js');
var booking_service = require('./booking.service-BK-JNi--.js');
var locales_store = require('./locales.store-CJveOVzn.js');
require('./axios-dx93wJEX.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./booking-Co20zX8p.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./index-PIkoJJtF.js');
require('./calendar-data-CC4kt7DA.js');

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:1rem;aspect-ratio:4/3;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}.phone_prefix_label.sc-ir-phone-input{padding:0 0.5rem;margin:0}";

const IrPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange");
        this.value = '';
        this.disabled = false;
        this.error = false;
        this.default_country = null;
        this.phone_prefix = null;
        this.countries = [];
        this.inputValue = '';
        this.isDropdownVisible = false;
        // private cmp_countries: ICountry[] = [];
        this.bookingService = new booking_service.BookingService();
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
        return (index.h(index.Host, { key: '317bcb5dba765995ebc2c0d261ceb3509a930589' }, index.h("div", { key: 'f60fd38b37d043cb7b39385f344ba9f5eb57bf21', class: "form-group mr-0" }, index.h("div", { key: 'b2d9fcfc82435be651c329734be36b95a28d96c7', class: "input-group row m-0 p-0 position-relative" }, this.label && (index.h("div", { key: 'a50e0968b0d172f2240f4f7b52def211ea7c7cbc', class: `input-group-prepend col-3 p-0 text-dark border-none` }, index.h("label", { key: '9817d2590f8af23fd09921dcb9b4e720ea8a3a7b', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), index.h("div", { key: '975c9c80226854d50ef8cd40771cd6bde7c61c23', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, index.h("button", { key: '76868e0a0d6a93c4ff2357281433d53c64d3d605', onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? index.h("img", { src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }) : index.h("p", { class: "p-0 m-0 " }, locales_store.locales.entries.Lcz_Select), index.h("svg", { key: 'af439f3b426674b31c590fe7543276c082a19e6a', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: 'b54dd80dc220ef7f6acc1ebe2eb9aefb7c9fc35a', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("p", { key: 'd7ef12753d032f97759d20aa81ecc86469498a33', class: 'phone_prefix_label' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), index.h("input", { key: '8e8abcb74eb0f2d856626b19c9e58330324f17b2', "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), this.isDropdownVisible && (index.h("div", { key: 'b9e512753dcc22745c1bcd80b33d746a15954486', class: "ir-dropdown-container" }, index.h("ir-combobox", { key: '8cabb2da969836670b01a5980afd2d29ceca90e7', onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
                image: c.flag,
            })) })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "value": ["handleValueChange"],
        "phone_prefix": ["handlePhoneChange"]
    }; }
};
IrPhoneInput.style = irPhoneInputCss;

const irTextareaCss = ".prepend-textarea.sc-ir-textarea{padding:0 !important}.ta-prepend-text.sc-ir-textarea{width:100%}";

const IrTextArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange");
        this.rows = 3;
        this.cols = 5;
        this.text = '';
        this.label = '<label>';
        this.placeholder = '<placeholder>';
        this.value = '';
        this.maxLength = 250;
        this.variant = 'default';
        this.labelWidth = 3;
        this.error = false;
    }
    handleAriaInvalidChange(newValue) {
        this.error = newValue === 'true';
    }
    connectedCallback() { }
    disconnectedCallback() { }
    render() {
        if (this.variant === 'prepend') {
            return (index.h("fieldset", { class: "input-group" }, index.h("div", { class: `input-group-prepend col-${this.labelWidth} prepend-textarea` }, index.h("span", { class: "input-group-text ta-prepend-text" }, this.label)), index.h("textarea", { "data-testid": this.testId, value: this.value, class: `form-control`, style: Object.assign({ height: '7rem' }, this.styles), maxLength: this.maxLength, onChange: e => this.textChange.emit(e.target.value), "aria-label": this.label })));
        }
        return (index.h("div", { class: 'form-group' }, index.h("label", null, this.label), index.h("textarea", { "data-testid": this.testId, style: this.styles, maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrTextArea.style = irTextareaCss;

exports.ir_phone_input = IrPhoneInput;
exports.ir_textarea = IrTextArea;
//# sourceMappingURL=ir-phone-input.ir-textarea.entry.cjs.js.map

//# sourceMappingURL=ir-phone-input_2.cjs.entry.js.map