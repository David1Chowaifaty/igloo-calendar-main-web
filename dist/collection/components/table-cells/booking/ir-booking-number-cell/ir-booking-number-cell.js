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
        return (h(Host, { key: 'f5b0bf6066fd062a8100c643291d6aba840233f9' }, this.channelBookingNumber && h("wa-tooltip", { key: 'eaceb67c0f452b77d03ec655c6bf0e3177c7ab95', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '8eed352fa13976f1e0d09021eac29c659080af37', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: '32c4b7809d67e948b09b0be4fcdc02e472984d80', part: "container", class: "booking-nbr-cell__container" }, h("div", { key: '22e13ca797ae33b5170ade2854a70cb18e8e687a', style: { width: 'fit-content' } }, h("button", { key: '3b2efce3f1f418e17d5f411d6d0bbf7d7859f2e8', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: 'de7ea5735f41c8e5babe0f2979c59348846fbf81', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
    }
    static get is() { return "ir-booking-number-cell"; }
    static get encapsulation() { return "shadow"; }
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
                "setter": false,
                "reflect": false,
                "attribute": "booking-number"
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
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
                "setter": false,
                "reflect": false,
                "attribute": "channel-booking-number"
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
                            "id": "src/models/booking.dto.ts::Booking",
                            "referenceLocation": "Booking"
                        }
                    }
                }
            }];
    }
}
