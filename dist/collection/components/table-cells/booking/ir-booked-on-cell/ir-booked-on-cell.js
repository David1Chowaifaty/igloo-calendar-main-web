import { _formatTime } from "../../../ir-booking-details/functions";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrBookedOnCell {
    display = 'block';
    bookedOn;
    label;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: '6e963561eac87fcda3138113f4d2d202a1e57209' }, this.label && h("p", { key: 'c8c7f8f099da14c30b8d62928c65e0b17c77e31d', class: "cell-label" }, this.label, ":"), h("p", { key: 'c12449e49b8265e68c8c1dd6c7b5acc6888c175e', class: "booked-on-cell__date" }, moment(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '00edf9c7d81c9cdd311f2f25271fae5347a21ceb', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
