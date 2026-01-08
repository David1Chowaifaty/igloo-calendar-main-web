'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-32782582.js');
const utils = require('./utils-2cdf6642.js');
const calendarData = require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');
require('./index-8bb117a0.js');

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
        return (index.h("div", { key: '233ade5426a02d5ab789d538e8d886ee058706cd', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: '4ffbadcab0565a75589b06f24b4b182c46cd535c', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '8e720079c01375baaaf5a07eafbc1b12be4cdbc5', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '9a1c325dcef130a8af40aa35bf013df2c806006e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '7d400cedde019b04d97c24c51d3859c599dc84aa', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'd048c45e1a90802de4ade4f6d0bdf7a1adb7101b', class: "m-0 p-0 flex-grow-1" }, locales_store.locales.entries?.Lcz_Filters || 'Filters'))), index.h("div", { key: 'c0d2b54498e0ecf53384148b4162f88c0a4b2aa0', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("fieldset", { key: '4d545f6d99f8376482d4a16c3b32ae5f1c9fcfff', class: "pt-1 filter-group" }, index.h("label", { key: '04a51a0fa79b91c459bf51d8dda9b5a97bd242ae', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), index.h("ir-select", { key: '265aaaf60ba94161f890a1e20dfe1c7e4e703f4d', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), index.h("div", { key: '9269ea7e86a9f79d1e97fb09b6e55079fca75d0c', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '4deaf61bf31bc3ca5a3ff84e754e5fb394487d58', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: 'b210cabafcbf767b5d44e4e9bbb835630ac3158f', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: 'ac105178f69c60db4b562eb8c532e01dd200c2c4', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: 'ed2bdb7a940aea85cbdef3e54001ff3abb58e333', btn_type: "button", "data-testid": "reset", text: locales_store.locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '126cde43dbe1cc1b0c8adbfe5eb061b38f929fc0', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales_store.locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-monthly-bookings-report-table,.data-table.sc-ir-monthly-bookings-report-table{height:100%}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (index.h(index.Host, { key: '81dc0becda5384d4dc1bfecc801e8ef132b953d0', class: 'card p-1  table-container table-responsive' }, index.h("table", { key: '6369516af1cf90f31030dcb48ea7eee23c514bd8', class: "table" }, index.h("thead", { key: 'a758b8703c8a93e6ed36bd76b0a0e120af18d47c', class: "table-header" }, index.h("tr", { key: '674ba0b65e8a4b5f70a05c6831fadd79ff089018' }, index.h("th", { key: '291c2f38d1ffc80a7198bc785bef62672f88b0f4', class: "text-center" }, "Date"), index.h("th", { key: '3d3893319b656d9f7767ba974ca9c71f38e50a02', class: "text-center" }, "Units booked"), index.h("th", { key: 'd37fd5112473e7aad0d82822bf2a58cfc1a1ee17', class: "text-center" }, "Total guests"), index.h("th", { key: '5d6c8b84a64fa0b3375736805b523156f6874268', class: "text-right" }, index.h("ir-tooltip", { key: 'adfcc985b49b43991563528a8abf2e47e22751f9', customSlot: true, message: "Average Daily Rate", alignment: "end" }, index.h("span", { key: '11746cdf0ebff9d4e23eb4017718441a49ef0ae8', slot: "tooltip-trigger" }, "ADR"))), index.h("th", { key: 'b5809858a3ec6125089ab2426286998039276638', class: "text-right" }, "Rooms revenue"), index.h("th", { key: 'dbea08975f21328dc2b0f13be45bc46b5d896932', class: "" }, "Occupancy"))), index.h("tbody", { key: 'afa051edd0477d960e16caf860e42709ef94c8cb' }, this.reports.length === 0 && (index.h("tr", { key: 'f342974628d5dd239437a02bba87c69bf346b79a' }, index.h("td", { key: 'f6fb497abd015a6e76f2c4daaa14a66c21b8af0e', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: 'text-center' }, reportDate.format('D')), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && index.h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && index.h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: 'e937646134ff1d3da62d743d03718b12d5a7c397' }, index.h("tr", { key: 'b6eb62d7093c87053e9293773a6ea3389e1bfa5a' }, index.h("td", { key: '2335e81f9d3f3fcfba498f91409716eeeb362dd6', colSpan: 5 }), index.h("td", { key: '3e3b2e87921b1e68eef4161eb0c20a52cc001d2b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, index.h("div", { key: '8be36188bd5cf396342ad12ae01c1e9d890cdaac', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: 'adf83767627022a7ea87ca91590d57a94891cc8b', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'c9089a78a40111bc26ab6ca85a70082bf009cc91', class: "legend bg-primary" }), index.h("p", { key: 'c40c174cd80c1cfc1df8398244c05d24988761bd', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '4666ef8cab41a06ac542d97fe53b5041637e190f', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '355bb0e8e0216f231dc2cfeba460325b7f366e11', class: "legend secondary" }), index.h("p", { key: 'a4afdc7b79d0ffbd587e6953ddc697e83bb631be', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.cjs.entry.js.map