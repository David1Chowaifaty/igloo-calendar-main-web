'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-bf9b1b25.js');
const calendarData = require('./calendar-data-960b69ba.js');
const global_variables = require('./global.variables-108c9c1e.js');
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
        return (index.h("div", { key: 'd436f28209c59cc5c270719519efefdd6ef8da12', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '701689ea9b8a1332b9efd679ec63f0195fc04c59', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '7becf5287d3ada15edc0765cd1c8925e478a14d6', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '91cde5f203688a60ff92b598b4f7bbe4245e708e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'ab73cd47e6d9460b324f43efb4a387f196ebd25a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'bce7d12e472f2381ee3ba3bc02a4e1c45ef5ca81', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '480dd5c2fe54eed012619fa7b009b44f428a62ac', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '7feeb452978e8ed615a29abac0556c11460e2db5', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, index.h("div", { key: 'e66109c068a6906b26156679f6a0b9faa49857a4', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '5ad2ff7d2a0a5291d654042e94a6b7a0c1ee96de', class: "pt-1 filter-group" }, index.h("label", { key: '282d0c2693b017e762bddf3d9b90e22cae2a8b4d', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), index.h("div", { key: 'baeb2d3b453929b3fed4d7b4b4743c7f98d4f483', class: "w-100 d-flex" }, index.h("style", { key: '8eeb868eec59cf1b27ecc45382ee50aa5655bc36' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), index.h("ir-date-picker", { key: '090d076274ad4c70372b455847c1cff7ac0f6995', "data-testid": "pickup_date", date: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: moment.hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, index.h("input", { key: '2eaeb200b09ae98a37cdfd61beb030b74413ffd6', slot: "trigger", type: "text", value: (_b = this === null || this === void 0 ? void 0 : this.filters) === null || _b === void 0 ? void 0 : _b.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), index.h("div", { key: '6d8c1c51bfc75b0ec6592ab1873cd15cbdd9fefe', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '5d70e4090175520bd3fdf5932018c4d5e4f5a81b', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'e40331a48d3a337fcf77793cf944e1f1a866578c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get watchers() { return {
        "payments": ["handlePaymentChange"]
    }; }
};
IrDailyRevenueFilters.style = IrDailyRevenueFiltersStyle0;

const irRevenueRowCss = ".sc-ir-revenue-row-h{--ir-border:#e5e7eb}.ir-revenue-row__accordion.sc-ir-revenue-row::part(base),.ir-revenue-row.sc-ir-revenue-row{border:0;border-radius:0;border-bottom:1px solid var(--ir-border, #e5e7eb);background:#fff;padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:0.5rem;background:transparent;border:0;padding:0;cursor:pointer;text-align:left;width:100%;justify-content:space-between;padding:0.5rem;color:black}.ir-revenue-row__title.sc-ir-revenue-row{padding:0}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:0.5rem}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):hover{background:#f4f5fa}.ir-revenue-row__group.sc-ir-revenue-row{margin:0;font-weight:600}.ir-revenue-row__badge.sc-ir-revenue-row{background:lightgray;border-radius:0.25rem;font-size:0.75rem;padding:0 0.5rem;margin-left:0.375rem}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__accordion.sc-ir-revenue-row::part(content){padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}@media (min-width: 1024px){.ir-revenue-row__header-left.sc-ir-revenue-row{width:40vw}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{justify-content:flex-start}}";
const IrRevenueRowStyle0 = irRevenueRowCss;

let accId = 0;
const IrRevenueRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /** Array of payments for this method group */
        this.payments = [];
        this.contentId = `ir-rr-content-${++accId}`;
    }
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (index.h(index.Host, { key: 'e4a816eaa7c3d813442d0cea850b12bbfdbb52a1' }, index.h("ir-accordion", { key: 'd18b05d19e68e6da83c56508d81d41e3242c0f71', class: "ir-revenue-row__accordion" }, index.h("div", { key: '7549503db89ba18b5f84bb7ee3e864fef51958b7', slot: "trigger", class: "ir-revenue-row__title" }, index.h("div", { key: 'e6f4d2e6dac96c842b0f82bb0c64513ae36dc72d', class: "ir-revenue-row__header-left" }, index.h("p", { key: 'feaa46a65f5623966b177f97ba36d756ed6c299d', class: "ir-revenue-row__group" }, this.groupName, ' ', index.h("span", { key: 'e90451b818d086ceb00ad3942348157706baeb4f', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), index.h("p", { key: 'd1d533e8c8d7ba20b2f33e95f235ab789ea55267', class: "ir-revenue-row__total" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, total))), index.h("div", { key: '9d9ec2b85831713f984a1a62bb59ab7ca8a349da', class: "ir-revenue-row__details", id: this.contentId }, index.h("div", { key: '9a2be6d65812f65bb709832a8e19907753a0e024', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (index.h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    get host() { return index.getElement(this); }
};
IrRevenueRow.style = IrRevenueRowStyle0;

const irRevenueSummaryCss = ".ir-revenue-summary__mobile.sc-ir-revenue-summary{display:flex;align-items:center;gap:1rem}.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:none;grid-template-columns:repeat(3, 1fr);gap:1rem}.stats-card__payments-value.sc-ir-revenue-summary{padding:0;margin:0;color:#629a4c}.stats-card__refund-value.sc-ir-revenue-summary{padding:0;margin:0;color:#ff4961}@media (min-width: 768px){.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:grid}.ir-revenue-summary__mobile.sc-ir-revenue-summary{display:none}}";
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
            if (key.split('_')[0] === '001') {
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
        const payments = [];
        groupedPayments.forEach((value, key) => {
            if (key.split('_')[0] === refundKeyCode) {
                payments.push(...value);
            }
        });
        return this.calculateTotalValue(payments);
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
        return (index.h(index.Host, { key: '6fd5e336952e2f2f15cbad2bef2ceb3bd866d0ae' }, index.h("div", { key: '44f48af594211d817347914c5c3821fd429e4d50', class: "ir-revenue-summary__mobile" }, index.h("ir-stats-card", { key: 'd636ea1592977773407a07c1dfbaaa6691ae3513', icon: 'arrow-trend-up', value: utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, index.h("p", { key: '57933ff9e7f63dc001c3b8e3de3406e8bf752f89', class: "stats-card__payments-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal))), index.h("ir-stats-card", { key: 'a74b41dc9fc90fb3a33e94eca85fc8f74dce7980', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, index.h("p", { key: 'fcba7f4c5948fa67b0e7ed80782460fdfd8adf5f', class: "stats-card__refund-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount)))), index.h("div", { key: '63366ddaeb403b3e74283639ea3996b59054f1bf', class: "ir-revenue-summary__tablet" }, index.h("ir-stats-card", { key: '7e78f95da8decbca82a01016a69d5d33c647de4c', icon: 'arrow-trend-up', value: utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, index.h("p", { key: 'ac3381fa895817cb31c3b100f42fc6747d796809', class: "stats-card__payments-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal))), index.h("ir-stats-card", { key: '2f08932f9b7295145123686f254c8a3f9844963d', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDateRefundAmount)}` }, index.h("p", { key: '8d0dda2eb62998e0237857c49fa66091919ce341', class: "stats-card__refund-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount))), index.h("ir-stats-card", { key: 'bc9a2268347ff656d81e751348b97b9b83633866', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: utils.formatAmount(calendarData.calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
    }
};
IrRevenueSummary.style = IrRevenueSummaryStyle0;

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table{box-sizing:border-box;background:#ececec;color:#374151;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem)}}";
const IrRevenueTableStyle0 = irRevenueTableCss;

const IrRevenueTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.payments = new Map();
    }
    componentWillLoad() {
        const buildPaymentLookup = (key) => {
            let pt = {};
            this.paymentEntries[key].forEach(p => {
                pt = Object.assign(Object.assign({}, pt), { [p.CODE_NAME]: p.CODE_VALUE_EN });
            });
            return pt;
        };
        this.payTypesObj = buildPaymentLookup('types');
        this.payMethodObj = buildPaymentLookup('methods');
    }
    render() {
        return (index.h("div", { key: 'd1c9b767706382187380484cddf01444433676aa', class: "card p-1 revenue-table__table" }, this.payments.size > 0 ? (index.h(index.Fragment, null, index.h("div", { class: "revenue-table__header" }, index.h("p", null, "Method"), index.h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            const [paymentType, paymentMethod] = key.split('_');
            const groupName = global_variables.PAYMENT_TYPES_WITH_METHOD.includes(paymentType)
                ? `${this.payTypesObj[paymentType]}: ${this.payMethodObj[paymentMethod]}`
                : this.payTypesObj[paymentType];
            return index.h("ir-revenue-row", { key: key, payments: p, groupName: groupName });
        }))) : (index.h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
};
IrRevenueTable.style = IrRevenueTableStyle0;

exports.ir_daily_revenue_filters = IrDailyRevenueFilters;
exports.ir_revenue_row = IrRevenueRow;
exports.ir_revenue_summary = IrRevenueSummary;
exports.ir_revenue_table = IrRevenueTable;

//# sourceMappingURL=ir-daily-revenue-filters_4.cjs.entry.js.map