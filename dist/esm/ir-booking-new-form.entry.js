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
        return (h(Host, { key: '7363c40e625d10f50e38ae4fd656d559d231c2bc' }, h("div", { key: 'fb864b2c2e037329a6baf21e3c86e43e0e6718d9', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'bb895be0421dc239c754c1a043f4aaca52b86a6a', name: "trigger" }, h("ir-custom-button", { key: 'e5dcd9f5be1dc208b3bcb92ea6c2d696832f45d4', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '033b896d0b772d68c627667cb722247865834614', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'cc48a4941eb56105cbc393b625cc7953b8913db2', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = IrBookingNewFormStyle0;

export { IrBookingNewForm as ir_booking_new_form };

//# sourceMappingURL=ir-booking-new-form.entry.js.map