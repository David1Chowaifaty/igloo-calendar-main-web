import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    render() {
        return (h(Host, { key: '0b0eeaff56e509fc8f3a6cdcf7711cff552d7256', class: "pe-1" }, h("img", { key: '2992243fc097fb8a8391aa2be36631814a362341', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'e0f521245b6a908734df67831a4d26fbc65cbc4c' }, h("p", { key: '1abad0dbca3faa53861d0e0715cdb33d339194ed', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'a61c463217ae8852f76ea0fdd186ecc112796c57', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '8c43b849c4127605c90b0e7110fb2de970b5fb52', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
