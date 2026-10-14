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
        return (h("wa-card", { key: '2b86aece32e2bc343e1772b65d8f25b4fd9fc996', class: "daily-occupancy-table__card" }, h("div", { key: 'e6bfd1c7541774c8eec864b0f22a50d52612c779', class: 'table--container' }, h("table", { key: 'f5f462b15c3a52a8051c63261e7396686f4df531', class: "table data-table" }, h("thead", { key: 'bc22a6f150604c9351135a2da896f58d00caf3b3', class: "table-header" }, h("tr", { key: '770d636e40c7d345c4aac93c9a300a90193118bd' }, h("th", { key: '0a16f5b0d35dfce68a75ab6f41b15a797d93f2c2', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '5dc1f130a2d9ae93e1b2bd1d6ba2977b19124707', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '02159766a75f1ab6cd9d2206ea336e48066d8f56', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '166e543b424a602da3a5734ecd82e44480a3dd1d', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: 'f51e8f7213fb30a01f97be52a58b2fcb44373c86', class: "ir-text-end" }, h("ir-tooltip", { key: '0ec0a3980578e50865354d80e596eb6c36f1e46b', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'df3ac3862b34a44f3405e5b758ff2e196c811636', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '99fde119d345a1da1560bcca71e66ace3162c11e', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '15527ca575a4b187f36d0a1a0aed7fcab86aa22a' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '2eda7ecb8ddc68c34cf31a941af06e730f093b6c' }, this.reports.length === 0 && (h("tr", { key: '3836994b15c71c4aec99c21f4e5a3f8dcc6e47dd' }, h("td", { key: 'd3a700e8864ea012f910412e9458d5088a6b767a', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'fa51eabfb57f2ba1d40dfe34318faa856f566a1d', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: '25fab415db51faeb0b3307db678206db8196e2c5' }, h("tr", { key: '9b507636eb0a9d9dd82fefd6e3c561af2416def0' }, h("td", { key: '252e6f940ebcb886348b3e60abf5d3047e2252d7', colSpan: 6 }), h("td", { key: '2f05b0f729a317a55109a3e7aeb61883bdbdc2c0', class: "legend-cell" }, h("div", { key: '77558b06adfe7cb57c09af9128c9e2ac5078f380', class: "legend-row" }, h("div", { key: '01707751f950da4da877329fb1b85c4968aded67', class: "legend-item" }, h("div", { key: '2ae0ca9d6d3e6063b272da7df5b69c92a08d55d2', class: "legend-dot legend-dot--current" }), h("p", { key: 'fd9911cd333c641523d2e3129646a8e8189552b9' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '24a03911c2d0f2e44c6867556f4ef12a83f6c7ab', class: "legend-item" }, h("div", { key: '9b895dda481b1ce2bbf92e1a2acc241ff1da50a1', class: "legend-dot legend-dot--previous" }), h("p", { key: '9892d96ad939056fe3a8c7bbe58a2b6c628a9e2a' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
