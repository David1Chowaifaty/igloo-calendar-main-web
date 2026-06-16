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
        return (h(Host, { key: 'ab2ec0a7fedb387c78af62d261fed57113bc8ad4' }, h("div", { key: '5041041e5ea92a4e0ba59dd1f2f26ff96da21b26', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '0b342d6783bac989cfbfa8c9fd8fcce34264a4dd', name: "trigger" }, h("ir-custom-button", { key: '12d5bfa95395b64df08f7888a20d2bc4842741f8', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'e23b56c94a9d851133b132792478b2fd4220ad0b', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'b8be174788b4de70a25c1e3c1c2f8b678c885638', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

export { IrBookingNewForm as ir_booking_new_form };

//# sourceMappingURL=ir-booking-new-form.entry.js.map