import { Host, h } from "@stencil/core";
export class IrClInvoiceCityTaxPctCell {
    cityTaxPercent;
    render() {
        return h(Host, { key: 'e6be5d97609e5543916a13c9e96c59f908aadeeb' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
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
