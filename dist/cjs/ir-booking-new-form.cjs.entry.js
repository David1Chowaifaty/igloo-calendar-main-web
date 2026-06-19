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
        return (index.h(index.Host, { key: 'ad93e64a17378932ee14e6928882183746bb5cc3' }, index.h("div", { key: '67407c3ee98753a22e91523110fcfc184cd82ca2', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: '2f02561b6848089db9ed0798059d7d96d9fafbae', name: "trigger" }, index.h("ir-custom-button", { key: '3bdd9580189ac92b53ddd255630f9c9d4923a5ce', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'e706a25447126310b012dd27229d4ccb32320ff1', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: 'ff8e91d17d2dbcb532b925e9fc866b45a8bd746d', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
