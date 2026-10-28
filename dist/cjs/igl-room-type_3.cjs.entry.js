'use strict';

var index = require('./index-IDeZZwEK.js');
var booking_service = require('./booking.service-Cq8eFpFp.js');
var moment = require('./moment-CdViwxPQ.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
require('./booking.dto-CMx8s-oW.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var irCityLedgerTransactionForm_schema = require('./ir-city-ledger-transaction-form.schema-CJBaRCOG.js');
var ApiClient = require('./ApiClient-BkbxJB84.js');
var locale_controller = require('./locale.controller-DOykNQAc.js');
var v4 = require('./v4-_2BfiRUa.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-hDE_y33g.js');
require('./types-BVJQZ50e.js');
require('./utils-DC_1UV-i.js');
require('./calendar-dates-BxDGM1ix.js');
require('./booking-Bp-n-MGf.js');
require('./locale-scope-Cch-vf1R.js');
require('./functions-CaNAUyCw.js');
require('./commonSchemas-D4iFLV5-.js');
require('./type-DxODN41W.js');
require('./language-observer-DKp37LIu.js');
require('./enums-BSCnMYlE.js');
require('./types-sp5nWPAa.js');

const iglRoomTypeCss = () => `.sc-igl-room-type-h{display:block;animation:igl-room-type-in var(--wa-transition-normal, 180ms) ease-out both}@keyframes igl-room-type-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}@media (prefers-reduced-motion: reduce){.sc-igl-room-type-h{animation:none}}.margin-bottom-8.sc-igl-room-type{margin-bottom:8px !important}.roomtype__name.sc-igl-room-type{margin:0;padding:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;margin-bottom:0.5rem;color:var(--wa-color-text-normal)}`;

const IglRoomType = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '9fbf0d2582f060ada1725f1a747cedda37a849bd' }, isValidBookingType && this.roomType.rateplans?.length > 0 && index.h("h5", { key: '077fa0bf1291d4ba95833a0e25d919fc481a0dc2', class: "roomtype__name" }, this.roomType.name), this.roomType.rateplans?.map(ratePlan => {
            if (!!ratePlan.variations) {
                let shouldBeDisabled = this.roomTypeId === this.roomType.id;
                const visibleInventory = booking_service.getVisibleInventory(this.roomType.id, ratePlan.id);
                return (index.h("igl-rate-plan", { unavailableRatePlanIds: this.unavailableRatePlanIds, isBookDisabled: this.isBookDisabled, visibleInventory: visibleInventory, key: `rate-plan-${ratePlan.id}`, ratePricingMode: this.ratePricingMode, class: isValidBookingType ? '' : '', currency: this.currency, ratePlan: ratePlan, roomTypeId: this.roomType.id, bookingType: this.bookingType, shouldBeDisabled: shouldBeDisabled }));
            }
            return null;
        })));
    }
};
IglRoomType.style = iglRoomTypeCss();

const irClInvoiceSelectCss = () => `.sc-ir-cl-invoice-select-h{display:flex;flex-direction:column;gap:0.75rem;border-radius:0.625rem}.field.sc-ir-cl-invoice-select{display:grid;gap:0.35rem}.field--full-width.sc-ir-cl-invoice-select,.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select{width:100%}.field--full-width.sc-ir-cl-invoice-select wa-radio-group.sc-ir-cl-invoice-select wa-radio.sc-ir-cl-invoice-select{flex:1}.entry-type.--credit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-success-fill-quiet);color:var(--wa-color-success-on-quiet);border-color:var(--wa-color-success-border-loud)}.entry-type.--debit.sc-ir-cl-invoice-select:state(checked){background-color:var(--wa-color-danger-fill-quiet);color:var(--wa-color-danger-on-quiet);border-color:var(--wa-color-danger-border-loud)}@keyframes slide-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.invoice-option.sc-ir-cl-invoice-select{display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;width:100%}.invoice-option__left.sc-ir-cl-invoice-select{display:flex;align-items:baseline;gap:1rem}.invoice-option__number.sc-ir-cl-invoice-select{font-weight:500}.invoice-option__date.sc-ir-cl-invoice-select{color:var(--wa-color-neutral-text-quiet)}.invoice-option__amount.sc-ir-cl-invoice-select{font-weight:500}.invoice-option__ref.sc-ir-cl-invoice-select{color:var(--wa-color-neutral-text-quiet);font-style:italic}`;

const IrClInvoiceSelect = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.invoiceChange = index.createEvent(this, "invoiceChange");
    }
    value = '';
    fiscalDocuments = [];
    label;
    hint = '';
    invoiceChange;
    render() {
        return (index.h("ir-validator", { key: '485167789b20114444e800dc5c8965b589b3c293', schema: irCityLedgerTransactionForm_schema.invoiceIdRequiredFieldSchema, value: this.value, valueEvent: "change" }, index.h("wa-select", { key: 'dc0be52252aedd1e8eb4c85760a5b3321578f5e7', label: this.label || t.t('Lcz_DocumentTypeInvoice', { fallback: 'Invoice' }), size: "s", required: true, hint: this.hint || undefined, placeholder: t.t('Lcz_SelectInvoicePlaceholder', { fallback: 'Select invoice' }), value: this.value, onchange: event => {
                this.invoiceChange.emit(event.target.value || '');
            } }, this.fiscalDocuments.map(doc => {
            const date = doc.ISSUE_DATE_DISPLAY ?? (doc.ISSUE_DATE ? irDate.formatDate(doc.ISSUE_DATE, 'MMM D, YYYY') : '');
            const amount = doc.TOTAL_AMOUNT != null ? number.formatAmount(calendarData.calendar_data.property?.currency?.symbol, doc.TOTAL_AMOUNT) : '';
            const docNumber = doc.DOC_NUMBER ?? '';
            return (index.h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID), label: docNumber }, index.h("div", { class: "invoice-option" }, index.h("div", { class: "invoice-option__left" }, index.h("span", { class: "invoice-option__number" }, number.formatBookingNumber(docNumber)), date && index.h("span", { class: "invoice-option__date" }, date), doc.EXTERNAL_REF && (index.h("span", { class: "invoice-option__ref" }, t.t('Lcz_Ref', { fallback: 'Ref:' }), " ", doc.EXTERNAL_REF))), amount && index.h("span", { class: "invoice-option__amount" }, amount))));
        }))));
    }
};
IrClInvoiceSelect.style = irClInvoiceSelectCss();

const irInvoiceCss = () => ``;

const IrInvoice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.invoiceOpen = index.createEvent(this, "invoiceOpen");
        this.invoiceClose = index.createEvent(this, "invoiceClose");
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
    _id = `invoice-form__${v4.v4()}`;
    apiClientService = new ApiClient.ApiClient();
    componentWillLoad() {
        if (this.open) {
            this.loadLocaleTables();
        }
        if (this.booking) {
            if (moment.hooks().isBefore(moment.hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
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
        void locale_controller.LocaleController.load({ tables: locale_controller.SCREEN_TABLES.invoice });
    }
    handleBookingChange() {
        if (!this.booking) {
            return;
        }
        if (moment.hooks().isBefore(moment.hooks(this.booking.from_date, 'YYYY-MM-DD'), 'dates') && this.viewMode === 'invoice') {
            this.viewMode = 'proforma';
        }
    }
    render() {
        return (index.h(index.Host, { key: 'e1c8cd1ffd33ec8f7cc2ea2bb5447a3fde524ddd' }, index.h("ir-drawer", { key: 'bc3dc0094e27759f5bdfa47d486dbd64e5efcfc9', style: {
                '--ir-drawer-width': '40rem',
                '--ir-drawer-background-color': 'var(--wa-color-surface-default)',
                '--ir-drawer-padding-left': 'var(--spacing)',
                '--ir-drawer-padding-right': 'var(--spacing)',
                '--ir-drawer-padding-top': 'var(--spacing)',
                '--ir-drawer-padding-bottom': 'var(--spacing)',
            }, label: t.t('Lcz_IssueInvoice', { fallback: 'Issue Invoice' }), open: this.open, onDrawerHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.closeDrawer();
            } }, index.h("div", { key: 'f453394557250526353e2f6b25293a8dd4e89ca2', class: "d-flex align-items-center", slot: "header-actions" }, index.h("wa-switch", { key: 'e47887785724bd154aeac153d843b52dd81c843c', defaultChecked: this.viewMode === 'proforma', checked: this.viewMode === 'proforma', onchange: e => {
                if (e.target.checked) {
                    this.viewMode = 'proforma';
                }
                else {
                    this.viewMode = 'invoice';
                }
            } }, t.t('Lcz_Proforma', { fallback: 'Proforma' }))), this.open && (index.h("ir-invoice-form", { key: 'fb5fa06d594f3f8fc6acfe32e9aa2e891103429a', viewMode: this.viewMode, for: this.for, roomIdentifier: this.roomIdentifier, booking: this.booking, autoPrint: this.autoPrint, formId: this._id, onPreviewProformaInvoice: e => (this.invoice = e.detail.invoice), invoiceInfo: this.invoiceInfo, onLoadingChange: e => (this.isLoading = e.detail) })), index.h("div", { key: '381ae9b38703e118fd82015807a7970cb1756b59', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '19b2f2bd9f0f8072376b3c75fb6b2658ebdb7d68', size: "m", appearance: "filled", class: "w-100 flex-fill", variant: "neutral", onClickHandler: () => {
                this.closeDrawer();
            } }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '3e5cd4df7d4d7ef7c7dd6b82d49b45c4220291a3', disabled: this.invoiceInfo?.invoiceable_items?.filter(i => i.is_invoiceable)?.length === 0, loading: this.isLoading, value: "invoice", type: "submit", form: this._id, class: "w-100 flex-fill", size: "m", variant: "brand", id: `confirm-btn_${this._id}` }, t.t('Lcz_Confirm', { fallback: 'Confirm' })))), index.h("ir-fiscal-document-preview", { key: '246cacf833b36f23b134d04a2d66c0d9243445ec', mode: "all", ticket: this.apiClientService.getToken(), propertyId: calendarData.calendar_data?.property?.id })));
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

exports.igl_room_type = IglRoomType;
exports.ir_cl_invoice_select = IrClInvoiceSelect;
exports.ir_invoice = IrInvoice;
