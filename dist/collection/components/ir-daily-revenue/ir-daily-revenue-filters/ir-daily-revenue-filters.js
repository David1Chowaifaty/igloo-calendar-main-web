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
        from_date: moment().add(-1, 'days').format('YYYY-MM-DD'),
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
            const label = i === 0 ? 'Today' : i === 1 ? 'Yesterday' : i < 7 ? `${i} days ago` : date.format('MMM DD, YYYY');
            return { label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (h("div", { key: 'd691b03bf794e3f282576c23c06cc300aaef7908', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'e1303b9d50719d4535fee1477de9e3d4f1c9ae6e', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '9c139c688430ec21e12750aa0c6c7a1a909dec92', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '434819621ccd1ab9f1f53f32a8a1afff3d87e0b6', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '69f97d44876ee13a643225243de8561823bac5e5', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'a60365f7d7b2873a1114ae21a866f7c8e8b2ef46', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '1900662c3886f378e91f0ec8e0e849331dcfd17c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '9a9be2295a6b329a5e8423ee4a21553ef0ff948f', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '5feb816b0b16f9396a0a5121474d3e40433034d2', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'eee60da150d2b8070d6d567acd752ff2d1a17721', class: "pt-1 filter-group" }, h("wa-select", { key: '769f68b75cb1c6f6602a5f7fd25cf140d7ad1d16', onchange: e => {
                const value = e.target.value;
                this.updateFilter({
                    date: value,
                    from_date: moment(value, 'YYYY-MM-DD').add(-1, 'days').format('YYYY-MM-DD'),
                    to_date: moment(value, 'YYYY-MM-DD').format('YYYY-MM-DD'),
                });
            }, placeholder: "Select a date", size: "small", value: this.filters?.date, defaultValue: this.filters?.date }, this.getLast30Days().map(({ label, value }) => (h("wa-option", { key: value, value: value }, label)))), h("div", { key: '0b1aed928bf955bfe3c550f0bcb4cd6e423bb865', class: "or-divider" }, h("span", { key: '53e21b895ee22caa42fcc325252b0dc66d3a8adf', class: "or-divider__line" }), h("span", { key: 'af3cea85485c203d465d894e7fd3377b9c422e49', class: "or-divider__text" }, "Or"), h("span", { key: 'a08b4dea061a58a889d78d8ecba8853a29f26872', class: "or-divider__line" })), h("ir-date-range", { key: '1cadfc361062c1bd2682e815070c0ba4c2bf89c1', dateLabel: "Select a date range", withDateDifference: false, defaultData: { fromDate: this.filters?.from_date, toDate: this.filters?.to_date }, onDateRangeChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({
                    date: null,
                    from_date: e.detail.checkIn.format('YYYY-MM-DD'),
                    to_date: e.detail.checkOut.format('YYYY-MM-DD'),
                });
            } })), h("div", { key: '8725cd31d70319ad31ce047fb55444eade2de882', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8ff193f110cac53be48da78df123b6612d7a1bf9', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '86df86f84a6603c4e5a697d7be80231bdc037148', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
