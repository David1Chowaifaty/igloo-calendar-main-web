import { h } from "@stencil/core";
import moment from "moment";
import locales from "../../../stores/locales.store";
export class IrFinancialFilters {
    isLoading;
    collapsed = false;
    filters;
    baseFilters = {
        date: moment().format('YYYY-MM-DD'),
        sourceCode: '001',
    };
    fetchNewReports;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchNewReports.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = { ...this.baseFilters };
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    render() {
        return (h("div", { key: '34866599fa947a6613a4cae54fbaf6d183d2c63c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'c83508fb5f6270cbb5d89fa119444d939c36ca3a', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'e65075f797c2ce9e9458bb86639634e494ba3e2c', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '6536ba3125e54c964c019374f3a5000845236929', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '6fd3887fe0244c172d363ef19199869834049998', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'f28eaf35b95f388aced527edcc5739d151cb0c9c', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: 'a3c7fc1af617092fc496d2f5ca97f4c25c03b809', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'da76b70ad10465b1216f909ec5472de04960dc9c', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '09456af48f2a925eeac6047cb71cf7d81c9bcdf5', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '66d2ef2f53d548dff5f7eefcdf973b355f2d22f2', class: "pt-1 filter-group" }, h("label", { key: 'e3e032eb593f86f176d816257bc27ff78ac85f41', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'd7a0278e1322de156ea214e2f07ea1a07bc9a973', class: "w-100 d-flex" }, h("style", { key: '8b23c1c3706eaa45b350ac7b262a397641ce3245' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '42a496597440f7293de35017b57f6d6c0858f7e0', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '8284bae9e57a9febe50cf8e5db10926911731dc6', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '0dee8b39895dd135826565c5712411484e94545a', class: " filter-group" }, h("label", { key: 'a2c84d806b2b55645796b113d6f62fbc0c29f432', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '765f5f4e11ae6589469b523fff8e6e2e5726af23', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '33da91f9420a5142ca4f7f6def1d18efcd453328', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'f53583092f65b4cb40c3c260587b078e6c3dcaee', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'b2165519cd241460a5ff10a6009718cc19534663', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get is() { return "ir-financial-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-financial-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-financial-filters.css"]
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
                "attribute": "is-loading",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "collapsed": {},
            "filters": {}
        };
    }
    static get events() {
        return [{
                "method": "fetchNewReports",
                "name": "fetchNewReports",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "DailyFinancialActionsFilter",
                    "resolved": "{ date: string; sourceCode: string; }",
                    "references": {
                        "DailyFinancialActionsFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-financial-actions/types.ts::DailyFinancialActionsFilter"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-financial-filters.js.map
