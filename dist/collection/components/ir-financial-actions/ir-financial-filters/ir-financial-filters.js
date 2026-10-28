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
        return (h("div", { key: '682dfb34de8ac5675117f286629e69ccb2f9a81f', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'd3cab9ffe016286de480e36ef32a43da4ec8303e', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'c8a9b04668b8543d7508521fd8440315b87c02f8', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '405b44b0d3f26498154176d3cd34a9a1113554c4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'ec22761204fc6e3dc393cb9723c58fd2a8ee68b8', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '04a2339d52f488d0960924b2ab09a5a48c12da8f', class: "m-0 p-0 flex-grow-1" }, t('Lcz_Filters', { fallback: 'Filters' }))), h("ir-button", { key: 'c7fa1d006783ea3c83322cf04f515b6ebd5ba540', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#financialFilterCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "financialFilterCollapse", class: "ir-me-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '4f5c8c92b06fc92f32b201642771bb0bbdd7b72e', class: "m-0 p-0 collapse filters-section", id: "financialFilterCollapse" }, h("div", { key: '900d424330aeb4231744d31370e6d2b0a6c24cf7', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '799ed2e0b0ee2c8f56b98ff08d0c679e137e418e', class: "pt-1 filter-group" }, h("label", { key: '60dcc27dcda6484b6133f89c46b42a3a3b5db7e8', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_SelectADate', { fallback: 'Select a date' })), h("div", { key: '9f0811d00111a47738cc2688055e5bdde5c1e4ec', class: "w-100 d-flex" }, h("style", { key: '1e42aacd6c7d8cb3cfd29bcfcec1cbf0b12c852e' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '42793f9a1817671f07655da91a51eaaff9066e13', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '1e1a0a3075b45899818c74c319cb7e2ea9bd7758', slot: "trigger", type: "text", value: this?.filters?.date, class: `financial-filters__date-picker-input form-control w-100 input-sm  ir-text-start`, style: { width: '100%' } })))), h("fieldset", { key: '605d3bbbf6e34d14978006b636e523d51620266d', class: " filter-group" }, h("label", { key: 'c8edea0a47322ccf005581816796f0f911cf084e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, t('Lcz_Users', { fallback: 'Users' })), h("ir-select", { key: '4cc6b621d578e8f0be1d9d10a44371bcad5a601f', selectedValue: this.filters?.sourceCode, selectId: "rooms", firstOption: t('Lcz_All', { fallback: 'All' }), onSelectChange: e => this.updateFilter({
                sourceCode: e.detail,
            }), data: Array.from([]).map(u => ({
                text: u,
                value: u,
            })) })), h("div", { key: '87a90f60975b8bfcb6fa9bc4521b5ee3153cae2c', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '81f9da6eb2ea2a40d0d302a127f1a56983e42ef0', btn_type: "button", "data-testid": "reset", text: t('Lcz_Reset', { fallback: 'Reset' }), size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'bcc2dfd933318b3b5969c18955438fcc12f6e34f', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: t('Lcz_Apply', { fallback: 'Apply' }), size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
