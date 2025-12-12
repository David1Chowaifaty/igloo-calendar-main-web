import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrPaymentSummary {
    totalCost;
    balance;
    collected;
    currency;
    isBookingCancelled;
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: '792e5d87efa9c9fe23fddf19c3c070de924fa1d6', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'b380c6281924f28a4383ae63d92a86de099650bf', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '7579a23b3214d87facf4069885a77d5e8063d94e' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '3ef12266b829a1e33bc4a8e1c41f3cf1db5244c6', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '1039d406375fa4b5e3abd2a9e8d830052991b4e7' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '1d97785d9a0f18e9d43eb23353be4f8611adc0fc', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '29ca2cb186c7632a0a766f01b0003bb6eea8ce1c', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '5e645c2f2bed8cd2a6412c0bedb042005a63488a' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '882929be759a17c841cd21ef102f6846321639f3' }, formatAmount(this.currency.symbol, this.collected))))));
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
            },
            "isBookingCancelled": {
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
                "attribute": "is-booking-cancelled",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-payment-summary.js.map
