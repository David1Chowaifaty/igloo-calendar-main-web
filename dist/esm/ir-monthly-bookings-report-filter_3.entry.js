import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-53ec3957.js';
import { f as formatAmount } from './utils-8efeec43.js';
import { c as calendar_data } from './calendar-data-a6093df2.js';
import './index-c1c77241.js';
import './index-6ecc32cd.js';
import './axios-aa1335b8.js';

const irMonthlyBookingsReportFilterCss = ".sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}";
const IrMonthlyBookingsReportFilterStyle0 = irMonthlyBookingsReportFilterCss;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
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
        const firstOfThisMonth = hooks().startOf('month');
        const startDate = hooks().subtract(1, 'year').startOf('month');
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
        return (h("div", { key: '456b6a174dbab28011105f25dad8709a303927c9', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '14d08d28089506df78599edce26ceff7ea4e3a80', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'fa83a796c988ff321ddab3c11dbe7e8579c24bac', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '5ab3b41a412f07ec504df6963087e48c1c85139e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'd70281bd2140da6a917130d11b1113fcc862f6ba', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'ac9355040c6e4a4bfe8bc8ec07c15741b183036a', class: "m-0 p-0 flex-grow-1" }, ((_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), h("div", { key: '62584d912661d5d1bb0d75443a729e9444f800d5', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: '305db036ceb22700360855cc481af9ada62770f3', class: "pt-1 filter-group" }, h("label", { key: '7e49b54c367ff8b867e5a69c8471f0ae11ea5784', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '939e7302b044fa07337ecef9f58df2aee7e51acb', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, LabelAvailable: false, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: 'ef2bcfe6b80792b08ea710612dfa08e4b7bbd1ac', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '1eed2afff6c214c06b2dfaa26e2bb6f08252785d', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '688317733d46bdf683b41aee1565fa1ba34f3c48', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'ad1bef2e878c0aa40a9e9960587622c65a805c07', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'cc4bcb1e890f7bf7b5614a38b466e09201819f55', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '11fe0a397bcaee09988e99f6f0531cac68eca442', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'f081610ed8fbfb1d61c65f337d2e03479bfd7ac2', class: 'card p-1  table-container table-responsive' }, h("table", { key: '494324d553bfb5f0383018d1b796362c7a2e140e', class: "table" }, h("thead", { key: '1f5e9fbf2e9e506f7c98b33e1f9b2076d47b16f1', class: "table-header" }, h("tr", { key: '840d809df627ea7291bbc44e0f793d26f7b6d89f' }, h("th", { key: '329046fa82fe3c8dc18733e4d1fa4df5b8d31c17', class: "text-center" }, "Date"), h("th", { key: '53b2209aada7b0dbbdcb9dc28e22e74ec17dfed5', class: "text-center" }, "Units booked"), h("th", { key: 'b007547d4b2046fe25e45bf24a2e81c26fef81dd', class: "text-center" }, "Total guests"), h("th", { key: '118398d61935ec06cc05293d043796e604520627', class: "text-right" }, h("ir-tooltip", { key: '2eec77e2bcc3ffb92cef20ded830460e30c4e211', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '757f4f5a5ec287e6f40d9372c85b441d5c022ca8', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'f1590ce98ae03431d27750e914cb8cc973e9e943', class: "text-right" }, "Rooms revenue"), h("th", { key: '1a5941d0ac844b66d8c2dd5698e3e708cacde18f', class: "" }, "Occupancy"))), h("tbody", { key: '47bb8a4ff3963b777ec41678b5eee58082074402' }, this.reports.length === 0 && (h("tr", { key: '3b5e30d0d98e3b0321668be79b913e088eb901b7' }, h("td", { key: '126903b18d376c0449a44bcefcdf72dca634f8c0', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '4d7e275817aa6ccf10ce45b7ddcfa574d824893b' }, h("tr", { key: '46730c7f0911b7fe9c9f217e11316ef3d7e77900' }, h("td", { key: 'eb5a5d8d8412b16b270c8f4571cc31d375318834', colSpan: 5 }), h("td", { key: '0fd007813a0a8c41096c0ad68a87e448e5a1111b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9a98fdf2cd9e148cbabf6863d769dbb0c55beb2b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '7db8dde2e9e544ea328e5862e30fff87c36d8acf', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '547221feccb83dfd1dc7c7315b7bfda8c96d52e8', class: "legend bg-primary" }), h("p", { key: '1d0f78807b4f884f649b8ab5ff6eac5793e4d388', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c7776ff5ab89dbe9ee6ae2191a7775a8cea5a70d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2c9d87a45c3ac512eb266fb57188a1a0e63efb7f', class: "legend secondary" }), h("p", { key: '8c40670e9bfc40046408bd0cc247df1658ce3076', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

const irReportStatsCardCss = ":host{display:block}";
const IrReportStatsCardStyle0 = irReportStatsCardCss;

const IrReportStatsCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (!this.value) {
            return null;
        }
        return (h(Host, { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("p", { class: "m-0 p-0" }, this.cardTitle), h("ir-icons", { name: this.icon })), h("h4", { class: "m-0 p-0" }, h("b", { class: "m-0 p-0" }, this.value)), this.subtitle && h("p", { class: "m-0 p-0 small text-muted" }, this.subtitle)));
    }
};
IrReportStatsCard.style = IrReportStatsCardStyle0;

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table, IrReportStatsCard as ir_report_stats_card };

//# sourceMappingURL=ir-monthly-bookings-report-filter_3.entry.js.map