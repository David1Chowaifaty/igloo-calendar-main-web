'use strict';

var index = require('./index-IDeZZwEK.js');
var utils = require('./utils-ZKsQb8eV.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var t = require('./t-CqJPQrfm.js');
var number = require('./number-xBpNWk3H.js');
var moment = require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
require('./ir-date-CbkOKs2C.js');
require('./locale-scope-Cch-vf1R.js');
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
        return (index.h("div", { key: '263fb17ce68a79cd15f12e0feca931b6dff571cb', class: "summary-row" }, index.h("ir-metric-card", { key: '3b4192450da83914ad408f23fad6901b3b489cd8', class: "summary-metric", icon: "moon", label: t.t('Lcz_TotalRoomNights', { fallback: 'Total Room Nights' }), value: number.formatCount(totalRoomNights), trend: hasLastYear ? utils.calculateTrend(totalRoomNights, lastYearTotalRoomNights) : undefined, trendLabel: t.t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t.t('Lcz_LastYear', { fallback: 'Last year:' })} ${number.formatCount(lastYearTotalRoomNights)}` : undefined }), index.h("ir-metric-card", { key: 'b62567ab7a88f4dfe07b71987947067367b77e61', class: "summary-metric", icon: "user-group", label: t.t('Lcz_TotalGuests', { fallback: 'Total Guests' }), value: number.formatCount(totalGuests), trend: hasLastYear ? utils.calculateTrend(totalGuests, lastYearTotalGuests) : undefined, trendLabel: t.t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t.t('Lcz_LastYear', { fallback: 'Last year:' })} ${number.formatCount(lastYearTotalGuests)}` : undefined }), index.h("ir-metric-card", { key: '6cde5a45ac8de6ba094f8204427dc4f99afcb1ca', class: "summary-metric", icon: "money-bill", label: t.t('Lcz_TotalRevenue', { fallback: 'Total Revenue' }), value: number.formatAmount(calendarData.calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? utils.calculateTrend(totalRevenue, lastYearTotalRevenue) : undefined, trendLabel: t.t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t.t('Lcz_LastYear', { fallback: 'Last year:' })} ${number.formatAmount(calendarData.calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
        return (index.h("ir-filter-card", { key: '886dd1c93d3c145f5613634989634e19219b7082' }, index.h("wa-radio-group", { key: '450662424b8485f601c05bd72e6affd39c44b9fa', label: t.t('Lcz_Rooms', { fallback: 'Rooms' }), orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, index.h("wa-radio", { key: '74c40f56a656920e1dcc3267437c98e75e4a382e', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, t.t('Lcz_Booked', { fallback: 'Booked' })), index.h("wa-radio", { key: 'f9d651e2fb6d15f6de3ace1c18ffa5dae7663c87', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, t.t('Lcz_Stayed', { fallback: 'Stayed' }))), index.h("wa-select", { key: '68d68f085bd04ab2eb7f141777286874dd9fe21c', label: t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment.hooks().format('YYYY-MM-DD'),
                    FROM_DATE: moment.hooks().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, index.h("wa-option", { key: '9e8889cc3e5cfab4b40d4dd6ba618f04f25c863a', value: "7" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(7)] })), index.h("wa-option", { key: 'bc1ac4e39ad4460000040b96a21cdcbff32155b7', value: "14" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(14)] })), index.h("wa-option", { key: '8901db86e858d52c2a9209c9bd31cf3172946436', value: "30" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(30)] })), index.h("wa-option", { key: '3f353464cb7c8f46125e6c38b762abe5c446d571', value: "60" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(60)] })), index.h("wa-option", { key: '21e1087218d7b9b681d4ccc4fd8711abcef208cc', value: "90" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(90)] })), index.h("wa-option", { key: '53e7e85faa2b25d16e82572bf5a594adfb7ce37e', value: "365" }, t.t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [number.formatCount(365)] }))), index.h("div", { key: 'c6c959174123953576a7e0744dadf97e003f5ecf', class: "or-divider" }, index.h("span", { key: 'f99f091b1548e369b50b75d6f930734ff247d062', class: "or-divider__line" }), index.h("span", { key: 'c9acc299d2a4baf3312ede1103a8a720f56c7dd3', class: "or-divider__text" }, t.t('Lcz_Or', { fallback: 'Or' })), index.h("span", { key: '449e6dfd10508d5150245fb5a72153c2ebadbd39', class: "or-divider__line" })), index.h("ir-date-range-filter", { key: '96c7379d3527e95039ba0efe578476c5ca0d42cc', label: t.t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment.hooks().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), index.h("wa-checkbox", { key: '12eeb800865221a4c371c9d3fe488a2afb704571', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t.t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), index.h("div", { key: 'e1cf0810126b48f3d8f679899ed3007d72bb09c9', slot: "footer" }, index.h("ir-custom-button", { key: '89291b2d415f64a22cc0d36b5cc924373629ea44', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: 'ac2c204d8f4269c86a1a74e1a4398a169a647d20', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
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
