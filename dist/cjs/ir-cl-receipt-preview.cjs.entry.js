'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const clFiscalDocument_service = require('./cl-fiscal-document.service-a054029f.js');
const utils = require('./utils-d712e1b8.js');
const index$1 = require('./index-b56b0eeb.js');
const booking_store = require('./booking.store-feceaf67.js');
require('./Token-8fd11984.js');
require('./axios-6e678d52.js');
require('./property.service-9a080f5b.js');
require('./index-8bb117a0.js');
require('./calendar-data-70bc3b4b.js');
require('./index-fbf1fe1d.js');
require('./moment-1780b03a.js');
require('./locales.store-32782582.js');

const irClReceiptPreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.receipt-body{display:flex;flex-direction:column;gap:1.75rem}.receipt-section__title{margin:0 0 0.625rem;padding-bottom:0.375rem;font-size:0.6875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;border-bottom:1px solid #e5e7eb}.receipt-rows{display:flex;flex-direction:column;gap:0.35rem}.receipt-row{display:flex;align-items:baseline;gap:0.375rem;font-size:0.875rem}.receipt-row__label{color:#6b7280;font-weight:400;flex-shrink:0}.receipt-row__label::after{content:':'}.receipt-row__value{color:#111827;font-weight:500}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}.receipt-section__title{color:#374151}.receipt-row__label{color:#374151}}";
const IrClReceiptPreviewStyle0 = irClReceiptPreviewCss;

const IrClReceiptPreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    ClEntry;
    error = null;
    property = null;
    paymentMethods = [];
    document = null;
    clPreviewReady;
    hasEmitted = false;
    dataService = new clFiscalDocument_service.ClFiscalDocumentService();
    bookingService = new booking_store.BookingService();
    cityLedgerService = new index$1.CityLedgerService();
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const [{ property, transactions }, paymentMethods, documents] = await Promise.all([
                this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber),
                this.bookingService.getSetupEntriesByTableName('_PAY_METHOD'),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    DOC_NUMBER: this.documentNumber,
                }),
            ]);
            this.document = documents[0];
            this.property = property;
            this.ClEntry = transactions[0];
            this.paymentMethods = paymentMethods;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load receipt data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    getPaymentMethodLabel(code) {
        if (!code)
            return '—';
        const entry = this.paymentMethods.find(e => e.CODE_NAME === code);
        return entry?.CODE_VALUE_EN ?? code;
    }
    render() {
        if (!this.ticket) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, this.error)));
        }
        const tx = this.ClEntry;
        if (!tx) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "No receipt data found.")));
        }
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? utils.formatAmount(currency, v) : '—');
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "receipt" }), index.h("div", { class: "receipt-body" }, index.h("section", { class: "receipt-section" }, index.h("h4", { class: "receipt-section__title" }, "Payment Details"), index.h("div", { class: "receipt-rows" }, index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Amount Received"), index.h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Payment Method"), index.h("span", { class: "receipt-row__value" }, this.getPaymentMethodLabel(tx.PAY_METHOD_CODE))), tx.DESCRIPTION && (index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Reference"), index.h("span", { class: "receipt-row__value" }, tx.DESCRIPTION))))), index.h("section", { class: "receipt-section" }, index.h("h4", { class: "receipt-section__title" }, "Balance Summary (Account)"), index.h("div", { class: "receipt-rows" }, index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Balance Before Payment"), index.h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_BEFORE_TX))), index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Payment Received"), index.h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), index.h("div", { class: "receipt-row" }, index.h("span", { class: "receipt-row__label" }, "Balance After Payment"), index.h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_AFTER_TX)))))))));
    }
};
IrClReceiptPreview.style = IrClReceiptPreviewStyle0;

exports.ir_cl_receipt_preview = IrClReceiptPreview;

//# sourceMappingURL=ir-cl-receipt-preview.cjs.entry.js.map