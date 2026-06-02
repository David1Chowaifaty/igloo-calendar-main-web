import { r as registerInstance, h, H as Host, F as Fragment } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';
import { f as formatAmount } from './utils-b9cc2b7c.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import './index-87419685.js';
import './locales.store-cb784e95.js';
import './index-f100e9d2.js';

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
        return (h(Host, { key: '0aa9baf49e3618919904b424118018b735124863' }, h("header", { key: '4f5bb63e260bbfbf7da184eb3cd88c949dff35fc', class: "invoice__header" }, h("h3", { key: 'c94d509312ccaf85cbb2c4c1bc8dd043b35ee6be', class: "invoice__title" }, this.documentTitle), h("section", { key: 'cf812b497251e76a944da49fbe942dd523d394cc', class: "invoice__layout" }, h("div", { key: '8217b58578c6cf0de28a1bfa5fc8996d08f65365', class: "invoice__column invoice__column--details" }, h("div", { key: '1e437aa196524c37ee6ac0ca08752951729a85b4', class: "invoice__details" }, this.documentNumber && (h("div", { key: '58438570c3e5b008ccc2d56789e395f2e1cd0eb9', class: "invoice__meta-row" }, h("span", { key: 'a3a329556b10db0a0c254ea9581a2da05fe32b3f', class: "invoice__meta-label" }, "Document #"), h("span", { key: '8b316bf3ee554e20f075585dbd97ca1657e39078', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '4bdae8d6e7bb58405138c953f87bf680cb038713', class: "invoice__meta-row" }, h("span", { key: '348a9ca814c4e008af2c65251e9f708d8b192ba4', class: "invoice__meta-label" }, "Date"), h("span", { key: 'fa51157ff143ce913d5f1351b5d4e994390ab9ba', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: 'f6d2b3494c42c33071179642b982d7e60c2eee6a', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: '3436a91c9b002147c34388019689547cc2ea74e3', class: "section-heading" }, "Bill To"), h("div", { key: '35ffb4364762a6d868d678a589f54703f58d6084', class: "bill-to" }, h("p", { key: '47c426afe7ffee131950a67987226d3431397231', class: "bill-to__name" }, this.agentName))))), h("div", { key: '1a07ccef3b6a4c03b56b95c0d82f6ea739c0ed71', class: "invoice__column invoice__column--property" }, h("div", { key: '11a01f8169ebc2d7979e5c6a743cbd02a27ee25d', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '061d31cabc2fe160d46777e0c228efdb1418913a', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: 'fb20cb1e300fd637d1770090e12509e4e5cba70b', class: "property-overview__text" }, h("p", { key: '80fdf56a4e58970bce1b5f077d7489ab5383b6c3', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: 'c4b9a0f2634c2840069152f0209089e634d5e9e1', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: 'bb6af90132c6b2506b22fa2ecdfb88a3250a9516', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'e21f5d0f1ced9f23e67415423bd9c301ced6720c', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '88e0b43c58568d0d88d2a3e063160fd838c84c69', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: 'b48f13b6c0c0e5bd19e328ede937eaa7cdc2e8db', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
        return (h(Host, { key: 'd6292cc740bf9bd66cff4530c0dc4bc3cdabdf7e' }, h("section", { key: '1cce84d9ccd780fe41fbc78772bd822e6bfc2038', class: "invoice-items" }, h("table", { key: '4065845a44d47266bfac90cda54e98923dd071f0', class: "cl-table" }, h("thead", { key: '34e167d8f4e439f08c23d4f3f2578fba9253f82e' }, h("tr", { key: '5e5d6d2e15b518b1ec5f1016851c63d9e1fb4051' }, h("th", { key: 'fe5155fe99070917e71b9f03b651d753b75f9a0e', class: "cl-th" }, "Date"), h("th", { key: '4c999c886b9c075daaeaa46aac768b2619470099', class: "cl-th", style: { width: '100%' } }, "Description"), h("th", { key: '5eea98988d04aeb50311fa4ba853cb4f2472cc99', class: "cl-th cl-th--num" }, "Net Price"), h("th", { key: '1b32fcaa2c3a70b768410723aee2fcd1c6322f0c', class: "cl-th" }, "VAT"), h("th", { key: 'd1a3858fde35b6ff0b385941a65d0a1185a943f6', class: "cl-th cl-th--num" }, "VAT Amount"), this.showCityTax && (h("th", { key: '16432d120298a1cbb0d66b10bcfe495922949cb5', class: "cl-th" }, "City ", h("br", { key: 'deb6c404cb89b13501a43d0b22545648783c20b1' }), "Tax")), this.showCityTax && (h("th", { key: 'ecb6704369a9f3a219757f85274c6b90a18516fc', class: "cl-th cl-th--num" }, "City Tax", h("br", { key: '19f5c267784366dffd1907b2372cc0bd816496c0' }), " Amount")), h("th", { key: '642cfc9404c2db61a5c2ec4e80733e1a2d383047', class: "cl-th cl-th--num" }, "Total"))), h("tbody", { key: '9ce3c572e43dee6d59eb07e9e92d25bee2a76411' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, "No transactions found for this document."))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
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
        return h(Host, { key: '3e8136a285962b4b5539cb3d43a2bcf9904c5237' }, this.cityTaxPercent > 0 ? formatAmount(this.currencySymbol, this.amount) : '');
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
        return h(Host, { key: 'caa9a485a68855640cd51fd560f26bd8674af855' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
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
        return h(Host, { key: 'fa56f00e3973c78b844f76f4b56c03c940f4c272' }, hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
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
        return (h(Host, { key: '22da6fa874d189a90a157cae5004429c4d2c8a5f' }, h("span", { key: '4d898d66921107e0c5e06b617cb60afb7b98c2c6', class: "desc" }, this.description)));
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
        return h(Host, { key: '0af0efa562565a079d85027c549ffa1aa86dccaa' }, formatAmount(this.currencySymbol, this.amount));
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
        return h(Host, { key: '5932e65f9bbb9e031805ed7f91241b6ca47147ee' }, formatAmount(this.currencySymbol, this.amount));
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
        return h(Host, { key: 'c296392475d0ccea91520355edf8b1ae3d5aca75' }, formatAmount(this.currencySymbol, this.amount));
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
        return h(Host, { key: 'ec11a8c909e8339c0ae95415bd09b2b84f24ff18' }, this.vatPercent, "%");
    }
};
IrClInvoiceVatPctCell.style = IrClInvoiceVatPctCellStyle0;

export { IrClDocumentHeader as ir_cl_document_header, IrClFiscalDocumentTable as ir_cl_fiscal_document_table, IrClInvoiceCityTaxAmountCell as ir_cl_invoice_city_tax_amount_cell, IrClInvoiceCityTaxPctCell as ir_cl_invoice_city_tax_pct_cell, IrClInvoiceDateCell as ir_cl_invoice_date_cell, IrClInvoiceDescriptionCell as ir_cl_invoice_description_cell, IrClInvoiceNetPriceCell as ir_cl_invoice_net_price_cell, IrClInvoiceTotalCell as ir_cl_invoice_total_cell, IrClInvoiceVatAmountCell as ir_cl_invoice_vat_amount_cell, IrClInvoiceVatPctCell as ir_cl_invoice_vat_pct_cell };

//# sourceMappingURL=ir-cl-document-header_10.entry.js.map