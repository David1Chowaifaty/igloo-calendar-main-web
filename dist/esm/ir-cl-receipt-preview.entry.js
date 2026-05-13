import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service-52936804.js';
import { f as formatAmount } from './utils-dd5327f2.js';
import { C as CityLedgerService } from './index-2784f000.js';
import { B as BookingService } from './booking.service-5a37b024.js';
import './Token-030c78a9.js';
import './axios-aa1335b8.js';
import './property.service-8ddb7528.js';
import './index-87419685.js';
import './calendar-data-b1f645da.js';
import './index-f100e9d2.js';
import './moment-ab846cee.js';
import './locales.store-cb784e95.js';
import './type-e34653d3.js';
import './booking-41933335.js';

const irClReceiptPreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.receipt-body{display:flex;flex-direction:column;gap:1.75rem}.receipt-section__title{margin:0 0 0.625rem;padding-bottom:0.375rem;font-size:0.6875rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;border-bottom:1px solid #e5e7eb}.receipt-rows{display:flex;flex-direction:column;gap:0.35rem}.receipt-row{display:flex;align-items:baseline;gap:0.375rem;font-size:0.875rem}.receipt-row__label{color:#6b7280;font-weight:400;flex-shrink:0}.receipt-row__label::after{content:':'}.receipt-row__value{color:#111827;font-weight:500}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}.receipt-section__title{color:#374151}.receipt-row__label{color:#374151}}";
const IrClReceiptPreviewStyle0 = irClReceiptPreviewCss;

const IrClReceiptPreview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clPreviewReady = createEvent(this, "clPreviewReady", 7);
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
    dataService = new ClFiscalDocumentService();
    bookingService = new BookingService();
    cityLedgerService = new CityLedgerService();
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
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "document-state" }, h("ir-spinner", null))));
        }
        if (this.error) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, this.error)));
        }
        const tx = this.ClEntry;
        if (!tx) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "No receipt data found.")));
        }
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? formatAmount(currency, v) : '—');
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "receipt" }), h("div", { class: "receipt-body" }, h("section", { class: "receipt-section" }, h("h4", { class: "receipt-section__title" }, "Payment Details"), h("div", { class: "receipt-rows" }, h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Amount Received"), h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Payment Method"), h("span", { class: "receipt-row__value" }, this.getPaymentMethodLabel(tx.PAY_METHOD_CODE))), tx.DESCRIPTION && (h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Reference"), h("span", { class: "receipt-row__value" }, tx.DESCRIPTION))))), h("section", { class: "receipt-section" }, h("h4", { class: "receipt-section__title" }, "Balance Summary (Account)"), h("div", { class: "receipt-rows" }, h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Balance Before Payment"), h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_BEFORE_TX))), h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Payment Received"), h("span", { class: "receipt-row__value" }, fmt(tx.TOTAL_AMOUNT))), h("div", { class: "receipt-row" }, h("span", { class: "receipt-row__label" }, "Balance After Payment"), h("span", { class: "receipt-row__value" }, fmt(this.document?.BALANCE_AFTER_TX)))))))));
    }
};
IrClReceiptPreview.style = IrClReceiptPreviewStyle0;

export { IrClReceiptPreview as ir_cl_receipt_preview };

//# sourceMappingURL=ir-cl-receipt-preview.entry.js.map