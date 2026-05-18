import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../../../../../utils/utils";
import calendar_data from "../../../../../../../stores/calendar-data";
import { invoiceIdRequiredFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
export class IrClInvoiceSelect {
    value = '';
    fiscalDocuments = [];
    label = 'Invoice';
    hint = '';
    invoiceChange;
    render() {
        return (h("ir-validator", { key: '71deed6778ebafc994bb586d53e9b3919e7db9f0', schema: invoiceIdRequiredFieldSchema, value: this.value, valueEvent: "change" }, h("wa-select", { key: '4ffa8b36a851b4d3042cfa247e50e7a711d63be2', label: this.label, size: "small", required: true, hint: this.hint || undefined, placeholder: "Select invoice", value: this.value, onchange: event => {
                this.invoiceChange.emit(event.target.value || '');
            } }, this.fiscalDocuments.map(doc => {
            const date = doc.ISSUE_DATE_DISPLAY ?? (doc.ISSUE_DATE ? moment(doc.ISSUE_DATE, 'YYYY-MM-DD').format('MMM D, YYYY') : '');
            const amount = doc.TOTAL_AMOUNT != null ? formatAmount(calendar_data.property?.currency?.symbol, doc.TOTAL_AMOUNT) : '';
            const docNumber = doc.DOC_NUMBER ?? '';
            const typeName = doc.FD_TYPE_NAME ?? '';
            return (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID), label: docNumber }, h("div", { class: "invoice-option" }, h("div", { class: "invoice-option__row" }, h("span", { class: "invoice-option__number" }, docNumber), h("span", { class: "invoice-option__type" }, typeName)), h("div", { class: "invoice-option__row invoice-option__meta" }, date && h("span", { class: "invoice-option__date" }, date), amount && h("span", { class: "invoice-option__amount" }, amount)), doc.EXTERNAL_REF && h("span", { class: "invoice-option__ref" }, "Ref: ", doc.EXTERNAL_REF))));
        }))));
    }
    static get is() { return "ir-cl-invoice-select"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-invoice-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-invoice-select.css"]
        };
    }
    static get properties() {
        return {
            "value": {
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
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
            },
            "fiscalDocuments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FiscalDocuments",
                    "resolved": "{ FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }[]",
                    "references": {
                        "FiscalDocuments": {
                            "location": "import",
                            "path": "@/services/city-ledger/types",
                            "id": "src/services/city-ledger/types.ts::FiscalDocuments"
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
            "label": {
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
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Invoice'"
            },
            "hint": {
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
                "attribute": "hint",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "invoiceChange",
                "name": "invoiceChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-cl-invoice-select.js.map
