import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { h as hooks } from './moment-ab846cee.js';
import { l as locales } from './locales.store-cb784e95.js';
import { f as formatAmount } from './utils-857cf993.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import './index-f100e9d2.js';
import './index-87419685.js';
import './type-e34653d3.js';

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
        return (h("div", { key: '7ba5d64017cc8cae8c52f8fb8ded7cf94acdc434', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '527eb4e985b839683404a515a42a9bb86a8637ae', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'd147bae65cc41365b868bec7593bd6c48044b437', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '38712a1a655f870206e96a33e26da456ed4c1be1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '9a38eb6cb566f57ec37837d49495703858f31b04', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'ff0a2fd464824814b1aed3c8f9dfefb1abaa2551', class: "m-0 p-0 flex-grow-1" }, locales.entries?.Lcz_Filters || 'Filters'))), h("div", { key: 'e86e0e8294e89a0394a74bdbff77e981cb6e4101', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("fieldset", { key: 'aaf73ff0cdc3ddaa3922cfd9fffcf8adc342b227', class: "pt-1 filter-group" }, h("label", { key: '3b4efa98fb25a291b8e7adc0b5de6b7a8a823351', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "For"), h("ir-select", { key: '8a562340446a13a042954d16bd3ee97b7710721f', showFirstOption: false, selectedValue: this.filters?.date?.description, onSelectChange: e => {
                this.updateFilter({ date: this.dates.find(d => d.description === e.detail) });
            }, data: this.dates.map(d => ({
                text: d.description,
                value: d.description,
            })) })), h("div", { key: 'c8de0ed8cdbb7393d5411cbd8aee38f38764f6c5', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '275d324d32197dfd0c4d65d40f79f1fc989a1277', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: 'a004338d3f2473a0a6367e14b1090950725c35b7', checked: this.filters?.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '46155095df71327af54cadf21b16620cb53cca35', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '9ea369355d16e7192e93ed6ad051229a40c5cfe1', btn_type: "button", "data-testid": "reset", text: locales.entries?.Lcz_Reset ?? 'Reset', size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'dc0b925c0b1fffe8e275aabe0c34ac33077fdcdd', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries?.Lcz_Apply ?? 'Apply', size: "sm", onClickHandler: e => this.applyFiltersEvt(e) })))));
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
        return (h(Host, { key: 'd5bfb6609cf729f066d938e4f2810f2d282d7b8f', class: 'card p-1  table-container table-responsive' }, h("table", { key: '0b7f241af65e1a4d22a792f751722b3ca3f614b3', class: "table" }, h("thead", { key: '9b531c8f14b23b75d6475be0a138af57f95da352', class: "table-header" }, h("tr", { key: '5fbc06d350066090cf3d11a6cad005c4e9d140b4' }, h("th", { key: 'cc7b7eb78565eb8fcf60b2afd776f7e8d2de690d', class: "text-center" }, "Date"), h("th", { key: '6cc876c51156bc61fabdc7d769f693f691fb3a9f', class: "text-center" }, "Units booked"), h("th", { key: '297639edd8ea741fbb557ce7d98ef781ecdd3d40', class: "text-center" }, "Total guests"), h("th", { key: '84591e7c9a7d2222c46502a860af363b6d71f3c8', class: "text-right" }, h("ir-tooltip", { key: '99e60196e9980fc598b452c4396b3b7c1f435c47', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '94ca3fb489f0e564111d32bafbaab7ecbad7f901', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: '7ca1452375515b1d6b6bf7a75b68f077ce8e6534', class: "text-right" }, "Rooms revenue"), h("th", { key: '74f9fb08078c5feaa5ab1dfa05ce055913b602ec', class: "" }, "Occupancy"))), h("tbody", { key: '412e7a77993af668f559ec4a9e1c67bfea3622fb' }, this.reports.length === 0 && (h("tr", { key: '7fed18201770a99c79e08f8b732420b5bbf8e994' }, h("td", { key: '6ab32b081499043c4f88d42a08707deda8fae9e6', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.units_booked ? 'font-weight-bold' : ''}` }, report.units_booked), report.last_year?.units_booked > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.total_guests ? 'font-weight-bold' : ''}` }, report.total_guests), report.last_year?.total_guests > 0 && h("p", { class: "p-0 m-0" }, report.last_year?.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.adr ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${report.last_year?.rooms_revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), report.last_year?.occupancy_percent > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '504790b484fb940a6d2289ff7c92c2a32dfab555' }, h("tr", { key: '1608ef65863c7dbb5818c0ca06c256c0c2ba4cff' }, h("td", { key: 'a02a4968a23740b38d66128add4c44506ac2ceed', colSpan: 5 }), h("td", { key: '4583b6cf07f8e4e3ca85265f6c7e7dec50a53ae5', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '319119eb088d869e26227691dcf27654ea6678e8', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'f800b17b19b1434040e0fbdc90301083af5da08d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ef4451e4f61580d00fad6534046c44b66b29060c', class: "legend bg-primary" }), h("p", { key: '3b7570916578c45c3d0efea24afe12eddbc0ddad', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '411c7e4fa1408f00daf48ae0f2c01158a8c36659', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'ea64827c21fc1918c003ed1b3066924281e858f6', class: "legend secondary" }), h("p", { key: 'a6e93a0bf8fa51bee0fe515ca7d36b3da6c876b4', class: "p-0 m-0" }, "Previous year")))))))));
    }
};
IrMonthlyBookingsReportTable.style = IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1;

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table };

//# sourceMappingURL=ir-monthly-bookings-report-filter_2.entry.js.map