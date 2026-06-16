import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: '0b26a344e6429b4980cbe14c098b51e2564597b1', class: "pe-1" }, h("img", { key: 'bb6c1b3d653a7b0eedb5154dce4074130162ac20', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'f5fc7b6f07522d6f2a5b98bc2718cdbc1962d56f' }, h("p", { key: '6ef06117c78116204df5406da8fdab07e6862451', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '10ca01979a7be9362242d0bf0373bc3d50e4d991', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '5231c6afdf939af79d91e4727fdd8e45cec2aae8', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
