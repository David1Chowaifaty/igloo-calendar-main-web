import { h } from "@stencil/core";
import { entryTypeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
export class IrClOpeningBalanceFields {
    entryType = '';
    fieldChange;
    render() {
        return (h("div", { key: 'b3ed9c6a0a9ce17d50c8f3203dd531a307cc0bab', class: "field field--full-width" }, h("ir-validator", { key: 'fa09859dab69f45aea32f582cfc5324aca881f06', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '6dc3f004e801eaf68e3e542f15f8d8b64b63d871', label: "Entry Type", orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: 'bcb84ff5b6713eb0ab117c659f48e54e11ee5358', value: "CR", appearance: "button", class: "entry-type --credit" }, "Credit"), h("wa-radio", { key: '059cf6dd963acb633b39fcf7347f612ca8beccbc', value: "DB", appearance: "button", class: "entry-type --debit" }, "Debit")))));
    }
    static get is() { return "ir-cl-opening-balance-fields"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-cl-opening-balance-fields.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-cl-opening-balance-fields.css"]
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
