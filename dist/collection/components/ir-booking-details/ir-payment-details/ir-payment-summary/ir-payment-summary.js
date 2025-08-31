import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrPaymentSummary {
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: 'b2a876f67b101557b6ec3358560c4085d32288f5', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '1aa15f0e8373b9f40cede9be638f4a0549ea7ddc', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '1ac682fdf3f379395e6a4bf99f4ab37a5cff3c0c' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '49b170990deb2d993aa9bad900c0d27c8fab1903', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '9e9214e876dee3f366e3bc555c9bed7283d9ccc2' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '6e077c4b44ef929383251160510df32cf6ebeca5', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: '7f98bdd4037fd4c12549b85cc82bf9ee545f7ca1', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '385ac8d1af098fc0cefbbbe319332397cbd710d0' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '15548bae7304481956d3f472879a4e0c1ab53fe2' }, formatAmount(this.currency.symbol, this.collected)))));
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
