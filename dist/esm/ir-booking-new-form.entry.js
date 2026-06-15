import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irBookingNewFormCss = ".sc-ir-booking-new-form-h{display:block}";
const IrBookingNewFormStyle0 = irBookingNewFormCss;

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
        return (h(Host, { key: 'ff63e6619360efc040b7ba1cfdfcf754a8c7aceb' }, h("div", { key: '568d8f85b55c4374c36bcb6cbd11187db7f1eda8', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '83e07ba644f3d46c1bca1bee9ef021d4ce00928c', name: "trigger" }, h("ir-custom-button", { key: 'a32a4474ae40ea9c0aa211570bf61a3db3e123a0', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '541d3f8c8246377439cf83ee5f053705ea4ecd71', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'f218e38a8513834448bf07e751a573fc7ed623db', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

export { IrBookingNewForm as ir_booking_new_form };

//# sourceMappingURL=ir-booking-new-form.entry.js.map