import { Host, h } from "@stencil/core";
import { formatDate } from "../../../../utils/date/index";
export class IrClInvoiceDateCell {
    date;
    render() {
        return h(Host, { key: 'be2bb956d8e2a0aaf1d0022dbe6cc6da31a38078' }, formatDate(this.date, { style: 'medium' }));
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
