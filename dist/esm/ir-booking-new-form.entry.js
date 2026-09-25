import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-CHjay2ar.js';
import './locales.store-CXJn6ls-.js';

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
            TITLE: t('Lcz_NewBooking', { fallback: 'New Booking' }),
        };
    }
    render() {
        return (h(Host, { key: 'f6bfacdd5c7efd6ef3723293bff098c3d726d350' }, h("div", { key: '69416446269bb870d4325b06727c47fe79040295', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '0007b84426be8804129bb26f63d5ee87d8cab494', name: "trigger" }, h("ir-custom-button", { key: '895f5a30964c0df2ac674384d0dea7335e8325ea', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '6a6a794021b0e857fee2c3d30c27b95a6a0ef5f7', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: '49142be4f0bb64c1821fbfe88e46b4f0aa730a59', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, label: this.bookingItem?.TITLE, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
