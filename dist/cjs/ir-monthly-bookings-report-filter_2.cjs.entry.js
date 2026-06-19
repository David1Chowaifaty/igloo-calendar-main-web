'use strict';

var index = require('./index-CJ0kc5p1.js');
var moment = require('./moment-CdViwxPQ.js');
var locales_store = require('./locales.store-BfrChT1G.js');
var utils = require('./utils-CHYeTDt_.js');
var calendarData = require('./calendar-data-CTxCbso4.js');
require('./index-dbmC5P-h.js');
require('./index-CLqkDPTC.js');
require('./type-Dy9pVS4V.js');

const irMonthlyBookingsReportFilterCss = () => `.sc-ir-monthly-bookings-report-filter-h{display:flex;height:100%;flex:1 1 0%}.sales-filters-card.sc-ir-monthly-bookings-report-filter{min-width:max-content;flex:1 1 0%}#salesFiltersCollapse.collapse.sc-ir-monthly-bookings-report-filter:not(.show){display:block}`;

const IrMonthlyBookingsReportFilter = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.applyFilters = index.createEvent(this, "applyFilters");
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
        const firstOfThisMonth = moment.hooks().startOf('month');
        const startDate = moment.hooks().subtract(1, 'year').startOf('month');
        const dates = [];
        let cursor = startDate.clone();
        while (cursor.isSameOrBefore(firstOfThisMonth, 'month')) {
            dates.push({
                description: cursor.format('MMMM YYYY'),
                firstOfMonth: cursor.format(format),
                lastOfMonth: cursor.clone().endOf('month').format(format),
            });
            cursor.add(1, 'month');
        }
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
        return (index.h("ir-filter-card", { key: '429b208d419433bca3c0ebb3c5793b5e1faeb241' }, index.h("wa-select", { key: '8bac0315bf1c5070cfce5e6924bce6396b2541fa', label: "For", size: "s", value: this.filters?.date?.description, defaultValue: this.filters?.date?.description, onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: this.dates.find(d => d.description === value) });
            } }, this.dates.map(d => (index.h("wa-option", { value: d.description }, d.description)))), index.h("wa-checkbox", { key: 'e77c05f4d46aa97b89e022fd06e03a5733286ffd', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, "Compare with previous year"), index.h("div", { key: '6bf0b4dda59e898e18ead5e92f826228212f1d52', slot: "footer" }, index.h("ir-custom-button", { key: 'f7b6651d72a7c91c7223b7668519ce6fc5ada1cf', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, locales_store.locales.entries?.Lcz_Reset ?? 'Reset'), index.h("ir-custom-button", { key: '63b96eb50c5165034c417ff94ce989cd20c6bb00', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, locales_store.locales.entries?.Lcz_Apply ?? 'Apply'))));
    }
};
IrMonthlyBookingsReportFilter.style = irMonthlyBookingsReportFilterCss();

const irMonthlyBookingsReportTableCss = () => `.sc-ir-monthly-bookings-report-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table--container.sc-ir-monthly-bookings-report-table,.data-table.sc-ir-monthly-bookings-report-table{height:100%}.ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;right:0;background-color:white}.sc-ir-monthly-bookings-report-table-h{display:block;width:100%}.table.sc-ir-monthly-bookings-report-table{width:100%}.text-center.sc-ir-monthly-bookings-report-table{text-align:center}.text-right.sc-ir-monthly-bookings-report-table{text-align:right}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-neutral-fill-quiet) !important}.cell-stack.sc-ir-monthly-bookings-report-table{display:flex;flex-direction:column;gap:0.5rem}.cell-stack.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.value--primary.sc-ir-monthly-bookings-report-table{font-weight:600}.value--previous.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-monthly-bookings-report-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-monthly-bookings-report-table{flex:1 1 0%}.occ-bar--previous.sc-ir-monthly-bookings-report-table{--indicator-color:var(--wa-color-brand-fill-normal)}.legend-cell.sc-ir-monthly-bookings-report-table{white-space:nowrap}.legend-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.legend-dot.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;border-radius:4px}.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table::part(body),.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table [part~="body"]{min-height:50vh;padding:0.5rem}.legend-dot--current.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-normal)}`;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        return (index.h("wa-card", { key: 'eaff000bcde6a3df5ddfe0394341d5c1248de24e', class: "daily-occupancy-table__card" }, index.h("div", { key: 'de0b4cd5a5d1c42b0417a898c7ef4b6d05a16c72', class: 'table--container' }, index.h("table", { key: '1974165875f42d11371b8c6a28c4ccee7e3f86df', class: "table data-table" }, index.h("thead", { key: '803bbf5d0837a174ac5a6d29cf2f9f22d7b69c02', class: "table-header" }, index.h("tr", { key: '4b5bb57531ce77dcfa125dbbd81702788e46a854' }, index.h("th", { key: '21ad6e9cac4e4ba0409d77b4151fdbccbdd62824', class: "text-center" }, "Date"), index.h("th", { key: '94df5476a5ccfde2b2350ba74ec1e139003aeee8', class: "text-center" }, "Units booked"), index.h("th", { key: '9df8b66629243ff4ee1b7e56bc38917b6c16c35a', class: "text-center" }, "Total guests"), index.h("th", { key: 'e88b7f0a446572816990664092dc8fe0d0a1a9ba', class: "text-right" }, index.h("ir-tooltip", { key: '875382bcb0aa2c7fbb1750abd27703293e9be8bd', customSlot: true, message: "Average Daily Rate", alignment: "end" }, index.h("span", { key: '1dd4595c91e94e93de533037dedd4013dde78fba', slot: "tooltip-trigger" }, "ADR"))), index.h("th", { key: '92b427b348f8431cd7f4c6dbc1bc04f7fc62c4e2', class: "text-right" }, "Rooms revenue"), index.h("th", { key: 'acf067728474751d337eefdd93fee1635408caeb' }, "Occupancy"))), index.h("tbody", { key: '54ff243709f4422eb364a536eadabd75ab7ec9fb' }, this.reports.length === 0 && (index.h("tr", { key: '385a23ea2b2505d94a8189146e9c555df3ca3137' }, index.h("td", { key: 'ab34227465a9dddff2580d118e0909a558f8f468', colSpan: 6, class: "empty-row" }, index.h("ir-empty-state", { key: 'f60b0a6fc4647b0df5d580b85dadab8dc25878d1', message: "No data found" })))), this.reports.map(report => {
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: "text-center" }, reportDate.format('D')), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, report.units_booked), report.last_year?.units_booked > 0 && index.h("p", { class: "value--previous" }, report.last_year?.units_booked))), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, report.total_guests), report.last_year?.total_guests > 0 && index.h("p", { class: "value--previous" }, report.last_year?.total_guests))), index.h("td", { class: "text-right" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && index.h("p", { class: "value--previous" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "text-right" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && index.h("p", { class: "value--previous" }, utils.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: "cell-stack" }, index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, mainPercentage), index.h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, secondaryPercentage), index.h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), index.h("tfoot", { key: '736e3f4c714fdf26c32a58ac48031f05bea2c9da' }, index.h("tr", { key: '22657dd8e77450f7bb1ff8e0563d0f4c5bdb0c5e' }, index.h("td", { key: '8e02cf64f414e41903de0625495d9a656e5efe07', colSpan: 5 }), index.h("td", { key: '22e9ee0a5efdac83445425a7f4fb91c8be4d63be', class: "legend-cell" }, index.h("div", { key: 'e0e53d986286dcb942b36aa22bf18fa096a1613d', class: "legend-row" }, index.h("div", { key: 'aed8e9ef2b7ae4593e0fe65d6a2504421597d6ad', class: "legend-item" }, index.h("div", { key: '6b6b8e21b6b30121b902ca8a9fa4d9ec0bd0da5e', class: "legend-dot legend-dot--current" }), index.h("p", { key: 'facffc57ef9040454141bed87f08b3fe3c8059ac' }, "Selected period")), index.h("div", { key: 'ab93b809db03118f89e442fa9b119e2b92204c67', class: "legend-item" }, index.h("div", { key: 'c558a5cd3317d9cf0b377a423e8309c50b84a5be', class: "legend-dot legend-dot--previous" }), index.h("p", { key: '61d574c4958774efc546b27cc831036f2b0d683d' }, "Previous year"))))))))));
    }
};
IrMonthlyBookingsReportTable.style = irMonthlyBookingsReportTableCss();

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;
