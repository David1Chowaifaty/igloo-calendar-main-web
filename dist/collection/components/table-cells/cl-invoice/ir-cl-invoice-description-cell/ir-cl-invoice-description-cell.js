import { Host, h } from "@stencil/core";
export class IrClInvoiceDescriptionCell {
    description;
    render() {
        return (h(Host, { key: '86ca14fcc26dafd9a0e3abfdf72a9eb83bb3f6a7' }, h("span", { key: 'de3c0bdbfa0c01e735c8b5093e9c8a1898693d53', class: "desc" }, this.description)));
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
                "attribute": "description",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-cl-invoice-description-cell.js.map
