'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-C54QV4_c.js');
var calendarDates = require('./calendar-dates-BxDGM1ix.js');
require('./locales.store-BMTss6fG.js');
require('./moment-CdViwxPQ.js');

const irBookingNewFormCss = () => `.sc-ir-booking-new-form-h{display:block}`;

const IrBookingNewForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
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
        return (index.h(index.Host, { key: 'fe534ee21b08dce8a881305d197deaa5eae0259e' }, index.h("div", { key: 'a8db92030966abd987b1c3585e1a258443158eda', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'f403ffcceab2de8a44df2a3c2a3b245825d855ec', name: "trigger" }, index.h("ir-custom-button", { key: '4edc5392b7e96b8dbc941235d2337bdacd3db809', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '0dd3c5eadfebc456a051c954703c82b0f8ebd557', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '20b57b036ccf0674f4bffdfa261fe647fe919f03', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
