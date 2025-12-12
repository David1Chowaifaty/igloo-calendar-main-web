import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: '46e053baccd6d6241c5c07e4ffb7e59de3427fa2', class: "pe-1" }, h("img", { key: 'd83bd03b8a83b2a11a84548d4e70b6f36aaec215', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '61b5db1c9334351faf7f66e2aa3ef2aa7534c86b' }, h("p", { key: '4d1c94653618d90ed77bb77e64acb03a67efc314', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: 'ecb96df093105b2d756a1a9d5db3554d45f5daf9', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: '333d97c5993fbe4b48b5d0676389687c92dfc4f9', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
