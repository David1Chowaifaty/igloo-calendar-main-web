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
        return (h("wa-card", { key: '4044f35815b872c5f89312cd12cddacc7ce40585', class: "daily-occupancy-table__card" }, h("div", { key: 'f7cfdfa063ac331294e8b400a768a84f4e52f133', class: 'table--container' }, h("table", { key: '540662920f90ca3e49e09e393613e42286ef9cd3', class: "table data-table" }, h("thead", { key: '0996c87407c5d7ba2a58a221a0a60e19ba346b5c', class: "table-header" }, h("tr", { key: '3219039c9dd029ee777c253e07035a13bc3d85a3' }, h("th", { key: '5a84192b40acac3efd667b036383b02f8f870d82', class: "text-center" }, t('Lcz_DateLabel', { fallback: 'Date' })), h("th", { key: '73b118fb1e889959b597d52c6d8b37ffb258f76a', class: "text-center" }, t('Lcz_UnitsBooked', { fallback: 'Units booked' })), h("th", { key: '4c92eaecf54a4c1c910b2085e08e79edc2db3241', class: "text-center text-capitalize" }, t('Lcz_Adults', { fallback: 'adults' })), h("th", { key: '2f2d3fd2e0991165c66100dbc440622e1e622e5c', class: "text-center" }, t('Lcz_Children', { fallback: 'Children' })), h("th", { key: '2d4ebbfaa5f409b9af1e839d29e72dcd4d667101', class: "ir-text-end" }, h("ir-tooltip", { key: '63c4700d26faebd9eb96a93bbc707cc817fde773', customSlot: true, message: t('Lcz_AverageDailyRate', { fallback: 'Average Daily Rate' }), alignment: "end" }, h("span", { key: 'd6803eb29dcd109d581105a761d54b82ac0a4b49', slot: "tooltip-trigger" }, t('Lcz_Adr', { fallback: 'ADR' })))), h("th", { key: '3a7b8b473773023a1ddf443ac2db992648f0ce41', class: "ir-text-end" }, t('Lcz_RoomsRevenue', { fallback: 'Rooms revenue' })), h("th", { key: '241beac3889a207e8fb16b19765c85926b7218cd' }, t('Lcz_Occupancy', { fallback: 'Occupancy' })))), h("tbody", { key: '72d79408824b4109e91e8ce1fd8113af1fff34ef' }, this.reports.length === 0 && (h("tr", { key: '4edb790a2c234b2cda65ec814a596efab105dfa7' }, h("td", { key: 'cbd9606c3fa4d8125d52272671eecf19cb7306e9', colSpan: 7, class: "empty-row" }, h("ir-empty-state", { key: '0b2558c5841d77c387acdc90e8e1458626758187', message: t('Lcz_NoDataFound', { fallback: 'No data found' }) })))), this.reports.map(report => {
            const mainPercentage = formatPercent(parseFloat(report.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const secondaryPercentage = report.last_year
                ? formatPercent(parseFloat(report.last_year.occupancy_percent.toString()), { minimumFractionDigits: 2, maximumFractionDigits: 2 })
                : null;
            const reportDate = moment(report.day, 'YYYY-MM-DD');
            const isFutureDate = moment().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: "text-center" }, formatDate(report.day, { style: 'day-only' })), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.units_booked ? 'value--primary' : '' }, formatCount(report.units_booked)), report.last_year?.units_booked > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.units_booked)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.adults)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.adults)))), h("td", { class: "text-center" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.total_guests ? 'value--primary' : '' }, formatCount(report.children)), report.last_year?.total_guests > 0 && h("p", { class: "value--previous" }, formatCount(report.last_year?.children)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.adr ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.adr)), report.last_year?.adr > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "ir-text-end" }, h("div", { class: "cell-stack" }, h("p", { class: report.last_year?.rooms_revenue ? 'value--primary' : '' }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), report.last_year?.rooms_revenue > 0 && h("p", { class: "value--previous" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: "cell-stack" }, h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, mainPercentage), h("wa-progress-bar", { class: "occ-bar", value: parseFloat(report.occupancy_percent.toString()) })), report.last_year?.occupancy_percent > 0 && (h("div", { class: "occ-row" }, h("span", { class: "occ-label" }, secondaryPercentage), h("wa-progress-bar", { class: "occ-bar occ-bar--previous", value: parseFloat(report.last_year?.occupancy_percent?.toString()) })))))));
        })), h("tfoot", { key: 'cc8246fdf5e81934a97d8a22631bac68edd30496' }, h("tr", { key: '2bf41a3e4ab099091c1b71f4d2c9ce7d979b730e' }, h("td", { key: 'd8d92de934a30958464e75822d2d95043d85d6ea', colSpan: 6 }), h("td", { key: '611b8d6581c8dc2dbca0a22b9d8c7c8b1b9dc291', class: "legend-cell" }, h("div", { key: 'eaa847eb4e383c78cd4ddecd97ed41b22b2f956e', class: "legend-row" }, h("div", { key: '7fe1af8ff5bbee6aa35b19abfc91f4b843dba545', class: "legend-item" }, h("div", { key: 'd712b99bb047751a59e78e477f77d5fa10a96039', class: "legend-dot legend-dot--current" }), h("p", { key: 'd0fbfbbae7ad96fa6dbff815faba0afc926315ad' }, t('Lcz_SelectedPeriod', { fallback: 'Selected period' }))), h("div", { key: '1c2926bbd35c5d0ecc20aec10fcfdd7b33af4722', class: "legend-item" }, h("div", { key: '35115498d0d224e2db7706e00ad1f5b846d85009', class: "legend-dot legend-dot--previous" }), h("p", { key: 'd38395b041b48c162231bb1b7dc1060c580f8867' }, t('Lcz_PreviousYear', { fallback: 'Previous year' })))))))))));
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
