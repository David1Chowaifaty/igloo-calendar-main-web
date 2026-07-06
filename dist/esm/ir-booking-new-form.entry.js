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
        return (h(Host, { key: '1f69968f522869cfa40a4ec38aa3e9b4c6739e16' }, h("div", { key: 'ddd85c23b32d38324767ac71a7ce4732b21f496a', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '68e85d474500b89464588b94eb9fa14a2f7d10f9', name: "trigger" }, h("ir-custom-button", { key: 'dc68de32fb86a4ab6fb1266633d32c6eeaf198b9', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'd911b52a3e98e6a6abfac7cb6add3b5f8102d08d', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'a1917b24acf4dccb7b3da9cb71ca52a78985b1a9', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
