import { Host, h } from "@stencil/core";
export class IrClInvoiceVatPctCell {
    vatPercent;
    render() {
        return h(Host, { key: 'b335f3fbd71cd4487da7e4e4bb7bf2a78a0801aa' }, this.vatPercent, "%");
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
