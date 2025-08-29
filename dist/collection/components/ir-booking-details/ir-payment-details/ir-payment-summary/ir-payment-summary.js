import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrPaymentSummary {
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: '2848d6ecc1d2b9d9501e78c493ba0e9b8b8b2382', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: 'c66acc647873b5f62fc4e2d2e9834e58e7a73ee3', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '5ec1818f2b9ff12409e69e4b7aaaa6ed5a139a40' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: 'bfde6db2ba1bfb63d3c437b94a0ad729cdacc618', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'e310c90f6dac05ecdd8f7db5a7dde71dafcc48a9' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '68703a8fd0fb5a97fd39f11627a594f57c818e3d', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: 'ce468405b6a487e6edb1430f90e1fe3e102c4ac0', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'cbb5480129b31cdfb990ffc24eee676356f35e85' }, locales.entries.Lcz_Collected, ": "), h("span", { key: '6ed706febf530bf05820154be8d575712661244c' }, formatAmount(this.currency.symbol, this.collected)))));
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
