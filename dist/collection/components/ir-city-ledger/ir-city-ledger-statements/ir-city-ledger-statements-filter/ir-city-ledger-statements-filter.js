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
        return (h("form", { key: '8e6dab2700624131c28608c77434b54af728b0e9', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, h("div", { key: '80dd6e63f4790e00dab0550d23b62d104deb460f', class: "stmt-filters" }, h("ir-validator", { key: 'b9750f6fe5fc2f5e6d2f73009bec33bae4db28ca', schema: z.object({
                fromDate: z.string().nonempty(),
                toDate: z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, h("ir-date-range-filter", { key: '8b50812910c2cc9bcf32ab6482ca7bb9d103e272', class: "stmt-filters__date-picker", maxDate: moment().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '9498cb0d2922d215a00357da61f81a50e53781b9', class: "stmt-filters__right" }, h("ir-custom-button", { key: 'f04ce51ab8b532a8842f9b465265f18cd42b060a', variant: "brand", type: "submit" }, "Create Statement"), h("ir-custom-button", { key: '4b9b882b4382277ff1b766a83cdfe9a8e330c2d2', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
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
                "attribute": "initial-from-date",
                "reflect": false,
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
                "attribute": "initial-to-date",
                "reflect": false,
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
//# sourceMappingURL=ir-city-ledger-statements-filter.js.map
