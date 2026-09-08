import { Host, h } from "@stencil/core";
import { formatBookingNumber } from "../../../../utils/number";
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
        return (h(Host, { key: '33f0c0b1f47a13adac344ae61bdd3a832c125c77' }, this.channelBookingNumber && h("wa-tooltip", { key: 'a180370155ae0b29480e321a19dbd9c021dfaa94', for: `source-logo__${this.bookingNumber}` }, this.origin.Label), h("img", { key: '05513b4c99fe9e489fb428a808e0145f6772222a', class: "booked-by-source__logo", id: `source-logo__${this.bookingNumber}`, src: this.origin.Icon, alt: this.origin.Label }), h("div", { key: 'd1b901b06d007caac7f5bb3132c6d6f25de5c757', part: "container", class: "booking-nbr-cell__container" }, h("div", { key: '8f18daed45d95355e6ec4a6ea33341991e348947', style: { width: 'fit-content' } }, h("button", { key: 'a9319270f3f516e511900bc213917a470505930f', class: "booking-nbr-cell__button", onClick: () => this.openBookingDetails.emit(this.bookingNumber) }, formatBookingNumber(this.bookingNumber))), h("p", { key: '7a7050180b951ba56039cca0484eec53ac7700ef', part: "booking-reference", class: "booking-nbr-cell__channel_nbr" }, this.channelBookingNumber ? formatBookingNumber(this.channelBookingNumber) : this.origin.Label))));
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
