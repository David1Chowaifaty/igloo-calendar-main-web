import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service-zvBH1bOA.js';
import { t } from './t-DTGA0v_q.js';
import './ApiClient-4jHvz1N4.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-McIdad5m.js';
import './enums-CcLtXwvz.js';
import './moment-Mki5YqAR.js';
import './types-CrHq6jOb.js';
import './utils-C5rtMj-W.js';
import './calendar-data-D8EnecFU.js';
import './locales.store-DsOXxI8k.js';
import './booking.dto-DVIFh8qe.js';
import './type-W0yWfEBm.js';
import './ir-date-CdNwD9PM.js';
import './language-observer-CHgzsZkY.js';
import './calendar-dates-D3hVfsrC.js';
import './index-DXcx4IbZ.js';
import './commonSchemas-My88Vijq.js';
import './locale.controller-O4tARDfV.js';
import './types-DX9A63ik.js';

const irClDebitNotePreviewCss = () => `:host{display:block;font-family:system-ui,     -apple-system,     sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}`;

const IrClDebitNotePreview = class {
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
            this.error = t('Lcz_AuthTicketRequired', { fallback: 'Authentication ticket is required.' });
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
            this.error = e?.message ?? t('Lcz_FailedToLoadDebitNoteData', { fallback: 'Failed to load debit note data.' });
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.ticket) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, t('Lcz_AuthTicketRequired', { fallback: 'Authentication ticket is required.' }))));
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
IrClDebitNotePreview.style = irClDebitNotePreviewCss();

export { IrClDebitNotePreview as ir_cl_debit_note_preview };
