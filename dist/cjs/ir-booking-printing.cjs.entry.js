'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-caa79d4b.js');
const booking_service = require('./booking.service-2f743b7a.js');
const room_service = require('./room.service-cab6996c.js');
const locales_store = require('./locales.store-ec208203.js');
require('./Token-fac1282b.js');
require('./moment-1780b03a.js');
require('./calendar-data-3ed3cfd1.js');
require('./index-104877f7.js');
require('./calendar-dates.store-55347731.js');

const irBookingPrintingCss = ":host{display:block}";
const IrBookingPrintingStyle0 = irBookingPrintingCss;

const IrBookingPrinting = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.bookingService = new booking_service.BookingService();
        this.roomService = new room_service.RoomService();
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
            if (!locales_store.locales.entries) {
                locales_store.locales.entries = languageTexts.entries;
                locales_store.locales.direction = languageTexts.direction;
            }
            this.booking = booking;
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: '925533f9eefc38779831717476df8f4f33757c9e' }, index.h("slot", { key: 'd736cd7e0d6fea75ba302b0af280da1b2af33442' })));
    }
    static get watchers() { return {
        "ticket": ["ticketChanged"]
    }; }
};
IrBookingPrinting.style = IrBookingPrintingStyle0;

exports.ir_booking_printing = IrBookingPrinting;

//# sourceMappingURL=ir-booking-printing.cjs.entry.js.map