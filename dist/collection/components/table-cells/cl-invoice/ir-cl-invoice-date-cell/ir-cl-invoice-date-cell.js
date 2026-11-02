import { Host, h } from "@stencil/core";
import { formatDate } from "../../../../utils/date/index";
export class IrClInvoiceDateCell {
    date;
    render() {
        return h(Host, { key: 'dd7940f904ba9cb1de2992d413b4980a6331931f' }, formatDate(this.date, { style: 'medium' }));
    }
    static get is() { return "ir-cl-invoice-date-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-date-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-date-cell.css"]
        };
    }
    static get properties() {
        return {
            "date": {
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
                "attribute": "date"
            }
        };
    }
}
