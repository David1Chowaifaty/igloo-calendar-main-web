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
        return (h("wa-card", { key: 'd10db5651e87ef25da71b136686e1ffea3b5601e', class: "daily-occupancy-table__card" }, h("div", { key: '86a6ff17a676b16f03987b13841c5ecc1fb9e7a8', class: 'table--container' }, h("table", { key: '996ed6527f28e089fc64b4b09d7e106b20b1090b', class: "table data-table" }, h("thead", { key: '3fa7481919acab93437b24c0c3e78e5d04e44fcc', class: "table-header" }, h("tr", { key: '613c27219778ff8ef9a1bf5ec33387e62e1ff124' }, h("th", { key: '79bf1b985e34007507335dd3176c0b5f82ea3acd', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '739ae2fc26044707432837f8ac7688c637d5b252', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '587076ed8628947d32c70089b3e1823fce1d30ea', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '7d1ad971358d00ed86abcbfa77dff12f599b618d', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '8f3d1ccedb82086ec1de92f619d2b7e7b677606f', class: "ir-text-end" }, h("ir-tooltip", { key: '876d51419fac724315e5551e6392545278be7285', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '6898332f716c29e0801bd685887509535c73162b', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '814fc69dc768f3a6a6be26887d4e78d06bd0eaae', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '121e27587089f8ecabc4d3ece59b177ead0846f6' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: 'ec33963a04219f5e55000e4f5ffded80e3961125' }, this.reports.length === 0 && (h("tr", { key: 'a5bf81f9e3b365d56944a5c94a65e67ce008355f' }, h("td", { key: '99f4507a8030c6a66e7b9aae9520d113323ebf85', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'e8e969ff774d90bf5fed73c835dc55db54d098d1', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '4a9559407ec18c799c31c6bb3c442b036de4d5e5' }, h("tr", { key: '1b29da47c5ee872fb633696e4d57ceecfa1baa3b' }, h("td", { key: '414b94b7c0570b7b2956f22c9e35cb905ab9ce0d', colSpan: 6 }), h("td", { key: '041738fa209b91e15ef1efc865b098a98107a759', class: "legend-cell" }, h("div", { key: '39ab4d9021ba4a493bd41f8aa60096583602c0bf', class: "legend-row" }, h("div", { key: 'ed7e4c9e305fbbc32307b64ce501878c139e0639', class: "legend-item" }, h("div", { key: '4497c1480c5feecbdf397377a9314a78c345aad2', class: "legend-dot legend-dot--current" }), h("p", { key: 'e7683ad571ba10f58873deba0d178a1a17841638' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '166bd5e88693dca0610de34fd3eb89fc9883a856', class: "legend-item" }, h("div", { key: 'a9ca9b118e0a47fcc0426e0aef728bc3dbc2e2b5', class: "legend-dot legend-dot--previous" }), h("p", { key: '9c2bee19186c6da06c89e2305c11816a43474c14' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
