import { h } from "@stencil/core";
import { entryTypeFieldSchema } from "../../ir-city-ledger-transaction-form.schema";
import { t } from "../../../../../../../services/locale/t";
export class IrClOpeningBalanceFields {
    entryType = '';
    fieldChange;
    render() {
        return (h("div", { key: 'bd845e5c43193e4e9fba1a95df37fb0334924a53', class: "field field--full-width" }, h("ir-validator", { key: 'ad416fdbb53412582cb96ab9273922c187d05d61', schema: entryTypeFieldSchema, value: this.entryType, valueEvent: "change" }, h("wa-radio-group", { key: '68ea309f12d63cae4d2eb72da268604fb3e75050', label: t('Lcz_EntryType', { fallback: 'Entry Type' }), orientation: "horizontal", size: "s", value: this.entryType, onchange: event => {
                this.fieldChange.emit({ entryType: event.target.value });
            } }, h("wa-radio", { key: 'ba87e40ff50db137ec0c6cef1aab5d17a7bd4084', value: "CR", appearance: "button", class: "entry-type --credit" }, t('Lcz_Credit', { fallback: 'Credit' })), h("wa-radio", { key: '0590e3fde8dbcece41c09033f0e799d420631101', value: "DB", appearance: "button", class: "entry-type --debit" }, t('Lcz_Debit', { fallback: 'Debit' }))))));
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
