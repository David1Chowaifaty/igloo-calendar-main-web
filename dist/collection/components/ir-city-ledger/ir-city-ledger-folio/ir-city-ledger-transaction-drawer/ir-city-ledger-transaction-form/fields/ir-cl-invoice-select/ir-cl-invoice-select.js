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
        return (h("ir-validator", { key: '581d9c88fa226b7303e17fdb2c58023bbfa91f17', schema: invoiceIdRequiredFieldSchema, value: this.value, valueEvent: "change" }, h("wa-select", { key: 'e7fcad00c4990bc623135e07afc2c2d41bc587fc', label: this.label, size: "s", required: true, hint: this.hint || undefined, placeholder: "Select invoice", value: this.value, onchange: event => {
                this.invoiceChange.emit(event.target.value || '');
            } }, this.fiscalDocuments.map(doc => {
            const date = doc.ISSUE_DATE_DISPLAY ?? (doc.ISSUE_DATE ? moment(doc.ISSUE_DATE, 'YYYY-MM-DD').format('MMM D, YYYY') : '');
            const amount = doc.TOTAL_AMOUNT != null ? formatAmount(calendar_data.property?.currency?.symbol, doc.TOTAL_AMOUNT) : '';
            const docNumber = doc.DOC_NUMBER ?? '';
            return (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID), label: docNumber }, h("div", { class: "invoice-option" }, h("div", { class: "invoice-option__left" }, h("span", { class: "invoice-option__number" }, docNumber), date && h("span", { class: "invoice-option__date" }, date), doc.EXTERNAL_REF && h("span", { class: "invoice-option__ref" }, "Ref: ", doc.EXTERNAL_REF)), amount && h("span", { class: "invoice-option__amount" }, amount))));
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
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "fiscalDocuments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "FiscalDocuments",
                    "resolved": "{ DOC_NUMBER?: string; FD_TYPE_CODE?: string; CURRENCY_ID?: number; TOTAL_AMOUNT?: number; CREDIT?: number; DEBIT?: number; NET_AMOUNT?: number; TAX_AMOUNT?: number; FROM_DATE?: string; TO_DATE?: string; BOOK_NBR?: string; AGENCY_ID?: number; AGENCY_NAME?: string; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT_DISPLAY?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT_DISPLAY?: string; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }[]",
                    "references": {
                        "FiscalDocuments": {
                            "location": "import",
                            "path": "@/services/city-ledger/types",
                            "id": "src/services/city-ledger/types.ts::FiscalDocuments",
                            "referenceLocation": "FiscalDocuments"
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
                "reflect": false,
                "attribute": "label",
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
                "reflect": false,
                "attribute": "hint",
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
