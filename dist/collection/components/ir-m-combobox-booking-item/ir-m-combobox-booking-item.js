import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    render() {
        return (h(Host, { key: 'ff6aa7675aa5777da38bff202bebc07203d21c2f', class: "pe-1" }, h("img", { key: 'a47813d72fe63eb5ec67a04ee94e1dd608951715', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'f3f8ab4e0c2f9a7c7a455ce2822efc9a468cec68' }, h("p", { key: 'f9d9b13080ac2e555f00f45d023fb57aad29b03a', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '2ddb5b31268240547135cf3e61aa28337ea0f4aa', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'b17fdf98aff9be7250183177e0d3d5c0000908df', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
