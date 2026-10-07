'use strict';

var index = require('./index-CQkpA5n3.js');
var moment = require('./moment-CdViwxPQ.js');
var irDate = require('./ir-date-CUtS9vzZ.js');
var t = require('./t-wyGILxEL.js');
var calendarData = require('./calendar-data-Br2L_0sg.js');
require('./booking.dto-CUSvGTvD.js');
var number = require('./number-C1isaNqY.js');
require('./locale-scope-C7rmpwuA.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./type-Bj2x9EWc.js');
require('./types-BVJQZ50e.js');

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
        return (index.h("ir-filter-card", { key: '8360115b100b9930cb5acee663564ee20fa55f01' }, index.h("wa-select", { key: 'a1654a5b2111d69b903b37eb73fb256e175acd2b', label: t.t('Lcz_For', { fallback: 'For' }), size: "s", value: this.filters?.date?.description, defaultValue: this.filters?.date?.description, onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: this.dates.find(d => d.description === value) });
            } }, this.dates.map(d => (index.h("wa-option", { value: d.description }, d.description)))), index.h("wa-checkbox", { key: 'c1802173d9ed058b72a8d5a33ea5aacc9b81e030', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t.t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), index.h("div", { key: '44e1ef581c868574115b3a56b34d44e0c94e05cb', slot: "footer" }, index.h("ir-custom-button", { key: '7d6c6f2938e1dfc45d0f575d6c2ec6b3eefd6780', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: 'cafb24c9c99b65ed530fbf5ce5308e6f41c34229', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
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
        return (index.h("wa-card", { key: 'c59cb00a18c4994a03fd2ba68f46cc5cb4948f0d', class: "daily-occupancy-table__card" }, index.h("div", { key: 'bbbaaaefd598f4ae7ab5a9f56a5b9352eb05a776', class: 'table--container' }, index.h("table", { key: '8077e4f5f535f4d45b39a842f15e05cc4e875519', class: "table data-table" }, index.h("thead", { key: '27c89cfec9bf35a637903bee7caceb4b340d302d', class: "table-header" }, index.h("tr", { key: 'de2993bbd6233d469608738e82336eecef04ed20' }, index.h("th", { key: '9fb93c66d4360a531f759a2321de464f5032f343', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: '7fee5209da41edc4d61a847324bb435acca403a7', class: "text-center" }, t.t('Lcz_UnitsBooked', { fallback: 'Units booked' })), index.h("th", { key: '0702e19a0d25126f8cf2c28bfbc1a11701a6fdf0', class: "text-center text-capitalize" }, t.t('Lcz_Adults', { fallback: 'adults' })), index.h("th", { key: 'ea13aae1e38187a59d436ea48e34b43a8aa9caec', class: "text-center" }, t.t('Lcz_Children', { fallback: 'Children' })), index.h("th", { key: 'ad3a0baf44e03b448039e730e1492c3d00f69564', class: "ir-text-end" }, index.h("ir-tooltip", { key: '8a150a8f1f44ebc45413760335c4f440ca1043de', customSlot: true, message: t.t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, index.h("span", { key: '969593d1088db6f6b587410bc3288a4532405ecd', slot: "tooltip-trigger" }, t.t('Lcz_Adr', { fallback: 'ADR' })))), index.h("th", { key: '2c7ec62414349b6c78c28d7400be78b918b849d9', class: "ir-text-end" }, t.t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), index.h("th", { key: '8791d8c3a64307acbdbf1a91fbd649997dc6eb6b' }, t.t('Lcz_Occupancy', { fallback: 'Occupancy' })))), index.h("tbody", { key: '131d2ff389e5f13ac902f993382fa6c4559d47e6' }, this.reports.length === 0 && (index.h("tr", { key: '18f8f7df0769941adfb903fa18a22107cb5f8eb1' }, index.h("td", { key: '99af245f57c24fc2c3f3926a1c5e7e93791bbfa5', colSpan: 7, class: "empty-row" }, index.h("ir-empty-state", { key: '9a4d909027ffc1d5c047da565ddbc4cdb3d110da', message: t.t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = number.formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? number.formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: "text-center" }, irDate.formatDate(report.day, { style: 'day-only' })), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, number.formatCount(report.units_booked)), report.last_year?.units_booked > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.units_booked)))), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, number.formatCount(report.adults)), report.last_year?.total_guests > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.adults)))), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, number.formatCount(report.children)), report.last_year?.total_guests > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.children)))), index.h("td", { class: "ir-text-end" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && index.h("p", { class: "value--previous" }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "ir-text-end" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && index.h("p", { class: "value--previous" }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: "cell-stack" }, index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, mainPercentage), index.h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, secondaryPercentage), index.h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), index.h("tfoot", { key: 'b06294461abfcc450b0e7ce1d2a7412c601de104' }, index.h("tr", { key: '01048c71e176bad5cc5904fee899d20a99241148' }, index.h("td", { key: '6133a054f304ff7ea31fed6f035b016049d0ac44', colSpan: 6 }), index.h("td", { key: '020af798083a2274a9b9a19a3667af12e3d3ecfa', class: "legend-cell" }, index.h("div", { key: '9e735e039bbe23cedd53f4cad6ec8d4fb344938c', class: "legend-row" }, index.h("div", { key: '5e9599cc47256e2600dd4f6606a23ee43ec44ed0', class: "legend-item" }, index.h("div", { key: 'e08dec3c36474f2ace81e800fd4d40e8133ef9f7', class: "legend-dot legend-dot--current" }), index.h("p", { key: 'a6b193c83db35eb8e49e654fbb774d17f7cd38b0' }, t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), index.h("div", { key: '3865bb591b058e6eb3f8a788e2914d00f2896669', class: "legend-item" }, index.h("div", { key: '5baa311157d239c6cab8015ed3fe4094377771a5', class: "legend-dot legend-dot--previous" }), index.h("p", { key: '819afcbb93780f43716ddd44797f8ce23c54ec36' }, t.t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
    }
};
IrMonthlyBookingsReportTable.style = irMonthlyBookingsReportTableCss();

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;
