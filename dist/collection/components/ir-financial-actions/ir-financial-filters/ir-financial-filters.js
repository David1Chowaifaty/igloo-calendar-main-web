import { h } from "@stencil/core";
import moment from "moment";
import locales from "../../../stores/locales.store";
export class IrFinancialFilters {
    constructor() {
        this.collapsed = false;
        this.baseFilters = {
            date: moment().format('YYYY-MM-DD'),
            sourceCode: '001',
        };
    }
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.fetchNewReports.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = Object.assign({}, this.baseFilters);
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b, _c, _d;
        return (h("div", { key: '99bd67d379d63019c2517d63574e69095aa3d8f1', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '5881d949f1db4ed0f2ddbb30f557c9279d3989cb', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '8d300a5efb208efb2eac21550a47ca0d0609a8cb', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '92b184089a0c47cf3af1ca771b008f6da84545dc', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '996409ed7a50cd6d075933a07465f045a59c0147', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '83aaf4e541704af0e9fb958c8c026653a15f034f', class: "m-0 p-0 flex-grow-1" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), h("ir-button", { key: '0a9582bb16d6a0a3e472c538db32c2bbfcb3d5b1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'ff1afa5025cd46d6bf063a36dff70d03755776d6', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '0d4b4127f1390cc91d88498efbc5af591d9097e1', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '4b93288c0ec9912322f90fa6478f1b01212b1fa1', class: "pt-1 filter-group" }, h("label", { key: '559cc9d266a2949c144c83a9da5a75d5c08bdee1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '23d8afea98cf123471435d55ce737941a0391d8a', class: "w-100 d-flex" }, h("style", { key: 'd2712907f2bf67b50704089824527c74ffe43ad7' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '233b4d9cc1e36dfc7a5dff69edb41b23a2f60ae7', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '00c56565cc196b4cf3bb9ae173ebc252aa57b7b8', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: 'ab7beef2cc4de3c57bcadb4a678484c74dbe489e', class: " filter-group" }, h("label", { key: 'ae5d2cc7f13545553348e02f058733e624ff3d2a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '3eb64a04739093f0c6aba8f1bd5fd5148cd5ce14', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'cc03e6c4f3fc60e7368ed0f557bf7e18352a3116', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '39bb631045d63932d2af57f43d56f60dc2cae629', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '93307b0d62bb0238a8a5f1a53a4d14a75e54051a', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
