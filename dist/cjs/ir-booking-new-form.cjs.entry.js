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
        return (index.h(index.Host, { key: '0b160a2f36e6661645a83b5a1b293ecc2d00f6e3' }, index.h("div", { key: 'b7bdf99a7bc9bd7bebdaa445c4688d0b003cec50', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '19c5b9788c7343e1f4648322e4e39229684bc5b2', name: "trigger" }, index.h("ir-custom-button", { key: '833f6c293c7d1fdafa3d322ea808804bea9b155b', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '2d4496eb5a8cc510d327dda6d55fb4bb7d549b86', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '21873a62ae7f831668322c8409e7c72e61093e3d', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

exports.ir_booking_new_form = IrBookingNewForm;

//# sourceMappingURL=ir-booking-new-form.cjs.entry.js.map