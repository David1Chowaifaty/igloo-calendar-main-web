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
        return (h("div", { key: 'a988439604d042c0fb2fe071999bba13093199ce', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '9f20bafb20678e0d9685c5151b9363d8c6a59936', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'dc7d9d10310c5d67879a56e19ad4c50ce64db230', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '0ba04d2b722050a4c7f475b2a6b348c6fb2c8faf', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '11bcc1996cb5dfb449980e574e2fa92a7c72b29d', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'e4f589c8e9eebe53058ce1fd918adb1a7e8394ec', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '90060a14df3b76a9bdf46cb361cb206f048c6ad7', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '3bf5de4512d4cfead88cda8a13a31bd898ec1bf9', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '49630f91761b8a12f5c5076373952599f404bd7a', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '27e562d52ef7e0ed9650df19104becf6b8ea25e8', class: "pt-1 filter-group" }, h("label", { key: '616ebb40c5a7dca78096792d5a201698f84a155e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'b950679fd3a306ee482eb47050b1da1d9ee0a121', class: "w-100 d-flex" }, h("style", { key: '72db34dbb69f68a1b079815c23c91aaa5a10a780' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '38226756d2cb504adc1a28f2e22ae8e82d1912fc', "data-testid": "pickup_date", date: this.filters?.date, class: "w-100", emitEmptyDate: true, maxDate: moment().format('YYYY-MM-DD'), onDateChanged: evt => {
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: evt.detail.start?.format('YYYY-MM-DD') });
            } }, h("input", { key: '4b78ad593bc6f5424119efc64348f51f753df0da', slot: "trigger", type: "text", value: this?.filters?.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: '192c05bfdfc6c5d143034e00722aa20e3264fdbf', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '9a730742a1c492816362da53c140b8873fad0889', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '151bcc9d5f73cc624d7affc7a38dd9f3325a475e', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
