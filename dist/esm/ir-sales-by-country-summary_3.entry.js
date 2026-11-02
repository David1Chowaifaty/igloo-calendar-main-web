import { r as registerInstance, h, c as createEvent } from './index-DKZeCK8T.js';
import { r as calculateTrend } from './utils-BXIDs-ea.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import { t } from './t-Bvz1wS_D.js';
import { f as formatAmount, b as formatCount, d as formatPercent } from './number-BguMo00d.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import './booking.dto-BenwoJ5d.js';
import './ir-date-Bh8M_fTk.js';
import './locale-scope-Jre4lb6k.js';
import './calendar-dates-D3hVfsrC.js';
import './types-BLb1NO3I.js';
import './type-CEUDt-3i.js';
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
        return (h("div", { key: '0d946ca4947661aa72be6491f6772dee628c0fb5', class: "summary-row" }, h("ir-metric-card", { key: '59c38c31676c7968508bb3b2fde5d6960140c4d3', class: "summary-metric", icon: "moon", label: t('Lcz_TotalRoomNights', { fallback: 'Total Room Nights' }), value: formatCount(totalRoomNights), trend: hasLastYear ? calculateTrend(totalRoomNights, lastYearTotalRoomNights) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatCount(lastYearTotalRoomNights)}` : undefined }), h("ir-metric-card", { key: '203bfd8a396b9f98881a5811ab0c4f5a90b2d3ff', class: "summary-metric", icon: "user-group", label: t('Lcz_TotalGuests', { fallback: 'Total Guests' }), value: formatCount(totalGuests), trend: hasLastYear ? calculateTrend(totalGuests, lastYearTotalGuests) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatCount(lastYearTotalGuests)}` : undefined }), h("ir-metric-card", { key: '63db7a8d9e79d30d55104d4c44106d51be0af053', class: "summary-metric", icon: "money-bill", label: t('Lcz_TotalRevenue', { fallback: 'Total Revenue' }), value: formatAmount(calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? calculateTrend(totalRevenue, lastYearTotalRevenue) : undefined, trendLabel: t('Lcz_VsLastYear', { fallback: 'vs last year' }), caption: hasLastYear ? `${t('Lcz_LastYear', { fallback: 'Last year:' })} ${formatAmount(calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
        return (h("ir-filter-card", { key: '7b70913bdedf7e2fad60f1fc98649511162fb6e3' }, h("wa-radio-group", { key: '25396b956825f41a8d9e7b9f9d9080dd55599c80', label: t('Lcz_Rooms', { fallback: 'Rooms' }), orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, h("wa-radio", { key: '3901c5c7996f283f613abe09cd4b92ee9ce756bd', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, t('Lcz_Booked', { fallback: 'Booked' })), h("wa-radio", { key: '38945774c291d5294c561dcc7757757583430141', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, t('Lcz_Stayed', { fallback: 'Stayed' }))), h("wa-select", { key: '57eeaff3516da6ca095ea8c589511d622e0072f4', label: t('Lcz_SelectedPeriod', { fallback: 'Selected period' }), size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: hooks().format('YYYY-MM-DD'),
                    FROM_DATE: hooks().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, h("wa-option", { key: 'ed5bdaa5ded4643c0c5b6f5cb8987242c39e71d0', value: "7" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(7)] })), h("wa-option", { key: 'f073c4651597a1b9405614c6cd8028a99fda6142', value: "14" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(14)] })), h("wa-option", { key: '89c687053f6619d9a69453be279d9939757ae116', value: "30" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(30)] })), h("wa-option", { key: 'c6ea3ff5ebd916755129d28411d8b00b9f46d506', value: "60" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(60)] })), h("wa-option", { key: '38cd07d9dd4ee5e93b02ca558829883f26ef16a3', value: "90" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(90)] })), h("wa-option", { key: '46bd21b019847ba3ed476167201fd0e8bb5118c7', value: "365" }, t('Lcz_ForThePastNDays', { fallback: 'For the past %1 days', params: [formatCount(365)] }))), h("div", { key: '351b2e9f3ac2d4a3e511cfd7541464b06a97eefd', class: "or-divider" }, h("span", { key: '9b072a0de331320f137c978559481e609f279893', class: "or-divider__line" }), h("span", { key: 'bb995ca0393270a1b0c63c566a7dfddc23939b00', class: "or-divider__text" }, t('Lcz_Or', { fallback: 'Or' })), h("span", { key: '0975a2e90ce0883883cbc8881eb783dd6639f106', class: "or-divider__line" })), h("ir-date-range-filter", { key: '8c8f68d6f6d8b0c6157f71b1fb8a3ca3098b9ac1', label: t('Lcz_DateRange', { fallback: 'Date range' }), fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: hooks().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), h("wa-checkbox", { key: '864217609d836360004fcae514446b57ad29896b', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), h("div", { key: '573ee40edcfbbb037bcd2bd64d35c1c161b95fea', slot: "footer" }, h("ir-custom-button", { key: 'a44ac6ac317e3f0cc52109afb47303f7dce3bf24', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: 'f9e8d2cc877c4402b45e413502770d1d46876554', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
