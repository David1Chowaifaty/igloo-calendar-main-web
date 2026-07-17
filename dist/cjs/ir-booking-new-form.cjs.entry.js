'use strict';

var index = require('./index-Bg4VKYKR.js');

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
        return (index.h(index.Host, { key: '931528d14740f49b3519d7fe096cd4628ca56740' }, index.h("div", { key: 'e014b0027d7ebf944d77952198943a87c1aba5f3', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'ad6492b4bd4dc7edc815865418b8624658b781fa', name: "trigger" }, index.h("ir-custom-button", { key: '6ec48dbc5f7d1518fcb9ee6eb4682635ca45bc5a', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'eaec6118cdc0c25807e8e0d5ea7fba893dd7130a', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '76be0f98616979ff195bcb081866e77c6ea21121', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
