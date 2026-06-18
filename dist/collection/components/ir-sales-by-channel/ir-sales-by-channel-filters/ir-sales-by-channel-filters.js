import { h } from "@stencil/core";
import moment from "moment";
import locales from "../../../stores/locales.store";
export class IrSalesByChannelFilters {
    isLoading;
    baseFilters;
    allowedProperties;
    filters;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters };
        this.window = this.baseFilters.WINDOW.toString();
        this.applyFilters.emit(this.filters);
    }
    quickDates = [
        {
            label: '7 Days Ago',
            getDate: () => moment().subtract(7, 'days'),
        },
        {
            label: '14 Days Ago',
            getDate: () => moment().subtract(14, 'days'),
        },
        {
            label: '30 Days Ago',
            getDate: () => moment().subtract(30, 'days'),
        },
        {
            label: '60 Days Ago',
            getDate: () => moment().subtract(60, 'days'),
        },
        {
            label: '90 Days Ago',
            getDate: () => moment().subtract(90, 'days'),
        },
        {
            label: '1 Year Ago',
            getDate: () => moment().subtract(365, 'days'),
        },
    ];
    render() {
        return (h("ir-filter-card", { key: '132d66d1c138cfb24711efa10f02f292d394c719' }, h("wa-radio-group", { key: '3eb34d422a393bf98bb43099d0a4cefea5d1db97', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '528bd18fdd1d236ade6b12e5cf899b618e85bd8b', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: 'b91839c3c2c5ac7a3c1f6ff1e4b3eb1dd080a1a1', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), this.allowedProperties.length > 1 && (h("ir-m-combobox", { key: '56861364c45ca27d4e9a1e3bca0137dc5b9ec88c', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
                const value = e.detail.value;
                if (value === 'all') {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.map(p => p.id) });
                }
                else {
                    this.updateFilter({ LIST_AC_ID: this.allowedProperties.filter(p => p.id === Number(value)).map(p => p.id) });
                }
            }, options: [
                { label: 'All', value: 'all' },
                ...this.allowedProperties.map(p => ({
                    label: p.name,
                    value: p.id.toString(),
                })),
            ] })), h("wa-select", { key: '3599eb4a8bd8e7da12a4323ef4a35fcd2e947d9a', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: '0aaa2887894b866b80f843f41b8fcd645557a722', value: "7" }, "For the past 7 days"), h("wa-option", { key: 'e010d68c7c1c6991085f474e421eb9ce0ae8651c', value: "14" }, "For the past 14 days"), h("wa-option", { key: '2ede649c46fb2144647e9a33967c00d1abc3d122', value: "30" }, "For the past 30 days"), h("wa-option", { key: '0ab09b50a0b8350168db1a9accc013ccfee73852', value: "60" }, "For the past 60 days"), h("wa-option", { key: '431149f653343358740b3cc3a0bc6e0ac8303d36', value: "90" }, "For the past 90 days"), h("wa-option", { key: '15b5a75d552f6a72fddfbc217b5813f710de44da', value: "365" }, "For the past 365 days")), h("div", { key: '6c73c101ad5ded038af5420f6f8b7fd53ea4910d', class: "or-divider" }, h("span", { key: '10be24471f75acc972a0982c2c701e46448f2176', class: "or-divider__line" }), h("span", { key: 'd10fb2e9b4f2ca0e1eecec17a39b6f623eb86c29', class: "or-divider__text" }, "Or"), h("span", { key: '7af62904840cf4463435789f3d94ee5049a73914', class: "or-divider__line" })), h("ir-date-range-filter", { key: 'bfd4adc8562e07adea3d25d9e3ad5af4556dddc1', label: 'Date range', fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", quickDates: this.quickDates, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '89e321dfed9cae592a03247a16849300024ed80b', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: '9b9e84ee08ca78b76fa85206753501e6c2bade2b', slot: "footer" }, h("ir-custom-button", { key: '4155325b4c63c0be2afa6d6c65649a6b63f57d5d', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: '82cf902b35a0eb3d6227e54bd6e2b711caef8d55', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
    }
    static get is() { return "ir-sales-by-channel-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-by-channel-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-by-channel-filters.css"]
        };
    }
    static get properties() {
        return {
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "is-loading"
            },
            "baseFilters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ChannelSaleFilter",
                    "resolved": "{ AC_ID?: string; BOOK_CASE?: string; FROM_DATE?: string; TO_DATE?: string; WINDOW?: number; is_export_to_excel?: boolean; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
                    "references": {
                        "ChannelSaleFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelSaleFilter",
                            "referenceLocation": "ChannelSaleFilter"
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
                "setter": false
            },
            "allowedProperties": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AllowedProperties",
                    "resolved": "{ name?: string; id?: number; }[]",
                    "references": {
                        "AllowedProperties": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::AllowedProperties",
                            "referenceLocation": "AllowedProperties"
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
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "window": {}
        };
    }
    static get events() {
        return [{
                "method": "applyFilters",
                "name": "applyFilters",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "ChannelSaleFilter",
                    "resolved": "{ AC_ID?: string; BOOK_CASE?: string; FROM_DATE?: string; TO_DATE?: string; WINDOW?: number; is_export_to_excel?: boolean; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
                    "references": {
                        "ChannelSaleFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-channel/types.ts::ChannelSaleFilter",
                            "referenceLocation": "ChannelSaleFilter"
                        }
                    }
                }
            }];
    }
}
