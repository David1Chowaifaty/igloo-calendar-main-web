import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: 'e4f9fb3255ccc09f035532fd19be794e309567ed', class: "pe-1" }, h("img", { key: 'a91197076ea864cb938d03bc467dd04f8447903e', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '6279499a15c52e45c36c05a26fdd6889abb30914' }, h("p", { key: '680b515b838f0ab7d190f30ee03ac89e5de46f9c', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'd5c68b21850263aa6b355b7dd07119f5a6ad0acc', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'f01c95972adf135851e834d587f514b99e688ca7', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
