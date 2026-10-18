import { Host, h } from "@stencil/core";
import { z } from "zod";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
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
        return (h(Host, { key: '97006d4f1a0ca34b8fad72f300a731595fce1151', class: "ir-extra-service-price-input" }, h("ir-validator", { key: 'aeed0ef10529735b253c87f1a3d78ca16029162b', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: z
                .number()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: t('Lcz_PriceMustBeGreaterThanZero', { fallback: 'Price must be greater than 0' }) }) }, h("ir-input", { key: '23845fa815f36363c99eb879f9472c6d8e068148', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", exportparts: "base", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: '4fbe810a4e4b5e6d6eec707d86e3e702bb9a116b', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, calendar_data.property.currency.symbol), h("slot", { key: '3f53ee16b5624b380c76e3293e8632657c5da76b', name: "end", slot: "end" })))));
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
