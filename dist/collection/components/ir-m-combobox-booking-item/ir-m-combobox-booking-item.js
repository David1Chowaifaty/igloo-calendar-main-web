import { Host, h } from "@stencil/core";
import { formatBookingNumber } from "../../utils/number";
export class IrMComboboxBookingItem {
    booking;
    render() {
        return (h(Host, { key: 'edc8d64dc728aa27a4b266ab4f534b83d7d26696', class: "pe-1" }, h("img", { key: 'e694814d9f213ef9eace6cd889440dc7a5c490a3', src: this.booking.origin.Icon, alt: this.booking.origin.Label, class: "origin-icon" }), h("div", { key: 'cd2d9e659c185b5687fafb53b18d613db5f78272' }, h("p", { key: '196e994e8f8b7df8eb678b6d2bcab7f7edea15fe', class: "p-0 m-0" }, formatBookingNumber(this.booking.booking_nbr)), !this.booking.is_direct && h("p", { key: 'f42edc96c62fa2bc7bf6c293110e6526c59e9b9c', class: "small p-0 m-0" }, formatBookingNumber(this.booking.channel_booking_nbr))), h("p", { key: '160e4f7de224282ee3e8e58cb059ef5aa61fdecf', class: "p-0 m-0" }, this.booking.guest.first_name, " ", this.booking.guest.last_name)));
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
