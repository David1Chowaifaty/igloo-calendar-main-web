import { proxyCustomElement, HTMLElement, h, Fragment, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { T as Token } from './Token.js';
import { C as CityLedgerService } from './index6.js';
import { P as PropertyService } from './property.service.js';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
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
        const unitStandalone = []; // rows with no PR_ID — rendered flat
        const unitMap = new Map(); // PR_ID → all rows that share it (1 or more)
        for (const row of bookingRows) {
            if (!row.PR_ID) {
                // No PR_ID → keep flat
                unitStandalone.push(row);
            }
            else {
                if (!unitMap.has(row.PR_ID)) {
                    unitMap.set(row.PR_ID, []);
                }
                unitMap.get(row.PR_ID).push(row);
            }
        }
        // Build the unit-group objects from the collected buckets
        const unitGroups = [];
        for (const [prId, subRows] of unitMap.entries()) {
            const sorted = sortByOldestDate(subRows);
            const first = sorted[0];
            const last = sorted[sorted.length - 1];
            unitGroups.push({
                PR_ID: prId,
                subRows: sorted,
                occupancy: (first.ADULTS_NBR ?? 0) + (first.CHILD_NBR ?? 0) + (first.INFANT_NBR ?? 0),
                GUEST_FIRST_NAME: first.GUEST_FIRST_NAME ?? '',
                GUEST_LAST_NAME: first.GUEST_LAST_NAME ?? '',
                FROM_DATE: first.FROM_DATE ?? '',
                TO_DATE: last.TO_DATE ?? '',
                ROOM_CATEGORY_ID: first.ROOM_CATEGORY_ID ?? 0,
                ROOM_TYPE_ID: first.ROOM_TYPE_ID ?? 0,
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

const irClInvoicePreviewCss = ":host{display:block;font-family:system-ui,\n    -apple-system,\n    sans-serif;color:#1a1a1a}.invoice-state{display:flex;align-items:center;justify-content:center;min-height:200px;font-size:0.875rem;color:#6b7280}.invoice-state--error{color:#dc2626}.invoice{max-width:900px;margin:0 auto;padding:2.5rem;background:#fff;box-shadow:0 1px 4px rgba(0, 0, 0, 0.08);border-radius:8px}.invoice-header{display:flex;justify-content:space-between;align-items:flex-start;gap:2rem}.invoice-header__property{display:flex;gap:1rem;align-items:flex-start}.invoice-header__logo{height:56px;width:auto;object-fit:contain;flex-shrink:0}.invoice-header__property-info{display:flex;flex-direction:column;gap:0.15rem}.invoice-header__property-name{margin:0 0 0.25rem;font-size:1.125rem;font-weight:700;color:#111827}.invoice-header__address,.invoice-header__contact{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}.invoice-header__tax-nbr{margin:0.25rem 0 0;font-size:0.8125rem;color:#6b7280}.invoice-header__meta{text-align:right;flex-shrink:0}.invoice-header__title{margin:0 0 0.75rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827}.invoice-header__meta-row{display:flex;justify-content:flex-end;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice-header__meta-label{color:#9ca3af;font-weight:500}.invoice-header__meta-value{color:#111827;font-weight:600;min-width:140px;text-align:right}.invoice-divider{border:none;border-top:1px solid #e5e7eb;margin:1.5rem 0}.invoice-bill-to{margin-bottom:1.5rem}.invoice-bill-to__label{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af}.invoice-bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.invoice-items__th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;letter-spacing:0.06em;color:#6b7280;background:#f9fafb;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}.invoice-items__th--num{text-align:right}.invoice-items__th--nowrap{white-space:nowrap}.invoice-items__row:hover{background:#f9fafb}.invoice-items__td{padding:0.5rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle;white-space:nowrap}.invoice-items__td--date{color:#6b7280}.invoice-items__td--desc-cell{white-space:normal;word-break:break-word}.invoice-items__td--desc{white-space:normal;word-break:break-word;vertical-align:middle}.invoice-items__td--pct{color:#6b7280}.invoice-items__td--num{text-align:right;font-variant-numeric:tabular-nums;font-weight:500}.invoice-items__empty{padding:2rem;text-align:center;color:#9ca3af}.invoice-items__booking-row td{padding:0.5rem 0.75rem;background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-size:0.8125rem;font-weight:600;color:#374151}.invoice-items__unit-row td{padding:0.375rem 0.75rem 0.375rem 1.75rem;background:#f9fafb;border-bottom:1px solid #f3f4f6;font-size:0.8125rem;font-weight:600;color:#6b7280}.invoice-items__row--indent-1 td:first-child{padding-left:1.75rem}.invoice-items__row--indent-2 td:first-child{padding-left:3rem}.invoice-totals{display:flex;justify-content:flex-end}.invoice-totals__grid{display:grid;grid-template-columns:auto auto;column-gap:2.5rem;row-gap:0.375rem;align-items:center;min-width:260px}.invoice-totals__label{font-size:0.8125rem;color:#6b7280;text-align:left}.invoice-totals__value{font-size:0.8125rem;font-variant-numeric:tabular-nums;font-weight:500;text-align:right;color:#111827}.invoice-totals__divider{grid-column:span 1;border-top:1px solid #e5e7eb;margin:0.25rem 0}.invoice-totals__label--total{font-size:0.9375rem;font-weight:700;color:#111827}.invoice-totals__value--total{font-size:0.9375rem;font-weight:700;color:#111827}@media print{:host{display:block;width:100%}.invoice{box-shadow:none;width:100%;max-width:100%;padding:0;border-radius:0}.invoice-items{overflow-x:visible}.invoice-items__table{font-size:0.75rem}.invoice-items__th,.invoice-items__td{padding:0.35rem 0.5rem}}";
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
    prIdDict;
    roomTypesDict;
    rateplanDict;
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
            const { physicalRoomsMap, ratePlansMap, roomTypesMap } = this.buildDicts();
            this.prIdDict = new Map(physicalRoomsMap);
            this.roomTypesDict = new Map(roomTypesMap);
            this.rateplanDict = new Map(ratePlansMap);
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
    renderTxRow(tx, indent = 0) {
        const cls = indent > 0 ? `invoice-items__row--indent-${indent}` : undefined;
        return (h("tr", { key: String(tx.CL_TX_ID), class: cls }, h("td", { class: "invoice-items__td invoice-items__td--date" }, hooks(tx.FROM_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("td", { class: "invoice-items__td invoice-items__td--desc-cell" }, h("span", { class: "invoice-items__td--desc" }, tx.DESCRIPTION)), h("td", { class: "invoice-items__td invoice-items__td--num" }, formatAmount(this.currencySymbol, tx.NET_AMOUNT)), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, tx.VAT_PERCENT, "%"), h("td", { class: "invoice-items__td invoice-items__td--num" }, formatAmount(this.currencySymbol, tx.VAT_AMOUNT)), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, tx.CITY_TAX_PERCENT > 0 ? tx.CITY_TAX_PERCENT + '%' : ''), h("td", { class: "invoice-items__td invoice-items__td--num" }, tx.CITY_TAX_PERCENT > 0 ? formatAmount(this.currencySymbol, tx.CITY_TAX_AMOUNT) : ''), h("td", { class: "invoice-items__td invoice-items__td--num" }, formatAmount(this.currencySymbol, tx.TOTAL_AMOUNT))));
    }
    buildDicts() {
        const physicalRoomsMap = new Map();
        const roomTypesMap = new Map();
        const ratePlansMap = new Map();
        for (const roomtype of calendar_data.property.roomtypes) {
            roomTypesMap.set(roomtype.id, roomtype);
            for (const room of roomtype.physicalrooms ?? []) {
                physicalRoomsMap.set(room.id, room);
            }
            for (const ratePlan of roomtype.rateplans ?? []) {
                ratePlansMap.set(ratePlan.id, ratePlan);
            }
        }
        return { physicalRoomsMap, roomTypesMap, ratePlansMap };
    }
    getRoomNameFromPrID(pr_id) {
        return this.prIdDict.get(pr_id);
    }
    renderUnitGroup(group) {
        const roomName = this.getRoomNameFromPrID(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID).name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID).short_name}`;
        return (h(Fragment, null, h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, h("td", { colSpan: 8 }, h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), hooks(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", hooks(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
    }
    renderBookingGroup(group) {
        return (h(Fragment, null, group.subRows.length > 1 && (h("tr", { key: `booking-hdr-${group.BOOK_NBR}`, class: "invoice-items__booking-row" }, h("td", { colSpan: 8 }, ' ', h("span", { style: { fontSize: '1rem', fontWeight: 'bold' } }, "#", group.BOOK_NBR)))), group.subRows.map(item => {
            const asAny = item;
            if ('subRows' in asAny && !('BOOK_NBR' in asAny)) {
                return this.renderUnitGroup(asAny);
            }
            return this.renderTxRow(asAny, 1);
        })));
    }
    renderTopLevelItem(item) {
        const asAny = item;
        if ('subRows' in asAny && 'BOOK_NBR' in asAny) {
            return this.renderBookingGroup(asAny);
        }
        return this.renderTxRow(asAny);
    }
    renderLineItems() {
        return (h("section", { class: "invoice-items" }, h("table", { class: "invoice-items__table" }, h("thead", null, h("tr", null, h("th", { class: "invoice-items__th invoice-items__th--nowrap" }, "Date"), h("th", { class: "invoice-items__th", style: { width: '100%' } }, "Description"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "Net Price"), h("th", { class: "invoice-items__th invoice-items__th--nowrap" }, "VAT"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "VAT Amount"), h("th", { class: "invoice-items__th invoice-items__th--nowrap" }, "City", h("br", null), " Tax"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "City Tax", h("br", null), " Amount"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "Total"))), h("tbody", null, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "invoice-items__empty", colSpan: 8 }, "No transactions found for this document."))) : (groupData(this.transactions).map(item => this.renderTopLevelItem(item)))))));
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