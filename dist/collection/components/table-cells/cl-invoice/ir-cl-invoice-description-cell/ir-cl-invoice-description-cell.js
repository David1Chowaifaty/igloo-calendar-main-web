import { Host, h } from "@stencil/core";
export class IrClInvoiceDescriptionCell {
    description;
    render() {
        return (h(Host, { key: 'd02f792db8086033ee706a00d2eae3a6271528e2' }, h("span", { key: '4d6e1a2aa266458aa8ad0f84a4773c73c209bbc9', class: "desc" }, this.description)));
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
