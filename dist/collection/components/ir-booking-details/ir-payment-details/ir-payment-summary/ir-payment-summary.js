import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrPaymentSummary {
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: 'ba8cf439e47e10373d2b46df452a9160942fa1c5', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'c6318b6b3e8238cf7bade44efc6110a05f829857', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '3112481603e78ee744ff6ca2366c2ff465831ce3' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '9609f879469bd08a7365244a3caab6822488572f', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '77283a3286b5c5cdac666fe6ba35841529dae4c4' }, locales.entries.Lcz_Balance, ": "), h("span", { key: 'bcdd8ce1d99eaa8b15b0e857f033e684f2dda250', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: '6175b69bc608742eea88aade61ee078bf425d980', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'cac3e33669872dd774d7a00d9ca15c458a2d559f' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '69e74f8e6c4fa4c33fbab7639edde09983034951' }, formatAmount(this.currency.symbol, this.collected)))));
    }
    static get is() { return "ir-payment-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-payment-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-payment-summary.css"]
        };
    }
    static get properties() {
        return {
            "totalCost": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "total-cost",
                "reflect": false
            },
            "balance": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "balance",
                "reflect": false
            },
            "collected": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "collected",
                "reflect": false
            },
            "currency": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Currency",
                    "resolved": "Currency",
                    "references": {
                        "Currency": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::Currency"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
}
//# sourceMappingURL=ir-payment-summary.js.map
