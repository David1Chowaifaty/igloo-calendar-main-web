'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-32be062a.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const global_variables = require('./global.variables-108c9c1e.js');
require('./index-fbf1fe1d.js');
require('./index-8bb117a0.js');
require('./type-53035218.js');

const irDailyRevenueFiltersCss = ".sc-ir-daily-revenue-filters-h{display:block}.revenue-filter__date-picker-icon.sc-ir-daily-revenue-filters{position:absolute;inset:0;left:0.75rem;display:flex;align-items:center;width:fit-content;transform:translateY(-0.15rem)}.sc-ir-daily-revenue-filters-h{display:block;height:100%}.or-divider.sc-ir-daily-revenue-filters{display:flex;align-items:center;gap:0.5rem;margin:1rem 0}.or-divider__line.sc-ir-daily-revenue-filters{flex:1;height:1px;background-color:#dee2e6}.or-divider__text.sc-ir-daily-revenue-filters{font-size:0.75rem;color:#6c757d;white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}@media (min-width: 768px){.sc-ir-daily-revenue-filters-h{width:300px}.collapse-btn.sc-ir-daily-revenue-filters{display:none}#dailyRevenueFiltersCollapse.collapse.sc-ir-daily-revenue-filters:not(.show){display:block}}";
const IrDailyRevenueFiltersStyle0 = irDailyRevenueFiltersCss;

const IrDailyRevenueFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.fetchNewReports = index.createEvent(this, "fetchNewReports", 7);
    }
    payments;
    isLoading;
    collapsed = false;
    users = new Set();
    filters;
    baseFilters = {
        date: moment.hooks().format('YYYY-MM-DD'),
        from_date: moment.hooks().format('YYYY-MM-DD'),
        to_date: moment.hooks().format('YYYY-MM-DD'),
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
            const date = moment.hooks().subtract(i, 'days');
            const label = i === 0 ? 'Today' : date.format('MMM DD, YYYY');
            return { text: label, value: date.format('YYYY-MM-DD') };
        });
    }
    render() {
        return (index.h("div", { key: 'fa02ea0fe364e3b8e9a394afe70fb26c7179d063', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'fe56b8c786f7a675eb948193eb4795b834851b10', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '1e39dc5102c18c2cdcbbae18fdc465618fbb297e', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '83e1cc6255ce8d7e2b00171f7bf5cb285636d9dd', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '0410fcfd673e1a9ec8578f6e3c87581c0653827a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '3a4b52f7011b85e86be8f0f11e06d4e009496b58', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries.Lcz_Filters)), index.h("ir-button", { key: '72a9420612a2c585192bf48b9a2980ad618ed152', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#dailyRevenueFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "dailyRevenueFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), index.h("div", { key: '5e1cbd2e3dc9e643dafedf32bbe8b82ae8a22a77', class: "m-0 p-0 collapse filters-section", id: "dailyRevenueFiltersCollapse" }, index.h("div", { key: '5572f9dfa0fc019fa520f2f79d8a735b012ba356', class: "d-flex flex-column", style: { gap: '0.5rem' } }, index.h("fieldset", { key: '41cd116c91a3a1c1b427331c8034734b12827360', class: "pt-1 filter-group" }, index.h("label", { key: '6b3b77509c457d836779c20ec7baaa97a1c77411', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), index.h("div", { key: 'fa1b5cf5069e502e9a538094190f8e53a6dcd39a', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, index.h("ir-select", { key: '311875696ef5a841ce64936549f6bc1c683a3f76', selectedValue: this.filters?.date?.toString(), onSelectChange: e => {
                const value = e.detail;
                this.updateFilter({
                    date: value,
                    to_date: value,
                    from_date: value,
                });
            }, selectId: "period",
            // showFirstOption={false}
            firstOption: "...", data: this.getLast30Days() }), index.h("p", { key: '673dc77cfbd14d8f5fe24cdfca475d3232fac40b', class: "m-0 p-0 text-center" }, "Or"), index.h("ir-range-picker", { key: '755efaab9bb9e3aebb5a2d4975a839b34b8aa602', onDateRangeChanged: e => {
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
            }, fromDate: moment.hooks(this.filters?.from_date, 'YYYY-MM-DD'), toDate: moment.hooks(this.filters?.to_date, 'YYYY-MM-DD'), maxDate: moment.hooks().format('YYYY-MM-DD'), withOverlay: false }))), index.h("div", { key: '681d96ec07fdc4ed68e2884704190544d2980575', class: "d-flex mt-1 align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'dffca1145741606e6980548cdc9c09d99809812c', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '893944ce0c5d50f83a1a99f162af66b3f16141be', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
        return (index.h(index.Host, { key: 'ca07c8837d456c14fd70fabc647dd9df4084ff62' }, index.h("ir-accordion", { key: 'd82b76636e3931ee01bbd5ef734d4a2670d2df3c', class: "ir-revenue-row__accordion" }, index.h("div", { key: 'fa2e11c90031b1ec94df94dc506fa321e610a971', slot: "trigger", class: "ir-revenue-row__title" }, index.h("div", { key: '34fb68e983f9f451529e0d27e11c00e438176b83', class: "ir-revenue-row__header-left" }, index.h("p", { key: '21ae2d1b8e49f19fb92ebe1b74846f4c1773b99c', class: "ir-revenue-row__group" }, this.groupName, ' ', index.h("span", { key: 'aecff20379b0a35be350b238658d70101eab8ea3', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), index.h("p", { key: '4af6a38b098b932da2fe5d26c397fd8039e5b45f', class: "ir-revenue-row__total" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, total))), index.h("div", { key: '879ccacaba02187333dc50850f553fa90b120c38', class: "ir-revenue-row__details", id: this.contentId }, index.h("div", { key: '3ff044be9e3b81d382f3363e7fbaacc644bd1433', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (index.h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
};
IrRevenueRow.style = IrRevenueRowStyle0;

const irRevenueSummaryCss = ".ir-revenue-summary__mobile.sc-ir-revenue-summary{display:flex;align-items:center;gap:1rem}.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:none;grid-template-columns:repeat(3, 1fr);gap:1rem}.stats-card__payments-value.sc-ir-revenue-summary{padding:0;margin:0;color:#629a4c}.stats-card__refund-value.sc-ir-revenue-summary{padding:0;margin:0;color:#ff4961}@media (min-width: 768px){.ir-revenue-summary__tablet.sc-ir-revenue-summary{display:grid}.ir-revenue-summary__mobile.sc-ir-revenue-summary{display:none}}";
const IrRevenueSummaryStyle0 = irRevenueSummaryCss;

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
        return (index.h(index.Host, { key: '5d70aa65296a39e9c1c480cecbf6ca61031ac9c0' }, index.h("div", { key: '9d6b8270296b7ca2a4ba1245fbfeb764b0715ac1', class: "ir-revenue-summary__mobile" }, index.h("ir-stats-card", { key: '7c7e9a9cc63a9c67ae21dc0d82dce63e5baf6f6d', icon: 'arrow-trend-up', value: utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments" }, index.h("p", { key: '42cf284cc21c62a600970d1bd84060a4ef97986f', class: "stats-card__payments-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal))), index.h("ir-stats-card", { key: 'bb431d4e21da3236fd5f4fcd84d0bc999554d08c', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds" }, index.h("p", { key: 'd59afe97308d38b8ca81b2ecab71341ef3b08a03', class: "stats-card__refund-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount)))), index.h("div", { key: '33e40ed76b3ebcca73e3b41f9c3bde5802fe4a2b', class: "ir-revenue-summary__tablet" }, index.h("ir-stats-card", { key: 'a007bfcc6b96cc26aecc6a7adbedb3a4700d1619', icon: 'arrow-trend-up', value: utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal), cardTitle: "Payments", subtitle: this.filters?.date ? `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDatePaymentsTotal)}` : '' }, index.h("p", { key: 'f119e188236b6b251e62b397abd8b894d66e6698', class: "stats-card__payments-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, paymentsTotal))), index.h("ir-stats-card", { key: '7603ed924c8dc0f175ec622ea7d9b3b0e8f96ff5', value: "123$", class: "refunds-card", icon: 'arrow-trend-down', cardTitle: "Refunds", subtitle: this.filters?.date ? `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDateRefundAmount)}` : '' }, index.h("p", { key: 'd3cf1c5b3e65aabb64d4dd9a6f54afea6996e41b', class: "stats-card__refund-value", slot: "value" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, refundAmount))), index.h("ir-stats-card", { key: '57acbbe89a8e5955697710b94cc46f746c5a8d9e', icon: this.getTrendIcon(totalAmount, previousDateTotalAmount), value: utils.formatAmount(calendarData.calendar_data.currency.symbol, totalAmount), cardTitle: "Difference", subtitle: this.filters?.date ? `Previous day  ${utils.formatAmount(calendarData.calendar_data.currency.symbol, previousDateTotalAmount)}` : '' }))));
    }
};
IrRevenueSummary.style = IrRevenueSummaryStyle0;

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table{background:#ececec;color:#374151}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__method_header.sc-ir-revenue-table{color:black}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}@media (min-width: 1024px){.revenue-table__header.sc-ir-revenue-table,.revenue-table__method_header.sc-ir-revenue-table{width:100%;justify-content:flex-start}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child,.revenue-table__method_header.sc-ir-revenue-table p.sc-ir-revenue-table:first-child{width:calc(40vw + 1.375rem + 0.5rem + 1rem)}}";
const IrRevenueTableStyle0 = irRevenueTableCss;

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
        return (index.h("div", { key: 'ad1fa38358577c53e77bcd9aa63d692a1ea7980f', class: "card p-1 revenue-table__table" }, hasPayments ? (index.h(index.Fragment, null, index.h("div", { class: "revenue-table__header" }, index.h("p", null, "Method"), index.h("p", null, "Amount")), this.groupType === 'type' &&
            Array.from(this.payments.entries()).map(([key, list]) => {
                list = this.sortByDateTime(list);
                const [paymentType, paymentMethod] = key.split('_');
                const groupName = global_variables.PAYMENT_TYPES_WITH_METHOD.includes(paymentType)
                    ? `${this.payTypesObj[paymentType] ?? paymentType}: ${this.payMethodObj[paymentMethod] ?? paymentMethod}`
                    : this.payTypesObj[paymentType] ?? paymentType;
                return index.h("ir-revenue-row", { key: key, payments: list, groupName: groupName });
            }), this.groupType === 'method' &&
            Array.from(this.regroupPaymentsByMethod().entries()).flatMap(([methodKey, byType]) => {
                const total = Array.from(byType.entries()).reduce((prev, [_, list]) => prev + list.reduce((p, c) => p + c.amount, 0), 0);
                return (index.h("div", { key: `method_${methodKey}` }, index.h("div", { class: "revenue-table__method_header" }, index.h("p", null, this.payMethodObj[methodKey] ?? methodKey), index.h("p", null, utils.formatAmount(calendarData.calendar_data.currency.symbol, total))), Array.from(byType.entries()).map(([typeKey, list]) => {
                    list = this.sortByDateTime(list);
                    const groupName = global_variables.PAYMENT_TYPES_WITH_METHOD.includes(typeKey) ? `${this.payTypesObj[typeKey] ?? typeKey}` : this.payTypesObj[typeKey] ?? typeKey;
                    return (index.h("div", { key: `type_${typeKey}`, class: "px-1" }, index.h("ir-revenue-row", { payments: list, groupName: groupName })));
                })));
            }))) : (index.h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
};
IrRevenueTable.style = IrRevenueTableStyle0;

exports.ir_daily_revenue_filters = IrDailyRevenueFilters;
exports.ir_revenue_row = IrRevenueRow;
exports.ir_revenue_summary = IrRevenueSummary;
exports.ir_revenue_table = IrRevenueTable;

//# sourceMappingURL=ir-daily-revenue-filters_4.cjs.entry.js.map