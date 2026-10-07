'use strict';

var index = require('./index-CQkpA5n3.js');
var utils = require('./utils-C5KQRlHq.js');
var calendarData = require('./calendar-data-Br2L_0sg.js');
var t = require('./t-wyGILxEL.js');
var number = require('./number-C1isaNqY.js');
var moment = require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
require('./ir-date-CUtS9vzZ.js');
require('./locale-scope-C7rmpwuA.js');
require('./calendar-dates-BxDGM1ix.js');
require('./types-BVJQZ50e.js');
require('./type-Bj2x9EWc.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irSalesByCountrySummaryCss = () => `.sc-ir-sales-by-country-summary-h{display:block}.summary-row.sc-ir-sales-by-country-summary{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.summary-metric.sc-ir-sales-by-country-summary{flex:1}@media (min-width: 640px){.summary-row.sc-ir-sales-by-country-summary{flex-direction:row}}`;

const IrSalesByCountrySummary = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    salesReports;
    filters;
    calculateTotalValues(field, lastYear = false) {
        return this.salesReports?.reduce((prev, curr) => {
            const value = lastYear ? (curr.last_year ? curr.last_year[field] : 0) : curr[field];
            return prev + value;
        }, 0);
    }
    render() {
        const totalRoomNights = this.calculateTotalValues('nights');
        const totalGuests = this.calculateTotalValues('number_of_guests');
        const totalRevenue = this.calculateTotalValues('revenue');
        const lastYearTotalRoomNights = this.calculateTotalValues('nights', true);
        const lastYearTotalGuests = this.calculateTotalValues('number_of_guests', true);
        const lastYearTotalRevenue = this.calculateTotalValues('revenue', true);
        const hasLastYear = Boolean(this.salesReports?.length && this.filters?.include_previous_year);
        return (index.h("div", { key: '925354236bb46760d543439394bb770becdb28cb', class: "summary-row" }, index.h("ir-metric-card", { key: '2bc0fcfbf817523c862cc82531259338ce0a9103', class: "summary-metric", icon: "moon", label: t.t('Lcz_TotalRoomNights', { fallback: 'Total Room Nights' }), value: number.formatCount(totalRoomNights), trend: hasLastYear ? utils.calculateTrend(totalRoomNights, lastYearTotalRoomNights) : undefined, trendLabel: t.t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t.t('Lcz_LastYear', { fallback: 'Last year:' })} ${number.formatCount(lastYearTotalRoomNights)}` : undefined }), index.h("ir-metric-card", { key: '8e50a1e8f07b7aa4e550131d49063c8c72e26286', class: "summary-metric", icon: "user-group", label: t.t('Lcz_TotalGuests', { fallback: 'Total Guests' }), value: number.formatCount(totalGuests), trend: hasLastYear ? utils.calculateTrend(totalGuests, lastYearTotalGuests) : undefined, trendLabel: t.t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t.t('Lcz_LastYear', { fallback: 'Last year:' })} ${number.formatCount(lastYearTotalGuests)}` : undefined }), index.h("ir-metric-card", { key: 'bf93d932c4e09ec37b00dd2c92e9e2c70c5ac186', class: "summary-metric", icon: "money-bill", label: t.t('Lcz_TotalRevenue', { fallback: 'Total Revenue' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? utils.calculateTrend(totalRevenue, lastYearTotalRevenue) : undefined, trendLabel: t.t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t.t('Lcz_LastYear', { fallback: 'Last year:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
    }
};
IrSalesByCountrySummary.style = irSalesByCountrySummaryCss();

const irSalesFiltersCss = () => `.sc-ir-sales-filters-h{display:block}.or-divider.sc-ir-sales-filters{display:flex;align-items:center;gap:0.5rem}.or-divider__line.sc-ir-sales-filters{flex:1;height:1px;background-color:var(--wa-color-surface-border, #dee2e6)}.or-divider__text.sc-ir-sales-filters{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #6c757d);white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}`;

const IrSalesFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters");
    }
    isLoading;
    baseFilters;
    filters;
    window;
    applyFilters;
    componentWillLoad() {
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
    }
    updateFilter(params) {
        this.filters = { ...this.filters, ...params };
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
        this.applyFilters.emit(this.filters);
    }
    render() {
        return (index.h("ir-filter-card", { key: '20905c66351e93ca232b390e801f256fd8e83153' }, index.h("wa-radio-group", { key: '6ae1d2e2bc85abda7dbc609bfdcc02fd02f0e8df', label: t.t('Lcz_Rooms', { fallback: 'Rooms' }), orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, index.h("wa-radio", { key: 'f30595e3bc17bc1875cf6a4fc895ee756c8dcddf', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, t.t('Lcz_Booked', { fallback: 'Booked' })), index.h("wa-radio", { key: '0e9cfa9b6a19c04639225c7ea68c25f2e727d79e', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, t.t('Lcz_Stayed', { fallback: 'Stayed' }))), index.h("wa-select", { key: '6970521cf781bf0b517fd6476ebacaf6a15b620d', label: t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment.hooks().format('YYYY-MM-DD'),
                    FROM_DATE: moment.hooks().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, index.h("wa-option", { key: 'db1b9db640e6d29f30f00f418c95b63aca33ddba', value: "7" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(7)] })), index.h("wa-option", { key: 'c7dbcee1e2b7f094f6e2e61d3a04c25f1dae4fb4', value: "14" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(14)] })), index.h("wa-option", { key: '41c62200f97b4baf6725c0f63bdb8b9f941d9373', value: "30" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(30)] })), index.h("wa-option", { key: 'bcfe5b399b47223377145a5fbaf56f48eef18940', value: "60" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(60)] })), index.h("wa-option", { key: 'b5c4fba776effb5a33c8bd08763ec731c89c492e', value: "90" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(90)] })), index.h("wa-option", { key: '305ee3f77a4065b33163906c9e6fed2bde36b770', value: "365" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(365)] }))), index.h("div", { key: 'b862cd82a915f42b7042af725c288adef27066a2', class: "or-divider" }, index.h("span", { key: '158c2870ccbd1aada495f54a91d9920212e65173', class: "or-divider__line" }), index.h("span", { key: 'ecaef7b95efe4e3a1c07872e709322329c201be2', class: "or-divider__text" }, t.t('Lcz_Or', { fallback: 'Or' })), index.h("span", { key: '3aba6bd8e0de1b15a733e94aca3ea3e4f8151994', class: "or-divider__line" })), index.h("ir-date-range-filter", { key: '4971aaaea02be4277f25ecd066d507ff3c680446', label: t.t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment.hooks().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), index.h("wa-checkbox", { key: '5e2d2e080730b53ca18f1aab1eae71dfc4b4d03c', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t.t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), index.h("div", { key: '30d6519e855ccadc0b4d9304a779fd9a1f146ff7', slot: "footer" }, index.h("ir-custom-button", { key: '7798188d6166cb9e13ae3f2979950ac3d63b8678', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: '017b8acafa74aaba3eb445b34a05a401c11bc7be', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
    }
};
IrSalesFilters.style = irSalesFiltersCss();

const irSalesTableCss = () => `.sc-ir-sales-table-h{box-sizing:border-box !important}.sc-ir-sales-table-h *.sc-ir-sales-table,.sc-ir-sales-table-h *.sc-ir-sales-table::before,.sc-ir-sales-table-h *.sc-ir-sales-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-sales-table{display:none !important}.sc-ir-sales-table-h{display:block;width:100%}.sales-table__card.sc-ir-sales-table::part(body),.sales-table__card.sc-ir-sales-table [part~="body"]{min-height:50vh;padding:0.5rem}.sales-table__scroll.sc-ir-sales-table{overflow-x:auto}.sales-table__empty-wrapper.sc-ir-sales-table{display:flex;align-items:center;justify-content:center;min-height:300px}.cell--left.sc-ir-sales-table{text-align:start}.cell--center.sc-ir-sales-table{text-align:center}.cell--right.sc-ir-sales-table{text-align:end}.cell-stack.sc-ir-sales-table{display:flex;flex-direction:column;gap:0.25rem}.cell-stack.sc-ir-sales-table p.sc-ir-sales-table{margin:0;padding:0}.country-cell.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.value--primary.sc-ir-sales-table{font-weight:600}.value--previous.sc-ir-sales-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-sales-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-sales-table{flex:1 1 0%}.occ-bar--previous.sc-ir-sales-table{--indicator-color:var(--wa-color-brand-fill-normal)}.legend-cell.sc-ir-sales-table{white-space:nowrap}.legend-row.sc-ir-sales-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-sales-table p.sc-ir-sales-table{margin:0;padding:0}.legend-dot.sc-ir-sales-table{height:12px;aspect-ratio:1;border-radius:4px}.legend-dot--current.sc-ir-sales-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-sales-table{background:var(--wa-color-brand-fill-normal)}.sales-table__load-more.sc-ir-sales-table{display:flex;justify-content:center;padding:1rem}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}`;

const tableCss = () => `.sc-ir-sales-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-sales-table{overflow-x:auto}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.cell--align-start.sc-ir-sales-table{text-align:start !important}.cell--align-center.sc-ir-sales-table{text-align:center !important}.cell--align-end.sc-ir-sales-table{text-align:end !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-sales-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrSalesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    records = [];
    mappedCountries;
    visibleCount = 10;
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        if (this.records.length === 0) {
            return (index.h("wa-card", { class: "sales-table__card" }, index.h("div", { class: "sales-table__empty-wrapper" }, index.h("ir-empty-state", { message: t.t('Lcz_NoSalesDataFound', { fallback: 'No sales data found.' }) }))));
        }
        return (index.h("wa-card", { class: "sales-table__card" }, index.h("div", { class: "sales-table__scroll" }, index.h("table", { class: "table data-table", "data-testid": "hk_tasks_table" }, index.h("thead", { class: "table-header" }, index.h("tr", null, index.h("th", { class: "cell--left" }, t.t('Lcz_Country', { fallback: 'Country' })), index.h("th", { class: "cell--center" }, t.t('Lcz_RoomNights', { fallback: 'Room nights' })), index.h("th", { class: "cell--center" }, t.t('Lcz_NumberOfGuests', { fallback: 'Number of Guests' })), index.h("th", { class: "cell--right" }, t.t('Lcz_Revenue', { fallback: 'Revenue' })), index.h("th", { style: { width: '35%' } }))), index.h("tbody", null, visibleRecords.map(record => {
            const mainPercentage = number.formatPercent(parseFloat(record.percentage.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = record.last_year
                ? number.formatPercent(parseFloat(record.last_year.percentage.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": "record_row", class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "cell--left" }, index.h("div", { class: "country-cell" }, mappedCountry?.flag && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, mappedCountry?.name ?? record.country))), index.h("td", { class: "cell--center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.nights ? 'value--primary' : '' }, number.formatCount(record.nights)), record.last_year?.nights && index.h("p", { class: "value--previous" }, number.formatCount(record.last_year.nights)))), index.h("td", { class: "cell--center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.number_of_guests ? 'value--primary' : '' }, number.formatCount(record.number_of_guests)), record.last_year?.number_of_guests && index.h("p", { class: "value--previous" }, number.formatCount(record.last_year.number_of_guests)))), index.h("td", { class: "cell--right" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.revenue ? 'value--primary' : '' }, number.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && index.h("p", { class: "value--previous" }, number.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue)))), index.h("td", null, index.h("div", { class: "cell-stack" }, index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, mainPercentage), index.h("wa-progress-bar", { class: "occ-bar", value: parseFloat(record.percentage.toString()) })), record.last_year?.percentage && (index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, secondaryPercentage), index.h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(record.last_year.percentage.toString()) })))))));
        })), index.h("tfoot", null, index.h("tr", { style: { fontSize: '12px' } }, index.h("td", { colSpan: 4 }), index.h("td", { class: "legend-cell" }, index.h("div", { class: "legend-row" }, index.h("div", { class: "legend-item" }, index.h("div", { class: "legend-dot legend-dot--current" }), index.h("p", null, t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), index.h("div", { class: "legend-item" }, index.h("div", { class: "legend-dot legend-dot--previous" }), index.h("p", null, t.t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))), this.visibleCount < this.records.length && (index.h("div", { class: "sales-table__load-more" }, index.h("ir-custom-button", { variant: "neutral", appearance: "outlined", size: "s", onClickHandler: this.handleLoadMore }, t.t('Lcz_LoadMore', { fallback: 'Load more' })))))));
    }
};
IrSalesTable.style = irSalesTableCss() + tableCss();

exports.ir_sales_by_country_summary = IrSalesByCountrySummary;
exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;
