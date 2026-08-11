import { Host, h } from "@stencil/core";
export class IrClInvoiceDescriptionCell {
    description;
    render() {
        return (h(Host, { key: '5f25040631b6902a7bcbb3e1ae942823d378627b' }, h("span", { key: 'a6a8a1cfa15b8a82ea740f28358fbc36d24aacd9', class: "desc" }, this.description)));
    }
    static get is() { return "ir-cl-invoice-description-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-description-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-description-cell.css"]
        };
    }
    static get properties() {
        return {
            "description": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "description"
            }
        };
    }
}
