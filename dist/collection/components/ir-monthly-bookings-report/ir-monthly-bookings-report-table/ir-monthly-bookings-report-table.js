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
        return (h("wa-card", { key: 'c59cb00a18c4994a03fd2ba68f46cc5cb4948f0d', class: "daily-occupancy-table__card" }, h("div", { key: 'bbbaaaefd598f4ae7ab5a9f56a5b9352eb05a776', class: 'table--container' }, h("table", { key: '8077e4f5f535f4d45b39a842f15e05cc4e875519', class: "table data-table" }, h("thead", { key: '27c89cfec9bf35a637903bee7caceb4b340d302d', class: "table-header" }, h("tr", { key: 'de2993bbd6233d469608738e82336eecef04ed20' }, h("th", { key: '9fb93c66d4360a531f759a2321de464f5032f343', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '7fee5209da41edc4d61a847324bb435acca403a7', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '0702e19a0d25126f8cf2c28bfbc1a11701a6fdf0', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: 'ea13aae1e38187a59d436ea48e34b43a8aa9caec', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: 'ad3a0baf44e03b448039e730e1492c3d00f69564', class: "ir-text-end" }, h("ir-tooltip", { key: '8a150a8f1f44ebc45413760335c4f440ca1043de', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '969593d1088db6f6b587410bc3288a4532405ecd', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '2c7ec62414349b6c78c28d7400be78b918b849d9', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '8791d8c3a64307acbdbf1a91fbd649997dc6eb6b' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '131d2ff389e5f13ac902f993382fa6c4559d47e6' }, this.reports.length === 0 && (h("tr", { key: '18f8f7df0769941adfb903fa18a22107cb5f8eb1' }, h("td", { key: '99af245f57c24fc2c3f3926a1c5e7e93791bbfa5', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '9a4d909027ffc1d5c047da565ddbc4cdb3d110da', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'b06294461abfcc450b0e7ce1d2a7412c601de104' }, h("tr", { key: '01048c71e176bad5cc5904fee899d20a99241148' }, h("td", { key: '6133a054f304ff7ea31fed6f035b016049d0ac44', colSpan: 6 }), h("td", { key: '020af798083a2274a9b9a19a3667af12e3d3ecfa', class: "legend-cell" }, h("div", { key: '9e735e039bbe23cedd53f4cad6ec8d4fb344938c', class: "legend-row" }, h("div", { key: '5e9599cc47256e2600dd4f6606a23ee43ec44ed0', class: "legend-item" }, h("div", { key: 'e08dec3c36474f2ace81e800fd4d40e8133ef9f7', class: "legend-dot legend-dot--current" }), h("p", { key: 'a6b193c83db35eb8e49e654fbb774d17f7cd38b0' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '3865bb591b058e6eb3f8a788e2914d00f2896669', class: "legend-item" }, h("div", { key: '5baa311157d239c6cab8015ed3fe4094377771a5', class: "legend-dot legend-dot--previous" }), h("p", { key: '819afcbb93780f43716ddd44797f8ce23c54ec36' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
