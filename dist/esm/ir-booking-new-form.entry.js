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
        return (h(Host, { key: 'cbe3897c60a08bf4a55bcbf1b59897ee908559de' }, h("div", { key: 'd0a846005f420a1ded28b9a7e42c278b98f03e66', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '03ac10c4de0506097ef61669d2b3c80534784f0a', name: "trigger" }, h("ir-custom-button", { key: 'e5af806c49fe32246dcdc6168b30cfd782fe1093', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'c31074c60f84e0b5151292b459732c496000796f', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '041bde7ea1f9eee1e898b845858d5de9ca11df2b', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

export { IrBookingNewForm as ir_booking_new_form };

//# sourceMappingURL=ir-booking-new-form.entry.js.map