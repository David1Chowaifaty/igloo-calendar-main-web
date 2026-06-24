import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irBookingNewFormCss = () => `.sc-ir-booking-new-form-h{display:block}`;

const IrBookingNewForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '74081f515fe2c0a2faaed7885089e413bffeee8d' }, h("div", { key: 'aef60f684a70f186100806d04f13e68e43b699e8', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '6c88d6697bd5a6a2c137fb767d9f5becfe521ce9', name: "trigger" }, h("ir-custom-button", { key: '0248abf4f1493afaca1d2664d48e8eb77e232098', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '2d9dc869095b7c60a50dfccf6ca64ad8187f7f4b', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'b2f6edc72ea894ba19825ac004324fa741fb1168', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
