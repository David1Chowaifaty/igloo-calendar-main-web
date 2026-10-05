import { r as registerInstance, h, c as createEvent } from './index-CeHdrJeH.js';
import { q as calculateTrend } from './utils-D1YLn2lG.js';
import { c as calendar_data } from './calendar-data-vejfJjJ2.js';
import { t } from './t-BG8YaZr6.js';
import { f as formatAmount, b as formatCount, d as formatPercent } from './number-2X31jLIQ.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './booking.dto-D-ACWjZx.js';
import './ir-date-2sKX7m-4.js';
import './locales.store-CXJn6ls-.js';
import './calendar-dates-D3hVfsrC.js';
import './types-Clk7NCXk.js';
import './type-o1ai24d7.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irSalesByCountrySummaryCss = () => `.sc-ir-sales-by-country-summary-h{display:block}.summary-row.sc-ir-sales-by-country-summary{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.summary-metric.sc-ir-sales-by-country-summary{flex:1}@media (min-width: 640px){.summary-row.sc-ir-sales-by-country-summary{flex-direction:row}}`;

const IrSalesByCountrySummary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'cab9b8597e98e4863c507d2fca5b8db78cfb0183', class: "summary-row" }, h("ir-metric-card", { key: 'df62caa26d3ca16b88dcd4ecbbd9a699531afaae', class: "summary-metric", icon: "moon", label: t('Lcz_TotalRoomNights', { fallback: 'Total Room Nights' }), value: formatCount(totalRoomNights), trend: hasLastYear ? calculateTrend(totalRoomNights, lastYearTotalRoomNights) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatCount(lastYearTotalRoomNights)}` : undefined }), h("ir-metric-card", { key: 'abb464fadb566634642838b3f3dff67d88edfcab', class: "summary-metric", icon: "user-group", label: t('Lcz_TotalGuests', { fallback: 'Total Guests' }), value: formatCount(totalGuests), trend: hasLastYear ? calculateTrend(totalGuests, lastYearTotalGuests) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatCount(lastYearTotalGuests)}` : undefined }), h("ir-metric-card", { key: 'ccbac49d43b6d7b8d33755255d598142ec5485a5', class: "summary-metric", icon: "money-bill", label: t('Lcz_TotalRevenue', { fallback: 'Total Revenue' }), value: formatAmount(calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? calculateTrend(totalRevenue, lastYearTotalRevenue) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
    }
};
IrSalesByCountrySummary.style = irSalesByCountrySummaryCss();

const irSalesFiltersCss = () => `.sc-ir-sales-filters-h{display:block}.or-divider.sc-ir-sales-filters{display:flex;align-items:center;gap:0.5rem}.or-divider__line.sc-ir-sales-filters{flex:1;height:1px;background-color:var(--wa-color-surface-border, #dee2e6)}.or-divider__text.sc-ir-sales-filters{font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet, #6c757d);white-space:nowrap;text-transform:uppercase;letter-spacing:0.05em}`;

const IrSalesFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters");
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
        return (h("ir-filter-card", { key: '7a9d0cbc84dcd5b335daf5f6e2594a647f29a343' }, h("wa-radio-group", { key: '80d58e81e461c48eae82dbbd71681d2db2107116', label: t('Lcz_Rooms', { fallback: 'Rooms' }), orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '67ce67666e449bb7afaf496d23c97f3c2f02217d', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, t('Lcz_Booked', { fallback: 'Booked' })), h("wa-radio", { key: 'd03a6359c386e11298c1b2eb148d2eeec5ea43a4', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, t('Lcz_Stayed', { fallback: 'Stayed' }))), h("wa-select", { key: '4e705b6e599837b6b662bf84a1ec090920fde590', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: hooks().format('YYYY-MM-DD'),
                    FROM_DATE: hooks().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: '80b7ae641863f396950e70a6a31c0c1da30a6923', value: "7" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(7)] })), h("wa-option", { key: '0d21d834ef2b9f40541165c2c595289cd4e71135', value: "14" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(14)] })), h("wa-option", { key: 'c54e7c64e7db5e770bb76d3333c81aa07c1a9067', value: "30" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(30)] })), h("wa-option", { key: 'd57ffc0894338831c084d8dc2f722b0f323b0181', value: "60" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(60)] })), h("wa-option", { key: 'a495e0ea2834b2ab78364c7f5fd73fcdf6d20a27', value: "90" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(90)] })), h("wa-option", { key: '28cb95159856bd97a5f981b6e0ae2003f259e82e', value: "365" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(365)] }))), h("div", { key: '18971b28a7bf3ad144c7955b125997c0d44787fc', class: "or-divider" }, h("span", { key: '2f420e69800900502ee8995394e6f853d6abba63', class: "or-divider__line" }), h("span", { key: '1a71805af81c746370c55279fcfd1ba18ccae25d', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: 'f5ffebf07b014bc85fe4411b66197715eef10e0a', class: "or-divider__line" })), h("ir-date-range-filter", { key: 'dd1b6361cca48ad9ad682d0298dcc9f6ad14acdc', label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: hooks().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '33f3da5a681da0539de8dce9762965ff6d52c651', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), h("div", { key: 'a3bc04e2caa69523decd250161ab92e8a6653a33', slot: "footer" }, h("ir-custom-button", { key: 'f8e554fe18d4dc9ee4ce1dcd283084e9c82da9e9', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: 'f947fa8efaf7ffb32e7b7c321b2e56bd4fe7d5c3', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
    }
};
IrSalesFilters.style = irSalesFiltersCss();

const irSalesTableCss = () => `.sc-ir-sales-table-h{box-sizing:border-box !important}.sc-ir-sales-table-h *.sc-ir-sales-table,.sc-ir-sales-table-h *.sc-ir-sales-table::before,.sc-ir-sales-table-h *.sc-ir-sales-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-sales-table{display:none !important}.sc-ir-sales-table-h{display:block;width:100%}.sales-table__card.sc-ir-sales-table::part(body),.sales-table__card.sc-ir-sales-table [part~="body"]{min-height:50vh;padding:0.5rem}.sales-table__scroll.sc-ir-sales-table{overflow-x:auto}.sales-table__empty-wrapper.sc-ir-sales-table{display:flex;align-items:center;justify-content:center;min-height:300px}.cell--left.sc-ir-sales-table{text-align:start}.cell--center.sc-ir-sales-table{text-align:center}.cell--right.sc-ir-sales-table{text-align:end}.cell-stack.sc-ir-sales-table{display:flex;flex-direction:column;gap:0.25rem}.cell-stack.sc-ir-sales-table p.sc-ir-sales-table{margin:0;padding:0}.country-cell.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.value--primary.sc-ir-sales-table{font-weight:600}.value--previous.sc-ir-sales-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-sales-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-sales-table{flex:1 1 0%}.occ-bar--previous.sc-ir-sales-table{--indicator-color:var(--wa-color-brand-fill-normal)}.legend-cell.sc-ir-sales-table{white-space:nowrap}.legend-row.sc-ir-sales-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-sales-table p.sc-ir-sales-table{margin:0;padding:0}.legend-dot.sc-ir-sales-table{height:12px;aspect-ratio:1;border-radius:4px}.legend-dot--current.sc-ir-sales-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-sales-table{background:var(--wa-color-brand-fill-normal)}.sales-table__load-more.sc-ir-sales-table{display:flex;justify-content:center;padding:1rem}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}`;

const tableCss = () => `.sc-ir-sales-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-sales-table{overflow-x:auto}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.cell--align-start.sc-ir-sales-table{text-align:start !important}.cell--align-center.sc-ir-sales-table{text-align:center !important}.cell--align-end.sc-ir-sales-table{text-align:end !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-sales-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrSalesTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return (h("wa-card", { class: "sales-table__card" }, h("div", { class: "sales-table__empty-wrapper" }, h("ir-empty-state", { message: t('Lcz_NoSalesDataFound', { fallback: 'No sales data found.' }) }))));
        }
        return (h("wa-card", { class: "sales-table__card" }, h("div", { class: "sales-table__scroll" }, h("table", { class: "table data-table", "data-testid": "hk_tasks_table" }, h("thead", { class: "table-header" }, h("tr", null, h("th", { class: "cell--left" }, t('Lcz_Country', { fallback: 'Country' })), h("th", { class: "cell--center" }, t('Lcz_RoomNights', { fallback: 'Room nights' })), h("th", { class: "cell--center" }, t('Lcz_NumberOfGuests', { fallback: 'Number of Guests' })), h("th", { class: "cell--right" }, t('Lcz_Revenue', { fallback: 'Revenue' })), h("th", { style: { width: '35%' } }))), h("tbody", null, visibleRecords.map(record => {
            const mainPercentage = formatPercent(parseFloat(record.percentage.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = record.last_year
                ? formatPercent(parseFloat(record.last_year.percentage.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": "record_row", class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "cell--left" }, h("div", { class: "country-cell" }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "cell--center" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.nights ? 'value--primary' : '' }, formatCount(record.nights)), record.last_year?.nights && h("p", { class: "value--previous" }, formatCount(record.last_year.nights)))), h("td", { class: "cell--center" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.number_of_guests ? 'value--primary' : '' }, formatCount(record.number_of_guests)), record.last_year?.number_of_guests && h("p", { class: "value--previous" }, formatCount(record.last_year.number_of_guests)))), h("td", { class: "cell--right" }, h("div", { class: "cell-stack" }, h("p", { class: record.last_year?.revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(record.percentage.toString()) })), record.last_year?.percentage && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(record.last_year.percentage.toString()) })))))));
        })), h("tfoot", null, h("tr", { style: { fontSize: '12px' } }, h("td", { colSpan: 4 }), h("td", { class: "legend-cell" }, h("div", { class: "legend-row" }, h("div", { class: "legend-item" }, h("div", { class: "legend-dot legend-dot--current" }), h("p", null, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { class: "legend-item" }, h("div", { class: "legend-dot legend-dot--previous" }), h("p", null, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))), this.visibleCount < this.records.length && (h("div", { class: "sales-table__load-more" }, h("ir-custom-button", { variant: "neutral", appearance: "outlined", size: "s", onClickHandler: this.handleLoadMore }, t('Lcz_LoadMore', { fallback: 'Load more' })))))));
    }
};
IrSalesTable.style = irSalesTableCss() + tableCss();

export { IrSalesByCountrySummary as ir_sales_by_country_summary, IrSalesFilters as ir_sales_filters, IrSalesTable as ir_sales_table };
