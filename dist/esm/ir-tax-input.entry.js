import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { e as getEntryValue } from './utils-Cz9i5CF5.js';
import { L as LocaleController } from './locale.controller-CGuPWCIw.js';
import { t } from './t-Bvz1wS_D.js';
import { s as stringType, n as numberType, c as coerce } from './types-BLb1NO3I.js';
import './IBooking-BFuEU3Ic.js';
import './commonSchemas-BNnUj2OT.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './types-f1klcCJA.js';

const irTaxInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:flex;flex:1;gap:0;align-items:flex-end;}.ir-tax-input__percentage::part(base){border-start-end-radius:0;border-end-end-radius:0}.ir-tax-input__select::part(combobox){border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0}.ir-tax-input__percentage-wrapper{z-index:4;}.ir-tax-input__select-wrapper{flex:1 1 0%}.ir-tax-input__percentage{z-index:5}.ir-tax-input__select{flex:1 1 0%}.ir-tax-input__select-wrapper{z-index:3}.ir-tax-input__select-wrapper:has(.ir-tax-input__select[open]),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-visible),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-within),.ir-tax-input__select[open],.ir-tax-input__select:focus-visible,.ir-tax-input__select:focus-within{z-index:4}`;

// Lazy message: built at module load, before any locale is fetched.
const taxSetupSchema = stringType({ errorMap: () => ({ message: t('Lcz_SelectASetupEntry', { fallback: 'Select a setup entry' }) }) }).min(1);
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
        return (h(Host, { key: 'e6397a8fe22034c2fc0b628c59857fb56af8bc67', class: "ir-tax-input" }, h("ir-validator", { key: '210cd0c94bebf98d09ffa9d41c507cf192de481f', form: "tax-service-categories__form", class: "ir-tax-input__percentage-wrapper", value: this.tax?.value ?? null, schema: this.isTaxInputDisabled ? numberType().nullable() : coerce.number().min(0).max(30) }, h("ir-input", { key: 'b1ae56a54b41a63e6a9867fd24d9ffe8671a36c5', disabled: this.isTaxInputDisabled, value: this.tax?.value?.toString() ?? '', mask: {
                min: 0,
                max: 30,
                mask: Number,
            }, onChange: () => {
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode: this.tax?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-tax-input__percentage", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updateTaxField({ value });
            } }, h("span", { key: 'bfdff3c636bc91e83e2bd615748890cb8b0c47e5', slot: "end", class: "ir-tax-input__percentage-symbol" }, "%"))), h("ir-validator", { key: '92f64c9fc9d8c3fdd4911ac0799660e0144b6642', form: "tax-service-categories__form", class: "ir-tax-input__select-wrapper", schema: taxSetupSchema, value: this.tax?.mode || '' }, h("wa-select", { key: '0712fe6bc03c10f762c4eae815ec5852262d556a', part: "select", class: "ir-tax-input__select", size: "s", value: this.tax?.mode, defaultValue: this.tax?.mode, onchange: e => {
                const mode = e.target.value.toString();
                this.updateTaxField({ mode });
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode });
            }, placeholder: t('Lcz_SelectPlaceholder', { fallback: 'Select...' }) }, this.setupEntries.map(entry => (h("wa-option", { key: entry.CODE_NAME, value: entry.CODE_NAME }, getEntryValue({ entry, language: LocaleController.language }))))))));
    }
    static get watchers() { return {
        "chargeRule": [{
                "handleTaxValueChange": 0
            }]
    }; }
};
IrTaxInput.style = irTaxInputCss();

export { IrTaxInput as ir_tax_input };
