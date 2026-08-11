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
        return (h("ir-filter-card", { key: 'dc55e9cafdcf6935bd75e93d5530808bf537c66a' }, h("wa-radio-group", { key: 'ba4c3b7598f5968e9859772c7750629a4bad90ef', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: 'e68ce74371260c4242127e43d918f4a876c2f846', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), h("wa-radio", { key: '3acc3a736bed761f767196bb3a8dc08418a532b2', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), h("wa-select", { key: 'dc9637242f1866c66e80d7a23295462a49a89f85', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: 'fc749cc22a0e7e3d0a2c53b15da54b322dfb8c4b', value: "7" }, "For the past 7 days"), h("wa-option", { key: '7a1ca03e41e7f0791c2b1eedc52a1108ce66f952', value: "14" }, "For the past 14 days"), h("wa-option", { key: '4d77eaca87620d3a5905d4b1959fdc55a03ff25d', value: "30" }, "For the past 30 days"), h("wa-option", { key: '10d313a147de76d69be1656668df7067d357c9b6', value: "60" }, "For the past 60 days"), h("wa-option", { key: '60fa92719737c46e7fd5ea3c9cbe22e9f3309b89', value: "90" }, "For the past 90 days"), h("wa-option", { key: 'd065025f10d035efd9141c5ddb471c64d6aa2324', value: "365" }, "For the past 365 days")), h("div", { key: '31427df706842a7e43cbb960e74ef03615c6c8f2', class: "or-divider" }, h("span", { key: 'ef288fdff3da146c845254fa49ab69ab854ad0c8', class: "or-divider__line" }), h("span", { key: '25d0c025e1aebf4330f8f585d1936b02cbe5b9b1', class: "or-divider__text" }, "Or"), h("span", { key: 'd7130355a44dbe8cb5146dafbee2794e006a982f', class: "or-divider__line" })), h("ir-date-range-filter", { key: '4b6118b82e356cb9bddd16448e94f375b95668e4', label: "Date range", fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '3f9e00aad77b73be2b93d3e292ea02d6e2138070', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), h("div", { key: '6798db884e02c9b52c5d8ceef7ef71653936a419', slot: "footer" }, h("ir-custom-button", { key: '9d801561ff07bb6cc4922ea449f3383bbb001e84', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: 'dee5b81d2cfa71b6f2b968019458cb33102a8980', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
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
