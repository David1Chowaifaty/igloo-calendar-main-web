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
        return (h("wa-card", { key: 'd7145fc8a05663943690c0414c30e6b9683282ff', class: "daily-occupancy-table__card" }, h("div", { key: '0db6ccdb3c1b1f3a8fae3d0eed68d38df9f5e980', class: 'table--container' }, h("table", { key: '4086236d65cbe74758d2cfbe24390edda1d08b1b', class: "table data-table" }, h("thead", { key: 'd9fc60edce575c71a70ba3875bc361c3937ec325', class: "table-header" }, h("tr", { key: 'fdf9758439d8810d95805f121c761f055ea9088f' }, h("th", { key: 'a38ff0164178057e2922c9a907cf554e714da7e6', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '6a53056d65197c46117b5f8bbeeda8149bffd171', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '43863b3d9a9bfb5d5f187b6d3096dce3062204c7', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '11b6fec6c2e6a061fc8b4053fc297dc09d2e0922', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '7c3d649de60127eeb7231fd35b20387ba87b2937', class: "ir-text-end" }, h("ir-tooltip", { key: 'fc0a79c6ebc30e4f6b005ef7116be97be866954e', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '75f5c88d65961a13872b5c6eed4415a567f81a7c', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '7f660bfc0bfa4bad500d032a786a4246f88c5176', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '4410918c3f48dcc6e96b2f46e73d87cf87aa20f3' }, t('Lcz_OccupancyHeader', { fallback: 'Occupancy' })))), h("tbody", { key: '0ecfa461bd282414bae2189a747573e2f52e1ec2' }, this.reports.length === 0 && (h("tr", { key: '0c48e22522a1c63b61425bcc8cb739327340d3d9' }, h("td", { key: 'c2d425cf9fb13992cde581b97cd0dac43b81bf51', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'bf406a947df4e9bf1fc9c8fc5b09941a6b1eacd0', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '31f8b726b5d79e5e8d129b90fa4f20c008fb4f5b' }, h("tr", { key: 'ba1acc403f80ff3c838265e1f710f4948aa385f7' }, h("td", { key: '98a8596cb5d543440b4c14b692a98abd138a507a', colSpan: 6 }), h("td", { key: '672b65df031d07b3f7de86377d05d7fac5238fb0', class: "legend-cell" }, h("div", { key: '7d796055adbea811be8d73818ebabfcb3879edcf', class: "legend-row" }, h("div", { key: '0cc5f83583969bb484b2f798bbe14561ad6cd5a8', class: "legend-item" }, h("div", { key: '0ebc45e286bc41338a2697b8a0583c1d48944766', class: "legend-dot legend-dot--current" }), h("p", { key: 'f286ca36206cc8a2a5e7c5159014b405f3196e8c' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '2525ab3a65d829054e0e89f29483360091d1e796', class: "legend-item" }, h("div", { key: 'b3dc2a1b98061016067b255bbfd8822cec91f310', class: "legend-dot legend-dot--previous" }), h("p", { key: '238e0f677334b4e7c3722bd9c17d49ef2c0cd230' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
