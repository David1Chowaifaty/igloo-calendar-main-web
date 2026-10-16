import { Host, h } from "@stencil/core";
import { z } from "zod";
import calendar_data from "../../../stores/calendar-data";
export class IrExtraServicePriceInput {
    label;
    placeholder;
    /**
     * Controlled charge rule value passed from the parent: `value` holds the price,
     * `mode` holds the taxation mode code (Inclusive/Exclusive).
     */
    chargeRule;
    autoValidate;
    price;
    priceChange;
    componentWillLoad() {
        if (this.chargeRule)
            this.updatePriceField(this.chargeRule);
    }
    handlePriceValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.updatePriceField(newValue);
        }
    }
    updatePriceField(params) {
        this.price = { ...(this.price || {}), ...params };
    }
    render() {
        return (h(Host, { key: '61f944fcc86a180dcda8117ab4baa75308d2bcca', class: "ir-extra-service-price-input" }, h("ir-validator", { key: '0833e9ecc1e627a67b98ef4f181c192d9801d073', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: z
                .number()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: 'Price must be greater than 0' }) }, h("ir-input", { key: '5f97cc2fb1d96db73d3073678102103a75a6da85', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: '94d9ceed1575cda682419d03da6958309aa1bac4', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendar_data.property.currency.symbol), h("slot", { key: '6e72738db1926cfaa91408f209764ba3a311e776', name: "end", slot: "end" })))));
    }
    static get is() { return "ir-extra-service-price-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-service-price-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-service-price-input.css"]
        };
    }
    static get properties() {
        return {
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
                    "text": ""
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
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
                            "path": "@/components/ir-tax-service-categories/types",
                            "id": "src/components/ir-tax-service-categories/types.ts::ChargeRule",
                            "referenceLocation": "ChargeRule"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Controlled charge rule value passed from the parent: `value` holds the price,\n`mode` holds the taxation mode code (Inclusive/Exclusive)."
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
                    "text": ""
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
            "price": {}
        };
    }
    static get events() {
        return [{
                "method": "priceChange",
                "name": "priceChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ChargeRule",
                    "resolved": "{ value?: number; mode?: string; }",
                    "references": {
                        "ChargeRule": {
                            "location": "import",
                            "path": "@/components/ir-tax-service-categories/types",
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
                "methodName": "handlePriceValueChange"
            }];
    }
}
