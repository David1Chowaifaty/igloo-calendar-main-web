'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-wyGILxEL.js');
var calendarDates = require('./calendar-dates-BxDGM1ix.js');
require('./locale-scope-C7rmpwuA.js');
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
        return (index.h(index.Host, { key: 'd648758960e7f06a671376c0ebd5524d3283d7ae', lang: this.language || undefined }, index.h("div", { key: 'e6cea2aed5ea32aee4f4af25ce2abbb572ca6b6f', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '78b692cfab0797590d79718415747b25576a08f7', name: "trigger" }, index.h("ir-custom-button", { key: '1e92ad102b8a996406ddff1c46bb317f53933490', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'ebb0b0872d5064059108013d2113a4b608b8d104', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: 'e999ba868fa3b475ba37571b5fa19d2efe170851', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
