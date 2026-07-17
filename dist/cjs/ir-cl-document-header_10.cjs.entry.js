'use strict';

var index = require('./index-Bg4VKYKR.js');
var moment = require('./moment-CdViwxPQ.js');
var utils = require('./utils-Bb-1iFW2.js');
var calendarData = require('./calendar-data-D7gl8C6U.js');
require('./index-CLqkDPTC.js');
require('./locales.store-B208i_tH.js');
require('./index-KxiFTvIk.js');
require('./type-Dy9pVS4V.js');

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
        return (index.h(index.Host, { key: 'be95b377d5046835fcb860768e9e00e37f2ef614' }, index.h("header", { key: '8d5764d35cebaa2280ef58ff3c0c724894f790b4', class: "invoice__header" }, index.h("h3", { key: 'a64808271d9606201ca03a910d0a9303d73b3a84', class: "invoice__title" }, this.documentTitle), index.h("section", { key: 'b77d872e5d0a3c210617908a206ac5d3e5933024', class: "invoice__layout" }, index.h("div", { key: '5f518be9fbe284acfeaf440a9bb04c39927898c4', class: "invoice__column invoice__column--details" }, index.h("div", { key: '0a67388945d724d7145830aee853b70202936ee2', class: "invoice__details" }, this.documentNumber && (index.h("div", { key: '72586667b156327a68ffc7d92767d0840c3bd698', class: "invoice__meta-row" }, index.h("span", { key: '580c10d304b5572d2eb6d03ae58c21e0033ccafc', class: "invoice__meta-label" }, "Document #"), index.h("span", { key: '34376fcfbbe3a21dd27de6a5b6a6f101acdde56f', class: "invoice__meta-value" }, this.documentNumber))), index.h("div", { key: '6718872a844c10a4c16df9646c07951dd4614241', class: "invoice__meta-row" }, index.h("span", { key: '8032ed38b62570d049e62597ba585bf297a5cb5a', class: "invoice__meta-label" }, "Date"), index.h("span", { key: 'c817166cae3d2ebdcd79d6ff17094b90aaea60d4', class: "invoice__meta-value" }, moment.hooks().format(DATE_DISPLAY)))), this.agentName && (index.h("section", { key: '4590e865bdcb858427cad3ef266df8f83138ed72', class: "bill-to-section", "aria-label": "Bill to" }, index.h("h4", { key: '469698f546e883f19739c2b1e2d51808d5207cf4', class: "section-heading" }, "Bill To"), index.h("div", { key: '666d8e1c3e4bc853b9c1030fe9a09ad1b8b66619', class: "bill-to" }, index.h("p", { key: 'f9485a44182b0816ed087c0ca646bf0104e4e371', class: "bill-to__name" }, this.agentName))))), index.h("div", { key: '7d93083f28cd4c2264ad66e42dd99ce021143429', class: "invoice__column invoice__column--property" }, index.h("div", { key: '955538c43a3bbe18d395a0bfb7500dd4b50e3191', class: "property-overview", "aria-label": "Property overview" }, logo && index.h("img", { key: '4c247abc11338ab4af0ac16cf241db27de1cdd55', src: logo, alt: p?.name, class: "property-logo" }), index.h("div", { key: '41fe9c53b4b264527954ed3618e193c368d0560c', class: "property-overview__text" }, index.h("p", { key: '7189bca5b56abe36cc281adf50b436141d11aedb', class: "property-overview__name" }, p?.name), propertyLocation && index.h("p", { key: '498d1a6d72b49267fe3faaf15630de2dc6318159', class: "property-overview__location" }, propertyLocation), p?.address && index.h("p", { key: '3cc209be3ef85cde270a9e7f9bda9b86a021675a', class: "property-overview__location" }, p.address), p?.phone && index.h("p", { key: '2397829a6ae21de49a6f3f6bd01a4ca7266c8db4', class: "property-overview__location" }, p.phone), this.primaryContact?.email && index.h("p", { key: '44b566cdd05d8391dc31cf3a874b67578f614451', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && index.h("p", { key: 'c185507e095bc333d5bf7bd9ee9198e4d945836d', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
        return (index.h(index.Host, { key: 'f839c6ea07ac91c15f8184241641dc5b6c193d6e' }, index.h("section", { key: 'f917fad45123783cdb45fc730b336e68eeb17cf4', class: "invoice-items" }, index.h("table", { key: '64272e359756e57806754347656453a0906c9ef3', class: "cl-table" }, index.h("thead", { key: '7c4f831e5f1c61d85b1a861e2fec4845bea184bb' }, index.h("tr", { key: '11bbf55bb526f8ba673e3f1e41450d8441175d0c' }, index.h("th", { key: '19016328dbe860fd2ddcf775e3e0e754f1d97326', class: "cl-th" }, "Date"), index.h("th", { key: 'a28dcb62d0a18fb08c95801fd2a96dff296050f6', class: "cl-th", style: { width: '100%' } }, "Description"), index.h("th", { key: 'afbf94cf472949b42967843561e1bb946320fcda', class: "cl-th cl-th--num" }, "Net Price"), index.h("th", { key: 'a8bbe66ef3b3bbab1148208c924495810134d7a0', class: "cl-th" }, "VAT"), index.h("th", { key: '5301652cce7ea49e01eede03b034103a7951198e', class: "cl-th cl-th--num" }, "VAT Amount"), this.showCityTax && (index.h("th", { key: '4604d5502d37cc226aa0490647b6a6e7124e3b3d', class: "cl-th" }, "City ", index.h("br", { key: 'dcb3d6ceaf0d70931d8ea6d922f989e9235d6b2c' }), "Tax")), this.showCityTax && (index.h("th", { key: '2f212d49df29e29f91809a61b2783cc01c28a9f8', class: "cl-th cl-th--num" }, "City Tax", index.h("br", { key: '2c680ff76a81de548521421975cbee2aecf56baa' }), " Amount")), index.h("th", { key: '9707c2a730f9d26929e6be81dd17ad04708b7491', class: "cl-th cl-th--num" }, "Total"))), index.h("tbody", { key: 'c766915f8e28c9c4d7d81b03f1a879fd7827e1e8' }, this.transactions.length === 0 ? (index.h("tr", null, index.h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, "No transactions found for this document."))) : (index.h(index.Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
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
        return index.h(index.Host, { key: '8bcd8908386642d8f25c90b8a07cdb390fc165ed' }, this.cityTaxPercent > 0 ? utils.formatAmount(this.currencySymbol, this.amount) : '');
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
        return index.h(index.Host, { key: '5d9412048ac9ed56c38a87fc2e5b67a5d32eef15' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
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
        return index.h(index.Host, { key: 'cd0f6a83053f425161304e96ff9128c2a56d2357' }, moment.hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
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
        return (index.h(index.Host, { key: 'c224710bfb2a51c9b6a5ff353d3adaec87ef49d3' }, index.h("span", { key: 'd0e5ff0f33a813c87fb6378e5c48d49005a10903', class: "desc" }, this.description)));
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
        return index.h(index.Host, { key: 'a4965a5b760b281d29a46ca7942ae23675a26074' }, utils.formatAmount(this.currencySymbol, this.amount));
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
        return index.h(index.Host, { key: 'cece324a45c0db4b088d6142a804c5f36c86e9f7' }, utils.formatAmount(this.currencySymbol, this.amount));
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
        return index.h(index.Host, { key: 'd0030d75dca2f58482a2057c19b5dbd41df02f44' }, utils.formatAmount(this.currencySymbol, this.amount));
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
        return index.h(index.Host, { key: '3640989eb8a16b647ef3ef782edb80b2601c5918' }, this.vatPercent, "%");
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
