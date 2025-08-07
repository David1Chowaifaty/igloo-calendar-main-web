'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const moment = require('./moment-1780b03a.js');
const locales_store = require('./locales.store-a1ac5174.js');
const utils = require('./utils-9c4cabe9.js');
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
        return (index.h("div", { key: '32c28df6a457d24e15493db179e0d3521998f4ff', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, index.h("div", { key: 'd4c02b02790923e7002c9999bcee5f27a86cf6f9', class: "d-flex align-items-center justify-content-between sales-filters-header" }, index.h("div", { key: '0f72139397825d18cf7cb7e1070d112027781457', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("svg", { key: '4e9e0abad4436d75cd9087548ad6abf958b7371f', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, index.h("path", { key: 'fb63622845e0960ef3c3c192c50efce7989093cc', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), index.h("h4", { key: '16f3e4e017a3da60dfef45d01e20dd3154965aa5', class: "m-0 p-0 flex-grow-1" }, ((_a = locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), index.h("div", { key: '07c553315881fe57b81a1cfd6cf61aaf4611234e', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, index.h("fieldset", { key: '0d355c78c17e90073afe4e3fb5d9796039ca6b5b', class: "pt-1 filter-group" }, index.h("label", { key: '9b7836745873ebf0c73073622df98f2ebe2992d9', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), index.h("ir-select", { key: 'e74e70e83b3a6c5ce613d359d462518242c91261', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, LabelAvailable: false, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), index.h("div", { key: '2b030578de5df028c0924a6fac2b9a1fe4d72eb3', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, index.h("label", { key: 'd7f19c2837b7865b6765b6e1c127230c84a23c44', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), index.h("ir-checkbox", { key: '4b690a094843c6128cd9fdb027a998474b36e460', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), index.h("div", { key: 'caaba979aad101590ab6c63e855627bdaffcf37e', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, index.h("ir-button", { key: '18dad7285ebddcf11a61812657e7982818a26927', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), index.h("ir-button", { key: 'c83a44751b6e5ac4cd28d827e28bb55217eeb6f8', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (index.h(index.Host, { key: '5fa2dbb8e1c12f77c9b29ec403047b9c90ba06b3', class: 'card p-1  table-container table-responsive' }, index.h("table", { key: 'ac3e61c51ee896d1249501ed0ff6b1320f006860', class: "table" }, index.h("thead", { key: '38319a87ad0db7c2b984f6b9b575f11a02f804b9', class: "table-header" }, index.h("tr", { key: '71da74e6d07a46310ccd9d1334b0db93d8083da9' }, index.h("th", { key: '5eb5d8dc6a9ea98dfd31fe749de216ba0819b4e2', class: "text-center" }, "Date"), index.h("th", { key: '1d7af2871e50465bca91561f96e5f78e579fab07', class: "text-center" }, "Units booked"), index.h("th", { key: '6f3af3795d003d6a234d737b651bdd959f3e28dc', class: "text-center" }, "Total guests"), index.h("th", { key: '0e4637aadf5c34ed750ec370e993c839fad82249', class: "text-right" }, index.h("ir-tooltip", { key: 'bd82271dd7ac28af33c5187d838c922ffbe846b7', customSlot: true, message: "Average Daily Rate", alignment: "end" }, index.h("span", { key: '5c5dc2327880088ba738b2696dacc3cace84069c', slot: "tooltip-trigger" }, "ADR"))), index.h("th", { key: '882908c887640fa99b9e922f660b88752856b8d8', class: "text-right" }, "Rooms revenue"), index.h("th", { key: '67d9233c34df557185635a865adfc173a1aafa06', class: "" }, "Occupancy"))), index.h("tbody", { key: '79d27762493524bc8288ae7b8ef7022a3fe6f381' }, this.reports.length === 0 && (index.h("tr", { key: 'cb70b96ee67836895b74524b7395b1f4edec77a3' }, index.h("td", { key: 'c3e7a056dacd2a6402b5e36766daee089ee5613a', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: 'text-center' }, reportDate.format('D')), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && index.h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), index.h("td", { class: "text-center" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && index.h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "text-right" }, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && index.h("p", { class: "p-0 m-0" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, index.h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && index.h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), index.h("tfoot", { key: '57768623f9c87a02c5aeb27ba618efdf008bb779' }, index.h("tr", { key: '091c9f32e7aff57c0fff7553f75e8e432b548b70' }, index.h("td", { key: '3a2cb25827716cbb679d1c7ce5d173baa4320d97', colSpan: 5 }), index.h("td", { key: 'f6b15f6742e8ec9cf214778ad08de07c25d1f7d2', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, index.h("div", { key: '73d049d3119f15ba2d152aef6a2e5614e2fb1f2d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, index.h("div", { key: 'cd7628c0790d1040f2fed5e63d70521693575202', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '1fbb131b86ad762e4d6f21be11ea9b335ee12b58', class: "legend bg-primary" }), index.h("p", { key: 'b5fbf53b3f5e3214f780088482127294bf47b7ae', class: "p-0 m-0" }, "Selected period ")), index.h("div", { key: 'b4b931066912272e99bf18ac9c1a4399f0365733', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, index.h("div", { key: '41a758f65e34a9de7136b8cb0957d4b5f94d4034', class: "legend secondary" }), index.h("p", { key: '50ef8672db08e78e8f998f832e9c16b42755e9d5', class: "p-0 m-0" }, "Previous year")))))))));
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