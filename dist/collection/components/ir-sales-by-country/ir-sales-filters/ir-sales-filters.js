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
        return (h("ir-filter-card", { key: 'e20edbb70f05a9163749d41b9467fe05e21aafbc' }, h("wa-radio-group", { key: '0be0a8d63388c18067aa152252b3ab2056151e1e', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '44392f6e7395dddc5c7edb179124c1af7a8422e7', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: '6c422725cbc308f21073c263b0b60104bae53e9d', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), h("wa-select", { key: 'e4f95a2c637192aa05a7c06adc8c12c1680dc14c', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: '71542a22436053e3c8ac5b2888ef6653bda2b748', value: "7" }, "For the past 7 days"), h("wa-option", { key: '0d2dc684b95fb657543a367c7f007e5b9bfaf2f5', value: "14" }, "For the past 14 days"), h("wa-option", { key: '5101e52d10ae465059e2921050b579efa184c9a7', value: "30" }, "For the past 30 days"), h("wa-option", { key: '861f7ec136b0978eb3382c8ace0347fda3cd1f83', value: "60" }, "For the past 60 days"), h("wa-option", { key: '520631936652c0432b3dd77176a5f74eba4368ae', value: "90" }, "For the past 90 days"), h("wa-option", { key: '04cd160c8add0044629d931d92999d7594e8fd33', value: "365" }, "For the past 365 days")), h("div", { key: '46cc8b83d5d36ea3d614d888afff85a0504df6bb', class: "or-divider" }, h("span", { key: '1b1b58f180e4f800e5009594529aecc6d6b814eb', class: "or-divider__line" }), h("span", { key: 'b3ae7e608843c1097f2e566d256064f9b302783e', class: "or-divider__text" }, "Or"), h("span", { key: '74aa87770daa80f89e21c2f286b3653805fe3a6d', class: "or-divider__line" })), h("ir-date-range-filter", { key: '55e3d3de031fd7e6e9e4e53f55075f0857ea09b6', label: "Date range", fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: 'add9052a0d68157cfa43ae6c08de90896237e111', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: '213ed8d40bc6aac4aae613b5bd4ea911e9a14e50', slot: "footer" }, h("ir-custom-button", { key: '6ca178c4ac70ee4fb8b3dcb0b3a31bab4366ab13', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: '738ab7c017008492bfd8ce539edf963bbff50267', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
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
