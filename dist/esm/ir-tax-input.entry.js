import { r as registerInstance, c as createEvent, h, H as Host } from './index-CwWmK1sZ.js';
import { h as getEntryValue } from './utils-DCUYWubA.js';
import { s as stringType, n as numberType, c as coerce } from './types-Cvnhk41g.js';
import './moment-Mki5YqAR.js';
import './calendar-data-zADniuy4.js';
import './index-BfixheT-.js';
import './locales.store-DN9FqlnV.js';
import './type-ByBjJ3uo.js';
import './calendar-dates-D3hVfsrC.js';

const irTaxInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-left-width:var(--error-border-width) !important;border-right-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1;gap:0;align-items:flex-end;}:host(:dir(rtl)) .ir-tax-input__percentage::part(base),:host(:dir(ltr)) .ir-tax-input__select::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}:host(:dir(rtl)) .ir-tax-input__select::part(combobox),:host(:dir(ltr)) .ir-tax-input__percentage::part(base){border-top-right-radius:0;border-bottom-right-radius:0}:host(:dir(rtl)) .ir-tax-input__select::part(combobox){border-right-width:0}:host(:dir(ltr)) .ir-tax-input__select::part(combobox){border-left-width:0}.ir-tax-input__percentage-wrapper{z-index:4;}.ir-tax-input__select-wrapper{flex:1 1 0%}.ir-tax-input__percentage{z-index:5}.ir-tax-input__select{flex:1 1 0%}.ir-tax-input__select-wrapper{z-index:3}.ir-tax-input__select-wrapper:has(.ir-tax-input__select[open]),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-visible),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-within),.ir-tax-input__select[open],.ir-tax-input__select:focus-visible,.ir-tax-input__select:focus-within{z-index:4}`;

const taxSetupSchema = stringType().min(1, 'Select a setup entry');
const IrTaxInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.taxChange = createEvent(this, "taxChange");
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
        return (h(Host, { key: 'dbe759b844f9c1a22da76aa20e7703457000923b', class: "ir-tax-input" }, h("ir-validator", { key: '9a17cd0bc33d497a6bc647f64cef340baf59c09f', form: "tax-service-categories__form", class: "ir-tax-input__percentage-wrapper", value: this.tax?.value ?? null, schema: this.isTaxInputDisabled ? numberType().nullable() : coerce.number().min(0).max(30) }, h("ir-input", { key: 'a4468c5e7d739c5adf88cbf90c4b2e15546a23c3', disabled: this.isTaxInputDisabled, value: this.tax?.value?.toString() ?? '', mask: {
                min: 0,
                max: 30,
                mask: Number,
            }, onChange: () => {
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode: this.tax?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-tax-input__percentage", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updateTaxField({ value });
            } }, h("span", { key: '303b813f710468edb56dba419860bf44e79b1386', slot: "end", class: "ir-tax-input__percentage-symbol" }, "%"))), h("ir-validator", { key: 'e8e41cedf2a23aa8ee4be40e85671f99391c5e6e', form: "tax-service-categories__form", class: "ir-tax-input__select-wrapper", schema: taxSetupSchema, value: this.tax?.mode || '' }, h("wa-select", { key: '8c2ed70c37fb6387c4b7888f7ec7035533ec243d', part: "select", class: "ir-tax-input__select", size: "s", value: this.tax?.mode, defaultValue: this.tax?.mode, onchange: e => {
                const mode = e.target.value.toString();
                this.updateTaxField({ mode });
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode });
            }, placeholder: "Select..." }, this.setupEntries.map(entry => (h("wa-option", { key: entry.CODE_NAME, value: entry.CODE_NAME }, getEntryValue({ entry, language: this.language }))))))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handleTaxValueChange": 0
            }]
    }; }
};
IrTaxInput.style = irTaxInputCss();

export { IrTaxInput as ir_tax_input };
