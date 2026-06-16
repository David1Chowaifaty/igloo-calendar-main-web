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
        return (index.h(index.Host, { key: '7bdd1083a4d37058bb92b557fba3b278e32b7403' }, index.h("div", { key: '4a61b71029fe8042e7671a99f0e81dfd82ca51b4', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '2179c271e7af5b74963fcd42fe15c49ccf8624bb', name: "trigger" }, index.h("ir-custom-button", { key: 'b902ecf048accabdf8bd834c56e957479248f6ea', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'e2979a1194dd707af39b55d55daba70c102d4f4b', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '295ba26eb24b345954c21009da392fbdde64b557', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

exports.ir_booking_new_form = IrBookingNewForm;

//# sourceMappingURL=ir-booking-new-form.cjs.entry.js.map