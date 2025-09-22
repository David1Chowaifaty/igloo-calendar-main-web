import { r as registerInstance, c as createEvent, h, H as Host, g as getElement, F as Fragment } from './index-60982d00.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-629477c2.js';
import { f as formatAmount } from './utils-6775b2fb.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables-caf00b1d.js';
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
        return (h("div", { key: '1b2c1b6ff79a2be9f7855b4b49094389205275a9', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '9ebd491cbaaf9534c3a7d6adc384149f1907011b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '49b3efb71131aed0658031b595894ca3627695d9', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '85a969d340bf6bfd1d85ce7f7e64aa377ff00da9', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '4abf9ceb2fc30846d9320f5c276c86e9e8d10e6a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '3f643658664b2f04c34956969382df17c0b2163d', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '5e3bd7648df2e695ab13781358fe00265cd7ac3c', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'f004fd28a0e8924be3d153c08f09f9b9bd5cfb89', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: 'd6e5cd3e87d1559d49f4ede828d1eca4f2473cca', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'a6ea20fc86411b24fe63287cb53f39848a489ea4', class: "pt-1 filter-group" }, h("label", { key: '8775691bfb0a946975467cde005615a8902da60f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Select a date"), h("div", { key: 'd23c891b557aabccb4566420b5af63f59ca4dc94', class: "w-100 d-flex" }, h("style", { key: '6b180fc02d2c82bfb19ed429040a92ea6c2133d3' }, `
                  .ir-date-picker-trigger{
                    width:100%;
                  }
                  `), h("ir-date-picker", { key: 'd26fde78a8625634ecdc12cc679d778a17538439', "data-testid": "pickup_date", date: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.date, class: "w-100", emitEmptyDate: true, maxDate: hooks().format('YYYY-MM-DD'), onDateChanged: evt => {
                var _a;
                evt.stopImmediatePropagation();
                evt.stopPropagation();
                this.updateFilter({ date: (_a = evt.detail.start) === null || _a === void 0 ? void 0 : _a.format('YYYY-MM-DD') });
            } }, h("input", { key: '15351ea18bb1c69ef2170458d82c8930f3681957', slot: "trigger", type: "text", value: (_b = this === null || this === void 0 ? void 0 : this.filters) === null || _b === void 0 ? void 0 : _b.date, class: `revenue-table__date-picker-input form-control w-100 input-sm  text-left`, style: { width: '100%' } })))), h("div", { key: 'da2ad48bbd4bb112068a98e4c500ca67ae5c556d', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'd8bae6d012812480d8eb9b79ce93b39f4bb2d442', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '529e0f4fb23528e78049b4a320bf9faf2ce681fa', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        registerInstance(this, hostRef);
        /** Array of payments for this method group */
        this.payments = [];
        this.contentId = `ir-rr-content-${++accId}`;
    }
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: 'feebc24fe8d03034e6462f06d652dceda89caa24' }, h("ir-accordion", { key: '5b1521a136a953646ddef3c6a27999f87b191618', class: "ir-revenue-row__accordion" }, h("div", { key: '9278c40e4e1c039a20ff0ba92d059022aa46adf0', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'b7b3786745b091bd369e0719a867c103b1b39957', class: "ir-revenue-row__header-left" }, h("p", { key: '871947788c23f1507845bf3e51e0dca1192483d3', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '6fd852b5b35a1093f4449ae06c1ece9d88ed243b', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'a0575a0b1f73c4c748eec8d6120b7b37410c3203', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'd0d59929247b380858d1694ec7f322ae4357842d', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'd038f4bfc36f6e5fb82bae7604cd1fd2b719c2f7', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    get host() { return getElement(this); }
};
IrRevenueRow.style = IrRevenueRowStyle0;

const irRevenueSummaryCss = ".ir-revenue-summary__mobile.sc-ir-revenue-summary{display:flex;align-items:center;gap:1rem}.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:none;grid-template-columns:repeat(3, 1fr);gap:1rem}.stats-card__payments-value.sc-ir-revenue-summary{padding:0;margin:0;color:#629a4c}.stats-card__refund-value.sc-ir-revenue-summary{padding:0;margin:0;color:#ff4961}@media (min-width: 768px){.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:grid}.ir-revenue-summary__mobile.sc-ir-revenue-summary{display:none}}";
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
        return (h(Host, { key: '4e58f6b08b8d0eb43ead6b28a7bedf68da9fda2a' }, h("div", { key: '044b832695b1eeeb0916a9c02a39df2bf0475c6c', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: 'a4fc716e2075fb40b2da6891f2e8b804f7ec7452', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '6035232039ec9b79b9c6816876a405b73afd374c', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'a7dd9dbc883e0cab858921c3429251f48ddae9ba', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: '2735fb45812a79a1e60b3e8d30dac4a496c28ad0', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: '32f4853ae404991d830a51c4b6c6b5dbc6c5791d', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: '05798a658f365690ed8b8bb4e8e628f4275bdcd8', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` }, h("p", { key: '9f411fe8cd05d9abf49ae89b4b053a7a0394c785', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: 'c301f95871904184fbacdb0b0192fc61011b1e1d', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` }, h("p", { key: 'ddfceb2f4b19b4aa64091b358920880194d7da9a', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '6506733289278f46da84ff19637ad6a531c74c6f', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` }))));
    }
};
IrRevenueSummary.style = IrRevenueSummaryStyle0;

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table{box-sizing:border-box;background:#ececec;color:#374151;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem)}}";
const IrRevenueTableStyle0 = irRevenueTableCss;

const IrRevenueTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '4ac5ccf1dab6170a4683a7e636a2aa1ff3857519', class: "card p-1 revenue-table__table" }, this.payments.size > 0 ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            const [paymentType, paymentMethod] = key.split('_');
            const groupName = PAYMENT_TYPES_WITH_METHOD.includes(paymentType)
                ? `${this.payTypesObj[paymentType]}: ${this.payMethodObj[paymentMethod]}`
                : this.payTypesObj[paymentType];
            return h("ir-revenue-row", { key: key, payments: p, groupName: groupName });
        }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
};
IrRevenueTable.style = IrRevenueTableStyle0;

export { IrDailyRevenueFilters as ir_daily_revenue_filters, IrRevenueRow as ir_revenue_row, IrRevenueSummary as ir_revenue_summary, IrRevenueTable as ir_revenue_table };

//# sourceMappingURL=ir-daily-revenue-filters_4.entry.js.map