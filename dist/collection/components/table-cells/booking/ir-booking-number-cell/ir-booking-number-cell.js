import { Host, h } from "@stencil/core";
export class IrBookingNumberCell {
    bookingNumber;
    channelBookingNumber;
    openBookingDetails;
    render() {
        return (h(Host, { key: '975f4dc6581b1f28f00e494bc0824936570ccd76' }, h("slot", { key: '30c4fac59069a7c5cf67605a86856dc060129db5', name: "start" }), h("div", { key: '73f1a6bd7f8aeab8baef3c3f1e56642e6328f861', class: "booking-nbr-cell__container" }, h("div", { key: 'a2ed1d2b5542740eeee0fc7f1bbffa8fd63c4906', style: { width: 'fit-content' } }, h("ir-custom-button", { key: '173c9892122b370caf3f324308b26f9d13756da7', size: "medium", onClickHandler: () => this.openBookingDetails.emit(this.bookingNumber), link: true, variant: "brand", appearance: "plain" }, this.bookingNumber)), this.channelBookingNumber && h("p", { key: '34d8dcd2ceeee748551f57f8e2a97d9de25e3c26', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber)), h("slot", { key: '40024aa7895b739d7391529c847bd6c93b027643', name: "end" })));
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
