import { h } from "@stencil/core";
import moment from "moment";
import { formatDate } from "../../../utils/date/index";
import { t } from "../../../services/locale/t";
export class IrDailyRevenueFilters {
    payments;
    isLoading;
    sources = [];
    users = new Set();
    filters;
    baseFilters = {
        date: moment().format('YYYY-MM-DD'),
        from_date: moment().format('YYYY-MM-DD'),
        to_date: moment().format('YYYY-MM-DD'),
        users: null,
        source: null,
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
            const label = i === 0 ? t('Lcz_Today', { fallback: 'Today' }) : formatDate(date, 'MMM DD, YYYY');
            return { text: label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (h("ir-filter-card", { key: '026877eeb0323275793206a9316dab34496666fc' }, h("wa-select", { key: '6cefeb8472b0fa95e21410c76a7abafe727646f5', label: t('Lcz_Source', { fallback: 'Source' }), size: "s", value: this.filters?.source ?? '', defaultValue: this.filters?.source ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ source: value || null });
            } }, h("wa-option", { key: 'e69f0beabdcfd77a6025faedf655d5d964d53156', value: "" }, t('Lcz_AllSources', { fallback: 'All sources' })), this.sources.map(({ label, value }) => (h("wa-option", { key: value, value: value }, label)))), h("wa-select", { key: '116c48ef3a5fef7e870f6d590a4e483c11fa2dc4', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.filters?.date?.toString(), defaultValue: this.filters?.date?.toString(), onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: value, to_date: value, from_date: value });
            } }, this.getLast30Days().map(({ text, value }) => (h("wa-option", { key: value, value: value }, text)))), h("div", { key: '6148909cbe1f9c15d35a3d04e9e92f3f5c91f0fd', class: "or-divider" }, h("span", { key: '524726ac4a18cdbcff2d9b0578f4d8c2fbee01c0', class: "or-divider__line" }), h("span", { key: '8d1a965c83793e65a5464b975324e0e71625e14d', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: 'd2bf9ec0f265a818b191c5e585ddf440de8cf808', class: "or-divider__line" })), h("ir-date-range-filter", { key: '9957eccaadeb08beb61dbd71e0fa8b871585187f', showQuickActions: false, label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.from_date, toDate: this.filters?.to_date, selectionMode: "auto", withClear: false, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ from_date: from, to_date: to, date: null });
            } }), h("div", { key: 'a1cf50997f1a494b196316fb4d151a629554a110', slot: "footer" }, h("ir-custom-button", { key: 'dd292018285abdc4ff2cb1d9ea33d27e918ffa66', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '4483587efdacb340b30323a744e889275533ad91', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
                            "id": "src/components/ir-daily-revenue/types.ts::GroupedFolioPayment",
                            "referenceLocation": "GroupedFolioPayment"
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
                "reflect": false,
                "attribute": "is-loading"
            },
            "sources": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "RevenueSourceOption[]",
                    "resolved": "RevenueSourceOption[]",
                    "references": {
                        "RevenueSourceOption": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::RevenueSourceOption",
                            "referenceLocation": "RevenueSourceOption"
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
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
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
                    "resolved": "{ from_date?: string; to_date?: string; date?: string; users: string; source: string; }",
                    "references": {
                        "DailyPaymentFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-daily-revenue/types.ts::DailyPaymentFilter",
                            "referenceLocation": "DailyPaymentFilter"
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
