import { h } from "@stencil/core";
import moment from "moment";
import { z } from "zod";
import { t } from "../../../../services/locale/t";
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
        return (h("form", { key: 'b05e0f77d33c317008684942e782f0087daf9b12', onSubmit: e => {
                e.preventDefault();
                if (canCreate)
                    this.createStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } }, h("div", { key: 'f18fa92a5709bb8f34294fecbf065baf70c60b06', class: "stmt-filters" }, h("ir-validator", { key: '32d9d7880467c3e2ac218777a0b3d6d3fbc2fa51', schema: z.object({
                fromDate: z.string().nonempty(),
                toDate: z.string().nonempty(),
            }), value: {
                fromDate: this.fromDate,
                toDate: this.toDate,
            }, class: "stmt-filters__left" }, h("ir-date-range-filter", { key: '56aa09f1310e7440e8823d1b48d106f03769d569', selectionMode: "auto", class: "stmt-filters__date-picker", maxDate: moment().format('YYYY-MM-DD'), fromDate: this.fromDate, toDate: this.toDate, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? null;
                this.toDate = e.detail.to ?? null;
                this.filtersChange.emit({ fromDate: this.fromDate, toDate: this.toDate });
            } })), h("div", { key: '1845e2cde4b09d3295f65a87042ea4ad2bb85446', class: "stmt-filters__right" }, h("ir-custom-button", { key: '45aa17cc6772c7c8c5b90ffca21c1e146490a328', variant: "brand", type: "submit" }, t('Lcz_CreateStatement', { fallback: 'Create Statement' })), h("ir-custom-button", { key: '37f0a1866773e9569871ac5d9fd737a5431efccc', variant: "brand", appearance: "outlined", disabled: !canCreate, onClickHandler: () => {
                if (canCreate) {
                    this.printStatement.emit({ fromDate: this.fromDate, toDate: this.toDate });
                }
            } }, t('Lcz_Print', { fallback: 'Print' }))))));
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
