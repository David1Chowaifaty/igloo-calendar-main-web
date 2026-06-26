'use strict';

var index = require('./index-DYQrLNin.js');
var utils = require('./utils-DgT4kKsD.js');
var calendarData = require('./calendar-data-R3j-WBLW.js');
var locales_store = require('./locales.store-6IlEbCjL.js');
var moment = require('./moment-CdViwxPQ.js');
require('./index-CLqkDPTC.js');
require('./type-Dy9pVS4V.js');
require('./index-C59pxKl1.js');

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
        return (index.h("div", { key: 'ae470af247a5543eaaab5141e606e341874736f2', class: "summary-row" }, index.h("ir-metric-card", { key: 'd6a8cba6472d6e718885558a9955797cede0cdbf', class: "summary-metric", icon: "moon", label: "Total Room Nights", value: totalRoomNights?.toString(), trend: hasLastYear ? utils.calculateTrend(totalRoomNights, lastYearTotalRoomNights) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalRoomNights}` : undefined }), index.h("ir-metric-card", { key: '51c3f4c6aa275c178502e01368119763eaaf898b', class: "summary-metric", icon: "user-group", label: "Total Guests", value: totalGuests?.toString(), trend: hasLastYear ? utils.calculateTrend(totalGuests, lastYearTotalGuests) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${lastYearTotalGuests}` : undefined }), index.h("ir-metric-card", { key: 'dffe2071fab81b0fd27d7d8ecf33abf89060011e', class: "summary-metric", icon: "money-bill", label: "Total Revenue", value: utils.formatAmount(calendarData.calendar_data.currency.symbol, totalRevenue), trend: hasLastYear ? utils.calculateTrend(totalRevenue, lastYearTotalRevenue) : undefined, trendLabel: "vs last year", caption: hasLastYear ? `Last year: ${utils.formatAmount(calendarData.calendar_data.currency.symbol, lastYearTotalRevenue)}` : undefined })));
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
        return (index.h("ir-filter-card", { key: '8b1033e79a8eb9ad1a286c03fe9424bcd5c33105' }, index.h("wa-radio-group", { key: 'ccdc8f53e07c318736c0bd1190152e8892221eaa', label: "Rooms", orientation: "horizontal", size: "s", style: { width: '100%' }, value: this.filters?.BOOK_CASE, onchange: (e) => {
                this.updateFilter({ BOOK_CASE: e.target.value });
            } }, index.h("wa-radio", { key: 'fd581749659fb33636c20cbdf70f846d7e48e5d5', style: { flex: '1 1 0%' }, appearance: "button", value: "001" }, "Booked"), index.h("wa-radio", { key: '01263f77c11efedde3db347f632ea4d7afb764c0', style: { flex: '1 1 0%' }, appearance: "button", value: "002" }, "Stayed")), index.h("wa-select", { key: 'a85a2c3af793642afe4f061100c1e43d980749fc', label: "Selected period", size: "s", value: this.window, defaultValue: this.window, onchange: (e) => {
                const val = e.target.value;
                const dateDiff = Number(val);
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: moment.hooks().format('YYYY-MM-DD'),
                    FROM_DATE: moment.hooks().subtract(dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = val;
            } }, index.h("wa-option", { key: 'd0e29af43ce9c40412b49e163eeffd067d0cdd62', value: "7" }, "For the past 7 days"), index.h("wa-option", { key: '13bee40cf3c51608ef6d6f4a4479a139172687b2', value: "14" }, "For the past 14 days"), index.h("wa-option", { key: '29376c2bd23d60dc7e80240f8dbcfeb1f6ab9f27', value: "30" }, "For the past 30 days"), index.h("wa-option", { key: '6baf6f2e8cf8f7fbd450806814c7631044f00f3e', value: "60" }, "For the past 60 days"), index.h("wa-option", { key: '37a9aa9a51a6d3a80f44655a65c9b1220ef39fc9', value: "90" }, "For the past 90 days"), index.h("wa-option", { key: 'bb197bda584ac3d1dc88e3b772cf6cc281c5448c', value: "365" }, "For the past 365 days")), index.h("div", { key: 'a7defc295764bf2826773c58454e251c899b0532', class: "or-divider" }, index.h("span", { key: '66b7d7455b6b32513385ea3b79ac414761ddf8dc', class: "or-divider__line" }), index.h("span", { key: '47a53c841b61dda1c0eef2586f0a0482cb74bfa1', class: "or-divider__text" }, "Or"), index.h("span", { key: '36d4544411c06e567f3e30679e094ae55f7c8b65', class: "or-divider__line" })), index.h("ir-date-range-filter", { key: 'fa7db4e6b3fc2eef4e9bb1f378d8fa0ab0d08b24', label: "Date range", fromDate: this.filters?.FROM_DATE, toDate: this.filters?.TO_DATE, maxDate: moment.hooks().format('YYYY-MM-DD'), selectionMode: "auto", showQuickActions: false, withClear: false, onDatesChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { from, to } = e.detail;
                this.updateFilter({ FROM_DATE: from, TO_DATE: to });
                this.window = '';
            } }), index.h("wa-checkbox", { key: '94c95cf5f2c7102f882e49b5704e51870a1c776e', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), index.h("div", { key: '3fba81e21fd863baf8cd083e727900d0ca92957b', slot: "footer" }, index.h("ir-custom-button", { key: 'd7ea17f1ef33aa3bed2d3b2af30a715936720efb', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales_store.locales.entries?.Lcz_Reset ?? 'Reset'), index.h("ir-custom-button", { key: 'bdca1ebd20e8dd90485ee2dad844480bb850c865', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales_store.locales.entries?.Lcz_Apply ?? 'Apply'))));
    }
};
IrSalesFilters.style = irSalesFiltersCss();

const irSalesTableCss = () => `.sc-ir-sales-table-h{box-sizing:border-box !important}.sc-ir-sales-table-h *.sc-ir-sales-table,.sc-ir-sales-table-h *.sc-ir-sales-table::before,.sc-ir-sales-table-h *.sc-ir-sales-table::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-sales-table{display:none !important}.sc-ir-sales-table-h{display:block;width:100%}.sales-table__card.sc-ir-sales-table::part(body),.sales-table__card.sc-ir-sales-table [part~="body"]{min-height:50vh;padding:0.5rem}.sales-table__scroll.sc-ir-sales-table{overflow-x:auto}.sales-table__empty-wrapper.sc-ir-sales-table{display:flex;align-items:center;justify-content:center;min-height:300px}.cell--left.sc-ir-sales-table{text-align:left}.cell--center.sc-ir-sales-table{text-align:center}.cell--right.sc-ir-sales-table{text-align:right}.cell-stack.sc-ir-sales-table{display:flex;flex-direction:column;gap:0.25rem}.cell-stack.sc-ir-sales-table p.sc-ir-sales-table{margin:0;padding:0}.country-cell.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.value--primary.sc-ir-sales-table{font-weight:600}.value--previous.sc-ir-sales-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-sales-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-sales-table{flex:1 1 0%}.occ-bar--previous.sc-ir-sales-table{--indicator-color:var(--wa-color-brand-fill-normal)}.legend-cell.sc-ir-sales-table{white-space:nowrap}.legend-row.sc-ir-sales-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-sales-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-sales-table p.sc-ir-sales-table{margin:0;padding:0}.legend-dot.sc-ir-sales-table{height:12px;aspect-ratio:1;border-radius:4px}.legend-dot--current.sc-ir-sales-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-sales-table{background:var(--wa-color-brand-fill-normal)}.sales-table__load-more.sc-ir-sales-table{display:flex;justify-content:center;padding:1rem}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}`;

const tableCss = () => `.sc-ir-sales-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-sales-table{overflow-x:auto}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-sales-table{position:sticky !important;right:0;background-color:white}`;

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
            return (index.h("wa-card", { class: "sales-table__card" }, index.h("div", { class: "sales-table__empty-wrapper" }, index.h("ir-empty-state", { message: "No sales data found." }))));
        }
        return (index.h("wa-card", { class: "sales-table__card" }, index.h("div", { class: "sales-table__scroll" }, index.h("table", { class: "table data-table", "data-testid": "hk_tasks_table" }, index.h("thead", { class: "table-header" }, index.h("tr", null, index.h("th", { class: "cell--left" }, "Country"), index.h("th", { class: "cell--center" }, "Room nights"), index.h("th", { class: "cell--center" }, "No of guests"), index.h("th", { class: "cell--right" }, "Revenue"), index.h("th", { style: { width: '35%' } }))), index.h("tbody", null, visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (index.h("tr", { "data-testid": "record_row", class: { 'task-table-row ir-table-row': true }, key: record.id }, index.h("td", { class: "cell--left" }, index.h("div", { class: "country-cell" }, mappedCountry?.flag && index.h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), index.h("span", null, mappedCountry?.name ?? record.country))), index.h("td", { class: "cell--center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.nights ? 'value--primary' : '' }, record.nights), record.last_year?.nights && index.h("p", { class: "value--previous" }, record.last_year.nights))), index.h("td", { class: "cell--center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.number_of_guests ? 'value--primary' : '' }, record.number_of_guests), record.last_year?.number_of_guests && index.h("p", { class: "value--previous" }, record.last_year.number_of_guests))), index.h("td", { class: "cell--right" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: record.last_year?.revenue ? 'value--primary' : '' }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && index.h("p", { class: "value--previous" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, record.last_year.revenue)))), index.h("td", null, index.h("div", { class: "cell-stack" }, index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, mainPercentage), index.h("wa-progress-bar", { class: "occ-bar", value: parseFloat(record.percentage.toString()) })), record.last_year?.percentage && (index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, secondaryPercentage), index.h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(record.last_year.percentage.toString()) })))))));
        })), index.h("tfoot", null, index.h("tr", { style: { fontSize: '12px' } }, index.h("td", { colSpan: 4 }), index.h("td", { class: "legend-cell" }, index.h("div", { class: "legend-row" }, index.h("div", { class: "legend-item" }, index.h("div", { class: "legend-dot legend-dot--current" }), index.h("p", null, "Selected period")), index.h("div", { class: "legend-item" }, index.h("div", { class: "legend-dot legend-dot--previous" }), index.h("p", null, "Previous year"))))))), this.visibleCount < this.records.length && (index.h("div", { class: "sales-table__load-more" }, index.h("ir-custom-button", { variant: "neutral", appearance: "outlined", size: "s", onClickHandler: this.handleLoadMore }, "Load More"))))));
    }
};
IrSalesTable.style = irSalesTableCss() + tableCss();

exports.ir_sales_by_country_summary = IrSalesByCountrySummary;
exports.ir_sales_filters = IrSalesFilters;
exports.ir_sales_table = IrSalesTable;
