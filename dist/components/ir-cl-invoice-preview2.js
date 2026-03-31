import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { T as Token } from './Token.js';
import { C as CityLedgerService } from './index6.js';
import { P as PropertyService } from './property.service.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

/**
 * Groups a flat array of transaction rows into a two-level hierarchy,
 * then sorts every level so the oldest SERVICE_DATE appears first.
 *
 * Level 1 — Booking groups:
 *   Rows that share the same BOOK_NBR are collapsed into a parent object
 *   { BOOK_NBR, subRows: [...] }. Rows with no BOOK_NBR are kept flat.
 *   The top-level array is sorted by each item's oldest SERVICE_DATE so that
 *   a booking group is "pulled up" by whichever of its rows has the earliest date.
 *
 * Level 2 — Unit groups (inside each booking's subRows):
 *   Within a booking, rows that share the same PR_ID (room/unit identifier)
 *   are further collapsed into { PR_ID, subRows: [...] }.
 *   Rows with PR_ID = 0 / null, or whose PR_ID is unique within the booking,
 *   are kept flat inside the booking's subRows.
 *   The booking's subRows array is sorted by each item's oldest SERVICE_DATE
 *   so that a unit group is pulled up by its earliest row.
 *
 *   The rows inside each unit group are also sorted oldest-first.
 *
 * @param  rows - Raw transaction rows from the API.
 * @returns {Array} Grouped and sorted rows ready for rendering.
 */
const groupData = (rows) => {
    // ── Sorting helper ────────────────────────────────────────────────────────
    /**
     * Returns the oldest SERVICE_DATE found within an item.
     * If the item is a group (has subRows), recurse to find the minimum date
     * across all descendants. If it is a plain row, return its own SERVICE_DATE.
     *
     * @param {Object} item - A plain row or a group object with subRows.
     * @returns {string} ISO date string (YYYY-MM-DD), or '' if none found.
     */
    const getOldestDate = item => {
        if (item.subRows && item.subRows.length > 0) {
            // Item is a group — collect the oldest date from each child recursively
            return item.subRows.reduce((oldest, child) => {
                const childDate = getOldestDate(child); // recurse into nested groups
                if (!oldest)
                    return childDate; // first child sets the baseline
                return childDate < oldest ? childDate : oldest; // keep the earlier date
            }, '');
        }
        // Plain row — its own SERVICE_DATE is the anchor date
        return item.SERVICE_DATE ?? '';
    };
    /**
     * Sorts an array of items (plain rows or groups) ascending by oldest SERVICE_DATE.
     * Mutates the array in place and returns it for convenience.
     *
     * @param {Array} arr - Mixed array of plain rows and/or group objects.
     * @returns {Array} The same array, sorted oldest-first.
     */
    const sortByOldestDate = arr => {
        return arr.sort((a, b) => {
            const dateA = getOldestDate(a); // anchor date for item a
            const dateB = getOldestDate(b); // anchor date for item b
            return dateA.localeCompare(dateB); // lexicographic compare works for YYYY-MM-DD
        });
    };
    // ── Level 1: split rows into "no booking" vs "has booking" ──────────────
    const standalone = []; // rows with no BOOK_NBR — rendered at the top level as-is
    const bookingMap = new Map(); // BOOK_NBR → array of rows belonging to that booking
    for (const row of rows) {
        if (!row.BOOK_NBR) {
            // No booking number → keep this row flat at the top level
            standalone.push(row);
        }
        else {
            // First time we see this booking number → initialize its bucket
            if (!bookingMap.has(row.BOOK_NBR)) {
                bookingMap.set(row.BOOK_NBR, []);
            }
            // Add the row to its booking bucket
            bookingMap.get(row.BOOK_NBR).push(row);
        }
    }
    // ── Level 2: within each booking, group rows by PR_ID (unit/room) ───────
    /**
     * Takes the flat rows of a single booking and returns a mixed array where
     * rows sharing the same non-zero PR_ID are wrapped in a unit-group object,
     * while unique or PR_ID-less rows are kept as plain row objects.
     * The resulting array — and the rows inside each unit group — are sorted
     * oldest SERVICE_DATE first.
     *
     * @param {Array} bookingRows - All rows belonging to one booking.
     * @returns {Array} Sorted mixed array of plain rows and unit-group objects.
     */
    const groupByUnit = bookingRows => {
        // Count how many rows share each PR_ID so we know which ones to group
        const prIdCount = new Map();
        for (const row of bookingRows) {
            if (!row.PR_ID)
                continue; // skip 0 / null — those are never grouped
            prIdCount.set(row.PR_ID, (prIdCount.get(row.PR_ID) ?? 0) + 1);
        }
        const unitStandalone = []; // rows that won't be grouped (unique PR_ID or no PR_ID)
        const unitMap = new Map(); // PR_ID → rows that share it (only those with count > 1)
        for (const row of bookingRows) {
            const isGroupable = row.PR_ID && prIdCount.get(row.PR_ID) > 1;
            if (!isGroupable) {
                // PR_ID is missing, zero, or unique within this booking → render flat
                unitStandalone.push(row);
            }
            else {
                // Multiple rows share this PR_ID → collect them into a unit group
                if (!unitMap.has(row.PR_ID)) {
                    unitMap.set(row.PR_ID, []);
                }
                unitMap.get(row.PR_ID).push(row);
            }
        }
        // Build the unit-group objects from the collected buckets
        const unitGroups = [];
        for (const [prId, subRows] of unitMap.entries()) {
            unitGroups.push({
                PR_ID: prId, // identifier for this unit/room group
                subRows: sortByOldestDate(subRows), // sort the leaf rows inside the unit oldest-first
            });
        }
        // Merge flat rows and unit groups into one array, then sort the whole
        // level-2 list so items with the earliest date bubble to the top
        return sortByOldestDate([...unitStandalone, ...unitGroups]);
    };
    // ── Assemble final result ─────────────────────────────────────────────────
    const bookingGroups = [];
    for (const [bookNbr, bookingRows] of bookingMap.entries()) {
        bookingGroups.push({
            BOOK_NBR: bookNbr, // booking number that identifies this group
            subRows: groupByUnit(bookingRows), // level-2 grouped and sorted rows
        });
    }
    // Merge standalone rows and booking groups, then sort the entire top-level
    // array so items (or groups) with the oldest date appear first
    return sortByOldestDate([...standalone, ...bookingGroups]);
};

const irClInvoicePreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.invoice-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.invoice-state--error{color:#dc2626}.invoice{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.invoice-header{display:flex;justify-content:space-between;align-items:flex-start;gap:2rem}.invoice-header__property{display:flex;gap:1rem;align-items:flex-start}.invoice-header__logo{height:56px;width:auto;object-fit:contain;flex-shrink:0}.invoice-header__property-info{display:flex;flex-direction:column;gap:0.15rem}.invoice-header__property-name{margin:0 0 0.25rem;font-size:1.125rem;font-weight:700;color:#111827}.invoice-header__address,.invoice-header__contact{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}.invoice-header__tax-nbr{margin:0.25rem 0 0;font-size:0.8125rem;color:#6b7280}.invoice-header__meta{text-align:right;flex-shrink:0}.invoice-header__title{margin:0 0 0.75rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827}.invoice-header__meta-row{display:flex;justify-content:flex-end;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice-header__meta-label{color:#9ca3af;font-weight:500}.invoice-header__meta-value{color:#111827;font-weight:600;min-width:140px;text-align:right}.invoice-divider{border:none;border-top:1px solid #e5e7eb;margin:1.5rem 0}.invoice-bill-to{margin-bottom:1.5rem}.invoice-bill-to__label{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#9ca3af}.invoice-bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__table{width:100%;border-collapse:collapse;font-size:0.8125rem}.invoice-items__th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:#6b7280;background:#f9fafb;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}.invoice-items__th--num{text-align:right}.invoice-items__row:hover{background:#f9fafb}.invoice-items__td{padding:0.625rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:top}.invoice-items__td--index{color:#9ca3af;width:2rem}.invoice-items__td--booking{font-family:monospace;font-size:0.8rem;color:#6b7280}.invoice-items__td--dates{white-space:nowrap;color:#6b7280}.invoice-items__td--num{text-align:right;font-variant-numeric:tabular-nums;font-weight:500}.invoice-items__empty{padding:2rem;text-align:center;color:#9ca3af}.invoice-totals{display:flex;justify-content:flex-end}.invoice-totals__grid{display:grid;grid-template-columns:auto auto;column-gap:2.5rem;row-gap:0.375rem;align-items:center;min-width:260px}.invoice-totals__label{font-size:0.8125rem;color:#6b7280;text-align:left}.invoice-totals__value{font-size:0.8125rem;font-variant-numeric:tabular-nums;font-weight:500;text-align:right;color:#111827}.invoice-totals__divider{grid-column:span 1;border-top:1px solid #e5e7eb;margin:0.25rem 0}.invoice-totals__label--total{font-size:0.9375rem;font-weight:700;color:#111827}.invoice-totals__value--total{font-size:0.9375rem;font-weight:700;color:#111827}@media print{.invoice{box-shadow:none;width:100%;max-width:100%;border-radius:0}}";
const IrClInvoicePreviewStyle0 = irClInvoicePreviewCss;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClInvoicePreview = /*@__PURE__*/ proxyCustomElement(class IrClInvoicePreview extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
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
            const start = this.fromDate ?? hooks().subtract(2, 'years').format('YYYY-MM-DD');
            const end = this.toDate ?? hooks().format('YYYY-MM-DD');
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
        return formatAmount(this.currencySymbol, amount);
    }
    renderHeader() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        return (h("header", { class: "invoice-header" }, h("div", { class: "invoice-header__property" }, logo && h("img", { class: "invoice-header__logo", src: logo, alt: p?.name }), h("div", { class: "invoice-header__property-info" }, h("h1", { class: "invoice-header__property-name" }, p?.name), p?.address && h("p", { class: "invoice-header__address" }, p.address), p?.city && h("p", { class: "invoice-header__address" }, p.city?.name), p?.country && h("p", { class: "invoice-header__address" }, p.country?.name), p?.phone && h("p", { class: "invoice-header__contact" }, p.phone), this.primaryContact?.email && h("p", { class: "invoice-header__contact" }, this.primaryContact.email), p?.tax_nbr && h("p", { class: "invoice-header__tax-nbr" }, "Tax Reg: ", p.tax_nbr))), h("div", { class: "invoice-header__meta" }, h("h2", { class: "invoice-header__title" }, "INVOICE"), this.documentNumber && (h("div", { class: "invoice-header__meta-row" }, h("span", { class: "invoice-header__meta-label" }, "Document #"), h("span", { class: "invoice-header__meta-value" }, this.documentNumber))), h("div", { class: "invoice-header__meta-row" }, h("span", { class: "invoice-header__meta-label" }, "Date"), h("span", { class: "invoice-header__meta-value" }, hooks().format(DATE_DISPLAY))), (this.fromDate || this.toDate) && (h("div", { class: "invoice-header__meta-row" }, h("span", { class: "invoice-header__meta-label" }, "Period"), h("span", { class: "invoice-header__meta-value" }, this.fromDate ? hooks(this.fromDate).format(DATE_DISPLAY) : '—', " \u2013 ", this.toDate ? hooks(this.toDate).format(DATE_DISPLAY) : '—'))))));
    }
    renderBillTo() {
        if (!this.agentName)
            return null;
        return (h("section", { class: "invoice-bill-to" }, h("p", { class: "invoice-bill-to__label" }, "Bill To"), h("p", { class: "invoice-bill-to__name" }, this.agentName)));
    }
    renderLineItems() {
        console.log(groupData(this.transactions ?? []));
        return (h("section", { class: "invoice-items" }, h("table", { class: "invoice-items__table" }, h("thead", null, h("tr", null, h("th", { class: "invoice-items__th" }, "Date"), h("th", { class: "invoice-items__th" }, "Description"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "Net Price"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "VAT"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "VAT Amount"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "City Tax"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "City Tax Amount"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "Total"))), h("tbody", null, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "invoice-items__empty", colSpan: 7 }, "No transactions found for this document."))) : (
        // this.transactions.map((tx, i) => (
        //   <tr key={tx.CL_TX_ID} class="invoice-items__row">
        //     <td class="invoice-items__td invoice-items__td--index">{i + 1}</td>
        //     <td class="invoice-items__td">{tx.DESCRIPTION || '—'}</td>
        //     <td class="invoice-items__td">
        //       {tx.GUEST_FIRST_NAME} {tx.GUEST_LAST_NAME}
        //     </td>
        //     <td class="invoice-items__td invoice-items__td--booking">{tx.BOOK_NBR}</td>
        //     <td class="invoice-items__td invoice-items__td--dates">
        //       {tx.FROM_DATE ? moment(tx.FROM_DATE).format(DATE_DISPLAY) : '—'}
        //       {tx.TO_DATE ? ` – ${moment(tx.TO_DATE).format(DATE_DISPLAY)}` : ''}
        //     </td>
        //     <td class="invoice-items__td invoice-items__td--num">{tx.DEBIT ? this.renderMoney(tx.DEBIT) : '—'}</td>
        //     <td class="invoice-items__td invoice-items__td--num">{tx.CREDIT ? this.renderMoney(tx.CREDIT) : '—'}</td>
        //   </tr>
        // ))
        groupData(this.transactions).map(level1 => (h("tr", { key: level1.PR_ID, class: "invoice-items__row" }, level1.subRows.length > 1 && h("td", { colSpan: 8 }, level1.PR_ID)))))))));
    }
    renderTotals() {
        const t = this.totals;
        return (h("section", { class: "invoice-totals" }, h("div", { class: "invoice-totals__grid" }, h("span", { class: "invoice-totals__label" }, "Net Amount"), h("span", { class: "invoice-totals__value" }, this.renderMoney(t.net)), h("span", { class: "invoice-totals__label" }, "Taxes"), h("span", { class: "invoice-totals__value" }, this.renderMoney(t.tax)), h("div", { class: "invoice-totals__divider" }), h("div", { class: "invoice-totals__divider" }), h("span", { class: "invoice-totals__label invoice-totals__label--total" }, "Total"), h("span", { class: "invoice-totals__value invoice-totals__value--total" }, this.renderMoney(t.total)))));
    }
    render() {
        if (!this.ticket) {
            return (h(Host, null, h("div", { class: "invoice-state invoice-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "invoice-state" }, h("ir-spinner", null))));
        }
        if (this.error) {
            return (h(Host, null, h("div", { class: "invoice-state invoice-state--error" }, this.error)));
        }
        return (h(Host, null, h("div", { class: "invoice" }, this.renderHeader(), h("hr", { class: "invoice-divider" }), this.renderBillTo(), this.renderLineItems(), this.renderTotals())));
    }
    static get style() { return IrClInvoicePreviewStyle0; }
}, [1, "ir-cl-invoice-preview", {
        "propertyId": [2, "property-id"],
        "ticket": [1],
        "baseurl": [1],
        "fromDate": [1, "from-date"],
        "toDate": [1, "to-date"],
        "agentId": [2, "agent-id"],
        "agentName": [1, "agent-name"],
        "documentNumber": [1, "document-number"],
        "isLoading": [32],
        "error": [32],
        "property": [32],
        "transactions": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-preview", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-preview":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoicePreview);
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClInvoicePreview as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-preview2.js.map