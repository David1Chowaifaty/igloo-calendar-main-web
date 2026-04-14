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
        return (h("tr", { key: String(tx.CL_TX_ID), class: cls }, h("td", { class: "invoice-items__td invoice-items__td--date" }, h("ir-cl-invoice-date-cell", { date: tx.ENTRY_DATE })), h("td", { class: "invoice-items__td invoice-items__td--desc-cell" }, h("ir-cl-invoice-description-cell", { description: tx.DESCRIPTION })), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, h("ir-cl-invoice-net-price-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.NET_AMOUNT) })), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, h("ir-cl-invoice-vat-pct-cell", { vatPercent: tx.VAT_PERCENT })), h("td", { class: "invoice-items__td invoice-items__td--num" }, h("ir-cl-invoice-vat-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.VAT_AMOUNT) })), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, h("ir-cl-invoice-city-tax-pct-cell", { cityTaxPercent: tx.CITY_TAX_PERCENT })), h("td", { class: "invoice-items__td invoice-items__td--num" }, h("ir-cl-invoice-city-tax-amount-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.CITY_TAX_AMOUNT), cityTaxPercent: tx.CITY_TAX_PERCENT })), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, h("ir-cl-invoice-total-cell", { currencySymbol: this.currencySymbol, amount: this.applySign(tx.TOTAL_AMOUNT) }))));
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
        return (h("tr", null, h("td", { class: "invoice-items__td" }), h("td", { class: "invoice-items__td invoice-items__td--num" }, "Net Price"), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, this.renderMoney(t.net)), h("td", { class: "invoice-items__td invoice-items__td--num" }, "Taxes"), h("td", { class: "invoice-items__td invoice-items__td--num" }, this.renderMoney(t.tax)), h("td", { class: "invoice-items__td invoice-items__td--num" }), h("td", { class: "invoice-items__td invoice-items__td--num" }, "Total"), h("td", { class: "invoice-items__td invoice-items__td--num-primary" }, this.renderMoney(t.total))));
    }
    render() {
        return (h(Host, { key: '9bf1bd5b1dd835808a4f22b8dd9c8e50229d9389' }, h("section", { key: '67f63402078d120ff82041deaeed466e96f27db3', class: "invoice-items" }, h("table", { key: '756de8dec9844786005182d136c63b6d3ebf0cc2', class: "invoice-items__table" }, h("thead", { key: '9daeadb78a906bc1ce463e17f4e039f8a7bf2f2d' }, h("tr", { key: '675cc413e5efb4d03ca496a89d9865e201759164' }, h("th", { key: 'e02923d4e13be4d24f27bf98e6c2f1e3986dc6e8', class: "invoice-items__th invoice-items__th--nowrap" }, "Date"), h("th", { key: 'a7231af9e54cba9256a3e14232808734daaf0765', class: "invoice-items__th", style: { width: '100%' } }, "Description"), h("th", { key: '1e9f131ea43f83cf238ff98fb872d01fdc1151b2', class: "invoice-items__th invoice-items__th--num-primary invoice-items__th--nowrap" }, "Net Price"), h("th", { key: '72c153f269fe48d3379df75825ca796d92aae977', class: "invoice-items__th invoice-items__th--nowrap" }, "VAT"), h("th", { key: '4b2347507843fb856c1340c54ced843acca2435c', class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "VAT Amount"), h("th", { key: 'e090d837ef37cab26fcfec9a687ecc46fc532a24', class: "invoice-items__th invoice-items__th--nowrap" }, "City", h("br", { key: '75bd037a38ff9ced292575cf7e042db78c982820' }), " Tax"), h("th", { key: '21a1d619c0fb614fc8a1c0e1a44585044f3bce0d', class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "City Tax", h("br", { key: '6be71cee0138b534975be6a92302991d04a54f90' }), " Amount"), h("th", { key: '93550bb8c44a86aa6d9cbd882d7eaa512501ed19', class: "invoice-items__th invoice-items__th--num-primary invoice-items__th--nowrap" }, "Total"))), h("tbody", { key: 'e316bd31d8b826c5ece0c20ea40293e16e0821db' }, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "invoice-items__empty", colSpan: 8 }, "No transactions found for this document."))) : (h(Fragment, null, groupData(this.transactions).map(item => this.renderTopLevelItem(item)), this.renderTotals())))))));
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
                    "original": "MyClTx[]",
                    "resolved": "{ PR_ID?: number; ENTRY_DATE?: string; ENTRY_USER_ID?: number; OWNER_ID?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; CURRENCY_ID?: number; CREDIT?: number; DEBIT?: number; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; TOTAL_AMOUNT?: number; BH_ID?: number; BSA_REF?: string; CATEGORY?: string; AGENT_BOOKING_NBR?: string; ADULTS_NBR?: number; CHILD_NBR?: number; INFANT_NBR?: number; GUEST_FIRST_NAME?: string; GUEST_LAST_NAME?: string; ROOM_CATEGORY_ID?: number; ROOM_TYPE_ID?: number; RATE_PLAN_ID?: number; SERVICE_DATE?: string; CITY_TAX_AMOUNT?: number; CITY_TAX_PERCENT?: number; CL_TX_ID?: number; CL_TX_TYPE_CODE?: string; DESCRIPTION?: string; IS_HOLD?: boolean; IS_LOCKED?: boolean; My_Bh?: any; My_Currency?: any; My_Fd?: { AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; }; My_Pr?: any; My_Room_category?: any; RUNNING_BALANCE?: number; My_Room_type?: any; My_Travel_agency?: null; PAY_METHOD_CODE?: string; REL_ENTITY?: \"TBL_BSAD\" | \"TBL_BSP\"; REL_ENTITY_KEY?: number; TRAVEL_AGENCY_ID?: number; VAT_AMOUNT?: number; VAT_PERCENT?: number; }[]",
                    "references": {
                        "MyClTx": {
                            "location": "import",
                            "path": "@/services/city-ledger",
                            "id": "src/services/city-ledger/index.ts::MyClTx"
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
