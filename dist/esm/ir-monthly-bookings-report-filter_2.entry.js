import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { f as formatDate } from './ir-date-Bh8M_fTk.js';
import { t } from './t-Bvz1wS_D.js';
import { c as calendar_data } from './calendar-data-D4DbXAhg.js';
import './booking.dto-BenwoJ5d.js';
import { d as formatPercent, b as formatCount, f as formatAmount } from './number-BguMo00d.js';
import './locale-scope-Jre4lb6k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './type-CEUDt-3i.js';
import './types-BLb1NO3I.js';

const irMonthlyBookingsReportFilterCss = () => ``;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.applyFilters = createEvent(this, "applyFilters");
    }
    isLoading;
    baseFilters;
    filters;
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
    generateMonths() {
        const format = 'YYYY-MM-DD';
        const firstOfThisMonth = hooks().startOf('month');
        const startDate = hooks().subtract(1, 'year').startOf('month');
        const dates = [];
        let cursor = startDate.clone();
        while (cursor.isSameOrBefore(firstOfThisMonth, 'month')) {
            dates.push({
                description: formatDate(cursor, 'MMMM YYYY'),
                firstOfMonth: cursor.format(format),
                lastOfMonth: cursor.clone().endOf('month').format(format),
            });
            cursor.add(1, 'month');
        }
        const futureCursor = firstOfThisMonth.clone().add(1, 'month');
        for (let i = 0; i < 6; i++) {
            dates.push({
                description: formatDate(futureCursor, 'MMMM YYYY'),
                firstOfMonth: futureCursor.format(format),
                lastOfMonth: futureCursor.clone().endOf('month').format(format),
            });
            futureCursor.add(1, 'month');
        }
        return dates.reverse();
    }
    render() {
        return (h("ir-filter-card", { key: '0454210a0e51fcde9c53989dca7ebe301cb0047c' }, h("wa-select", { key: '3698cdee66dd35e5bc36bd2138c2583717267326', label: t('Lcz_For', { fallback: 'For' }), size: "s", value: this.filters?.date?.description, defaultValue: this.filters?.date?.description, onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: this.dates.find(d => d.description === value) });
            } }, this.dates.map(d => (h("wa-option", { value: d.description }, d.description)))), h("wa-checkbox", { key: '10a985425c71bcbd7f4f1c2efe54fdf4c9b3242a', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), h("div", { key: 'a72cf8950eec61a73b3dbb07612514cd0dd8f3e9', slot: "footer" }, h("ir-custom-button", { key: '5d5fc0a3a2bc19a191a29a9a4d66b9ecaa9c4a1b', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: 'bb6dcf7ba7041b02d75884ed5c4031a64a155bab', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
    }
};
IrMonthlyBookingsReportFilter.style = irMonthlyBookingsReportFilterCss();

const irMonthlyBookingsReportTableCss = () => `.sc-ir-monthly-bookings-report-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table--container.sc-ir-monthly-bookings-report-table,.data-table.sc-ir-monthly-bookings-report-table{height:100%}.ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.cell--align-start.sc-ir-monthly-bookings-report-table{text-align:start !important}.cell--align-center.sc-ir-monthly-bookings-report-table{text-align:center !important}.cell--align-end.sc-ir-monthly-bookings-report-table{text-align:end !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-monthly-bookings-report-table-h{display:block;width:100%}.table.sc-ir-monthly-bookings-report-table{width:100%}.text-center.sc-ir-monthly-bookings-report-table{text-align:center}.text-capitalize.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-neutral-fill-quiet) !important}.cell-stack.sc-ir-monthly-bookings-report-table{display:flex;flex-direction:column;gap:0.5rem}.cell-stack.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.value--primary.sc-ir-monthly-bookings-report-table{font-weight:600}.value--previous.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-monthly-bookings-report-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-monthly-bookings-report-table{flex:1 1 0%}.occ-bar--previous.sc-ir-monthly-bookings-report-table{--indicator-color:var(--wa-color-brand-fill-normal)}.legend-cell.sc-ir-monthly-bookings-report-table{white-space:nowrap}.legend-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.legend-dot.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;border-radius:4px}.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table::part(body),.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table [part~="body"]{min-height:50vh;padding:0.5rem}.legend-dot--current.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-normal)}.ir-text-end.sc-ir-monthly-bookings-report-table{text-align:end}`;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        return (h("wa-card", { key: '55c86d40a6102f4bd6eece19a779775d21cbb07b', class: "daily-occupancy-table__card" }, h("div", { key: 'e86ba51f5653338e986d9f5e4494b57b648066bd', class: 'table--container' }, h("table", { key: '77ab11b455d56017148245eb8cf391dea2be83c5', class: "table data-table" }, h("thead", { key: '1df41f3bc1de28a7285832db882d51cce2ef232e', class: "table-header" }, h("tr", { key: '52190a5e3910e44c7008fcb4789d36ee93f43af3' }, h("th", { key: '5d7a710183f6940eb832b326632863ac8346c6a8', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '475d11eecb2b7019d8fafdc54c85c4d940e93b94', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '27a9c26f864c6c051ebe962e94a42bace29c56aa', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: 'bec9684d80586a1e7e0efc6416b723839891e85d', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '4255eb0c9e929b9982ef64fb24bad94e6c51247d', class: "ir-text-end" }, h("ir-tooltip", { key: '03008519310bc894815b1ec27227b84761fc864f', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '40c6a05da26f2602282757bd431c48b36a4cddc5', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: 'ee4c0fbdf573793ddc5423ecbd419919d0f2c4b4', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '17d07b59fed214d32b3746523ea7340e0c91ebf9' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: 'b88d60a95486457aa0aba4ecd19497e7ea667e5e' }, this.reports.length === 0 && (h("tr", { key: '6d382a3bbec03b7721cf795e9a78c8c9f526b286' }, h("td", { key: '3d1ecaadcf49181c84fdf0bf0374674cb1d56cd9', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '3546b591ac8e883581f7917ecbd00ddbcfa21878', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '5d4a07e9240f170d45c6928617313b17468eb265' }, h("tr", { key: '19da6e4a4cc942060230fea99bb45adfc715cc4a' }, h("td", { key: 'c6797ab8c54f8519f4409cb788b94a59d63dd93e', colSpan: 6 }), h("td", { key: '09e9d45cdf8d0a59a34fd044c8431038c0230b51', class: "legend-cell" }, h("div", { key: '09f89ebed6c058e480adb0f623f86c3149c5159d', class: "legend-row" }, h("div", { key: 'e2df33982382ef5e359719531d041c151833dbfb', class: "legend-item" }, h("div", { key: '7ffbf5e662166b63ce1bf0222a82bd9127f375ff', class: "legend-dot legend-dot--current" }), h("p", { key: 'db151579572736e82acc6970b1a8adc26cb1d546' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'd0a2a747a5878345033d47fa2ca918fa8e2fd0da', class: "legend-item" }, h("div", { key: 'e0f0134b05b5c4076fc4675534a5675024b8b1c0', class: "legend-dot legend-dot--previous" }), h("p", { key: '12b1a74ed8545ebfea6b4166eba2c789a7126b77' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
    }
};
IrMonthlyBookingsReportTable.style = irMonthlyBookingsReportTableCss();

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table };
