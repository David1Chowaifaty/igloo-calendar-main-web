import { r as registerInstance, h, H as Host, F as Fragment } from './index-D7D7fhZS.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { i as formatAmount } from './utils-DvzWTdKJ.js';
import { c as calendar_data } from './calendar-data-15-64PrB.js';
import './index-DeW5X45W.js';
import './locales.store-C0aS6UDK.js';
import './index-TzZ5wfUy.js';
import './type-D7rOPtKA.js';

const irClDocumentHeaderCss = () => `:host{display:block}@media print{.invoice__meta-label{color:#374151}.section-heading{color:#374151}.property-overview__location{color:#374151}}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}`;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClDocumentHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    documentType = 'invoice';
    /** Property whose branding and details appear on the right side. */
    property;
    /** Optional document reference number shown in the meta block. */
    documentNumber;
    /** Name of the agent/company to bill to. */
    agentName;
    get primaryContact() {
        return this.property?.contacts?.find(c => c.type === 'marketing') ?? this.property?.contacts?.[0];
    }
    get documentTitle() {
        switch (this.documentType) {
            case 'invoice':
                return 'invoice';
            case 'receipt':
                return 'receipt';
            case 'creditnote':
                return 'credit note';
            case 'debitnote':
                return 'debit note';
            case 'statement':
                return 'account statement';
            default:
                return '';
        }
    }
    render() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        const propertyLocation = [p?.city?.['name'] ?? null, p?.country?.name ?? null].filter(f => f !== null).join(', ');
        return (h(Host, { key: '1c24bfa8eba457fe05c75ed1be4afe30250b78f6' }, h("header", { key: 'd3810b865b3e58e61387d4a2203b1cc910631b8f', class: "invoice__header" }, h("h3", { key: 'bbfaa5ba8277c665f47a6b121aa991e54da68ff1', class: "invoice__title" }, this.documentTitle), h("section", { key: 'cfcba206d69080207bc8f60a322ee8eb54cea4de', class: "invoice__layout" }, h("div", { key: '49468ab760f9952ada1eaf10d5d1e52bde0bcd6f', class: "invoice__column invoice__column--details" }, h("div", { key: 'ef24caedbcba417582632c32b3700c6fe0981ff7', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'c129f7e4021800bc72a6e19d15f8a408915a03e0', class: "invoice__meta-row" }, h("span", { key: 'cbdcf36e8f6938f98d8b8d4cae93cf191a9764f4', class: "invoice__meta-label" }, "Document #"), h("span", { key: '00ec10d316cde17564505dfe7ca67e78c0723e8f', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '306ce84ea68951700190d1ecf1729a0abe9e178a', class: "invoice__meta-row" }, h("span", { key: '1e0b86a94f5e5e22764ec95a5794155514055ee8', class: "invoice__meta-label" }, "Date"), h("span", { key: '4af3d4e14c19f8e9edf3a48ed5b056e06ff8269b', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'c83cbd618c482851ec081e813031f95bd0d2aaf1', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'b5fcf4d0fdc537cdeed7a03f557a3de0b9032ea0', class: "section-heading" }, "Bill To"), h("div", { key: '39afa6988314317fd60e8d50eb66bba93256b76d', class: "bill-to" }, h("p", { key: '5d179219feed2793311be39caaa9e6c642ab25d2', class: "bill-to__name" }, this.agentName))))), h("div", { key: '32cf19bc53a671c5c3a5a9e66a0a68a13e6ce5c1', class: "invoice__column invoice__column--property" }, h("div", { key: '88b0e625743f70da0fcf9a4f7b8560b02adb7321', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '980730a68df4e1b5ca3f98a578daeef31c48cd02', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'b07715a08d29ccd05ead35dd862176d924336d0e', class: "property-overview__text" }, h("p", { key: '8e618d64d7e49ee9a1bb0c651d0fc6d8f37cd74f', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '3db3d241acee3b2564d4009c8e4669e5b2eed2ff', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'cbf1dfe5f61324d874246a15cdf0ab78c61d80c8', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: '73ac6357870e247847df15f772b30d28d52c6977', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '3e90b9aba5f84a256a426a154890e487e6beffb5', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '4e819918d31a6c5a15f416c819f5947e4c24dc46', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
    }
};
IrClDocumentHeader.style = irClDocumentHeaderCss();

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

const irClFiscalDocumentTableCss = () => `.cl-table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.cl-th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:capitalize;color:#374151;border-top:2px solid #111827;border-bottom:1px solid #111827;white-space:nowrap}.cl-th--num{text-align:right}.cl-td{padding:0.45rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle}.cl-td--num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.cl-td--muted{color:#6b7280}.cl-td--bold{font-weight:700;color:#111827}.cl-td--nowrap{white-space:nowrap}.cl-td--empty{text-align:center;color:#6b7280;padding:1.5rem 0.75rem;font-style:italic}.cl-balance-row td{background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;padding-top:0.5rem;padding-bottom:0.5rem}@media print{.cl-table{font-size:0.75rem}.cl-th,.cl-td{padding:0.35rem 0.5rem}.cl-td--muted,.cl-td--empty{color:#374151}.cl-balance-row td{-webkit-print-color-adjust:exact;print-color-adjust:exact}.cl-balance-row{page-break-inside:avoid}}:host{display:block}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__td--desc-cell{white-space:normal;word-break:break-word}.invoice-items__booking-row td{padding:0.5rem 0.75rem;background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-size:0.8125rem;font-weight:600;color:#374151}.invoice-items__unit-row td{padding:0.375rem 0.75rem 0.375rem 1.75rem;background:#f9fafb;border-bottom:1px solid #f3f4f6;font-size:0.8125rem;font-weight:600;color:#6b7280}.invoice-items__row--indent-1 td:first-child{padding-left:1.75rem}.invoice-items__row--indent-2 td:first-child{padding-left:3rem}@media print{.invoice-items{overflow-x:visible}.invoice-items__unit-row td{color:#374151}}`;

const IrClFiscalDocumentTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get showCityTax() {
        return this.transactions.some(tx => (tx.CITY_TAX_PERCENT ?? 0) > 0);
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
        return (h("tr", { key: String(tx.CL_TX_ID), class: cls }, h("td", { class: "cl-td cl-td--muted cl-td--nowrap" }, h("ir-cl-invoice-date-cell", { date: tx.ENTRY_DATE })), h("td", { class: "cl-td invoice-items__td--desc-cell" }, h("ir-cl-invoice-description-cell", { description: tx.DESCRIPTION })), h("td", { class: "cl-td cl-td--num cl-td--bold" }, h("ir-cl-invoice-net-price-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.NET_AMOUNT) })), h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-vat-pct-cell", { vatPercent: tx.VAT_PERCENT })), h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-vat-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.VAT_AMOUNT) })), this.showCityTax && (h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-city-tax-pct-cell", { cityTaxPercent: tx.CITY_TAX_PERCENT }))), this.showCityTax && (h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-city-tax-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.CITY_TAX_AMOUNT), cityTaxPercent: tx.CITY_TAX_PERCENT }))), h("td", { class: "cl-td cl-td--num cl-td--bold" }, h("ir-cl-invoice-total-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.TOTAL_AMOUNT) }))));
    }
    renderUnitGroup(group) {
        const roomName = this.prIdDict.get(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID)?.name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID)?.short_name}`;
        return (h(Fragment, null, h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, h("td", { colSpan: this.showCityTax ? 8 : 6 }, h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), hooks(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", hooks(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
    }
    renderBookingGroup(group) {
        return (h(Fragment, null, group.subRows.length > 1 && (h("tr", { key: `booking-hdr-${group.BOOK_NBR}`, class: "invoice-items__booking-row" }, h("td", { colSpan: this.showCityTax ? 8 : 6 }, h("span", { style: { fontSize: '1rem', fontWeight: 'bold' } }, "#", group.BOOK_NBR)))), group.subRows.map(item => {
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
        return (h("tr", { class: "cl-balance-row" }, h("td", { class: "cl-td" }), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.net)), " ", h("br", null), "Net Price"), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.tax)), h("br", null), "Taxes"), this.showCityTax && h("td", { class: "cl-td cl-td--num" }), this.showCityTax && h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.total)), h("br", null), "Total")));
    }
    render() {
        return (h(Host, { key: '60545d95596266574611c12d36515e5e64f2d778' }, h("section", { key: '963e60a51181a0d4065fac6ed2c35557fdf3103b', class: "invoice-items" }, h("table", { key: 'e73b8c7b60997c02f12bf72461c29b1e1f75cce6', class: "cl-table" }, h("thead", { key: '461490acb4b439ec799702006b977fcdfd2fdb5f' }, h("tr", { key: 'f64a4ea29a12190e97723fd19533f2b5be32bf65' }, h("th", { key: '2d5b1793464e71510e28352f56cb5556a40ceb9a', class: "cl-th" }, "Date"), h("th", { key: '2247bdfbaa694f95d87f58c66f76be13e5705921', class: "cl-th", style: { width: '100%' } }, "Description"), h("th", { key: 'a36046c16bd7c573ce4387424977856932e8b8cb', class: "cl-th cl-th--num" }, "Net Price"), h("th", { key: '7193ec925e158decc4456545a0d7e6bb98a2cda0', class: "cl-th" }, "VAT"), h("th", { key: '6bd4b5e0a8b4afebd34946f87ac68161e71507e9', class: "cl-th cl-th--num" }, "VAT Amount"), this.showCityTax && (h("th", { key: '137a3d8e295df33aadd5bd22bff29e0fc9afe7e1', class: "cl-th" }, "City ", h("br", { key: '1b42e9d28878a7703549c2bf3cf932bda5fdd908' }), "Tax")), this.showCityTax && (h("th", { key: '36af8f697476a72468d4305d06e90b1d0f18dad3', class: "cl-th cl-th--num" }, "City Tax", h("br", { key: 'd6ae78c28ec9cf91b2a0976741f7861e182da50d' }), " Amount")), h("th", { key: '7f715cb94d93b47ecbafa73eefd8bab0e7e74105', class: "cl-th cl-th--num" }, "Total"))), h("tbody", { key: '869a5285e90931b70a0215d683f9a5227e315d91' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, "No transactions found for this document."))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
    }
};
IrClFiscalDocumentTable.style = irClFiscalDocumentTableCss();

const irClInvoiceCityTaxAmountCellCss = () => `.sc-ir-cl-invoice-city-tax-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::before,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-amount-cell{display:none !important}.sc-ir-cl-invoice-city-tax-amount-cell-h{display:block;text-align:right}`;

const IrClInvoiceCityTaxAmountCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    cityTaxPercent;
    render() {
        return h(Host, { key: 'c29d3eb28edf726b4159a40f544e16bca6ee5c5e' }, this.cityTaxPercent > 0 ? formatAmount(this.currencySymbol, this.amount) : '');
    }
};
IrClInvoiceCityTaxAmountCell.style = irClInvoiceCityTaxAmountCellCss();

const irClInvoiceCityTaxPctCellCss = () => `.sc-ir-cl-invoice-city-tax-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::before,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-pct-cell{display:none !important}.sc-ir-cl-invoice-city-tax-pct-cell-h{display:block;text-align:right}`;

const IrClInvoiceCityTaxPctCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    cityTaxPercent;
    render() {
        return h(Host, { key: 'a104e3b244c4d41930a1cb467895971a42d60c4f' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
    }
};
IrClInvoiceCityTaxPctCell.style = irClInvoiceCityTaxPctCellCss();

const irClInvoiceDateCellCss = () => `.sc-ir-cl-invoice-date-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::before,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-date-cell{display:none !important}.sc-ir-cl-invoice-date-cell-h{display:block;white-space:nowrap}`;

const IrClInvoiceDateCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    date;
    render() {
        return h(Host, { key: 'bed248a9f00f8def63b5d2953660767947442db0' }, hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
    }
};
IrClInvoiceDateCell.style = irClInvoiceDateCellCss();

const irClInvoiceDescriptionCellCss = () => `.sc-ir-cl-invoice-description-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::before,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-description-cell{display:none !important}.sc-ir-cl-invoice-description-cell-h{display:block}.desc.sc-ir-cl-invoice-description-cell{display:block}`;

const IrClInvoiceDescriptionCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    description;
    render() {
        return (h(Host, { key: 'aa226145dbc40d1b3e049165edb3539f21759044' }, h("span", { key: '6df71608161f5eeb78afeb671d72518718aaf3f7', class: "desc" }, this.description)));
    }
};
IrClInvoiceDescriptionCell.style = irClInvoiceDescriptionCellCss();

const irClInvoiceNetPriceCellCss = () => `.sc-ir-cl-invoice-net-price-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::before,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-net-price-cell{display:none !important}.sc-ir-cl-invoice-net-price-cell-h{display:block;text-align:right}`;

const IrClInvoiceNetPriceCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: 'c2037236cd0babfd03fb7c38c4a8cd2c3d75cd16' }, formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceNetPriceCell.style = irClInvoiceNetPriceCellCss();

const irClInvoiceTotalCellCss = () => `.sc-ir-cl-invoice-total-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::before,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-total-cell{display:none !important}.sc-ir-cl-invoice-total-cell-h{display:block;text-align:right}`;

const IrClInvoiceTotalCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: '742c1380e85241be5a97e2dabf478bdf8d152c6d' }, formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceTotalCell.style = irClInvoiceTotalCellCss();

const irClInvoiceVatAmountCellCss = () => `.sc-ir-cl-invoice-vat-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::before,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-amount-cell{display:none !important}.sc-ir-cl-invoice-vat-amount-cell-h{display:block;text-align:right}`;

const IrClInvoiceVatAmountCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: '38b9097301e2129cd87cfe192d5a93dd2f58aeaf' }, formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceVatAmountCell.style = irClInvoiceVatAmountCellCss();

const irClInvoiceVatPctCellCss = () => `.sc-ir-cl-invoice-vat-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::before,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-pct-cell{display:none !important}.sc-ir-cl-invoice-vat-pct-cell-h{display:block;text-align:right}`;

const IrClInvoiceVatPctCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    vatPercent;
    render() {
        return h(Host, { key: 'b335f3fbd71cd4487da7e4e4bb7bf2a78a0801aa' }, this.vatPercent, "%");
    }
};
IrClInvoiceVatPctCell.style = irClInvoiceVatPctCellCss();

export { IrClDocumentHeader as ir_cl_document_header, IrClFiscalDocumentTable as ir_cl_fiscal_document_table, IrClInvoiceCityTaxAmountCell as ir_cl_invoice_city_tax_amount_cell, IrClInvoiceCityTaxPctCell as ir_cl_invoice_city_tax_pct_cell, IrClInvoiceDateCell as ir_cl_invoice_date_cell, IrClInvoiceDescriptionCell as ir_cl_invoice_description_cell, IrClInvoiceNetPriceCell as ir_cl_invoice_net_price_cell, IrClInvoiceTotalCell as ir_cl_invoice_total_cell, IrClInvoiceVatAmountCell as ir_cl_invoice_vat_amount_cell, IrClInvoiceVatPctCell as ir_cl_invoice_vat_pct_cell };
