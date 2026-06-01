'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irBookingNewFormCss = ".sc-ir-booking-new-form-h{display:block}";
const IrBookingNewFormStyle0 = irBookingNewFormCss;

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
            TITLE: 'New Booking',
        };
    }
    render() {
        return (index.h(index.Host, { key: '77facb94bf6c44cc57ccfde6215901f48c19a2c9' }, index.h("div", { key: '6c45262742de45324ac0a419343dc964189fa52c', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '0537096019255429d5e54d7c24ccd372b69f93db', name: "trigger" }, index.h("ir-custom-button", { key: '558d5c8da58d3c0f39f884226766b205b3b00980', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '360bf9713b7809ecb0e41cffb07fc75511f1d8de', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: 'e01e415a0d074485c1555b5aaa616957f780208b', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

exports.ir_booking_new_form = IrBookingNewForm;

//# sourceMappingURL=ir-booking-new-form.cjs.entry.js.map