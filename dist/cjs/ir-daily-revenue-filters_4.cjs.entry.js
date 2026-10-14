'use strict';

var index = require('./index-IDeZZwEK.js');
var moment = require('./moment-CdViwxPQ.js');
var irDate = require('./ir-date-Bjy8vNGm.js');
var t = require('./t-sd8HJHNy.js');
var number = require('./number-D6oFwIUn.js');
var calendarData = require('./calendar-data-DZk0v7WL.js');
var utils = require('./utils-CpEd8z_J.js');
var global_variables = require('./global.variables-BldIv7Je.js');
require('./booking.dto-CUSvGTvD.js');
require('./locales.store-D6DJIhoZ.js');
var utils$1 = require('./utils-DdTHrEYB.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./calendar-dates-BxDGM1ix.js');
require('./types-BVJQZ50e.js');
require('./type-Bj2x9EWc.js');
require('./IBooking-hDE_y33g.js');
require('./commonSchemas-D4iFLV5-.js');

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
        return (index.h("ir-filter-card", { key: '8e70f84d755c99e997b577d2082fb2528d96493c' }, index.h("wa-select", { key: 'ae8b88467eb8f77fcab7630386037d2f0b84771e', label: t.t('Lcz_Source', { fallback: 'Source' }), size: "s", value: this.filters?.source ?? '', defaultValue: this.filters?.source ?? '', onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ source: value || null });
            } }, index.h("wa-option", { key: '600125ecdc4e04b5d699e781f1e3b5c0430de755', value: "" }, t.t('Lcz_AllSources', { fallback: 'All sources' })), this.sources.map(({ label, value }) => (index.h("wa-option", { key: value, value: value }, label)))), index.h("wa-select", { key: '44bccdbf35c9df8bb2b01b14d53e1b814a0d5679', label: t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.filters?.date?.toString(), defaultValue: this.filters?.date?.toString(), onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: value, to_date: value, from_date: value });
            } }, this.getLast30Days().map(({ text, value }) => (index.h("wa-option", { key: value, value: value }, text)))), index.h("div", { key: 'fd20d21f52aac56d4f74f42a58e21d6f0a154a5b', class: "or-divider" }, index.h("span", { key: '8fcfebd104ab5e5c259fd470e73757bbac317874', class: "or-divider__line" }), index.h("span", { key: '25ebfe3a4d195aa24e3cf21d360da8cb6a7f1e25', class: "or-divider__text" }, t.t('Lcz_Or', { fallback: 'Or' })), index.h("span", { key: 'c916cb7c6d38ab0c2c655fa37da65f6926832255', class: "or-divider__line" })), index.h("ir-date-range-filter", { key: 'd538a5fbfd9f5e4c2ab8cbf8b52f6d6195ccf3a5', showQuickActions: false, label: t.t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.from_date, toDate: this.filters?.to_date, selectionMode: "auto", withClear: false, maxDate: moment.hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ from_date: from, to_date: to, date: null });
            } }), index.h("div", { key: '06afce67aaf6e246c210fb0a0f8e5ab46c4c9616', slot: "footer" }, index.h("ir-custom-button", { key: 'bd27db3a4fc6f9f8b5bba3c2770b92c71340fbb2', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: '2a26bcea621e413e71292ac01fb604d0ccc67b6d', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
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
        return (index.h(index.Host, { key: '614664d34e0b1569a62e0f7683f4259677437039' }, index.h("ir-accordion", { key: 'be431d0995570d53f87132f77a657a0095ae399b', class: "ir-revenue-row__accordion" }, index.h("div", { key: '37df77d74e7f2ccf0e4603bab6d0abb93b3e9ce1', slot: "trigger", class: "ir-revenue-row__title" }, index.h("div", { key: 'ede927f068b36a050f9ffaa900c46d140025fa03', class: "ir-revenue-row__header-left" }, index.h("p", { key: '036006711806ccfb58aa55e72bfcd82bb7da5b97', class: "ir-revenue-row__group" }, this.groupName, ' ', index.h("wa-badge", { key: '48b38aca4101dbb0b061a5b7f256ff73662b9cbb', variant: "brand", "aria-label": t.t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [number.formatCount(this.payments.length)] }) }, number.formatCount(this.payments.length)))), index.h("p", { key: '1edafcb30bb1e333a73119c9c6ae675f62d69652', class: "ir-revenue-row__total" }, number.formatAmount(calendarData.calendar_data.currency.symbol, total))), index.h("div", { key: '870235d1bd03b889b540d7463bed088560343498', class: "ir-revenue-row__details", id: this.contentId }, index.h("div", { key: '3af4c4e065ae6f0a540cdc9328b5fafd4edca301', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (index.h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
        return (index.h(index.Host, { key: 'cf9ebb8a0a33861970a990f1281428c397f3c5d0' }, index.h("div", { key: '401055b47f453c87643d2d0f59c98ab9985ae77b', class: "revenue-summary__row" }, index.h("ir-metric-card", { key: '6dfe42a7f02cfe29c40e44dc83bea31b08219d9b', class: "revenue-summary__metric", icon: "arrow-trend-up", label: t.t('Lcz_Payments', { fallback: 'Payments' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), trend: hasPrevious ? utils.calculateTrend(paymentsTotal, previousDatePaymentsTotal) : undefined, trendLabel: t.t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t.t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, previousDatePaymentsTotal)}` : undefined }), index.h("ir-metric-card", { key: 'fc21c4a9cd7f818073a2e15cb828a330071ea36b', class: "revenue-summary__metric", icon: "arrow-trend-down", label: t.t('Lcz_Refunds', { fallback: 'Refunds' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount), trend: hasPrevious ? utils.calculateTrend(refundAmount, previousDateRefundAmount) : undefined, trendLabel: t.t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), invertTrend: true, caption: hasPrevious ? `${t.t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, previousDateRefundAmount)}` : undefined }), index.h("ir-metric-card", { key: '30523571f28128de141918b1bc3667e35bee0da7', class: "revenue-summary__metric", icon: this.getTrendIcon(totalAmount, previousDateTotalAmount) ?? 'money-bill', label: t.t('Lcz_NetTotal', { fallback: 'Net Total' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, totalAmount), trend: hasPrevious ? utils.calculateTrend(totalAmount, previousDateTotalAmount) : undefined, trendLabel: t.t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t.t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, previousDateTotalAmount)}` : undefined }))));
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
        return (index.h("wa-card", { key: '4949a88b027e06105e5d6496ab560128a630eea6', class: "revenue-table__table" }, hasPayments ? (index.h(index.Fragment, null, index.h("div", { class: "revenue-table__header" }, index.h("p", null, t.t('Lcz_Method', { fallback: 'Method' })), index.h("p", null, t.t('Lcz_Amount', { fallback: 'Amount' }))), this.groupType === 'type' &&
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
