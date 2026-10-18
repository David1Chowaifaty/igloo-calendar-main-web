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
        return (index.h(index.Host, { key: 'b18619c200a613ba14ccca571b2731db019968cd', lang: this.language || undefined }, index.h("div", { key: 'd72eb08ccd28476617a88fd291325fd5002479af', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '354c47dbbf4143ce65afad274390d37c8336f19b', name: "trigger" }, index.h("ir-custom-button", { key: 'dae6ac26576435af7b953dbe52ed22089dab012f', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '612fd1b5777cb566e4f2cbb5c481f788490a9043', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '2e5e526058454aef2a72b8970bd9384402d53a5f', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
