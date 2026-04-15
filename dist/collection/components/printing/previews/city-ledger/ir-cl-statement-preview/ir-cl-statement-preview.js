import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../../../services/city-ledger/index";
import { PropertyService } from "../../../../../services/property.service";
import { formatAmount } from "../../../../../utils/utils";
import Token from "../../../../../models/Token";
import moment from "moment";
const DATE_DISPLAY = 'MMM DD, YYYY';
export class IrClStatementPreview {
    propertyId;
    ticket;
    baseurl;
    agentId;
    agentName;
    fromDate;
    toDate;
    currencyId;
    isLoading = false;
    error = null;
    property = null;
    statement = null;
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
            const [propertyData, statement] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                }),
            ]);
            this.property = propertyData?.My_Result ?? null;
            this.statement = statement;
        }
        catch (e) {
            this.error = e?.message ?? 'Failed to load statement data.';
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        if (!this.ticket) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "Authentication ticket is required.")));
        }
        if (this.isLoading) {
            return (h(Host, null, h("div", { class: "document-state" }, h("ir-spinner", null))));
        }
        if (this.error) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, this.error)));
        }
        if (!this.statement) {
            return (h(Host, null, h("div", { class: "document-state document-state--error" }, "No statement data found.")));
        }
        const { STARTING_BALANCE, ENDING_BALANCE, My_Rows } = this.statement;
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? formatAmount(currency, v) : '—');
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '1.75rem' }, property: this.property, agentName: this.agentName, documentType: "statement" }), h("table", { class: "stmt-table" }, h("thead", null, h("tr", null, h("th", { class: "stmt-th stmt-th--date" }, "Date"), h("th", { class: "stmt-th" }, "Description"), h("th", { class: "stmt-th" }, "Document #"), h("th", { class: "stmt-th stmt-th--num" }, "Debit"), h("th", { class: "stmt-th stmt-th--num" }, "Credit"), h("th", { class: "stmt-th stmt-th--num" }, "Balance"))), h("tbody", null, h("tr", { class: "stmt-row stmt-row--balance" }, h("td", { class: "stmt-td", colSpan: 3 }, "Opening Balance \u2014 ", moment(this.fromDate).format(DATE_DISPLAY)), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td stmt-td--num stmt-td--bold" }, fmt(STARTING_BALANCE))), My_Rows?.map(row => {
            const tx = row?.Cl_tx;
            if (!tx)
                return null;
            return (h("tr", { class: "stmt-row" }, h("td", { class: "stmt-td stmt-td--date" }, tx.SERVICE_DATE ? moment(tx.SERVICE_DATE).format(DATE_DISPLAY) : '—'), h("td", { class: "stmt-td" }, tx.DESCRIPTION || '—'), h("td", { class: "stmt-td stmt-td--doc" }, row.DOC_NUMBER || '—'), h("td", { class: "stmt-td stmt-td--num" }, tx.DEBIT ? fmt(tx.DEBIT) : '—'), h("td", { class: "stmt-td stmt-td--num" }, tx.CREDIT ? fmt(tx.CREDIT) : '—'), h("td", { class: "stmt-td stmt-td--num" }, fmt(row.RUNNING_BALANCE))));
        }), h("tr", { class: "stmt-row stmt-row--balance" }, h("td", { class: "stmt-td", colSpan: 3 }, "Closing Balance \u2014 ", moment(this.toDate).format(DATE_DISPLAY)), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td" }), h("td", { class: "stmt-td stmt-td--num stmt-td--bold" }, fmt(ENDING_BALANCE))))))));
    }
    static get is() { return "ir-cl-statement-preview"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-statement-preview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-statement-preview.css"]
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
            "currencyId": {
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
                "attribute": "currency-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "error": {},
            "property": {},
            "statement": {}
        };
    }
}
//# sourceMappingURL=ir-cl-statement-preview.js.map
