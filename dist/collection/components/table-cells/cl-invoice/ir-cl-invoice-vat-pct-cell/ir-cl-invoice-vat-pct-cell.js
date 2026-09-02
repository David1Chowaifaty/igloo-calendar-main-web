import { Host, h } from "@stencil/core";
export class IrClInvoiceVatPctCell {
    vatPercent;
    render() {
        return h(Host, { key: 'ae2dff679c3ee258c4f8bbb844648642a46d60cb' }, this.vatPercent, "%");
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
