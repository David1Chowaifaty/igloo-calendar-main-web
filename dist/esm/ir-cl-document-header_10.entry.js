import { r as registerInstance, h, H as Host, F as Fragment } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';
import { f as formatAmount } from './utils-3c91939f.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import './index-87419685.js';
import './locales.store-cb784e95.js';
import './index-f100e9d2.js';
import './type-501de9b6.js';

const irClDocumentHeaderCss = ":host{display:block}@media print{.invoice__meta-label{color:#374151}.section-heading{color:#374151}.property-overview__location{color:#374151}}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}";
const IrClDocumentHeaderStyle0 = irClDocumentHeaderCss;

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
        return (h(Host, { key: 'd86b523f9b59f934d85cc4717ea8a62e2916a486' }, h("header", { key: '534fad4f12682e884d28b6e8f837b6dfb4137d66', class: "invoice__header" }, h("h3", { key: 'fd982ee878fa9faab329b06fcf8697cc4d76afbb', class: "invoice__title" }, this.documentTitle), h("section", { key: '5f5e2b5cb17d131b97366052c02c0dfc2ab0b1e1', class: "invoice__layout" }, h("div", { key: '0bd47ffe047b6f49dfe600787decd16b3df33591', class: "invoice__column invoice__column--details" }, h("div", { key: 'b1d2c990c7dd2d3103584e90df9215e1f66076a5', class: "invoice__details" }, this.documentNumber && (h("div", { key: 'fe3be14c4f17cef662838676a707a6d190aa0d32', class: "invoice__meta-row" }, h("span", { key: '26855d4d94973e863c47944b52d5b424cb271388', class: "invoice__meta-label" }, "Document #"), h("span", { key: '3dbc088da25c604410d056a2af4004ef0a8e04a1', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '9e7ec80f915f91a77f96e400eb20c19557962789', class: "invoice__meta-row" }, h("span", { key: '5eaf4c52a663753e74abeb75233e61fb7c177a21', class: "invoice__meta-label" }, "Date"), h("span", { key: '228aa74890b839572ece48c1f145bee7570b4c5c', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'c8024ddbcf5780a66bebda43a93a6756ef7fc0f6', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '70878f1075d94e13962271b44ec74d86e606292b', class: "section-heading" }, "Bill To"), h("div", { key: '250de234d5708aa51902adc985e21dfcd090d581', class: "bill-to" }, h("p", { key: 'd9597c87d0201b9eb3f44d426b208dd769198f9f', class: "bill-to__name" }, this.agentName))))), h("div", { key: '5b0d15ac31c83c19aa2c7e593f075e8d14617766', class: "invoice__column invoice__column--property" }, h("div", { key: 'd92ee0c1ea95e30884bd740de6d2876baa9e481b', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '82a8b58cdd90bc4be205ce4cf935d0b8e2f135b1', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '17d485c81142199467b45fd33b95c70f119d17df', class: "property-overview__text" }, h("p", { key: '36244a427983b598fc316a2d5df53b58da7de0b8', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '677a85de64a46830e819158ed6fbe054f01efd82', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'd08a656a88ef4c746bd29166b6d156e1d16aeb20', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'ad8a277fb015ea7d275438bea4cc88773304a2b6', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '7dd3913d26641061769c50c90dfe81b9c763c99a', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'd91434b9761c041dcb95d9f124ac097737648c04', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
    }
};
IrClDocumentHeader.style = IrClDocumentHeaderStyle0;

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

const irClFiscalDocumentTableCss = ".cl-table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.cl-th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;text-transform:capitalize;color:#374151;border-top:2px solid #111827;border-bottom:1px solid #111827;white-space:nowrap}.cl-th--num{text-align:right}.cl-td{padding:0.45rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle}.cl-td--num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}.cl-td--muted{color:#6b7280}.cl-td--bold{font-weight:700;color:#111827}.cl-td--nowrap{white-space:nowrap}.cl-td--empty{text-align:center;color:#6b7280;padding:1.5rem 0.75rem;font-style:italic}.cl-balance-row td{background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-weight:600;color:#111827;padding-top:0.5rem;padding-bottom:0.5rem}@media print{.cl-table{font-size:0.75rem}.cl-th,.cl-td{padding:0.35rem 0.5rem}.cl-td--muted,.cl-td--empty{color:#374151}.cl-balance-row td{-webkit-print-color-adjust:exact;print-color-adjust:exact}.cl-balance-row{page-break-inside:avoid}}:host{display:block}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__td--desc-cell{white-space:normal;word-break:break-word}.invoice-items__booking-row td{padding:0.5rem 0.75rem;background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-size:0.8125rem;font-weight:600;color:#374151}.invoice-items__unit-row td{padding:0.375rem 0.75rem 0.375rem 1.75rem;background:#f9fafb;border-bottom:1px solid #f3f4f6;font-size:0.8125rem;font-weight:600;color:#6b7280}.invoice-items__row--indent-1 td:first-child{padding-left:1.75rem}.invoice-items__row--indent-2 td:first-child{padding-left:3rem}@media print{.invoice-items{overflow-x:visible}.invoice-items__unit-row td{color:#374151}}";
const IrClFiscalDocumentTableStyle0 = irClFiscalDocumentTableCss;

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
        return (h(Host, { key: '1b82c7b61493e42dc0eb7280ccc18214904da49c' }, h("section", { key: '4556f711e75b94609f148be14d968dbc9bb993df', class: "invoice-items" }, h("table", { key: '731f64da8a8a050d58589a92280f76cf54ece256', class: "cl-table" }, h("thead", { key: 'ec983fb20cc84b69d9b234d7fa738a7910d084c9' }, h("tr", { key: '3f89cf916217598a1f5a39189f52b8c034150696' }, h("th", { key: '781def21400efa006726be2ffdf47d6fcd70ba02', class: "cl-th" }, "Date"), h("th", { key: 'ffe8aa01914a5fec4e28983db60390b3dcd66188', class: "cl-th", style: { width: '100%' } }, "Description"), h("th", { key: 'e8705ee7969f5558d92f397b05ae168b2ff03527', class: "cl-th cl-th--num" }, "Net Price"), h("th", { key: '2200508c760f993a4bce9b953f1944bd4f39729c', class: "cl-th" }, "VAT"), h("th", { key: 'df8a7a10e92abc8f440b896d24ee6bdb72b9cf4d', class: "cl-th cl-th--num" }, "VAT Amount"), this.showCityTax && (h("th", { key: 'adf56428268c92ed02687cb416d97008bbce0744', class: "cl-th" }, "City ", h("br", { key: '6b8cf7a3476fb7995a0c76c83b5a3e2fefed5a0b' }), "Tax")), this.showCityTax && (h("th", { key: 'a3126be4c1104d7b00e98fe319a1f3b04d6c4463', class: "cl-th cl-th--num" }, "City Tax", h("br", { key: '038ffc102220d50cf4fcb0ab3248834851d3ec1a' }), " Amount")), h("th", { key: 'c99d0b26ca6f667e24d4d9b2ac54649e8ec9a1e7', class: "cl-th cl-th--num" }, "Total"))), h("tbody", { key: '44916d4d64292f84f4225be7db5daaba080fe167' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, "No transactions found for this document."))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
    }
};
IrClFiscalDocumentTable.style = IrClFiscalDocumentTableStyle0;

const irClInvoiceCityTaxAmountCellCss = ".sc-ir-cl-invoice-city-tax-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::before,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-amount-cell{display:none !important}.sc-ir-cl-invoice-city-tax-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxAmountCellStyle0 = irClInvoiceCityTaxAmountCellCss;

const IrClInvoiceCityTaxAmountCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    cityTaxPercent;
    render() {
        return h(Host, { key: 'ddaaa6e7590f391f26b6a1c8afe7c74e3f0bc37e' }, this.cityTaxPercent > 0 ? formatAmount(this.currencySymbol, this.amount) : '');
    }
};
IrClInvoiceCityTaxAmountCell.style = IrClInvoiceCityTaxAmountCellStyle0;

const irClInvoiceCityTaxPctCellCss = ".sc-ir-cl-invoice-city-tax-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::before,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-pct-cell{display:none !important}.sc-ir-cl-invoice-city-tax-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxPctCellStyle0 = irClInvoiceCityTaxPctCellCss;

const IrClInvoiceCityTaxPctCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    cityTaxPercent;
    render() {
        return h(Host, { key: '874168c91ddeeca25548b07818fd1382d73d22e6' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
    }
};
IrClInvoiceCityTaxPctCell.style = IrClInvoiceCityTaxPctCellStyle0;

const irClInvoiceDateCellCss = ".sc-ir-cl-invoice-date-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::before,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-date-cell{display:none !important}.sc-ir-cl-invoice-date-cell-h{display:block;white-space:nowrap}";
const IrClInvoiceDateCellStyle0 = irClInvoiceDateCellCss;

const IrClInvoiceDateCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    date;
    render() {
        return h(Host, { key: '4a1ce840ba30d4f15f506e692772f6f86429a730' }, hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
    }
};
IrClInvoiceDateCell.style = IrClInvoiceDateCellStyle0;

const irClInvoiceDescriptionCellCss = ".sc-ir-cl-invoice-description-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::before,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-description-cell{display:none !important}.sc-ir-cl-invoice-description-cell-h{display:block}.desc.sc-ir-cl-invoice-description-cell{display:block}";
const IrClInvoiceDescriptionCellStyle0 = irClInvoiceDescriptionCellCss;

const IrClInvoiceDescriptionCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    description;
    render() {
        return (h(Host, { key: 'f7dcfedf0c9f9d6f7473c66bb11d16c145a92c1b' }, h("span", { key: 'e11d52a1810d61735babb0617f35e6fd6762f442', class: "desc" }, this.description)));
    }
};
IrClInvoiceDescriptionCell.style = IrClInvoiceDescriptionCellStyle0;

const irClInvoiceNetPriceCellCss = ".sc-ir-cl-invoice-net-price-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::before,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-net-price-cell{display:none !important}.sc-ir-cl-invoice-net-price-cell-h{display:block;text-align:right}";
const IrClInvoiceNetPriceCellStyle0 = irClInvoiceNetPriceCellCss;

const IrClInvoiceNetPriceCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: 'a60f3378434a38fbea9abe19f79546d016cb3712' }, formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceNetPriceCell.style = IrClInvoiceNetPriceCellStyle0;

const irClInvoiceTotalCellCss = ".sc-ir-cl-invoice-total-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::before,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-total-cell{display:none !important}.sc-ir-cl-invoice-total-cell-h{display:block;text-align:right}";
const IrClInvoiceTotalCellStyle0 = irClInvoiceTotalCellCss;

const IrClInvoiceTotalCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: '7b46a60d5414ec76c5f8cfeef0681c6835acff00' }, formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceTotalCell.style = IrClInvoiceTotalCellStyle0;

const irClInvoiceVatAmountCellCss = ".sc-ir-cl-invoice-vat-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::before,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-amount-cell{display:none !important}.sc-ir-cl-invoice-vat-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceVatAmountCellStyle0 = irClInvoiceVatAmountCellCss;

const IrClInvoiceVatAmountCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: '56d2fd39ead1835bfc1247675ddde70a17d53f9f' }, formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceVatAmountCell.style = IrClInvoiceVatAmountCellStyle0;

const irClInvoiceVatPctCellCss = ".sc-ir-cl-invoice-vat-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::before,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-pct-cell{display:none !important}.sc-ir-cl-invoice-vat-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceVatPctCellStyle0 = irClInvoiceVatPctCellCss;

const IrClInvoiceVatPctCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    vatPercent;
    render() {
        return h(Host, { key: '2c84040772adc00fe4e02883246c5715fd1a367d' }, this.vatPercent, "%");
    }
};
IrClInvoiceVatPctCell.style = IrClInvoiceVatPctCellStyle0;

export { IrClDocumentHeader as ir_cl_document_header, IrClFiscalDocumentTable as ir_cl_fiscal_document_table, IrClInvoiceCityTaxAmountCell as ir_cl_invoice_city_tax_amount_cell, IrClInvoiceCityTaxPctCell as ir_cl_invoice_city_tax_pct_cell, IrClInvoiceDateCell as ir_cl_invoice_date_cell, IrClInvoiceDescriptionCell as ir_cl_invoice_description_cell, IrClInvoiceNetPriceCell as ir_cl_invoice_net_price_cell, IrClInvoiceTotalCell as ir_cl_invoice_total_cell, IrClInvoiceVatAmountCell as ir_cl_invoice_vat_amount_cell, IrClInvoiceVatPctCell as ir_cl_invoice_vat_pct_cell };

//# sourceMappingURL=ir-cl-document-header_10.entry.js.map