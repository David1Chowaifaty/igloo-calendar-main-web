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
        return (h("ir-filter-card", { key: '7d6e0f15a035f9ebad5ca7376b1674088b4fa3dd' }, h("wa-radio-group", { key: '857b6411324dea9b383f820f3542698fb37863ac', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '6e62c55a54ae77ebce6b9f93b1273caf01f77c07', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: 'fe1fe1517124021fd4a1641b6c125d0e078e64b5', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), this.allowedProperties.length > 1 && (h("ir-m-combobox", { key: 'd057e40aa2138fec8813f2b584965ba669ed5388', defaultOption: this.filters?.LIST_AC_ID?.length === this.allowedProperties?.length ? 'all' : this.filters?.LIST_AC_ID[0]?.toString(), onOptionChange: e => {
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
            ] })), h("wa-select", { key: 'cf14fea2d682557d116ca04edc833b0ca9807205', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: 'ed4c4ce75e39892418834402bb28dd17e4a69815', value: "7" }, "For the past 7 days"), h("wa-option", { key: '0ea10450db38ae23fe834a567858882dd953e43e', value: "14" }, "For the past 14 days"), h("wa-option", { key: '9d8b3a6ca5a95a65d038bf3fb952949862add200', value: "30" }, "For the past 30 days"), h("wa-option", { key: '170ce43ce8a20d8a2572984ea85e57e6fc9eef0b', value: "60" }, "For the past 60 days"), h("wa-option", { key: 'f3374b43ad44b3e8ee5f088bef34d9ad49a9926d', value: "90" }, "For the past 90 days"), h("wa-option", { key: '0c06a49e6e7c3a6c54cd4e38e6845d030cbfeae2', value: "365" }, "For the past 365 days")), h("div", { key: '1bb648b4a3a4ea2a885f8943c83f3a74ccbfa002', class: "or-divider" }, h("span", { key: '3428f21f97b26443976f275775c1c2b3ce8cc846', class: "or-divider__line" }), h("span", { key: '2e73c2b0f24f357a1b086f9f0246a1094e02a90d', class: "or-divider__text" }, "Or"), h("span", { key: 'a534bac699840eca3bc76fc9f8c19a3d93f61e7c', class: "or-divider__line" })), h("ir-date-range-filter", { key: '4a33542f4adf7416b9b93ff4813dde821d97592a', label: 'Date range', fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", quickDates: this.quickDates, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '0035db17f6f7eb3f74e4ce472d93f0fcf610a858', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: 'c6e231c32fe2e9acb065454044d6ac1b612c8b0b', slot: "footer" }, h("ir-custom-button", { key: '85dc192ab3bd2e7733f62e6ae42c83ebc2156e1c', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: 'b5e9c9aa9b4443b9ff57948138034674253ed8f9', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
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
