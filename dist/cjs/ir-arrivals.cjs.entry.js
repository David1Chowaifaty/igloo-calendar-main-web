'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const Token = require('./Token-8fd11984.js');
const booking_service = require('./booking.service-b4c18626.js');
const room_service = require('./room.service-edd3d27c.js');
const arrivals_store = require('./arrivals.store-3bbc5bbf.js');
require('./axios-6e678d52.js');
require('./index-ffd50e35.js');
require('./utils-bca29761.js');
require('./moment-1780b03a.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./locales.store-4eb57996.js');
require('./_data-c8673ac9.js');

const hostCss = ".sc-ir-arrivals-h{box-sizing:border-box !important}.sc-ir-arrivals-h *.sc-ir-arrivals,.sc-ir-arrivals-h *.sc-ir-arrivals::before,.sc-ir-arrivals-h *.sc-ir-arrivals::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-arrivals{display:none !important}";
const IrArrivalsStyle0 = hostCss;

const irArrivalsCss = ".sc-ir-arrivals-h{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);min-height:100vh}.page-title.sc-ir-arrivals{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}";
const IrArrivalsStyle1 = irArrivalsCss;

const IrArrivals = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    tokenService = new Token.Token();
    roomService = new room_service.RoomService();
    bookingService = new booking_service.BookingService();
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
    handleBookingPayment(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { booking_nbr, payment } = e.detail;
        this.booking = arrivals_store.arrivalsStore.bookings.find(b => b.booking_nbr === booking_nbr);
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
    handleOpen(e) {
        this.bookingNumber = e.detail;
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
            return index.h("ir-loading-screen", null);
        }
        return (index.h(index.Host, null, index.h("ir-toast", { style: { display: 'none' } }), index.h("ir-interceptor", { style: { display: 'none' } }), index.h("h3", { class: "page-title" }, "Arrivals"), index.h("ir-arrivals-filters", null), index.h("ir-arrivals-table", null), index.h("ir-drawer", { onDrawerHide: e => {
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
            } }, this.bookingNumber && (index.h("ir-booking-details", { hasPrint: true, hasReceipt: true, hasCloseButton: true, onCloseSidebar: () => (this.bookingNumber = null), is_from_front_desk: true, propertyid: this.propertyid, hasRoomEdit: true, hasRoomDelete: true, bookingNumber: this.bookingNumber.toString(), ticket: this.ticket, language: this.language, hasRoomAdd: true }))), index.h("ir-payment-folio", { style: { height: 'auto' }, bookingNumber: this.booking?.booking_nbr, paymentEntries: this.paymentEntries, payment: this.payment, mode: 'payment-action', ref: el => (this.paymentFolioRef = el), onCloseModal: () => {
                this.booking = null;
                this.payment = null;
            } })));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrArrivals.style = IrArrivalsStyle0 + IrArrivalsStyle1;

exports.ir_arrivals = IrArrivals;

//# sourceMappingURL=ir-arrivals.cjs.entry.js.map