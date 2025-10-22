'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-ee4f3fbf.js');
const calendarData = require('./calendar-data-d2bec4fe.js');
require('./index-7564ffa1.js');
require('./index-63734c32.js');
require('./axios-6e678d52.js');

const irMonthlyBookingsReportFilterCss = ".sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}";
const IrMonthlyBookingsReportFilterStyle0 = irMonthlyBookingsReportFilterCss;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters", 7);
        this.collapsed = false;
        this.dates = [];
    }
    componentWillLoad() {
        this.dates = this.generateMonths();
        this.filters = this.baseFilters;
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return (index.h("div", { key: 'be682c27bd20bafa7c351d8e8f95823fd587f8c5', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'b683dac29c1d4379948addf0a6fee64d09ae2432', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '8438a76e7d12d4edf1bd976b1bf7b2ac4722dad0', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '63b6cd73b1354fbc0f5c8b45ab77333216ebd8f3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '32d887d2a1a3782e4d332e201ec4fb23ab1af526', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '941893c392a99948f220ad7120ad29a04b30cc92', class: "m-0 p-0 flex-grow-1" }, ((_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), index.h("div", { key: '2e18ab262a6487e72ed01faff1b3ce1645a43002', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("fieldset", { key: '1155faffede9ef951a81e4debcf7937e9b60aafc', class: "pt-1 filter-group" }, index.h("label", { key: '8e6c4ea0c63ef2941937165d8c16928784bddc96', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), index.h("ir-select", { key: '04390e5486ef7b4537f394233a2763b6b6d35f40', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), index.h("div", { key: '077fb3b4e798e2a421893610382f134e1d5348f2', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '28c003e0d0238300d7edd8730163ca37ebe7c967', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: 'a1c4a28e45cf1f34fb7ec10d5c65ab99f8445836', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: 'a0cc04ab04d88974175e416d895c842aaf1ceb75', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '181c41e345a8ba1354e5c6be2fff2a7eef88712d', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '1cf0b12498899ba077d343ebf6e5be9f1e682901', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (index.h(index.Host, { key: '7e7732dcadc30c45a83b44056510be48b39ed1b2', class: 'card p-1  table-container table-responsive' }, index.h("table", { key: '46040ebc3bf08ac7cdd72977e48c032d48a7dd05', class: "table" }, index.h("thead", { key: '29eac7d752f0dedc21e987329eccdedbee7e26ef', class: "table-header" }, index.h("tr", { key: '98ffcb7bc2a5891b7e7ddcc91eccc75bd0f78eaa' }, index.h("th", { key: '2b25dce97b5ce31bb58dca735ee014bddd6d03be', class: "text-center" }, "Date"), index.h("th", { key: '8df0e9360ccb994c3fc745d466d5186e40d417e8', class: "text-center" }, "Units booked"), index.h("th", { key: '43f1b7063cd03b71ff76b4358b3a480def90ef89', class: "text-center" }, "Total guests"), index.h("th", { key: '5986d68c6f87237d529fcf7684e9adb1738f4d8d', class: "text-right" }, index.h("ir-tooltip", { key: 'f76ac0d39f0d2049f4d5fe94028637c1ee3c764f', customSlot: true, message: "Average Daily Rate", alignment: "end" }, index.h("span", { key: '7b07a23c6a811d29744a9362620b0e4c40a5049e', slot: "tooltip-trigger" }, "ADR"))), index.h("th", { key: 'e73571ee5bcf6b5b6957428eaea0ddd1b1f13c81', class: "text-right" }, "Rooms revenue"), index.h("th", { key: 'd3273a23e4c81a7ea69a5a00879067436fbc5b36', class: "" }, "Occupancy"))), index.h("tbody", { key: '9b76a71fb385ed23a9cf7a18f0d62ea769ce9358' }, this.reports.length === 0 && (index.h("tr", { key: '9a5232b95374fd249cac70caaba52c6ae586dd39' }, index.h("td", { key: '58078a8c6fbd4568d71996522229ded0966f7b2b', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: 'text-center' }, reportDate.format('D')), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && index.h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && index.h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: 'd480f78c74cd999423479021eb0e203fa43a5985' }, index.h("tr", { key: '129d0769135e0bd8fa003a5050f5e1c87a003f44' }, index.h("td", { key: '2a84d23a5adbe7ca23f5263fe5aecd1973509fff', colSpan: 5 }), index.h("td", { key: '27d28f8f8bd778415b92dddd5f9fcc8e916f5446', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, index.h("div", { key: 'ef1c35e6062682e8f36e7d637490bbdc75a8f6bb', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: 'd9a373bb975c9181f1ab618caee8665214ce2a05', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'ddcbfec33f437d63bb64302a0499f3a71df3cc44', class: "legend bg-primary" }), index.h("p", { key: 'e4df893fbcfdff11bc09df4282b2556ac159b3f8', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'daffe1039e44438d49da9ad9af6a43d3f5b86d52', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'df69723031f1a07518fef5816226ee1102dce0a2', class: "legend secondary" }), index.h("p", { key: '438bf6f3bff97505bec2f29797792fb4981f080a', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.cjs.entry.js.map