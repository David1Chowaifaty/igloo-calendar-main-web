import { r as registerInstance, c as createEvent, h, H as Host, F as Fragment } from './index-60982d00.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-629477c2.js';
import { f as formatAmount } from './utils-b9f810f7.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
import './index-6ecc32cd.js';
import './axios-aa1335b8.js';

const irDailyRevenueFiltersCss = ".sc-ir-daily-revenue-filters-h{display:block}.revenue-filter__date-picker-icon.sc-ir-daily-revenue-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-daily-revenue-filters-h{display:block;height:100%}@media (min-width: 768px){.sc-ir-daily-revenue-filters-h{width:300px}.collapse-btn.sc-ir-daily-revenue-filters{display:none}#dailyRevenueFiltersCollapse.collapse.sc-ir-daily-revenue-filters:not(.show){display:block}}";
const IrDailyRevenueFiltersStyle0 = irDailyRevenueFiltersCss;

const IrDailyRevenueFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
        this.collapsed = false;
        this.users = new Set();
        this.baseFilters = {
            date: hooks().format('YYYY-MM-DD'),
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
                  `), h("ir-date-picker", { key: '38c654f3217a86a3f31282cf43101b9ed52b3ecc', "data-testid": "pickup_date", date: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '67341fada049704890b8aae427680d76e3bfc593', slot: "trigger", type: "text", value: (_b = this === null || this === void 0 ? void 0 : this.filters) === null || _b === void 0 ? void 0 : _b.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: 'ab508693277492d33e27b6181cf6bcfcd759dfba', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '50cf7372ee3c15da36f5db3593b25c3e55f77158', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '98e136bdaa591638421604d531ceb43ba02bf139', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'ea8b3b77a71dc6638fc892671bd561f1b6d912f7' }, h("div", { key: '206f405354ddfbe6913b3d34255a736770c87d28', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: 'a7fd0a9196f5bc5e62af051f04f200caa13e675a', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: 'fab0062961dd0013d3576a1d0b59eac41cd3d710', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '941e7e60d3a3e948dc8e01a76c76020fa2f7c1dc', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: 'b599cf8d295fad4bbe61811922cba58ed6b54bc0', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: '278a24ffea81cd4da3ecc2f3c78576e0f5bd5855', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: 'b99d85bb408a2b18b4d40abbf1c0dbb5649e5046', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, h("p", { key: '727c6569b361fd2be06b1d4cf608b92f853cdb77', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'ec5bd42a51d74eccee2dae4926ac4805651e2d6c', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` }, h("p", { key: '102c33f3d6551b1a6d4befe19f4bc986ab0db1a3', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '99020d946fe0924a67158037d06a6c60c52ef9ef', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
    }
};
IrRevenueSummary.style = IrRevenueSummaryStyle0;

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table{box-sizing:border-box;background:#ececec;color:#374151;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}";
const IrRevenueTableStyle0 = irRevenueTableCss;

const IrRevenueTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '378fd079b312db4e1fe17f9df9c48066b0c2e3db', class: "card p-1 revenue-table__table" }, this.payments.size > 0 ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            return h("ir-revenue-row", { key: key, payments: p, groupName: this.payTypesObj[key] });
        }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
};
IrRevenueTable.style = IrRevenueTableStyle0;

export { IrDailyRevenueFilters as ir_daily_revenue_filters, IrRevenueSummary as ir_revenue_summary, IrRevenueTable as ir_revenue_table };

//# sourceMappingURL=ir-daily-revenue-filters_3.entry.js.map