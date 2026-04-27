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
        return (h(Fragment, { key: 'e6b8511a91364aecc7d21ada76af6ec315938d35' }, h("div", { key: 'fd9e4eb791cb6cdc9fa23fddc315e1ec270e431d', class: "field field--full-width" }, h("wa-radio-group", { key: 'f9495103a3bfe9a05200aca4822012b3f1cab6af', label: "Credit Note Type", orientation: "horizontal", size: "small", value: this.creditNoteMode, onchange: e => {
                const val = e.target.value;
                this.fieldChange.emit({
                    creditNoteMode: val,
                    invoiceId: val === 'goodwill' ? undefined : this.invoiceId,
                });
            } }, h("wa-radio", { key: '11b5648320f8afad0b6381a0d2502a221bb6800b', value: "cancel-invoice", appearance: "button", disabled: noInvoices || this.isFetchingFiscalDocs }, "Cancel invoice and unlock all items"), h("wa-radio", { key: '6f1b5f311e3458505b8e615b41ad353a0d03f486', value: "goodwill", appearance: "button" }, "Goodwill credit"))), this.creditNoteMode === 'cancel-invoice' && (h("div", { key: '6ca944ddd0faccf61ac589ac755ec16bc2cb48a8', class: "field" }, h("ir-validator", { key: '0f51741b015688c9fcd2ad2e34d24861171b653e', schema: invoiceIdRequiredFieldSchema, value: this.invoiceId ?? '', valueEvent: "change" }, h("wa-select", { key: 'ab037a7a0e53d97e330bf99ee3c88688e7c743cf', label: "Invoice", size: "small", required: true, value: this.invoiceId ?? '', onchange: event => {
                this.fieldChange.emit({ invoiceId: event.target.value || undefined });
            } }, h("wa-option", { key: '6979e57cf7ebf94c577b125cc5762edb459a0bc2', value: "" }, "Select invoice"), this.fiscalDocuments.map(doc => (h("wa-option", { key: doc.FD_ID, value: String(doc.FD_ID) }, doc.DOC_NUMBER, " \u2014 ", doc.FD_TYPE_NAME)))))))));
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
                    "resolved": "{ AGENCY_ID?: number; CURRENCY_ID?: number; AGENCY_NAME?: string; CREDIT?: number; CREDIT_DISPLAY?: string; CURRENCY_CODE?: string; DEBIT?: number; DEBIT_DISPLAY?: string; DOC_NUMBER?: string; EXTERNAL_REF?: string; FD_ID?: number; FD_STATUS_CODE?: string; FD_STATUS_NAME?: string; FD_TYPE_CODE?: string; FD_TYPE_NAME?: string; ISSUE_DATE?: string; ISSUE_DATE_DISPLAY?: string; IS_PRINTED?: boolean; NET_AMOUNT?: number; NET_AMOUNT_DISPLAY?: string; TAX_AMOUNT?: number; TAX_AMOUNT_DISPLAY?: string; TOTAL_AMOUNT?: number; BALANCE_BEFORE_TX?: number; BALANCE_AFTER_TX?: number; }[]",
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
