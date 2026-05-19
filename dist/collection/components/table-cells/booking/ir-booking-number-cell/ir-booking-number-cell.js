import { Host, h } from "@stencil/core";
export class IrBookingNumberCell {
    bookingNumber;
    /**
     * Source of the booking (e.g. website, channel).
     */
    source;
    /**
     * Origin metadata containing label + icon used as logo.
     */
    origin;
    channelBookingNumber;
    openBookingDetails;
    render() {
        return (h(Host, { key: 'f537fada2f4107cb2e612758591df33e9918126f' }, this.channelBookingNumber && h("wa-tooltip", { key: '2b6ae2de23a16bc0243c72f4c99a429ca276d4d4', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '8a6ed0f9e666efd6fe0ffa01df979c022a809c98', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'bdc73834ac2c3811e0114b64c81eabd367653b16', class: "booking-nbr-cell__container" }, h("div", { key: '7667d9c0dbf811189a69c49b660b7dcf3dc82cbb', style: { width: 'fit-content' } }, h("button", { key: 'b76c2e88c99a79195bd7d84c6323e3cb76e617be', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: 'd88efe132d9750132f7c7af71230e443364c3d2e', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
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
            "source": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['source']",
                    "resolved": "Source",
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
                    "text": "Source of the booking (e.g. website, channel)."
                },
                "getter": false,
                "setter": false
            },
            "origin": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking['origin']",
                    "resolved": "Origin",
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
                    "text": "Origin metadata containing label + icon used as logo."
                },
                "getter": false,
                "setter": false
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
