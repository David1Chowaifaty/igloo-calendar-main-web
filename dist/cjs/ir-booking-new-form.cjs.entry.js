'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
var calendarDates = require('./calendar-dates-BxDGM1ix.js');
require('./locale-scope-Cch-vf1R.js');
require('./moment-CdViwxPQ.js');

const irBookingNewFormCss = () => `.sc-ir-booking-new-form-h{display:block}`;

const IrBookingNewForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    /**
     * Language for the form and the editor it opens, independent of the page's. Reflected as `lang`
     * on the host, which makes this subtree its own locale scope (see `locale-scope.ts`).
     */
    language;
    bookingItem = null;
    handleTriggerClicked() {
        const today = calendarDates.todayISO();
        this.bookingItem = {
            FROM_DATE: undefined,
            defaultDateRange: {
                fromDate: today,
                toDate: calendarDates.addDaysISO(today, 1),
                dateDifference: 0,
                message: '',
            },
            TO_DATE: undefined,
            EMAIL: '',
            event_type: 'PLUS_BOOKING',
            ID: '',
            NAME: '',
            PHONE: '',
            REFERENCE_TYPE: '',
            TITLE: t.t('Lcz_NewBooking', { fallback: 'New Booking' }),
        };
    }
    render() {
        return (index.h(index.Host, { key: '161db24913f57cafe250c57998b8badf7da8886a', lang: this.language || undefined }, index.h("div", { key: '7daac618105c459ed691dbeda4de5f819775102f', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'e854bbffc7d1f1746f48e0888fc6387fa9f89287', name: "trigger" }, index.h("ir-custom-button", { key: '43ccf313ecad251f734572229056e0e490863d7d', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'f18921ffc5389751ed5472e2db02c6794b035415', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '057674116881069c0a4ebfccc598496a14638b51', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
