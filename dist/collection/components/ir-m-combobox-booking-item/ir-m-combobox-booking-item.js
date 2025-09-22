import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    render() {
        return (h(Host, { key: '0fcd6a6d7aa2c62d648a03902fc95ea186d07372', class: "pe-1" }, h("img", { key: 'f7dbe87c0d6c6502d1da3f75982e15db028b72ab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '9f6d64f13d7189c696ab6cdd0e8716455a225d38' }, h("p", { key: '8655e7c794750a60319fff4129aa3a0829de1df2', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'feadb3c815483b1a8b3bbbfe596dc07b4ddd0890', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '71f175c40aadc2dcfc0f27ead616854c54e3a6ad', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
