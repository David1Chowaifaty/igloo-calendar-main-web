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
        return (h("ir-filter-card", { key: 'f4d84b30dfcb15884fc44a5a3743e4c3facc50e9' }, h("wa-radio-group", { key: 'f7cda70086a57cf4120f5fdf03ad3874e2989951', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: 'd677a3730b2bf4e3e87ebb624d7b4039e5f233d1', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: 'f6e1635a887ff24c3ce3eff943cb75f261b2889f', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), h("wa-select", { key: '995da3040a3204b83f6dab99e6b8cc7c47cf80fd', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: '8b535fdbf4c239293ef1d651d2f461245e3af896', value: "7" }, "For the past 7 days"), h("wa-option", { key: '7f22c658acb0151a9007e2f3d3e96b81519f243a', value: "14" }, "For the past 14 days"), h("wa-option", { key: 'c38594014a7ec2cd4cbfb6df6e12e513e00ef562', value: "30" }, "For the past 30 days"), h("wa-option", { key: 'ea2efebc74e1301940524925014d4f82a9cde73f', value: "60" }, "For the past 60 days"), h("wa-option", { key: '1b08f357f591d39dd9dd6098a36f0c3dcaf8f5f1', value: "90" }, "For the past 90 days"), h("wa-option", { key: '14e586582aaa8c6d6f41ff5358929a6bc2280bd4', value: "365" }, "For the past 365 days")), h("div", { key: 'e9bc49c0ab345ffdc2fc62ca7e95459e8bf30682', class: "or-divider" }, h("span", { key: 'cb0f909994eea3fc7107345ef8cb630404210097', class: "or-divider__line" }), h("span", { key: '4844300350d43284c7e4d97824a6fff45772576d', class: "or-divider__text" }, "Or"), h("span", { key: '564bcde4b2600daca825553a86958792ee43b3d0', class: "or-divider__line" })), h("ir-date-range-filter", { key: '46206ef990c24a7ae428f770ca2d3b43be3d9bc9', label: "Date range", fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '90f5fdc3c19d9d4b14abe54e37ba5074d590077e', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: 'e4f9902e8f78055fd57811d33e7548589d2bdfdd', slot: "footer" }, h("ir-custom-button", { key: '1c37895f8d6e1be143e094aee5f7526d78529e80', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: 'e0fb21c5592853addfc0dc55bdd0c04fb6eb5c77', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
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
