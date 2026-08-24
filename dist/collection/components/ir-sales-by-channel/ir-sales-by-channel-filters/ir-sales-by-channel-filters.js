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
        return (h("ir-filter-card", { key: 'c65b71371dc7010fc3ff45e3d14d0d5e0d73c9af' }, h("wa-radio-group", { key: '8ee9dd5670ae983c9f9f9a762f448ca2ddd4806c', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: 'dece8baa3769fdb3a24bd8cb7de75fc0a126cf3f', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: '315c91a45b9a6452516fc33642d6ca47786ed0fb', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), this.allowedProperties.length > 1 && (h("ir-m-combobox", { key: '577c38d339c65bf451e4f9c6aca2692f06a8b4af', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
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
            ] })), h("wa-select", { key: '528d25f025a9dfa7a64f155d11c599723d47a502', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: 'c7976427a05eaf469b28c51bc7528cfb86bd9dd9', value: "7" }, "For the past 7 days"), h("wa-option", { key: '436f18f9887999c5fcf01858265bba087a50f4ca', value: "14" }, "For the past 14 days"), h("wa-option", { key: '06ce3306a5b3d0356274e1e224a21b9fefa9d648', value: "30" }, "For the past 30 days"), h("wa-option", { key: '9337340c80461a6fdfe0b35645ec358c9a6b4404', value: "60" }, "For the past 60 days"), h("wa-option", { key: '6bbb78ce23e318701543bb6ab982c693ce6aec04', value: "90" }, "For the past 90 days"), h("wa-option", { key: 'ca16e0a263a19f54e2f6cfb3a59b98fa798f4114', value: "365" }, "For the past 365 days")), h("div", { key: 'f7d7d841b14cc5b90a8be072fb65843a9f7bc9b2', class: "or-divider" }, h("span", { key: '3e2e7af6ee92a61ab4492bbbfba6061dc8ae7d89', class: "or-divider__line" }), h("span", { key: '69205f2fd1e1b5109d69e544600d49ff17c635ed', class: "or-divider__text" }, "Or"), h("span", { key: 'cfd72ffe90784811f3048beffc74e7a0617d41e3', class: "or-divider__line" })), h("ir-date-range-filter", { key: '27a4aa88f3fe62b586251fe8eadecdbb6c62ac49', label: 'Date range', fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", quickDates: this.quickDates, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: 'acb29c234707fbfdb716c2b2b85ea56914ab9a20', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: 'a13ffd5c69f78f0c9993d228d9d4d74f03c1c46a', slot: "footer" }, h("ir-custom-button", { key: '0b40b00752f0fce06f47fe639b7e8e6839d74206', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: '48742e4e0c5ed43755d0a35eeec2421fd63265c1', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
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
                    "resolved": "{ is_export_to_excel?: boolean; FROM_DATE?: string; TO_DATE?: string; AC_ID?: string; BOOK_CASE?: string; WINDOW?: number; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
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
                            "path": "@/services/property/types",
                            "id": "src/services/property/types.ts::AllowedProperties",
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
                    "resolved": "{ is_export_to_excel?: boolean; FROM_DATE?: string; TO_DATE?: string; AC_ID?: string; BOOK_CASE?: string; WINDOW?: number; LIST_AC_ID?: number[]; include_previous_year?: boolean; }",
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
