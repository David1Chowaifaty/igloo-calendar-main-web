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
        return (h("ir-filter-card", { key: 'b7fcb8ed660d4dbda744f777384cc627ba96cd8f' }, h("wa-radio-group", { key: '41c57195571697527e9fd87393ea53ae5793a00c', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '4f674fd9f942843562b80c943e7289d0eed47907', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: '40b21752d026fd0f82319420b194c8e96d68cb0c', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), h("wa-select", { key: 'aa23b8b3d7a806ebf82d13bbc76491157f93b59d', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: 'b15a7c0a2eff49acb5afebb6381a8de26f2186b9', value: "7" }, "For the past 7 days"), h("wa-option", { key: '21228cee6f9471bdb81f83e4969d03bd5de0678f', value: "14" }, "For the past 14 days"), h("wa-option", { key: '4356d3c8b4492d6e239450e742c64729e5191621', value: "30" }, "For the past 30 days"), h("wa-option", { key: 'e7f19c45227dfb4acdf83c10c0119a625db66519', value: "60" }, "For the past 60 days"), h("wa-option", { key: 'b6c009d022ced1ca808d5cf9f88020a5eab0db4e', value: "90" }, "For the past 90 days"), h("wa-option", { key: 'c2141757683dabd9ba87aa13bf7a11a4a520d201', value: "365" }, "For the past 365 days")), h("div", { key: '29700073deb9bd2c16fcd7c7ea9a274a66e48137', class: "or-divider" }, h("span", { key: 'ef14580a39dafe26161e8675394e527aeecdfbb7', class: "or-divider__line" }), h("span", { key: '6ed21bfa1e7fd7ea8f87a8c2b7a1b2dff2c7e3fd', class: "or-divider__text" }, "Or"), h("span", { key: '2c300286e384f6d7153fa84d7c8ab6aee0fd6d5f', class: "or-divider__line" })), h("ir-date-range-filter", { key: '3f73866bb975e16ab3d395feb07ee85f393ef25b', label: "Date range", fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: 'a9b09c588d6c253ac423ea8643248122b466206f', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: 'd26f5748f4ab284fa9bb101b86b22fb42541678e', slot: "footer" }, h("ir-custom-button", { key: 'ee7d300ec1c58b9d4cceae34dfda985390a755f9', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: 'aed4cd82c04004a4ebde8e73a4550c6ade7620e0', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
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
                    "resolved": "Omit<CountrySalesParams, \"is_export_to_excel\" | \"AC_ID\"> & { include_previous_year: boolean; }",
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
                    "resolved": "Omit<CountrySalesParams, \"is_export_to_excel\" | \"AC_ID\"> & { include_previous_year: boolean; }",
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
