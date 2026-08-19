'use strict';

var index = require('./index-DgHWBwDV.js');

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
            TITLE: 'New Booking',
        };
    }
    render() {
        return (index.h(index.Host, { key: 'd210ab87de56681ff5c5d5f14c9c0de3b0e79ccf' }, index.h("div", { key: '0c6d7ef9e1859a18fbea4ef199a8b8b3021602fe', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '0991b4d85fe60dc8bed743468f76a5539dcf179b', name: "trigger" }, index.h("ir-custom-button", { key: '32c95ea215411217590510f64bdb0142b7e49d31', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '000f5eecf94cf22e30f9fe0e625de3a5c8d75309', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '036a04a2b247dc5021bd4b9f4a0a58e9f42e3b92', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
