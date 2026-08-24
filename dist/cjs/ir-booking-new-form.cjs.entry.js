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
        return (index.h(index.Host, { key: 'ffe3bb7a042f6bc63a8a7dc3e11aacabdb22c14e' }, index.h("div", { key: 'e766f465bf8098e8729f9ed59baab386fb62b761', onClick: () => {
                this.handleTriggerClicked();
            } }, index.h("slot", { key: 'f597c8e8507639a394dc595b8aff278ad43fd39c', name: "trigger" }, index.h("ir-custom-button", { key: '26384e9826d7be29063eed2f81da984303688e9d', appearance: "plain", variant: "brand" }, index.h("wa-icon", { key: 'f871648844033bb33202540101ad4062ab725334', name: "circle-plus", style: { fontSize: '1.2rem' } })))), index.h("ir-booking-editor-drawer", { key: '99a559d41285074646734cce92ba67e6e8988136', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

exports.ir_booking_new_form = IrBookingNewForm;
