import { h } from "@stencil/core";
import moment from "moment";
import locales from "../../../stores/locales.store";
export class IrMonthlyBookingsReportFilter {
    isLoading;
    baseFilters;
    filters;
    collapsed = false;
    window;
    applyFilters;
    dates = [];
    componentWillLoad() {
        this.dates = this.generateMonths();
        this.filters = this.baseFilters;
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
        this.applyFilters.emit(this.filters);
    }
    generateMonths() {
        const firstOfThisMonth = moment().startOf('month');
        const startDate = moment().subtract(1, 'year').startOf('month');
        const dates = [];
        const format = 'YYYY-MM-DD';
        let cursor = startDate.clone();
        while (cursor.format(format) !== firstOfThisMonth.format(format)) {
            dates.push({
                description: cursor.format('MMMM YYYY'),
                firstOfMonth: cursor.format('YYYY-MM-DD'),
                lastOfMonth: cursor.clone().endOf('month').format('YYYY-MM-DD'),
            });
            cursor.add(1, 'month');
        }
        dates.push({
            description: firstOfThisMonth.format('MMMM YYYY'),
            firstOfMonth: firstOfThisMonth.format('YYYY-MM-DD'),
            lastOfMonth: firstOfThisMonth.clone().endOf('month').format('YYYY-MM-DD'),
        });
        return dates.reverse();
    }
    render() {
        return (h("div", { key: 'dc090f91124b7fd7ab882c4dbe8d09f9205dd3eb', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'cc7b46b6e4fc98fbf919934d8c36c1144cd5e487', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '7cac7fa3155224ac86ce534c7367051a3d5f80b9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'ea34d9229da1a0ac5be50424ab655b526add986b', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'accd3b54a5702789d5f027e8f24e5de632e2392f', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '9e68f251822b977ef7721f75deebb7aab065f679', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters || 'Filters'))), h("div", { key: 'dc50d3dd26d97165cc26d4561dc158d727552cb3', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: '51932e13976ce62a3189de52fcfd86df62eae6d4', class: "pt-1 filter-group" }, h("label", { key: '062becffc3fc96854c0b2f38740b5be342af85cb', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '128c0578879cf0a7f8dcb3fef67b4b0db651c6a7', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: 'd2c410ab326cde6be93a03c700d1ebf4491ee3e7', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '16630e0296dd4f6dae64326572ffd944fb6d45bf', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'f0e28f003d6332c68fb24eebf1141f2763a67556', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'f123c1b0fcd2a16f03c53bb55a387c6c7cdf21fc', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8b5b2781a2651ac8b49b2df1b5effbd488b00734', btn_type: "button", "data-testid": "reset", text: locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '2cc1f93f93efd5203d0a5b8ed0b30af927bcd6d2', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
    static get is() { return "ir-monthly-bookings-report-filter"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-filter.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-filter.css"]
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
            },
            "baseFilters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DailyReportFilter",
                    "resolved": "{ date: ReportDate; include_previous_year: boolean; }",
                    "references": {
                        "DailyReportFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReportFilter"
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
            "collapsed": {},
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
                    "original": "DailyReportFilter",
                    "resolved": "{ date: ReportDate; include_previous_year: boolean; }",
                    "references": {
                        "DailyReportFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReportFilter"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-monthly-bookings-report-filter.js.map
