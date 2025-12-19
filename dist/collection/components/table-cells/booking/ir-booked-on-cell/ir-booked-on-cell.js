import { _formatTime } from "../../../ir-booking-details/functions";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrBookedOnCell {
    display = 'block';
    bookedOn;
    label;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: 'bf900a724538e0ccd3faa06b5fcaf6763413eee2' }, this.label && h("p", { key: 'f394b2a32a02ec60e50a915c85b4ca44566a70f1', class: "cell-label" }, this.label, ":"), h("p", { key: 'de145055b7bbdadd8cc4649ea9ffda401cc2c7bf', class: "booked-on-cell__date" }, moment(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '8e5b0e00c8c123dbbe580b91b9b7d5be61177e84', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
