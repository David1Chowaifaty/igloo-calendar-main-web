'use strict';

var index = require('./index-DtXemfU-.js');

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
        return (index.h(index.Host, { key: '54b68e910c0df2f6c9c58fcfafdc8c82f53372a5' }, index.h("div", { key: 'b5b476077d328d8c18adb60d57455cd66704fe1f', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'a44855fd0ea32b3bac87a89c60114f3e28ac73ae', name: "trigger" }, index.h("ir-custom-button", { key: '87783528cff2434c4984f652d34fb789b87caa9e', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: '9b5e27c399477ba92e35a212dc48aa93971e8b83', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '8efea6a46446e6e262e6b311b4f209f48d7da165', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
