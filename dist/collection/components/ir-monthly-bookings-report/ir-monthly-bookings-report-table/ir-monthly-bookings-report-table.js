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
        return (h("wa-card", { key: '05ab3067722dcc14e094029e3d7ab406dde81096', class: "daily-occupancy-table__card" }, h("div", { key: '1346217000bc07f8cdb45d7a62a661564aa41569', class: 'table--container' }, h("table", { key: '00017af38201fa23da944fca013262c8ac76ebf9', class: "table data-table" }, h("thead", { key: '6f3d0c46a00fcf5e027b1bd70bd9d7ff3be7187e', class: "table-header" }, h("tr", { key: '37cd0e078adf093b5c1d3d53ca21f880f2232194' }, h("th", { key: '82dd35daafab1d77d7bf31ebb6a6d7f3dca28897', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '173c3c63dd69c1f0a8e9de4c4d7f7cb423437676', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '1349940a98c139694692da223967fd5a1803b2aa', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '36e2c24557448b1454c8e353bcc3db91adaa26da', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '4c024e20558c859b937d94112d24a5bc3d339eec', class: "ir-text-end" }, h("ir-tooltip", { key: '0e0eb9013d9a6439fe83eace2cf22135a4a52e5a', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'b643e22b3fd5c740d0576482a3b6b630af865cf9', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: 'ffbf51f54ccbff0106b2992112ac23f00b7edec3', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '08f42d69531624e7e16dd1e7a6f6d3d3d9dbee46' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: 'c790036c35dfbdcee6b66eb4a86911a113508fbc' }, this.reports.length === 0 && (h("tr", { key: '7bed6e179ba2d5db307edc5e2eecb5e5b40af807' }, h("td", { key: '702fa21b6cde3f61f78c25bb0247820ed69710c8', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '275f0de2de6276f507a06951dee0aed647088961', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '4ec76deca3d3303430d03bf3f7df53def5dcb6b5' }, h("tr", { key: '0e4e023c1dfa0303c1cd2f78da56ebdf7df7dcd2' }, h("td", { key: '237f91138e8e8945f327126a9ef2aac63e05aa4f', colSpan: 6 }), h("td", { key: '1e4f85a19381e918c80156daf4263b656eac0d4d', class: "legend-cell" }, h("div", { key: '92f96d4b093becd83a27e0dcba3c0b9cd77d54b0', class: "legend-row" }, h("div", { key: '00dd7793ccfa353e037bc6fba5e6953b9720aac3', class: "legend-item" }, h("div", { key: '334bfb1761fe26ebfc1b24679f606dfc40d506c7', class: "legend-dot legend-dot--current" }), h("p", { key: 'e8415cefb8cb4a50fa7ccb29a4fbaf3c1d5d32e8' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: 'ebcb88d2d8c38c8fcf406d243ff69120f0279b96', class: "legend-item" }, h("div", { key: 'a4e778d455218174be5412e561aecf3776181545', class: "legend-dot legend-dot--previous" }), h("p", { key: 'a3bc54f70a348a5d20d2efe402e496e472b7cf68' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
