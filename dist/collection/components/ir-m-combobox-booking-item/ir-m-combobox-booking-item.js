import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: '5d93710b5c71f624984b480bb8b09bdd6afa8dd1', class: "pe-1" }, h("img", { key: '8641e1b1805405ea5d9e1d22b6cbed471cffdefb', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'fa98009a69d9ae8fd193fbc48663392704a5e5db' }, h("p", { key: '5e41dd4901e4e832419f6b5f40f9815fd64746b5', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '07839f046fa4ef872286d3d1c86c774920c81f12', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'effa63e7a715b674e3b8975d9489a389de33e5d1', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
//# sourceMappingURL=ir-m-combobox-booking-item.js.map
