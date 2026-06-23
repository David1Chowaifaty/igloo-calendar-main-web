import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import moment from "moment";
export class IrSalesFilters {
    isLoading;
    baseFilters;
    filters;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = this.baseFilters;
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
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
        this.applyFilters.emit(this.filters);
    }
    render() {
        return (h("ir-filter-card", { key: 'fd3788e5c7fd0827377947d3d5a64a9630dfe36d' }, h("wa-radio-group", { key: '416d77edf999892a8757b63b12e707d81ff31492', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '6389949f5b63ec9de43fa41a049ccf269070b8f9', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: '9c333328f020dcea085b19cce8b09267a4a6755b', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), h("wa-select", { key: '315e058fd94c640c2098acc6da854bb6c961a90b', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: '9bcb476bc45ccbc9fb59d6acf4edaf734c96e409', value: "7" }, "For the past 7 days"), h("wa-option", { key: '3fc9c416bca0d0470b4ffe81efcfb8ea09c73b0b', value: "14" }, "For the past 14 days"), h("wa-option", { key: '6d1b04a736d004db849c02622bc0a941f74bdbae', value: "30" }, "For the past 30 days"), h("wa-option", { key: 'de443e1332b4dc177a9a537f83176a1198f49069', value: "60" }, "For the past 60 days"), h("wa-option", { key: '3f77acb419d802e4b6b98b03c592dec6e39fd555', value: "90" }, "For the past 90 days"), h("wa-option", { key: '8a9d1e78569028d45e9087fd6926898feb366376', value: "365" }, "For the past 365 days")), h("div", { key: '53fa6e1737b9497cedf9f901f4bcf8eeff2d3eda', class: "or-divider" }, h("span", { key: 'ba41d107de5fd662c59bd896fbd9414354f8a078', class: "or-divider__line" }), h("span", { key: 'de77b1f0bcecad48ef728661b739f7991ee81c0c', class: "or-divider__text" }, "Or"), h("span", { key: '53c154237975d75eeb4869a545adfd0133e38b2a', class: "or-divider__line" })), h("ir-date-range-filter", { key: 'c75131ee647dc6afdcd6480affd3b007b8d6c3f3', label: "Date range", fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: 'cddf6f973b92c2239df2c09d4c7b795dcca42097', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: '0af9237536648a06b7cd5bf6195ea9cb0ff0cfa5', slot: "footer" }, h("ir-custom-button", { key: 'dd7ecaf21bf317fa17b36c5039fcc963b7792b61', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: 'bc44b53390cc81d2c369b94787d58b441126e813', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
    }
    static get is() { return "ir-sales-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-filters.css"]
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
                    "original": "CountrySalesFilter",
                    "resolved": "Omit<CountrySalesParams, \"AC_ID\" | \"is_export_to_excel\"> & { include_previous_year: boolean; }",
                    "references": {
                        "CountrySalesFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::CountrySalesFilter",
                            "referenceLocation": "CountrySalesFilter"
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
                    "original": "CountrySalesFilter",
                    "resolved": "Omit<CountrySalesParams, \"AC_ID\" | \"is_export_to_excel\"> & { include_previous_year: boolean; }",
                    "references": {
                        "CountrySalesFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::CountrySalesFilter",
                            "referenceLocation": "CountrySalesFilter"
                        }
                    }
                }
            }];
    }
}
