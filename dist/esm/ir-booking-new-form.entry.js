import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';
import { t } from './t-BVYK64UG.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import './locale-scope-CapRuPkM.js';
import './moment-Mki5YqAR.js';

const irBookingNewFormCss = () => `.sc-ir-booking-new-form-h{display:block}`;

const IrBookingNewForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    ticket;
    propertyid;
    /**
     * Language for the form and the editor it opens, independent of the page's. Reflected as `lang`
     * on the host, which makes this subtree its own locale scope (see `locale-scope.ts`).
     */
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
            TITLE: t('Lcz_NewBooking', { fallback: 'New Booking' }),
        };
    }
    render() {
        return (h(Host, { key: 'ed4c4880d351274ab6d019a07776a28bee439f96', lang: this.language || undefined }, h("div", { key: '735a38d1a171a9863fbc309498e84843ce761afb', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '79d1f5a625bde5dcdd9f9ddfdb08129f018a8894', name: "trigger" }, h("ir-custom-button", { key: '54a9249b2c976902eb0dd532cad29309730e6e94', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '8b6fc0ba6c5050bc5570426adf8e55c5a0a7c67a', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'bcd2a438372a9c97ec861da9c35a8aaeef89fb79', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
