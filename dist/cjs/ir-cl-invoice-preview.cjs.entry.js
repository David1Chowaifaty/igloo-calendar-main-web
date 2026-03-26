'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const utils = require('./utils-dc8cc4b1.js');
const Token = require('./Token-8fd11984.js');
const index$1 = require('./index-8f8c7b18.js');
const property_service = require('./property.service-aebaaf8d.js');
const moment = require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');
require('./type-393ac773.js');
require('./axios-6e678d52.js');

const irClInvoicePreviewCss = ":host{display:block;font-family:system-ui, -apple-system, sans-serif;color:#1a1a1a}.invoice-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.invoice-state--error{color:#dc2626}.invoice{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.invoice-header{display:flex;justify-content:space-between;align-items:flex-start;gap:2rem}.invoice-header__property{display:flex;gap:1rem;align-items:flex-start}.invoice-header__logo{height:56px;width:auto;object-fit:contain;flex-shrink:0}.invoice-header__property-info{display:flex;flex-direction:column;gap:0.15rem}.invoice-header__property-name{margin:0 0 0.25rem;font-size:1.125rem;font-weight:700;color:#111827}.invoice-header__address,.invoice-header__contact{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}.invoice-header__tax-nbr{margin:0.25rem 0 0;font-size:0.8125rem;color:#6b7280}.invoice-header__meta{text-align:right;flex-shrink:0}.invoice-header__title{margin:0 0 0.75rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827}.invoice-header__meta-row{display:flex;justify-content:flex-end;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice-header__meta-label{color:#9ca3af;font-weight:500}.invoice-header__meta-value{color:#111827;font-weight:600;min-width:140px;text-align:right}.invoice-divider{border:none;border-top:1px solid #e5e7eb;margin:1.5rem 0}.invoice-bill-to{margin-bottom:1.5rem}.invoice-bill-to__label{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af}.invoice-bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__table{width:100%;border-collapse:collapse;font-size:0.8125rem}.invoice-items__th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#6b7280;background:#f9fafb;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}.invoice-items__th--num{text-align:right}.invoice-items__row:hover{background:#f9fafb}.invoice-items__td{padding:0.625rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:top}.invoice-items__td--index{color:#9ca3af;width:2rem}.invoice-items__td--booking{font-family:monospace;font-size:0.8rem;color:#6b7280}.invoice-items__td--dates{white-space:nowrap;color:#6b7280}.invoice-items__td--num{text-align:right;font-variant-numeric:tabular-nums;font-weight:500}.invoice-items__empty{padding:2rem;text-align:center;color:#9ca3af}.invoice-totals{display:flex;justify-content:flex-end}.invoice-totals__grid{display:grid;grid-template-columns:auto auto;column-gap:2.5rem;row-gap:0.375rem;align-items:center;min-width:260px}.invoice-totals__label{font-size:0.8125rem;color:#6b7280;text-align:left}.invoice-totals__value{font-size:0.8125rem;font-variant-numeric:tabular-nums;font-weight:500;text-align:right;color:#111827}.invoice-totals__divider{grid-column:span 1;border-top:1px solid #e5e7eb;margin:0.25rem 0}.invoice-totals__label--total{font-size:0.9375rem;font-weight:700;color:#111827}.invoice-totals__value--total{font-size:0.9375rem;font-weight:700;color:#111827}";
const IrClInvoicePreviewStyle0 = irClInvoicePreviewCss;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClInvoicePreview = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    propertyId;
    ticket;
    baseurl;
    fromDate;
    toDate;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    error = null;
    property = null;
    transactions = [];
    tokenService = new Token.Token();
    propertyService = new property_service.PropertyService();
    cityLedgerService = new index$1.CityLedgerService();
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
            const start = this.fromDate ?? moment.hooks().subtract(2, 'years').format('YYYY-MM-DD');
            const end = this.toDate ?? moment.hooks().format('YYYY-MM-DD');
            const [propertyData, clResult] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
                this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.agentId,
                    START_DATE: start,
                    END_DATE: end,
                    START_ROW: 0,
                    END_ROW: 1000,
                    SEARCH_QUERY: this.documentNumber,
                }),
            ]);
            this.property = propertyData?.My_Result ?? null;
            this.transactions = clResult?.My_Cl_tx ?? [];
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load invoice data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    get totals() {
        return this.transactions.reduce((acc, tx) => ({
            net: acc.net + (tx.NET_AMOUNT ?? 0),
            tax: acc.tax + (tx.TAX_AMOUNT ?? 0),
            total: acc.total + (tx.TOTAL_AMOUNT ?? 0),
            debit: acc.debit + (tx.DEBIT ?? 0),
            credit: acc.credit + (tx.CREDIT ?? 0),
        }), { net: 0, tax: 0, total: 0, debit: 0, credit: 0 });
    }
    get currencySymbol() {
        return this.property?.currency?.symbol ?? '$';
    }
    get primaryContact() {
        return this.property?.contacts?.find(c => c.type === 'marketing') ?? this.property?.contacts?.[0];
    }
    renderMoney(amount) {
        return utils.formatAmount(this.currencySymbol, amount);
    }
    renderHeader() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        return (index.h("header", { class: "invoice-header" }, index.h("div", { class: "invoice-header__property" }, logo && index.h("img", { class: "invoice-header__logo", src: logo, alt: p?.name }), index.h("div", { class: "invoice-header__property-info" }, index.h("h1", { class: "invoice-header__property-name" }, p?.name), p?.address && index.h("p", { class: "invoice-header__address" }, p.address), p?.city && index.h("p", { class: "invoice-header__address" }, p.city?.name), p?.country && index.h("p", { class: "invoice-header__address" }, p.country?.name), p?.phone && index.h("p", { class: "invoice-header__contact" }, p.phone), this.primaryContact?.email && index.h("p", { class: "invoice-header__contact" }, this.primaryContact.email), p?.tax_nbr && index.h("p", { class: "invoice-header__tax-nbr" }, "Tax Reg: ", p.tax_nbr))), index.h("div", { class: "invoice-header__meta" }, index.h("h2", { class: "invoice-header__title" }, "INVOICE"), this.documentNumber && (index.h("div", { class: "invoice-header__meta-row" }, index.h("span", { class: "invoice-header__meta-label" }, "Document #"), index.h("span", { class: "invoice-header__meta-value" }, this.documentNumber))), index.h("div", { class: "invoice-header__meta-row" }, index.h("span", { class: "invoice-header__meta-label" }, "Date"), index.h("span", { class: "invoice-header__meta-value" }, moment.hooks().format(DATE_DISPLAY))), (this.fromDate || this.toDate) && (index.h("div", { class: "invoice-header__meta-row" }, index.h("span", { class: "invoice-header__meta-label" }, "Period"), index.h("span", { class: "invoice-header__meta-value" }, this.fromDate ? moment.hooks(this.fromDate).format(DATE_DISPLAY) : '—', " \u2013", ' ', this.toDate ? moment.hooks(this.toDate).format(DATE_DISPLAY) : '—'))))));
    }
    renderBillTo() {
        if (!this.agentName)
            return null;
        return (index.h("section", { class: "invoice-bill-to" }, index.h("p", { class: "invoice-bill-to__label" }, "Bill To"), index.h("p", { class: "invoice-bill-to__name" }, this.agentName)));
    }
    renderLineItems() {
        return (index.h("section", { class: "invoice-items" }, index.h("table", { class: "invoice-items__table" }, index.h("thead", null, index.h("tr", null, index.h("th", { class: "invoice-items__th" }, "#"), index.h("th", { class: "invoice-items__th" }, "Description"), index.h("th", { class: "invoice-items__th" }, "Guest"), index.h("th", { class: "invoice-items__th" }, "Booking"), index.h("th", { class: "invoice-items__th" }, "Stay"), index.h("th", { class: "invoice-items__th invoice-items__th--num" }, "Charges"), index.h("th", { class: "invoice-items__th invoice-items__th--num" }, "Payments"))), index.h("tbody", null, this.transactions.length === 0 ? (index.h("tr", null, index.h("td", { class: "invoice-items__empty", colSpan: 7 }, "No transactions found for this document."))) : (this.transactions.map((tx, i) => (index.h("tr", { key: tx.CL_TX_ID, class: "invoice-items__row" }, index.h("td", { class: "invoice-items__td invoice-items__td--index" }, i + 1), index.h("td", { class: "invoice-items__td" }, tx.DESCRIPTION || '—'), index.h("td", { class: "invoice-items__td" }, tx.GUEST_FIRST_NAME, " ", tx.GUEST_LAST_NAME), index.h("td", { class: "invoice-items__td invoice-items__td--booking" }, tx.BOOK_NBR), index.h("td", { class: "invoice-items__td invoice-items__td--dates" }, tx.FROM_DATE ? moment.hooks(tx.FROM_DATE).format(DATE_DISPLAY) : '—', tx.TO_DATE ? ` – ${moment.hooks(tx.TO_DATE).format(DATE_DISPLAY)}` : ''), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, tx.DEBIT ? this.renderMoney(tx.DEBIT) : '—'), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, tx.CREDIT ? this.renderMoney(tx.CREDIT) : '—')))))))));
    }
    renderTotals() {
        const t = this.totals;
        return (index.h("section", { class: "invoice-totals" }, index.h("div", { class: "invoice-totals__grid" }, index.h("span", { class: "invoice-totals__label" }, "Net Amount"), index.h("span", { class: "invoice-totals__value" }, this.renderMoney(t.net)), index.h("span", { class: "invoice-totals__label" }, "Taxes"), index.h("span", { class: "invoice-totals__value" }, this.renderMoney(t.tax)), index.h("div", { class: "invoice-totals__divider" }), index.h("div", { class: "invoice-totals__divider" }), index.h("span", { class: "invoice-totals__label invoice-totals__label--total" }, "Total"), index.h("span", { class: "invoice-totals__value invoice-totals__value--total" }, this.renderMoney(t.total)))));
    }
    render() {
        if (!this.ticket) {
            return (index.h(index.Host, null, index.h("div", { class: "invoice-state invoice-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (index.h(index.Host, null, index.h("div", { class: "invoice-state" }, index.h("ir-spinner", null))));
        }
        if (this.error) {
            return (index.h(index.Host, null, index.h("div", { class: "invoice-state invoice-state--error" }, this.error)));
        }
        return (index.h(index.Host, null, index.h("div", { class: "invoice" }, this.renderHeader(), index.h("hr", { class: "invoice-divider" }), this.renderBillTo(), this.renderLineItems(), this.renderTotals())));
    }
};
IrClInvoicePreview.style = IrClInvoicePreviewStyle0;

exports.ir_cl_invoice_preview = IrClInvoicePreview;

//# sourceMappingURL=ir-cl-invoice-preview.cjs.entry.js.map