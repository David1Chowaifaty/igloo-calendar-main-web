import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-629477c2.js';
import { f as formatAmount } from './utils-2c3eaf63.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import './index-c4cf83be.js';
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
        return (h("div", { key: '49c6ec30f92a94b48ad524f57a844378569542c8', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '32b0f7a79cdf03f71f3fe626d6ba8b2c8e90caca', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'a5bb6cbaa53cacad31ce0aea96a1d2a2ecdfcee3', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'a3952c14308cc39006580e5dfe4a4b40f3c783e4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '8534361f4b1d14891cff8a5c6d720cc8a664a77b', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '5934a2479ca8ee4424744f10e172ab5bb4696b63', class: "m-0 p-0 flex-grow-1" }, ((_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), h("div", { key: 'ad6d24ee9adcfd9b17426d38362414a6615b706e', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: '21e01470c2f767acb4a7e544f6d231a022692ec5', class: "pt-1 filter-group" }, h("label", { key: '586ac8182518a8384ad37cdc4e2ccbb75328881e', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: 'c6eb6b92b9aaf1b0fa8437dfcefa561a53ff08cc', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, LabelAvailable: false, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: '5b3ec9de8cb318890e5540c2fdbd506638dd971d', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'd75a1b7850e175cc7274105cbdfd65fac444fca2', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'b99c5e30a5a7483b1ded7a842c99eaeb61795f78', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'dfc3a9e1607540efd487fac8b3d4b1fcaed10c4d', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '0e0072669744a21abc4b00e73371f9340cfb7eb8', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'c2d2ee099ef75aee73a3daa6ea504ff09be168b7', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
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
        return (h(Host, { key: '24f58860c9bcb42f69e82ec7582bc2ede7f568b8', class: 'card p-1  table-container table-responsive' }, h("table", { key: '118d331797be971d88176affe083b185804e3d39', class: "table" }, h("thead", { key: 'c65ad27a5f4b68b7ddd08347e86f96e09a794f42', class: "table-header" }, h("tr", { key: '839ffc53fd7994eeb163fa8b6e5f2c0b0ed5a9fd' }, h("th", { key: '4afa7783b9a5b1c1bb8a694d5732e24d15b924ca', class: "text-center" }, "Date"), h("th", { key: '0b1ff691fccb3330eb3047514aaead43383cc45a', class: "text-center" }, "Units booked"), h("th", { key: '7a00feef9472d6b0dca541c2cd02d41305ab8971', class: "text-center" }, "Total guests"), h("th", { key: '8110b0e74fe320726981ded5fe14792a3ab76ba6', class: "text-right" }, h("ir-tooltip", { key: 'c492e8973f19659c6c13daefaa7a8658dcf87fc0', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '70a4684ef5b954b0efef4b6ad37c5be6a8782127', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7c47713640011398811bd3bb7b1680ed70aa1003', class: "text-right" }, "Rooms revenue"), h("th", { key: '665a005b256864cc1f06ee7376f0ea7dc4a72c7b', class: "" }, "Occupancy"))), h("tbody", { key: '0754b469103c62eda279f41a069f37358d7e2f9a' }, this.reports.length === 0 && (h("tr", { key: 'cf4c61a894569435fbd8425814638d1bf9bf741d' }, h("td", { key: '3198d72c3b8a858a0a3c9389a7c54f353025ffde', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '9dfc3b921f2e4beb3af2a22b4bedff476646dd43' }, h("tr", { key: 'b270ad39912ae55689bb1b5fb43992df1cb8c419' }, h("td", { key: 'bbae1532deaaa85259cf63e1f9f58f7918ee48db', colSpan: 5 }), h("td", { key: 'b7402e1860a2d43d1aa456f11a57150a6e6a860a', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9d421c82a6701224605fb712199a0fb9603238e0', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '94695366d6ed5c163e81cc767815c4d06714bee1', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'b72cbce1b7b8f22af5de70b1e7d842c939582cca', class: "legend bg-primary" }), h("p", { key: '971bdab7b9d3a609669f1450ecdc809d91831483', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '491568da3b46d67e0e7def7656dc6df74c601cb5', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '49f03739e15d4fa9a866db23f2fa4bac1bc2540f', class: "legend secondary" }), h("p", { key: 'd84f371a0825240b1ab1af01800a01b52b7e3a80', class: "p-0 m-0" }, "Previous year")))))))));
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