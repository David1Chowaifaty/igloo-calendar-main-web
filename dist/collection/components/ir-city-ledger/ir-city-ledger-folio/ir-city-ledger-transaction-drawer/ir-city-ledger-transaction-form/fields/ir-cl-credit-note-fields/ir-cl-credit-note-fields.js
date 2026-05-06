import { Fragment, h } from "@stencil/core";
import { invoiceIdRequiredFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
export class IrClCreditNoteFields {
    creditNoteMode = 'cancel-invoice';
    invoiceId;
    fiscalDocuments = [];
    isFetchingFiscalDocs = false;
    fieldChange;
    render() {
        const noInvoices = this.fiscalDocuments.length === 0;
        return (h(Fragment, { key: 'a1d1c20fb2ee11b50db62acf6f20393e562b7f39' }, h("div", { key: 'd33a15c351e5405816db9e118601fb34bd157a95', class: "field field--full-width" }, h("wa-radio-group", { key: '85ff551a0d189187ceae50758e4ba5479f073069', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: 'e500c9337c92f05636ffd5142fb7816079f8eb9b', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), h("wa-radio", { key: '4aa4aeb0e7b85ff8cfd602818a4d64acfacd56df', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (h("div", { key: '54a317bc6160893576fb5f85a22e8bc946a48381', class: "field" }, h("ir-validator", { key: '2028057b092ad3792ae62de133dde8966c5aae20', schema: invoiceIdRequiredFieldSchema, value: this.invoiceId ?? '', valueEvent: "change" }, h("wa-select", { key: 'fa4f7e6f5f106023afcfd041fb6fdb994518c08b', label: "Invoice", size: "small", required: true, value: this.invoiceId ?? '', onchange: event => {
                this.fieldChange.emit({ invoiceId: event.target.value || undefined });
            } }, h("wa-option", { key: '60b6d57de054512d0fb774404ec141630486f40c', value: "" }, "Select invoice"), this.fiscalDocuments.map(doc => (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID) }, doc.DOC_NUMBER, " \u2014 ", doc.FD_TYPE_NAME)))))))));
    }
    static get is() { return "ir-cl-credit-note-fields"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-credit-note-fields.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-credit-note-fields.css"]
        };
    }
    static get properties() {
        return {
            "creditNoteMode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "CreditNoteMode",
                    "resolved": "\"cancel-invoice\" | \"goodwill\"",
                    "references": {
                        "CreditNoteMode": {
                            "location": "import",
                            "path": "../../ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::CreditNoteMode"
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
                "attribute": "credit-note-mode",
                "reflect": false,
                "defaultValue": "'cancel-invoice'"
            },
            "invoiceId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | undefined",
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
                "attribute": "invoice-id",
                "reflect": false
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
            "isFetchingFiscalDocs": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-fetching-fiscal-docs",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "fieldChange",
                "name": "fieldChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Partial<CityLedgerTransactionFormDraft>",
                    "resolved": "{ transactionType?: TransactionType; date?: string; amount?: string; taxId?: string; reference?: string; notes?: string; entryType?: \"\" | \"DB\" | \"CR\"; isCutover?: boolean; payment_type?: PaymentTypeOption; payment_method?: PaymentMethodOption; designation?: string; invoiceId?: string; onAccount?: boolean; serviceCategoryId?: string; linkType?: \"NONE\" | \"INVOICE\" | \"BOOKING\"; linkedId?: string; reason?: \"\" | \"ROUNDING_DIFFERENCE\" | \"GOODWILL_CREDIT\" | \"PRICE_MATCH\" | \"COMMISSION_CORRECTION\" | \"DISCOUNT_CORRECTION\"; generatesFiscalDocument?: boolean; creditNoteMode?: \"cancel-invoice\" | \"goodwill\"; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "CityLedgerTransactionFormDraft": {
                            "location": "import",
                            "path": "../../ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::CityLedgerTransactionFormDraft"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-cl-credit-note-fields.js.map
