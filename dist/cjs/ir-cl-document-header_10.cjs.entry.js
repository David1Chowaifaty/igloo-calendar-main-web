'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');
const utils = require('./utils-32be062a.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
require('./index-8bb117a0.js');
require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');
require('./type-53035218.js');

const irClDocumentHeaderCss = ":host{display:block}@media print{.invoice__meta-label{color:#374151}.section-heading{color:#374151}.property-overview__location{color:#374151}}.invoice__title{margin:0 0 0.5rem;font-size:1.75rem;font-weight:800;letter-spacing:0.05em;color:#111827;text-transform:uppercase}.invoice__layout{display:flex;justify-content:space-between;padding:0.75rem 0 0}.invoice__column{display:flex;flex-direction:column}.invoice__column--property{align-items:flex-end;text-align:end}.invoice__details{display:flex;flex-direction:column;gap:0.25rem}.invoice__meta-row{display:flex;gap:1rem;font-size:0.8125rem;line-height:1.6}.invoice__meta-label{color:#9ca3af;font-weight:500;min-width:80px}.invoice__meta-value{color:#111827;font-weight:600}.bill-to-section{margin-top:0.875rem}.section-heading{margin:0 0 0.25rem;font-size:0.75rem;font-weight:600;letter-spacing:0.08em;color:#9ca3af;text-transform:uppercase}.bill-to__name{margin:0;font-size:1rem;font-weight:600;color:#111827}.property-overview{display:flex;flex-direction:column;align-items:flex-end;text-align:end}.property-logo{height:2.5rem;width:auto;object-fit:contain;margin-bottom:0.5rem}.property-overview__text{display:flex;flex-direction:column;gap:0.1rem}.property-overview__name{margin:0 0 0.125rem;font-size:1.125rem;font-weight:700;color:#111827}.property-overview__location{margin:0;font-size:0.8125rem;color:#6b7280;line-height:1.4}";
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
        return (index.h(index.Host, { key: 'c337a6088dd30ec47dd711d3064e2c480950724f' }, index.h("header", { key: '2ba38160fa105283991400454f4b09514b388c60', class: "invoice__header" }, index.h("h3", { key: '14c00615e97420eec1fb0b99c64efd2f02a8d0c7', class: "invoice__title" }, this.documentTitle), index.h("section", { key: 'f15a8ca283bf7f037c705c5337317602f1986b1a', class: "invoice__layout" }, index.h("div", { key: '7cdc133103842454385fec63018273779a7bf6da', class: "invoice__column invoice__column--details" }, index.h("div", { key: 'f9c26518f2e4f768f0efacc824e049fd8711bbb1', class: "invoice__details" }, this.documentNumber && (index.h("div", { key: 'a00a78ef4fb97876352da184e4501508a1632591', class: "invoice__meta-row" }, index.h("span", { key: '2964d3931b43fbae4b4fb3353c0ec1a1bb4897af', class: "invoice__meta-label" }, "Document #"), index.h("span", { key: '2db7311f3ac4cf926ba74be230e5b5eaa9449100', class: "invoice__meta-value" }, this.documentNumber))), index.h("div", { key: '6e7cc53153a43b1bc1e330732775e8617350f6e7', class: "invoice__meta-row" }, index.h("span", { key: 'd57897b2882dc1207599910b0d4ab938ac1c0adc', class: "invoice__meta-label" }, "Date"), index.h("span", { key: '3e162c8cd645008108a46d64247926d3028a91e5', class: "invoice__meta-value" }, moment.hooks().format(DATE_DISPLAY)))), this.agentName && (index.h("section", { key: '6f53178c1aaf98d0e9db392b6db5619111e87e0f', class: "bill-to-section", "aria-label": "Bill to" }, index.h("h4", { key: '910cd414b3d37471e47c7854973ec82347c6240c', class: "section-heading" }, "Bill To"), index.h("div", { key: '64bce65ae840680f124c5498a37776c42abb4ad7', class: "bill-to" }, index.h("p", { key: 'a166a15bf8f635ee6b47f9c11664eaad5feba36f', class: "bill-to__name" }, this.agentName))))), index.h("div", { key: 'a08a640fb64fb82bd3ac9ceadfe8484c7074c531', class: "invoice__column invoice__column--property" }, index.h("div", { key: '3bdad296c6e9ca186cbd4de2014bbe4a23941329', class: "property-overview", "aria-label": "Property overview" }, logo && index.h("img", { key: '5470c659602721923914c40c64f27554ba2d62a6', src: logo, alt: p?.name, class: "property-logo" }), index.h("div", { key: '5f944f7e89f7c7d43ecca591aff6f08010e7e4ce', class: "property-overview__text" }, index.h("p", { key: '5342e3c2f55d48754128f2471e063f45e6f0085f', class: "property-overview__name" }, p?.name), propertyLocation && index.h("p", { key: '24fbf6c6718560e7941936fb8f6c5a4aaa41300e', class: "property-overview__location" }, propertyLocation), p?.address && index.h("p", { key: '942e16c1406c13de24a8044c669d8657eef84c97', class: "property-overview__location" }, p.address), p?.phone && index.h("p", { key: 'b484420861097bd5098640cc94f304a15c6b2c01', class: "property-overview__location" }, p.phone), this.primaryContact?.email && index.h("p", { key: '19b091bd7927aadab5a13eafaf10d9f7b87282b7', class: "property-overview__location" }, this.primaryContact.email), p?.tax_nbr && index.h("p", { key: 'f3bb74c8c5f3a097a54a30e83d9c058d677f4a38', class: "property-overview__location" }, "Tax Reg: ", p.tax_nbr))))))));
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
        return (index.h(index.Host, { key: '5db3ddd88d52d9e98be5e446fdbe2eba4f9ab068' }, index.h("section", { key: '7dd2741d94a7a4bfc91654f1d9c703bb51b72288', class: "invoice-items" }, index.h("table", { key: 'e7a9b69ac0be8bf4b70db94ad7d6e0d544866ec2', class: "cl-table" }, index.h("thead", { key: 'a6d02b61fa3c49af3d9a38e1b80ae14a05bfaade' }, index.h("tr", { key: '5c5044d6bb5b05a826b62380a1bfd1098ed74b40' }, index.h("th", { key: '7f62df2a3bbb63fd395557d21bf915cc241cafb7', class: "cl-th" }, "Date"), index.h("th", { key: 'c30912e2cbd17dfcff0972ec5c310d1a4f3887bb', class: "cl-th", style: { width: '100%' } }, "Description"), index.h("th", { key: '7e103832c8b9450ea64b9ff75988d4fccbe37aad', class: "cl-th cl-th--num" }, "Net Price"), index.h("th", { key: 'c5ea25a75bec2616e1ff8e90dc1d425d08cc4f6e', class: "cl-th" }, "VAT"), index.h("th", { key: '4ebe293d9c70731dc5ac3b48e430ccffe9604bdf', class: "cl-th cl-th--num" }, "VAT Amount"), this.showCityTax && (index.h("th", { key: 'cf2381d6174795f75f9c7338ec77a4a2bd339a77', class: "cl-th" }, "City ", index.h("br", { key: '855b032f233e14dd2d779663789b2ad263dc507c' }), "Tax")), this.showCityTax && (index.h("th", { key: 'c97147502505b79aade1f43ee953471d64e41f27', class: "cl-th cl-th--num" }, "City Tax", index.h("br", { key: '6fc9a4027f70a561b8302dde8d89ed1340349999' }), " Amount")), index.h("th", { key: 'd9fa648b93809822d3069b22a366a1eb3f444fad', class: "cl-th cl-th--num" }, "Total"))), index.h("tbody", { key: 'e1175ce4d5181d5777d932976bc3e780da5446f7' }, this.transactions.length === 0 ? (index.h("tr", null, index.h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, "No transactions found for this document."))) : (index.h(index.Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
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
        return index.h(index.Host, { key: 'b1d968246ede2abd913397d52e0d97f3436ec613' }, this.cityTaxPercent > 0 ? utils.formatAmount(this.currencySymbol, this.amount) : '');
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
        return index.h(index.Host, { key: '4bf32aeba37d8495c33dc6766e01743929051130' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
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
        return index.h(index.Host, { key: 'db296589abaf0b62a083bcf5308af6d0272d9c08' }, moment.hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
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
        return (index.h(index.Host, { key: 'eed49984bbe0b11f3dcaa3731169d74c9c78d98c' }, index.h("span", { key: '6979572564a14d65111c3cd74506f01282a9bb80', class: "desc" }, this.description)));
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
        return index.h(index.Host, { key: '4b2829a2704372e241429043be9704289852338c' }, utils.formatAmount(this.currencySymbol, this.amount));
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
        return index.h(index.Host, { key: '7a9bcb53863efc5160325d754e0064aba64d652b' }, utils.formatAmount(this.currencySymbol, this.amount));
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
        return index.h(index.Host, { key: '05ba351a18dd27dd1ae5168b8880037acf8dab0e' }, utils.formatAmount(this.currencySymbol, this.amount));
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
        return index.h(index.Host, { key: '1a8f5809f01f0781378b0e3c3b937fd050fbe295' }, this.vatPercent, "%");
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