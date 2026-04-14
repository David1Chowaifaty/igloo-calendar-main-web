'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-f4749fef.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
require('./index-8bb117a0.js');
require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');
require('./type-393ac773.js');

const irClDocumentHeaderCss = ":host{display:block}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}";
const IrClDocumentHeaderStyle0 = irClDocumentHeaderCss;

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
            default:
                return '';
        }
    }
    render() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        const propertyLocation = [p?.city?.['name'] ?? null, p?.country?.name ?? null].filter(f => f !== null).join(', ');
        return (index.h(index.Host, { key: '93cc3b5e051d5f75d935581ecfb0c2216f5e72ff' }, index.h("header", { key: 'b1b7cec3f150160e2f54455b7786bb4fd005de10', class: "invoice__header" }, index.h("h3", { key: '5c2fcf2ac52eba6f611654dd1ed775ef3e6df3e7', class: "invoice__title" }, this.documentTitle), index.h("section", { key: 'e9eae2caae3606880fe95ef4fd22c767b8deb0b5', class: "invoice__layout" }, index.h("div", { key: '95d790dced1584eb496e8aff2cb812cd6c48ebb6', class: "invoice__column invoice__column--details" }, index.h("div", { key: '028a167ac571ec714fdf390519ace9a9bcdcd9f8', class: "invoice__details" }, this.documentNumber && (index.h("div", { key: '8bb55b5220dd6f7f5255400604fd2d99ab643740', class: "invoice__meta-row" }, index.h("span", { key: '8f4a5d9936273a0a3aef7f070f47b5c28c148f60', class: "invoice__meta-label" }, "Document #"), index.h("span", { key: '7c90fd1643f2a583c1aa9851942613508bb8778d', class: "invoice__meta-value" }, this.documentNumber))), index.h("div", { key: '0ddefebbb8d082bc0cfdaeb0610b2b34e7bf9e8c', class: "invoice__meta-row" }, index.h("span", { key: '87981defd93c07ed1e57706124430ccc6a7dc5e7', class: "invoice__meta-label" }, "Date"), index.h("span", { key: '5e0129b19209a7c68ee087be90bed8b7ffe77ce5', class: "invoice__meta-value" }, moment.hooks().format(DATE_DISPLAY)))), this.agentName && (index.h("section", { key: '52dc1c9a71c44c9034d0d38c6741074c2cc0f27b', class: "bill-to-section", "aria-label": "Bill to" }, index.h("h4", { key: '16b2209eb843e41cdf779ae89fc1e716c7383291', class: "section-heading" }, "Bill To"), index.h("div", { key: '095d355afb461b8d68fee4fe1e89f8613cf31332', class: "bill-to" }, index.h("p", { key: 'ae1ce0b1c8ea918af801a4e6c0cf35b53231c582', class: "bill-to__name" }, this.agentName))))), index.h("div", { key: 'f7cf5887ba04204b274c4561ebae2c62d766a1b4', class: "invoice__column invoice__column--property" }, index.h("div", { key: 'e873e4427b2fde56cd0f85263399aaf8137ffb90', class: "property-overview", "aria-label": "Property overview" }, logo && index.h("img", { key: 'af9b86d546087f2d752adb4289605d3733e5355b', src: logo, alt: p?.name, class: "property-logo" }), index.h("div", { key: 'c8acb9b7c4e990b7978b5798acfc62b9f0ffe2f1', class: "property-overview__text" }, index.h("p", { key: 'bace72d95d0d38d229c144f35ff5293d92a9627d', class: "property-overview__name" }, p?.name), propertyLocation && index.h("p", { key: 'd8d855cebe37b78583080e3db712fe5096da0573', class: "property-overview__location" }, propertyLocation), p?.address && index.h("p", { key: '4145a8cec88e6088990003e6136b30f5bf15bdea', class: "property-overview__location" }, p.address), p?.phone && index.h("p", { key: '3ce3a47477b0fecbdc538d5c7389b09b82864280', class: "property-overview__location" }, p.phone), this.primaryContact?.email && index.h("p", { key: 'bb82239264d22a26a7ffbe5f9f190c0f0debd382', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && index.h("p", { key: 'f7fbb434a17d03bbfbfb6ad272e97397ac6ee50a', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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

const irClFiscalDocumentTableCss = ":host{display:block}.invoice-items{margin-bottom:1.5rem;overflow-x:auto}.invoice-items__table{width:100%;border-collapse:collapse;font-size:0.8125rem;table-layout:auto}.invoice-items__th{padding:0.5rem 0.75rem;text-align:left;font-size:0.75rem;font-weight:600;letter-spacing:0.06em;color:#6b7280;background:#f9fafb;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}.invoice-items__th--num{text-align:right}.invoice-items__th--nowrap{white-space:nowrap}.invoice-items__row:hover{background:#f9fafb}.invoice-items__td{padding:0.5rem 0.75rem;border-bottom:1px solid #f3f4f6;color:#374151;vertical-align:middle;white-space:nowrap}.invoice-items__td--date{color:#6b7280}.invoice-items__td--desc-cell{white-space:normal;word-break:break-word}.invoice-items__td--pct{color:#6b7280}.invoice-items__td--num{text-align:right;font-variant-numeric:tabular-nums;font-weight:500;color:#6b7280}.invoice-items__td--num-primary,.invoice-items__th--num-primary{text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:#111827}.invoice-items__empty{padding:2rem;text-align:center;color:#9ca3af}.invoice-items__booking-row td{padding:0.5rem 0.75rem;background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb;font-size:0.8125rem;font-weight:600;color:#374151}.invoice-items__unit-row td{padding:0.375rem 0.75rem 0.375rem 1.75rem;background:#f9fafb;border-bottom:1px solid #f3f4f6;font-size:0.8125rem;font-weight:600;color:#6b7280}.invoice-items__row--indent-1 td:first-child{padding-left:1.75rem}.invoice-items__row--indent-2 td:first-child{padding-left:3rem}@media print{.invoice-items{overflow-x:visible}.invoice-items__table{font-size:0.75rem}.invoice-items__th,.invoice-items__td{padding:0.35rem 0.5rem}}";
const IrClFiscalDocumentTableStyle0 = irClFiscalDocumentTableCss;

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
    get totals() {
        return this.transactions.reduce((acc, tx) => ({
            net: acc.net + (tx.NET_AMOUNT ?? 0),
            tax: acc.tax + (tx.TAX_AMOUNT ?? 0),
            total: acc.total + (tx.TOTAL_AMOUNT ?? 0),
        }), { net: 0, tax: 0, total: 0 });
    }
    renderTxRow(tx, indent = 0) {
        const cls = indent > 0 ? `invoice-items__row--indent-${indent}` : undefined;
        return (index.h("tr", { key: String(tx.CL_TX_ID), class: cls }, index.h("td", { class: "invoice-items__td invoice-items__td--date" }, index.h("ir-cl-invoice-date-cell", { date: tx.ENTRY_DATE })), index.h("td", { class: "invoice-items__td invoice-items__td--desc-cell" }, index.h("ir-cl-invoice-description-cell", { description: tx.DESCRIPTION })), index.h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, index.h("ir-cl-invoice-net-price-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.NET_AMOUNT) })), index.h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, index.h("ir-cl-invoice-vat-pct-cell", { vatPercent: tx.VAT_PERCENT })), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, index.h("ir-cl-invoice-vat-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.VAT_AMOUNT) })), index.h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, index.h("ir-cl-invoice-city-tax-pct-cell", { cityTaxPercent: tx.CITY_TAX_PERCENT })), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, index.h("ir-cl-invoice-city-tax-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.CITY_TAX_AMOUNT), cityTaxPercent: tx.CITY_TAX_PERCENT })), index.h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, index.h("ir-cl-invoice-total-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.TOTAL_AMOUNT) }))));
    }
    renderUnitGroup(group) {
        const roomName = this.prIdDict.get(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID)?.name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID)?.short_name}`;
        return (index.h(index.Fragment, null, index.h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, index.h("td", { colSpan: 8 }, index.h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, index.h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), moment.hooks(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", moment.hooks(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
    }
    renderBookingGroup(group) {
        return (index.h(index.Fragment, null, group.subRows.length > 1 && (index.h("tr", { key: `booking-hdr-${group.BOOK_NBR}`, class: "invoice-items__booking-row" }, index.h("td", { colSpan: 8 }, index.h("span", { style: { fontSize: '1rem', fontWeight: 'bold' } }, "#", group.BOOK_NBR)))), group.subRows.map(item => {
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
        return (index.h("tr", null, index.h("td", { class: "invoice-items__td" }), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, "Net Price"), index.h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, this.renderMoney(t.net)), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, "Taxes"), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, this.renderMoney(t.tax)), index.h("td", { class: "invoice-items__td invoice-items__td--num" }), index.h("td", { class: "invoice-items__td invoice-items__td--num" }, "Total"), index.h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, this.renderMoney(t.total))));
    }
    render() {
        return (index.h(index.Host, { key: '9bf1bd5b1dd835808a4f22b8dd9c8e50229d9389' }, index.h("section", { key: '67f63402078d120ff82041deaeed466e96f27db3', class: "invoice-items" }, index.h("table", { key: '756de8dec9844786005182d136c63b6d3ebf0cc2', class: "invoice-items__table" }, index.h("thead", { key: '9daeadb78a906bc1ce463e17f4e039f8a7bf2f2d' }, index.h("tr", { key: '675cc413e5efb4d03ca496a89d9865e201759164' }, index.h("th", { key: 'e02923d4e13be4d24f27bf98e6c2f1e3986dc6e8', class: "invoice-items__th invoice-items__th--nowrap" }, "Date"), index.h("th", { key: 'a7231af9e54cba9256a3e14232808734daaf0765', class: "invoice-items__th", style: { width: '100%' } }, "Description"), index.h("th", { key: '1e9f131ea43f83cf238ff98fb872d01fdc1151b2', class: "invoice-items__th invoice-items__th--num-primary invoice-items__th--nowrap" }, "Net Price"), index.h("th", { key: '72c153f269fe48d3379df75825ca796d92aae977', class: "invoice-items__th invoice-items__th--nowrap" }, "VAT"), index.h("th", { key: '4b2347507843fb856c1340c54ced843acca2435c', class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "VAT Amount"), index.h("th", { key: 'e090d837ef37cab26fcfec9a687ecc46fc532a24', class: "invoice-items__th invoice-items__th--nowrap" }, "City", index.h("br", { key: '75bd037a38ff9ced292575cf7e042db78c982820' }), " Tax"), index.h("th", { key: '21a1d619c0fb614fc8a1c0e1a44585044f3bce0d', class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "City Tax", index.h("br", { key: '6be71cee0138b534975be6a92302991d04a54f90' }), " Amount"), index.h("th", { key: '93550bb8c44a86aa6d9cbd882d7eaa512501ed19', class: "invoice-items__th invoice-items__th--num-primary invoice-items__th--nowrap" }, "Total"))), index.h("tbody", { key: 'e316bd31d8b826c5ece0c20ea40293e16e0821db' }, this.transactions.length === 0 ? (index.h("tr", null, index.h("td", { class: "invoice-items__empty", colSpan: 8 }, "No transactions found for this document."))) : (index.h(index.Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
    }
};
IrClFiscalDocumentTable.style = IrClFiscalDocumentTableStyle0;

const irClInvoiceCityTaxAmountCellCss = ".sc-ir-cl-invoice-city-tax-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::before,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-amount-cell{display:none !important}.sc-ir-cl-invoice-city-tax-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxAmountCellStyle0 = irClInvoiceCityTaxAmountCellCss;

const IrClInvoiceCityTaxAmountCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    cityTaxPercent;
    render() {
        return index.h(index.Host, { key: '3a02e78de65b3fc5fe2165388be2ca36522be713' }, this.cityTaxPercent > 0 ? utils.formatAmount(this.currencySymbol, this.amount) : '');
    }
};
IrClInvoiceCityTaxAmountCell.style = IrClInvoiceCityTaxAmountCellStyle0;

const irClInvoiceCityTaxPctCellCss = ".sc-ir-cl-invoice-city-tax-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::before,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-pct-cell{display:none !important}.sc-ir-cl-invoice-city-tax-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxPctCellStyle0 = irClInvoiceCityTaxPctCellCss;

const IrClInvoiceCityTaxPctCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    cityTaxPercent;
    render() {
        return index.h(index.Host, { key: 'e0ca742fb8d868da9c7cebe6726236f07e4de64f' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
    }
};
IrClInvoiceCityTaxPctCell.style = IrClInvoiceCityTaxPctCellStyle0;

const irClInvoiceDateCellCss = ".sc-ir-cl-invoice-date-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::before,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-date-cell{display:none !important}.sc-ir-cl-invoice-date-cell-h{display:block;white-space:nowrap}";
const IrClInvoiceDateCellStyle0 = irClInvoiceDateCellCss;

const IrClInvoiceDateCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    date;
    render() {
        return index.h(index.Host, { key: 'e6454c1f7b001f9828cfd0de59a3f5a9feddbb94' }, moment.hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
    }
};
IrClInvoiceDateCell.style = IrClInvoiceDateCellStyle0;

const irClInvoiceDescriptionCellCss = ".sc-ir-cl-invoice-description-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::before,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-description-cell{display:none !important}.sc-ir-cl-invoice-description-cell-h{display:block}.desc.sc-ir-cl-invoice-description-cell{display:block}";
const IrClInvoiceDescriptionCellStyle0 = irClInvoiceDescriptionCellCss;

const IrClInvoiceDescriptionCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    description;
    render() {
        return (index.h(index.Host, { key: '45448370619800f6084961fbcfa8093dcf7d1d3c' }, index.h("span", { key: 'c94d5b292ea135fcfbd1f743fa583d5355d4a1ef', class: "desc" }, this.description)));
    }
};
IrClInvoiceDescriptionCell.style = IrClInvoiceDescriptionCellStyle0;

const irClInvoiceNetPriceCellCss = ".sc-ir-cl-invoice-net-price-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::before,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-net-price-cell{display:none !important}.sc-ir-cl-invoice-net-price-cell-h{display:block;text-align:right}";
const IrClInvoiceNetPriceCellStyle0 = irClInvoiceNetPriceCellCss;

const IrClInvoiceNetPriceCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: 'cf279c491a299263d22e25bcedea44a9280e80e1' }, utils.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceNetPriceCell.style = IrClInvoiceNetPriceCellStyle0;

const irClInvoiceTotalCellCss = ".sc-ir-cl-invoice-total-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::before,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-total-cell{display:none !important}.sc-ir-cl-invoice-total-cell-h{display:block;text-align:right}";
const IrClInvoiceTotalCellStyle0 = irClInvoiceTotalCellCss;

const IrClInvoiceTotalCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: 'b0c76a0028f2c92fbd772f77cb8d9b9b128e2267' }, utils.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceTotalCell.style = IrClInvoiceTotalCellStyle0;

const irClInvoiceVatAmountCellCss = ".sc-ir-cl-invoice-vat-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::before,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-amount-cell{display:none !important}.sc-ir-cl-invoice-vat-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceVatAmountCellStyle0 = irClInvoiceVatAmountCellCss;

const IrClInvoiceVatAmountCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    currencySymbol;
    amount;
    render() {
        return index.h(index.Host, { key: '9340d8351ee70588eef9c01fdc37dd5cd2da1306' }, utils.formatAmount(this.currencySymbol, this.amount));
    }
};
IrClInvoiceVatAmountCell.style = IrClInvoiceVatAmountCellStyle0;

const irClInvoiceVatPctCellCss = ".sc-ir-cl-invoice-vat-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::before,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-pct-cell{display:none !important}.sc-ir-cl-invoice-vat-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceVatPctCellStyle0 = irClInvoiceVatPctCellCss;

const IrClInvoiceVatPctCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    vatPercent;
    render() {
        return index.h(index.Host, { key: '23cff59006c98dbf4d5eb5f3c6626e21ff377118' }, this.vatPercent, "%");
    }
};
IrClInvoiceVatPctCell.style = IrClInvoiceVatPctCellStyle0;

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

//# sourceMappingURL=ir-cl-document-header_10.cjs.entry.js.map