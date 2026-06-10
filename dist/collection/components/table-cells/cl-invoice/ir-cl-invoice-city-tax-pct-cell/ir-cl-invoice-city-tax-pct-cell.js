import { Host, h } from "@stencil/core";
export class IrClInvoiceCityTaxPctCell {
    cityTaxPercent;
    render() {
        return h(Host, { key: '6ed1e528c43de7d12b3faaae0d64a971273e29f9' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
    }
    static get is() { return "ir-cl-invoice-city-tax-pct-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-city-tax-pct-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-city-tax-pct-cell.css"]
        };
    }
    static get properties() {
        return {
            "cityTaxPercent": {
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
                "attribute": "city-tax-percent",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-cl-invoice-city-tax-pct-cell.js.map
