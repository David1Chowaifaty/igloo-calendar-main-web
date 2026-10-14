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
        return (h("div", { key: 'e9f7b98cc860df102083c98c075be9e690d99068', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'b369a4c993679c03c0c2b8b40e364bd52461f4a6', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '8993dca6f53fef093576d82b2f3f265dd26b866e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'ce3e81a5a9410c06577b19fdf989a5e4a33ecbdc', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '053ed9e375aaedd7472f333fe3b6d94855b43cfd', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '5f00fdd482c41e9b9e270dfe5713b20eb8da3db7', class: "m-0 p-0 flex-grow-1" }, t('Lcz_Filters', { fallback: 'Filters' }))), h("ir-button", { key: 'ef4975e8d62db0e15d3af9cf9ee5efa82bcdabee', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '6ab6fb178649009648b5c710bb9325bb18ab8fba', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: 'd8d0c9fc37c66ce29fa1c1b5464ab5ee08053c59', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '40e3a5fbceb5f6e8654012cd581e8ba0dbf289c1', class: "pt-1 filter-group" }, h("label", { key: '4107c710bdb85add193a2df4288a3c535e2ee58b', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_SelectADate', { fallback: 'Select a date' })), h("div", { key: '43314c7eb4d0e928ffa7b9f6642f101f2a635686', class: "w-100 d-flex" }, h("style", { key: '8a8b6edadc46a846b900ea37ef478b7189756abf' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '832e88d16c6fc49e698ab24d24588096c494279e', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '4ec3f524264781a169dd296b268db38d90621f1d', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), h("fieldset", { key: '45ac7c739067fa50957e1628e3cab7044383cae0', class: " filter-group" }, h("label", { key: '1c0b6d9ad63694e673f1803c29f68259c452aced', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_Users', { fallback: 'Users' })), h("ir-select", { key: '61beaa6d02d706ddbce5eb741854ce233b31658b', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '508bc66e790967734e9bc409247a93f8734af49a', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8234de58e272d22c2e94194b4c53edc044d5a108', btn_type: "button", "data-testid": "reset", text: t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '3920d3f096308c28e7530af1b8c9d451174c634f', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
