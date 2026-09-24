import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service-CUWWOV6E.js';
import { t } from './t-Bk78Wumj.js';
import './ApiClient-4jHvz1N4.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-DryFq-7B.js';
import './enums-CSCQSgBu.js';
import './moment-Mki5YqAR.js';
import './types-BWKgfE54.js';
import './utils-B69q7mr1.js';
import './calendar-data-CiYzaNK0.js';
import './locales.store-CXJn6ls-.js';
import './booking.dto-xX-uaIxb.js';
import './type-DahsFfOq.js';
import './ir-date-BngUhoPp.js';
import './language-observer-CHgzsZkY.js';
import './index-Bq90uvWE.js';
import './commonSchemas-DOpzu-TI.js';
import './locale.controller-CTJvh9SC.js';
import './types-vTVnj3si.js';

const irClCreditNotePreviewCss = () => `:host{display:block;font-family:system-ui,     -apple-system,     sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}`;

const IrClCreditNotePreview = class {
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
    externalRef;
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
            const { property, transactions } = await this.dataService.fetchData(this.propertyId, this.agentId, this.externalRef);
            this.property = property;
            this.transactions = transactions;
        }
        catch (e) {
            this.error = e?.message ?? t('Lcz_FailedToLoadCreditNoteData', { fallback: 'Failed to load credit note data.' });
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
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "creditnote" }), h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$', invertAmounts: true }))));
    }
};
IrClCreditNotePreview.style = irClCreditNotePreviewCss();

export { IrClCreditNotePreview as ir_cl_credit_note_preview };
