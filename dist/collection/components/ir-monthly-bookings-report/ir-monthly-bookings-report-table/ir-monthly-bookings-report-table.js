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
        return (h("wa-card", { key: 'd72e61673cbd0b2d444e2a1916b5bf18ebe33eca', class: "daily-occupancy-table__card" }, h("div", { key: 'c5535fbcc7a9d5a5df0f1919694ca6346795a14c', class: 'table--container' }, h("table", { key: '87137488bc6b927b8a02e146ee81167717082f78', class: "table data-table" }, h("thead", { key: 'f3ab23f415cdd42c047378a3e53e867e7eeacb1f', class: "table-header" }, h("tr", { key: 'f7f31b7beca7a0f6f040776dc5e774963b98c982' }, h("th", { key: 'c5f2a9a7b77afc78c865b45f6d662c809fcbcb56', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '1bfbd8c1b22bb9c61d72d30ba3fab166454e7fb5', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: 'e9f3b381dee44fed7f0ba564a9c0926e6b9c1d67', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '97a1ae32cc61de42122f30ad12993249fb151a81', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '24503cafd343ec37e83b21c56874c728c5f44331', class: "ir-text-end" }, h("ir-tooltip", { key: 'a39ab59d7c047282c8ef0ab9467d0030753c1b6e', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'bca53cc697025c0fc1da4665d7c5f49d9155ce0e', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: 'fe7723480d7f628f9551f803b80567c5eddc6a41', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '26861bb17e878b8c99ebdce5f01fcdefcc3e062a' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '4dfbd6ecf6d61643031a569ff659206e3d368b7a' }, this.reports.length === 0 && (h("tr", { key: 'd7fad0df8efa9ab1959f975605cb19e963bc66e9' }, h("td", { key: 'bcdc1467ada876bb0e7b0ff75379784498bbd535', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '3129b0d6aafae036de8467c7992f23609c8bd8c7', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'd0d9529d8f00a2b0b43cc9b238b07a369ca0d78a' }, h("tr", { key: '62fe9e65cf5818b668a53984f3fc542564a018d0' }, h("td", { key: '5939fd6a3fcfb264080f937fb92534d38b5a74f1', colSpan: 6 }), h("td", { key: '3b2c56a4252a75a0d67b544197fa80a05bb760ab', class: "legend-cell" }, h("div", { key: '69c22b6fa1897f11e890e38dee6f7f03439fb520', class: "legend-row" }, h("div", { key: '76402e1cdc51158fab3046d4913b9c836d988a7f', class: "legend-item" }, h("div", { key: '90d8d687c2c317243f3f7a8449977181c8b071fe', class: "legend-dot legend-dot--current" }), h("p", { key: '994953461720d997a87b1dcfef970f149f9400cf' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '1a20589942c51fb9f17b317c3427710a470cca2e', class: "legend-item" }, h("div", { key: 'e378690dfa925bee38f694bbb8b83d450ab2128f', class: "legend-dot legend-dot--previous" }), h("p", { key: '362c649593894d73bb9d4e495f4a4f7641599c70' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
