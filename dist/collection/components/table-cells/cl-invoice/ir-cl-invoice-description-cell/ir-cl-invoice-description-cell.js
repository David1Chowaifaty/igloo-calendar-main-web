import { Host, h } from "@stencil/core";
export class IrClInvoiceDescriptionCell {
    description;
    render() {
        return (h(Host, { key: 'f7dcfedf0c9f9d6f7473c66bb11d16c145a92c1b' }, h("span", { key: 'e11d52a1810d61735babb0617f35e6fd6762f442', class: "desc" }, this.description)));
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
