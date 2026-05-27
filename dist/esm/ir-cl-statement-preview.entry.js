import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { C as CityLedgerService } from './index-89781f6d.js';
import { P as PropertyService } from './property.service-2a20c6f9.js';
import { f as formatAmount } from './utils-c81c2ca7.js';
import { T as Token } from './Token-030c78a9.js';
import { h as hooks } from './moment-ab846cee.js';
import { F as FdTypes } from './enums-25d9e9fb.js';
import './axios-aa1335b8.js';
import './index-87419685.js';
import './calendar-data-b1f645da.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';
import './type-501de9b6.js';

const irClStatementPreviewCss = ".cl-table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.cl-th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:capitalize;color:#374151;border-top:2px solid #111827;border-bottom:1px solid #111827;white-space:nowrap}.cl-th--num{text-align:right}.cl-td{padding:0.45rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle}.cl-td--num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.cl-td--muted{color:#6b7280}.cl-td--bold{font-weight:700;color:#111827}.cl-td--nowrap{white-space:nowrap}.cl-td--empty{text-align:center;color:#6b7280;padding:1.5rem 0.75rem;font-style:italic}.cl-balance-row td{background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;padding-top:0.5rem;padding-bottom:0.5rem}@media print{.cl-table{font-size:0.75rem}.cl-th,.cl-td{padding:0.35rem 0.5rem}.cl-td--muted,.cl-td--empty{color:#374151}.cl-balance-row td{-webkit-print-color-adjust:exact;print-color-adjust:exact}.cl-balance-row{page-break-inside:avoid}}:host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:960px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.statement-period{display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;padding:0.5rem 0.75rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;font-size:0.8125rem}.statement-period__label{font-weight:600;color:#374151}.statement-period__value{color:#374151}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}}";
const IrClStatementPreviewStyle0 = irClStatementPreviewCss;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClStatementPreview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clPreviewReady = createEvent(this, "clPreviewReady", 7);
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
    tokenService = new Token();
    propertyService = new PropertyService();
    cityLedgerService = new CityLedgerService();
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
                    LIST_FD_TYPE_CODE: [FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Invoice, FdTypes.Receipt],
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
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "document-state" }, h("ir-spinner", null))));
        }
        if (this.error) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, this.error)));
        }
        if (!this.statement) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "No statement data found.")));
        }
        const { STARTING_BALANCE, ENDING_BALANCE } = this.statement;
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? formatAmount(currency, v) : '—');
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '1.75rem' }, property: this.property, agentName: this.agentName, documentType: "statement" }), h("table", { class: "cl-table" }, h("thead", null, h("tr", null, h("th", { class: "cl-th" }, "Date"), h("th", { class: "cl-th" }, "Document #"), h("th", { class: "cl-th" }, "Type"), h("th", { class: "cl-th cl-th--num" }, "Debit"), h("th", { class: "cl-th cl-th--num" }, "Credit"), h("th", { class: "cl-th cl-th--num" }, "Balance"))), h("tbody", null, h("tr", { class: "cl-balance-row" }, h("td", { class: "cl-td", colSpan: 3 }, "Opening Balance \u2014 ", hooks(this.fromDate).format(DATE_DISPLAY)), h("td", { class: "cl-td" }), h("td", { class: "cl-td" }), h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(STARTING_BALANCE))), (() => {
            let running = STARTING_BALANCE;
            return this.fiscalDocuments.map(doc => {
                running += (doc.DEBIT ?? 0) - (doc.CREDIT ?? 0);
                return (h("tr", null, h("td", { class: "cl-td cl-td--nowrap" }, doc.ISSUE_DATE_DISPLAY || (doc.ISSUE_DATE ? hooks(doc.ISSUE_DATE).format(DATE_DISPLAY) : '—')), h("td", { class: "cl-td" }, doc.DOC_NUMBER || '—'), h("td", { class: "cl-td" }, doc.FD_TYPE_NAME || '—'), h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.DEBIT ? fmt(doc.DEBIT) : '—'), h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.CREDIT ? fmt(doc.CREDIT) : '—'), h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(running))));
            });
        })(), this.fiscalDocuments.length === 0 && (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: 6 }, "No fiscal documents found for this period."))), h("tr", { class: "cl-balance-row" }, h("td", { class: "cl-td", colSpan: 3 }, "Closing Balance \u2014 ", hooks(this.toDate).format(DATE_DISPLAY)), h("td", { class: "cl-td" }), h("td", { class: "cl-td" }), h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(ENDING_BALANCE))))))));
    }
};
IrClStatementPreview.style = IrClStatementPreviewStyle0;

export { IrClStatementPreview as ir_cl_statement_preview };

//# sourceMappingURL=ir-cl-statement-preview.entry.js.map