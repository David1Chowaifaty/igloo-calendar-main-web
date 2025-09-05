'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-bf9b1b25.js');
const calendarData = require('./calendar-data-960b69ba.js');
require('./index-7564ffa1.js');
require('./index-63734c32.js');
require('./axios-6e678d52.js');

const irDailyRevenueFiltersCss = ".sc-ir-daily-revenue-filters-h{display:block}.revenue-filter__date-picker-icon.sc-ir-daily-revenue-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-daily-revenue-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-daily-revenue-filters-h{width:300px}.collapse-btn.sc-ir-daily-revenue-filters{display:none}#dailyRevenueFiltersCollapse.collapse.sc-ir-daily-revenue-filters:not(.show){display:block}}";
const IrDailyRevenueFiltersStyle0 = irDailyRevenueFiltersCss;

const IrDailyRevenueFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports", 7);
        this.collapsed = false;
        this.users = new Set();
        this.baseFilters = {
            date: moment.hooks().format('YYYY-MM-DD'),
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
        return (index.h("div", { key: '6b71aead9e299333b317b4043f846cc05a42ceee', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '55ddff40fd6fe952d7415af311661c95860a8e29', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '16aea0e00040fff1292518003e5a1ff4e566b27e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'ee2a8f0adbfc6e7a4f2e177b8b5a5ac8371c6a55', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '1ddcb7d35e53417149f7e624b2575c79e536542a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '20b51547b87670b73b01944d8ac0f2026cc76e3c', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: 'f23c1d1321878d255eb3482eb3293d74d9d0b4c1', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: 'f3ff91b3160a829184433fdaf58bfbe3afa3351a', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, index.h("div", { key: '64ecc33dbafd1e7e6da8d0898247e63743556bc5', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '53c2eefeb214ed66b7b6f9a26a16a1d3573e5589', class: "pt-1 filter-group" }, index.h("label", { key: '92114b08ff489565ccdb4461f7c85bf1fb6aa1c3', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: 'bc30e68d4e9c3c469f39de08041d2742356992f7', class: "w-100 d-flex" }, index.h("style", { key: '7d42573f9909113b674e6e6fb94b6d31ed421ebf' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '08b8002c54c631f78e03df8125b1e1a404db4197', "data-testid": "pickup_date", date: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: 'e6fcfe9f6d26c022e20567bd2ca9af43380b9094', slot: "trigger", type: "text", value: (_b = this === null || this === void 0 ? void 0 : this.filters) === null || _b === void 0 ? void 0 : _b.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("div", { key: '06bde5e23bbff5dbaa1764641341ff16d64e3518', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '58a27677dd1a7f0545453a7acae4bdf8396b7278', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '0a0ab752235a0a4de1573d3f92bf526999ad6b66', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get watchers() { return {
        "payments": ["handlePaymentChange"]
    }; }
};
IrDailyRevenueFilters.style = IrDailyRevenueFiltersStyle0;

const irRevenueSummaryCss = ".ir-revenue-summary__mobile.sc-ir-revenue-summary{display:flex;align-items:center;gap:1rem}.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:none;grid-template-columns:repeat(3, 1fr);gap:1rem}.stats-card__payments-value.sc-ir-revenue-summary{color:#629a4c}.stats-card__refund-value.sc-ir-revenue-summary{color:#ff4961}@media (min-width: 768px){.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:grid}.ir-revenue-summary__mobile.sc-ir-revenue-summary{display:none}}";
const IrRevenueSummaryStyle0 = irRevenueSummaryCss;

const IrRevenueSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.groupedPayments = new Map();
        this.previousDateGroupedPayments = new Map();
    }
    calculateTotalPayments(groupedPayments) {
        let total = 0;
        groupedPayments.forEach((value, key) => {
            if (this.payTypesGroup.find(p => p.CODE_NAME === key)) {
                total += this.calculateTotalValue(value);
            }
        });
        return total;
    }
    // private calculateTotalAmount(groupedPayments: GroupedFolioPayment) {
    //   return Array.from(groupedPayments.entries()).reduce((prev, curr) => prev + this.calculateTotalValue(curr[1]), 0);
    // }
    calculateTotalRefunds(groupedPayments) {
        const refundKeyCode = '010';
        if (!groupedPayments.has(refundKeyCode)) {
            return 0;
        }
        return this.calculateTotalValue(groupedPayments.get(refundKeyCode));
    }
    calculateTotalValue(payments) {
        return payments.reduce((p, c) => p + c.amount, 0);
    }
    getTrendIcon(val1, val2) {
        if (val1 === val2) {
            return undefined;
        }
        return val1 > val2 ? 'arrow-trend-up' : 'arrow-trend-down';
    }
    render() {
        const paymentsTotal = this.calculateTotalPayments(this.groupedPayments);
        const refundAmount = this.calculateTotalRefunds(this.groupedPayments);
        const totalAmount = paymentsTotal - refundAmount;
        const previousDatePaymentsTotal = this.calculateTotalPayments(this.previousDateGroupedPayments);
        const previousDateRefundAmount = this.calculateTotalRefunds(this.previousDateGroupedPayments);
        const previousDateTotalAmount = previousDatePaymentsTotal - previousDateRefundAmount;
        return (index.h(index.Host, { key: 'b06024764f005c62d2b972b914516f775067417a' }, index.h("div", { key: '1ba38a955ba5946d97b02a1b075e875c380c8426', class: "ir-revenue-summary__mobile" }, index.h("ir-stats-card", { key: '9d6356f3a4be043e41ca5fb6c6c47e02cdc990db', icon: 'arrow-trend-up', value: utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, index.h("p", { key: '2697182a71de86a62f17e21ea44f429e95d9d815', class: "stats-card__payments-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal))), index.h("ir-stats-card", { key: '214f208e8e6ec244f0ba588a44cf5d2358f56b66', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, index.h("p", { key: '8465e25d2843d37770df7869e10d00269b7874e4', class: "stats-card__refund-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount)))), index.h("div", { key: '7bcd85a34b934ceea60079bdcd3cd64dc8fcadad', class: "ir-revenue-summary__tablet" }, index.h("ir-stats-card", { key: '6c643241a439d5c009017c5557fc34766b39eed5', icon: 'arrow-trend-up', value: utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, index.h("p", { key: 'd903bc7df7acfc1566434cd94eed093f554aaadd', class: "stats-card__payments-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal))), index.h("ir-stats-card", { key: '1ffdde90fc45f3cfb3c722af254d2a03098e31bd', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDateRefundAmount)}` }, index.h("p", { key: 'b77210dbbc1184e86cd8bcb78085d05945ab9c96', class: "stats-card__refund-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount))), index.h("ir-stats-card", { key: '68df1fcb13a050e2ddbc9c214a40c7d998322f28', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: utils.formatAmount(calendarData.calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
    }
};
IrRevenueSummary.style = IrRevenueSummaryStyle0;

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table{box-sizing:border-box;background:#ececec;color:#374151;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}";
const IrRevenueTableStyle0 = irRevenueTableCss;

const IrRevenueTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.payments = new Map();
    }
    componentWillLoad() {
        let pt = {};
        this.payTypes.forEach(p => {
            pt = Object.assign(Object.assign({}, pt), { [p.CODE_NAME]: p.CODE_VALUE_EN });
        });
        this.payTypesObj = pt;
    }
    render() {
        return (index.h("div", { key: '63cfcf4c699ff6b4668b43153795abb8147e9e9a', class: "card p-1 revenue-table__table" }, this.payments.size > 0 ? (index.h(index.Fragment, null, index.h("div", { class: "revenue-table__header" }, index.h("p", null, "Method"), index.h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            return index.h("ir-revenue-row", { key: key, payments: p, groupName: this.payTypesObj[key] });
        }))) : (index.h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
};
IrRevenueTable.style = IrRevenueTableStyle0;

exports.ir_daily_revenue_filters = IrDailyRevenueFilters;
exports.ir_revenue_summary = IrRevenueSummary;
exports.ir_revenue_table = IrRevenueTable;

//# sourceMappingURL=ir-daily-revenue-filters_3.cjs.entry.js.map