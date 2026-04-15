import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { C as CityLedgerService } from './index6.js';
import { P as PropertyService } from './property.service.js';
import { f as formatAmount } from './utils.js';
import { T as Token } from './Token.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$2 } from './ir-cl-document-header2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irClStatementPreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.document-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.document-state--error{color:#dc2626}.document{max-width:960px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.statement-period{display:flex;align-items:center;gap:0.5rem;margin-bottom:1.25rem;padding:0.5rem 0.75rem;background:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;font-size:0.8125rem}.statement-period__label{font-weight:600;color:#374151}.statement-period__value{color:#374151}.stmt-table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.stmt-th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#374151;border-top:2px solid #111827;border-bottom:1px solid #111827;white-space:nowrap}.stmt-th--num{text-align:right}.stmt-th--date{white-space:nowrap}.stmt-td{padding:0.45rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle}.stmt-td--date{white-space:nowrap;color:#374151}.stmt-td--doc{white-space:nowrap;color:#374151}.stmt-td--num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.stmt-td--bold{font-weight:700;color:#111827}.stmt-row--balance td{background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;padding-top:0.5rem;padding-bottom:0.5rem}@media print{:host{display:block;width:100%}.document{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}.stmt-table{font-size:0.75rem}.stmt-th,.stmt-td{padding:0.35rem 0.5rem}.stmt-row--balance td{-webkit-print-color-adjust:exact;print-color-adjust:exact}.stmt-row--balance{page-break-inside:avoid}}";
const IrClStatementPreviewStyle0 = irClStatementPreviewCss;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClStatementPreview = /*@__PURE__*/ proxyCustomElement(class IrClStatementPreview extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
    tokenService = new Token();
    propertyService = new PropertyService();
    cityLedgerService = new CityLedgerService();
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
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const [propertyData, statement] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                }),
            ]);
            this.property = propertyData?.My_Result ?? null;
            this.statement = statement;
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
        const { STARTING_BALANCE, ENDING_BALANCE, My_Rows } = this.statement;
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? formatAmount(currency, v) : '—');
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '1.75rem' }, property: this.property, agentName: this.agentName, documentType: "statement" }), h("table", { class: "stmt-table" }, h("thead", null, h("tr", null, h("th", { class: "stmt-th stmt-th--date" }, "Date"), h("th", { class: "stmt-th" }, "Description"), h("th", { class: "stmt-th" }, "Document #"), h("th", { class: "stmt-th stmt-th--num" }, "Debit"), h("th", { class: "stmt-th stmt-th--num" }, "Credit"), h("th", { class: "stmt-th stmt-th--num" }, "Balance"))), h("tbody", null, h("tr", { class: "stmt-row stmt-row--balance" }, h("td", { class: "stmt-td", colSpan: 3 }, "Opening Balance \u2014 ", hooks(this.fromDate).format(DATE_DISPLAY)), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td stmt-td--num stmt-td--bold" }, fmt(STARTING_BALANCE))), My_Rows?.map(row => {
            const tx = row?.Cl_tx;
            if (!tx)
                return null;
            return (h("tr", { class: "stmt-row" }, h("td", { class: "stmt-td stmt-td--date" }, tx.SERVICE_DATE ? hooks(tx.SERVICE_DATE).format(DATE_DISPLAY) : '—'), h("td", { class: "stmt-td" }, tx.DESCRIPTION || '—'), h("td", { class: "stmt-td stmt-td--doc" }, row.DOC_NUMBER || '—'), h("td", { class: "stmt-td stmt-td--num" }, tx.DEBIT ? fmt(tx.DEBIT) : '—'), h("td", { class: "stmt-td stmt-td--num" }, tx.CREDIT ? fmt(tx.CREDIT) : '—'), h("td", { class: "stmt-td stmt-td--num" }, fmt(row.RUNNING_BALANCE))));
        }), h("tr", { class: "stmt-row stmt-row--balance" }, h("td", { class: "stmt-td", colSpan: 3 }, "Closing Balance \u2014 ", hooks(this.toDate).format(DATE_DISPLAY)), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td stmt-td--num stmt-td--bold" }, fmt(ENDING_BALANCE))))))));
    }
    static get style() { return IrClStatementPreviewStyle0; }
}, [1, "ir-cl-statement-preview", {
        "propertyId": [2, "property-id"],
        "ticket": [1],
        "baseurl": [1],
        "agentId": [2, "agent-id"],
        "agentName": [1, "agent-name"],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "currencyId": [2, "currency-id"],
        "isLoading": [32],
        "error": [32],
        "property": [32],
        "statement": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-statement-preview", "ir-cl-document-header", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-statement-preview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClStatementPreview);
            }
            break;
        case "ir-cl-document-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClStatementPreview as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-statement-preview2.js.map