import { formatAmount } from "../../../utils/utils";
import Token from "../../../models/Token";
import { CityLedgerService } from "../../../services/city-ledger/index";
import { PropertyService } from "../../../services/property.service";
import { Fragment, Host, h } from "@stencil/core";
import moment from "moment";
import { groupData } from "./utils";
import calendar_data from "../../../stores/calendar-data";
const DATE_DISPLAY = 'MMM DD, YYYY';
export class IrClInvoicePreview {
    propertyId;
    ticket;
    baseurl;
    fromDate;
    toDate;
    agentId;
    agentName;
    documentNumber;
    isLoading = false;
    error = null;
    property = null;
    transactions = [];
    tokenService = new Token();
    propertyService = new PropertyService();
    cityLedgerService = new CityLedgerService();
    prIdDict;
    roomTypesDict;
    rateplanDict;
    componentWillLoad() {
        if (!this.ticket) {
            this.error = 'Authentication ticket is required.';
            return;
        }
        if (this.baseurl)
            this.tokenService.setBaseUrl(this.baseurl);
        this.tokenService.setToken(this.ticket);
        return this.fetchData();
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const start = this.fromDate ?? moment().subtract(2, 'years').format('YYYY-MM-DD');
            const end = this.toDate ?? moment().format('YYYY-MM-DD');
            const [propertyData, clResult] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
                this.cityLedgerService.fetchCL({
                    AGENCY_ID: this.agentId,
                    START_DATE: start,
                    END_DATE: end,
                    START_ROW: 0,
                    END_ROW: 1000,
                    SEARCH_QUERY: this.documentNumber,
                }),
            ]);
            this.property = propertyData?.My_Result ?? null;
            const { physicalRoomsMap, ratePlansMap, roomTypesMap } = this.buildDicts();
            this.prIdDict = new Map(physicalRoomsMap);
            this.roomTypesDict = new Map(roomTypesMap);
            this.rateplanDict = new Map(ratePlansMap);
            this.transactions = clResult?.My_Cl_tx ?? [];
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load invoice data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    get totals() {
        return this.transactions.reduce((acc, tx) => ({
            net: acc.net + (tx.NET_AMOUNT ?? 0),
            tax: acc.tax + (tx.TAX_AMOUNT ?? 0),
            total: acc.total + (tx.TOTAL_AMOUNT ?? 0),
            debit: acc.debit + (tx.DEBIT ?? 0),
            credit: acc.credit + (tx.CREDIT ?? 0),
        }), { net: 0, tax: 0, total: 0, debit: 0, credit: 0 });
    }
    get currencySymbol() {
        return this.property?.currency?.symbol ?? '$';
    }
    get primaryContact() {
        return this.property?.contacts?.find(c => c.type === 'marketing') ?? this.property?.contacts?.[0];
    }
    renderMoney(amount) {
        return formatAmount(this.currencySymbol, amount);
    }
    renderHeader() {
        const p = this.property;
        const logo = p?.space_theme?.logo;
        return (h("header", { class: "invoice-header" }, h("div", { class: "invoice-header__property" }, logo && h("img", { class: "invoice-header__logo", src: logo, alt: p?.name }), h("div", { class: "invoice-header__property-info" }, h("h1", { class: "invoice-header__property-name" }, p?.name), p?.address && h("p", { class: "invoice-header__address" }, p.address), p?.city && h("p", { class: "invoice-header__address" }, p.city?.name), p?.country && h("p", { class: "invoice-header__address" }, p.country?.name), p?.phone && h("p", { class: "invoice-header__contact" }, p.phone), this.primaryContact?.email && h("p", { class: "invoice-header__contact" }, this.primaryContact.email), p?.tax_nbr && h("p", { class: "invoice-header__tax-nbr" }, "Tax Reg: ", p.tax_nbr))), h("div", { class: "invoice-header__meta" }, h("h2", { class: "invoice-header__title" }, "INVOICE"), this.documentNumber && (h("div", { class: "invoice-header__meta-row" }, h("span", { class: "invoice-header__meta-label" }, "Document #"), h("span", { class: "invoice-header__meta-value" }, this.documentNumber))), h("div", { class: "invoice-header__meta-row" }, h("span", { class: "invoice-header__meta-label" }, "Date"), h("span", { class: "invoice-header__meta-value" }, moment().format(DATE_DISPLAY))), (this.fromDate || this.toDate) && (h("div", { class: "invoice-header__meta-row" }, h("span", { class: "invoice-header__meta-label" }, "Period"), h("span", { class: "invoice-header__meta-value" }, this.fromDate ? moment(this.fromDate).format(DATE_DISPLAY) : '—', " \u2013 ", this.toDate ? moment(this.toDate).format(DATE_DISPLAY) : '—'))))));
    }
    renderBillTo() {
        if (!this.agentName)
            return null;
        return (h("section", { class: "invoice-bill-to" }, h("p", { class: "invoice-bill-to__label" }, "Bill To"), h("p", { class: "invoice-bill-to__name" }, this.agentName)));
    }
    renderTxRow(tx, indent = 0) {
        const cls = indent > 0 ? `invoice-items__row--indent-${indent}` : undefined;
        return (h("tr", { key: String(tx.CL_TX_ID), class: cls }, h("td", { class: "invoice-items__td invoice-items__td--date" }, moment(tx.FROM_DATE, 'YYYY-MM-DD').format('MMM DD, YYYY')), h("td", { class: "invoice-items__td invoice-items__td--desc-cell" }, h("span", { class: "invoice-items__td--desc" }, tx.DESCRIPTION)), h("td", { class: "invoice-items__td invoice-items__td--num" }, formatAmount(this.currencySymbol, tx.NET_AMOUNT)), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, tx.VAT_PERCENT, "%"), h("td", { class: "invoice-items__td invoice-items__td--num" }, formatAmount(this.currencySymbol, tx.VAT_AMOUNT)), h("td", { class: "invoice-items__td invoice-items__td--pct invoice-items__td--num" }, tx.CITY_TAX_PERCENT > 0 ? tx.CITY_TAX_PERCENT + '%' : ''), h("td", { class: "invoice-items__td invoice-items__td--num" }, tx.CITY_TAX_PERCENT > 0 ? formatAmount(this.currencySymbol, tx.CITY_TAX_AMOUNT) : ''), h("td", { class: "invoice-items__td invoice-items__td--num" }, formatAmount(this.currencySymbol, tx.TOTAL_AMOUNT))));
    }
    buildDicts() {
        const physicalRoomsMap = new Map();
        const roomTypesMap = new Map();
        const ratePlansMap = new Map();
        for (const roomtype of calendar_data.property.roomtypes) {
            roomTypesMap.set(roomtype.id, roomtype);
            for (const room of roomtype.physicalrooms ?? []) {
                physicalRoomsMap.set(room.id, room);
            }
            for (const ratePlan of roomtype.rateplans ?? []) {
                ratePlansMap.set(ratePlan.id, ratePlan);
            }
        }
        return { physicalRoomsMap, roomTypesMap, ratePlansMap };
    }
    getRoomNameFromPrID(pr_id) {
        return this.prIdDict.get(pr_id);
    }
    renderUnitGroup(group) {
        const roomName = this.getRoomNameFromPrID(group.PR_ID)?.name ?? '';
        const description = `${this.roomTypesDict.get(group.ROOM_CATEGORY_ID).name} - ${this.rateplanDict.get(group.ROOM_TYPE_ID).short_name}`;
        return (h(Fragment, null, h("tr", { key: `unit-hdr-${group.PR_ID}`, class: "invoice-items__unit-row" }, h("td", { colSpan: 8 }, h("span", null, `${roomName} - ${group.GUEST_FIRST_NAME} ${group.GUEST_LAST_NAME} (${group.occupancy} pax)`, h("span", { innerHTML: "&nbsp&nbsp&nbsp&nbsp" }), moment(group.FROM_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY'), " - ", moment(group.TO_DATE, 'YYYY-MM-DD').format('MMM, DD YYYY')))), group.subRows.map(tx => this.renderTxRow({ ...tx, DESCRIPTION: description }, 2))));
    }
    renderBookingGroup(group) {
        return (h(Fragment, null, group.subRows.length > 1 && (h("tr", { key: `booking-hdr-${group.BOOK_NBR}`, class: "invoice-items__booking-row" }, h("td", { colSpan: 8 }, ' ', h("span", { style: { fontSize: '1rem', fontWeight: 'bold' } }, "#", group.BOOK_NBR)))), group.subRows.map(item => {
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
    renderLineItems() {
        return (h("section", { class: "invoice-items" }, h("table", { class: "invoice-items__table" }, h("thead", null, h("tr", null, h("th", { class: "invoice-items__th invoice-items__th--nowrap" }, "Date"), h("th", { class: "invoice-items__th", style: { width: '100%' } }, "Description"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "Net Price"), h("th", { class: "invoice-items__th invoice-items__th--nowrap" }, "VAT"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "VAT Amount"), h("th", { class: "invoice-items__th invoice-items__th--nowrap" }, "City", h("br", null), " Tax"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "City Tax", h("br", null), " Amount"), h("th", { class: "invoice-items__th invoice-items__th--num invoice-items__th--nowrap" }, "Total"))), h("tbody", null, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "invoice-items__empty", colSpan: 8 }, "No transactions found for this document."))) : (groupData(this.transactions).map(item => this.renderTopLevelItem(item)))))));
    }
    renderTotals() {
        const t = this.totals;
        return (h("section", { class: "invoice-totals" }, h("div", { class: "invoice-totals__grid" }, h("span", { class: "invoice-totals__label" }, "Net Amount"), h("span", { class: "invoice-totals__value" }, this.renderMoney(t.net)), h("span", { class: "invoice-totals__label" }, "Taxes"), h("span", { class: "invoice-totals__value" }, this.renderMoney(t.tax)), h("div", { class: "invoice-totals__divider" }), h("div", { class: "invoice-totals__divider" }), h("span", { class: "invoice-totals__label invoice-totals__label--total" }, "Total"), h("span", { class: "invoice-totals__value invoice-totals__value--total" }, this.renderMoney(t.total)))));
    }
    render() {
        if (!this.ticket) {
            return (h(Host, null, h("div", { class: "invoice-state invoice-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "invoice-state" }, h("ir-spinner", null))));
        }
        if (this.error) {
            return (h(Host, null, h("div", { class: "invoice-state invoice-state--error" }, this.error)));
        }
        return (h(Host, null, h("div", { class: "invoice" }, this.renderHeader(), h("hr", { class: "invoice-divider" }), this.renderBillTo(), this.renderLineItems(), this.renderTotals())));
    }
    static get is() { return "ir-cl-invoice-preview"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-preview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-preview.css"]
        };
    }
    static get properties() {
        return {
            "propertyId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "property-id",
                "reflect": false
            },
            "ticket": {
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
                "attribute": "ticket",
                "reflect": false
            },
            "baseurl": {
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
                "attribute": "baseurl",
                "reflect": false
            },
            "fromDate": {
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
                "attribute": "from-date",
                "reflect": false
            },
            "toDate": {
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
                "attribute": "to-date",
                "reflect": false
            },
            "agentId": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "agent-id",
                "reflect": false
            },
            "agentName": {
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
                "attribute": "agent-name",
                "reflect": false
            },
            "documentNumber": {
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
                "attribute": "document-number",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "error": {},
            "property": {},
            "transactions": {}
        };
    }
}
//# sourceMappingURL=ir-cl-invoice-preview.js.map
