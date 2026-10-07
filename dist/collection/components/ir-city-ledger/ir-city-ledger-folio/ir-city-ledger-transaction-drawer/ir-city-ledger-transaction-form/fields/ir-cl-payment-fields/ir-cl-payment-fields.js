import { Fragment, h } from "@stencil/core";
import { getSetupEntryLabel } from "../../../../../../../services/setup/index";
import { paymentMethodCodeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
import { t } from "../../../../../../../services/locale/t";
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
        return (h(Fragment, { key: 'e6612136d23f47978f840ed8827e043652870357' }, h("div", { key: 'fb60108654718af725ad9ad5c77dcfed91a1e0b6', class: "payment-section" }, h("div", { key: '4ba97ddfd871e01f50c78bd56aa9b9526e77597f', class: "field" }, h("ir-validator", { key: 'ae26be4e59b4e1b1013dbd43537c44d87f117061', schema: paymentMethodCodeFieldSchema, value: this.paymentMethodCode, valueEvent: "change" }, h("wa-select", { key: '9a33727080fc4c42b75a61154997d47264741b92', size: "s", label: t('Lcz_PaymentMethod', { fallback: 'Payment Method' }), placeholder: t('Lcz_SelectMethodPlaceholder', { fallback: 'Select method…' }), value: this.paymentMethodCode, "onwa-show": e => this.stopPropagation(e), "onwa-hide": e => this.stopPropagation(e), onchange: e => {
                this.stopPropagation(e);
                this.handlePaymentMethodChange(e.target.value);
            } }, h("wa-option", { key: 'f9546caf104fbb141cfa500905ca649aedb8d6f1', value: "" }, t('Lcz_SelectMethodPlaceholder', { fallback: 'Select method…' })), this.paymentMethods.map(method => (h("wa-option", { key: method.CODE_NAME, label: getSetupEntryLabel(method), value: method.CODE_NAME }, getSetupEntryLabel(method))))))))));
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
                "reflect": false,
                "attribute": "payment-method-code",
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
                "reflect": false,
                "attribute": "is-on-account",
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
                "reflect": false,
                "attribute": "invoice-id"
            },
            "paymentMethods": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "SetupEntries[]",
                    "resolved": "SetupEntries[]",
                    "references": {
                        "SetupEntries": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::SetupEntries",
                            "referenceLocation": "SetupEntries"
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkedOption",
                            "referenceLocation": "LinkedOption"
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
                "reflect": false,
                "attribute": "no-invoices",
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
                "reflect": false,
                "attribute": "language",
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
                    "resolved": "CityLedgerTransactionFormDraft",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "CityLedgerTransactionFormDraft": {
                            "location": "import",
                            "path": "../../ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::CityLedgerTransactionFormDraft",
                            "referenceLocation": "CityLedgerTransactionFormDraft"
                        }
                    }
                }
            }];
    }
}
