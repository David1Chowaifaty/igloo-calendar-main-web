import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrClInvoiceDateCell {
    date;
    render() {
        return h(Host, { key: '10b86734f9670f66004399c79be3086adc2423a1' }, moment(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
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
                "attribute": "date",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-cl-invoice-date-cell.js.map
