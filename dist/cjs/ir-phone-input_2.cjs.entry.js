'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const booking_service = require('./booking.service-4cdf5976.js');
const locales_store = require('./locales.store-32782582.js');
require('./axios-6e678d52.js');
require('./index-8bb117a0.js');
require('./utils-02a0d542.js');
require('./moment-1780b03a.js');
require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:1rem;aspect-ratio:4/3;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}.phone_prefix_label.sc-ir-phone-input{padding:0 0.5rem;margin:0}.sc-ir-phone-input-h{--ir-floating-label-fg:#6c757d;--ir-floating-label-fg-focus:#495057;--ir-floating-label-bg:#fff;--ir-floating-label-scale:0.88;--ir-floating-label-float-translateY:-70%;--ir-floating-label-resting-offset-inline:0.9rem;--ir-floating-phone-input-radius:0.21rem;--ir-floating-phone-input-height:2rem;--ir-danger:#dc3545;--ir-disabled-fg:#9aa0a6}.sc-ir-phone-input-h .input-container.has-floating.sc-ir-phone-input{position:relative;padding-top:0.9rem}.sc-ir-phone-input-h .floating-label.sc-ir-phone-input{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none;position:absolute;padding:0 0.4rem;z-index:10;color:var(--ir-floating-label-fg);background:white;transition:transform 120ms ease, color 120ms ease, top 120ms ease, background-color 120ms ease, opacity 120ms ease;opacity:0.95;line-height:1;white-space:nowrap}.sc-ir-phone-input-h .floating-label.sc-ir-phone-input:dir(rtl){right:95px}.sc-ir-phone-input-h .floating-label.sc-ir-phone-input:dir(ltr){left:95px}.sc-ir-phone-input-h .floating-label.active.sc-ir-phone-input{top:0;transform:translateY(var(--ir-floating-label-float-translateY)) scale(var(--ir-floating-label-scale));background:var(--ir-floating-label-bg);color:var(--ir-floating-label-fg-focus);font-size:12px;padding:0;opacity:0.95}.phone-input__container.sc-ir-phone-input{display:flex;align-items:flex-end}.phone-input__prefix.sc-ir-phone-input{width:150px}.phone-input__prefix.sc-ir-phone-input::part(input),.phone-input__prefix.sc-ir-phone-input::part(end){display:none}.phone-input__prefix.sc-ir-phone-input:dir(ltr)::part(base),.phone-input__phone.sc-ir-phone-input:dir(rtl)::part(base){border-top-right-radius:0;border-bottom-right-radius:0}.phone-input__prefix.sc-ir-phone-input:dir(rtl)::part(base),.phone-input__phone.sc-ir-phone-input:dir(ltr)::part(base){border-top-left-radius:0;border-bottom-left-radius:0}.phone-input__phone.sc-ir-phone-input{flex:1 1 0%}.phone-input__prefix.sc-ir-phone-input::part(start){width:100% !important}.phone-input__prefix.sc-ir-phone-input .dropdown-trigger.sc-ir-phone-input{border-right:0;width:100% !important;display:flex;align-items:center;justify-content:space-between}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
    }
    get el() { return index.getElement(this); }
    mode = 'default';
    /**
     * Label displayed next to the phone input.
     */
    label;
    /**
     * Initial phone number value.
     */
    value = '';
    /**
     * Disables the phone input when true.
     */
    disabled = false;
    /**
     * If true, styles the input to indicate an error state.
     */
    error = false;
    /**
     * Auth token used by the booking service (if needed).
     */
    token;
    /**
     * Two-letter language code used for country fetching.
     */
    language;
    /**
     * Default country ID used if no phone prefix is set.
     */
    default_country = null;
    /**
     * If provided, sets the phone prefix and updates selected country.
     */
    phone_prefix = null;
    /**
     * Placeholder text for the input.
     */
    placeholder;
    /**
     * Country list, used to populate prefix and dropdown.
     * If not provided, fetched from the booking service.
     */
    countries = [];
    /**
     * Identifier for test automation.
     */
    testId;
    /**
     * Floating label text that appears inside the input and “floats” above
     * when the field is focused or has a value.
     *
     * - If provided, a floating label will be rendered inside the input container.
     * - If you omit this prop but set `label`, the old left-side static label is used.
     * - If you provide both `label` and `floatingLabel`, only the floating label is shown.
     *
     * Accessibility:
     * - The floating label is tied to the input via `aria-labelledby`.
     * - You can still set `placeholder`; the label will not be replaced by it.
     *
     * Examples:
     * ```tsx
     * <ir-phone-input floating-label label="Phone" />
     * ```
     */
    floatingLabel;
    /**
     * Emits when the user changes the phone number.
     * Emits `{ phone_prefix, mobile }` object.
     *
     * Example:
     * ```tsx
     * <ir-phone-input onTextChange={(e) => console.log(e.detail)} />
     * ```
     */
    textChange;
    /**
     * Tracks current user input value.
     */
    inputValue = '';
    /**
     * Tracks visibility of the country dropdown.
     */
    isDropdownVisible = false;
    /**
     * Currently selected country (based on prefix or ID).
     */
    currentCountry;
    /** Internal: input focus state for floating label. */
    hasFocus = false;
    // private cmp_countries: ICountry[] = [];
    bookingService = new booking_service.BookingService();
    /** Internal: ids for label/input pairing (a11y). */
    inputId = `ir-phone-input-${Math.random().toString(36).slice(2)}`;
    labelId = `ir-phone-input-label-${Math.random().toString(36).slice(2)}`;
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
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: this.currentCountry?.phone_prefix, mobile: this.inputValue });
    }
    /**
     * Sets the current country based on `phone_prefix` prop or country ID.
     * Emits current phone prefix and phone number.
     */
    setCountryFromPhonePrefix() {
        let country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            country = this.countries.find(c => c.id.toString() === this.phone_prefix);
            if (!country) {
                return;
            }
        }
        this.currentCountry = { ...country };
        this.textChange.emit({ phone_prefix: this.currentCountry?.phone_prefix, mobile: this.value });
    }
    /**
     * Sets the current country by its ID.
     * Emits current phone prefix and phone number.
     */
    setCurrentCountry(id) {
        const country = this.countries.find(country => country.id === id);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = { ...country };
        this.textChange.emit({ phone_prefix: this.currentCountry?.phone_prefix, mobile: this.value });
    }
    render() {
        const useFloating = this.floatingLabel && this.label;
        const showSideLabel = !!this.label && !useFloating;
        const isActive = this.hasFocus || !!this.inputValue; // float when focused or has value
        if (this.mode === 'modern') {
            return (index.h(index.Host, null, index.h("div", { class: "phone-input__container" }, index.h("wa-input", { class: "phone-input__prefix", label: this.label, readonly: true }, index.h("button", { slot: "start", type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? index.h("img", { src: this.currentCountry?.flag, class: "flag" }) : index.h("p", { class: "p-0 m-0 " }, locales_store.locales.entries.Lcz_Select), this.currentCountry && index.h("span", null, this.currentCountry.phone_prefix), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" })))), index.h("wa-input", { onchange: e => this.handleInputChange(e), max: 14, value: this.inputValue, class: "phone-input__phone", placeholder: this.placeholder })), this.isDropdownVisible && (index.h("div", null, index.h("ir-combobox", { onComboboxValueChange: e => {
                    this.setCurrentCountry(+e.detail.data);
                    this.isDropdownVisible = false;
                }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                    id: c.id.toString(),
                    name: `${c.name} (${c.phone_prefix})`,
                    image: c.flag,
                })) })))));
        }
        return (index.h(index.Host, null, index.h("div", { class: "form-group mr-0" }, index.h("div", { class: "input-group row m-0 p-0 position-relative" }, showSideLabel && (index.h("div", { class: `input-group-prepend col-3 p-0 text-dark border-none` }, index.h("label", { class: `input-group-text border-theme flex-grow-1 text-dark` }, this.label))), index.h("div", { class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, index.h("button", { type: "button", onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, this.currentCountry ? index.h("img", { src: this.currentCountry?.flag, class: "flag" }) : index.h("p", { class: "p-0 m-0 " }, locales_store.locales.entries.Lcz_Select), index.h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("p", { class: 'phone_prefix_label' }, this.currentCountry?.phone_prefix), useFloating && (index.h("label", { id: this.labelId, class: `floating-label ${isActive ? 'active' : ''}`, htmlFor: this.inputId }, this.label)), index.h("input", { "data-testid": this.testId, maxLength: 14, type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e), onFocus: () => {
                this.hasFocus = true;
            }, onBlur: () => {
                this.hasFocus = false;
            } })), this.isDropdownVisible && (index.h("div", { class: "ir-dropdown-container" }, index.h("ir-combobox", { onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
                image: c.flag,
            })) })))))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"],
        "phone_prefix": ["handlePhoneChange"]
    }; }
};
IrPhoneInput.style = IrPhoneInputStyle0;

const irTextareaCss = ".prepend-textarea.sc-ir-textarea{padding:0 !important}.ta-prepend-text.sc-ir-textarea{width:100%}";
const IrTextareaStyle0 = irTextareaCss;

const IrTextArea = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
    }
    /**
     * Number of visible text lines.
     */
    rows = 3;
    /**
     * Number of visible character columns.
     */
    cols = 5;
    /**
     * Unused property, intended to store textarea text.
     */
    text = '';
    /**
     * Text label displayed above or beside the textarea.
     */
    label = '<label>';
    /**
     * Placeholder text shown when input is empty.
     */
    placeholder = '<placeholder>';
    /**
     * Current value of the textarea (supports two-way binding).
     */
    value = '';
    /**
     * Maximum number of characters allowed.
     */
    maxLength = 250;
    /**
     * Additional classes for the textarea element.
     */
    textareaClassname;
    /**
     * Layout style of the textarea:
     * `'default'` shows label above, `'prepend'` shows label on the left.
     */
    variant = 'default';
    /**
     * Width of the label in grid columns (for `variant="prepend"`).
     */
    labelWidth = 3;
    /**
     * Inline styles applied directly to the textarea.
     */
    styles;
    /**
     * `data-testid` for targeting in tests.
     */
    testId;
    /**
     * Indicates if the field is in an error state.
     */
    error = false;
    /**
     * Emits when the textarea content changes.
     *
     * Example:
     * ```tsx
     * <ir-textarea onTextChange={(e) => console.log(e.detail)} />
     * ```
     */
    textChange;
    handleAriaInvalidChange(newValue) {
        this.error = newValue === 'true';
    }
    render() {
        if (this.variant === 'prepend') {
            return (index.h("fieldset", { class: "input-group" }, index.h("div", { class: `input-group-prepend col-${this.labelWidth} prepend-textarea` }, index.h("span", { class: "input-group-text ta-prepend-text" }, this.label)), index.h("textarea", { "data-testid": this.testId, value: this.value, class: `form-control`, style: { height: '7rem', ...this.styles }, maxLength: this.maxLength, onChange: e => this.textChange.emit(e.target.value), "aria-label": this.label })));
        }
        return (index.h("div", { class: 'form-group' }, index.h("label", null, this.label), index.h("textarea", { "data-testid": this.testId, style: this.styles, maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrTextArea.style = IrTextareaStyle0;

exports.ir_phone_input = IrPhoneInput;
exports.ir_textarea = IrTextArea;

//# sourceMappingURL=ir-phone-input_2.cjs.entry.js.map