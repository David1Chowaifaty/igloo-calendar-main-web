'use strict';

var index = require('./index-CJ0kc5p1.js');
var clFiscalDocument_service = require('./cl-fiscal-document.service-DeLd0ypR.js');
require('./Token-BVmOLolB.js');
require('./axios-C-Phc0sj.js');
require('./index-HFHVTkTI.js');
require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./utils-CHYeTDt_.js');
require('./calendar-data-CTxCbso4.js');
require('./index-dbmC5P-h.js');
require('./locales.store-BfrChT1G.js');
require('./type-Dy9pVS4V.js');
require('./property.service-CH05g0x-.js');

const irClInvoicePreviewCss = () => `:host{display:block;font-family:system-ui,     -apple-system,     sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}`;

const IrClInvoicePreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady");
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
    dataService = new clFiscalDocument_service.ClFiscalDocumentService();
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
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, this.error)));
        }
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '2.5rem' }, property: this.property, documentNumber: this.documentNumber, agentName: this.agentName, documentType: "invoice" }), index.h("ir-cl-fiscal-document-table", { transactions: this.transactions, currencySymbol: this.property?.currency?.symbol ?? '$' }))));
    }
};
IrClInvoicePreview.style = irClInvoicePreviewCss();

exports.ir_cl_invoice_preview = IrClInvoicePreview;
