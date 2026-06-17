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
        return (h("form", { key: '93f98ead379064f2a0095e84b1d4ea20c6e33d91', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, h("div", { key: 'f61da46a1f9d9e5a6b32c93777545dd6142f898e', class: "stmt-filters" }, h("ir-validator", { key: '41e3be4369aed1a73a92f38083609c345a3dec2b', schema: z.object({
                fromDate: z.string().nonempty(),
                toDate: z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, h("ir-date-range-filter", { key: '60eb9f5885306ac1356211710784c7cb909ce776', class: "stmt-filters__date-picker", maxDate: moment().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: 'a628178ac26e37f9d3c70942f04323c4b5441f97', class: "stmt-filters__right" }, h("ir-custom-button", { key: '155443d4d9001c1096b19128e70e09780701e352', variant: "brand", type: "submit" }, "Create Statement"), h("ir-custom-button", { key: '55384a2feac0435d4f955e71e26df3185a6db281', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
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
                            "path": "C:/Users/user/Code/work/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx",
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
                            "path": "C:/Users/user/Code/work/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx",
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
                            "path": "C:/Users/user/Code/work/modified-ir-webcmp/src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx",
                            "id": "src/components/ir-city-ledger/ir-city-ledger-statements/ir-city-ledger-statements-filter/ir-city-ledger-statements-filter.tsx::StatementFilters"
                        }
                    }
                }
            }];
    }
}
