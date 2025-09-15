import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-629477c2.js';
import { f as formatAmount } from './utils-8be61e26.js';
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
        return (h("div", { key: '86bcada8b08e73a3c1cbd32aaa5369499212ba14', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '0c687cd03f64c62d3f9689e0f33ee70e448af751', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'ea2c9e4ae583ff051d5f53d161035da318b1d88f', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '6593d1388defa4c76f47a3ebdad50c166a941621', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '15c73607033adf2b40741ec7900ce1f3221f2173', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'da77096117565a0237a6f093444f86ef7fafe9ce', class: "m-0 p-0 flex-grow-1" }, ((_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), h("div", { key: '7a891031cdf34e16887f857cc6959858ffe5c77f', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: '5013e3eadf645cb009a9b869e74fb8a05fc38cf4', class: "pt-1 filter-group" }, h("label", { key: 'a3a4aa8cd7cecdccb89ac1dcfec57e5c37ecb90f', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '653ed05de5051973459300bbf37424a797b85124', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: 'a879dde59a1cbb927421e8c53fcfb122e419bc27', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '28b704c108a02e92e0d5563b7a6772df29c3ed52', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '3fc3fbfb1407aeac071f9dadd08094db7542ef4a', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'ec935af291156f7d0919c17ee39d3b92f35e95c3', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '81af53ff5f8805f2deb43a51734401edf435a968', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'cdd5bf83061b0ad9b5d54b90f16db21931f0b0d3', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '2150d16bc94a388ab10290d10018c95f3d34a7fa', class: 'card p-1  table-container table-responsive' }, h("table", { key: '2c56c02dc437fe130adbe64b70591c8be001d679', class: "table" }, h("thead", { key: 'd0c653c30574001a05d03dc4abd934427cf63bd0', class: "table-header" }, h("tr", { key: '5f7a355db4633f9f934c3c4f8221455da8adea5a' }, h("th", { key: 'fbe3e5d9c8aa701a26a33d187968e4a7836f113b', class: "text-center" }, "Date"), h("th", { key: 'ed69774340f0d69e3620c9f635efc0394d5c5e99', class: "text-center" }, "Units booked"), h("th", { key: '7e372c07f4234b5d5833f1e71025c334691b09ee', class: "text-center" }, "Total guests"), h("th", { key: '37cfa69ae012e11dfd2643bb95cad352767cb73a', class: "text-right" }, h("ir-tooltip", { key: '3608593126a6519f82a681ff1abcb859e8a1c536', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '90c09fbba9d4b9705631541cc80f92e2524e199c', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '919b4cda6bc3bbfdd5087b2cba543f605d18660a', class: "text-right" }, "Rooms revenue"), h("th", { key: 'f7cf1efda2f25320d31d55e0a57502f4a804a666', class: "" }, "Occupancy"))), h("tbody", { key: '7a410fcf7c74873c226b959ecf2ace3772bec693' }, this.reports.length === 0 && (h("tr", { key: 'f8bc6ffbca11e1ad171cde97c91d69c84dc62f02' }, h("td", { key: 'e0920156f617b6b275f14c82bccc1dab969cdba5', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '8a7766275362822fd884ef7dfeeee1b41ebaf0b4' }, h("tr", { key: '3c94ef51c2f521ce974aa1b036ee5f0128104997' }, h("td", { key: 'e4f3b55ecb2645980b99ef20106e6271699b7deb', colSpan: 5 }), h("td", { key: '4c861042b9b246e06306dfaff7f40692c89a0cc2', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'a59f089125231870a9c8725731d106c55ddf1de6', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'fd7b2773768cb2d17344743fc892aaa4fe8c340d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '3bdba1c13ce022dd77ba8690ecf6c6f65aec1e3d', class: "legend bg-primary" }), h("p", { key: '3b578a6c99b85947f9695c1b95ee83341385d7ba', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'b6f37c8146993d32a17a8a2410a6fa699c4c9082', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '41c3af56c26ebffaf4a854cb38a858d2bdfe9d29', class: "legend secondary" }), h("p", { key: 'c4c3d342d7b680207ddcfae6a0a3dbe98b3595ad', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table };

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.entry.js.map