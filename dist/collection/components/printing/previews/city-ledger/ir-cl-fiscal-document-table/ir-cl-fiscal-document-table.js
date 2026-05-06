import { formatAmount } from "../../../../../utils/utils";
import { Fragment, Host, h } from "@stencil/core";
import moment from "moment";
import { groupData } from "./utils";
import calendar_data from "../../../../../stores/calendar-data";
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
    get totals() {
        return this.transactions.reduce((acc, tx) => ({
            net: acc.net + (tx.NET_AMOUNT ?? 0),
            tax: acc.tax + (tx.TAX_AMOUNT ?? 0),
            total: acc.total + (tx.TOTAL_AMOUNT ?? 0),
        }), { net: 0, tax: 0, total: 0 });
    }
    renderTxRow(tx, indent = 0) {
        const cls = indent > 0 ? `invoice-items__row--indent-${indent}` : undefined;
        return (h("tr", { key: String(tx.CL_TX_ID), class: cls }, h("td", { class: "cl-td cl-td--muted cl-td--nowrap" }, h("ir-cl-invoice-date-cell", { date: tx.ENTRY_DATE })), h("td", { class: "cl-td invoice-items__td--desc-cell" }, h("ir-cl-invoice-description-cell", { description: tx.DESCRIPTION })), h("td", { class: "cl-td cl-td--num cl-td--bold" }, h("ir-cl-invoice-net-price-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.NET_AMOUNT) })), h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-vat-pct-cell", { vatPercent: tx.VAT_PERCENT })), h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-vat-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.VAT_AMOUNT) })), h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-city-tax-pct-cell", { cityTaxPercent: tx.CITY_TAX_PERCENT })), h("td", { class: "cl-td cl-td--num cl-td--muted" }, h("ir-cl-invoice-city-tax-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.CITY_TAX_AMOUNT), cityTaxPercent: tx.CITY_TAX_PERCENT })), h("td", { class: "cl-td cl-td--num cl-td--bold" }, h("ir-cl-invoice-total-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.TOTAL_AMOUNT) }))));
    }
    renderUnitGroup(group) {
        const roomName = this.prIdDict.get(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID)?.name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID)?.short_name}`;
        return (h(Fragment, null, h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, h("td", { colSpan: 8 }, h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), moment(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", moment(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
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
        return (h("tr", { class: "cl-balance-row" }, h("td", { class: "cl-td" }), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.net)), " ", h("br", null), "Net Price"), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.tax)), h("br", null), "Taxes"), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }), h("td", { class: "cl-td cl-td--num" }, h("span", { style: { fontSize: '1rem' } }, this.renderMoney(t.total)), h("br", null), "Total")));
    }
    render() {
        return (h(Host, { key: 'f4fec0aeb9e49cfa2a5ac39b7e2378ababf5621a' }, h("section", { key: '8950e8cd15f39f4eb896d8eb55b62ca820dbf10a', class: "invoice-items" }, h("table", { key: 'eb317f148db215f3e77379f86420530ff297aea0', class: "cl-table" }, h("thead", { key: 'f692d76f0ee04c1f24b2289632f464097c58e618' }, h("tr", { key: '961b470bcd9e4a59b2ffc30fc12d172062bbcf75' }, h("th", { key: '8ca009c6f78a408c4c41a818675cf742c0e28a7c', class: "cl-th" }, "Date"), h("th", { key: '80290281476d658f2d4d67267205b1b998c1127b', class: "cl-th", style: { width: '100%' } }, "Description"), h("th", { key: '637e83cd60d5573a4761f91804cda9adb1384744', class: "cl-th cl-th--num" }, "Net Price"), h("th", { key: '5f9d1fa2d708996a8acc5524333c913b77613201', class: "cl-th" }, "VAT"), h("th", { key: '1f6bc165e9e677eca50f559563d38eb20ba15f49', class: "cl-th cl-th--num" }, "VAT Amount"), h("th", { key: 'de7039094755b4ec80cf05b5d3cdfeaee30de20e', class: "cl-th" }, "City ", h("br", { key: '7e82073f863c563498e9dc89d0e8b6107b07d4e1' }), "Tax"), h("th", { key: 'cd4b19dbcc80b6998a3b0ed5911cf2c070459e05', class: "cl-th cl-th--num" }, "City Tax", h("br", { key: 'd08cc07edfe72fc90df589b22b2dba3d8e91cc59' }), " Amount"), h("th", { key: '0059868f98d5970d96d06ffdc9d4aaecb948cf23', class: "cl-th cl-th--num" }, "Total"))), h("tbody", { key: 'c075f22e100d8de55ecc5d4ad610d8103263f9bf' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: 8 }, "No transactions found for this document."))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
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
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; CURRENCY_ID?: number; CREDIT?: number; DEBIT?: number; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; TOTAL_AMOUNT?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
                    "references": {
                        "ClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::ClTx"
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
                "attribute": "currency-symbol",
                "reflect": false,
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
                "attribute": "invert-amounts",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
}
//# sourceMappingURL=ir-cl-fiscal-document-table.js.map
