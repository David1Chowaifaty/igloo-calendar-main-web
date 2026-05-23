import { Host, h } from "@stencil/core";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: 'e05a558b63f1095c196a06ec7d60c80c5f59c77d', class: "pe-1" }, h("img", { key: '10f1973a2493d0dc9488c727d4cf136471f371a4', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: '64482fa42987e51ba6109774a0c305cada6413d3' }, h("p", { key: 'f402c8c5a01ee396b157b742692dab9f8c2681b3', class: "p-0 m-0" }, this.booking.booking_nbr), !this.booking.is_direct && h("p", { key: '618b0cd9f4566bcc260af99968d3fa17c6287c11', class: "small p-0 m-0" }, this.booking.channel_booking_nbr)), h("p", { key: 'd0277626f3ab61cb568fceb60f252188a431a460', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
