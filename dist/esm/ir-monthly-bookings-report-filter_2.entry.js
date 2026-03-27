import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-cb784e95.js';
import { h as formatAmount } from './utils-4dd4655a.js';
import { c as calendar_data } from './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';
import './index-87419685.js';
import './type-f926f853.js';

const irMonthlyBookingsReportFilterCss = ".sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}";
const IrMonthlyBookingsReportFilterStyle0 = irMonthlyBookingsReportFilterCss;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters", 7);
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
    // private generateMonths(): ReportDate[] {
    //   const firstOfThisMonth = moment().startOf('month');
    //   const startDate = moment().subtract(1, 'year').startOf('month');
    //   const dates = [];
    //   const format = 'YYYY-MM-DD';
    //   let cursor = startDate.clone();
    //   while (cursor.format(format) !== firstOfThisMonth.format(format)) {
    //     dates.push({
    //       description: cursor.format('MMMM YYYY'),
    //       firstOfMonth: cursor.format('YYYY-MM-DD'),
    //       lastOfMonth: cursor.clone().endOf('month').format('YYYY-MM-DD'),
    //     });
    //     cursor.add(1, 'month');
    //   }
    //   dates.push({
    //     description: firstOfThisMonth.format('MMMM YYYY'),
    //     firstOfMonth: firstOfThisMonth.format('YYYY-MM-DD'),
    //     lastOfMonth: firstOfThisMonth.clone().endOf('month').format('YYYY-MM-DD'),
    //   });
    //   return dates.reverse();
    // }
    generateMonths() {
        const format = 'YYYY-MM-DD';
        const firstOfThisMonth = hooks().startOf('month');
        const startDate = hooks().subtract(1, 'year').startOf('month');
        const dates = [];
        let cursor = startDate.clone();
        // Past → current month
        while (cursor.isSameOrBefore(firstOfThisMonth, 'month')) {
            dates.push({
                description: cursor.format('MMMM YYYY'),
                firstOfMonth: cursor.format(format),
                lastOfMonth: cursor.clone().endOf('month').format(format),
            });
            cursor.add(1, 'month');
        }
        // Add 6 future months
        const futureCursor = firstOfThisMonth.clone().add(1, 'month');
        for (let i = 0; i < 6; i++) {
            dates.push({
                description: futureCursor.format('MMMM YYYY'),
                firstOfMonth: futureCursor.format(format),
                lastOfMonth: futureCursor.clone().endOf('month').format(format),
            });
            futureCursor.add(1, 'month');
        }
        return dates.reverse();
    }
    render() {
        return (h("div", { key: '391f557ad210dda1dccbbd567ba52793e2cc0ccd', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '2b83ce743cd704e2e8ac74dcdf309cd1a7a32649', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '4caac009c803eac21095643f6e78613689c46993', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'd09f3c666c8b832af9b2583b053cda39915e8d70', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '8e41cc52e737bf931916deaa1adf362a42221418', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '79443d848c55162fb92b554c98c14154b5e0fe53', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters || 'Filters'))), h("div", { key: 'b34686f6f24cfa9304545facf7cfbf322cee2b3c', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: 'e592686cef6e8747da79bf3b166fae151c4ba9a0', class: "pt-1 filter-group" }, h("label", { key: 'c7cd11c999bb2138210e1049dea7cc7067bee021', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '060cd8fc2cf803bb555dbd538a86c30b4273f55e', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: '25ae142e2048f63f4a15d8b51f325510a411b909', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '4ca0f1ac34bfcc3ec76d49764c54db251275374c', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '64ef142347d9da47c0a4ec0e5f698bfc468bd7e3', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'dfd9e3c2a4005afc48284103c0a3b2fe46d4ba31', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '0ba0451818916d8e0b2ace2d3ab37c3ea558c73a', btn_type: "button", "data-testid": "reset", text: locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '85e9d67513d826ebf76540591bc752b6b971a09a', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = IrMonthlyBookingsReportFilterStyle0;

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".sc-ir-monthly-bookings-report-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-monthly-bookings-report-table,.data-table.sc-ir-monthly-bookings-report-table{height:100%}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: '93e9aace9efb6045a046450511af385c5758f0b2', class: 'card p-1  table-container table-responsive' }, h("table", { key: '7c139db2d39ed34090ab0b2cba6f78b67a203604', class: "table" }, h("thead", { key: 'eb0803a2580b174814ba47b80aa0c2b76827193f', class: "table-header" }, h("tr", { key: '8d37066ec8f4a8343d1d32d6618a8e51d728dc2c' }, h("th", { key: 'aaf4a670864f2b9a9bb5e8049d1029b3f8fc7f25', class: "text-center" }, "Date"), h("th", { key: 'dcfa6b31a65debb90713a65bd16ac404f42614a6', class: "text-center" }, "Units booked"), h("th", { key: 'c864a22ae4b35c8d623f4d77dfd4c1d6f714059f', class: "text-center" }, "Total guests"), h("th", { key: '5f5bd79243ad7d614dccf33856a7f7481c0621a3', class: "text-right" }, h("ir-tooltip", { key: 'a084f4669af43da8436fc1c2671d42d7485a8094', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'e7958b85c931c9f11aac007440f95e5e8e88da28', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '84ed15b2d98340eb1e0808e204e87708b6f22adb', class: "text-right" }, "Rooms revenue"), h("th", { key: '7bf723d6f6339528887218afd1f70b2d32d45dd8', class: "" }, "Occupancy"))), h("tbody", { key: '2b88cc848aada703c47ad7db162e92ec5807fd83' }, this.reports.length === 0 && (h("tr", { key: 'a6fc5e8ea79801d8df18fc2100074f8a0c95bd13' }, h("td", { key: '7ad9de020942c01f81cca2bf459ef9e60d869dd9', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '530550d6c8160aa34831c5768a4c605f38806295' }, h("tr", { key: '6af60fba30e8dd2473abf619586dee8aafa73304' }, h("td", { key: '61fed7e021d555281021e63c992e288de032c763', colSpan: 5 }), h("td", { key: '48d54204e7954f6891bd641e709fdf5c6c0c4d40', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: 'fe8c2c4dfa69f6a9af9a2810ac3961326b352539', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'bf834b29ac2a04018dc9988624d8cf40de741245', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '069becb1c3445c9cbfbcc7641aaa6730b03b4d1d', class: "legend bg-primary" }), h("p", { key: '294ee48ae4cbedc59349c184877ba44b7f8fe0c2', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'a70f0525843aef3639687ab6a8290e2f49389620', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e2c7cb798dc362e6061e0d027131782b4e83e3b1', class: "legend secondary" }), h("p", { key: '775c9960d39bf737630c716572543ef35e930de3', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table };

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.entry.js.map