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
        return (index.h(index.Host, { key: 'c237e6d1ed704e57c7cf80c2f4963efd25de95c3', lang: this.language || undefined }, index.h("div", { key: 'ef4bce028f0e743c5fa1a6dedb841c2fc830a7e2', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'f8f3e290258473fa6837b2708da0bd4d2518073d', name: "trigger" }, index.h("ir-custom-button", { key: '741a3d014a793e3cc641b0f184d8754bec772e62', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'a88f413c277d04ff4d081c521297ef16620c2fff', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '8511658a33b8aeb67d99a7506fa5010577dd5b48', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
