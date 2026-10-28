import { h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
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
        return (h("ir-filter-card", { key: '886dd1c93d3c145f5613634989634e19219b7082' }, h("wa-radio-group", { key: '450662424b8485f601c05bd72e6affd39c44b9fa', label: t('Lcz_Rooms', { fallback: 'Rooms' }), orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '74c40f56a656920e1dcc3267437c98e75e4a382e', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, t('Lcz_Booked', { fallback: 'Booked' })), h("wa-radio", { key: 'f9d651e2fb6d15f6de3ace1c18ffa5dae7663c87', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, t('Lcz_Stayed', { fallback: 'Stayed' }))), h("wa-select", { key: '68d68f085bd04ab2eb7f141777286874dd9fe21c', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment().format('YYYY-MM-DD'),
                    FROM_DATE: moment().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: '9e8889cc3e5cfab4b40d4dd6ba618f04f25c863a', value: "7" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(7)] })), h("wa-option", { key: 'bc1ac4e39ad4460000040b96a21cdcbff32155b7', value: "14" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(14)] })), h("wa-option", { key: '8901db86e858d52c2a9209c9bd31cf3172946436', value: "30" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(30)] })), h("wa-option", { key: '3f353464cb7c8f46125e6c38b762abe5c446d571', value: "60" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(60)] })), h("wa-option", { key: '21e1087218d7b9b681d4ccc4fd8711abcef208cc', value: "90" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(90)] })), h("wa-option", { key: '53e7e85faa2b25d16e82572bf5a594adfb7ce37e', value: "365" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(365)] }))), h("div", { key: 'c6c959174123953576a7e0744dadf97e003f5ecf', class: "or-divider" }, h("span", { key: 'f99f091b1548e369b50b75d6f930734ff247d062', class: "or-divider__line" }), h("span", { key: 'c9acc299d2a4baf3312ede1103a8a720f56c7dd3', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: '449e6dfd10508d5150245fb5a72153c2ebadbd39', class: "or-divider__line" })), h("ir-date-range-filter", { key: '96c7379d3527e95039ba0efe578476c5ca0d42cc', label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '12eeb800865221a4c371c9d3fe488a2afb704571', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), h("div", { key: 'e1cf0810126b48f3d8f679899ed3007d72bb09c9', slot: "footer" }, h("ir-custom-button", { key: '89291b2d415f64a22cc0d36b5cc924373629ea44', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: 'ac2c204d8f4269c86a1a74e1a4398a169a647d20', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
