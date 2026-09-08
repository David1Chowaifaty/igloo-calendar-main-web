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
        return (h("div", { key: '7868bf5f858aec4531a2773e2aee8e61d052368c', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '9392e55a125b2534481f915a438dcd367841daac', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'f613a16d57eeda4e39c0bb333e4ef45da024c31e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '3da2e2e9725297aa6038c8b6746f4e3e932a02bd', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '7aca92d4335e43b27e65a25a89018ea7acef5a4a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '25b5c9e4df9c9a7fd26a41505ac1eedbb99bdf99', class: "m-0 p-0 flex-grow-1" }, t('Lcz_Filters'))), h("ir-button", { key: '7b4d819838b76f0a855dee2d4cdd2b3eb152d7bc', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '5fa695d6d5cd79465957769b3a8e060dd8cdbd06', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '2f5885b2004aa68d53aeef35ec761547ec6a4b53', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '43762a1561fd20c2850d3f3b2f1bcf11aba7f8a7', class: "pt-1 filter-group" }, h("label", { key: '470ea3bc8cba677f0e65623006e680ddcfff28ad', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '11a35d9f7c003d90d50752c61df774a14083f42e', class: "w-100 d-flex" }, h("style", { key: 'de97471700b7a0838bc2b0061f01c42d66b8171e' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'ffd989de794e3ea8030b171e1b91fed19841f563', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'e25bf84c51e5e53b4ec3efb3e655bd29178d090f', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), h("fieldset", { key: 'cec575610d54a12c56e226ea4536d67e19105410', class: " filter-group" }, h("label", { key: '94dfac04d04e38c4a924225eff63bb8c41c8806f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Users"), h("ir-select", { key: '45c0ec06fe71303b4426c793e204cccf6e8cb44f', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: "All", onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '374e30deeeabfa837376ae6d8ff9117a0b9754ac', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '6055b708916a345ecbb5ec1c32b09c28a8dbe08d', btn_type: "button", "data-testid": "reset", text: t('Lcz_Reset'), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '208823b57d060fd13c97c037c9177919db0f6cb0', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t('Lcz_Apply'), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
