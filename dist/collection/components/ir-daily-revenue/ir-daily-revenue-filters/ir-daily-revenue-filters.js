import { h } from "@stencil/core";
import moment from "moment";
import locales from "../../../stores/locales.store";
export class IrDailyRevenueFilters {
    constructor() {
        this.collapsed = false;
        this.users = new Set();
        this.baseFilters = {
            date: moment().format('YYYY-MM-DD'),
            users: null,
        };
    }
    componentWillLoad() {
        this.filters = Object.assign({}, this.baseFilters);
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
        this.filters = Object.assign({}, this.baseFilters);
        this.fetchNewReports.emit(this.filters);
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    render() {
        var _a, _b;
        return (h("div", { key: '8e8747ff4f2265c61fbd4a274904a6c2e5ef57b3', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'e261c521e3797246cb49266a3b3f1c2210b47d41', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'd7092edf1db8c6e6379cb70e94fb3b559f847835', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'd98590fa3cb1b3ae4ad2d896972a8bad9209bd48', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '12aaa2b5047f35292a0d98e3d5a404b9c9738777', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '59b1967e1e8d20dc4c3e5624d4bf9dc98a119123', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'a8dcf8e980c09cfb1ae15d766e133bac9da27bd5', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'eae0d70e9d0748ad31caf6b79cf4f37043cd3dfb', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '7eeed83d8b6422e8832a73df1bf96274327e25fb', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'cc85d6212b3177f397f82b1c76180e366c6aea29', class: "pt-1 filter-group" }, h("label", { key: 'dd9cdab4248a41c5529d2f9f3f503a9afbfb0cf2', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '6190582f3fa50cef94028a7cd366427eace9096f', class: "w-100 d-flex" }, h("style", { key: '5c5ec4d6fc8e75915ebfb28f2d502f57be2bdb29' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '38c654f3217a86a3f31282cf43101b9ed52b3ecc', "data-testid": "pickup_date", date: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '67341fada049704890b8aae427680d76e3bfc593', slot: "trigger", type: "text", value: (_b = this === null || this === void 0 ? void 0 : this.filters) === null || _b === void 0 ? void 0 : _b.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: 'ab508693277492d33e27b6181cf6bcfcd759dfba', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '50cf7372ee3c15da36f5db3593b25c3e55f77158', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '98e136bdaa591638421604d531ceb43ba02bf139', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
                    "resolved": "{ date: string; users: string; }",
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
