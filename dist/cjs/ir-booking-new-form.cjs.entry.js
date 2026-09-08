'use strict';

var index = require('./index-P5Mginch.js');

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
        return (index.h(index.Host, { key: 'd4446c12b7e2583d662d88e252331b4501450428' }, index.h("div", { key: 'eae7bb319ebdc69b72a28fc589820238e11e08a7', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '5e12ac47d9f92ebba93d223040485101424208ef', name: "trigger" }, index.h("ir-custom-button", { key: '8bbedd3cabf1cd64c019790e59da63a5b14c12c8', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'a69390d93ca23787c8b1024e90b97ac02c80be59', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: 'c6051cbd00f77cc94a61db3d77d958126158554e', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
