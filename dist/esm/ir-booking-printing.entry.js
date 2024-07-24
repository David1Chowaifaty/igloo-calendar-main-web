import { r as registerInstance, h, H as Host } from './index-d2ec0a5d.js';
import { B as BookingService } from './booking.service-d8dfc524.js';
import { R as RoomService } from './room.service-e20228c9.js';
import { l as locales } from './locales.store-91c051f0.js';
import './Token-81a651a8.js';
import './moment-ab846cee.js';
import './calendar-data-956fa3f1.js';
import './index-a32c4342.js';
import './calendar-dates.store-26a46226.js';

const irBookingPrintingCss = ":host{display:block}";
const IrBookingPrintingStyle0 = irBookingPrintingCss;

const IrBookingPrinting = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrBookingPrinting.style = IrBookingPrintingStyle0;

export { IrBookingPrinting as ir_booking_printing };

//# sourceMappingURL=ir-booking-printing.entry.js.map