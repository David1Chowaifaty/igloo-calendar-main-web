import { Host, h } from "@stencil/core";
import { CityLedgerService } from "../../../../../services/city-ledger/index";
import { PropertyService } from "../../../../../services/property.service";
import { formatAmount } from "../../../../../utils/utils";
import Token from "../../../../../models/Token";
import moment from "moment";
import { FdTypes } from "../../../../../types/enums";
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
    fiscalDocuments = [];
    clPreviewReady;
    tokenService = new Token();
    propertyService = new PropertyService();
    cityLedgerService = new CityLedgerService();
    hasEmitted = false;
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
    componentDidRender() {
        if (!this.isLoading && !this.error && !this.hasEmitted) {
            this.hasEmitted = true;
            requestAnimationFrame(() => {
                this.clPreviewReady.emit();
            });
        }
    }
    async fetchData() {
        this.isLoading = true;
        this.error = null;
        try {
            const [propertyData, statement, fiscalDocuments] = await Promise.all([
                this.propertyService.getExposedProperty({ id: this.propertyId, language: 'en' }),
                this.cityLedgerService.getCLStatement({
                    AGENCY_ID: this.agentId,
                    CURRENCY_ID: this.currencyId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                }),
                this.cityLedgerService.getFiscalDocuments({
                    AGENCY_ID: this.agentId,
                    START_DATE: this.fromDate,
                    END_DATE: this.toDate,
                    LIST_FD_TYPE_CODE: [FdTypes.CreditNote, FdTypes.DebitNote, FdTypes.Invoice, FdTypes.Receipt],
                }),
            ]);
            this.property = propertyData?.My_Result ?? null;
            this.statement = statement;
            this.fiscalDocuments = fiscalDocuments ?? [];
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
        const { STARTING_BALANCE, ENDING_BALANCE } = this.statement;
        const currency = this.property?.currency?.symbol ?? '$';
        const fmt = (v) => (v != null ? formatAmount(currency, v) : '—');
        return (h(Host, null, h("div", { class: "document" }, h("ir-cl-document-header", { style: { marginBottom: '1.75rem' }, property: this.property, agentName: this.agentName, documentType: "statement" }), h("table", { class: "cl-table" }, h("thead", null, h("tr", null, h("th", { class: "cl-th" }, "Date"), h("th", { class: "cl-th" }, "Document #"), h("th", { class: "cl-th" }, "Type"), h("th", { class: "cl-th cl-th--num" }, "Debit"), h("th", { class: "cl-th cl-th--num" }, "Credit"), h("th", { class: "cl-th cl-th--num" }, "Balance"))), h("tbody", null, h("tr", { class: "cl-balance-row" }, h("td", { class: "cl-td", colSpan: 3 }, "Opening Balance \u2014 ", moment(this.fromDate).format(DATE_DISPLAY)), h("td", { class: "cl-td" }), h("td", { class: "cl-td" }), h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(STARTING_BALANCE))), (() => {
            let running = STARTING_BALANCE;
            return this.fiscalDocuments.map(doc => {
                running += (doc.DEBIT ?? 0) - (doc.CREDIT ?? 0);
                return (h("tr", null, h("td", { class: "cl-td cl-td--nowrap" }, doc.ISSUE_DATE_DISPLAY || (doc.ISSUE_DATE ? moment(doc.ISSUE_DATE).format(DATE_DISPLAY) : '—')), h("td", { class: "cl-td" }, doc.DOC_NUMBER || '—'), h("td", { class: "cl-td" }, doc.FD_TYPE_NAME || '—'), h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.DEBIT ? fmt(doc.DEBIT) : '—'), h("td", { class: "cl-td cl-td--num cl-td--muted" }, doc.CREDIT ? fmt(doc.CREDIT) : '—'), h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(running))));
            });
        })(), this.fiscalDocuments.length === 0 && (h("tr", null, h("td", { class: "cl-td cl-td--empty", colSpan: 6 }, "No fiscal documents found for this period."))), h("tr", { class: "cl-balance-row" }, h("td", { class: "cl-td", colSpan: 3 }, "Closing Balance \u2014 ", moment(this.toDate).format(DATE_DISPLAY)), h("td", { class: "cl-td" }), h("td", { class: "cl-td" }), h("td", { class: "cl-td cl-td--num cl-td--bold" }, fmt(ENDING_BALANCE))))))));
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
                "reflect": false,
                "attribute": "property-id"
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
                "reflect": false,
                "attribute": "ticket"
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
                "reflect": false,
                "attribute": "baseurl"
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
                "reflect": false,
                "attribute": "agent-id"
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
                "reflect": false,
                "attribute": "agent-name"
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
                "reflect": false,
                "attribute": "from-date"
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
                "reflect": false,
                "attribute": "to-date"
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
                "reflect": false,
                "attribute": "currency-id"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "error": {},
            "property": {},
            "statement": {},
            "fiscalDocuments": {}
        };
    }
    static get events() {
        return [{
                "method": "clPreviewReady",
                "name": "clPreviewReady",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
