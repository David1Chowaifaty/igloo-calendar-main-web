import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';
import { T as Token } from './Token-030c78a9.js';
import { d as departuresStore } from './departures.store-2082dcf1.js';
import { R as RoomService } from './room.service-cbe9248d.js';
import { B as BookingService } from './booking.service-10f0a1cf.js';
import './axios-aa1335b8.js';
import './index-a124d225.js';
import './_data-08a5cb9d.js';
import './moment-ab846cee.js';
import './calendar-data-8a36a1b2.js';
import './locales.store-f4150353.js';
import './index-6ecc32cd.js';
import './utils-bb2f2deb.js';

const hostCss = ".sc-ir-departures-h{box-sizing:border-box !important}.sc-ir-departures-h *.sc-ir-departures,.sc-ir-departures-h *.sc-ir-departures::before,.sc-ir-departures-h *.sc-ir-departures::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-departures{display:none !important}";
const IrDeparturesStyle0 = hostCss;

const irDeparturesCss = ".sc-ir-departures-h{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);min-height:100vh}.page-title.sc-ir-departures{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}";
const IrDeparturesStyle1 = irDeparturesCss;

const IrDepartures = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    language = 'en';
    p;
    bookingNumber;
    booking;
    paymentEntries;
    isPageLoading;
    payment;
    tokenService = new Token();
    roomService = new RoomService();
    bookingService = new BookingService();
    paymentFolioRef;
    componentWillLoad() {
        if (this.ticket) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue && newValue) {
            this.tokenService.setToken(this.ticket);
            this.init();
        }
    }
    handleOpen(e) {
        this.bookingNumber = e.detail;
    }
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = departuresStore.bookings.find(b => b.booking_nbr === booking_nbr);
        const paymentType = this.paymentEntries.types.find(p => p.CODE_NAME === payment.payment_type.code);
        this.payment = {
            ...payment,
            payment_type: {
                code: paymentType.CODE_NAME,
                description: paymentType.CODE_VALUE_EN,
                operation: paymentType.NOTES,
            },
        };
        this.paymentFolioRef.openFolio();
    }
    async init() {
        try {
            this.isPageLoading = true;
            const [_, __, setupEntries] = await Promise.all([
                this.roomService.getExposedProperty({ id: this.propertyid || 0, language: this.language, aname: this.p }),
                this.roomService.fetchLanguage(this.language),
                this.bookingService.getSetupEntriesByTableNameMulti(['_BED_PREFERENCE_TYPE', '_DEPARTURE_TIME', '_PAY_TYPE', '_PAY_TYPE_GROUP', '_PAY_METHOD']),
            ]);
            const { pay_type, pay_type_group, pay_method } = this.bookingService.groupEntryTablesResult(setupEntries);
            this.paymentEntries = { types: pay_type, groups: pay_type_group, methods: pay_method };
        }
        catch (error) {
        }
        finally {
            this.isPageLoading = false;
        }
    }
    render() {
        if (this.isPageLoading) {
            return h("ir-loading-screen", null);
        }
        return (h(Host, null, h("ir-toast", { style: { display: 'none' } }), h("ir-interceptor", { style: { display: 'none' } }), h("h3", { class: "page-title" }, "Departures"), h("ir-departures-filter", null), h("ir-departures-table", null), h("ir-drawer", { onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingNumber = null;
            }, withoutHeader: true, open: !!this.bookingNumber, style: {
                '--ir-drawer-width': '80rem',
                '--ir-drawer-background-color': '#F2F3F8',
                '--ir-drawer-padding-left': '0',
                '--ir-drawer-padding-right': '0',
                '--ir-drawer-padding-top': '0',
                '--ir-drawer-padding-bottom': '0',
            } }, this.bookingNumber && (h("ir-booking-details", { hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.bookingNumber = null), is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))), h("ir-payment-folio", { style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrDepartures.style = IrDeparturesStyle0 + IrDeparturesStyle1;

export { IrDepartures as ir_departures };

//# sourceMappingURL=ir-departures.entry.js.map