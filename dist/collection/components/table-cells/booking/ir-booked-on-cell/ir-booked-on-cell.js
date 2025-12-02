import { _formatTime } from "../../../ir-booking-details/functions";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrBookedOnCell {
    bookedOn;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: '8b67fc67627ee46df9354b67519f1b110430d3ee' }, h("p", { key: 'fb098e284df2ee75e7f0d5109d57aba548869628', class: "booked-on-cell__date" }, moment(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '0c397b4d6a2797b141848c84227a290d1ba3341e', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
            }
        };
    }
}
//# sourceMappingURL=ir-booked-on-cell.js.map
