import { r as registerInstance, c as createEvent, h, H as Host } from './index-JbQjGrUG.js';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service-BSNFzu7N.js';
import './Token-CkxFIO_J.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-CE0OWTiY.js';
import './enums-QjeU2ajV.js';
import './moment-Mki5YqAR.js';
import './index-DeW5X45W.js';
import './utils-AafVtJtY.js';
import './calendar-data-CRLrGQXE.js';
import './index-CR94o8Bs.js';
import './locales.store-CV07I3Cw.js';
import './type-D7rOPtKA.js';
import './index-6po2_28m.js';

const irClInvoicePreviewCss = () => `:host{display:block;font-family:system-ui,     -apple-system,     sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}`;

const IrClInvoicePreview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clPreviewReady = createEvent(this, "clPreviewReady");
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    error = null;
    property = null;
    transactions = [];
    clPreviewReady;
    dataService = new ClFiscalDocumentService();
    hasEmitted = false;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        this.dataService.init(this.baseurl, this.ticket);
        return this.fetchData();
    }
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const { property, transactions } = await this.dataService.fetchData(this.propertyId, this.agentId, this.documentNumber);
            this.property = property;
            this.transactions = transactions;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load invoice data.';
        }
        finally {
            this.isLoading = false;
        }
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
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "invoice" }), h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$' }))));
    }
};
IrClInvoicePreview.style = irClInvoicePreviewCss();

export { IrClInvoicePreview as ir_cl_invoice_preview };
