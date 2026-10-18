import { h } from "@stencil/core";
import moment from "moment";
import { t } from "../../../services/locale/t";
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
        return (h("div", { key: 'f9db50c6147927197c7ced919f99b5f9b4181a51', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'c7e727fced52ad9cceb2b039f68f96ca3e392948', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '75622459a1dec9cc51fe5f710ae122b9ad7428fa', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '3a703194327298a658625fc5d39f99bfef949302', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'f75c173978abc8e559611c4ac29898a9945bd016', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '43ece9556aeff07013f57ad4cc028f316d9916d9', class: "m-0 p-0 flex-grow-1" }, t('Lcz_Filters', { fallback: 'Filters' }))), h("ir-button", { key: '28c2e2447dd811728f7679f805a413d53482fb06', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '4096a8300feb47288175baa499b48a856b02be32', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '5505480989f82e8595bdb1b472e8f1a34d9c8455', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'db412c5b32c3634484f83ef2570795e4dfc3de70', class: "pt-1 filter-group" }, h("label", { key: '865b229436918fb2e0576c5b409fc3992f883a7a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_SelectADate', { fallback: 'Select a date' })), h("div", { key: '8a3c57c82ed79030e930b9ce7c1e6c859c7c9ae9', class: "w-100 d-flex" }, h("style", { key: '6899391fc973ae5efd614c76d94f991d877b03ce' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'bce5096eec19d64cb8c5e7c276ae6e8610539db8', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'ecd2e5bd3d836130f4c1707ab1c71f1f6b923c60', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), h("fieldset", { key: 'c17a586de22b98cd288616f2c1db773ef02d5ac1', class: " filter-group" }, h("label", { key: '57ce6a21dac84cb65162c2806b7ec4ed0094fe1f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_Users', { fallback: 'Users' })), h("ir-select", { key: '3eb98b43612d2d412327e71bddeae8c193ffa2d7', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '03c7d535c0bec7457f73adf20123816a3163f2cd', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '59aeabc1187671c6f2767f17fe161c5764d3d285', btn_type: "button", "data-testid": "reset", text: t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '11784abbf19356c54541b93afffab0a3a01ba5dc', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
                "reflect": false,
                "attribute": "is-loading"
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
                            "id": "src/components/ir-financial-actions/types.ts::DailyFinancialActionsFilter",
                            "referenceLocation": "DailyFinancialActionsFilter"
                        }
                    }
                }
            }];
    }
}
