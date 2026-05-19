import { r as registerInstance, c as createEvent, h, g as getElement, H as Host, F as Fragment } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-cb784e95.js';
import { f as formatAmount } from './utils-177fc6a4.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { P as PAYMENT_TYPES_WITH_METHOD } from './global.variables-caf00b1d.js';
import './index-f100e9d2.js';
import './index-87419685.js';
import './type-e34653d3.js';

const irDailyRevenueFiltersCss = ".sc-ir-daily-revenue-filters-h{display:block}.revenue-filter__date-picker-icon.sc-ir-daily-revenue-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-daily-revenue-filters-h{display:block;height:100%}.or-divider.sc-ir-daily-revenue-filters{display:flex;align-items:center;gap:0.5rem;margin:1rem 0}.or-divider__line.sc-ir-daily-revenue-filters{flex:1;height:1px;background-color:#dee2e6}.or-divider__text.sc-ir-daily-revenue-filters{font-size:0.75rem;color:#6c757d;white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}@media (min-width: 768px){.sc-ir-daily-revenue-filters-h{width:300px}.collapse-btn.sc-ir-daily-revenue-filters{display:none}#dailyRevenueFiltersCollapse.collapse.sc-ir-daily-revenue-filters:not(.show){display:block}}";
const IrDailyRevenueFiltersStyle0 = irDailyRevenueFiltersCss;

const IrDailyRevenueFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fetchNewReports = createEvent(this, "fetchNewReports", 7);
    }
    payments;
    isLoading;
    collapsed = false;
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
        return (h("div", { key: '72263d124d24aadbd5e3fc13f4648a30e3c5391d', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '8e6ebd4118b7c5e6fc663eaf713ccd8a9ff9758b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'c2550ad628bc52e4191f9f644d5f61dda782d941', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '192577769f6674a34671401642611e7b7a10eeb8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'e1f1a63003eab3596de48f34f9c43a42372ee808', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '349d057f47e590ea89bb63a9bc195678c286f77c', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '25ef9a096b87578e42cd46e530247d9c54b24dc0', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'd2acd18e9d13e6f1095be2b0ded37e072a0e0423', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, h("div", { key: '7e61ac22db404e8a22211a00cb4b50beaedd758a', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '0a3ad2d2a76f66ce5c6cebad85308b0495389d9d', class: "pt-1 filter-group" }, h("label", { key: '718e7d22a0187a65f91c6aa58ca847191b8cf03b', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: 'ac5602a32d2d43c08abb4f643a9c0d339c4d58d7', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'b740c233c2422582a6cbe40b10dfd1e5c442ab61', selectedValue: this.filters?.date?.toString(), onSelectChange: e => {
                const value = e.detail;
                this.updateFilter({
                    date: value,
                    to_date: value,
                    from_date: value,
                });
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: this.getLast30Days() }), h("p", { key: 'e32d3dadcb3d8ef3e28f2b487e15d498c2c38b26', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'af192afab6c81907ee1a0e0a9bcdfbfa3f2fdcdd', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                let params = {
                    from_date: fromDate.format('YYYY-MM-DD'),
                    to_date: toDate.format('YYYY-MM-DD'),
                };
                if (wasFocused) {
                    params = { ...params, date: null };
                }
                this.updateFilter(params);
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: hooks(this.filters?.from_date, 'YYYY-MM-DD'), toDate: hooks(this.filters?.to_date, 'YYYY-MM-DD'), maxDate: hooks().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'e066c850df8c9edd7ed5a005bb0ffd0225d56889', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '80811176fc9afa66d1461e1b8f47dc25ffc2ae40', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'ed503ec1d7d0a526af66016d11c2dda99ee7cf0c', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get watchers() { return {
        "payments": ["handlePaymentChange"]
    }; }
};
IrDailyRevenueFilters.style = IrDailyRevenueFiltersStyle0;

const irRevenueRowCss = ".sc-ir-revenue-row-h{--ir-border:#e5e7eb}.ir-revenue-row__accordion.sc-ir-revenue-row::part(base),.ir-revenue-row.sc-ir-revenue-row{border:0;border-radius:0;border-bottom:1px solid var(--ir-border, #e5e7eb);background:#fff;padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:0.5rem;background:transparent;border:0;padding:0;cursor:pointer;text-align:left;width:100%;justify-content:space-between;padding:0.5rem;color:rgb(83, 83, 83)}.ir-revenue-row__title.sc-ir-revenue-row{padding:0}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:0.5rem}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):hover{background:#f4f5fa}.ir-revenue-row__group.sc-ir-revenue-row{margin:0}.ir-revenue-row__badge.sc-ir-revenue-row{background:lightgray;border-radius:0.25rem;font-size:0.75rem;padding:0 0.5rem;margin-left:0.375rem}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__accordion.sc-ir-revenue-row::part(content){padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}@media (min-width: 1024px){.ir-revenue-row__header-left.sc-ir-revenue-row{width:40vw}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{justify-content:flex-start}}";
const IrRevenueRowStyle0 = irRevenueRowCss;

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
        return (h(Host, { key: '63a2686be8886b91df2a318e09bb13484b3a469a' }, h("ir-accordion", { key: '7d88fcec1e61be0603f0de57ed43bed3e520f9bf', class: "ir-revenue-row__accordion" }, h("div", { key: '90b247ff64694da21915e380fbf9dbaea7247be7', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'd74492d85e6b36bc8ff79950fc9e07f75aebc87a', class: "ir-revenue-row__header-left" }, h("p", { key: '9ebe64e5b50b604bae66d953306dc566879e3ea7', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'efc54a22e72f05842363a18b4f6f81cf7be8cf26', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '17cdc4613d865888bd4dfac831cee48c00298248', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '9eafc484c4de17c50b46d683484b9df7af91270c', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'eee28260c46229b5816cbb432220082bb380b270', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
};
IrRevenueRow.style = IrRevenueRowStyle0;

const irRevenueSummaryCss = ".ir-revenue-summary__mobile.sc-ir-revenue-summary{display:flex;align-items:center;gap:1rem}.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:none;grid-template-columns:repeat(3, 1fr);gap:1rem}.stats-card__payments-value.sc-ir-revenue-summary{padding:0;margin:0;color:#629a4c}.stats-card__refund-value.sc-ir-revenue-summary{padding:0;margin:0;color:#ff4961}@media (min-width: 768px){.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:grid}.ir-revenue-summary__mobile.sc-ir-revenue-summary{display:none}}";
const IrRevenueSummaryStyle0 = irRevenueSummaryCss;

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
        const totalAmount = paymentsTotal + refundAmount;
        const previousDatePaymentsTotal = this.calculateTotalPayments(this.previousDateGroupedPayments);
        const previousDateRefundAmount = this.calculateTotalRefunds(this.previousDateGroupedPayments);
        const previousDateTotalAmount = previousDatePaymentsTotal + previousDateRefundAmount;
        return (h(Host, { key: 'b7f37ea8b27254a0d2e54dc83c1aa30493406efb' }, h("div", { key: 'e5fb1af6eccca003aed9ef716c9122a1d73b3e1e', class: "ir-revenue-summary__mobile" }, h("ir-stats-card", { key: '15a558c7cd99a55fb29e277cd5e5ebcdbdf50d7b', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, h("p", { key: '34d33aea9589c23dc5604915e76dcf0d6d4e3c05', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '8c2e1c86b6157ddd0bfea7b804e5e609cf0f688d', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, h("p", { key: 'db378eff229d7895357369717b22bca68ba9e2c7', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount)))), h("div", { key: 'ed3a48f420a3b7c917d39f831f342aef28d13359', class: "ir-revenue-summary__tablet" }, h("ir-stats-card", { key: '1701ada91c8081f1bc07c759b78057dfb8146819', icon: 'arrow-trend-up', value: formatAmount(calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDatePaymentsTotal)}` : '' }, h("p", { key: '83496cef32f0b54fc92add8e69c362719d4665a1', class: "stats-card__payments-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, paymentsTotal))), h("ir-stats-card", { key: '7cffbcb3330df9b7c0dfe236d258f7f314e9ef10', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateRefundAmount)}` : '' }, h("p", { key: '5fa3ef1b885344e6e512d56b394abae152c6fe7d', class: "stats-card__refund-value", slot: "value" }, formatAmount(calendar_data.currency.symbol, refundAmount))), h("ir-stats-card", { key: '9633330b762c01456fd759e345fef7b734c89f40', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: formatAmount(calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: this.filters?.date ? `Previous day  ${formatAmount(calendar_data.currency.symbol, previousDateTotalAmount)}` : '' }))));
    }
};
IrRevenueSummary.style = IrRevenueSummaryStyle0;

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table{background:#ececec;color:#374151}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__method_header.sc-ir-revenue-table{color:black}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem + 1rem)}}";
const IrRevenueTableStyle0 = irRevenueTableCss;

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
        return (h("div", { key: '9efcbe7173acbeb2b5776783c6567f5f0a375057', class: "card p-1 revenue-table__table" }, hasPayments ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), this.groupType === 'type' &&
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
                    return (h("div", { key: `type_${typeKey}`, class: "px-1" }, h("ir-revenue-row", { payments: list, groupName: groupName })));
                })));
            }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
};
IrRevenueTable.style = IrRevenueTableStyle0;

export { IrDailyRevenueFilters as ir_daily_revenue_filters, IrRevenueRow as ir_revenue_row, IrRevenueSummary as ir_revenue_summary, IrRevenueTable as ir_revenue_table };

//# sourceMappingURL=ir-daily-revenue-filters_4.entry.js.map