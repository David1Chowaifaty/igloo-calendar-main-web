import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, F as Fragment } from './index-60982d00.js';
import { h as hooks, f as formatAmount } from './utils-b77baf9f.js';
import { l as locales } from './locales.store-629477c2.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import './index-6ecc32cd.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';

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
        return (h("div", { key: 'f84756137cfd8dfcc2acddd4ba9d66a652b6dad6', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '726edd650febe9bf1a62f9b5eab32d95770a5a67', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '0bfb57c4dd2a51bc5fa7cca70334a9dfdaf67ef8', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'ecfa24a2fbdabfac6513d04420189cec1c38061f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '465dd1c2b76b4f3304f19d4b0333ba7b8b9e6750', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'a16a8a207d130c44b143fa68802a1f5b283bb61f', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '28b4d4193a1749d9ef2638e13ffd2010817ccd70', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '49a26f350bdda3b2c4f975583aec10c50cedd1ef', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '2ff0546fa61eb8693ad5d115aca0915bb91e4867', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '7468c699e5f656aed769164c0fa4c65e10a1ef6d', class: "pt-1 filter-group" }, h("label", { key: 'd0054198eb2f4ba28e73e9c4fffb5a84eb57d04c', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: '5d527eb05e2f559e505752c2dd5545d1ddf4460a', class: "w-100 d-flex" }, h("style", { key: '0d975c21ca3cb3649cd3ab5aef7cb8622b46d8a4' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: '8007ab99f2c9d620b79dae6bd2ce8a5abeffa38f', "data-testid": "pickup_date", date: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '4da14bc968b21302bbec5b3ab4552fbeadf2f6e3', slot: "trigger", type: "text", value: (_b = this === null || this === void 0 ? void 0 : this.filters) === null || _b === void 0 ? void 0 : _b.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: '45a34b1968b0843a73591f1a7dfd80801a1a7685', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'ae0b84898599afe6e295b99bcb5f3767bad41e66', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '6b76e3a950d45ad2072e69017719fa64dc5fcd42', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get watchers() { return {
        "payments": ["handlePaymentChange"]
    }; }
};
IrDailyRevenueFilters.style = IrDailyRevenueFiltersStyle0;

const irRevenueRowCss = ".sc-ir-revenue-row-h{--ir-border:#e5e7eb}.ir-revenue-row__accordion.sc-ir-revenue-row::part(base),.ir-revenue-row.sc-ir-revenue-row{border:0;border-radius:0;border-bottom:1px solid var(--ir-border, #e5e7eb);background:#fff;padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:0.5rem;background:transparent;border:0;padding:0;cursor:pointer;text-align:left;width:100%;justify-content:space-between;padding:0.5rem;color:black}.ir-revenue-row__title.sc-ir-revenue-row{padding:0}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:0.5rem}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):hover{background:#f4f5fa}.ir-revenue-row__group.sc-ir-revenue-row{margin:0;font-weight:600}.ir-revenue-row__badge.sc-ir-revenue-row{background:lightgray;border-radius:0.25rem;font-size:0.75rem;padding:0 0.5rem;margin-left:0.375rem}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__accordion.sc-ir-revenue-row::part(content){padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}";
const IrRevenueRowStyle0 = irRevenueRowCss;

let accId = 0;
const IrRevenueRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Array of payments for this method group */
        this.payments = [];
        this.contentId = `ir-rr-content-${++accId}`;
    }
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: '4174640f3bec4f20c0a97209941ce2653faf0b69' }, h("ir-accordion", { key: '9ef0e9d3de73850d9d6e28a98153857e6509477b', class: "ir-revenue-row__accordion" }, h("div", { key: 'fe46fd7d1dc1d160ea19aee95cc28125d8b1c587', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '7e60e1a939a378831572e247203576cb4a49b848', class: "ir-revenue-row__header-left" }, h("p", { key: '8721ba81490d0b73b25c5d19b3cfc3477d5e042d', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'be8849a8d6b7ea4f7226ce9c886b27fb9133adb7', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '7a7e37b0e9dc833cb628200d6a02de7d6dc1e6c5', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '82ea1e2f14bb535981829974436c987fd2cf4e87', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '9636213366e7e6a92b1e12d2a76be48ce70d81f2', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    get host() { return getElement(this); }
};
IrRevenueRow.style = IrRevenueRowStyle0;

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
        return (h(Host, { key: 'ba627454b314f449d9b19530bd6faa2f2bb5f618' }, h("div", { key: 'dfd49a9d1329d1815a0b8e2da9743f9f7c0e031f', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: 'b3f8664138026ff35ec99957cea7f327ab6952c9', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '3cc9f63bf06d2488bc2114f51819313136d15aaa', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'dbbb9fab48a8df7ca70b0706e077ad747ef3d756', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: '2efb4b133286c535b9d932fc567aea71f62d971b', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: '60e770d5418c27286f4946dc009eea17cca118cb', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: '73f3e34f107558387cdcab95e1478f3994bf1e73', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, h("p", { key: 'b104bf2041d0683e70808a99522227ef9988f82d', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '3df088ff3d20fb7a7ef548592b6b794a255b4d74', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` }, h("p", { key: 'b00958da7c60636d88d4f11955016a3096721b99', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '6be72a75ad72c7e5c00b7bba9e763d31bacc4abb', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
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
        return (h("div", { key: '77e2b826bca40872cb917a1a5388d37bdd140bea', class: "card p-1 revenue-table__table" }, this.payments.size > 0 ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            return h("ir-revenue-row", { key: key, payments: p, groupName: this.payTypesObj[key] });
        }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
};
IrRevenueTable.style = IrRevenueTableStyle0;

export { IrDailyRevenueFilters as ir_daily_revenue_filters, IrRevenueRow as ir_revenue_row, IrRevenueSummary as ir_revenue_summary, IrRevenueTable as ir_revenue_table };

//# sourceMappingURL=ir-daily-revenue-filters_4.entry.js.map