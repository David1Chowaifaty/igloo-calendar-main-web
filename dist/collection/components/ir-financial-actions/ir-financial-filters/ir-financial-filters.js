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
        return (h("div", { key: '08ad76118988d8ed6a7cae120f56783cb8307e0e', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '2877315088517246547e852da206bb86b0a7efd7', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '08fa8374f71a3a917bffb45f04f3f1130128170a', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '4849365f0318adb027a8f21e2f18cb1679c2ab9b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '1d0d964351abd5145009aac26da4c0b16edd6533', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'eefd721da73969adbdeeda5ac5c6de44e7aaf1be', class: "m-0 p-0 flex-grow-1" }, t('Lcz_Filters', { fallback: 'Filters' }))), h("ir-button", { key: '3414c51b630603fa9328977831732f593ad0d048', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'c91c357553b3d974a165fc02f38e6779a279897f', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '450b83c102871a8a1769d5b8b727e08e4bc9444c', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'a8d9885068cd867c6385f48877b3cb2b8cfadcf0', class: "pt-1 filter-group" }, h("label", { key: '88881827bf3fece79e037e55aa0c3f08a6466895', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_SelectADate', { fallback: 'Select a date' })), h("div", { key: '96a69220462a2cfa18ebea5e4d9f2f06f125575b', class: "w-100 d-flex" }, h("style", { key: '00b177476966c240133900610eecff7e500b5c22' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '3618814b66e70cffb2480374e549527ac12bb7fd', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'f8512ee91b14aa9914c5ca8f6a43fd532589b452', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), h("fieldset", { key: '872a2c92afacca474e5cf619e6ade251bdda3853', class: " filter-group" }, h("label", { key: '82e63f96d96956eb5c80f363b0e17159fcabe872', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_Users', { fallback: 'Users' })), h("ir-select", { key: 'b400c2a1ce0aa66fc236718020bc78c3e2b073b6', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: 'fa9a68a238c229eaf225b010386798dcb5b2ac16', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '72a7ddb7efbf015ef97ee5ec670afa29d57a024b', btn_type: "button", "data-testid": "reset", text: t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd4be2091b759f4319d07b8cdc0e46d43ba392f09', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
