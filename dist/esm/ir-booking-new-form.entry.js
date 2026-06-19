import { r as registerInstance, h, H as Host } from './index-BvoylR5O.js';

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
        return (h(Host, { key: 'ad93e64a17378932ee14e6928882183746bb5cc3' }, h("div", { key: '67407c3ee98753a22e91523110fcfc184cd82ca2', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '2f02561b6848089db9ed0798059d7d96d9fafbae', name: "trigger" }, h("ir-custom-button", { key: '3bdd9580189ac92b53ddd255630f9c9d4923a5ce', appearance: "plain", variant: "brand" }, h("wa-icon", { key: 'e706a25447126310b012dd27229d4ccb32320ff1', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'ff8e91d17d2dbcb532b925e9fc866b45a8bd746d', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
