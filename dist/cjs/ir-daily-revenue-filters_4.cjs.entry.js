'use strict';

var index = require('./index-IDeZZwEK.js');
var moment = require('./moment-CdViwxPQ.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var utils = require('./utils-DaFypNtu.js');
var global_variables = require('./global.variables-BldIv7Je.js');
require('./booking.dto-CMx8s-oW.js');
require('./locale-scope-Cch-vf1R.js');
var utils$1 = require('./utils-BwXEit5a.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-dates-BxDGM1ix.js');
require('./types-BVJQZ50e.js');
require('./type-DxODN41W.js');
require('./IBooking-hDE_y33g.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./axios-EresIryl.js');

const irDailyRevenueFiltersCss = () => `.sc-ir-daily-revenue-filters-h{display:block}.or-divider.sc-ir-daily-revenue-filters{display:flex;align-items:center;gap:0.5rem}.or-divider__line.sc-ir-daily-revenue-filters{flex:1;height:1px;background-color:var(--wa-color-surface-border, #dee2e6)}.or-divider__text.sc-ir-daily-revenue-filters{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #6c757d);white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}`;

const IrDailyRevenueFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports");
    }
    payments;
    isLoading;
    sources = [];
    users = new Set();
    filters;
    baseFilters = {
        date: moment.hooks().format('YYYY-MM-DD'),
        from_date: moment.hooks().format('YYYY-MM-DD'),
        to_date: moment.hooks().format('YYYY-MM-DD'),
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
            const date = moment.hooks().subtract(i, 'days');
            const label = i === 0 ? t.t('Lcz_Today', { fallback: 'Today' }) : irDate.formatDate(date, 'MMM DD, YYYY');
            return { text: label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (index.h("ir-filter-card", { key: '800a972caa16ed5024f66ddf8cdcc3cb2bbcf2f6' }, index.h("wa-select", { key: '5435902bcb2856144fab1da8746375fedb7789ca', label: t.t('Lcz_Source', { fallback: 'Source' }), size: "s", value: this.filters?.source ?? '', defaultValue: this.filters?.source ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ source: value || null });
            } }, index.h("wa-option", { key: 'e2e05fc477ae8fc37bfe7b42afe642f62dc29ed0', value: "" }, t.t('Lcz_AllSources', { fallback: 'All sources' })), this.sources.map(({ label, value }) => (index.h("wa-option", { key: value, value: value }, label)))), index.h("wa-select", { key: 'f4f9183fe903fca2e4fd1b16802d177815b4de60', label: t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.filters?.date?.toString(), defaultValue: this.filters?.date?.toString(), onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: value, to_date: value, from_date: value });
            } }, this.getLast30Days().map(({ text, value }) => (index.h("wa-option", { key: value, value: value }, text)))), index.h("div", { key: '1acf82df6502313f87abd9cf97fc8a638ebc1bae', class: "or-divider" }, index.h("span", { key: '174dd337c81179dda7137ba44bbadfa6d430dc2d', class: "or-divider__line" }), index.h("span", { key: 'e3fc73956b70d0a3c1fc4d7007d2deb916a821c6', class: "or-divider__text" }, t.t('Lcz_Or', { fallback: 'Or' })), index.h("span", { key: 'ea5ec47f6bcb069814a3dab61933e684848bb6e4', class: "or-divider__line" })), index.h("ir-date-range-filter", { key: '61478d649b076d1cfabff4ff85a4d87c4f23f5a4', showQuickActions: false, label: t.t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.from_date, toDate: this.filters?.to_date, selectionMode: "auto", withClear: false, maxDate: moment.hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ from_date: from, to_date: to, date: null });
            } }), index.h("div", { key: '5aeb04a02680ea0fb09fa38dd20753d90b1c0893', slot: "footer" }, index.h("ir-custom-button", { key: '76a1a439149e4d88c3e02f5502498d00bbdf3d16', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: 'fafe3154710c4cb2a383ad090752b0cd6cfdf0ac', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
    }
    static get watchers() { return {
        "payments": [{
                "handlePaymentChange": 0
            }]
    }; }
};
IrDailyRevenueFilters.style = irDailyRevenueFiltersCss();

const irRevenueRowCss = () => `.sc-ir-revenue-row-h{--ir-border:var(--wa-color-surface-border)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(base),.ir-revenue-row__accordion.sc-ir-revenue-row [part~="base"],.ir-revenue-row.sc-ir-revenue-row{border:0;border-radius:0;border-bottom:1px solid var(--ir-border, #e5e7eb);padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__accordion.sc-ir-revenue-row [part~="trigger"],.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:0.5rem;background:transparent;border:0;padding:0;cursor:pointer;text-align:start;width:100%;justify-content:space-between;padding:0.5rem;color:var(--wa-color-text-normal);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.ir-revenue-row__title.sc-ir-revenue-row{padding:0}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:0.5rem}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):hover,.ir-revenue-row__accordion.sc-ir-revenue-row [part~="trigger"]:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):active,.ir-revenue-row__accordion.sc-ir-revenue-row [part~="trigger"]:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.ir-revenue-row__group.sc-ir-revenue-row{margin:0}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__accordion.sc-ir-revenue-row::part(content),.ir-revenue-row__accordion.sc-ir-revenue-row [part~="content"]{padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}@media (min-width: 1024px){.ir-revenue-row__header-left.sc-ir-revenue-row{width:40.77vw}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{justify-content:flex-start}}`;

let accId = 0;
const IrRevenueRow = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get host() { return index.getElement(this); }
    /** Array of payments for this method group */
    payments = [];
    /** Group display name (e.g., "Credit Card") */
    groupName;
    contentId = `ir-rr-content-${++accId}`;
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (index.h(index.Host, { key: 'df1c1b6f70ff4c29bf915187baa362662ba44c73' }, index.h("ir-accordion", { key: '81e393fcddb6f87a21596b2ed9e1184dcc054e49', class: "ir-revenue-row__accordion" }, index.h("div", { key: '60ef042eee198df8ea81fe9605d4251d535d05b7', slot: "trigger", class: "ir-revenue-row__title" }, index.h("div", { key: '10a1edcaa3467d0c4ae0eb05908709563e8c177a', class: "ir-revenue-row__header-left" }, index.h("p", { key: '8584540e6c79636263ce88e65cfd1f95bdcb2f1e', class: "ir-revenue-row__group" }, this.groupName, ' ', index.h("wa-badge", { key: '091fe71346fc86f8ee8a70e11f5df9f26869ad3a', variant: "brand", "aria-label": t.t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [number.formatCount(this.payments.length)] }) }, number.formatCount(this.payments.length)))), index.h("p", { key: 'ef4054941b214852a06be5f3479557595e693a93', class: "ir-revenue-row__total" }, number.formatAmount(calendarData.calendar_data.currency.symbol, total))), index.h("div", { key: '3259ad0dbf6222a2657c3c33ecf4469b3945c831', class: "ir-revenue-row__details", id: this.contentId }, index.h("div", { key: 'fc5dc146f6aee7a2dae6fa2f329b298032fb59e7', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (index.h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
};
IrRevenueRow.style = irRevenueRowCss();

const irRevenueSummaryCss = () => `.sc-ir-revenue-summary-h{display:block}.revenue-summary__row.sc-ir-revenue-summary{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.revenue-summary__metric.sc-ir-revenue-summary{flex:1}@media (min-width: 768px){.revenue-summary__row.sc-ir-revenue-summary{flex-direction:row}}`;

const IrRevenueSummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    filters;
    groupedPayments = new Map();
    previousDateGroupedPayments = new Map();
    paymentEntries;
    calculateTotalPayments(groupedPayments) {
        let total = 0;
        groupedPayments.forEach((value, key) => {
            if (key.split('_')[0] === '001') {
                total += this.calculateTotalValue(value);
            }
        });
        return total;
    }
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
        const totalAmount = paymentsTotal + refundAmount;
        const previousDatePaymentsTotal = this.calculateTotalPayments(this.previousDateGroupedPayments);
        const previousDateRefundAmount = this.calculateTotalRefunds(this.previousDateGroupedPayments);
        const previousDateTotalAmount = previousDatePaymentsTotal + previousDateRefundAmount;
        const hasPrevious = Boolean(this.filters?.date && this.previousDateGroupedPayments?.size > 0);
        return (index.h(index.Host, { key: 'd98fb35efea8d5b3c4d9aa14220cab0fe2ecb76f' }, index.h("div", { key: '7ac0980acd3c6bf3037bc0a2975dbb8473df5a60', class: "revenue-summary__row" }, index.h("ir-metric-card", { key: 'a125fb363bd5b99a62dcb7466e26a6a3ba2378c2', class: "revenue-summary__metric", icon: "arrow-trend-up", label: t.t('Lcz_Payments', { fallback: 'Payments' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), trend: hasPrevious ? utils.calculateTrend(paymentsTotal, previousDatePaymentsTotal) : undefined, trendLabel: t.t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t.t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, previousDatePaymentsTotal)}` : undefined }), index.h("ir-metric-card", { key: 'ed36025fdbaf593a7cc82e9e0241d1add4262e86', class: "revenue-summary__metric", icon: "arrow-trend-down", label: t.t('Lcz_Refunds', { fallback: 'Refunds' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount), trend: hasPrevious ? utils.calculateTrend(refundAmount, previousDateRefundAmount) : undefined, trendLabel: t.t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), invertTrend: true, caption: hasPrevious ? `${t.t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, previousDateRefundAmount)}` : undefined }), index.h("ir-metric-card", { key: '77072cdf1974ae06c68d52d85046addd99b37609', class: "revenue-summary__metric", icon: this.getTrendIcon(totalAmount, previousDateTotalAmount) ?? 'money-bill', label: t.t('Lcz_NetTotal', { fallback: 'Net Total' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, totalAmount), trend: hasPrevious ? utils.calculateTrend(totalAmount, previousDateTotalAmount) : undefined, trendLabel: t.t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t.t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, previousDateTotalAmount)}` : undefined }))));
    }
};
IrRevenueSummary.style = irRevenueSummaryCss();

const irRevenueTableCss = () => `.sc-ir-revenue-table-h{overflow-x:hidden}.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table{background:var(--wa-color-surface-default);border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal);color:var(--wa-color-text-normal)}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-weight:700}.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{font-size:var(--wa-font-size-m);font-weight:600}.revenue-table__method_header.sc-ir-revenue-table{color:var(--wa-color-text-normal)}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}.revenue-table__table.sc-ir-revenue-table::part(body),.revenue-table__table.sc-ir-revenue-table [part~="body"]{padding:0.5rem}.revenue-table__empty-wrapper.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;min-height:50vh}.revenue-table__type-group.sc-ir-revenue-table{padding:0 0.25rem}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem + 1rem)}}`;

const IrRevenueTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    payments = new Map();
    paymentEntries;
    filters;
    payTypesObj;
    payMethodObj;
    groupType = 'method';
    // Rebuilt on every render so labels follow the selected language.
    buildPaymentLookups() {
        const buildPaymentLookup = (key) => {
            let pt = {};
            this.paymentEntries[key].forEach(p => {
                pt = { ...pt, [p.CODE_NAME]: utils$1.getSetupEntryLabel(p) };
            });
            return pt;
        };
        this.payTypesObj = buildPaymentLookup('types');
        this.payMethodObj = buildPaymentLookup('methods');
    }
    /**
     * Groups payments by method, then by type.
     * - Never throws on bad input (null/undefined, non-Map, malformed keys, non-array values).
     * - Keys are parsed defensively; unknown parts fall back to "UNKNOWN".
     */
    sortByDateTime(list) {
        return [...list].sort((a, b) => {
            const dateCmp = a.date.localeCompare(b.date);
            if (dateCmp !== 0)
                return dateCmp;
            if (a.hour !== b.hour)
                return a.hour - b.hour;
            return a.minute - b.minute;
        });
    }
    regroupPaymentsByMethod() {
        const result = new Map();
        // Early return on empty/invalid source
        const src = this.payments;
        if (!(src instanceof Map) || src.size === 0)
            return result;
        // Helper: parse "TYPE_METHOD" into [type, method] safely
        const parseKey = (key) => {
            if (typeof key !== 'string')
                return ['UNKNOWN', 'UNKNOWN'];
            // Allow extra underscores on the method side: TYPE_METHOD_WITH_UNDERSCORES
            const [type, ...rest] = key.split('_');
            const method = rest.join('_');
            const safeType = (type && type.trim()) || 'UNKNOWN';
            const safeMethod = (method && method.trim()) || 'UNKNOWN';
            return [safeType, safeMethod];
        };
        for (const [rawKey, rawList] of src.entries()) {
            const [paymentType, paymentMethod] = parseKey(rawKey);
            // Normalize value to a clean array of FolioPayment
            const list = Array.isArray(rawList) ? rawList.filter(Boolean) : [];
            // Skip silently if nothing to add
            if (list.length === 0) {
                // Still ensure the buckets exist so consumers can rely on them if needed
                if (!result.has(paymentMethod))
                    result.set(paymentMethod, new Map());
                if (!result.get(paymentMethod).has(paymentType)) {
                    result.get(paymentMethod).set(paymentType, []);
                }
                continue;
            }
            const typeMap = result.get(paymentMethod) ?? new Map();
            const existing = typeMap.get(paymentType) ?? [];
            typeMap.set(paymentType, existing.concat(list));
            result.set(paymentMethod, typeMap);
        }
        return result;
    }
    render() {
        this.buildPaymentLookups();
        const hasPayments = this.payments instanceof Map && this.payments.size > 0;
        return (index.h("wa-card", { key: '6e424dca0c3ed9914c4ef8bbecd0710d2d7e0db3', class: "revenue-table__table" }, hasPayments ? (index.h(index.Fragment, null, index.h("div", { class: "revenue-table__header" }, index.h("p", null, t.t('Lcz_Method', { fallback: 'Method' })), index.h("p", null, t.t('Lcz_Amount', { fallback: 'Amount' }))), this.groupType === 'type' &&
            Array.from(this.payments.entries()).map(([key, list]) => {
                list = this.sortByDateTime(list);
                const [paymentType, paymentMethod] = key.split('_');
                const groupName = global_variables.PAYMENT_TYPES_WITH_METHOD.includes(paymentType)
                    ? `${this.payTypesObj[paymentType] ?? paymentType}: ${this.payMethodObj[paymentMethod] ?? paymentMethod}`
                    : (this.payTypesObj[paymentType] ?? paymentType);
                return index.h("ir-revenue-row", { key: key, payments: list, groupName: groupName });
            }), this.groupType === 'method' &&
            Array.from(this.regroupPaymentsByMethod().entries()).flatMap(([methodKey, byType]) => {
                const total = Array.from(byType.entries()).reduce((prev, [_, list]) => prev + list.reduce((p, c) => p + c.amount, 0), 0);
                return (index.h("div", { key: `method_${methodKey}` }, index.h("div", { class: "revenue-table__method_header" }, index.h("p", null, this.payMethodObj[methodKey] ?? (methodKey === 'UNKNOWN' ? t.t('Lcz_Unknown', { fallback: 'Unknown' }) : methodKey)), index.h("p", null, number.formatAmount(calendarData.calendar_data.currency.symbol, total))), Array.from(byType.entries()).map(([typeKey, list]) => {
                    list = this.sortByDateTime(list);
                    const groupName = global_variables.PAYMENT_TYPES_WITH_METHOD.includes(typeKey) ? `${this.payTypesObj[typeKey] ?? typeKey}` : (this.payTypesObj[typeKey] ?? typeKey);
                    return (index.h("div", { key: `type_${typeKey}`, class: "revenue-table__type-group" }, index.h("ir-revenue-row", { payments: list, groupName: groupName })));
                })));
            }))) : (index.h("div", { class: "revenue-table__empty-wrapper" }, index.h("ir-empty-state", { message: t.t('Lcz_NoPaymentTransactionsForDate', { fallback: 'There are no payment transactions recorded for the selected date.' }) })))));
    }
};
IrRevenueTable.style = irRevenueTableCss();

exports.ir_daily_revenue_filters = IrDailyRevenueFilters;
exports.ir_revenue_row = IrRevenueRow;
exports.ir_revenue_summary = IrRevenueSummary;
exports.ir_revenue_table = IrRevenueTable;
