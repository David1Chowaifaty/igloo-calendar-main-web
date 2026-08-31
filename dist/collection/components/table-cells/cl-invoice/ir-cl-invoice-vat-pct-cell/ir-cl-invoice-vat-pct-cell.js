import { Host, h } from "@stencil/core";
export class IrClInvoiceVatPctCell {
    vatPercent;
    render() {
        return h(Host, { key: '71c2f9fc2978c95955bf7a972c74e50c3b3fcf84' }, this.vatPercent, "%");
    }
    static get is() { return "ir-cl-invoice-vat-pct-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-vat-pct-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-vat-pct-cell.css"]
        };
    }
    static get properties() {
        return {
            "vatPercent": {
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
                "attribute": "vat-percent"
            }
        };
    }
}
