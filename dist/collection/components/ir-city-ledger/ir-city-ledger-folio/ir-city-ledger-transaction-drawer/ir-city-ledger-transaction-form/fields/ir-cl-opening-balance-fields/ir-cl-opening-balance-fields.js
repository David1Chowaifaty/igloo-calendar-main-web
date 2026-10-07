import { h } from "@stencil/core";
import { entryTypeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
import { t } from "../../../../../../../services/locale/t";
export class IrClOpeningBalanceFields {
    entryType = '';
    fieldChange;
    render() {
        return (h("div", { key: '54afbdd9d873d65c03f5c2fb7f387c3858bfae90', class: "field field--full-width" }, h("ir-validator", { key: 'c0beeeb5f5a24b4ca869a4d90f579558e789d13a', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: 'faac7c1bb2861c97d778ed470ef92a133e2f16ee', label: t('Lcz_EntryType', { fallback: 'Entry Type' }), orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: 'e792ea191782cae25775cefe08b233cc8273f775', value: "CR", appearance: "button", class: "entry-type --credit" }, t('Lcz_Credit', { fallback: 'Credit' })), h("wa-radio", { key: 'ca786fc01c98bff0697de745c2723989e72f5b6e', value: "DB", appearance: "button", class: "entry-type --debit" }, t('Lcz_Debit', { fallback: 'Debit' }))))));
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
