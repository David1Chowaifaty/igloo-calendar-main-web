import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { z } from './index2.js';
import { w as getEntryValue } from './utils.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irTaxInputCss = "wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){--error-width:2px;border-color:var(--wa-color-danger-border-loud);outline-color:var(--wa-color-danger-border-loud);border-top-width:var(--error-width) !important;border-left-width:var(--error-width) !important;border-right-width:var(--error-width) !important;border-bottom-width:var(--error-width) !important}:host{display:flex;flex:1;gap:0;align-items:flex-end;}:host(:dir(rtl)) .ir-tax-input__percentage::part(base),:host(:dir(ltr)) .ir-tax-input__select::part(combobox){border-top-left-radius:0;border-bottom-left-radius:0}:host(:dir(rtl)) .ir-tax-input__select::part(combobox),:host(:dir(ltr)) .ir-tax-input__percentage::part(base){border-top-right-radius:0;border-bottom-right-radius:0}:host(:dir(rtl)) .ir-tax-input__select::part(combobox){border-right-width:0}:host(:dir(ltr)) .ir-tax-input__select::part(combobox){border-left-width:0}.ir-tax-input__percentage-wrapper{z-index:4;}.ir-tax-input__select-wrapper{flex:1 1 0%}.ir-tax-input__percentage{z-index:5}.ir-tax-input__select{flex:1 1 0%}.ir-tax-input__select-wrapper{z-index:3}.ir-tax-input__select-wrapper:has(.ir-tax-input__select[open]),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-visible),.ir-tax-input__select-wrapper:has(.ir-tax-input__select:focus-within),.ir-tax-input__select[open],.ir-tax-input__select:focus-visible,.ir-tax-input__select:focus-within{z-index:4}";
const IrTaxInputStyle0 = irTaxInputCss;

const taxSetupSchema = z.string().min(1, 'Select a setup entry');
const IrTaxInput = /*@__PURE__*/ proxyCustomElement(class IrTaxInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.taxChange = createEvent(this, "taxChange", 7);
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
        return (h(Host, { key: '4cfc3df5936d9a30f4fbfc1ef56dd6ae36c56515', class: "ir-tax-input" }, h("ir-validator", { key: 'b12ea50e3d78b612c69faf9ff7633185e8b4e2be', form: "tax-service-categories__form", class: "ir-tax-input__percentage-wrapper", value: this.tax?.value ?? 40, schema: this.isTaxInputDisabled ? z.number().nullable() : z.coerce.number().min(0).max(30) }, h("ir-input", { key: 'a69dfdda0d1017fa992f89a6f7389139b7af87c4', disabled: this.isTaxInputDisabled, value: this.tax?.value?.toString() ?? '', mask: {
                min: 0,
                max: 30,
                mask: Number,
            }, onChange: () => {
                this.taxChange.emit(this.tax);
            }, part: "input", label: this.label, class: "ir-tax-input__percentage", size: "small", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updateTaxField({ value });
            } }, h("span", { key: '401455cbd4d6b94b32e4a776f27a846189e3d8df', slot: "end", class: "ir-tax-input__percentage-symbol" }, "%"))), h("ir-validator", { key: '6130c705a557f472811fbf5c8f85e3c48d10d513', form: "tax-service-categories__form", class: "ir-tax-input__select-wrapper", schema: taxSetupSchema, value: this.tax?.mode || '' }, h("wa-select", { key: 'e0455ee8e32c21eb0e2378fd9775a1ce7f586745', part: "select", class: "ir-tax-input__select", size: "small", value: this.tax?.mode, defaultValue: this.tax?.mode, onchange: e => {
                const mode = e.target.value.toString();
                this.updateTaxField({ mode });
                this.taxChange.emit(this.tax);
            }, placeholder: "Select..." }, this.setupEntries.map(entry => (h("wa-option", { key: entry.CODE_NAME, value: entry.CODE_NAME }, getEntryValue({ entry, language: this.language }))))))));
    }
    static get watchers() { return {
        "chargeRule": ["handleTaxValueChange"]
    }; }
    static get style() { return IrTaxInputStyle0; }
}, [1, "ir-tax-input", {
        "setupEntries": [16],
        "label": [1],
        "placeholder": [1],
        "inputDisabled": [4, "input-disabled"],
        "language": [1],
        "chargeRule": [16],
        "autoValidate": [4, "auto-validate"],
        "tax": [32]
    }, undefined, {
        "chargeRule": ["handleTaxValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tax-input", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tax-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTaxInput);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTaxInput as I, defineCustomElement as d };

//# sourceMappingURL=ir-tax-input2.js.map