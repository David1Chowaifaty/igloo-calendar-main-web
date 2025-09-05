import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrPaymentSummary {
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: '0db7213420cd4bdcb26ca8735cf010104d09326c', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'c08de0c61f23c7e72bd6205b1d19ae60756b4b4a', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '07cc1c5edf8d6a11d7fe75a7a2df158d52699357' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '33ffb7106478aa641bef6dca170bdf63920ec7d7', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: '1df5186dd2f90d9bd93793e7d7af7a05848318c5' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '2a0158f7fee29e20e2c0d5c8f8d21c60e40c76c4', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: '501319c3de850f9b447c2fb2ac0bc5564de97347', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: '8b1a9714c71eab98bd15ef0529a6fd64b28580eb' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'c68c261db825c5d9db09e5ee1aaf01f60eb1823b' }, formatAmount(this.currency.symbol, this.collected)))));
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
