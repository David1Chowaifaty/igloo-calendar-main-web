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
        return (h("ir-filter-card", { key: '8e70f84d755c99e997b577d2082fb2528d96493c' }, h("wa-select", { key: 'ae8b88467eb8f77fcab7630386037d2f0b84771e', label: t('Lcz_Source', { fallback: 'Source' }), size: "s", value: this.filters?.source ?? '', defaultValue: this.filters?.source ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ source: value || null });
            } }, h("wa-option", { key: '600125ecdc4e04b5d699e781f1e3b5c0430de755', value: "" }, t('Lcz_AllSources', { fallback: 'All sources' })), this.sources.map(({ label, value }) => (h("wa-option", { key: value, value: value }, label)))), h("wa-select", { key: '44bccdbf35c9df8bb2b01b14d53e1b814a0d5679', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.filters?.date?.toString(), defaultValue: this.filters?.date?.toString(), onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: value, to_date: value, from_date: value });
            } }, this.getLast30Days().map(({ text, value }) => (h("wa-option", { key: value, value: value }, text)))), h("div", { key: 'fd20d21f52aac56d4f74f42a58e21d6f0a154a5b', class: "or-divider" }, h("span", { key: '8fcfebd104ab5e5c259fd470e73757bbac317874', class: "or-divider__line" }), h("span", { key: '25ebfe3a4d195aa24e3cf21d360da8cb6a7f1e25', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: 'c916cb7c6d38ab0c2c655fa37da65f6926832255', class: "or-divider__line" })), h("ir-date-range-filter", { key: 'd538a5fbfd9f5e4c2ab8cbf8b52f6d6195ccf3a5', showQuickActions: false, label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.from_date, toDate: this.filters?.to_date, selectionMode: "auto", withClear: false, maxDate: moment().format('YYYY-MM-DD'), onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ from_date: from, to_date: to, date: null });
            } }), h("div", { key: '06afce67aaf6e246c210fb0a0f8e5ab46c4c9616', slot: "footer" }, h("ir-custom-button", { key: 'bd27db3a4fc6f9f8b5bba3c2770b92c71340fbb2', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '2a26bcea621e413e71292ac01fb604d0ccc67b6d', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
