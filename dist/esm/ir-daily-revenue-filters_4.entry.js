import { r as registerInstance, c as createEvent, h, a as getElement, H as Host, F as Fragment } from './index-BvoylR5O.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as locales } from './locales.store-BZFQn8-s.js';
import { i as formatAmount } from './utils-DE70XlzV.js';
import { c as calendar_data } from './calendar-data-Cnv5ncgJ.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables-34GsmACS.js';
import './index-U7zaiBri.js';
import './index-DeW5X45W.js';
import './type-D7rOPtKA.js';

const irDailyRevenueFiltersCss = () => `.sc-ir-daily-revenue-filters-h{display:block}.or-divider.sc-ir-daily-revenue-filters{display:flex;align-items:center;gap:0.5rem}.or-divider__line.sc-ir-daily-revenue-filters{flex:1;height:1px;background-color:var(--wa-color-surface-border, #dee2e6)}.or-divider__text.sc-ir-daily-revenue-filters{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #6c757d);white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}`;

const IrDailyRevenueFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchNewReports = createEvent(this, "fetchNewReports");
    }
    payments;
    isLoading;
    users = new Set();
    filters;
    baseFilters = {
        date: hooks().format('YYYY-MM-DD'),
        from_date: hooks().format('YYYY-MM-DD'),
        to_date: hooks().format('YYYY-MM-DD'),
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
    getLast30Days() {
        return Array.from({ length: 30 }, (_, i) => {
            const date = hooks().subtract(i, 'days');
            const label = i === 0 ? 'Today' : date.format('MMM DD, YYYY');
            return { text: label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (h("ir-filter-card", { key: 'f7f7ee0d02cdaa3bafa34149cffde1d66a6dc83f' }, h("wa-select", { key: 'f99bd132839bf90af0f81eb3ca257a692fb4c1cd', label: "Selected period", size: "s", value: this.filters?.date?.toString(), defaultValue: this.filters?.date?.toString(), onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: value, to_date: value, from_date: value });
            } }, this.getLast30Days().map(({ text, value }) => (h("wa-option", { key: value, value: value }, text)))), h("div", { key: '9899fa9e7af60fd55bc65096f7a07643a4f0d287', class: "or-divider" }, h("span", { key: '8e1556b04b580ac7b45e2b8390510666ca77f5db', class: "or-divider__line" }), h("span", { key: '1da0eaaec29cc37b94f37ed1da1c4c8e89366dd5', class: "or-divider__text" }, "Or"), h("span", { key: '0f5dcc2340f83636c3e9439b73563ac9fbf6534a', class: "or-divider__line" })), h("ir-date-range-filter", { key: '683ef308d8151e0eea6d0716b492ff5f2fcdf34a', showQuickActions: false, label: "Date range", fromDate: this.filters?.from_date, toDate: this.filters?.to_date, selectionMode: "auto", withClear: false, maxDate: hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ from_date: from, to_date: to, date: null });
            } }), h("div", { key: 'd1aa1554242d938dfe492bb7b7ae2236d5461537', slot: "footer" }, h("ir-custom-button", { key: 'b72124c5dbd06d37a0015d341bda659ac8c5e2f7', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales.entries?.Lcz_Reset ?? 'Reset'), h("ir-custom-button", { key: '3185161d5991eace702f778d69307b7ea265438a', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales.entries?.Lcz_Apply ?? 'Apply'))));
    }
    static get watchers() { return {
        "payments": [{
                "handlePaymentChange": 0
            }]
    }; }
};
IrDailyRevenueFilters.style = irDailyRevenueFiltersCss();

const irRevenueRowCss = () => `.sc-ir-revenue-row-h{--ir-border:var(--wa-color-surface-border)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(base),.ir-revenue-row__accordion.sc-ir-revenue-row [part~="base"],.ir-revenue-row.sc-ir-revenue-row{border:0;border-radius:0;border-bottom:1px solid var(--ir-border, #e5e7eb);padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__accordion.sc-ir-revenue-row [part~="trigger"],.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:0.5rem;background:transparent;border:0;padding:0;cursor:pointer;text-align:left;width:100%;justify-content:space-between;padding:0.5rem;color:var(--wa-color-text-normal);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.ir-revenue-row__title.sc-ir-revenue-row{padding:0}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:0.5rem}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):hover,.ir-revenue-row__accordion.sc-ir-revenue-row [part~="trigger"]:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):active,.ir-revenue-row__accordion.sc-ir-revenue-row [part~="trigger"]:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.ir-revenue-row__group.sc-ir-revenue-row{margin:0}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__accordion.sc-ir-revenue-row::part(content),.ir-revenue-row__accordion.sc-ir-revenue-row [part~="content"]{padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}@media (min-width: 1024px){.ir-revenue-row__header-left.sc-ir-revenue-row{width:40.77vw}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{justify-content:flex-start}}`;

let accId = 0;
const IrRevenueRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get host() { return getElement(this); }
    /** Array of payments for this method group */
    payments = [];
    /** Group display name (e.g., "Credit Card") */
    groupName;
    contentId = `ir-rr-content-${++accId}`;
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: 'd1cb104eab79f754617b4f85758d29827a0ad42d' }, h("ir-accordion", { key: '880b55ad98fde1687acbee3720c0c395e4e09270', class: "ir-revenue-row__accordion" }, h("div", { key: 'daab2013b0f8cb7019f710bd5fc412c0c8797e5c', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'a35dd9a81ede77ed664c4f9c00197a91bc90a780', class: "ir-revenue-row__header-left" }, h("p", { key: 'cfc31a9dc5ea38c03ed541905f70fb33326ffa3f', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: 'e7106767edb7f2d3153797f8770aa45c5c16dbb9', variant: "brand", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: 'a9b2713fcc1dbdadf451f7da0178304ee82ac577', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '83bb91ea4c114fd7f369af476748b4ad4b646a34', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'b1e664982df3336d188b8a27ffdb74f8b34c5eb2', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
};
IrRevenueRow.style = irRevenueRowCss();

const irRevenueSummaryCss = () => `.sc-ir-revenue-summary-h{display:block}.revenue-summary__row.sc-ir-revenue-summary{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.revenue-summary__metric.sc-ir-revenue-summary{flex:1}@media (min-width: 768px){.revenue-summary__row.sc-ir-revenue-summary{flex-direction:row}}`;

const IrRevenueSummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '337856fc08ecc1e773d24fafb74c223333fe869c' }, h("div", { key: 'db954e929ea04e2bf481efe5467438be0761528c', class: "revenue-summary__row" }, h("ir-metric-card", { key: 'f8ddca41e79dede0ee1e04645867a7a470df6666', class: "revenue-summary__metric", icon: "arrow-trend-up", label: "Payments", value: formatAmount(calendar_data.currency.symbol, paymentsTotal), trend: hasPrevious ? paymentsTotal - previousDatePaymentsTotal : undefined, trendLabel: "from previous day", caption: hasPrevious ? `Previous day: ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` : undefined }), h("ir-metric-card", { key: '15b34520f1a98936b3bec6350e9118d810f66e66', class: "revenue-summary__metric", icon: "arrow-trend-down", label: "Refunds", value: formatAmount(calendar_data.currency.symbol, refundAmount), trend: hasPrevious ? refundAmount - previousDateRefundAmount : undefined, trendLabel: "from previous day", invertTrend: true, caption: hasPrevious ? `Previous day: ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` : undefined }), h("ir-metric-card", { key: '36d9e6876fc594e2e7e623db084c2b00ba12de06', class: "revenue-summary__metric", icon: this.getTrendIcon(totalAmount, previousDateTotalAmount) ?? 'money-bill', label: "Net Total", value: formatAmount(calendar_data.currency.symbol, totalAmount), trend: hasPrevious ? totalAmount - previousDateTotalAmount : undefined, trendLabel: "from previous day", caption: hasPrevious ? `Previous day: ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` : undefined }))));
    }
};
IrRevenueSummary.style = irRevenueSummaryCss();

const irRevenueTableCss = () => `.sc-ir-revenue-table-h{overflow-x:hidden}.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table{background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet)}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__method_header.sc-ir-revenue-table{color:var(--wa-color-text-normal)}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}.revenue-table__empty-wrapper.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;min-height:50vh}.revenue-table__type-group.sc-ir-revenue-table{padding:0 0.25rem}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem + 1rem)}}`;

const IrRevenueTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    payments = new Map();
    paymentEntries;
    filters;
    payTypesObj;
    payMethodObj;
    groupType = 'method';
    componentWillLoad() {
        const buildPaymentLookup = (key) => {
            let pt = {};
            this.paymentEntries[key].forEach(p => {
                pt = { ...pt, [p.CODE_NAME]: p.CODE_VALUE_EN };
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
        const hasPayments = this.payments instanceof Map && this.payments.size > 0;
        return (h("wa-card", { key: '7e456d3fe4342e4d084510a7089c5cc7c86273d4', class: "revenue-table__table" }, hasPayments ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), this.groupType === 'type' &&
            Array.from(this.payments.entries()).map(([key, list]) => {
                list = this.sortByDateTime(list);
                const [paymentType, paymentMethod] = key.split('_');
                const groupName = PAYMENT_TYPES_WITH_METHOD.includes(paymentType)
                    ? `${this.payTypesObj[paymentType] ?? paymentType}: ${this.payMethodObj[paymentMethod] ?? paymentMethod}`
                    : this.payTypesObj[paymentType] ?? paymentType;
                return h("ir-revenue-row", { key: key, payments: list, groupName: groupName });
            }), this.groupType === 'method' &&
            Array.from(this.regroupPaymentsByMethod().entries()).flatMap(([methodKey, byType]) => {
                const total = Array.from(byType.entries()).reduce((prev, [_, list]) => prev + list.reduce((p, c) => p + c.amount, 0), 0);
                return (h("div", { key: `method_${methodKey}` }, h("div", { class: "revenue-table__method_header" }, h("p", null, this.payMethodObj[methodKey] ?? methodKey), h("p", null, formatAmount(calendar_data.currency.symbol, total))), Array.from(byType.entries()).map(([typeKey, list]) => {
                    list = this.sortByDateTime(list);
                    const groupName = PAYMENT_TYPES_WITH_METHOD.includes(typeKey) ? `${this.payTypesObj[typeKey] ?? typeKey}` : this.payTypesObj[typeKey] ?? typeKey;
                    return (h("div", { key: `type_${typeKey}`, class: "revenue-table__type-group" }, h("ir-revenue-row", { payments: list, groupName: groupName })));
                })));
            }))) : (h("div", { class: "revenue-table__empty-wrapper" }, h("ir-empty-state", { message: "There are no payment transactions recorded for the selected date." })))));
    }
};
IrRevenueTable.style = irRevenueTableCss();

export { IrDailyRevenueFilters as ir_daily_revenue_filters, IrRevenueRow as ir_revenue_row, IrRevenueSummary as ir_revenue_summary, IrRevenueTable as ir_revenue_table };
