import { Host, h } from "@stencil/core";
export class IrClInvoiceDescriptionCell {
    description;
    render() {
        return (h(Host, { key: 'a42dd13c6a64019743367e621aaabc3f8fd3aef2' }, h("span", { key: '6c0aba90153e6fac34ea4572304713205a3ee236', class: "desc" }, this.description)));
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
