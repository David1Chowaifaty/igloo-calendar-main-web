import { h } from "@stencil/core";
import moment from "moment";
import { formatAmount } from "../../../utils/utils";
import { formatDate } from "../../../utils/date/index";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
import { formatCount, formatPercent } from "../../../utils/number";
export class IrMonthlyBookingsReportTable {
    reports = [];
    render() {
        return (h("wa-card", { key: '55c86d40a6102f4bd6eece19a779775d21cbb07b', class: "daily-occupancy-table__card" }, h("div", { key: 'e86ba51f5653338e986d9f5e4494b57b648066bd', class: 'table--container' }, h("table", { key: '77ab11b455d56017148245eb8cf391dea2be83c5', class: "table data-table" }, h("thead", { key: '1df41f3bc1de28a7285832db882d51cce2ef232e', class: "table-header" }, h("tr", { key: '52190a5e3910e44c7008fcb4789d36ee93f43af3' }, h("th", { key: '5d7a710183f6940eb832b326632863ac8346c6a8', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '475d11eecb2b7019d8fafdc54c85c4d940e93b94', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '27a9c26f864c6c051ebe962e94a42bace29c56aa', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: 'bec9684d80586a1e7e0efc6416b723839891e85d', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '4255eb0c9e929b9982ef64fb24bad94e6c51247d', class: "ir-text-end" }, h("ir-tooltip", { key: '03008519310bc894815b1ec27227b84761fc864f', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '40c6a05da26f2602282757bd431c48b36a4cddc5', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: 'ee4c0fbdf573793ddc5423ecbd419919d0f2c4b4', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '17d07b59fed214d32b3746523ea7340e0c91ebf9' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: 'b88d60a95486457aa0aba4ecd19497e7ea667e5e' }, this.reports.length === 0 && (h("tr", { key: '6d382a3bbec03b7721cf795e9a78c8c9f526b286' }, h("td", { key: '3d1ecaadcf49181c84fdf0bf0374674cb1d56cd9', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '3546b591ac8e883581f7917ecbd00ddbcfa21878', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '5d4a07e9240f170d45c6928617313b17468eb265' }, h("tr", { key: '19da6e4a4cc942060230fea99bb45adfc715cc4a' }, h("td", { key: 'c6797ab8c54f8519f4409cb788b94a59d63dd93e', colSpan: 6 }), h("td", { key: '09e9d45cdf8d0a59a34fd044c8431038c0230b51', class: "legend-cell" }, h("div", { key: '09f89ebed6c058e480adb0f623f86c3149c5159d', class: "legend-row" }, h("div", { key: 'e2df33982382ef5e359719531d041c151833dbfb', class: "legend-item" }, h("div", { key: '7ffbf5e662166b63ce1bf0222a82bd9127f375ff', class: "legend-dot legend-dot--current" }), h("p", { key: 'db151579572736e82acc6970b1a8adc26cb1d546' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'd0a2a747a5878345033d47fa2ca918fa8e2fd0da', class: "legend-item" }, h("div", { key: 'e0f0134b05b5c4076fc4675534a5675024b8b1c0', class: "legend-dot legend-dot--previous" }), h("p", { key: '12b1a74ed8545ebfea6b4166eba2c789a7126b77' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
    }
    static get is() { return "ir-monthly-bookings-report-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-monthly-bookings-report-table.css"]
        };
    }
    static get properties() {
        return {
            "reports": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DailyReport[]",
                    "resolved": "DailyReport[]",
                    "references": {
                        "DailyReport": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-monthly-bookings-report/types.ts::DailyReport",
                            "referenceLocation": "DailyReport"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
}
