import { Host, h } from "@stencil/core";
import { formatBookingNumber } from "../../utils/number";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: '52254654e9febf17cfe7db032315a511939ba48a', class: "pe-1" }, h("img", { key: 'fbb71dabc4b04904d3a991ef567a936d238c719d', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e3980383e5497f71365c7b3b418867bc87eff9db' }, h("p", { key: 'd5365ef9e74d543f61406303a61a75168ec55367', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'c9d33709a523649e139934fcb4f145cd531c7a25', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '63708296cb048eaebdf5a383391fcddf63dd4c05', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
