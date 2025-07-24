import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-progress-indicator2.js';

const irMonthlyBookingsReportTableCss = ".sc-ir-monthly-bookings-report-table-h{display:block}.future-report.sc-ir-monthly-bookings-report-table td.sc-ir-monthly-bookings-report-table{background-color:hsla(210, 16%, 85.2%, 0.25) !important}.legend.sc-ir-monthly-bookings-report-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-monthly-bookings-report-table{background:#6692b3}";
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
        var _a, _b;
        const totalUnits = (_b = (_a = this.reports) === null || _a === void 0 ? void 0 : _a.reduce((prev, curr) => prev + curr.units_booked, 0)) !== null && _b !== void 0 ? _b : 0;
        return (h(Host, { key: '1fa0939ed14a6fae86bd1384df2b318aabb89537', class: 'card p-1  table-container table-responsive' }, h("table", { key: '7ee64eb9730d006c2751c72d6eab1f1c035e397b', class: "table" }, h("thead", { key: 'f30fbcac46cb30e5b41d1ad560e0a36e999ffeed', class: "table-header" }, h("tr", { key: '29b85e93422dbe45a879f6745ef84c3060ff2526' }, h("th", { key: '1065746571ee8ffaa7f42066d41a809ef926318e', class: "text-center" }, "Date"), h("th", { key: '4a8eb9370d537aae6b50cdde48d18a103e393d15', class: "text-center" }, "Units booked"), h("th", { key: '8bbfed807dc8b31e778f10bab12884727ffc1a7e' }, "Occupancy"))), h("tbody", { key: '4699df31d7251654e4a9a9304bf953922857d962' }, this.reports.map(report => {
            var _a, _b, _c, _d;
            const mainPercentage = `${parseFloat(report.occupancy_percent.toString()).toFixed(2)}%`;
            const secondaryPercentage = report.last_year ? `${parseFloat(report.last_year.occupancy_percent.toString()).toFixed(2)}%` : null;
            const reportDate = hooks(report.day, 'YYYY-MM-DD');
            const isFutureDate = hooks().isBefore(reportDate, 'dates');
            return (h("tr", { key: report.day, class: `ir-table-row ${isFutureDate ? 'future-report' : ''}` }, h("td", { class: 'text-center' }, reportDate.format('D')), h("td", { class: "text-center" }, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("p", { class: `p-0 m-0 ${((_a = report.last_year) === null || _a === void 0 ? void 0 : _a.units_booked) ? 'font-weight-bold' : ''}` }, report.units_booked), ((_b = report.last_year) === null || _b === void 0 ? void 0 : _b.units_booked) && h("p", { class: "p-0 m-0" }, (_c = report.last_year) === null || _c === void 0 ? void 0 : _c.units_booked))), h("td", null, h("div", { class: 'd-flex flex-column', style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_d = report.last_year) === null || _d === void 0 ? void 0 : _d.occupancy_percent) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '49767449cbf48dd3e1f8ea06c2e0e3e026665f79' }, h("tr", { key: 'a1044fbb33a8d5566294918affc539cce18fe1be' }, h("td", { key: 'f29127aa1f8519940b3565173282162d0d9ff7af' }), h("td", { key: '433185d3f179c351b5ded967f2d445fd5100d9e6' }, ' ', h("b", { key: 'd1fea61119eb36689851786e160209cd97a50c51', style: { whiteSpace: 'nowrap' } }, "Total: ", totalUnits)), h("td", { key: '7cd05868648559b16244903f4cdf9fc72fa091a8', colSpan: 1, class: "text-right", style: { whiteSpace: 'nowrap' } }, h("div", { key: '434da9450c10a832d025bd2a524a48f2de557e13', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '07e9739b5560e70dff64ceea7cbf53ddc9428ff7', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '798cd0884d41f321d62ca5795c35ac85868ef126', class: "legend bg-primary" }), h("p", { key: 'e1636355f602ae32b889b14cb671d713b28693d0', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'ce37fd8a3060fccf82cd37693f3eb83ec73133da', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'cee005c86bf22a283d9adfff0790156d292f8acd', class: "legend secondary" }), h("p", { key: '9c26ef2912eb6063019e6fdaae08c535dc2a811f', class: "p-0 m-0" }, "Previous year")))))))));
    }
    static get style() { return IrMonthlyBookingsReportTableStyle0 + IrMonthlyBookingsReportTableStyle1; }
}, [2, "ir-monthly-bookings-report-table", {
        "reports": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-monthly-bookings-report-table", "ir-progress-indicator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-monthly-bookings-report-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMonthlyBookingsReportTable);
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrMonthlyBookingsReportTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-monthly-bookings-report-table2.js.map