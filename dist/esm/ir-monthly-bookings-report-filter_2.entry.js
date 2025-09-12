import { r as registerInstance, c as createEvent, h, H as Host } from './index-60982d00.js';
import { h as hooks, f as formatAmount } from './utils-b77baf9f.js';
import { l as locales } from './locales.store-629477c2.js';
import { c as calendar_data } from './calendar-data-f4e207f9.js';
import './index-6ecc32cd.js';
import './axios-aa1335b8.js';
import './index-c4cf83be.js';

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
        return (h("div", { key: '81b9935c5cb00ec1f6d97b17032e8b3307626a38', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '54462656cc5465b52b2bd98ddf111703b3a23b9d', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '7e77b80aafb2e18d5c440cd30d5810c938bb9311', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'bca063c912d4c117adc2e3c30f4a3cfed0a8e4c8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '333f61fb5f15d330f83f8e4c14ff7df9b08ec65e', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '2039f0244eba2f153a03d7ca722a2cdd62f590b0', class: "m-0 p-0 flex-grow-1" }, ((_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Filters) || 'Filters'))), h("div", { key: '953f2053e2fde8bb4299ff47d82b663598511d1d', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: 'b4cf00cd3a9fb44682523a5860dc6045b6ce6e83', class: "pt-1 filter-group" }, h("label", { key: '2b675f1ebc18626f509d5b8556bcf68cf8aba4e5', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '6cd64f87ee7212120f982482328fa6f3442a035a', showFirstOption: false, selectedValue: (_c = (_b = this.filters) === null || _b === void 0 ? void 0 : _b.date) === null || _c === void 0 ? void 0 : _c.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: '57b06fe8ef22c05c11cc37b1ca7a30399c301a43', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '95a271664598ce69cc0a20bf36f5a0df53e570c5', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'fa02fcae31fac18d2b3b3482e59a8bb6d3669d29', checked: (_d = this.filters) === null || _d === void 0 ? void 0 : _d.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '02adcc3ff5f9e923aada60907794a969242f3f3c', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '8d61d6faf9ab969980532d1498b5f15853925614', btn_type: "button", "data-testid": "reset", text: (_f = (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Reset) !== null && _f !== void 0 ? _f : 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '13ded8f8c6666931c6aafe426e2466caa02e8fae', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: (_h = (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_Apply) !== null && _h !== void 0 ? _h : 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
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
        return (h(Host, { key: '85d96719fc14f6c95d764d3b8fb53a5ff9d5dbd1', class: 'card p-1  table-container table-responsive' }, h("table", { key: 'a1e45bd4f452489833dbc8c151e7505418a766ac', class: "table" }, h("thead", { key: '476166714cf418e0694f1c4e184de9ed1fab5942', class: "table-header" }, h("tr", { key: '3f05784d94d07eedde721a7ae5d8b295f546b057' }, h("th", { key: 'a2618b17f2afcdf471a45201f62d50544217bae2', class: "text-center" }, "Date"), h("th", { key: '8c8750c2537cd0c1585b20f4dbe2aa4f3515b052', class: "text-center" }, "Units booked"), h("th", { key: '6ea6572096b1511d3bfa4abbc746a210e7a14ed3', class: "text-center" }, "Total guests"), h("th", { key: '56ff710aeac2c18dbd47c7b829d7ab1b71708b0f', class: "text-right" }, h("ir-tooltip", { key: '53a0df9eade17855fcf83ea0e5b79571c416a3c4', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '7a4f4270189455e3291fd931e995ce240dbab3aa', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'e8935cbd8669f14d29a7a4ea7bb52869591e70f9', class: "text-right" }, "Rooms revenue"), h("th", { key: '1ded183b5566ad21462eaabb74eca7165cc23ce3', class: "" }, "Occupancy"))), h("tbody", { key: '3cffb2ff86a024a3e7040339a1354e9f8518b7a3' }, this.reports.length === 0 && (h("tr", { key: 'cdd8086feb4d474bc94f5fcffa4c4d6b04545dc3' }, h("td", { key: 'fea3c1f6a611613f7a072fa64582d22efa3b2ba5', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '4440a69451a2f5711ec7748fc6dc7997fc84d2b1' }, h("tr", { key: 'e20401d0b29e5e4c991b15d7505d5e859dd07f24' }, h("td", { key: '1cf84913ebccefaba654d57e630952ef37538f16', colSpan: 5 }), h("td", { key: '101e48e5dac41c8b58dfb054245aba3c0a70d946', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '0c9766e319b5fd3e518e5e1b8aaf942424a92dd8', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0e595bee5afafcea308ed5bece4c77442c259c66', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '06b83cdca42f970142b688333d2cf997fd120439', class: "legend bg-primary" }), h("p", { key: '904740c327d9c01f101cc5603ab9d6d7521786d2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'd6b666b0d1eb1f66274067efea7258529ac630b6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '502f3ad9119f919e792cf60e7dcfa588f576f5c4', class: "legend secondary" }), h("p", { key: '3eee747f3587a073f71ba6e4c0e321a8f30c8ad8', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table };

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.entry.js.map