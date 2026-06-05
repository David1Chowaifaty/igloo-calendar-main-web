import { _formatTime } from "../../../ir-booking-details/functions";
import { Host, h } from "@stencil/core";
import moment from "moment";
export class IrBookedOnCell {
    display = 'block';
    bookedOn;
    label;
    render() {
        const { date, hour, minute } = this.bookedOn;
        return (h(Host, { key: '439ce77f7b709adfb2fb812dbf4e4fd963c37046' }, this.label && h("p", { key: '1fc0a977af290ed472935efd79e1d588ca759e2e', class: "cell-label" }, this.label, ":"), h("p", { key: 'd7836f9ca924ab62328746e08ab4b7d2128803bf', class: "booked-on-cell__date" }, moment(date, 'YYYY-MM-DD').format('DD MMM YYYY')), h("p", { key: '00a22755bca9d1dd0f1c6856097edb1a7a20c290', class: "booked-on-cell__time" }, _formatTime(hour.toString(), minute.toString()))));
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
