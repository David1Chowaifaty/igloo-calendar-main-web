import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: 'b429ff994c919dd7971fc4b2ccc1c8e2e212af06', class: "pe-1" }, h("img", { key: 'c6ccc9fe931c957c8cfe3e88475c6cd1838a61ab', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '7f40a50d7a14f4a33cd5c397407ffffc86b154e8' }, h("p", { key: 'ce6b3cc29c9bb66b2cd72d76d20f72d61dec1c7b', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '57110995a90a7d91630f5b1982433639ebbfdb89', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'b00e6599fbf95b90bfb685f92453b256a98a10c0', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
