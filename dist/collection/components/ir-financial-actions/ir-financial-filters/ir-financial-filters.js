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
        return (h("div", { key: '9631b9667f3b55e2a50d4b1fb48d1ea21b5083d6', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'a128e8d1a22c0944ac3b651724043170d73ea46a', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '1c3d7cd2ead73bd3f38f50511034582565ab9127', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '1032c0d178be481f165f3ba686029b8868c8b704', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '79867b9024e5d8b31483daa58dc7767dc272ab8d', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'c7c5e0539077c33aaa178a6c02b76bf973883e99', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters)), h("ir-button", { key: '48f87a383645103048a0598fde75ad0c7790710b', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'c69e72cfb45e83e867280e9595fc7f6eb599a40f', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '6918a564cd4bd16f6062e3c890ca762ab3bd6469', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'fe82063176536926fe741b5a72eb19939014453a', class: "pt-1 filter-group" }, h("label", { key: '8834e149fdaac30ff1f646105a9148a31b8515a9', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '38a8ca26dbb628dd025829678e7c50a6fdddfe46', class: "w-100 d-flex" }, h("style", { key: '7762ff6adae19151f5e61f4a866a4b879314c366' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '135f12ef6cfdbc68a4d62693547e14848be24842', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '3a0f5e4063c2a477f618637262c731aa3e53ad1b', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '8e6eac66a52831f8e85c37f85946c67e706210ac', class: " filter-group" }, h("label", { key: 'afa792e55b8fb3f989010948f05ce69b2e289e36', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '66b3477555346d50dfa26c2a7529deb2b93ac00e', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'c7e0daecf6e7d019dc7841a465ead503f88b5e65', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8a8dd8b7c51dc120671d5e76e7a8c6de9cdd2cb5', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd35bb5b9c2ee0ad5c615789871f7af13dce3c807', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
