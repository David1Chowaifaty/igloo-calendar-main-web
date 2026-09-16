'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-CyRK1btk.js');
require('./locales.store-BMTss6fG.js');

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
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        this.bookingItem = {
            FROM_DATE: undefined,
            defaultDateRange: {
                fromDate: new Date(),
                fromDateStr: '',
                toDate: tomorrow,
                toDateStr: '',
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
        return (index.h(index.Host, { key: '3b6dc81186fa7217416d2171edf4825eae281ebb' }, index.h("div", { key: 'ffaa0d26f9320441b96408fb8623af072f3e7f27', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '7781e468aece48e55893b8f92c047efe132f35e8', name: "trigger" }, index.h("ir-custom-button", { key: 'b1136811e692f2075f2b35ba28325797179e129a', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '0e1da5b6886307fae661d253bd380eb9766cf48a', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '9fa38268bf73dc4b5545966e6f9a7ce65459ae09', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
