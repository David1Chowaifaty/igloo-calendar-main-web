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
    render() {
        return (h("div", { key: '1710e52d596efb050400057de09668eebaea2e42', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '4ab5308a699f50d5ba93a2a651fd15c9eb75732d', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'df3c34da8f7878458a175b6679734e8714698360', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '19cbfee5cdb00beacafd904cc690d3a5120d4a83', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '9fb94a813cb170fe88d37294b63a130c3941c3da', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'd9f2d6f44b7825caac85ebb359bc90441cbbcd0f', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'fe1c663786feffe32e45eb2ceaa1a31c91dbf20c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '7bc213a08d8522df10a47d9adb53d5e7785c37c7', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '3f244b2bbe6904a5d59316903008e972502a96ed', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '0345dfe5df2e66b795eb1755c9eb6ee1c9bf7662', class: "pt-1 filter-group" }, h("label", { key: '06fd66a3dac109f2f739397bb2199682b3054f6a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '7c396293e15b4a4b0d1fbc575324ccf4b8455984', class: "w-100 d-flex" }, h("style", { key: '3ec346d139ffbdda672c76e6e2d8e7b314b68178' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'ade74916201ae23e3279f4363e52b26b646f9315', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: 'd8490d263ff1c7b518bea6e00c74ae69bdcf5a23', slot: "trigger", type: "text", value: this?.filters?.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: '56501e86682b9a75ab0a9a3cbf494bfabc51a8f3', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '26aa553446811afcc99f92bb6cc534beff027e76', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'b709275150787c19759c5d8e82845dd54adef9fa', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
