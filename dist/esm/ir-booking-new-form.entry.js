import { r as registerInstance, h, H as Host } from './index-CwWmK1sZ.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import './moment-Mki5YqAR.js';

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
        const today = todayISO();
        this.bookingItem = {
            FROM_DATE: undefined,
            defaultDateRange: {
                fromDate: today,
                toDate: addDaysISO(today, 1),
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
        return (h(Host, { key: 'ee81b9d124285512538d72d699f05f7c4d131e4c' }, h("div", { key: 'f30f6c63fdf32d31e9c4925f035bd23725f0fa95', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: 'e2ca5bcf4e6048404f3d24e860a1dd8968dcc70c', name: "trigger" }, h("ir-custom-button", { key: '9c14f30897f7412c10264ead05954ab658453bc4', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '75e2db95d5099496675ac2599a3e3880de18c279', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'c5debe6ae0c1a9b88900658875b1823e4b592246', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
