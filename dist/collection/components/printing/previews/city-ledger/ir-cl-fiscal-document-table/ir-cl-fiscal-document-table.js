import { formatAmount } from "../../../../../utils/utils";
import { Fragment, Host, h } from "@stencil/core";
import { groupData } from "./utils";
import calendar_data from "../../../../../stores/calendar-data";
import { formatDate } from "../../../../../utils/date/index";
import { t } from "../../../../../services/locale/t";
import { formatCount } from "../../../../../utils/number";
export class IrClFiscalDocumentTable {
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
        return (h(Fragment, null, h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, h("td", { colSpan: this.showCityTax ? 8 : 6 }, h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${t('Lcz_PaxCount', { fallback: '%1 pax', params: [formatCount(group.occupancy)] })})`, h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), formatDate(group.FROM_DATE, 'MMM, DD YYYY'), " - ", formatDate(group.TO_DATE, 'MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
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
        const totals = this.totals;
        return (h("tr", { class: "cl-balance-row" }, h("td", { class: "cl-td" }), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(totals.net)), " ", h("br", null), t('Lcz_NetPriceLabel', { fallback: 'Net Price' })), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(totals.tax)), h("br", null), t('Lcz_Taxes', { fallback: 'Taxes' })), this.showCityTax && h("td", { class: "cl-td cl-td--num" }), this.showCityTax && h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(totals.total)), h("br", null), t('Lcz_Total', { fallback: 'Total' }))));
    }
    render() {
        return (h(Host, { key: 'f9643136ea84472a3ee335a95dab933b8d662dde' }, h("section", { key: '368d7da5308110c984e94aee971c8f3e77ce2969', class: "invoice-items" }, h("table", { key: '304f43107b142edf8bc01504387f7d7ea830e5df', class: "cl-table" }, h("thead", { key: '91b796bdc32648b4f12e511fb3b79a4a42497e28' }, h("tr", { key: '6a6fb24f4ebe7bb0653df1c654776b1c5efd19b5' }, h("th", { key: '28d9c9d577f39e71bea47026d54c88f599429b75', class: "cl-th" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '8dca9800ea2934eb6907aa08319ffe18c2dcdd52', class: "cl-th", style: { width: '100%' } }, t('Lcz_Description', { fallback: 'Description' })), h("th", { key: '0607a10730693099c93d4d756a7e4761f34dd004', class: "cl-th cl-th--num" }, t('Lcz_NetPriceLabel', { fallback: 'Net Price' })), h("th", { key: '45dba8f4503bc0ffd8d6348ccb63d872c599e730', class: "cl-th" }, t('Lcz_Vat', { fallback: 'VAT' })), h("th", { key: 'f965e0e3766c2cb7f8980b7f1a205149b44ec07b', class: "cl-th cl-th--num" }, t('Lcz_VatAmountColumn', { fallback: 'VAT Amount' })), this.showCityTax && h("th", { key: '76505a01a863141e7e55dbb090d0c113c6a87d69', class: "cl-th" }, t('Lcz_CityTaxColumn', { fallback: 'City Tax' })), this.showCityTax && (h("th", { key: 'f28e8d345608a457980e5b1b58a9acb9d7c43467', class: "cl-th cl-th--num" }, t('Lcz_CityTaxColumn', { fallback: 'City Tax' }), h("br", { key: 'c2b3285731cb237e351963f743b51261be6df000' }), t('Lcz_Amount', { fallback: 'Amount' }))), h("th", { key: 'b363e6a91e80b96df1a0e07c3beba2519d98b12b', class: "cl-th cl-th--num" }, t('Lcz_Total', { fallback: 'Total' })))), h("tbody", { key: '3bad2ae451aacf3e477768a2dfb8aa05d5145a1a' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: this.showCityTax ? 8 : 6 }, t('Lcz_NoTransactionsForDocument', { fallback: 'No transactions found for this document.' })))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
    }
    static get is() { return "ir-cl-fiscal-document-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-fiscal-document-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-fiscal-document-table.css"]
        };
    }
    static get properties() {
        return {
            "transactions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ClTx[]",
                    "resolved": "{ ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; DESCRIPTION?: string; PR_ID?: number; DOC_NUMBER?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; EXTERNAL_REF?: string; FD_ID?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; ISSUE_HOUR?: number; ISSUE_MINUTE?: number; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\" | \"TBL_BSE\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
                    "references": {
                        "ClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::ClTx",
                            "referenceLocation": "ClTx"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency-symbol",
                "defaultValue": "'$'"
            },
            "invertAmounts": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "When true all monetary amounts are negated \u2014 used for credit notes."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "invert-amounts",
                "defaultValue": "false"
            }
        };
    }
}
