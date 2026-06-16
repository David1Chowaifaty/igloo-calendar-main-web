import { Fragment, h } from "@stencil/core";
import { getEntryValue } from "../../../../../../../utils/utils";
import { paymentMethodCodeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
export class IrClPaymentFields {
    paymentMethodCode = '';
    isOnAccount = false;
    invoiceId;
    paymentMethods = [];
    unpaidInvoiceOptions = [];
    noInvoices = false;
    language = 'en';
    fieldChange;
    stopPropagation(event) {
        event.stopImmediatePropagation();
    }
    handlePaymentMethodChange(value) {
        const method = this.paymentMethods?.find(pm => pm.CODE_NAME === value);
        if (!method) {
            this.fieldChange.emit({ payment_method: null });
            return;
        }
        const payment_method = {
            code: method.CODE_NAME,
            description: method.CODE_VALUE_EN,
            operation: method.NOTES,
        };
        this.fieldChange.emit({ payment_method });
    }
    render() {
        return (h(Fragment, { key: '3127459a4ce57c134d705025a7bb3561aa1805ad' }, h("div", { key: '871ec03af18776e5d727e7c373a2f2b1faa3278d', class: "payment-section" }, h("div", { key: 'f57db73a06f5bae189833ec1237b1937614eefe1', class: "field" }, h("ir-validator", { key: '91fd254d65c0bf5e0e991b5c06ba6b82d33580d9', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, h("wa-select", { key: '82673b3677c90fb53a1513ff64587dd7288757ce', size: "small", label: "Payment method", placeholder: "Select method\u2026", value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, h("wa-option", { key: '39b7e78403b882e50739c6c9042c2dfc5d9786af', value: "" }, "Select method\u2026"), this.paymentMethods.map(method => (h("wa-option", { key: method.CODE_NAME, label: method.CODE_VALUE_EN, value: method.CODE_NAME }, getEntryValue({ entry: method, language: this.language }))))))))));
    }
    static get is() { return "ir-cl-payment-fields"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-payment-fields.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-payment-fields.css"]
        };
    }
    static get properties() {
        return {
            "paymentMethodCode": {
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
                "attribute": "payment-method-code",
                "reflect": false,
                "defaultValue": "''"
            },
            "isOnAccount": {
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
                "attribute": "is-on-account",
                "reflect": false,
                "defaultValue": "false"
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
            "paymentMethods": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::IEntries"
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
            "unpaidInvoiceOptions": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "LinkedOption[]",
                    "resolved": "LinkedOption[]",
                    "references": {
                        "LinkedOption": {
                            "location": "import",
                            "path": "../../ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkedOption"
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
            "noInvoices": {
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
                "attribute": "no-invoices",
                "reflect": false,
                "defaultValue": "false"
            },
            "language": {
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
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
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
//# sourceMappingURL=ir-cl-payment-fields.js.map
