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
        return (index.h(index.Host, { key: '3975272096d951c812172276dc5cea71e3e1718b' }, index.h("div", { key: 'cef7f90c4e81ce0a3c9bc4f2fd0f671602d0fe39', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '3319a603952aed428b65af0536f37f5748bf039f', name: "trigger" }, index.h("ir-custom-button", { key: 'daf19a7801277bcd9e5649502a76ddb69b3fc9f2', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '06c24cc19720dcc6fc2740d690113c977ff0ef1e', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '9a7c7bd50cf107dc286f3d40a7419f67ee35c479', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

exports.ir_booking_new_form = IrBookingNewForm;

//# sourceMappingURL=ir-booking-new-form.cjs.entry.js.map