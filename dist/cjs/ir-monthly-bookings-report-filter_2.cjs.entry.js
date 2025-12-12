'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-4eb57996.js');
const utils = require('./utils-9892967b.js');
const calendarData = require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./index-8bb117a0.js');
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
        return (index.h("div", { key: '49e2ae6d5e2f80a2f77a080bf4bf50ade1c14265', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'f113e5730b81cb4e1c46d3320f93b33c4d52f92b', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'a9905153477b8b9d1ea2446252b30e7b93e7b9ec', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '830bacf2d61a5ae194097c683e748ae39ca7af66', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '1c71914463fa49af9a953542c7dae750750ab071', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '47e56f2176fc221d66a7609eaf9f6b2a18eefb47', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters || 'Filters'))), index.h("div", { key: 'f97a608c8881c70f534ef058e99dd0333a6e5a2f', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("fieldset", { key: 'd06964edc95b2c9ea0844ea9f1bd4a9d3ff561d9', class: "pt-1 filter-group" }, index.h("label", { key: 'be5fd22ec70269ba9297d91df16d042596ac7c3c', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), index.h("ir-select", { key: 'f099b9d10658e7393148d558f171768665dbb3fa', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), index.h("div", { key: '7821e4419dfe3be1fb43526839feedfe114dccf4', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'a1025313ebf84255b221120649b088134c21f1bc', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '11f73448a195e9a66ba5e17a3c43a31f3b1e447e', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '704b089ff1189d0e43d368762825c2c544becd44', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '41525f545d9adc956a60a1a39bd58dfd340a55ed', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'c15b5a1c9963e56809a234569f88820d865bcf50', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-monthly-bookings-report-table{flex:1 1 0%}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;right:0;background-color:white}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (index.h(index.Host, { key: '9d18b4553f7e2e59916fe01586ca3b4d615667dc', class: 'card p-1  table-container table-responsive' }, index.h("table", { key: '11c68f87a7ef3ad56041d586b567cfd8d7b6068e', class: "table" }, index.h("thead", { key: 'd71c4dbcd5826743af868c1805842e7101aa2b4d', class: "table-header" }, index.h("tr", { key: 'bcd5c45c18d6eb8d3ef6032d0b41a7aafffdfb60' }, index.h("th", { key: '96a3300ce3bcd7184572a25c15f426d6c270c927', class: "text-center" }, "Date"), index.h("th", { key: 'a8d8485ad573aa66bf4872ccd98aea5e118998ea', class: "text-center" }, "Units booked"), index.h("th", { key: '9cc9122c3ecbd950533d8027132d3890a1016141', class: "text-center" }, "Total guests"), index.h("th", { key: '651dd9ce7eab16abc59e5c0b43c2fea4286c0a5a', class: "text-right" }, index.h("ir-tooltip", { key: 'abfbf2a7678a0a1d092baeef7f8fd87f280ea225', customSlot: true, message: "Average Daily Rate", alignment: "end" }, index.h("span", { key: '4528a8dac62283e13f0969a4f844c71dae17b945', slot: "tooltip-trigger" }, "ADR"))), index.h("th", { key: '8ae3e962182ff4ed83173778dcc2bde3d8e704f6', class: "text-right" }, "Rooms revenue"), index.h("th", { key: 'e2231501b59429ee1614d9f5db2c3bfe863559fd', class: "" }, "Occupancy"))), index.h("tbody", { key: '102d0cf888ecee94f8328deb88f6fa6675251a69' }, this.reports.length === 0 && (index.h("tr", { key: '53ea793cb495ce98f30037778b508f68169a205b' }, index.h("td", { key: 'f513a3650f54ade719443ea759d0499bd4b7ef4a', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: 'text-center' }, reportDate.format('D')), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && index.h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && index.h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: '8a6a367b5cc4321a6f98917e85cbc3abcfbcbd2f' }, index.h("tr", { key: '53bd49f2738b864bd62b4475eebfcc2758631d43' }, index.h("td", { key: '497a9f10dc5baa3654fca16234e22b091482da02', colSpan: 5 }), index.h("td", { key: '06ca337013ce70f99dba82ee5d32b17246dd738b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, index.h("div", { key: '089ebd4dadcb803d91ca6fb5704232416a427238', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: '468b9bd9599088f255a7da4df8d44bb864e57d55', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '46410240cd4d08cd80cb6f3b1b4dc00bbcd4d11b', class: "legend bg-primary" }), index.h("p", { key: 'e698b75dae76bb6754f019b7f4cf8c2f5e7cac93', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'a57b5d5a99e9b49c6e90e77007c0c0ab0e659c33', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'eeb13522057aec2032c1404f83425360c0b79011', class: "legend secondary" }), index.h("p", { key: '3898a6450d0ba03840e346723b27d7ba63003b73', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.cjs.entry.js.map