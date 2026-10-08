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
        return (h("wa-card", { key: '64acf93a169948b6cdf55df04c1da0a0c9eaa5ae', class: "daily-occupancy-table__card" }, h("div", { key: 'c9dc2660eb5bdea55cb71175fa34b0c54aa37c88', class: 'table--container' }, h("table", { key: '7cd94042774ce1c8abaec20310a2e466942dd00d', class: "table data-table" }, h("thead", { key: '677a728dcae3b1e87e7f0b0de50257a578e578c1', class: "table-header" }, h("tr", { key: '3ac8fdb12b63c8867e1db9032c425ea458841fc7' }, h("th", { key: '245f5ba9f2f443520275ca139eb40832de55fd8d', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'be441364c0c3b1a895a3aa7011f565d21a6b7038', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: 'e65d18948e8f7c7c6e96714ff59c249d2ba52a0c', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '22bae76ff543eb54990ea407d847fab8b449e163', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: 'c7425f9c083c313f1253948be948c4b12e32d27b', class: "ir-text-end" }, h("ir-tooltip", { key: 'b1a794951a8b9d12649803af624dadbe7c0c86b3', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '0bcd55a1db0ce8bddc2a2b83fe50ad2574a2b40b', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '3d9bd8a9932a6500f3f00f3d3c3e512032f87b91', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: 'a53b9ce848649f7e3eae2f085f64598b6c032cd1' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '794817da024193c64920ef11b5767761d5e9df12' }, this.reports.length === 0 && (h("tr", { key: '4fcbe263d0403a4ee99ad7a95ef5caa8be3db329' }, h("td", { key: '4a7b7f344d1806a2b2a625c33a5776c748499f4a', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'f9e8f4da68a01e74c04dbdead579585e5006174c', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '7c6ae2377feae5d674e656d70d573decd050dfd6' }, h("tr", { key: 'c5a427b6ee487b41618c2797ecc53844278ed975' }, h("td", { key: '87c9f191f26f1796adb6d90beaba27955eb295d3', colSpan: 6 }), h("td", { key: '13c3344d839d5e52c6dafcb699e4fcf9b9df3a6f', class: "legend-cell" }, h("div", { key: '69359a50f076f654c56f8cc0906a751685c630f9', class: "legend-row" }, h("div", { key: '1d3630b105d7224780484fd1b84d49ec57c82815', class: "legend-item" }, h("div", { key: 'cd9908d0b03c6ff49cc80ffc10885db06af033f4', class: "legend-dot legend-dot--current" }), h("p", { key: 'e0b300cd5f9427d71c979cd865dc832594deb4b9' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'ae4c192d709580b5dc16abeeda7f0f7aba172b47', class: "legend-item" }, h("div", { key: '8b84c3ebe0b33236445fe3736ce5aeca3cd5f3e6', class: "legend-dot legend-dot--previous" }), h("p", { key: '72c884be5f4ba6dc0ca985d1db2da0a36b20b7ad' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
