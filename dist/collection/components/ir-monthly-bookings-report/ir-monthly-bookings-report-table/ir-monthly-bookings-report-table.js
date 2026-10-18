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
        return (h("wa-card", { key: '02c5b7d0d8a160549c36ab76cfe3997f9ebad112', class: "daily-occupancy-table__card" }, h("div", { key: 'bfbfe129f0e8cea6cffbd737b78fb90d8c5c27e6', class: 'table--container' }, h("table", { key: 'd1bd77423ec3091ae9e46a41a2a875b2faae9777', class: "table data-table" }, h("thead", { key: 'afde0e0db5d308b2b92dbbfe1645efbf8e5efdfb', class: "table-header" }, h("tr", { key: 'f3c56068e75fef6425416e7e99e1a3039f47ee70' }, h("th", { key: '5557d3350952a7e4fdcdc1799f96cf202e83f1d0', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '8a7eca0068c96a62d7486c704781594d87bd6c01', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '984475af806d3540073235d5326efce8fdf0fc40', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '8aae86c6ce6ec4e329d9bc01ea21e491e995ce35', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '745167531ddbc76b4819cffe550bb500b0a7ab49', class: "ir-text-end" }, h("ir-tooltip", { key: '8cf945b4e10fd4b285ffee9f0190e7e15948a800', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'c3459a3606f3c3dd0bd95e3ddeed9ac660f0bfbf', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '13acf05797e6a7f2b736a6aeec392876bc838c58', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: 'ef89c9989083a59f4ad98c91f57b1c8a1435ddb5' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: 'e9ea79ef5fda4e4b8eebf1dc96d4ec7bc37d8181' }, this.reports.length === 0 && (h("tr", { key: 'ca970eb31f360929a494ab9f59a35d964d3ff757' }, h("td", { key: 'fa7c02a8e17465c93405f8a67dc0b84fad67b490', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '75c9bc272e594076cd3967b65eb9649f26d437ea', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '17ecb1a2d2cf39577bd00e70ce0f1db58f5475da' }, h("tr", { key: '24fd5840ab55f5f05f405dae59cb9a4993fc7cba' }, h("td", { key: '4a1ed64cd9234bc87df0d11741948b13f94b8e5b', colSpan: 6 }), h("td", { key: 'd5c23836e8fd969d8adee4ac534598b8dda7d3f4', class: "legend-cell" }, h("div", { key: '785c2babe0f05f32bd8564f645fe4b2edcd070e3', class: "legend-row" }, h("div", { key: 'c62d93545aef32d6e90b134171e6f6bec6f26394', class: "legend-item" }, h("div", { key: '3aedfd0bae82e33f3f3b86467a06e3370409545e', class: "legend-dot legend-dot--current" }), h("p", { key: '365c98d724c8fd3c302599e9644325f6a91605af' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '4e83f257c6bc355fc1a17f2f8d535fcac73e264c', class: "legend-item" }, h("div", { key: 'f2c870f17eb8ee5772734d1ff5ce56706b2b063d', class: "legend-dot legend-dot--previous" }), h("p", { key: '9b3966f25b57c53d696297ed4e1a9615de32eb9e' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
