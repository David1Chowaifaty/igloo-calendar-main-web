import { Host, h } from "@stencil/core";
import { z } from "zod";
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
        return (h(Host, { key: 'fbcb240ba21f7927e69da918b866fa86dd447391', class: "ir-extra-service-price-input" }, h("ir-validator", { key: 'b08fa19e38a8791f8ed6f7c10d617a2e4eb5af53', form: "extra-services-settings__form", class: "ir-extra-service-price-input__price-wrapper", value: this.price?.value ?? null, schema: z
                .number()
                .nullable()
                .refine(value => value === null || value >= 0.01, { message: 'Price must be greater than 0' }) }, h("ir-input", { key: '99a509047e32fc41ea8235bfb1c897f0cbc28691', value: this.price?.value?.toString() ?? '', mask: 'price', onChange: () => {
                this.priceChange.emit({ value: this.price?.value ?? this.chargeRule?.value ?? null, mode: this.price?.mode ?? this.chargeRule?.mode ?? '' });
            }, part: "input", label: this.label, class: "ir-extra-service-price-input__price", size: "s", placeholder: this.placeholder, "onText-change": e => {
                const inputValue = `${e.detail ?? ''}`.trim();
                const value = inputValue === '' ? null : Number(inputValue);
                this.updatePriceField({ value });
            } }, h("span", { key: '796ea68b61ccf7ae123ec86745159bc95eedaf9f', slot: "start", class: "ir-extra-service-price-input__price-symbol" }, "$")))));
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
