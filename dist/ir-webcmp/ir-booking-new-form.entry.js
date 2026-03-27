import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irBookingNewFormCss = ".sc-ir-booking-new-form-h{display:block}";

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
        return (h(Host, { key: 'd3b2c3a349eb36ee867c2917c1f02c8f206bce6b' }, h("div", { key: 'f5bf1be5b4c338f0c4506ea7142f572e9059cf83', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'ed52521bfd010862be537f867e1150d35daf647c', name: "trigger" }, h("ir-custom-button", { key: 'd057f034f535fc6c328a56ea519b63c064a6d091', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '26687ab0c0b2b23d85f92dbec575dc0704bd84ad', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '1a9751ea7dbd690cfdfdd7aaa71f848ce8dfe7ae', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss;

export { IrBookingNewForm as ir_booking_new_form };

//# sourceMappingURL=ir-booking-new-form.entry.js.map