'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-4eb57996.js');
const utils = require('./utils-3b96f8e3.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./index-63734c32.js');
require('./axios-6e678d52.js');

const irMonthlyBookingsReportFilterCss = ".sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}";
const IrMonthlyBookingsReportFilterStyle0 = irMonthlyBookingsReportFilterCss;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
    }
    isLoading;
    baseFilters;
    filters;
    collapsed = false;
    window;
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
        const firstOfThisMonth = moment.hooks().startOf('month');
        const startDate = moment.hooks().subtract(1, 'year').startOf('month');
        const dates = [];
        const format = 'YYYY-MM-DD';
        let cursor = startDate.clone();
        while (cursor.format(format) !== firstOfThisMonth.format(format)) {
            dates.push({
                description: cursor.format('MMMM YYYY'),
                firstOfMonth: cursor.format('YYYY-MM-DD'),
                lastOfMonth: cursor.clone().endOf('month').format('YYYY-MM-DD'),
            });
            cursor.add(1, 'month');
        }
        dates.push({
            description: firstOfThisMonth.format('MMMM YYYY'),
            firstOfMonth: firstOfThisMonth.format('YYYY-MM-DD'),
            lastOfMonth: firstOfThisMonth.clone().endOf('month').format('YYYY-MM-DD'),
        });
        return dates.reverse();
    }
    render() {
        return (index.h("div", { key: 'f08c8c27c68725da85229abbb59398f18ab9e6ac', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '991c580b4b30a2c351455f9d3bc73072ddc49306', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'c3dd3f3f20dd971bd76c82798d15b0a44b2acd0f', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '2533235aaeafe0933878e59bb7609fd90719702f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'd1e63ee72952190b45112ef6b1d8cf844960688a', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'bd9417a186c959182c7edafba56ce39a398ecf66', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters || 'Filters'))), index.h("div", { key: '0667a0aeafbbd34fb25a1102493e03716b0cbfe1', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("fieldset", { key: '5cec7a005755b6e6cea17b30758a0b70242aa36d', class: "pt-1 filter-group" }, index.h("label", { key: '3499c96bdfb218c8dcf3ec4ac3cf10a7c50db51b', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), index.h("ir-select", { key: '882108e6b9d72f826fd66d42b73f877452f3853f', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), index.h("div", { key: 'bcabac60947f2e654cbada1ef4bc6f7f3f57faa9', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '19b66af34950e8480810b29bec7be05de5009b6c', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '6fa1779a28f0b0c78ea0d5540b9a755a9a7ded42', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '54186c3d0fd69fb25a2b25abe1e9c31becd8c53f', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '639eae4586ad4ddb00b26eef44a9ccb1cb70391d', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '6b40cd2d64263a4636328427ba80632898cc5724', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;right:0;background-color:white}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (index.h(index.Host, { key: '1033ac18bc7e88475888b55586133c6b0205ceca', class: 'card p-1  table-container table-responsive' }, index.h("table", { key: '98a2e5960729d2f4d7c07ca2b2ab8724b92c9dda', class: "table" }, index.h("thead", { key: '022355ba63ba1b7b36a19b68b730f870e1cb966e', class: "table-header" }, index.h("tr", { key: '24f2ea265496a9710245991f1b822e6cecffd65f' }, index.h("th", { key: 'b223cfc5c46eb13084617fa8613a8a04cc59e28a', class: "text-center" }, "Date"), index.h("th", { key: 'fc91d792047d471d04c097083fa76f5d58b1cd76', class: "text-center" }, "Units booked"), index.h("th", { key: '549cb19cef56ea2329a7eef01ce56dc03aaf0fe3', class: "text-center" }, "Total guests"), index.h("th", { key: '8cc5cdfaeae93c4ca26aa2f25fcb6ec9263f02c8', class: "text-right" }, index.h("ir-tooltip", { key: '16d0ae948179484512b37719425315b9a460a5c4', customSlot: true, message: "Average Daily Rate", alignment: "end" }, index.h("span", { key: '53e57a8ea4483cdbf2581d7e27b1016d0b1d8fa1', slot: "tooltip-trigger" }, "ADR"))), index.h("th", { key: '960c42b641611cc51c350ef9c8f712dd55b89e2c', class: "text-right" }, "Rooms revenue"), index.h("th", { key: 'dbed7b6364bd98ab8b1b0801950112b3d36db78f', class: "" }, "Occupancy"))), index.h("tbody", { key: '0d787c2aaa7446cbccda4d2f58749ef07892de13' }, this.reports.length === 0 && (index.h("tr", { key: '7beffb63254afcb9b5789ea55a247d883dc21985' }, index.h("td", { key: '895f04403a6fefd88fa8806e40fc190746f080fb', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: 'text-center' }, reportDate.format('D')), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && index.h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && index.h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: '6daf80420f8f9c75cc2bfdf2e7ea2b1361db84e4' }, index.h("tr", { key: '019492c8e6df46dd6eff58136bccd371906ea61b' }, index.h("td", { key: '2520f64d9e2a0681ee8fa65b357bdf9dacc7cd80', colSpan: 5 }), index.h("td", { key: '331ff9d7aacf15f8ad1ec75fe0db74b5c4a71392', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, index.h("div", { key: '53e98873875e79428f8bee437855513e4e2d739a', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '01a69afa3cadda17e489861bf71846ba03a54cfe', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '978323d162b87f8819d8ba68fada903bd38d75aa', class: "legend bg-primary" }), index.h("p", { key: 'f63f8805dd6a3cd3388f61858721d7d157e92e41', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'a437e545c40c4eeeee0850615ef2dd600b93d72f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '37292c0d36c6439ba70cd9e2334f043778e91ac8', class: "legend secondary" }), index.h("p", { key: '723ca1c6eb43b4c4d863a1d68b7f1e750c36b1ea', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.cjs.entry.js.map