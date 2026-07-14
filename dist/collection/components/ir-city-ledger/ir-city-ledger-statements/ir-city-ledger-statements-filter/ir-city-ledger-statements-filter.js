import { h } from "@stencil/core";
import moment from "moment";
import { z } from "zod";
export class IrCityLedgerStatementsFilter {
    initialFromDate = null;
    initialToDate = null;
    fromDate = null;
    toDate = null;
    filtersChange;
    componentWillLoad() {
        this.fromDate = this.initialFromDate;
        this.toDate = this.initialToDate;
    }
    createStatement;
    printStatement;
    render() {
        const canCreate = !!(this.fromDate && this.toDate);
        return (h("form", { key: '8a69b5eb3ca80cd052688ce5ad6fac1b0b536f4b', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, h("div", { key: '33050a3874493d909d9f5d4e1df1ecade97a34a5', class: "stmt-filters" }, h("ir-validator", { key: '7d125d6541c59a77318a30894f88332e2bbe5762', schema: z.object({
                fromDate: z.string().nonempty(),
                toDate: z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, h("ir-date-range-filter", { key: 'eae74dc4126d89fd1846c6010cc6bce3015a2ce2', selectionMode: "auto", class: "stmt-filters__date-picker", maxDate: moment().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '59f02f886a014ceb970df2a481ce5c3474e681b5', class: "stmt-filters__right" }, h("ir-custom-button", { key: '3442214a7c71a4e9657947c0aba6390e8256dfaa', variant: "brand", type: "submit" }, "Create Statement"), h("ir-custom-button", { key: '2f62ba2f57580f64c3c56f6583a46a72e32d09c9', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, "Print")))));
    }
    static get is() { return "ir-city-ledger-statements-filter"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-city-ledger-statements-filter.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-city-ledger-statements-filter.css"]
        };
    }
    static get properties() {
        return {
            "initialFromDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
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
                "attribute": "initial-from-date",
                "defaultValue": "null"
            },
            "initialToDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
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
                "attribute": "initial-to-date",
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "fromDate": {},
            "toDate": {}
        };
    }
    static get events() {
        return [{
                "method": "filtersChange",
                "name": "filtersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "StatementFilters",
                    "resolved": "StatementFilters",
                    "references": {
                        "StatementFilters": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx::StatementFilters"
                        }
                    }
                }
            }, {
                "method": "createStatement",
                "name": "createStatement",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "StatementFilters",
                    "resolved": "StatementFilters",
                    "references": {
                        "StatementFilters": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx::StatementFilters"
                        }
                    }
                }
            }, {
                "method": "printStatement",
                "name": "printStatement",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "StatementFilters",
                    "resolved": "StatementFilters",
                    "references": {
                        "StatementFilters": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx::StatementFilters"
                        }
                    }
                }
            }];
    }
}
