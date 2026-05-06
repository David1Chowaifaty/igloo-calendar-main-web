'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const index$1 = require('./index-56efbd42.js');
const property_service = require('./property.service-e5844362.js');
const utils = require('./utils-e4cb6b2d.js');
const Token = require('./Token-8fd11984.js');
const moment = require('./moment-1780b03a.js');
const enums = require('./enums-d462d3a9.js');
require('./axios-6e678d52.js');
require('./index-8bb117a0.js');
require('./calendar-data-70bc3b4b.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');
require('./type-87fd01b8.js');

const irClStatementPreviewCss = ".cl-table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.cl-th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:capitalize;color:#374151;border-top:2px solid #111827;border-bottom:1px solid #111827;white-space:nowrap}.cl-th--num{text-align:right}.cl-td{padding:0.45rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle}.cl-td--num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.cl-td--muted{color:#6b7280}.cl-td--bold{font-weight:700;color:#111827}.cl-td--nowrap{white-space:nowrap}.cl-td--empty{text-align:center;color:#6b7280;padding:1.5rem 0.75rem;font-style:italic}.cl-balance-row td{background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;padding-top:0.5rem;padding-bottom:0.5rem}@media print{.cl-table{font-size:0.75rem}.cl-th,.cl-td{padding:0.35rem 0.5rem}.cl-td--muted,.cl-td--empty{color:#374151}.cl-balance-row td{-webkit-print-color-adjust:exact;print-color-adjust:exact}.cl-balance-row{page-break-inside:avoid}}:host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:960px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.statement-period{display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;padding:0.5rem 0.75rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;font-size:0.8125rem}.statement-period__label{font-weight:600;color:#374151}.statement-period__value{color:#374151}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClStatementPreviewStyle0 = irClStatementPreviewCss;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClStatementPreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clPreviewReady = index.createEvent(this, "clPreviewReady", 7);
    }
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    fromDate;
    toDate;
    currencyId;
    isLoading = false;
    error = null;
    property = null;
    statement = null;
    fiscalDocuments = [];
    clPreviewReady;
    tokenService = new Token.Token();
    propertyService = new property_service.PropertyService();
    cityLedgerService = new index$1.CityLedgerService();
    hasEmitted = false;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        if (this.baseurl)
            this.tokenService.setBaseUrl(this.baseurl);
        this.tokenService.setToken(this.ticket);
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
            const [propertyData, statement, fiscalDocuments] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                }),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                    LIST_FD_TYPE_CODE: [enums.FdTypes.CreditNote, enums.FdTypes.DebitNote, enums.FdTypes.Invoice, enums.FdTypes.Receipt],
                }),
            ]);
            this.property = propertyData?.My_Result ?? null;
            this.statement = statement;
            this.fiscalDocuments = fiscalDocuments ?? [];
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load statement data.';
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
        if (!this.statement) {
            return (index.h(index.Host, null, index.h("div", { class: "document-state document-state--error" }, "No statement data found.")));
        }
        const { STARTING_BALANCE, ENDING_BALANCE } = this.statement;
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? utils.formatAmount(currency, v) : '—');
        return (index.h(index.Host, null, index.h("div", { class: "document" }, index.h("ir-cl-document-header", { style: { marginBottom: '1.75rem' }, property: this.property, agentName: this.agentName, documentType: "statement" }), index.h("table", { class: "cl-table" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: "cl-th" }, "Date"), index.h("th", { class: "cl-th" }, "Document #"), index.h("th", { class: "cl-th" }, "Type"), index.h("th", { class: "cl-th cl-th--num" }, "Debit"), index.h("th", { class: "cl-th cl-th--num" }, "Credit"), index.h("th", { class: "cl-th cl-th--num" }, "Balance"))), index.h("tbody", null, index.h("tr", { class: "cl-balance-row" }, index.h("td", { class: "cl-td", colSpan: 3 }, "Opening Balance \u2014 ", moment.hooks(this.fromDate).format(DATE_DISPLAY)), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(STARTING_BALANCE))), (() => {
            let running = STARTING_BALANCE;
            return this.fiscalDocuments.map(doc => {
                running += (doc.DEBIT ?? 0) - (doc.CREDIT ?? 0);
                return (index.h("tr", null, index.h("td", { class: "cl-td cl-td--nowrap" }, doc.ISSUE_DATE_DISPLAY || (doc.ISSUE_DATE ? moment.hooks(doc.ISSUE_DATE).format(DATE_DISPLAY) : '—')), index.h("td", { class: "cl-td" }, doc.DOC_NUMBER || '—'), index.h("td", { class: "cl-td" }, doc.FD_TYPE_NAME || '—'), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.DEBIT ? fmt(doc.DEBIT) : '—'), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.CREDIT ? fmt(doc.CREDIT) : '—'), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(running))));
            });
        })(), this.fiscalDocuments.length === 0 && (index.h("tr", null, index.h("td", { class: "cl-td cl-td--empty", colSpan: 6 }, "No fiscal documents found for this period."))), index.h("tr", { class: "cl-balance-row" }, index.h("td", { class: "cl-td", colSpan: 3 }, "Closing Balance \u2014 ", moment.hooks(this.toDate).format(DATE_DISPLAY)), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(ENDING_BALANCE))))))));
    }
};
IrClStatementPreview.style = IrClStatementPreviewStyle0;

exports.ir_cl_statement_preview = IrClStatementPreview;

//# sourceMappingURL=ir-cl-statement-preview.cjs.entry.js.map