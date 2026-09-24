import { r as registerInstance, c as createEvent, h, a as getElement, H as Host, F as Fragment } from './index-CeHdrJeH.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { f as formatDate } from './ir-date-BngUhoPp.js';
import { t } from './t-Bk78Wumj.js';
import { b as formatCount, f as formatAmount } from './number-DpPJHVo2.js';
import { c as calendar_data } from './calendar-data-CiYzaNK0.js';
import { u as calculateTrend } from './utils-CNQuD3ma.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables-34GsmACS.js';
import './booking.dto-xX-uaIxb.js';
import './locales.store-CXJn6ls-.js';
import { d as getSetupEntryLabel } from './utils-DZNfUvEs.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './types-BWKgfE54.js';
import './type-DahsFfOq.js';
import './IBooking-BEkHqAPo.js';

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
            const label = i === 0 ? t('Lcz_Today', { fallback: 'Today' }) : formatDate(date, 'MMM DD, YYYY');
            return { text: label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (h("ir-filter-card", { key: '94e596ec17e36a4551276b8f5444cdc8efda057a' }, h("wa-select", { key: '48abe5ddfcfdabd30540a84eff23b68800b03bef', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.filters?.date?.toString(), defaultValue: this.filters?.date?.toString(), onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: value, to_date: value, from_date: value });
            } }, this.getLast30Days().map(({ text, value }) => (h("wa-option", { key: value, value: value }, text)))), h("div", { key: '89ec38550d86b15077fec4fd6d67ffdc654f39db', class: "or-divider" }, h("span", { key: '425779cd254e02805ba0edde6cc7fdc4815d988f', class: "or-divider__line" }), h("span", { key: 'c5c61d4ac7986949157a546fbff6ca21f5fb68d8', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: '44cd9c8e530b4482cb9ba22ab50f5ced5fd4c94b', class: "or-divider__line" })), h("ir-date-range-filter", { key: 'c1c09c67b5c622b4bced8e9794894eb58471a6a0', showQuickActions: false, label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.from_date, toDate: this.filters?.to_date, selectionMode: "auto", withClear: false, maxDate: hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ from_date: from, to_date: to, date: null });
            } }), h("div", { key: 'e52d896a714d1f6ea20afe96c8d97caa7398dea0', slot: "footer" }, h("ir-custom-button", { key: '6dfd0621c73e65d83b0c62939d802f895c27b9df', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '32ae0cbdfdaa15d11e3678129e0933711e23cc38', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
        return (h(Host, { key: 'd781c07c4f8c5a11cbf472b73483a071bc179796' }, h("ir-accordion", { key: '6ea302fa5104669cfbf9b696a81f473cacd810b0', class: "ir-revenue-row__accordion" }, h("div", { key: '54056163dafe66f8cceafcf33fca272a23dfebb2', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'af36a508af9fece6b68eb28f833a9a3bd17e9203', class: "ir-revenue-row__header-left" }, h("p", { key: 'd539c44c01a0b0b6e78cc8155deeb0d0a6eeeeee', class: "ir-revenue-row__group" }, this.groupName, ' ', h("wa-badge", { key: 'bb58c08c03690ed9a39771569f473dff180d0cac', variant: "brand", "aria-label": t('Lcz_TransactionsCountAriaLabel', { fallback: '%1 transactions', params: [formatCount(this.payments.length)] }) }, formatCount(this.payments.length)))), h("p", { key: 'ccc58333d9ef29b7186b978a02cbbbb8ca8c6a17', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '61a6905e69a98f89418e331268d8dba0983b9cb6', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'ad2ef3b2726c6a35bdd15703ad1cc23b9537b9a1', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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
        return (h(Host, { key: '1908e1d6a3024f4664f69ac5d68f29bfcf67363c' }, h("div", { key: 'c8db7145a44296daef47ceea1290762cc67d5941', class: "revenue-summary__row" }, h("ir-metric-card", { key: '18769b81c16e38512d1cee7be9c3de3a2b719829', class: "revenue-summary__metric", icon: "arrow-trend-up", label: t('Lcz_Payments', { fallback: 'Payments' }), value: formatAmount(calendar_data.currency.symbol, paymentsTotal), trend: hasPrevious ? calculateTrend(paymentsTotal, previousDatePaymentsTotal) : undefined, trendLabel: t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` : undefined }), h("ir-metric-card", { key: '89772c3ea94317130f6e746267e7c48c6cf6f984', class: "revenue-summary__metric", icon: "arrow-trend-down", label: t('Lcz_Refunds', { fallback: 'Refunds' }), value: formatAmount(calendar_data.currency.symbol, refundAmount), trend: hasPrevious ? calculateTrend(refundAmount, previousDateRefundAmount) : undefined, trendLabel: t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), invertTrend: true, caption: hasPrevious ? `${t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` : undefined }), h("ir-metric-card", { key: '7c00945d11cb718381a7e7d8cc286477111a09f9', class: "revenue-summary__metric", icon: this.getTrendIcon(totalAmount, previousDateTotalAmount) ?? 'money-bill', label: t('Lcz_NetTotal', { fallback: 'Net Total' }), value: formatAmount(calendar_data.currency.symbol, totalAmount), trend: hasPrevious ? calculateTrend(totalAmount, previousDateTotalAmount) : undefined, trendLabel: t('Lcz_FromPreviousDay', { fallback: 'from previous day' }), caption: hasPrevious ? `${t('Lcz_PreviousDay', { fallback: 'Previous day:' })} ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` : undefined }))));
    }
};
IrRevenueSummary.style = irRevenueSummaryCss();

const irRevenueTableCss = () => `.sc-ir-revenue-table-h{overflow-x:hidden}.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table{background:var(--wa-color-surface-default);border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal);color:var(--wa-color-text-normal)}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-weight:700}.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{font-size:var(--wa-font-size-m);font-weight:600}.revenue-table__method_header.sc-ir-revenue-table{color:var(--wa-color-text-normal)}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}.revenue-table__table.sc-ir-revenue-table::part(body),.revenue-table__table.sc-ir-revenue-table [part~="body"]{padding:0.5rem}.revenue-table__empty-wrapper.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;min-height:50vh}.revenue-table__type-group.sc-ir-revenue-table{padding:0 0.25rem}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem + 1rem)}}`;

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
    // Rebuilt on every render so labels follow the selected language.
    buildPaymentLookups() {
        const buildPaymentLookup = (key) => {
            let pt = {};
            this.paymentEntries[key].forEach(p => {
                pt = { ...pt, [p.CODE_NAME]: getSetupEntryLabel(p) };
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
        return (h("wa-card", { key: 'e49bf2385f9d14952dbd55ead8ead03bc07e6a99', class: "revenue-table__table" }, hasPayments ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, t('Lcz_Method', { fallback: 'Method' })), h("p", null, t('Lcz_Amount', { fallback: 'Amount' }))), this.groupType === 'type' &&
            Array.from(this.payments.entries()).map(([key, list]) => {
                list = this.sortByDateTime(list);
                const [paymentType, paymentMethod] = key.split('_');
                const groupName = PAYMENT_TYPES_WITH_METHOD.includes(paymentType)
                    ? `${this.payTypesObj[paymentType] ?? paymentType}: ${this.payMethodObj[paymentMethod] ?? paymentMethod}`
                    : (this.payTypesObj[paymentType] ?? paymentType);
                return h("ir-revenue-row", { key: key, payments: list, groupName: groupName });
            }), this.groupType === 'method' &&
            Array.from(this.regroupPaymentsByMethod().entries()).flatMap(([methodKey, byType]) => {
                const total = Array.from(byType.entries()).reduce((prev, [_, list]) => prev + list.reduce((p, c) => p + c.amount, 0), 0);
                return (h("div", { key: `method_${methodKey}` }, h("div", { class: "revenue-table__method_header" }, h("p", null, this.payMethodObj[methodKey] ?? methodKey), h("p", null, formatAmount(calendar_data.currency.symbol, total))), Array.from(byType.entries()).map(([typeKey, list]) => {
                    list = this.sortByDateTime(list);
                    const groupName = PAYMENT_TYPES_WITH_METHOD.includes(typeKey) ? `${this.payTypesObj[typeKey] ?? typeKey}` : (this.payTypesObj[typeKey] ?? typeKey);
                    return (h("div", { key: `type_${typeKey}`, class: "revenue-table__type-group" }, h("ir-revenue-row", { payments: list, groupName: groupName })));
                })));
            }))) : (h("div", { class: "revenue-table__empty-wrapper" }, h("ir-empty-state", { message: t('Lcz_NoPaymentTransactionsForDate', { fallback: 'There are no payment transactions recorded for the selected date.' }) })))));
    }
};
IrRevenueTable.style = irRevenueTableCss();

export { IrDailyRevenueFilters as ir_daily_revenue_filters, IrRevenueRow as ir_revenue_row, IrRevenueSummary as ir_revenue_summary, IrRevenueTable as ir_revenue_table };
