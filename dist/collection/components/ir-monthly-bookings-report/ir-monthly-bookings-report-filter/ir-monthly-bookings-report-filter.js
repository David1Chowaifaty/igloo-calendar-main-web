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
        return (h("div", { key: 'b1ef42331da6c4868d90721fc03eb71f45130fba', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '8a0beb6014f11f080b737781eaf07cad685b7208', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'c1db839c692a95dc675670d4a1e00fc4f20afc76', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '5a7db6cbf4faf1401f9a6dc21248d795e36bd92f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'faa33aebae18ea7398dd2547577e269875cd3045', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '72b0d6e18f70b6d7789bbad84ce3d022114d2eb2', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters || 'Filters'))), h("div", { key: '4598cfd28718b91c8d100b2fd2c889116e19bdff', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: '32b73f70f8798a17d6ca1de71cc1be25de89e422', class: "pt-1 filter-group" }, h("label", { key: '821f42bd1fdd3213e8075a5c924f41356a6f586e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '7325068a8148f748ff0225cdd37da2498b560b89', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: 'a26d5ebbdaffce9f9dd1dde380b9ff53dc1dc975', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'c8e5d810dc9a9273120b325c463705df58c641b0', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '8c8c626e6eaa3a5fc5fcaeb1e4bc9cd7169cdb7e', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '76396dc59830375e466a28e4a7501d1ac367a285', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '85b2b7c310f435947ce1925c4bf0feca7109656b', btn_type: "button", "data-testid": "reset", text: locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd640737e30b1886230f80121952dacfd7801eac0', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
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
