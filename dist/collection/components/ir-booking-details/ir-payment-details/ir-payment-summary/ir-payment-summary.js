import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrPaymentSummary {
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: 'b8d205676eb9f281d6ffa2e4d684567bcc976142', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '10cc3eb19f1f06c0946a406d60a2039a1532e69f', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: 'a650468664c3565bd41ce2e1d19f65c477626d4a' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'cc9633f9329feac8593f6589e48709be2fda6562', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'c513853e36ac35052fd7dbb5c49954ee173860ab' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '36faf9e88343ad3c58cdf726cbd53a97a4799cf8', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: 'ee49d78ca66c34e9620ac7cdb9053fa896e61217', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '29c4f9699de77db97e1d67e92743cff880db5b5f' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '74f7a3387ef05d47e5612dc692e6c9b3f7f113b9' }, formatAmount(this.currency.symbol, this.collected)))));
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
