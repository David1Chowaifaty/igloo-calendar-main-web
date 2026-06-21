'use strict';

var index = require('./index-DYQrLNin.js');

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
        return (index.h(index.Host, { key: '421cac2c39b10b15555c6261fb845de29e0892ad' }, index.h("div", { key: '0de132c936497c40183e24d6bcb80d2e14cc1e58', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'cdcf8f5e0944e418e85f1c2ee379fbfa420d3256', name: "trigger" }, index.h("ir-custom-button", { key: '01ff3de8985577a2ffca4f614eccdcaa0937800a', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '16196f6c7681eda351610c87d106895b468ac774', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '0cc6121fba395fea21e904e434d024f5c39821bf', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
