import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import { t as todayISO, a as addDaysISO } from './calendar-dates-D3hVfsrC.js';
import './locale-scope-Jre4lb6k.js';
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
        return (h(Host, { key: '4d908067d679e27d1a2fa9f63bc632a20c7db330', lang: this.language || undefined }, h("div", { key: 'bd19052d9ee0f70cf3ef0b4c6bdfcaf90602c9f0', onClick: () => {
                this.handleTriggerClicked();
            } }, h("slot", { key: '06b75716262fa152577a598b23b34c9ac32260dc', name: "trigger" }, h("ir-custom-button", { key: '32356aad27c12e28aa40afe5f7622d4b04b464d7', appearance: "plain", variant: "brand" }, h("wa-icon", { key: '441bd66916af455a3b49228de6666b027b9bcdd9', name: "circle-plus", style: { fontSize: '1.2rem' } })))), h("ir-booking-editor-drawer", { key: 'cca12b90504331ce86398769ebb2ae32923303fb', onBookingEditorClosed: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.bookingItem = null;
            }, mode: this.bookingItem?.event_type, ticket: this.ticket, open: this.bookingItem !== null, language: this.language, propertyid: this.propertyid })));
    }
};
IrBookingNewForm.style = irBookingNewFormCss();

export { IrBookingNewForm as ir_booking_new_form };
