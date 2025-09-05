'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-bf9b1b25.js');
const calendarData = require('./calendar-data-960b69ba.js');
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
        return (index.h("div", { key: '6e71d105f90a0ceaff829ac987ea58d683f93d0a', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'b320b183094189509020305c3036f5ba88cd1730', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: 'be313d58a06cea39a22b0745fce94d698a802cda', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: 'c1b40909460d29d46f670ff8809f695404c97483', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: '1850961bf11d9ed631b59473bfb4df9f57caafb5', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: 'b43cedaabae38a36f96d1ef271cbf15a0bf9e590', class: "m-0 p-0 flex-grow-1" }, ((_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), index.h("div", { key: '96de750cda4c17c59860f7a4fa070750839417d0', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("fieldset", { key: 'f8b8b4baa4c4004c84f321363adca4f192402d5e', class: "pt-1 filter-group" }, index.h("label", { key: '7ba9237f984bbdf91a414b642ef98570ddd95d69', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), index.h("ir-select", { key: '7114a6c0169608339d961dc20edd9ccd0d59479f', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), index.h("div", { key: 'e7ff717d3e2bd47839b321fa69bcca395e5338c4', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: '7a4d257c436ecbdc7927d5fce32e5b6a78fb3140', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '74fb8c9380732ffd96e4bac883ef15b18dd3fc8d', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: '95774411336ba414f6036a6e2c210587572ef88f', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '84e38020f5440c5e6e00ca17ea6d373ffed24e41', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: '53a4cb64a4ef222aedb176a6fa5a7311ec1f18a0', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
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
        return (index.h(index.Host, { key: '28ffd942b73c33c96eccec870cdea9eeeb80d495', class: 'card p-1  table-container table-responsive' }, index.h("table", { key: '266abc231cc487d242a2b37a5f0dfe07608a4360', class: "table" }, index.h("thead", { key: '9a3414f67c8fb0286d6a77cdc2d1922601d47c70', class: "table-header" }, index.h("tr", { key: '3d50a056f37627bfc07ff46bb549a712435ca4a9' }, index.h("th", { key: '57654962dd54aeb4f78291dbd85fb3084c05c9da', class: "text-center" }, "Date"), index.h("th", { key: 'a1b6e4761713b4250f0af72ac0d5ac9fc03d11be', class: "text-center" }, "Units booked"), index.h("th", { key: 'b70036c2a1d81d49cd390be72000714f2d2bcb97', class: "text-center" }, "Total guests"), index.h("th", { key: '13bd9937c1e9ff227d335895b8b03d5361931377', class: "text-right" }, index.h("ir-tooltip", { key: '345573351a0e961ed57b29594f13b48f851cdc51', customSlot: true, message: "Average Daily Rate", alignment: "end" }, index.h("span", { key: 'dfdb2647a9b33173d5464ef50f8f2e5ddca00543', slot: "tooltip-trigger" }, "ADR"))), index.h("th", { key: 'cae870e0081275487d10a557686c70971c96fc0a', class: "text-right" }, "Rooms revenue"), index.h("th", { key: '8aa426f3e449e38c273c45f19672eb968df45ee9', class: "" }, "Occupancy"))), index.h("tbody", { key: '17490e7127f38cfd8d4bfffb2cec6de275f05157' }, this.reports.length === 0 && (index.h("tr", { key: '74c662b23354a71b3e5116a636654065288d3f9e' }, index.h("td", { key: '3eac5fc182a0a6dc01d23dec10f1c59bf764c557', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: 'text-center' }, reportDate.format('D')), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && index.h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && index.h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: 'f4682a5ffa649df58b43c992b55ddc7d2a013ce5' }, index.h("tr", { key: '4019cacec78f7f5c461964c810fd7aa9e463b8dc' }, index.h("td", { key: 'ea8ae9adeab078179c69d4693929845575b3fe56', colSpan: 5 }), index.h("td", { key: '372e0548ff14674262118fd371ffb6539373eeda', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, index.h("div", { key: 'bd531524b648f41ddf564f08b5c001186c00180f', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: 'c6f6f4fdfcb37b358021d30974447d70d349d603', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '0d23cd6a8c233c030b6572d27a8a0a848310a209', class: "legend bg-primary" }), index.h("p", { key: '08cc7de25f15f1fa4b98b1ae36e0918c487078e0', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: '6616100f590df3842c5f07c143c264eaedf1efdd', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: 'd0bffabb50c3bd7a3e8efba583ce93c9621a976d', class: "legend secondary" }), index.h("p", { key: 'fbdfb4d932493668f850501491229c1114efffa6', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

const irReportStatsCardCss = ":host{display:block}";
const IrReportStatsCardStyle0 = irReportStatsCardCss;

const IrReportStatsCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        if (!this.value) {
            return null;
        }
        return (index.h(index.Host, { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("p", { class: "m-0 p-0" }, this.cardTitle), index.h("ir-icons", { name: this.icon })), index.h("h4", { class: "m-0 p-0" }, index.h("b", { class: "m-0 p-0" }, this.value)), this.subtitle && index.h("p", { class: "m-0 p-0 small text-muted" }, this.subtitle)));
    }
};
IrReportStatsCard.style = IrReportStatsCardStyle0;

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;
exports.ir_report_stats_card = IrReportStatsCard;

//# sourceMappingURL=ir-monthly-bookings-report-filter_3.cjs.entry.js.map