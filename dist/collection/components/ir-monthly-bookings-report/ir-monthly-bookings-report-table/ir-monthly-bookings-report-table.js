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
        return (h("wa-card", { key: '1b49d174f4796aaeb2db1234a9e44640e1e6bf0b', class: "daily-occupancy-table__card" }, h("div", { key: '5c12a0b93d68d714a60b5b112e546cf3fd335125', class: 'table--container' }, h("table", { key: '5cdedb8f8ba6eb7c1cc65ad14fee4e8869e89471', class: "table data-table" }, h("thead", { key: '47b393a566ba47058a6fad0d9f371eff9e0b58f8', class: "table-header" }, h("tr", { key: 'eef432c36eeda7743fdbbd7fab9a70bf5ca321bf' }, h("th", { key: '7ae2b016dc60b81f77fb27ee1a680181ee5cc531', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'bfd4abbc90043e9d196d5795ff09942cbddde60b', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '6090ca76ec6cab1ba117a3b2543b62a47254c9e4', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '265463b692861af3d106db2c2bbf491090676b74', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '75e43a4f995d816e3669543bcb994bfbb78d7328', class: "ir-text-end" }, h("ir-tooltip", { key: '8867fc4e639f0d39493a737463061078d0eb227b', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'aa697053614fa871d5693005708120fca46e9cf7', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '59b2e3fe7127e24a1befdc551ba0ea9f48bed59b', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: 'b5e8eb8126bb2f6b475dd6ecda814ac249097f59' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '884fdc03a367b30951ad3cd1f45efa0cf835c71c' }, this.reports.length === 0 && (h("tr", { key: '977e374bcac82121b17526cba846d4988209f755' }, h("td", { key: '210df2bb9e48ae299bc4af7b58d5902b9e044d9d', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '04c6c985c102ba27e6f00890a8fd67b0be06ff1d', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '3071a5973a3211c7c6b4c39657c19479fa0b23dd' }, h("tr", { key: '568abb642d5d1cd26eb2f96fe33e6962ba54f473' }, h("td", { key: 'a91ec987e7fcd1a5bfcfc3eeb3a09bfdc16f09ac', colSpan: 6 }), h("td", { key: '8b64ee8c2cb579cf783c1e8b908d32ab0b4ee9a7', class: "legend-cell" }, h("div", { key: '1c6c791c6169d58250a7e88244683b1854bc8c60', class: "legend-row" }, h("div", { key: '5e012b2f52521f7f5964ca1bc1bbdf432880fa58', class: "legend-item" }, h("div", { key: '7ef2fd50fe3ac0754bb2e6bb3861139b19c65aad', class: "legend-dot legend-dot--current" }), h("p", { key: '3e33de9a52061202185a7126206cc698941c609a' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'be07067db2e0b9b1a58c2d552abe451caacacef1', class: "legend-item" }, h("div", { key: 'ddce434915ce7c57485c84e92b6c584740ec1c27', class: "legend-dot legend-dot--previous" }), h("p", { key: 'c0e1432d5b01b0bd22c6b60ea0059c2e1b3eac0b' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
