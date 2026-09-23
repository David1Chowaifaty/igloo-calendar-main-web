'use strict';

var index = require('./index-CQkpA5n3.js');
var moment = require('./moment-CdViwxPQ.js');
var irDate = require('./ir-date-BZLsqCOc.js');
var t = require('./t-CyRK1btk.js');
var calendarData = require('./calendar-data-HgC39-BR.js');
require('./booking.dto-DxxzsxJC.js');
var number = require('./number-D7i5wAQq.js');
require('./locales.store-BMTss6fG.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./type-BRhg-bzd.js');
require('./types-BlCoz3jZ.js');

const irMonthlyBookingsReportFilterCss = () => ``;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters");
    }
    isLoading;
    baseFilters;
    filters;
    applyFilters;
    dates = [];
    componentWillLoad() {
        this.dates = this.generateMonths();
        this.filters = this.baseFilters;
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
        this.applyFilters.emit(this.filters);
    }
    generateMonths() {
        const format = 'YYYY-MM-DD';
        const firstOfThisMonth = moment.hooks().startOf('month');
        const startDate = moment.hooks().subtract(1, 'year').startOf('month');
        const dates = [];
        let cursor = startDate.clone();
        while (cursor.isSameOrBefore(firstOfThisMonth, 'month')) {
            dates.push({
                description: irDate.formatDate(cursor, 'MMMM YYYY'),
                firstOfMonth: cursor.format(format),
                lastOfMonth: cursor.clone().endOf('month').format(format),
            });
            cursor.add(1, 'month');
        }
        const futureCursor = firstOfThisMonth.clone().add(1, 'month');
        for (let i = 0; i < 6; i++) {
            dates.push({
                description: irDate.formatDate(futureCursor, 'MMMM YYYY'),
                firstOfMonth: futureCursor.format(format),
                lastOfMonth: futureCursor.clone().endOf('month').format(format),
            });
            futureCursor.add(1, 'month');
        }
        return dates.reverse();
    }
    render() {
        return (index.h("ir-filter-card", { key: '708883461ef65b7d3364366ec744d120a80f6264' }, index.h("wa-select", { key: '38f788ecd917901fbfd24aefcdbfc18779ec73ce', label: t.t('Lcz_For', { fallback: 'For' }), size: "s", value: this.filters?.date?.description, defaultValue: this.filters?.date?.description, onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: this.dates.find(d => d.description === value) });
            } }, this.dates.map(d => (index.h("wa-option", { value: d.description }, d.description)))), index.h("wa-checkbox", { key: '49cf87e6c1cdd018df584d9df90d98f76f22ad2a', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t.t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), index.h("div", { key: '9ab89b38942c6e9d75f4c3f382d7fbdfaa5850e4', slot: "footer" }, index.h("ir-custom-button", { key: '73049208608c482349e8296b5fb754315214bc6f', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: '6f9d96fee85edbf7cdd2bb68d5c086bf9cb83b43', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
    }
};
IrMonthlyBookingsReportFilter.style = irMonthlyBookingsReportFilterCss();

const irMonthlyBookingsReportTableCss = () => `.sc-ir-monthly-bookings-report-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table--container.sc-ir-monthly-bookings-report-table,.data-table.sc-ir-monthly-bookings-report-table{height:100%}.ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.cell--align-start.sc-ir-monthly-bookings-report-table{text-align:start !important}.cell--align-center.sc-ir-monthly-bookings-report-table{text-align:center !important}.cell--align-end.sc-ir-monthly-bookings-report-table{text-align:end !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-monthly-bookings-report-table-h{display:block;width:100%}.table.sc-ir-monthly-bookings-report-table{width:100%}.text-center.sc-ir-monthly-bookings-report-table{text-align:center}.text-capitalize.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-neutral-fill-quiet) !important}.cell-stack.sc-ir-monthly-bookings-report-table{display:flex;flex-direction:column;gap:0.5rem}.cell-stack.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.value--primary.sc-ir-monthly-bookings-report-table{font-weight:600}.value--previous.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-monthly-bookings-report-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-monthly-bookings-report-table{flex:1 1 0%}.occ-bar--previous.sc-ir-monthly-bookings-report-table{--indicator-color:var(--wa-color-brand-fill-normal)}.legend-cell.sc-ir-monthly-bookings-report-table{white-space:nowrap}.legend-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.legend-dot.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;border-radius:4px}.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table::part(body),.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table [part~="body"]{min-height:50vh;padding:0.5rem}.legend-dot--current.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-normal)}.ir-text-end.sc-ir-monthly-bookings-report-table{text-align:end}`;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        return (index.h("wa-card", { key: '37b734995eba22d4091b2dac9da7f6346909f344', class: "daily-occupancy-table__card" }, index.h("div", { key: 'cd9b71edf7f8e81ae95468cab9df797e4529644f', class: 'table--container' }, index.h("table", { key: 'e23e8e1a8b1673daab76d1d59dc3d8d1e85823aa', class: "table data-table" }, index.h("thead", { key: '135ce8a9f8ae806e11b74030dd1a6d7e02a2a9a6', class: "table-header" }, index.h("tr", { key: 'b7ab20e622ee081e562e73244fee8a8734544bf4' }, index.h("th", { key: '23f5610d81ce111c304af7b93ae3e1aeee453794', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: 'e7c6e17a4f90e1b6b8f28b8f84ada746db37d41c', class: "text-center" }, t.t('Lcz_UnitsBooked', { fallback: 'Units booked' })), index.h("th", { key: '27b7915fff102fb1ac2da77f85807ae8cdf32d25', class: "text-center text-capitalize" }, t.t('Lcz_Adults', { fallback: 'adults' })), index.h("th", { key: '8d05d1fdcd23a589f511d1f948c5168091a970a4', class: "text-center" }, t.t('Lcz_Children', { fallback: 'Children' })), index.h("th", { key: '3d194f34e85042afd730c464f4612194341cb59f', class: "ir-text-end" }, index.h("ir-tooltip", { key: '3c5a9388993bf2bf321a159ab0371eb0b07e7975', customSlot: true, message: t.t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, index.h("span", { key: '6242862257cc1e743ce4d7b187ec31a6b6992aba', slot: "tooltip-trigger" }, t.t('Lcz_Adr', { fallback: 'ADR' })))), index.h("th", { key: '7980bb442ff587703b021a5b4708d6e484885388', class: "ir-text-end" }, t.t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), index.h("th", { key: '4773f955fb90d8106f7389aaeab0456a6547db1c' }, t.t('Lcz_OccupancyHeader', { fallback: 'Occupancy' })))), index.h("tbody", { key: 'ab5915ea570af4bf42c457277cb1fb0d7d9e0a49' }, this.reports.length === 0 && (index.h("tr", { key: '1ae68a35519423a817c4f325df078493a6b21b1e' }, index.h("td", { key: '620b5ac4ef4748e9fe73dad16cf68092222b48dd', colSpan: 7, class: "empty-row" }, index.h("ir-empty-state", { key: 'af95867e9bd2148f5db478355fc6e0412d8962d7', message: t.t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = number.formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? number.formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: "text-center" }, irDate.formatDate(report.day, { style: 'day-only' })), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, number.formatCount(report.units_booked)), report.last_year?.units_booked > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.units_booked)))), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, number.formatCount(report.adults)), report.last_year?.total_guests > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.adults)))), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, number.formatCount(report.children)), report.last_year?.total_guests > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.children)))), index.h("td", { class: "ir-text-end" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && index.h("p", { class: "value--previous" }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "ir-text-end" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && index.h("p", { class: "value--previous" }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: "cell-stack" }, index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, mainPercentage), index.h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, secondaryPercentage), index.h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), index.h("tfoot", { key: 'a7fd210d943be8a2efbe8fb9c862af22f534dacc' }, index.h("tr", { key: '11080e8d41ac310affa6d9d3dfc0a839960ec405' }, index.h("td", { key: 'c1c99424e55d77b506d08c247ed98e3690be39e3', colSpan: 6 }), index.h("td", { key: '0606cbe11af0bd8d504401e46c84aec24d01529f', class: "legend-cell" }, index.h("div", { key: '79ddbdd66cff32feb260f4b3a2c8bb28e6fb15d9', class: "legend-row" }, index.h("div", { key: '7bc6b2f3a7760d750f1a1fe0403eda14c75c6265', class: "legend-item" }, index.h("div", { key: 'f06f170516bbe76136826189644e0e325ef06535', class: "legend-dot legend-dot--current" }), index.h("p", { key: '59d435e1d36ba9917e523a7940399b624e2fed48' }, t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), index.h("div", { key: '58938523505ac8acf2af0d8b90c71d6c6f7406bb', class: "legend-item" }, index.h("div", { key: 'a85b7c4ad52e7af8c3798ab8e67cbe09ed596395', class: "legend-dot legend-dot--previous" }), index.h("p", { key: '0d1a6939fc917ff1b50301cdcc275c341eb20218' }, t.t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
    }
};
IrMonthlyBookingsReportTable.style = irMonthlyBookingsReportTableCss();

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;
