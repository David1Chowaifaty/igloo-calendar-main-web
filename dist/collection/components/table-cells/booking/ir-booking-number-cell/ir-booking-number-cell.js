import { Host, h } from "@stencil/core";
export class IrBookingNumberCell {
    bookingNumber;
    channelBookingNumber;
    openBookingDetails;
    render() {
        return (h(Host, { key: 'afa3add68bdf0135c37138cf92aa3bdcfb38e016' }, h("slot", { key: '8c99f0b1629c0ddef1cd136901a9f0aa557b7420', name: "start" }), h("div", { key: '5c860f6c3de3c4a06be90379ef15fc75ded551ea', class: "booking-nbr-cell__container" }, h("div", { key: '90505eaf20617d05b933e7e87a0e49683cd09cd4', style: { width: 'fit-content' } }, h("ir-custom-button", { key: '06b2c234e40cdea96fecb8f67f8350513b6bcf1e', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), this.channelBookingNumber && h("p", { key: '7f0fd2f10c040030517d0a820d5c5a0d36c4c340', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber)), h("slot", { key: 'a52d43576e17de4a366f677f00490c6a5ec52219', name: "end" })));
    }
    static get is() { return "ir-booking-number-cell"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-number-cell.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-number-cell.css"]
        };
    }
    static get properties() {
        return {
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Booking['booking_nbr']",
                    "resolved": "string",
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
                "setter": false,
                "attribute": "booking-number",
                "reflect": false
            },
            "channelBookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "Booking['channel_booking_nbr']",
                    "resolved": "string",
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
                "setter": false,
                "attribute": "channel-booking-number",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "openBookingDetails",
                "name": "openBookingDetails",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Booking['booking_nbr']",
                    "resolved": "string",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-booking-number-cell.js.map
