import { Fragment, h } from "@stencil/core";
export class IrClCreditNoteFields {
    creditNoteMode = 'cancel-invoice';
    invoiceId;
    fiscalDocuments = [];
    isFetchingFiscalDocs = false;
    fieldChange;
    render() {
        const noInvoices = this.fiscalDocuments.length === 0;
        return (h(Fragment, { key: '3a45653b3ca627bbbaab6c38ce65d90906219a4c' }, h("div", { key: '1e0d390a92b7f4e1afca9d2fc24b49ad91e4a7f4', class: "field field--full-width" }, h("wa-radio-group", { key: '4bcf0c1c5f7e62fde7d91a2fc780827d3a6cb196', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: '63bc2b1278b4791577bb67dc70a7926fe2a5d0c6', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), h("wa-radio", { key: 'e6098e380ab77dfb13520a3de4af053a81ebe803', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (h("div", { key: '04aadf7891ac58c6ec497b906ee33ade08676953', class: "field" }, h("ir-cl-invoice-select", { key: 'bb30214aaae28041918211e733b16adacb33ad93', value: this.invoiceId ?? '', fiscalDocuments: this.fiscalDocuments, label: "Invoice", onInvoiceChange: event => {
                this.fieldChange.emit({ invoiceId: event.detail || undefined });
            } })))));
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
