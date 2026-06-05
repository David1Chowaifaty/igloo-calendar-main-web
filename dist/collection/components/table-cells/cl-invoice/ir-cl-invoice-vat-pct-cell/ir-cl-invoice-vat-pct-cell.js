import { Host, h } from "@stencil/core";
export class IrClInvoiceVatPctCell {
    vatPercent;
    render() {
        return h(Host, { key: 'c1416375487d4103ff5bb5d8f1580cc9a0923114' }, this.vatPercent, "%");
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
