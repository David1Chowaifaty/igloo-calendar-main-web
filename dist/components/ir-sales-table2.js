import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-progress-indicator2.js';

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.table-container.sc-ir-sales-table{overflow-y:auto;max-height:70vh;max-height:70dvh}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
const IrSalesTableStyle1 = tableCss;

const IrSalesTable = /*@__PURE__*/ proxyCustomElement(class IrSalesTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.records = [];
        this.visibleCount = 10;
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: '9bc67cfcb4a3177968d8e1cc8249b7ecd800065c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'eada5630c83ba5aed7200118456d99f56591b268', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '089bb8d31dfb27a7cc433166c9673c5bc9a34c85', class: "table-header" }, h("tr", { key: 'ebe4814507e1fb9be7f9ade9251eec5bb8bd2ead' }, h("th", { key: '8b8dd2a15501a3930f80f873efff6d899f46e2cd', class: "text-left" }, "Country"), h("th", { key: '7d13b42c1113847467551acd80aa27f46131f2c3', class: "text-center" }, "Room nights"), h("th", { key: 'a66bb1c52655d0c953109d026812ebdd09996fc6', class: "text-center" }, "No of guests"), h("th", { key: 'f289dcd1cdf1a8e286cccba9463034bb22f427ec', class: "text-right" }, "Revenue"), h("th", { key: '77e975d4ef9be0c2da2668265255beb86607e576', class: "" }))), h("tbody", { key: '02710a2a255d7178c03d4c4a5298f95f1c9a3a2f' }, this.records.length === 0 && (h("tr", { key: 'bfce54297d5cde25be99f15f56d9186b45545157' }, h("td", { key: '757e281913eb159721fa92cb1066cd462dff8a6b', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '7e6e9d5e7d82fc6a4a368d10dbed0dfc655b13b4' }, h("tr", { key: '0ee90e770ad26f8ec3c1ed1b40d37c04d48ecf32', style: { fontSize: '12px' } }, h("td", { key: '4a6880cbc55654dcdee191025f0f669ccf9a40f5', colSpan: 4 }), h("td", { key: '78c7a99f266a90f4691b340da72e5c68f10958b5', style: { width: '250px' } }, h("div", { key: '488d65f88c2f619b3eddd7fc52663c04f41e8ab7', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '5e155ea6cbce520df71685d1c1cc0f7c24e9df36', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'f41afdd44eec1bf624e0001b5022751d88dc8801', class: "legend bg-primary" }), h("p", { key: '90fa8563549e8f16497b593dfd9ff97cbe8f81c9', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'd218674931f1e5948665a3d72a15e2149e6bdc38', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '6646596b91d2390d44b3f20d4a48a30f447b8d7b', class: "legend secondary" }), h("p", { key: 'ef1bd84acdc5208a88bd72b412ba6ea8749c58ae', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'a46732a94d2ede6436c0cc8b3c54fdf4031bc975', class: 'd-flex mx-auto' }, h("ir-button", { key: '25cbbfad5226f1fee4db59eae77ab966935f4204', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get style() { return IrSalesTableStyle0 + IrSalesTableStyle1; }
}, [2, "ir-sales-table", {
        "records": [16],
        "mappedCountries": [16],
        "visibleCount": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-table", "ir-button", "ir-icons", "ir-progress-indicator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrSalesTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-sales-table2.js.map