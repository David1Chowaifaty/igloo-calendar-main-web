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
        return (h(Host, { key: '4b2cdf2f57dfcdf2001928eaca410f0f57dc2911' }, this.channelBookingNumber && h("wa-tooltip", { key: 'b9a9a37eec7f3491225678bc0a56193165aa6d28', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: 'b2044acdf4a4ea69fe78346c0d679542287a1209', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'c825218dfa9de147c70f5ce03cd5514a7ff11c80', class: "booking-nbr-cell__container" }, h("div", { key: 'fba8f5207a954c1fdffa0e0f051a50168f7a9228', style: { width: 'fit-content' } }, h("button", { key: 'c8e178b2f7cbf4864380ca3083be7864e5c145e6', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, this.bookingNumber)), h("p", { key: '4530f4e75c5bc2b972f94baec8dc4d144dcff46b', class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? this.channelBookingNumber : this.origin.Label))));
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
