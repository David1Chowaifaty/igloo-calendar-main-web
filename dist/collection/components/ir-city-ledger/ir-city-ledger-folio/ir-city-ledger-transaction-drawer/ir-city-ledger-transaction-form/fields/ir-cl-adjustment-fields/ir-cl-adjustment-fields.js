import { Fragment, h } from "@stencil/core";
import { entryTypeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
export class IrClAdjustmentFields {
    entryType = '';
    linkType = 'NONE';
    linkedId;
    bookingOptions = [];
    unpaidInvoiceOptions = [];
    fieldChange;
    // private get linkedIdOptions(): LinkedOption[] {
    //   if (this.linkType === 'BOOKING') return this.bookingOptions;
    //   if (this.linkType === 'INVOICE') return this.unpaidInvoiceOptions;
    //   return [];
    // }
    render() {
        return (h(Fragment, { key: '1e3cb5f175dc6bdc68e0f334fb9cd3233560fb1c' }, h("div", { key: '84aee8199252ecc1db9b5f169d7105d945f17788', class: "field field--full-width" }, h("ir-validator", { key: '7eb355d040b19607a7260508bf773fb12ad2dade', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: 'ed33bdfe80a4f5d43510174596cf3aee22200702', label: "Entry Type", orientation: "horizontal", size: "small", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '86167db0a17e51426cc241adef2e7921aacccf4f', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '2a2727c0d3554d699b9d19aadfd8761a1e5d213f', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit"))))));
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::EntryType",
                            "referenceLocation": "EntryType"
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
                "reflect": false,
                "attribute": "entry-type",
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
                            "id": "src/components/ir-city-ledger/ir-city-ledger-folio/ir-city-ledger-transaction-drawer/ir-city-ledger-transaction-form/ir-city-ledger-transaction-form.schema.ts::LinkType",
                            "referenceLocation": "LinkType"
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
                "reflect": false,
                "attribute": "link-type",
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
                "reflect": false,
                "attribute": "linked-id"
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
