import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.service2.js';
import { R as RoomService } from './room.service.js';
import { l as locales } from './locales.store.js';

const irBookingPrintingCss = ":host{display:block}";
const IrBookingPrintingStyle0 = irBookingPrintingCss;

const IrBookingPrinting$1 = /*@__PURE__*/ proxyCustomElement(class IrBookingPrinting extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
    static get style() { return IrBookingPrintingStyle0; }
}, [1, "ir-booking-printing", {
        "language": [1],
        "ticket": [1],
        "bookingNumber": [1, "booking-number"],
        "baseurl": [1],
        "propertyid": [2],
        "mode": [1],
        "booking": [32]
    }, undefined, {
        "ticket": ["ticketChanged"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-booking-printing"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-booking-printing":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrBookingPrinting$1);
            }
            break;
    } });
}

const IrBookingPrinting = IrBookingPrinting$1;
const defineCustomElement = defineCustomElement$1;

export { IrBookingPrinting, defineCustomElement };

//# sourceMappingURL=ir-booking-printing.js.map