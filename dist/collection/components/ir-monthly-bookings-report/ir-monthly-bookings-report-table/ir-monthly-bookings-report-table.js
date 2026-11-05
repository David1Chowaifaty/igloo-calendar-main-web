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
        return (h("wa-card", { key: '4ffe3e2a2ba4534781d813864541a7984597ef55', class: "daily-occupancy-table__card" }, h("div", { key: 'cb065afbb63d9f4817bf55497e84192f848419f9', class: 'table--container' }, h("table", { key: 'ca64e189f761677299553f43bc74925c373b0d54', class: "table data-table" }, h("thead", { key: 'efc39a7857fabdb549d4c7fb34701fa4c560ddb0', class: "table-header" }, h("tr", { key: '715a9721e36bb81b70aef3699839264796c6251d' }, h("th", { key: '3875508c7731d21503e16365948994c6697a1db8', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: 'a4c008de88e76d525cc4977ecec7de77d0e126ce', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '54cbb9df93425ffb48ade0b4bd5401acf567f65e', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '23c34514d0e76e727a92dce739b5b3ef7a0a4ce2', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '1be87d372ddb3bdf790c03a2b24e638e437d6ee9', class: "ir-text-end" }, h("ir-tooltip", { key: '3c4c5e037012347b8e1c9e10fa9fb1df570aa4e2', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: '31c75e069317fe4c010868b89e724534bcedbc80', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: 'b440de973411b4775ce02a92716eaed83991dee5', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: 'd8b7860ca93326e50889acb5d96543bf262cb7a1' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '68abc5dde8bde18f8ee45ed83d622f135f04da60' }, this.reports.length === 0 && (h("tr", { key: '93381b1347bc532e9fda63f16b95072fc93de71c' }, h("td", { key: '8041ab1800b3207eb01df3197349cd158dc39838', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: 'bb4e5891c8f390f84f951f97271f4b8a50544f94', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'da8ad7614159d62aaa6c66997a57f9fedea9667b' }, h("tr", { key: 'af462ecb907acb7aad321fa68421098998b206f5' }, h("td", { key: '6f5bc87a5796b87bf7ab6f608401a95262184082', colSpan: 6 }), h("td", { key: '7f219b03585d22b7d16b94a04993e96f257a9f19', class: "legend-cell" }, h("div", { key: '6c4a99353355459463b45939d6d1fbe2fa40aa6d', class: "legend-row" }, h("div", { key: 'da3eede24873be2512f688d6bf70ff2f31e70399', class: "legend-item" }, h("div", { key: '668d86c5864d59086b54bd3bb58a0e1b693795be', class: "legend-dot legend-dot--current" }), h("p", { key: 'd4f9f41b0947cb3144e6c5941d0ed84d92a48fb5' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '56a4870143b4e2fe4a4065532140fd64b9428fec', class: "legend-item" }, h("div", { key: 'd5a305508d58bc15bed221320083b4fa26801a16', class: "legend-dot legend-dot--previous" }), h("p", { key: '8f337a457b954fc5f094f238c32a53cfa9949e79' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
