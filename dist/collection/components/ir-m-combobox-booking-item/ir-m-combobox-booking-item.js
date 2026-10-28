import { Host, h } from "@stencil/core";
import { formatBookingNumber } from "../../utils/number";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: 'e02b5817b35098467c03368c93d825400cae2634', class: "pe-1" }, h("img", { key: '878aca49dda5357a811c891e089f9f5092c519d1', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e2c5a300e987b14b8496a3627798b8dc0b0f8eb7' }, h("p", { key: 'fe18c529cf6df940e198dded02caa33b2ebb704b', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'f4a7700578354d8e0ba9bd490c6e2188f385195d', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '7f6f80c4f2c5a8cc74b9dcd4eb10c8fa2d9a4fd5', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
    }
    static get is() { return "ir-m-combobox-booking-item"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-m-combobox-booking-item.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-m-combobox-booking-item.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
