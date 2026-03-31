import { formatAmount } from "../../../utils/utils";
import Token from "../../../models/Token";
import { CityLedgerService } from "../../../services/city-ledger/index";
import { PropertyService } from "../../../services/property.service";
import { Host, h } from "@stencil/core";
import moment from "moment";
import { groupData } from "./utils";
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
    renderLineItems() {
        console.log(groupData(this.transactions ?? []));
        return (h("section", { class: "invoice-items" }, h("table", { class: "invoice-items__table" }, h("thead", null, h("tr", null, h("th", { class: "invoice-items__th" }, "Date"), h("th", { class: "invoice-items__th" }, "Description"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "Net Price"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "VAT"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "VAT Amount"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "City Tax"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "City Tax Amount"), h("th", { class: "invoice-items__th invoice-items__th--num" }, "Total"))), h("tbody", null, this.transactions.length === 0 ? (h("tr", null, h("td", { class: "invoice-items__empty", colSpan: 7 }, "No transactions found for this document."))) : (
        // this.transactions.map((tx, i) => (
        //   <tr key={tx.CL_TX_ID} class="invoice-items__row">
        //     <td class="invoice-items__td invoice-items__td--index">{i + 1}</td>
        //     <td class="invoice-items__td">{tx.DESCRIPTION || '—'}</td>
        //     <td class="invoice-items__td">
        //       {tx.GUEST_FIRST_NAME} {tx.GUEST_LAST_NAME}
        //     </td>
        //     <td class="invoice-items__td invoice-items__td--booking">{tx.BOOK_NBR}</td>
        //     <td class="invoice-items__td invoice-items__td--dates">
        //       {tx.FROM_DATE ? moment(tx.FROM_DATE).format(DATE_DISPLAY) : '—'}
        //       {tx.TO_DATE ? ` – ${moment(tx.TO_DATE).format(DATE_DISPLAY)}` : ''}
        //     </td>
        //     <td class="invoice-items__td invoice-items__td--num">{tx.DEBIT ? this.renderMoney(tx.DEBIT) : '—'}</td>
        //     <td class="invoice-items__td invoice-items__td--num">{tx.CREDIT ? this.renderMoney(tx.CREDIT) : '—'}</td>
        //   </tr>
        // ))
        groupData(this.transactions).map(level1 => (h("tr", { key: level1.PR_ID, class: "invoice-items__row" }, level1.subRows.length > 1 && h("td", { colSpan: 8 }, level1.PR_ID)))))))));
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
