import { BookingService } from "../../services/booking.service";
import { RoomService } from "../../services/room.service";
import locales from "../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrBookingPrinting {
    constructor() {
        this.bookingService = new BookingService();
        this.roomService = new RoomService();
        this.language = '';
        this.ticket = '';
        this.bookingNumber = '';
        this.baseurl = '';
        this.propertyid = undefined;
        this.mode = 'default';
        this.booking = undefined;
    }
    async ticketChanged() {
        this.bookingService.setToken(this.ticket);
        this.roomService.setToken(this.ticket);
        this.initializeApp();
    }
    async initializeApp() {
        try {
            const [languageTexts, booking] = await Promise.all([this.roomService.fetchLanguage(this.language), this.bookingService.getExposedBooking(this.bookingNumber, this.language)]);
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
            this.booking = booking;
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h(Host, { key: '925533f9eefc38779831717476df8f4f33757c9e' }, h("slot", { key: 'd736cd7e0d6fea75ba302b0af280da1b2af33442' })));
    }
    static get is() { return "ir-booking-printing"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-booking-printing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-booking-printing.css"]
        };
    }
    static get properties() {
        return {
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "language",
                "reflect": false,
                "defaultValue": "''"
            },
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "ticket",
                "reflect": false,
                "defaultValue": "''"
            },
            "bookingNumber": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "booking-number",
                "reflect": false,
                "defaultValue": "''"
            },
            "baseurl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "baseurl",
                "reflect": false,
                "defaultValue": "''"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "propertyid",
                "reflect": false
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'invoice' | 'default'",
                    "resolved": "\"default\" | \"invoice\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'default'"
            }
        };
    }
    static get states() {
        return {
            "booking": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
}
//# sourceMappingURL=ir-booking-printing.js.map
