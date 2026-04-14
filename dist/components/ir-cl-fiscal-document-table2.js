import { proxyCustomElement, HTMLElement, h, Fragment, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$8 } from './ir-cl-invoice-city-tax-amount-cell2.js';
import { d as defineCustomElement$7 } from './ir-cl-invoice-city-tax-pct-cell2.js';
import { d as defineCustomElement$6 } from './ir-cl-invoice-date-cell2.js';
import { d as defineCustomElement$5 } from './ir-cl-invoice-description-cell2.js';
import { d as defineCustomElement$4 } from './ir-cl-invoice-net-price-cell2.js';
import { d as defineCustomElement$3 } from './ir-cl-invoice-total-cell2.js';
import { d as defineCustomElement$2 } from './ir-cl-invoice-vat-amount-cell2.js';
import { d as defineCustomElement$1 } from './ir-cl-invoice-vat-pct-cell2.js';

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
     */
    const getOldestDate = item => {
        if (item.subRows && item.subRows.length > 0) {
            return item.subRows.reduce((oldest, child) => {
                const childDate = getOldestDate(child);
                if (!oldest)
                    return childDate;
                return childDate < oldest ? childDate : oldest;
            }, '');
        }
        return item.SERVICE_DATE ?? '';
    };
    const sortByOldestDate = arr => {
        return arr.sort((a, b) => {
            const dateA = getOldestDate(a);
            const dateB = getOldestDate(b);
            return dateA.localeCompare(dateB);
        });
    };
    // ── Level 1: split rows into "no booking" vs "has booking" ──────────────
    const standalone = [];
    const bookingMap = new Map();
    for (const row of rows) {
        if (!row.BOOK_NBR) {
            standalone.push(row);
        }
        else {
            if (!bookingMap.has(row.BOOK_NBR)) {
                bookingMap.set(row.BOOK_NBR, []);
            }
            bookingMap.get(row.BOOK_NBR).push(row);
        }
    }
    // ── Level 2: within each booking, group rows by PR_ID (unit/room) ───────
    const groupByUnit = bookingRows => {
        const unitStandalone = [];
        const unitMap = new Map();
        for (const row of bookingRows) {
            if (!row.PR_ID) {
                unitStandalone.push(row);
            }
            else {
                if (!unitMap.has(row.PR_ID)) {
                    unitMap.set(row.PR_ID, []);
                }
                unitMap.get(row.PR_ID).push(row);
            }
        }
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
        return sortByOldestDate([...unitStandalone, ...unitGroups]);
    };
    // ── Assemble final result ─────────────────────────────────────────────────
    const bookingGroups = [];
    for (const [bookNbr, bookingRows] of bookingMap.entries()) {
        bookingGroups.push({
            BOOK_NBR: bookNbr,
            subRows: groupByUnit(bookingRows),
        });
    }
    return sortByOldestDate([...standalone, ...bookingGroups]);
};

const irClFiscalDocumentTableCss = ":host{display:block}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.invoice-items__th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;letter-spacing:0.06em;color:#6b7280;background:#f9fafb;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}.invoice-items__th--num{text-align:right}.invoice-items__th--nowrap{white-space:nowrap}.invoice-items__row:hover{background:#f9fafb}.invoice-items__td{padding:0.5rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle;white-space:nowrap}.invoice-items__td--date{color:#6b7280}.invoice-items__td--desc-cell{white-space:normal;word-break:break-word}.invoice-items__td--pct{color:#6b7280}.invoice-items__td--num{text-align:right;font-variant-numeric:tabular-nums;font-weight:500;color:#6b7280}.invoice-items__td--num-primary,.invoice-items__th--num-primary{text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:#111827}.invoice-items__empty{padding:2rem;text-align:center;color:#9ca3af}.invoice-items__booking-row td{padding:0.5rem 0.75rem;background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-size:0.8125rem;font-weight:600;color:#374151}.invoice-items__unit-row td{padding:0.375rem 0.75rem 0.375rem 1.75rem;background:#f9fafb;border-bottom:1px solid #f3f4f6;font-size:0.8125rem;font-weight:600;color:#6b7280}.invoice-items__row--indent-1 td:first-child{padding-left:1.75rem}.invoice-items__row--indent-2 td:first-child{padding-left:3rem}@media print{.invoice-items{overflow-x:visible}.invoice-items__table{font-size:0.75rem}.invoice-items__th,.invoice-items__td{padding:0.35rem 0.5rem}}";
const IrClFiscalDocumentTableStyle0 = irClFiscalDocumentTableCss;

const IrClFiscalDocumentTable = /*@__PURE__*/ proxyCustomElement(class IrClFiscalDocumentTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    transactions = [];
    currencySymbol = '$';
    /** When true all monetary amounts are negated — used for credit notes. */
    invertAmounts = false;
    applySign(value) {
        return this.invertAmounts ? -(value ?? 0) : (value ?? 0);
    }
    renderMoney(value) {
        return formatAmount(this.currencySymbol, this.applySign(value));
    }
    get prIdDict() {
        const map = new Map();
        for (const rt of calendar_data.property?.roomtypes ?? []) {
            for (const room of rt.physicalrooms ?? []) {
                map.set(room.id, room);
            }
        }
        return map;
    }
    get roomTypesDict() {
        const map = new Map();
        for (const rt of calendar_data.property?.roomtypes ?? []) {
            map.set(rt.id, rt);
        }
        return map;
    }
    get rateplanDict() {
        const map = new Map();
        for (const rt of calendar_data.property?.roomtypes ?? []) {
            for (const rp of rt.rateplans ?? []) {
                map.set(rp.id, rp);
            }
        }
        return map;
    }
    get totals() {
        return this.transactions.reduce((acc, tx) => ({
            net: acc.net + (tx.NET_AMOUNT ?? 0),
            tax: acc.tax + (tx.TAX_AMOUNT ?? 0),
            total: acc.total + (tx.TOTAL_AMOUNT ?? 0),
        }), { net: 0, tax: 0, total: 0 });
    }
    renderTxRow(tx, indent = 0) {
        const cls = indent > 0 ? `invoice-items__row--indent-${indent}` : undefined;
        return (h("tr", { key: String(tx.CL_TX_ID), class: cls }, h("td", { class: "invoice-items__td invoice-items__td--date" }, h("ir-cl-invoice-date-cell", { date: tx.ENTRY_DATE })), h("td", { class: "invoice-items__td invoice-items__td--desc-cell" }, h("ir-cl-invoice-description-cell", { description: tx.DESCRIPTION })), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, h("ir-cl-invoice-net-price-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.NET_AMOUNT) })), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, h("ir-cl-invoice-vat-pct-cell", { vatPercent: tx.VAT_PERCENT })), h("td", { class: "invoice-items__td invoice-items__td--num" }, h("ir-cl-invoice-vat-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.VAT_AMOUNT) })), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, h("ir-cl-invoice-city-tax-pct-cell", { cityTaxPercent: tx.CITY_TAX_PERCENT })), h("td", { class: "invoice-items__td invoice-items__td--num" }, h("ir-cl-invoice-city-tax-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.CITY_TAX_AMOUNT), cityTaxPercent: tx.CITY_TAX_PERCENT })), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, h("ir-cl-invoice-total-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.TOTAL_AMOUNT) }))));
    }
    renderUnitGroup(group) {
        const roomName = this.prIdDict.get(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID)?.name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID)?.short_name}`;
        return (h(Fragment, null, h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, h("td", { colSpan: 8 }, h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), hooks(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", hooks(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
    }
    renderBookingGroup(group) {
        return (h(Fragment, null, group.subRows.length > 1 && (h("tr", { key: `booking-hdr-${group.BOOK_NBR}`, class: "invoice-items__booking-row" }, h("td", { colSpan: 8 }, h("span", { style: { fontSize: '1rem', fontWeight: 'bold' } }, "#", group.BOOK_NBR)))), group.subRows.map(item => {
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
    renderTotals() {
        const t = this.totals;
        return (h("tr", null, h("td", { class: "invoice-items__td" }), h("td", { class: "invoice-items__td invoice-items__td--num" }, "Net Price"), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, this.renderMoney(t.net)), h("td", { class: "invoice-items__td invoice-items__td--num" }, "Taxes"), h("td", { class: "invoice-items__td invoice-items__td--num" }, this.renderMoney(t.tax)), h("td", { class: "invoice-items__td invoice-items__td--num" }), h("td", { class: "invoice-items__td invoice-items__td--num" }, "Total"), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, this.renderMoney(t.total))));
    }
    render() {
        return (h(Host, { key: '9bf1bd5b1dd835808a4f22b8dd9c8e50229d9389' }, h("section", { key: '67f63402078d120ff82041deaeed466e96f27db3', class: "invoice-items" }, h("table", { key: '756de8dec9844786005182d136c63b6d3ebf0cc2', class: "invoice-items__table" }, h("thead", { key: '9daeadb78a906bc1ce463e17f4e039f8a7bf2f2d' }, h("tr", { key: '675cc413e5efb4d03ca496a89d9865e201759164' }, h("th", { key: 'e02923d4e13be4d24f27bf98e6c2f1e3986dc6e8', class: "invoice-items__th invoice-items__th--nowrap" }, "Date"), h("th", { key: 'a7231af9e54cba9256a3e14232808734daaf0765', class: "invoice-items__th", style: { width: '100%' } }, "Description"), h("th", { key: '1e9f131ea43f83cf238ff98fb872d01fdc1151b2', class: "invoice-items__th invoice-items__th--num-primary invoice-items__th--nowrap" }, "Net Price"), h("th", { key: '72c153f269fe48d3379df75825ca796d92aae977', class: "invoice-items__th invoice-items__th--nowrap" }, "VAT"), h("th", { key: '4b2347507843fb856c1340c54ced843acca2435c', class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "VAT Amount"), h("th", { key: 'e090d837ef37cab26fcfec9a687ecc46fc532a24', class: "invoice-items__th invoice-items__th--nowrap" }, "City", h("br", { key: '75bd037a38ff9ced292575cf7e042db78c982820' }), " Tax"), h("th", { key: '21a1d619c0fb614fc8a1c0e1a44585044f3bce0d', class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "City Tax", h("br", { key: '6be71cee0138b534975be6a92302991d04a54f90' }), " Amount"), h("th", { key: '93550bb8c44a86aa6d9cbd882d7eaa512501ed19', class: "invoice-items__th invoice-items__th--num-primary invoice-items__th--nowrap" }, "Total"))), h("tbody", { key: 'e316bd31d8b826c5ece0c20ea40293e16e0821db' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "invoice-items__empty", colSpan: 8 }, "No transactions found for this document."))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
    }
    static get style() { return IrClFiscalDocumentTableStyle0; }
}, [1, "ir-cl-fiscal-document-table", {
        "transactions": [16],
        "currencySymbol": [1, "currency-symbol"],
        "invertAmounts": [4, "invert-amounts"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-fiscal-document-table", "ir-cl-invoice-city-tax-amount-cell", "ir-cl-invoice-city-tax-pct-cell", "ir-cl-invoice-date-cell", "ir-cl-invoice-description-cell", "ir-cl-invoice-net-price-cell", "ir-cl-invoice-total-cell", "ir-cl-invoice-vat-amount-cell", "ir-cl-invoice-vat-pct-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-fiscal-document-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClFiscalDocumentTable);
            }
            break;
        case "ir-cl-invoice-city-tax-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-cl-invoice-city-tax-pct-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-cl-invoice-date-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-cl-invoice-description-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-cl-invoice-net-price-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-cl-invoice-total-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-cl-invoice-vat-amount-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-cl-invoice-vat-pct-cell":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClFiscalDocumentTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-fiscal-document-table2.js.map