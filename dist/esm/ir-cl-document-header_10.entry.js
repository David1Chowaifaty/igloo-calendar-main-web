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
        return (h(Host, { key: 'd609e85f7bcd8a1233ee48483841cb1b1e90e2be' }, h("header", { key: '2abee288f26ea383d2cbab757c41e82a1e9a1ae8', class: "invoice__header" }, h("h3", { key: '80333790e92ef333958370303c8d5ed65691e77c', class: "invoice__title" }, this.documentTitle), h("section", { key: '5246f72bdbf685c20b4f15810b88fc1a73b20cf6', class: "invoice__layout" }, h("div", { key: 'a80e73a0589587468125db22a2f719ec645d9c02', class: "invoice__column invoice__column--details" }, h("div", { key: '5fa47070a4fb91cbd45a3fce034dc65948ab1bc1', class: "invoice__details" }, this.documentNumber && (h("div", { key: '24db2e675c7d646f9402e18efe50f7afc87d24f1', class: "invoice__meta-row" }, h("span", { key: '395249301c0c5daeeaa2dcd1dd1184fed78a5b70', class: "invoice__meta-label" }, "Document #"), h("span", { key: 'c17ca94e7ac0b2bb7e33d8179509c3bf9bdb35a3', class: "invoice__meta-value" }, this.documentNumber))), h("div", { key: '437b5a7b64ad962c3702a0630659ba9163f0c380', class: "invoice__meta-row" }, h("span", { key: '08375a8e363cf717a7ba9244d5a2c61fe74ec809', class: "invoice__meta-label" }, "Date"), h("span", { key: 'a3e43280f46fa2fb8af5cd22ac0243fb54ad68f1', class: "invoice__meta-value" }, hooks().format(DATE_DISPLAY)))), this.agentName && (h("section", { key: '7c9e5edd218b43a95d6c5bcfef364d5e9bf766a0', class: "bill-to-section", "aria-label": "Bill to" }, h("h4", { key: 'c276f13df4ed189e22b73c2ba64b7a2e42e5fe3f', class: "section-heading" }, "Bill To"), h("div", { key: 'fd849f329d1ed1c6ca1a3ad4f26237bdf24f80f9', class: "bill-to" }, h("p", { key: '7232b7f4892427eb1f9955dc334ef911b3c6e362', class: "bill-to__name" }, this.agentName))))), h("div", { key: '7f52c7b534a30daf7c43383b286e1b3d4ad1e2c8', class: "invoice__column invoice__column--property" }, h("div", { key: '61bebc6e855e21e950f937a36d67432ad8094ed4', class: "property-overview", "aria-label": "Property overview" }, logo && h("img", { key: '844d96a37975f25219607cb0e756e1f93859a231', src: logo, alt: p?.name, class: "property-logo" }), h("div", { key: '912931b47e46447f1e155040b5fed46f099f692f', class: "property-overview__text" }, h("p", { key: '48aa389b8df64a7256d4a2fb41f000ee1992ed13', class: "property-overview__name" }, p?.name), propertyLocation && h("p", { key: '170ab853e4a39e784f17ee38823b886cb1708842', class: "property-overview__location" }, propertyLocation), p?.address && h("p", { key: '1e93a9a23c68222384d0b6845ceed0ba857d3a86', class: "property-overview__location" }, p.address), p?.phone && h("p", { key: 'a565abb74550674edc0c5886d1b35411aadd67ac', class: "property-overview__location" }, p.phone), this.primaryContact?.email && h("p", { key: '31425377db09f59ede773967a9c4f53296f16dee', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && h("p", { key: '4cbf3e61800ec511ddec658cd1ac1bc6a8696803', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
        return (h(Host, { key: 'c0f2f84963144d1687948ed9b9c6b05f70be8437' }, h("section", { key: 'ffabedffb406397924771a84380a7f1e8aafe781', class: "invoice-items" }, h("table", { key: '45613515d8517104b37f35260dcf47c9c200ddca', class: "cl-table" }, h("thead", { key: '84d3e15218589c42cac53be2cd6d5b3b2666f1f4' }, h("tr", { key: '74e89838cfa8b5c5246dedaf3a6fae9f6354aaad' }, h("th", { key: '907dbdbc5fbd4c31a9b167382349e5d46a427d2a', class: "cl-th" }, "Date"), h("th", { key: '771522f2cc7d4968a20f0dc19368ab569f472524', class: "cl-th", style: { width: '100%' } }, "Description"), h("th", { key: '29f97b2e55e7bbdb85150a2fa1909fdc58ab6f9b', class: "cl-th cl-th--num" }, "Net Price"), h("th", { key: '0bb3a390ee40b09234dafdfc999bc99dac05bc84', class: "cl-th" }, "VAT"), h("th", { key: 'a2e83abee4ec42b7b889f25636be0df9d4ad1bc1', class: "cl-th cl-th--num" }, "VAT Amount"), this.showCityTax && (h("th", { key: 'b9be6c750bd05c8e6dc66692a60dae13acaa37b9', class: "cl-th" }, "City ", h("br", { key: 'a4d566bbb8634e21f8b5330eb7e2f08317dd1c6b' }), "Tax")), this.showCityTax && (h("th", { key: '712d5bacd19638902dbf3378fa6c8a9fdf30ecfe', class: "cl-th cl-th--num" }, "City Tax", h("br", { key: '68207d8e9f40a919104a90533790af02571a341d' }), " Amount")), h("th", { key: '046bffbc592d63ec9ea07523a94396f5ce2ebf50', class: "cl-th cl-th--num" }, "Total"))), h("tbody", { key: '718193805e1015d96454df8a2a16224b30e8d4c8' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, "No transactions found for this document."))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
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
        return h(Host, { key: '1f7553e661da5b2c2ad4941312174b90abb0abed' }, this.cityTaxPercent > 0 ? formatAmount(this.currencySymbol, this.amount) : '');
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
        return h(Host, { key: '52995dbd040261c6d5372e7248ed3bab3effa109' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
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
        return h(Host, { key: '5a80b911bff7d1b6c4b8862320da160e9520e43a' }, hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
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
        return (h(Host, { key: '4dc946953a87d6e1e9360de13634e0fc41be2290' }, h("span", { key: '2868a7a4135e1c1d04da44ee2e5267b1688ab0b3', class: "desc" }, this.description)));
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
        return h(Host, { key: 'fe8e3eaa1d2f380b479b1923ebd336da263f4b71' }, formatAmount(this.currencySymbol, this.amount));
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
        return h(Host, { key: '15725cbb4ed381a91364fcf318ef21762efaf63a' }, formatAmount(this.currencySymbol, this.amount));
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
        return h(Host, { key: 'ae20621fd9c3bdec30344207b0620245563af7bc' }, formatAmount(this.currencySymbol, this.amount));
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
        return h(Host, { key: 'ee349bb54bbc076a591dd6b458effc20d85a8196' }, this.vatPercent, "%");
    }
};
IrClInvoiceVatPctCell.style = irClInvoiceVatPctCellCss();

export { IrClDocumentHeader as ir_cl_document_header, IrClFiscalDocumentTable as ir_cl_fiscal_document_table, IrClInvoiceCityTaxAmountCell as ir_cl_invoice_city_tax_amount_cell, IrClInvoiceCityTaxPctCell as ir_cl_invoice_city_tax_pct_cell, IrClInvoiceDateCell as ir_cl_invoice_date_cell, IrClInvoiceDescriptionCell as ir_cl_invoice_description_cell, IrClInvoiceNetPriceCell as ir_cl_invoice_net_price_cell, IrClInvoiceTotalCell as ir_cl_invoice_total_cell, IrClInvoiceVatAmountCell as ir_cl_invoice_vat_amount_cell, IrClInvoiceVatPctCell as ir_cl_invoice_vat_pct_cell };
