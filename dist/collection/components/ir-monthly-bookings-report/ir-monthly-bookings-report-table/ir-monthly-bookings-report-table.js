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
        return (h("wa-card", { key: '4c293f317f4d2d8a5fe6251b1bd7ea4c8e602fec', class: "daily-occupancy-table__card" }, h("div", { key: '95f67b286231ee6d4990a77ab037bf19df38cfb4', class: 'table--container' }, h("table", { key: '6c188ec399f8aa583f051b2a9c761b4d447d208e', class: "table data-table" }, h("thead", { key: 'a0296e4edba36d44a319cda86e3f942cc02f6ff2', class: "table-header" }, h("tr", { key: '1e3110c6fec58afa03ed3903a5a1dbba9e1806e2' }, h("th", { key: '6d4ab3b005ab8734d68edda2bf5d0f886baf4820', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'e42e9144a8f057759766235029716161e5e6dbe1', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '34cb530d58d0dc8c49ba0196d27aaa8d8cbd8371', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '456b6e7e9931bcd10e702ec089bc200b52a4e3b6', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: 'f153071492b9a273b6841081a7f9804e621078b1', class: "ir-text-end" }, h("ir-tooltip", { key: 'a465cd9039822619eff1eee1bd34a83a6dd27b5d', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'cf97fd67fc861814e19fc67c22dfac2171aea494', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '2d7140f712368eb95a184468a133b9a1e507071a', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '2bf8315dd644eaa67e9438ada5d4da5486da2675' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '4786d5b6681f223734d93a63c85a4688b36e3ff8' }, this.reports.length === 0 && (h("tr", { key: '616020a594ff7a40acc1eaef23569021034d05a5' }, h("td", { key: '3f87f08d9acb4877ded627ace20be08b35722a51', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '9b1e4ee0df1d8e22ca43d8f8964b13c768c363fa', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '83ede6564147af22acad2bf5daf09c77482316b9' }, h("tr", { key: '1818a658420540dbcafc2e27fec825eaf9680ed1' }, h("td", { key: '9288ae7c07a1890cddfca6e0616cad69161d1fcd', colSpan: 6 }), h("td", { key: '73ab1c390b96f092e0da60d8ebaed881f0f93ab2', class: "legend-cell" }, h("div", { key: '7c65bb0a7d233d96e6864a40403a24d1d60cca3d', class: "legend-row" }, h("div", { key: '38b7df02b8421d4a3ccc7dcc75459f1c72ccfee5', class: "legend-item" }, h("div", { key: '4ff91449f3a3f6d7c0883d8d669e8ebe56225d8d', class: "legend-dot legend-dot--current" }), h("p", { key: 'b9098a85413b138d67dad9942bfd29a784e8265e' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '58cbdab42c96b7087295ee1744e61ba438d4a270', class: "legend-item" }, h("div", { key: 'b4476abe9402d68f116a0f9dd3e73ef48eeddcc5', class: "legend-dot legend-dot--previous" }), h("p", { key: '45772a0b1087cf6c9704b887e691ea63e3ace8c1' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
