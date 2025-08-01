import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-progress-indicator2.js';
import { d as defineCustomElement$1 } from './ir-tooltip2.js';

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}.progress-main.sc-ir-monthly-bookings-report-table{width:450px !important}";
const IrMonthlyBookingsReportTableStyle0 = irMonthlyBookingsReportTableCss;

const tableCss = ".ir-table-row.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-monthly-bookings-report-table thead.sc-ir-monthly-bookings-report-table th.sc-ir-monthly-bookings-report-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background:#e3f3fa !important}.selected.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table,.ir-table-row.sc-ir-monthly-bookings-report-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-monthly-bookings-report-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-monthly-bookings-report-table:hover td.sc-ir-monthly-bookings-report-table{background:#e2e6ea3f !important}.sortable.sc-ir-monthly-bookings-report-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-monthly-bookings-report-table svg.sc-ir-monthly-bookings-report-table{color:var(--blue)}";
const IrMonthlyBookingsReportTableStyle1 = tableCss;

const IrMonthlyBookingsReportTable = /*@__PURE__*/ proxyCustomElement(class IrMonthlyBookingsReportTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.reports = [];
    }
    render() {
        // const totalUnits = this.reports?.reduce((prev, curr) => prev + curr.units_booked, 0) ?? 0;
        return (h(Host, { key: 'f081610ed8fbfb1d61c65f337d2e03479bfd7ac2', class: 'card p-1  table-container table-responsive' }, h("table", { key: '494324d553bfb5f0383018d1b796362c7a2e140e', class: "table" }, h("thead", { key: '1f5e9fbf2e9e506f7c98b33e1f9b2076d47b16f1', class: "table-header" }, h("tr", { key: '840d809df627ea7291bbc44e0f793d26f7b6d89f' }, h("th", { key: '329046fa82fe3c8dc18733e4d1fa4df5b8d31c17', class: "text-center" }, "Date"), h("th", { key: '53b2209aada7b0dbbdcb9dc28e22e74ec17dfed5', class: "text-center" }, "Units booked"), h("th", { key: 'b007547d4b2046fe25e45bf24a2e81c26fef81dd', class: "text-center" }, "Total guests"), h("th", { key: '118398d61935ec06cc05293d043796e604520627', class: "text-right" }, h("ir-tooltip", { key: '2eec77e2bcc3ffb92cef20ded830460e30c4e211', customSlot: true, message: "Average Daily Rate", alignment: "end" }, h("span", { key: '757f4f5a5ec287e6f40d9372c85b441d5c022ca8', slot: "tooltip-trigger" }, "ADR"))), h("th", { key: 'f1590ce98ae03431d27750e914cb8cc973e9e943', class: "text-right" }, "Rooms revenue"), h("th", { key: '1a5941d0ac844b66d8c2dd5698e3e708cacde18f', class: "" }, "Occupancy"))), h("tbody", { key: '47bb8a4ff3963b777ec41678b5eee58082074402' }, this.reports.length === 0 && (h("tr", { key: '3b5e30d0d98e3b0321668be79b913e088eb901b7' }, h("td", { key: '126903b18d376c0449a44bcefcdf72dca634f8c0', colSpan: 3, class: 'text-center', style: { height: '30vh' } }, "No data found"))), this.reports.map(report => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) > 0 && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.total_guests) ? 'font-weight-bold' : ''}` }, report.total_guests), ((_e = report.last_year) === null || _e === void 0 ? void 0 : _e.total_guests) > 0 && h("p", { class: "p-0 m-0" }, (_f = report.last_year) === null || _f === void 0 ? void 0 : _f.total_guests))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_g = report.last_year) === null || _g === void 0 ? void 0 : _g.adr) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.adr)), ((_h = report.last_year) === null || _h === void 0 ? void 0 : _h.adr) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.adr)))), h("td", { class: "text-right" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_j = report.last_year) === null || _j === void 0 ? void 0 : _j.rooms_revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, report.rooms_revenue)), ((_k = report.last_year) === null || _k === void 0 ? void 0 : _k.rooms_revenue) > 0 && h("p", { class: "p-0 m-0" }, formatAmount(calendar_data.currency.symbol, report.last_year.rooms_revenue)))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_l = report.last_year) === null || _l === void 0 ? void 0 : _l.occupancy_percent) > 0 && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '4d7e275817aa6ccf10ce45b7ddcfa574d824893b' }, h("tr", { key: '46730c7f0911b7fe9c9f217e11316ef3d7e77900' }, h("td", { key: 'eb5a5d8d8412b16b270c8f4571cc31d375318834', colSpan: 5 }), h("td", { key: '0fd007813a0a8c41096c0ad68a87e448e5a1111b', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '9a98fdf2cd9e148cbabf6863d769dbb0c55beb2b', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '7db8dde2e9e544ea328e5862e30fff87c36d8acf', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '547221feccb83dfd1dc7c7315b7bfda8c96d52e8', class: "legend bg-primary" }), h("p", { key: '1d0f78807b4f884f649b8ab5ff6eac5793e4d388', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c7776ff5ab89dbe9ee6ae2191a7775a8cea5a70d', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '2c9d87a45c3ac512eb266fb57188a1a0e63efb7f', class: "legend secondary" }), h("p", { key: '8c40670e9bfc40046408bd0cc247df1658ce3076', class: "p-0 m-0" }, "Previous year")))))))));
    }
    static get style() { return IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1; }
}, [2, "ir-monthly-bookings-report-table", {
        "reports": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-monthly-bookings-report-table", "ir-progress-indicator", "ir-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-monthly-bookings-report-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMonthlyBookingsReportTable);
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMonthlyBookingsReportTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-monthly-bookings-report-table2.js.map