import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { C as ClFiscalDocumentService } from './cl-fiscal-document.service-CCUFp-9M.js';
import { t } from './t-Bvz1wS_D.js';
import './ApiClient-DdQhte67.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index-CdcUBnuL.js';
import './enums-CcLtXwvz.js';
import './moment-Mki5YqAR.js';
import './types-BLb1NO3I.js';
import './utils-DiIdT3fV.js';
import './calendar-data-D4DbXAhg.js';
import './locale-scope-Jre4lb6k.js';
import './booking.dto-DQx6bzbY.js';
import './type-D_dKkSLY.js';
import './ir-date-CY_qGQ63.js';
import './language-observer-CHgzsZkY.js';
import './calendar-dates-D3hVfsrC.js';
import './index-VBF8lYoB.js';
import './commonSchemas-BNnUj2OT.js';
import './locale.controller-CGuPWCIw.js';
import './types-f1klcCJA.js';

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
            this.error = e?.message ?? t('Lcz_FailedToLoadInvoiceData', { fallback: 'Failed to load invoice data.' });
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
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "invoice" }), h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$' }))));
    }
};
IrClInvoicePreview.style = irClInvoicePreviewCss();

export { IrClInvoicePreview as ir_cl_invoice_preview };
