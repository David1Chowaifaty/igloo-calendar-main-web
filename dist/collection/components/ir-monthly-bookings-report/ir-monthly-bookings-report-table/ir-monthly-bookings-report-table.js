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
        return (h("wa-card", { key: '37b734995eba22d4091b2dac9da7f6346909f344', class: "daily-occupancy-table__card" }, h("div", { key: 'cd9b71edf7f8e81ae95468cab9df797e4529644f', class: 'table--container' }, h("table", { key: 'e23e8e1a8b1673daab76d1d59dc3d8d1e85823aa', class: "table data-table" }, h("thead", { key: '135ce8a9f8ae806e11b74030dd1a6d7e02a2a9a6', class: "table-header" }, h("tr", { key: 'b7ab20e622ee081e562e73244fee8a8734544bf4' }, h("th", { key: '23f5610d81ce111c304af7b93ae3e1aeee453794', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'e7c6e17a4f90e1b6b8f28b8f84ada746db37d41c', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '27b7915fff102fb1ac2da77f85807ae8cdf32d25', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '8d05d1fdcd23a589f511d1f948c5168091a970a4', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '3d194f34e85042afd730c464f4612194341cb59f', class: "ir-text-end" }, h("ir-tooltip", { key: '3c5a9388993bf2bf321a159ab0371eb0b07e7975', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '6242862257cc1e743ce4d7b187ec31a6b6992aba', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '7980bb442ff587703b021a5b4708d6e484885388', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '4773f955fb90d8106f7389aaeab0456a6547db1c' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: 'd978e48c96965f7717b7a68b690a5c8dd1ad2e42' }, this.reports.length === 0 && (h("tr", { key: '96d4e791758ef14c69374a1d801ddf1348aa7f0b' }, h("td", { key: '00057f14f00bf3c54f24cbd32f274d827f0b0333', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '9d08db8f7737d5fe40b215227cd011cc88669e57', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '460ae4f57602591ac9b5d57a2cb6ccff94a0cadf' }, h("tr", { key: 'ae21a495557833bdf126bf3d5a8de605f10bade4' }, h("td", { key: '9ad24c4da8d2648a987f224ee392e82192ecd862', colSpan: 6 }), h("td", { key: 'a3c951bc53643dc474e1ca24792a1f86abd0c76a', class: "legend-cell" }, h("div", { key: '8cc1b8126c2f9f1b63b08c9ad265a93bac8eac47', class: "legend-row" }, h("div", { key: 'dd591bc407996294b3acb4b463b8bfd4e0bbdd2b', class: "legend-item" }, h("div", { key: '313a9f273c7966df870c1a102f87f2a07968be4d', class: "legend-dot legend-dot--current" }), h("p", { key: 'b1b6adb1002281607c0188a60415370c1c7f4a65' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'ad4a378ebed74fda8215c4d9480534606956334b', class: "legend-item" }, h("div", { key: '8004e400dfdecf155e493468ff43d3d76e2cbc77', class: "legend-dot legend-dot--previous" }), h("p", { key: 'f7b725f322ae524fe1a51fe17c8f877f0e1c60ea' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
