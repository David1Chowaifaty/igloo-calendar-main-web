import { Host, h } from "@stencil/core";
import { formatBookingNumber } from "../../utils/number";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: '6c1732f14e6d0a5836fdbc4b38bc471e0f436ffa', class: "pe-1" }, h("img", { key: 'bc02b6d8d1729f7f347f82a501db245e33c83275', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'aee19e93f9cfb7f1f360e6d41e5e96a5cac9e15d' }, h("p", { key: '78e93877a107e211460b72df893293f0914ba8d3', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: '447d412d3aba39f3cfe4b6d7a7d55fcd8539688a', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '08555349fb383470c7d0339b456a348dae81f349', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
