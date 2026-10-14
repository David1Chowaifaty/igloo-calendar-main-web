import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { h as hooks } from './moment-Mki5YqAR.js';
import { f as formatDate } from './ir-date-CdNwD9PM.js';
import { t } from './t-DTGA0v_q.js';
import { c as calendar_data } from './calendar-data-D8EnecFU.js';
import './booking.dto-DVIFh8qe.js';
import { d as formatPercent, b as formatCount, f as formatAmount } from './number-COOjxK58.js';
import './locales.store-DsOXxI8k.js';
import './language-observer-CHgzsZkY.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './type-W0yWfEBm.js';
import './types-CrHq6jOb.js';

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
        return (h("ir-filter-card", { key: '9428ba53e04cfd125024d398052051dbe46a748d' }, h("wa-select", { key: '3f9ad1216f60682cdb7f0d52196e3c3ea3b5d080', label: t('Lcz_For', { fallback: 'For' }), size: "s", value: this.filters?.date?.description, defaultValue: this.filters?.date?.description, onchange: (e) => {
                const value = e.target.value;
                this.updateFilter({ date: this.dates.find(d => d.description === value) });
            } }, this.dates.map(d => (h("wa-option", { value: d.description }, d.description)))), h("wa-checkbox", { key: 'a1d9b0c0d10d0904dcd19c8e817f942c62d4e832', checked: this.filters?.include_previous_year, onchange: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.target.checked });
            } }, t('Lcz_CompareWithPreviousYear', { fallback: 'Compare with previous year' })), h("div", { key: 'fbaf8d9d893c1f89eb093a1905590a18404adbfb', slot: "footer" }, h("ir-custom-button", { key: 'a5f142600b5496ac1277302b7cfe04d78b6ddb4f', variant: "neutral", appearance: "outlined", onClickHandler: e => this.resetFilters(e) }, t('Lcz_Reset', { fallback: 'Reset' })), h("ir-custom-button", { key: '73d36e2347d3885dcdd226bccd20fe5f9d7c1ab0', variant: "brand", loading: this.isLoading, onClickHandler: e => this.applyFiltersEvt(e) }, t('Lcz_Apply', { fallback: 'Apply' })))));
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
        return (h("wa-card", { key: '2b86aece32e2bc343e1772b65d8f25b4fd9fc996', class: "daily-occupancy-table__card" }, h("div", { key: 'e6bfd1c7541774c8eec864b0f22a50d52612c779', class: 'table--container' }, h("table", { key: 'f5f462b15c3a52a8051c63261e7396686f4df531', class: "table data-table" }, h("thead", { key: 'bc22a6f150604c9351135a2da896f58d00caf3b3', class: "table-header" }, h("tr", { key: '770d636e40c7d345c4aac93c9a300a90193118bd' }, h("th", { key: '0a16f5b0d35dfce68a75ab6f41b15a797d93f2c2', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '5dc1f130a2d9ae93e1b2bd1d6ba2977b19124707', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '02159766a75f1ab6cd9d2206ea336e48066d8f56', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '166e543b424a602da3a5734ecd82e44480a3dd1d', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: 'f51e8f7213fb30a01f97be52a58b2fcb44373c86', class: "ir-text-end" }, h("ir-tooltip", { key: '0ec0a3980578e50865354d80e596eb6c36f1e46b', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'df3ac3862b34a44f3405e5b758ff2e196c811636', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '99fde119d345a1da1560bcca71e66ace3162c11e', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '15527ca575a4b187f36d0a1a0aed7fcab86aa22a' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '2eda7ecb8ddc68c34cf31a941af06e730f093b6c' }, this.reports.length === 0 && (h("tr", { key: '3836994b15c71c4aec99c21f4e5a3f8dcc6e47dd' }, h("td", { key: 'd3a700e8864ea012f910412e9458d5088a6b767a', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'fa51eabfb57f2ba1d40dfe34318faa856f566a1d', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '25fab415db51faeb0b3307db678206db8196e2c5' }, h("tr", { key: '9b507636eb0a9d9dd82fefd6e3c561af2416def0' }, h("td", { key: '252e6f940ebcb886348b3e60abf5d3047e2252d7', colSpan: 6 }), h("td", { key: '2f05b0f729a317a55109a3e7aeb61883bdbdc2c0', class: "legend-cell" }, h("div", { key: '77558b06adfe7cb57c09af9128c9e2ac5078f380', class: "legend-row" }, h("div", { key: '01707751f950da4da877329fb1b85c4968aded67', class: "legend-item" }, h("div", { key: '2ae0ca9d6d3e6063b272da7df5b69c92a08d55d2', class: "legend-dot legend-dot--current" }), h("p", { key: 'fd9911cd333c641523d2e3129646a8e8189552b9' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '24a03911c2d0f2e44c6867556f4ef12a83f6c7ab', class: "legend-item" }, h("div", { key: '9b895dda481b1ce2bbf92e1a2acc241ff1da50a1', class: "legend-dot legend-dot--previous" }), h("p", { key: '9892d96ad939056fe3a8c7bbe58a2b6c628a9e2a' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
    }
};
IrMonthlyBookingsReportTable.style = irMonthlyBookingsReportTableCss();

export { IrMonthlyBookingsReportFilter as ir_monthly_bookings_report_filter, IrMonthlyBookingsReportTable as ir_monthly_bookings_report_table };
