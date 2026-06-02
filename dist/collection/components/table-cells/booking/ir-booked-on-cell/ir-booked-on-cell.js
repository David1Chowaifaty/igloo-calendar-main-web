import { _formatTime } from "../../../ir-booking-details/functions";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrBookedOnCell {
    display = 'block';
    bookedOn;
    label;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: '05f56a9f4987073081eb627ce3429f072bee6d31' }, this.label && h("p", { key: '62b0496147184f2ffe1a013bf8d999830a44e7b5', class: "cell-label" }, this.label, ":"), h("p", { key: '4e5c3fa1b6cd698d15bc4a672330bc462107c6ca', class: "booked-on-cell__date" }, moment(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '69359c7158647f941cec78905d1a8a3dbf783853', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
    }
    static get is() { return "ir-booked-on-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booked-on-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booked-on-cell.css"]
        };
    }
    static get properties() {
        return {
            "display": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'inline' | 'block'",
                    "resolved": "\"block\" | \"inline\"",
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
                "attribute": "display",
                "reflect": true,
                "defaultValue": "'block'"
            },
            "bookedOn": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['booked_on']",
                    "resolved": "DateTime",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "label": {
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
                "attribute": "label",
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=ir-booked-on-cell.js.map
