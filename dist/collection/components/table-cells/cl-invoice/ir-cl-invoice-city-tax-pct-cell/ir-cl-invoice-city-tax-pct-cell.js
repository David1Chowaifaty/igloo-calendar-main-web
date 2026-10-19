import { Host, h } from "@stencil/core";
export class IrClInvoiceCityTaxPctCell {
    cityTaxPercent;
    render() {
        return h(Host, { key: '93e6979e1345269e4c6b68737e59e5decb41c271' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
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
                "reflect": false,
                "attribute": "city-tax-percent"
            }
        };
    }
}
