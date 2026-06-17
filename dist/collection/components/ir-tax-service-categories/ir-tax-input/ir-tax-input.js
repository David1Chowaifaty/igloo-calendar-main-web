import { Host, h } from "@stencil/core";
import { z } from "zod";
import { getEntryValue } from "../../../utils/utils";
const taxSetupSchema = z.string().min(1, 'Select a setup entry');
export class IrTaxInput {
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
        return (h(Host, { key: 'd90a51e6bb0a886c77aca593d79e0419006865bc', class: "ir-tax-input" }, h("ir-validator", { key: 'a5ace51e454375bf350a1b265ad0d816b42d1722', form: "tax-service-categories__form", class: "ir-tax-input__percentage-wrapper", value: this.tax?.value ?? null, schema: this.isTaxInputDisabled ? z.number().nullable() : z.coerce.number().min(0).max(30) }, h("ir-input", { key: 'ec1c112d998b412feaf1453fffc7e51b8651ed49', disabled: this.isTaxInputDisabled, value: this.tax?.value?.toString() ?? '', mask: {
                min: 0,
                max: 30,
                mask: Number,
            }, onChange: () => {
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode: this.tax?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-tax-input__percentage", size: "small", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updateTaxField({ value });
            } }, h("span", { key: 'bb004627874930ca756a498a972e3a1b62c63c86', slot: "end", class: "ir-tax-input__percentage-symbol" }, "%"))), h("ir-validator", { key: '2e0d812460f61bbba9d1700d476d8f701d049117', form: "tax-service-categories__form", class: "ir-tax-input__select-wrapper", schema: taxSetupSchema, value: this.tax?.mode || '' }, h("wa-select", { key: '2b2abfc0c2b9d3e1a3f19d5fa51da4900dc83322', part: "select", class: "ir-tax-input__select", size: "small", value: this.tax?.mode, defaultValue: this.tax?.mode, onchange: e => {
                const mode = e.target.value.toString();
                this.updateTaxField({ mode });
                this.taxChange.emit({ value: this.tax?.value ?? this.chargeRule?.value ?? null, mode });
            }, placeholder: "Select..." }, this.setupEntries.map(entry => (h("wa-option", { key: entry.CODE_NAME, value: entry.CODE_NAME }, getEntryValue({ entry, language: this.language }))))))));
    }
    static get is() { return "ir-tax-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tax-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tax-input.css"]
        };
    }
    static get properties() {
        return {
            "setupEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries",
                            "referenceLocation": "IEntries"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "List of setup entries used to populate the tax mode select.\r\n\r\nEach entry represents a tax application option\r\n(e.g. Not Applicable, Inclusive, Exclusive)."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label displayed above the percentage input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "placeholder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Placeholder text shown in the percentage input."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
            "inputDisabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the percentage input when true.\r\n\r\nNote: the input is also automatically disabled\r\nwhen the selected tax mode is \"Not Applicable\"."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "input-disabled"
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Current language used to resolve translated setup entry labels.\r\nDefaults to English (\"en\")."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "language",
                "defaultValue": "'en'"
            },
            "chargeRule": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChargeRule",
                    "resolved": "{ value?: number; mode?: string; }",
                    "references": {
                        "ChargeRule": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-tax-service-categories/types.ts::ChargeRule",
                            "referenceLocation": "ChargeRule"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controlled charge rule value passed from the parent.\r\n\r\nThis represents the committed tax state and is used\r\nto sync the internal component state."
                },
                "getter": false,
                "setter": false
            },
            "autoValidate": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Enables automatic validation behavior when true."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "auto-validate"
            }
        };
    }
    static get states() {
        return {
            "tax": {}
        };
    }
    static get events() {
        return [{
                "method": "taxChange",
                "name": "taxChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the tax rule meaningfully changes.\r\n\r\nEmission happens on:\r\n- input commit (IMask change / blur)\r\n- tax mode selection change"
                },
                "complexType": {
                    "original": "ChargeRule",
                    "resolved": "{ value?: number; mode?: string; }",
                    "references": {
                        "ChargeRule": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-tax-service-categories/types.ts::ChargeRule",
                            "referenceLocation": "ChargeRule"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "chargeRule",
                "methodName": "handleTaxValueChange"
            }];
    }
}
