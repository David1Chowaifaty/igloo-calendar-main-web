import { Fragment, h } from "@stencil/core";
import { entryTypeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
import { t } from "../../../../../../../services/locale/t";
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
        return (h(Fragment, { key: 'fcf143a16e8c1ee81ed5ed639129c99a4fa38e0e' }, h("div", { key: 'e0c61342a6069bb3a46ecef1992f1e876c7d8d6e', class: "field field--full-width" }, h("ir-validator", { key: 'f6a3de269e01e564039a8bd08918097262a86c31', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: 'fd2ff1aa42d86b20a4caf012a5be39ab0090f029', label: t('Lcz_EntryType', { fallback: 'Entry Type' }), orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: '041540172be31c5d169446f1fa2a8ba3d1b9cd46', value: "CR", appearance: "button", class: "entry-type --credit" }, t('Lcz_Credit', { fallback: 'Credit' })), h("wa-radio", { key: 'dc515942016e87a4b9215e1e1886f89d560f6741', value: "DB", appearance: "button", class: "entry-type --debit" }, t('Lcz_Debit', { fallback: 'Debit' })))))));
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
