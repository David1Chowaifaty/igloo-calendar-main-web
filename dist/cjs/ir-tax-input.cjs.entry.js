'use strict';

var index = require('./index-CQkpA5n3.js');
var utils = require('./utils-DfkM3gGN.js');
var locale_controller = require('./locale.controller-C5iGrwyB.js');
var t = require('./t-CyRK1btk.js');
var types = require('./types-BVJQZ50e.js');
require('./IBooking-hDE_y33g.js');
require('./locales.store-BMTss6fG.js');
require('./language-observer-DKp37LIu.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irTaxInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1;gap:0;align-items:flex-end;}.ir-tax-input__percentage::part(base){border-start-end-radius:0;border-end-end-radius:0}.ir-tax-input__select::part(combobox){border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0}.ir-tax-input__percentage-wrapper{z-index:4;}.ir-tax-input__select-wrapper{flex:1 1 0%}.ir-tax-input__percentage{z-index:5}.ir-tax-input__select{flex:1 1 0%}.ir-tax-input__select-wrapper{z-index:3}.ir-tax-input__select-wrapper:has(.ir-tax-input__select[open]),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-visible),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-within),.ir-tax-input__select[open],.ir-tax-input__select:focus-visible,.ir-tax-input__select:focus-within{z-index:4}`;

// Lazy message: built at module load, before any locale is fetched.
const taxSetupSchema = types.stringType({ errorMap: () => ({ message: t.t('Lcz_SelectASetupEntry', { fallback: 'Select a setup entry' }) }) }).min(1);
const IrTaxInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.taxChange = index.createEvent(this, "taxChange");
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
        return (index.h(index.Host, { key: '7573faead93d05f33ab8bb347dfc7e3210a9a368', class: "ir-tax-input" }, index.h("ir-validator", { key: 'a3ca4d994dfe95553f569d007e5dbb1604647571', form: "tax-service-categories__form", class: "ir-tax-input__percentage-wrapper", value: this.tax?.value ?? null, schema: this.isTaxInputDisabled ? types.numberType().nullable() : types.coerce.number().min(0).max(30) }, index.h("ir-input", { key: 'd4f12a6419bdfcc7569066c7b372c7343470de16', disabled: this.isTaxInputDisabled, value: this.tax?.value?.toString() ?? '', mask: {
                min: 0,
                max: 30,
                mask: Number,
            }, onChange: () => {
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode: this.tax?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-tax-input__percentage", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updateTaxField({ value });
            } }, index.h("span", { key: 'fb7b68381a362db95e4be704f3423b62124ad7cf', slot: "end", class: "ir-tax-input__percentage-symbol" }, "%"))), index.h("ir-validator", { key: 'e141bc0c2d8e9578a8ce6ca7bff1fc74f4facefb', form: "tax-service-categories__form", class: "ir-tax-input__select-wrapper", schema: taxSetupSchema, value: this.tax?.mode || '' }, index.h("wa-select", { key: 'c2cc00e322b2d935f1983b5c19782be2056c6660', part: "select", class: "ir-tax-input__select", size: "s", value: this.tax?.mode, defaultValue: this.tax?.mode, onchange: e => {
                const mode = e.target.value.toString();
                this.updateTaxField({ mode });
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode });
            }, placeholder: t.t('Lcz_SelectPlaceholder', { fallback: 'Select...' }) }, this.setupEntries.map(entry => (index.h("wa-option", { key: entry.CODE_NAME, value: entry.CODE_NAME }, utils.getEntryValue({ entry, language: locale_controller.LocaleController.language }))))))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handleTaxValueChange": 0
            }]
    }; }
};
IrTaxInput.style = irTaxInputCss();

exports.ir_tax_input = IrTaxInput;
