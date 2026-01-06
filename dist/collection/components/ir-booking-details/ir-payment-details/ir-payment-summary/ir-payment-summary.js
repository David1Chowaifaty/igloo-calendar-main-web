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
        return (h("div", { key: '66d561f7dfe83e454528e0347a9fef68097f51f2', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'a2f853a0ca191a7d8bbaab9dc0986d9d66c74006', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '29df930323d05ff5f82e7a84a4f501afc596a7ff' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '6e00f2fbc0e97594cee9d4dd84428a48417dc341', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '1dfe8253f6926ffe357b1a9702a073eb38323c66' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '643c84867808dd827e025cc6e8bd1c45af371546', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), !this.isBookingCancelled && (h("div", { key: '16f92d2a851abadc19483d37ae9724dc63ea8cf7', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '342e27a71d1e7fc6c6d4851b4fd866c65fd8fd33' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'c4819bdeda68e69b76b620a1fd81167b702a95e8' }, formatAmount(this.currency.symbol, this.collected))))));
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
