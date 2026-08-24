'use strict';

var index = require('./index-DgHWBwDV.js');
var moment = require('./moment-CdViwxPQ.js');
var utils = require('./utils-DDEjVhUV.js');
var calendarData = require('./calendar-data-DAVd_kwk.js');
require('./index-CLqkDPTC.js');
require('./locales.store-CqlNSy6z.js');
require('./index-daCuTVuG.js');

const irClDocumentHeaderCss = () => `:host{display:block}@media print{.invoice__meta-label{color:#374151}.section-heading{color:#374151}.property-overview__location{color:#374151}}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}`;

const DATE_DISPLAY = 'MMM DD, YYYY';
const IrClDocumentHeader = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '2749568a2358a1295e754cec4aca8e4c2c50819a' }, index.h("header", { key: '34fa153a2033308f9759f22728ea009d967fd027', class: "invoice__header" }, index.h("h3", { key: 'a6ca8d2ae7c1474b3a14cbac57c9e978442c4bdd', class: "invoice__title" }, this.documentTitle), index.h("section", { key: '983ff0f05f64b3e0b570cdbb182986b10ee4c3bd', class: "invoice__layout" }, index.h("div", { key: '0fdda246159af963f973ead0a694ba73ac6441ab', class: "invoice__column invoice__column--details" }, index.h("div", { key: 'e511514d030f3173a90f3f9b711873b45c7083eb', class: "invoice__details" }, this.documentNumber && (index.h("div", { key: 'bdb1708efa9c759939353280273be721d3f62052', class: "invoice__meta-row" }, index.h("span", { key: '631c88413b0bf1c9f4fb2c2cc14cc3fa3ee69f34', class: "invoice__meta-label" }, "Document #"), index.h("span", { key: 'a171f89dca1febf2e5eec431b0e8bb78ffc9e4ce', class: "invoice__meta-value" }, this.documentNumber))), index.h("div", { key: '701310044cc31a2566eaa55dd2a62d707c1b2142', class: "invoice__meta-row" }, index.h("span", { key: '9a46d1457a095809aca67ee55c8f6b24a0492278', class: "invoice__meta-label" }, "Date"), index.h("span", { key: 'a39e8ce466e4d76526070618f3d7beb47bcf2170', class: "invoice__meta-value" }, moment.hooks().format(DATE_DISPLAY)))), this.agentName && (index.h("section", { key: '4d9c3a9cd3670c53864fcf926afe0624a16295c4', class: "bill-to-section", "aria-label": "Bill to" }, index.h("h4", { key: '453ad9ed54c0007a0498444a7631bb1a20965784', class: "section-heading" }, "Bill To"), index.h("div", { key: 'dc1a9b108cc33f8aecdac9e97f4ed804b7956a37', class: "bill-to" }, index.h("p", { key: 'b2ba9bb93ed13816fbf3fefeb32cf64844f0ea69', class: "bill-to__name" }, this.agentName))))), index.h("div", { key: '48f0228d5a80492ff448ca9a929d9ee4ad5eab37', class: "invoice__column invoice__column--property" }, index.h("div", { key: 'cfbca57afa23c26a5d7e9f9379a0e6e2fa2e0c96', class: "property-overview", "aria-label": "Property overview" }, logo && index.h("img", { key: '7538ee7964701488def6b5e51d2c62ecefd1990b', src: logo, alt: p?.name, class: "property-logo" }), index.h("div", { key: '2aa5bef8b619fdb243d74dd82baf7c88d17abed9', class: "property-overview__text" }, index.h("p", { key: '64d714ff90e5dfd5161f7d3b6a1f8fcfaeebaa69', class: "property-overview__name" }, p?.name), propertyLocation && index.h("p", { key: '3d635742dca358aaf720efaff7c6ce1e16fa2074', class: "property-overview__location" }, propertyLocation), p?.address && index.h("p", { key: '08c119503bfb46112dc2652c3b247781501c843e', class: "property-overview__location" }, p.address), p?.phone && index.h("p", { key: '6dd283790bf5be6e1f5650170c505a45d2c1b8ae', class: "property-overview__location" }, p.phone), this.primaryContact?.email && index.h("p", { key: '0ec9cfe5bc2377c960041474bfc8fa68aceac06d', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && index.h("p", { key: '33b47fc65c3c28211254985ef19757fd937b9889', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
        index.registerInstance(this, hostRef);
    }
    transactions = [];
    currencySymbol = '$';
    /** When true all monetary amounts are negated — used for credit notes. */
    invertAmounts = false;
    applySign(value) {
        return this.invertAmounts ? -(value ?? 0) : (value ?? 0);
    }
    renderMoney(value) {
        return utils.formatAmount(this.currencySymbol, this.applySign(value));
    }
    get prIdDict() {
        const map = new Map();
        for (const rt of calendarData.calendar_data.property?.roomtypes ?? []) {
            for (const room of rt.physicalrooms ?? []) {
                map.set(room.id, room);
            }
        }
        return map;
    }
    get roomTypesDict() {
        const map = new Map();
        for (const rt of calendarData.calendar_data.property?.roomtypes ?? []) {
            map.set(rt.id, rt);
        }
        return map;
    }
    get rateplanDict() {
        const map = new Map();
        for (const rt of calendarData.calendar_data.property?.roomtypes ?? []) {
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
        return (index.h("tr", { key: String(tx.CL_TX_ID), class: cls }, index.h("td", { class: "cl-td cl-td--muted cl-td--nowrap" }, index.h("ir-cl-invoice-date-cell", { date: tx.ENTRY_DATE })), index.h("td", { class: "cl-td invoice-items__td--desc-cell" }, index.h("ir-cl-invoice-description-cell", { description: tx.DESCRIPTION })), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, index.h("ir-cl-invoice-net-price-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.NET_AMOUNT) })), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-vat-pct-cell", { vatPercent: tx.VAT_PERCENT })), index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-vat-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.VAT_AMOUNT) })), this.showCityTax && (index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-city-tax-pct-cell", { cityTaxPercent: tx.CITY_TAX_PERCENT }))), this.showCityTax && (index.h("td", { class: "cl-td cl-td--num cl-td--muted" }, index.h("ir-cl-invoice-city-tax-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.CITY_TAX_AMOUNT), cityTaxPercent: tx.CITY_TAX_PERCENT }))), index.h("td", { class: "cl-td cl-td--num cl-td--bold" }, index.h("ir-cl-invoice-total-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.TOTAL_AMOUNT) }))));
    }
    renderUnitGroup(group) {
        const roomName = this.prIdDict.get(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID)?.name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID)?.short_name}`;
        return (index.h(index.Fragment, null, index.h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, index.h("td", { colSpan: this.showCityTax ? 8 : 6 }, index.h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, index.h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), moment.hooks(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", moment.hooks(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
    }
    renderBookingGroup(group) {
        return (index.h(index.Fragment, null, group.subRows.length > 1 && (index.h("tr", { key: `booking-hdr-${group.BOOK_NBR}`, class: "invoice-items__booking-row" }, index.h("td", { colSpan: this.showCityTax ? 8 : 6 }, index.h("span", { style: { fontSize: '1rem', fontWeight: 'bold' } }, "#", group.BOOK_NBR)))), group.subRows.map(item => {
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
        return (index.h("tr", { class: "cl-balance-row" }, index.h("td", { class: "cl-td" }), index.h("td", { class: "cl-td cl-td--num" }), index.h("td", { class: "cl-td cl-td--num" }, index.h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.net)), " ", index.h("br", null), "Net Price"), index.h("td", { class: "cl-td cl-td--num" }), index.h("td", { class: "cl-td cl-td--num" }, index.h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.tax)), index.h("br", null), "Taxes"), this.showCityTax && index.h("td", { class: "cl-td cl-td--num" }), this.showCityTax && index.h("td", { class: "cl-td cl-td--num" }), index.h("td", { class: "cl-td cl-td--num" }, index.h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.total)), index.h("br", null), "Total")));
    }
    render() {
        return (index.h(index.Host, { key: '227c9ca8d7809d1244afd11738f6097608e70cf2' }, index.h("section", { key: '103eeb7799c2ad8d537b6a0b18c82d4f4fc6dc9b', class: "invoice-items" }, index.h("table", { key: '2c4c22a744d18f9b6d002e7c7232addf49f57c48', class: "cl-table" }, index.h("thead", { key: '64e052100ffb070e1cd074f3e7082ba73b4a93a1' }, index.h("tr", { key: '4028894e049c2c8ce7f9fcd6087cfb2594be63aa' }, index.h("th", { key: 'd05d9b6d118000a7b007129c9e5f12f64bde087e', class: "cl-th" }, "Date"), index.h("th", { key: '541a7431662917504eef395531d85ead80275bbf', class: "cl-th", style: { width: '100%' } }, "Description"), index.h("th", { key: '790bbffac982d2ea104d508c4077fc29e5f0daa4', class: "cl-th cl-th--num" }, "Net Price"), index.h("th", { key: '2b1f1000fbae1f327ecef48407c3fc9161c4922b', class: "cl-th" }, "VAT"), index.h("th", { key: '48f64db39105d0be48ca96b395e69c6700f1c305', class: "cl-th cl-th--num" }, "VAT Amount"), this.showCityTax && (index.h("th", { key: 'ec4a58f0a7492af43db678a5a72009bec2419a70', class: "cl-th" }, "City ", index.h("br", { key: '759a87315cd943543fc2fdd8671b11f2f42ca7e6' }), "Tax")), this.showCityTax && (index.h("th", { key: '6b5d51ef3557c6cf465e1e390897812a2243c506', class: "cl-th cl-th--num" }, "City Tax", index.h("br", { key: '6985c7df1f2bc0d097a14cfe0789163a1eb17151' }), " Amount")), index.h("th", { key: '02974534c4f5416f5f1002e800a10f030ad44a7d', class: "cl-th cl-th--num" }, "Total"))), index.h("tbody", { key: 'c6f4b4e8577cfbbb85d382378bac0fd92112a6e8' }, this.transactions.length === 0 ? (index.h("tr", null, index.h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, "No transactions found for this document."))) : (index.h(index.Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
    }
};
IrClFiscalDocumentTable.style = irClFiscalDocumentTableCss();

const irClInvoiceCityTaxAmountCellCss = () => `.sc-ir-cl-invoice-city-tax-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::before,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-amount-cell{display:none !important}.sc-ir-cl-invoice-city-tax-amount-cell-h{display:block;text-align:right}`;

const IrClInvoiceCityTaxAmountCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    cityTaxPercent;
    render() {
        return index.h(index.Host, { key: '64141f1a8d961171cdf5ec0e81e9c3af391613c4' }, this.cityTaxPercent > 0 ? utils.formatAmount(this.currencySymbol, this.amount) : '');
    }
};
IrClInvoiceCityTaxAmountCell.style = irClInvoiceCityTaxAmountCellCss();

const irClInvoiceCityTaxPctCellCss = () => `.sc-ir-cl-invoice-city-tax-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::before,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-pct-cell{display:none !important}.sc-ir-cl-invoice-city-tax-pct-cell-h{display:block;text-align:right}`;

const IrClInvoiceCityTaxPctCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cityTaxPercent;
    render() {
        return index.h(index.Host, { key: '042fe95085d99cf16cb128679bbec800b4b92a9d' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
    }
};
IrClInvoiceCityTaxPctCell.style = irClInvoiceCityTaxPctCellCss();

const irClInvoiceDateCellCss = () => `.sc-ir-cl-invoice-date-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::before,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-date-cell{display:none !important}.sc-ir-cl-invoice-date-cell-h{display:block;white-space:nowrap}`;

const IrClInvoiceDateCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    date;
    render() {
        return index.h(index.Host, { key: 'a326b9d907a25338f7f6eeacf50633bdd740a726' }, moment.hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
    }
};
IrClInvoiceDateCell.style = irClInvoiceDateCellCss();

const irClInvoiceDescriptionCellCss = () => `.sc-ir-cl-invoice-description-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::before,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-description-cell{display:none !important}.sc-ir-cl-invoice-description-cell-h{display:block}.desc.sc-ir-cl-invoice-description-cell{display:block}`;

const IrClInvoiceDescriptionCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    description;
    render() {
        return (index.h(index.Host, { key: '542313a466de74765aa4173f287b0a56507afe55' }, index.h("span", { key: 'd6aba226663b8b13fb35323bcbd2a960f36e5d27', class: "desc" }, this.description)));
    }
};
IrClInvoiceDescriptionCell.style = irClInvoiceDescriptionCellCss();

const irClInvoiceNetPriceCellCss = () => `.sc-ir-cl-invoice-net-price-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::before,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-net-price-cell{display:none !important}.sc-ir-cl-invoice-net-price-cell-h{display:block;text-align:right}`;

const IrClInvoiceNetPriceCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: '2b75af123cbd359d9e0022c0dbb02bb8b391a63f' }, utils.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceNetPriceCell.style = irClInvoiceNetPriceCellCss();

const irClInvoiceTotalCellCss = () => `.sc-ir-cl-invoice-total-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::before,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-total-cell{display:none !important}.sc-ir-cl-invoice-total-cell-h{display:block;text-align:right}`;

const IrClInvoiceTotalCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: 'a1822af3ba77bfd85f4f767aa7b2cdfa97949616' }, utils.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceTotalCell.style = irClInvoiceTotalCellCss();

const irClInvoiceVatAmountCellCss = () => `.sc-ir-cl-invoice-vat-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::before,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-amount-cell{display:none !important}.sc-ir-cl-invoice-vat-amount-cell-h{display:block;text-align:right}`;

const IrClInvoiceVatAmountCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: '6b3f9c18e41fd97715b10d20fd96aa7765fe97a3' }, utils.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceVatAmountCell.style = irClInvoiceVatAmountCellCss();

const irClInvoiceVatPctCellCss = () => `.sc-ir-cl-invoice-vat-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::before,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-pct-cell{display:none !important}.sc-ir-cl-invoice-vat-pct-cell-h{display:block;text-align:right}`;

const IrClInvoiceVatPctCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    vatPercent;
    render() {
        return index.h(index.Host, { key: '6c66199fd17a921441128388f1d5e4ce1372d082' }, this.vatPercent, "%");
    }
};
IrClInvoiceVatPctCell.style = irClInvoiceVatPctCellCss();

exports.ir_cl_document_header = IrClDocumentHeader;
exports.ir_cl_fiscal_document_table = IrClFiscalDocumentTable;
exports.ir_cl_invoice_city_tax_amount_cell = IrClInvoiceCityTaxAmountCell;
exports.ir_cl_invoice_city_tax_pct_cell = IrClInvoiceCityTaxPctCell;
exports.ir_cl_invoice_date_cell = IrClInvoiceDateCell;
exports.ir_cl_invoice_description_cell = IrClInvoiceDescriptionCell;
exports.ir_cl_invoice_net_price_cell = IrClInvoiceNetPriceCell;
exports.ir_cl_invoice_total_cell = IrClInvoiceTotalCell;
exports.ir_cl_invoice_vat_amount_cell = IrClInvoiceVatAmountCell;
exports.ir_cl_invoice_vat_pct_cell = IrClInvoiceVatPctCell;
