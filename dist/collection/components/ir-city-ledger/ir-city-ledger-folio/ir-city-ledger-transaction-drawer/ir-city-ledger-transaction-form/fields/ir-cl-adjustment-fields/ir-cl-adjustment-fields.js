import { Fragment, h } from "@stencil/core";
import { LINK_TYPES, entryTypeFieldSchema, linkTypeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
export class IrClAdjustmentFields {
    entryType = '';
    linkType = 'NONE';
    linkedId;
    bookingOptions = [];
    unpaidInvoiceOptions = [];
    fieldChange;
    get linkedIdOptions() {
        if (this.linkType === 'BOOKING')
            return this.bookingOptions;
        if (this.linkType === 'INVOICE')
            return this.unpaidInvoiceOptions;
        return [];
    }
    render() {
        return (h(Fragment, { key: '52dd7ca2640a74aa4976a6c19abcc6b6d8953723' }, h("div", { key: '3486737607c07d4a88623a1b0be55d333304986d', class: "field field--full-width" }, h("ir-validator", { key: '904e1ca1b9e4912acef3023f66383035815d2656', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: 'd1f1c2d1bb3342c152ec663e7043a5b7966c2f35', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '7363e6bab43e9ce51c1832a0b4c70b98241aa451', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '1074c504508ba48c9021e8964cf78a95417e593b', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))), h("div", { key: '28bf628c2c0a1052c314bcdd82a646e2ba78a3a9', class: "field" }, h("ir-validator", { key: '43e5418c345eb966205ad65a012dfb1a3ab222f2', schema: linkTypeFieldSchema, value: this.linkType, valueEvent: "change" }, h("wa-select", { key: '926e30de05cdbd03081962c6717b77d05192f0b6', label: "Link Type", size: "small", value: this.linkType, onchange: event => {
                const linkType = event.target.value;
                this.fieldChange.emit({
                    linkType,
                    linkedId: linkType === 'NONE' ? undefined : this.linkedId,
                });
            } }, LINK_TYPES.map(lt => (h("wa-option", { key: lt, value: lt }, lt)))))), this.linkType !== 'NONE' && (h("div", { key: '034098d364ac370f1fc75fafd7e5b2cd9f70e7c4', class: "field" }, h("wa-select", { key: 'c0f1cd12e4101316d863833b20b69be9fae6ff80', label: "Linked Record", size: "small", value: this.linkedId ?? '', onchange: event => {
                this.fieldChange.emit({ linkedId: event.target.value || undefined });
            } }, h("wa-option", { key: 'd356515764c0400efdd250c8f4b28d1adf8a4c6a', value: "" }, "No linked record"), this.linkedIdOptions.map(option => (h("wa-option", { key: option.id, value: option.id }, option.label))))))));
    }
    static get is() { return "ir-cl-adjustment-fields"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-adjustment-fields.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-adjustment-fields.css"]
        };
    }
    static get properties() {
        return {
            "entryType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "EntryType | ''",
                    "resolved": "\"\" | \"CR\" | \"DB\"",
                    "references": {
                        "EntryType": {
                            "location": "import",
                            "path": "../../ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::EntryType"
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
                "attribute": "entry-type",
                "reflect": false,
                "defaultValue": "''"
            },
            "linkType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "LinkType",
                    "resolved": "\"BOOKING\" | \"INVOICE\" | \"NONE\"",
                    "references": {
                        "LinkType": {
                            "location": "import",
                            "path": "../../ir-city-ledger-transaction-form.schema",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkType"
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
                "attribute": "link-type",
                "reflect": false,
                "defaultValue": "'NONE'"
            },
            "linkedId": {
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
                "attribute": "linked-id",
                "reflect": false
            },
            "bookingOptions": {
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
//# sourceMappingURL=ir-cl-adjustment-fields.js.map
