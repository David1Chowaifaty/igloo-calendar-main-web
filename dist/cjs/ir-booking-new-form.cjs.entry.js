'use strict';

var index = require('./index-CJ0kc5p1.js');

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
        return (index.h(index.Host, { key: '6de3e1d4a6051ae2ca65ce53756ed4d205c7c22f' }, index.h("div", { key: 'eff0dabf87206f873f9f186ef523d840961003d4', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'b884bbd6bc1a4667464467ccd112cd1e068f0b97', name: "trigger" }, index.h("ir-custom-button", { key: '52edc024620c86349e9ad0bdfd2a2e8aa2a12685', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '95b6be494f5e6c237dc1764d25aaa8e5e50ffcd0', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: 'cc8f6e669c26af58e07935615b32788a670f996d', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
