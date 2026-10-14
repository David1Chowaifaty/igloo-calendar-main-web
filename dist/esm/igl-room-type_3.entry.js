import { r as registerInstance, h, H as Host, c as createEvent } from './index-DKZeCK8T.js';
import { g as getVisibleInventory } from './booking.service-Da_iCXks.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { c as calendar_data } from './calendar-data-D8EnecFU.js';
import './booking.dto-DVIFh8qe.js';
import { f as formatDate } from './ir-date-CdNwD9PM.js';
import { t } from './t-DTGA0v_q.js';
import { f as formatAmount, a as formatBookingNumber } from './number-COOjxK58.js';
import { i as invoiceIdRequiredFieldSchema } from './ir-city-ledger-transaction-form.schema-rm3IUfrm.js';
import { A as ApiClient } from './ApiClient-4jHvz1N4.js';
import { L as LocaleController, S as SCREEN_TABLES } from './locale.controller-O4tARDfV.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './IBooking-BV3s3Tu5.js';
import './types-CrHq6jOb.js';
import './utils-C5rtMj-W.js';
import './calendar-dates-D3hVfsrC.js';
import './booking-CwvNpV9l.js';
import './locales.store-DsOXxI8k.js';
import './functions-je-FdPG-.js';
import './commonSchemas-My88Vijq.js';
import './type-W0yWfEBm.js';
import './language-observer-CHgzsZkY.js';
import './enums-CcLtXwvz.js';
import './types-DX9A63ik.js';

const iglRoomTypeCss = () => `.sc-igl-room-type-h{display:block;animation:igl-room-type-in var(--wa-transition-normal, 180ms) ease-out both}@keyframes igl-room-type-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion: reduce){.sc-igl-room-type-h{animation:none}}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}.roomtype__name.sc-igl-room-type{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin-bottom:0.5rem;color:var(--wa-color-text-normal)}`;

const IglRoomType = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    roomType;
    bookingType = 'PLUS_BOOKING';
    ratePricingMode = [];
    roomTypeId = null;
    currency;
    isBookDisabled;
    unavailableRatePlanIds = new Set();
    validBookingTypes = ['PLUS_BOOKING', 'ADD_ROOM', 'EDIT_BOOKING', 'SPLIT_BOOKING'];
    render() {
        const isValidBookingType = this.validBookingTypes.includes(this.bookingType);
        return (h(Host, { key: '9dc25294c5608937c2bb2c894781ac4113bced5d' }, isValidBookingType && this.roomType.rateplans?.length > 0 && h("h5", { key: '20e905d179ef6851e8c1039634feda8b63e1329a', class: "roomtype__name" }, this.roomType.name), this.roomType.rateplans?.map(ratePlan => {
            if (!!ratePlan.variations) {
                let shouldBeDisabled = this.roomTypeId === this.roomType.id;
                const visibleInventory = getVisibleInventory(this.roomType.id, ratePlan.id);
                return (h("igl-rate-plan", { unavailableRatePlanIds: this.unavailableRatePlanIds, isBookDisabled: this.isBookDisabled, visibleInventory: visibleInventory, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency, ratePlan: ratePlan, roomTypeId: this.roomType.id, bookingType: this.bookingType, shouldBeDisabled: shouldBeDisabled }));
            }
            return null;
        })));
    }
};
IglRoomType.style = iglRoomTypeCss();

const irClInvoiceSelectCss = () => `.sc-ir-cl-invoice-select-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-invoice-select{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-invoice-select,.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select{width:100%}.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select wa-radio.sc-ir-cl-invoice-select{flex:1}.entry-type.--credit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.invoice-option.sc-ir-cl-invoice-select{display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;width:100%}.invoice-option__left.sc-ir-cl-invoice-select{display:flex;align-items:baseline;gap:1rem}.invoice-option__number.sc-ir-cl-invoice-select{font-weight:500}.invoice-option__date.sc-ir-cl-invoice-select{color:var(--wa-color-neutral-text-quiet)}.invoice-option__amount.sc-ir-cl-invoice-select{font-weight:500}.invoice-option__ref.sc-ir-cl-invoice-select{color:var(--wa-color-neutral-text-quiet);font-style:italic}`;

const IrClInvoiceSelect = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.invoiceChange = createEvent(this, "invoiceChange");
    }
    value = '';
    fiscalDocuments = [];
    label;
    hint = '';
    invoiceChange;
    render() {
        return (h("ir-validator", { key: 'db47b1c59b9a9f29172b932e5b9ce3d8ff4606a2', schema: invoiceIdRequiredFieldSchema, value: this.value, valueEvent: "change" }, h("wa-select", { key: '0819cbb27a12214e640712a60c1f4b91b4e0a742', label: this.label || t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }), size: "s", required: true, hint: this.hint || undefined, placeholder: t('Lcz_SelectInvoicePlaceholder', { fallback: 'Select invoice' }), value: this.value, onchange: event => {
                this.invoiceChange.emit(event.target.value || '');
            } }, this.fiscalDocuments.map(doc => {
            const date = doc.ISSUE_DATE_DISPLAY ?? (doc.ISSUE_DATE ? formatDate(doc.ISSUE_DATE, 'MMM D, YYYY') : '');
            const amount = doc.TOTAL_AMOUNT != null ? formatAmount(calendar_data.property?.currency?.symbol, doc.TOTAL_AMOUNT) : '';
            const docNumber = doc.DOC_NUMBER ?? '';
            return (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID), label: docNumber }, h("div", { class: "invoice-option" }, h("div", { class: "invoice-option__left" }, h("span", { class: "invoice-option__number" }, formatBookingNumber(docNumber)), date && h("span", { class: "invoice-option__date" }, date), doc.EXTERNAL_REF && (h("span", { class: "invoice-option__ref" }, t('Lcz_Ref', { fallback: 'Ref:' }), " ", doc.EXTERNAL_REF))), amount && h("span", { class: "invoice-option__amount" }, amount))));
        }))));
    }
};
IrClInvoiceSelect.style = irClInvoiceSelectCss();

const irInvoiceCss = () => ``;

const IrInvoice = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.invoiceOpen = createEvent(this, "invoiceOpen");
        this.invoiceClose = createEvent(this, "invoiceClose");
    }
    /**
     * Whether the invoice drawer is open.
     *
     * This prop is mutable and reflected to the host element,
     * allowing parent components to control visibility via markup
     * or via the public `openDrawer()` / `closeDrawer()` methods.
     */
    open;
    /**
     * The booking object for which the invoice is being generated.
     * Should contain room, guest, and pricing information.
     */
    booking;
    /**
     * Specifies what the invoice is for.
     * - `"room"`: invoice for a specific room
     * - `"booking"`: invoice for the entire booking
     */
    for = 'booking';
    /**
     * The identifier of the room for which the invoice is being generated.
     * Used when invoicing at room level instead of booking level.
     */
    roomIdentifier;
    /**
     * When `true`, automatically triggers `window.print()` after an invoice is created.
     * Useful for setups where the invoice should immediately be sent to a printer.
     */
    autoPrint = false;
    /**
     * Additional invoice-related metadata used when creating
     * or rendering the invoice.
     *
     * This object can include payment details, discounts,
     * tax information, or any context needed by the invoice form.
     *
     * @type {BookingInvoiceInfo}
     */
    invoiceInfo;
    /**
     * Emitted when the invoice drawer is opened.
     *
     * Fired when `openDrawer()` is called and the component
     * transitions into the open state.
     */
    invoiceOpen;
    /**
     * Emitted when the invoice drawer is closed.
     *
     * Fired when `closeDrawer()` is called, including when the
     * underlying drawer emits `onDrawerHide`.
     */
    invoiceClose;
    invoice = null;
    /**
     * Opens the invoice drawer.
     *
     * This method sets the `open` property to `true`, making the drawer visible.
     * It can be called programmatically by parent components.
     *
     * Also emits the `invoiceOpen` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async openDrawer() {
        this.open = true;
        this.invoiceOpen.emit();
    }
    /**
     * Closes the invoice drawer.
     *
     * This method sets the `open` property to `false`, hiding the drawer.
     * Parent components can call this to close the drawer programmatically,
     * and it is also used internally when the drawer emits `onDrawerHide`.
     *
     * Also emits the `invoiceClose` event.
     *
     * @returns {Promise<void>} Resolves once the drawer state is updated.
     */
    async closeDrawer() {
        this.open = false;
        this.invoiceClose.emit();
    }
    viewMode = 'invoice';
    isLoading;
    _id = `invoice-form__${v4()}`;
    apiClientService = new ApiClient();
    componentWillLoad() {
        if (this.open) {
            this.loadLocaleTables();
        }
        if (this.booking) {
            if (hooks().isBefore(hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
                this.viewMode = 'proforma';
            }
        }
    }
    handleOpenChange(open) {
        if (open) {
            this.loadLocaleTables();
        }
    }
    /**
     * Self-loading leaf: the fiscal-document previews and confirm dialogs under this
     * drawer speak `_FINANCIALS`, which hosts like the calendar and departures never load.
     * Deferred until the drawer opens — hosts mount it closed at first render, before
     * they have a ticket, so an eager load in `componentWillLoad` would go out unauthenticated.
     */
    loadLocaleTables() {
        void LocaleController.load({ tables: SCREEN_TABLES.invoice });
    }
    handleBookingChange() {
        if (!this.booking) {
            return;
        }
        if (hooks().isBefore(hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
            this.viewMode = 'proforma';
        }
    }
    render() {
        return (h(Host, { key: 'd938bce67c6c566f330ea53be8a7843f9b9c51ec' }, h("ir-drawer", { key: 'be627a99708b9ffbc0f0a1f7619be55ebe764596', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: t('Lcz_IssueInvoice', { fallback: 'Issue Invoice' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, h("div", { key: '981f4526104c2282b2df2c93cca46e10f50ad9da', class: "d-flex align-items-center", slot: "header-actions" }, h("wa-switch", { key: '680f2a2523de605817657d02996b32a37706293b', defaultChecked: this.viewMode === 'proforma', checked: this.viewMode === 'proforma', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, t('Lcz_Proforma', { fallback: 'Proforma' }))), this.open && (h("ir-invoice-form", { key: '2db3d71508d83b374e7900ffc4f556b729dfc9ee', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, onPreviewProformaInvoice: e => (this.invoice = e.detail.invoice), invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), h("div", { key: '92b7460630abe2d49ec305af4f01b334bb7d3956', slot: "footer", class: "ir__drawer-footer" }, h("ir-custom-button", { key: 'e6a605bbc99fee8a2f4c98597ae08e4fcea1ccb2', size: "m", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ed706100a934b940bfde5d6aca7109cc3bf7f019', disabled: this.invoiceInfo?.invoiceable_items?.filter(i => i.is_invoiceable)?.length === 0, loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "m", variant: "brand", id: `confirm-btn_${this._id}` }, t('Lcz_Confirm', { fallback: 'Confirm' })))), h("ir-fiscal-document-preview", { key: 'd5c3745fc31b33714dc101a14cb011e771cc9a34', mode: "all", ticket: this.apiClientService.getToken(), propertyId: calendar_data?.property?.id })));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }],
        "booking": [{
                "handleBookingChange": 0
            }]
    }; }
};
IrInvoice.style = irInvoiceCss();

export { IglRoomType as igl_room_type, IrClInvoiceSelect as ir_cl_invoice_select, IrInvoice as ir_invoice };
