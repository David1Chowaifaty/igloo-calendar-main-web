import locales from "../../../../stores/locales.store";
import { formatAmount } from "../../../../utils/utils";
import { h } from "@stencil/core";
export class IrPaymentSummary {
    shouldShowTotalCost() {
        return this.totalCost > 0 && this.totalCost !== null;
    }
    render() {
        return (h("div", { key: '7640039967a02f3b349e638a88708081034ae00f', class: " m-0" }, this.shouldShowTotalCost() && (h("div", { key: '0329ca59fb458095f8f697b51a112f1d8e0d4541', class: "mb-2 h4 total-cost-container" }, locales.entries.Lcz_TotalCost, ":", h("span", { key: '48887d8bf087a8b3957d2bd47e5da017eda18c8c' }, formatAmount(this.currency.symbol, this.totalCost)))), h("div", { key: '6b2e8b0d022f06ba335c45aa1cd8def3f130f3d8', class: "h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'b999fd0c6911c342087f2b25e1d20650c35af53c' }, locales.entries.Lcz_Balance, ": "), h("span", { key: '5d01d1a7e6fcc6a9e3a9dd1e496fe37ebd02ea33', class: "danger font-weight-bold" }, formatAmount(this.currency.symbol, this.balance))), h("div", { key: '1e9ac1ad531d3115e73af1178293892d3124ea3b', class: "mb-2 h4 d-flex align-items-center justify-content-between" }, h("span", { key: 'a7fec786977cc493f57690d0a67172dae787b787' }, locales.entries.Lcz_Collected, ": "), h("span", { key: 'f81ca38ec3e0a7e9f9c60d1d74c1f0cc8e7cdeb1' }, formatAmount(this.currency.symbol, this.collected)))));
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
