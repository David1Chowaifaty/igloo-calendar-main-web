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
        return (h("wa-card", { key: '7c17827530d687afbdf1cb3df311f0695afbb139', class: "daily-occupancy-table__card" }, h("div", { key: '94f1c6751683b0bf15f35ed6e24b79c636823d36', class: 'table--container' }, h("table", { key: 'd39348e4cd4f52293f20ccbffe51fabc092a7522', class: "table data-table" }, h("thead", { key: 'f60187e8d0642b4fa19ab5fc515f4bee8ae321f4', class: "table-header" }, h("tr", { key: '683aabc65cdbddc29fe233be6a71235ff13dd6e6' }, h("th", { key: '5b81f6f49aa0805cd671eec79b828a733a3e8f00', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '6a9499ff146af1070de299d421f229a47a8555ae', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: 'fd68af3ecf4acfed6eee819778d77742e76c6331', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: 'ed44ca13ee6abcc71db9c75ac440c98df3d2f9f2', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: 'b70df4993cb09a6913c058b3cb69fd06825b9fad', class: "ir-text-end" }, h("ir-tooltip", { key: 'a3b6cb6a354120681faf2206d89f0a473e39ce27', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'f590fd3f6f582e55e1a49826c5f89b0e1c9bfc7f', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: 'd17c33e78afc7a9c5caa0bbd76fd49747bb485df', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: 'cd67d28c34cc33cca251189436435d4405a4648d' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '1104bdecdbc6fcd6e26efac5b7c50dd5f4ecf231' }, this.reports.length === 0 && (h("tr", { key: '3697f7c13fdaf72ec5f426835cf73f1822855423' }, h("td", { key: 'dbbe1f1da548b9d8292072dbc161414d23e55c04', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '49858bba1591233f215255adb950762a234c2182', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '777a69cb17b247b72ad443cf14bc207be6d442e0' }, h("tr", { key: '238f261fa593d1f10bdec9676c9291f6ecbe85d2' }, h("td", { key: 'b007c1709e49acf63da37600145ab557a2d4656e', colSpan: 6 }), h("td", { key: '7a81b82b6819d6a1df43e2d171f32dec32051910', class: "legend-cell" }, h("div", { key: '0cd57401e3e0cf17d7e62d488506b31cb9a3f7cd', class: "legend-row" }, h("div", { key: '530bd90325b48b31f494d247c7f07b93bfa9d61b', class: "legend-item" }, h("div", { key: 'e2a2adb4530c9cb8930baf43ee1bdb03593b03c0', class: "legend-dot legend-dot--current" }), h("p", { key: 'e729eb92545938b1e730ec71fe731f2998657cf3' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'c0478a1446a31f070a12adeb5a4e6357c9d0e38d', class: "legend-item" }, h("div", { key: '9726c4edad883865e478ee5aa99147c59cf5f901', class: "legend-dot legend-dot--previous" }), h("p", { key: 'a2eb0fab66d740bf1c926c66fa6a62fca24d385d' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
