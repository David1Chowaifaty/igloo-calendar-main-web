'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index$1 = require('./index-35d81173.js');
const index = require('./index-8bb117a0.js');
const utils = require('./utils-7364dac0.js');
require('./moment-1780b03a.js');
require('./calendar-data-70bc3b4b.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');
require('./type-393ac773.js');

const irTaxInputCss = "wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){--error-width:2px;border-color:var(--wa-color-danger-border-loud);outline-color:var(--wa-color-danger-border-loud);border-top-width:var(--error-width) !important;border-left-width:var(--error-width) !important;border-right-width:var(--error-width) !important;border-bottom-width:var(--error-width) !important}:host{display:flex;flex:1;gap:0;align-items:flex-end;}:host(:dir(rtl)) .ir-tax-input__percentage::part(base),:host(:dir(ltr)) .ir-tax-input__select::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}:host(:dir(rtl)) .ir-tax-input__select::part(combobox),:host(:dir(ltr)) .ir-tax-input__percentage::part(base){border-top-right-radius:0;border-bottom-right-radius:0}:host(:dir(rtl)) .ir-tax-input__select::part(combobox){border-right-width:0}:host(:dir(ltr)) .ir-tax-input__select::part(combobox){border-left-width:0}.ir-tax-input__percentage-wrapper{z-index:4;}.ir-tax-input__select-wrapper{flex:1 1 0%}.ir-tax-input__percentage{z-index:5}.ir-tax-input__select{flex:1 1 0%}.ir-tax-input__select-wrapper{z-index:3}.ir-tax-input__select-wrapper:has(.ir-tax-input__select[open]),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-visible),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-within),.ir-tax-input__select[open],.ir-tax-input__select:focus-visible,.ir-tax-input__select:focus-within{z-index:4}";
const IrTaxInputStyle0 = irTaxInputCss;

const taxSetupSchema = index.z.string().min(1, 'Select a setup entry');
const IrTaxInput = class {
    constructor(hostRef) {
        index$1.registerInstance(this, hostRef);
        this.taxChange = index$1.createEvent(this, "taxChange", 7);
    }
    /**
     * List of setup entries used to populate the tax mode select.
     *
     * Each entry represents a tax application option
     * (e.g. Not Applicable, Inclusive, Exclusive).
     */
    setupEntries = [];
    /**
     * Label displayed above the percentage input.
     */
    label;
    /**
     * Placeholder text shown in the percentage input.
     */
    placeholder;
    /**
     * Disables the percentage input when true.
     *
     * Note: the input is also automatically disabled
     * when the selected tax mode is "Not Applicable".
     */
    inputDisabled;
    /**
     * Current language used to resolve translated setup entry labels.
     * Defaults to English ("en").
     */
    language = 'en';
    /**
     * Controlled charge rule value passed from the parent.
     *
     * This represents the committed tax state and is used
     * to sync the internal component state.
     */
    chargeRule;
    /**
     * Enables automatic validation behavior when true.
     */
    autoValidate;
    /**
     * Internal working copy of the charge rule.
     *
     * This state is updated while the user is interacting
     * with the input/select and is only emitted when
     * a meaningful change is committed.
     */
    tax;
    /**
     * Emitted when the tax rule meaningfully changes.
     *
     * Emission happens on:
     * - input commit (IMask change / blur)
     * - tax mode selection change
     */
    taxChange;
    componentWillLoad() {
        if (this.chargeRule)
            this.updateTaxField(this.chargeRule);
    }
    get isTaxInputDisabled() {
        return this.inputDisabled || this.tax?.mode === '002';
    }
    handleTaxValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.updateTaxField(newValue);
        }
    }
    updateTaxField(params) {
        this.tax = { ...(this.tax || {}), ...params };
    }
    render() {
        return (index$1.h(index$1.Host, { key: '7a9169c1cbf0b410e8612a17644890e147ea677f', class: "ir-tax-input" }, index$1.h("ir-validator", { key: '62dd72cf17370785fd015227811fc956222bd33b', form: "tax-service-categories__form", class: "ir-tax-input__percentage-wrapper", value: this.tax?.value ?? 40, schema: this.isTaxInputDisabled ? index.z.number().nullable() : index.z.coerce.number().min(0).max(30) }, index$1.h("ir-input", { key: '9879b83b6656055eb86dad9bf470e111c051752d', disabled: this.isTaxInputDisabled, value: this.tax?.value?.toString() ?? '', mask: {
                min: 0,
                max: 30,
                mask: Number,
            }, onChange: () => {
                this.taxChange.emit(this.tax);
            }, part: "input", label: this.label, class: "ir-tax-input__percentage", size: "small", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updateTaxField({ value });
            } }, index$1.h("span", { key: '995525e6f7fdd5d88632a532aa6f64534ddfd701', slot: "end", class: "ir-tax-input__percentage-symbol" }, "%"))), index$1.h("ir-validator", { key: '4c5efe90bf5ab68cead9780609709d31d5aa2df0', form: "tax-service-categories__form", class: "ir-tax-input__select-wrapper", schema: taxSetupSchema, value: this.tax?.mode || '' }, index$1.h("wa-select", { key: 'ac8f75a51c2feef2e433fd22584a9d8bad3ff076', part: "select", class: "ir-tax-input__select", size: "small", value: this.tax?.mode, defaultValue: this.tax?.mode, onchange: e => {
                const mode = e.target.value.toString();
                this.updateTaxField({ mode });
                this.taxChange.emit(this.tax);
            }, placeholder: "Select..." }, this.setupEntries.map(entry => (index$1.h("wa-option", { key: entry.CODE_NAME, value: entry.CODE_NAME }, utils.getEntryValue({ entry, language: this.language }))))))));
    }
    static get watchers() { return {
        "chargeRule": ["handleTaxValueChange"]
    }; }
};
IrTaxInput.style = IrTaxInputStyle0;

exports.ir_tax_input = IrTaxInput;

//# sourceMappingURL=ir-tax-input.cjs.entry.js.map