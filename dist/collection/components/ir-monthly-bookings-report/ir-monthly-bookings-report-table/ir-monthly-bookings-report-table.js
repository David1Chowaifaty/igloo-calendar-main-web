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
        return (h("wa-card", { key: '60310acaf8dd4d22b181481cbc0d9b2666b31a35', class: "daily-occupancy-table__card" }, h("div", { key: 'ddb547f47ac8c30d3f99ae80888159b62dbf87f4', class: 'table--container' }, h("table", { key: 'd9437c0866a6a90f0ebd8503c2035acb39d5726d', class: "table data-table" }, h("thead", { key: '8b54736f01542f25a3a8ac3fc1c57328f744e488', class: "table-header" }, h("tr", { key: 'ef45d0c3b801e7c5cfa5aaa46b5214399cfcc1eb' }, h("th", { key: '1e1cb18c3a636c03600cd43108b3915ed32abef6', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '75e24e195e04084115541f15c82094e5ea044dae', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: 'bd98b0d21e5da9df8246a2002393f02630a81843', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: 'b85bf34f457dcdd4eb5d0fe6b8f8090466d7bada', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: 'b60619ed0266c1778b1cd43738df31f68f5a9478', class: "ir-text-end" }, h("ir-tooltip", { key: '7c366ac067202f7d9848eef9682bd9edf3c377ac', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'ba687d8602ab9c8901440885d8321b8a76deea76', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '509564d0d7d861ab630fb59fd0596aa144dd06bd', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '74c0a9b7888531afa4b5bb862638971b371ea4bf' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '4545b11a9e78ec6f05f067103cf4a6170b71426e' }, this.reports.length === 0 && (h("tr", { key: 'e953e0c38771b842d116f13b412c3310fb8423b0' }, h("td", { key: 'c6fc857063a51e98a96d6f56079a8e095563c3a5', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '7a3d6be2e5a7e9f673f3e99e200d8c76b0d50a98', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '17d2710d818d6d5db9235bc8b96916795c79ae47' }, h("tr", { key: 'b5c4453650de4f06b14f37dbb359e407b228d634' }, h("td", { key: 'c23d991cd09a1fa5b97a921758a412c5fbbe3529', colSpan: 6 }), h("td", { key: '6b430439091b34b2901cfd034a9acbbea4276227', class: "legend-cell" }, h("div", { key: 'fd155aa0d9bc55334d684262b284b03cb85074de', class: "legend-row" }, h("div", { key: 'ee23f5994abf7304b2d5af3bbb566a597f475a54', class: "legend-item" }, h("div", { key: '7b57061037c2d2a43ed461f384b7975ea7bdfdb7', class: "legend-dot legend-dot--current" }), h("p", { key: '436afe7559e7947e5b3ba4ec2e5e7658037fa49b' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'b8a57e25cbe336a86f20e6a36806766427412faa', class: "legend-item" }, h("div", { key: '061a8a0d5067c2dbb361823b47cb725402640e82', class: "legend-dot legend-dot--previous" }), h("p", { key: '2a5993f27ba9a335809af1b73268061bd233feb7' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
