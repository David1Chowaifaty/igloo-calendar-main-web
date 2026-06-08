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
        return (index.h(index.Host, { key: 'e8dfa05731d15f6c42b7b9e6d3e7a5915d5bd21c' }, index.h("div", { key: '3cbbcd6d9d298db3b8da54ecc258501a5af42332', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '42f7194d896b309a5bf22701360c7fccbb1bee97', name: "trigger" }, index.h("ir-custom-button", { key: 'ffbc9029d31eabe618bb5234df6087925027b347', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'b6b47973e52a78a9f386656e1a9b5c820c02a14e', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '60174610941798306ff36f26d33a6900331091b7', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

exports.ir_booking_new_form = IrBookingNewForm;

//# sourceMappingURL=ir-booking-new-form.cjs.entry.js.map