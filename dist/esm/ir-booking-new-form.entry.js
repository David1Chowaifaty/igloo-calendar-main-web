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
        return (h(Host, { key: '21326e111bbac04ca0bbe7bc5434eb63341befcb' }, h("div", { key: '2a8be45d214c8b2dba76a8d75639cad1589165b0', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '1c8ddc40289ec3aa98ec754d79a2db0481b7fad1', name: "trigger" }, h("ir-custom-button", { key: '80978907048f4873ccf727d9fa722fe347743b26', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'b379cf6ceabbdf105c1cfaa8f71894ed8fb4a216', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '5b195e77a0a2a167fd6adf8f9785e138d4c96c0c', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
