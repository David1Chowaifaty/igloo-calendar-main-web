'use strict';

var index = require('./index-IDeZZwEK.js');
var moment = require('./moment-CdViwxPQ.js');
var irDate = require('./ir-date-CbkOKs2C.js');
var t = require('./t-CqJPQrfm.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
require('./booking.dto-CMx8s-oW.js');
var number = require('./number-xBpNWk3H.js');
require('./locale-scope-Cch-vf1R.js');
require('./language-observer-DKp37LIu.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./type-DxODN41W.js');
require('./types-BVJQZ50e.js');

const irMonthlyBookingsReportFilterCss = () => ``;

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
                description: irDate.formatDate(cursor, 'MMMM YYYY'),
                firstOfMonth: cursor.format(format),
                lastOfMonth: cursor.clone().endOf('month').format(format),
            });
            cursor.add(1, 'month');
        }
        const futureCursor = firstOfThisMonth.clone().add(1, 'month');
        for (let i = 0; i < 6; i++) {
            dates.push({
                description: irDate.formatDate(futureCursor, 'MMMM YYYY'),
                firstOfMonth: futureCursor.format(format),
                lastOfMonth: futureCursor.clone().endOf('month').format(format),
            });
            futureCursor.add(1, 'month');
        }
        return dates.reverse();
    }
    render() {
        return (index.h("ir-filter-card", { key: 'caba1739f7cc87fc210b16fa117dce54d3fc0dc3' }, index.h("wa-select", { key: '0df6e327caf1c26d51d9ef2bf861abf37d4b9f58', label: t.t('Lcz_For', { fallback: 'For' }), size: "s", value: this.filters?.date?.description, defaultValue: this.filters?.date?.description, onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: this.dates.find(d => d.description === value) });
            } }, this.dates.map(d => (index.h("wa-option", { value: d.description }, d.description)))), index.h("wa-checkbox", { key: '4461e3f2ccd6a7621eb015f6f983a15eed9db0cf', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t.t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), index.h("div", { key: 'e2120d597de0c2adba5a601d5714f71c18bc18d2', slot: "footer" }, index.h("ir-custom-button", { key: '4fae89cb3e9242c87a9025413df6495cbd77069a', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t.t('Lcz_Reset', { fallback: 'Reset' })), index.h("ir-custom-button", { key: 'a9fb5de94e37fda1e180e3ec2b90262954018ccb', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t.t('Lcz_Apply', { fallback: 'Apply' })))));
    }
};
IrMonthlyBookingsReportFilter.style = irMonthlyBookingsReportFilterCss();

const irMonthlyBookingsReportTableCss = () => `.sc-ir-monthly-bookings-report-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-monthly-bookings-report-table{overflow-x:auto}.table--container.sc-ir-monthly-bookings-report-table,.data-table.sc-ir-monthly-bookings-report-table{height:100%}.ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table tbody.sc-ir-monthly-bookings-report-table tr.sc-ir-monthly-bookings-report-table:last-child>td.sc-ir-monthly-bookings-report-table{border-bottom:0 !important}.cell--align-start.sc-ir-monthly-bookings-report-table{text-align:start !important}.cell--align-center.sc-ir-monthly-bookings-report-table{text-align:center !important}.cell--align-end.sc-ir-monthly-bookings-report-table{text-align:end !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sortable.sc-ir-monthly-bookings-report-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-monthly-bookings-report-table:active td.sc-ir-monthly-bookings-report-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-monthly-bookings-report-table .empty-row.sc-ir-monthly-bookings-report-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-monthly-bookings-report-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-monthly-bookings-report-table-h{display:block;width:100%}.table.sc-ir-monthly-bookings-report-table{width:100%}.text-center.sc-ir-monthly-bookings-report-table{text-align:center}.text-capitalize.sc-ir-monthly-bookings-report-table{text-transform:capitalize}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:var(--wa-color-neutral-fill-quiet) !important}.cell-stack.sc-ir-monthly-bookings-report-table{display:flex;flex-direction:column;gap:0.5rem}.cell-stack.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.value--primary.sc-ir-monthly-bookings-report-table{font-weight:600}.value--previous.sc-ir-monthly-bookings-report-table{color:var(--wa-color-brand-text-normal)}.occ-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.occ-label.sc-ir-monthly-bookings-report-table{width:8ch;flex-shrink:0}.occ-bar.sc-ir-monthly-bookings-report-table{flex:1 1 0%}.occ-bar--previous.sc-ir-monthly-bookings-report-table{--indicator-color:var(--wa-color-brand-fill-normal)}.legend-cell.sc-ir-monthly-bookings-report-table{white-space:nowrap}.legend-row.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table{display:flex;align-items:center;gap:0.5rem}.legend-item.sc-ir-monthly-bookings-report-table p.sc-ir-monthly-bookings-report-table{margin:0;padding:0}.legend-dot.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;border-radius:4px}.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table::part(body),.daily-occupancy-table__card.sc-ir-monthly-bookings-report-table [part~="body"]{min-height:50vh;padding:0.5rem}.legend-dot--current.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-loud)}.legend-dot--previous.sc-ir-monthly-bookings-report-table{background:var(--wa-color-brand-fill-normal)}.ir-text-end.sc-ir-monthly-bookings-report-table{text-align:end}`;

const IrMonthlyBookingsReportTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    reports = [];
    render() {
        return (index.h("wa-card", { key: '4ffe3e2a2ba4534781d813864541a7984597ef55', class: "daily-occupancy-table__card" }, index.h("div", { key: 'cb065afbb63d9f4817bf55497e84192f848419f9', class: 'table--container' }, index.h("table", { key: 'ca64e189f761677299553f43bc74925c373b0d54', class: "table data-table" }, index.h("thead", { key: 'efc39a7857fabdb549d4c7fb34701fa4c560ddb0', class: "table-header" }, index.h("tr", { key: '715a9721e36bb81b70aef3699839264796c6251d' }, index.h("th", { key: '3875508c7731d21503e16365948994c6697a1db8', class: "text-center" }, t.t('Lcz_DateLabel', { fallback: 'Date' })), index.h("th", { key: 'a4c008de88e76d525cc4977ecec7de77d0e126ce', class: "text-center" }, t.t('Lcz_UnitsBooked', { fallback: 'Units booked' })), index.h("th", { key: '54cbb9df93425ffb48ade0b4bd5401acf567f65e', class: "text-center text-capitalize" }, t.t('Lcz_Adults', { fallback: 'adults' })), index.h("th", { key: '23c34514d0e76e727a92dce739b5b3ef7a0a4ce2', class: "text-center" }, t.t('Lcz_Children', { fallback: 'Children' })), index.h("th", { key: '1be87d372ddb3bdf790c03a2b24e638e437d6ee9', class: "ir-text-end" }, index.h("ir-tooltip", { key: '3c4c5e037012347b8e1c9e10fa9fb1df570aa4e2', customSlot: true, message: t.t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, index.h("span", { key: '31c75e069317fe4c010868b89e724534bcedbc80', slot: "tooltip-trigger" }, t.t('Lcz_Adr', { fallback: 'ADR' })))), index.h("th", { key: 'b440de973411b4775ce02a92716eaed83991dee5', class: "ir-text-end" }, t.t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), index.h("th", { key: 'd8b7860ca93326e50889acb5d96543bf262cb7a1' }, t.t('Lcz_Occupancy', { fallback: 'Occupancy' })))), index.h("tbody", { key: '68abc5dde8bde18f8ee45ed83d622f135f04da60' }, this.reports.length === 0 && (index.h("tr", { key: '93381b1347bc532e9fda63f16b95072fc93de71c' }, index.h("td", { key: '8041ab1800b3207eb01df3197349cd158dc39838', colSpan: 7, class: "empty-row" }, index.h("ir-empty-state", { key: 'bb4e5891c8f390f84f951f97271f4b8a50544f94', message: t.t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = number.formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? number.formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment.hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment.hooks().isBefore(reportDate, 'dates');
            return (index.h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, index.h("td", { class: "text-center" }, irDate.formatDate(report.day, { style: 'day-only' })), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, number.formatCount(report.units_booked)), report.last_year?.units_booked > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.units_booked)))), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, number.formatCount(report.adults)), report.last_year?.total_guests > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.adults)))), index.h("td", { class: "text-center" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, number.formatCount(report.children)), report.last_year?.total_guests > 0 && index.h("p", { class: "value--previous" }, number.formatCount(report.last_year?.children)))), index.h("td", { class: "ir-text-end" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && index.h("p", { class: "value--previous" }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.adr)))), index.h("td", { class: "ir-text-end" }, index.h("div", { class: "cell-stack" }, index.h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && index.h("p", { class: "value--previous" }, number.formatAmount(calendarData.calendar_data.currency.symbol, report.last_year.rooms_revenue)))), index.h("td", null, index.h("div", { class: "cell-stack" }, index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, mainPercentage), index.h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (index.h("div", { class: "occ-row" }, index.h("span", { class: "occ-label" }, secondaryPercentage), index.h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), index.h("tfoot", { key: 'da8ad7614159d62aaa6c66997a57f9fedea9667b' }, index.h("tr", { key: 'af462ecb907acb7aad321fa68421098998b206f5' }, index.h("td", { key: '6f5bc87a5796b87bf7ab6f608401a95262184082', colSpan: 6 }), index.h("td", { key: '7f219b03585d22b7d16b94a04993e96f257a9f19', class: "legend-cell" }, index.h("div", { key: '6c4a99353355459463b45939d6d1fbe2fa40aa6d', class: "legend-row" }, index.h("div", { key: 'da3eede24873be2512f688d6bf70ff2f31e70399', class: "legend-item" }, index.h("div", { key: '668d86c5864d59086b54bd3bb58a0e1b693795be', class: "legend-dot legend-dot--current" }), index.h("p", { key: 'd4f9f41b0947cb3144e6c5941d0ed84d92a48fb5' }, t.t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), index.h("div", { key: '56a4870143b4e2fe4a4065532140fd64b9428fec', class: "legend-item" }, index.h("div", { key: 'd5a305508d58bc15bed221320083b4fa26801a16', class: "legend-dot legend-dot--previous" }), index.h("p", { key: '8f337a457b954fc5f094f238c32a53cfa9949e79' }, t.t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
    }
};
IrMonthlyBookingsReportTable.style = irMonthlyBookingsReportTableCss();

exports.ir_monthly_bookings_report_filter = IrMonthlyBookingsReportFilter;
exports.ir_monthly_bookings_report_table = IrMonthlyBookingsReportTable;
