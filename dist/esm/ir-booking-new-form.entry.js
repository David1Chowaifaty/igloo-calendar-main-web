import { r as registerInstance, h, H as Host } from './index-0Di74WDd.js';

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
        return (h(Host, { key: 'fea3916cc18ae13ee4ef56c953565cbdf9248b8a' }, h("div", { key: 'f20fed67fa9a95eb43606073cc47ccd46f1e0055', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '0ee362e89c77f9182c99060fbded7d97ce70d12e', name: "trigger" }, h("ir-custom-button", { key: 'cb6707efc7b28a1dcbf73eb78949192ba9b3c7f7', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '1dde1b870fdf8ef7b88badd5c55c4edbf9af1b1b', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '05a8456e58d788d3f4ba5bd3d864c7a2b4278b12', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
