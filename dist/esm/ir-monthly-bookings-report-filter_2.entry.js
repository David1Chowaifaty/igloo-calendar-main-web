import { r as registerInstance, c as createEvent, h, H as Host } from './index-0Di74WDd.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { l as locales } from './locales.store-CPGnSUGJ.js';
import { f as formatAmount } from './utils-BeklM4gy.js';
import { c as calendar_data } from './calendar-data-wrvThdm8.js';
import './index-D9zfa7Bx.js';
import './index-DeW5X45W.js';
import './booking.dto-DWti87Wx.js';
import './type-CBqEYOkK.js';

const irMonthlyBookingsReportFilterCss = () => `.sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}`;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters");
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
        return (h("div", { key: '07ec95e8617b98990036f140d73673274c34a688', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: 'ba687f3d5b0ab731eb6e777e3967d54ed2adc606', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '4376958c43f0dec56d0e757864ade322dd7ee281', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '8808a28b45d7d2cad40224c7e30a8d076756ddf2', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '0a53904fd12301cf6be813ebcd69dc87161d1026', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'fffd1d2d8b3db476a06c546a3c68016388312421', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters || 'Filters'))), h("div", { key: '839cad896285c5497bb9190827d8d02d000f59e9', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: 'd353af9e9927f3e747f9249f13a7aab40fc2f1aa', class: "pt-1 filter-group" }, h("label", { key: '24570e6ed4aa1472fd703816211dd2ea6a3868e0', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: 'a0240da6b5aa35ef0027510d4cbd0bc2ed724701', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: '9b5f52aa26daa6d15c882d9ab0cc16b1fa20400b', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '6cbc1ff118613d334abed58d408c8b17e3ec77d1', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '5c646dcdf91bfb6d459f070a2c25a6a2c9260290', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '2214882357095e7c81473b0994a3691ca9493b44', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '48fc63aa6d97ebac6acc0a393f6c8c20ca14b9bf', btn_type: "button", "data-testid": "reset", text: locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'd8166625f5e4e238cbcbeadc899aea24fe2ec692', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
    }
};
IrMonthlyBookingsReportFilter.style = irMonthlyBookingsReportFilterCss();

const irMonthlyBookingsReportTableCss = () => `.sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}`;

const tableCss = () => `.sc-ir-monthly-bookings-report-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table--container.sc-ir-monthly-bookings-report-table,.data-table.sc-ir-monthly-bookings-report-table{height:100%}.ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,      background-color 0.15s ease-in-out,      border-color 0.15s ease-in-out,      box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;right:0;background-color:white}`;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'bc4f3f0214b3e4d392b9675b875ff909160083de', class: 'card p-1  table-container table-responsive' }, h("table", { key: '2d7a4d4634a20ee516bf60d9b06c222f99dff897', class: "table" }, h("thead", { key: '813174ec712ada8423986e2263ca0916794ab57f', class: "table-header" }, h("tr", { key: '8d0e9ab8e673620042749165f857689a393ae7a2' }, h("th", { key: '7d8fbce60796c22c5387703a7ef095cd16b370bd', class: "text-center" }, "Date"), h("th", { key: '6f319342308e29dc9cdec8d4cebb73830c5e2845', class: "text-center" }, "Units booked"), h("th", { key: 'fc3658ae099df88556fa7134d5878f7645ce2aef', class: "text-center" }, "Total guests"), h("th", { key: '62c5be24c3c469cb229f0529161e014994580ee0', class: "text-right" }, h("ir-tooltip", { key: '5a1d5bee4a21a30ef746e92f2afac471b6bc4c04', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: 'a2c64950e9596900c1658296767fed63766a14f7', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '2c9d5c830a320967dbce7d36990ab977cc7435e8', class: "text-right" }, "Rooms revenue"), h("th", { key: '0928be4aad2f75c6c78d2c4f16cccef8a461b396', class: "" }, "Occupancy"))), h("tbody", { key: '42cac5ebfa6f3d8dd8687911bc3fd84d6fc24652' }, this.reports.length === 0 && (h("tr", { key: '7278a7dd7ee19e87819a10277411e9b11ca2215c' }, h("td", { key: 'cf3e02362d25908e4bc0d592492244dad8779093', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '116c863ca3707a358de373d0833020981368b372' }, h("tr", { key: '52e1e90294e4fc8d67c6826489ad8372dca1a767' }, h("td", { key: '46a0dd260708efbac161d911eb1de5c255941574', colSpan: 5 }), h("td", { key: '7410adab5420e19875087d3ee8d33ed2ea88879b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '00b1171b1eebd5a452e22b26bad2907aa1f109a8', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '2f87d42b775027a6aadc046062684e0bb9f25a39', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'a918d788fa12ebc488de3b97a86aae4e0cb02547', class: "legend bg-primary" }), h("p", { key: '504ec6a7afa4f58d3bf5caa4c7c42efb32a0d1b3', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '525ac29e12e0bdcfc6c90e0e7e0884ee89219c78', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '9a770bcafc934cf8fab1ee948542626da5c6bff6', class: "legend secondary" }), h("p", { key: '6941889f0c08cc042934cb38cc14a7595514944f', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = irMonthlyBookingsReportTableCss() + tableCss();

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table };
