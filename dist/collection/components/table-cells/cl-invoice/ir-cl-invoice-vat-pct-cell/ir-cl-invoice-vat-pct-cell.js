import { Host, h } from "@stencil/core";
export class IrClInvoiceVatPctCell {
    vatPercent;
    render() {
        return h(Host, { key: '8694427a641c2e610a41b5d97521dcf73d97a8e2' }, this.vatPercent, "%");
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
                "attribute": "vat-percent",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-cl-invoice-vat-pct-cell.js.map
