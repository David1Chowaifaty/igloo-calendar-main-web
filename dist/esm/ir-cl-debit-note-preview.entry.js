import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service-9958c4a0.js';
import './Token-030c78a9.js';
import './axios-aa1335b8.js';
import './index-4dc1a59c.js';
import './moment-ab846cee.js';
import './index-87419685.js';
import './utils-857cf993.js';
import './calendar-data-b1f645da.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';
import './type-e34653d3.js';
import './property.service-55b9401c.js';

const irClDebitNotePreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClDebitNotePreviewStyle0 = irClDebitNotePreviewCss;

const IrClDebitNotePreview = class {
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
            this.error = e?.message ?? 'Failed to load debit note data.';
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
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "debitnote" }), h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$' }))));
    }
};
IrClDebitNotePreview.style = IrClDebitNotePreviewStyle0;

export { IrClDebitNotePreview as ir_cl_debit_note_preview };

//# sourceMappingURL=ir-cl-debit-note-preview.entry.js.map