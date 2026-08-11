import { r as registerInstance, h, H as Host } from './index-CaNXuIlM.js';

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
        return (h(Host, { key: '07e549bc1ae86540d90fad775f5b2a44db4a5d25' }, h("div", { key: 'c90976496a72fc148ec7c7675f222ab576944008', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'c1db0ce8dee0955008af501f52971bc209c347da', name: "trigger" }, h("ir-custom-button", { key: '349ba07c7818eec8712d7dad45b049834c6c74b8', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '7a13907225a480e0a8b969c88175fa64fbb349c4', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '6b7ff1523ba1ceeb7b3bb044e4375cecd685d0db', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
