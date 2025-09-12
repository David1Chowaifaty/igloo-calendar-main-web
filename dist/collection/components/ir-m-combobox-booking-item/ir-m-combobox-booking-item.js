import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    render() {
        return (h(Host, { key: '2139bb24bbf0aa6dacf739429a04ee93184746d9', class: "pe-1" }, h("img", { key: 'e94f9e5dadbe05d59e020fcd5c7ccfa3905eb440', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '23a07db2c2dc559499385e499bab1b2e1fab4c06' }, h("p", { key: '2e220f4a30b3e66355b4656da6681a71b464f14c', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'cba1509ed0eb987346995991aded33b12c5d39b9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '53ad151c6cffd424432848b146b75ae287b198ab', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
