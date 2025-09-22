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
        return (h("div", { key: 'd233d46d9dacd1981629090566d020ece0bd2c82', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '472a34c8d8d25771ff483bc4f83a5a2b612b0c5e', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'e31098df29223fe9fa920079045cac05b8a180e3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '1086d0a0500a06ef91ae7dfd9a1aeb1fc62e7484', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '94d9617bb899d168a1587e89201b9a5ba7f9ddb1', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'aad60b1f754e9e990a344a3fcf3737ff0b0be5aa', class: "m-0 p-0 flex-grow-1" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters)), h("ir-button", { key: '1a162de357370bc873504e6073da79e045764e71', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'ed685951457f028ce3a33e7fa32f2b2775f638e9', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '31742b34851cf6d994a0e1602d81c9720c9e28ab', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '830066b534a77ec286d563d6ab3deee15fbdaf93', class: "pt-1 filter-group" }, h("label", { key: '4d96c24311462f955bc5e6998806facb7451ed41', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '50190fecf0f9ba8a446856918f3dbf7711789314', class: "w-100 d-flex" }, h("style", { key: '4c95eef48d1dd1a9b104e8b58545d8f13a843b0d' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'd1977b3c101841bb4cc1e6e182934aec9ea9e4e8', "data-testid": "pickup_date", date: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '35cc351526bbc2522af1ab74add0baa667251e85', slot: "trigger", type: "text", value: (_c = this === null || this === void 0 ? void 0 : this.filters) === null || _c === void 0 ? void 0 : _c.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("fieldset", { key: '19f578f1312f69f8c8fb1352d1f1a36afb71688f', class: " filter-group" }, h("label", { key: '693ba5487290bfe6401d3676a8abb973c5542af1', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '8f56f3a80be4b37c4f6520fdb10a397b11278e20', selectedValue: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'c31f2ee1c034fbb689053f305c1ae5a6cfb6770d', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '727c7398e0a935ad3d9a953f7eaf0f5db9c3c344', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'fe149c94d876d8b75d45de2d27752907002353e0', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
