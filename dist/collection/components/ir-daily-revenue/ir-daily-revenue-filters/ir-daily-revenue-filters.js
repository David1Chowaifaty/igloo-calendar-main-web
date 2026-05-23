import { h } from "@stencil/core";
import moment from "moment";
import locales from "../../../stores/locales.store";
export class IrDailyRevenueFilters {
    payments;
    isLoading;
    collapsed = false;
    users = new Set();
    filters;
    baseFilters = {
        date: moment().format('YYYY-MM-DD'),
        from_date: moment().format('YYYY-MM-DD'),
        to_date: moment().format('YYYY-MM-DD'),
        users: null,
    };
    fetchNewReports;
    componentWillLoad() {
        this.filters = { ...this.baseFilters };
        this.updateGuests();
    }
    handlePaymentChange() {
        this.updateGuests();
    }
    updateGuests() {
        const set = new Set();
        this.payments.forEach(payment => {
            payment.forEach(p => {
                set.add(p.user);
            });
        });
        this.users = new Set(set);
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
    getLast30Days() {
        return Array.from({ length: 30 }, (_, i) => {
            const date = moment().subtract(i, 'days');
            const label = i === 0 ? 'Today' : date.format('MMM DD, YYYY');
            return { text: label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (h("div", { key: '00f0faf7cc4dd461d457f849c248511622a06e5d', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'e9bb5494336210d6674e8e7f31fb3717827e56e7', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '4e5d57812aee96a1ea51c018d78d55e03b4e3b98', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'a0c9836db41e9bc9574a12760216b702dffe608c', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '1526e32aa6015d68ee64b5be8a229c38d6a585af', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3e677006e685a3bb1f11bdf57ec6baf0ca6c2d07', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '438016c140e7ffd64707342c43b1f87eace8223e', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '730fbe449da69dc569bdb2418e5af136c219598b', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '25a72f7159c96c8d6beca3343923cdb574074680', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '9458f15ed39189248017833ff5fb34fcfcd51706', class: "pt-1 filter-group" }, h("label", { key: '0c78a522bf59e554a4930c8e2aa8892f4f0c98b6', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '5e89b3ada3887d7cda771c461c7a861e051a055c', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'a8140565b5a5f458b0097b422bc6740913da44a8', selectedValue: this.filters?.date?.toString(), onSelectChange: e => {
                const value = e.detail;
                this.updateFilter({
                    date: value,
                    to_date: value,
                    from_date: value,
                });
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: this.getLast30Days() }), h("p", { key: '25fff64698eb87053bf63c0b9c2d1d94b8444b18', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'ddeca5adf3db9af3af8bcdec3f2f9080cce3762c', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                let params = {
                    from_date: fromDate.format('YYYY-MM-DD'),
                    to_date: toDate.format('YYYY-MM-DD'),
                };
                if (wasFocused) {
                    params = { ...params, date: null };
                }
                this.updateFilter(params);
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: moment(this.filters?.from_date, 'YYYY-MM-DD'), toDate: moment(this.filters?.to_date, 'YYYY-MM-DD'), maxDate: moment().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'd790de8ab08691fde7cacff91a81a448a96b80d4', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '9aa53bb391001f511f3ffed6f4a5dbbb96052d3b', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'e000547335e6d68ab6e6805b6eb426d7fdfc488a', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get is() { return "ir-daily-revenue-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-daily-revenue-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-daily-revenue-filters.css"]
        };
    }
    static get properties() {
        return {
            "payments": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "GroupedFolioPayment",
                    "resolved": "Map<string, FolioPayment[]>",
                    "references": {
                        "GroupedFolioPayment": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::GroupedFolioPayment"
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
            },
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
            "users": {},
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
                    "original": "DailyPaymentFilter",
                    "resolved": "{ from_date?: string; to_date?: string; date?: string; users: string; }",
                    "references": {
                        "DailyPaymentFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::DailyPaymentFilter"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "payments",
                "methodName": "handlePaymentChange"
            }];
    }
}
//# sourceMappingURL=ir-daily-revenue-filters.js.map
