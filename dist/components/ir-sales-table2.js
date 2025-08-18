import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-progress-indicator2.js';

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
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
        return (h("div", { key: '4b68d58de73e0721b3233e6cfab86e1008d78b75', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '686064d2b4ef76447faafb47cf85d9b9f0363108', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'bd34b33e1a0310748e8c371b29746eb939e3466c', class: "table-header" }, h("tr", { key: 'f2dc615dd50965ad96f822e08d012d402317c000' }, h("th", { key: '1fca0adc19a1293cdd6e9e6c05e4594bbb0f7807', class: "text-left" }, "Country"), h("th", { key: '951ce0e1acae35d8982af56e2ae375b756545931', class: "text-center" }, "Room nights"), h("th", { key: '072583ac11142d263955333e6d1520bf7a1309bf', class: "text-center" }, "No of guests"), h("th", { key: '94b67fe5d503a396041e92c403d63826f06b308d', class: "text-right" }, "Revenue"), h("th", { key: '8c296513ced4c02b2b3500d66813c3226c3f16af', class: "" }))), h("tbody", { key: '6f1cd4100772cbb9fd881e2e0b903fec5f0b88e9' }, this.records.length === 0 && (h("tr", { key: '2967b8ecec83e618cc2fb31b9d8a816c4c369311' }, h("td", { key: '8bf153b3bf69304fa457b17572fae5afa6afd742', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, (mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.flag) && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, (_a = mappedCountry === null || mappedCountry === void 0 ? void 0 : mappedCountry.name) !== null && _a !== void 0 ? _a : record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.nights) ? 'font-weight-bold' : ''}` }, record.nights), ((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.nights) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.number_of_guests) ? 'font-weight-bold' : ''}` }, record.number_of_guests), ((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.number_of_guests) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.revenue) ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.revenue) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_h = record.last_year) === null || _h === void 0 ? void 0 : _h.percentage) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '4dc5be83f57ebd83c53763614020cdaaf7943665' }, h("tr", { key: '72d62fd2edd4662d67a7545224834ee60044086e', style: { fontSize: '12px' } }, h("td", { key: 'e46fcf47dfad503ca9bfe9592d4c0654e6858771', colSpan: 4 }), h("td", { key: '3a74b04b5bddbbe07e48cd7e5e7c8cb1d76d61ca', style: { width: '250px' } }, h("div", { key: '1f593f19edba15264b3ac64007da11504a621223', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'c357547506a15e015f57e9c149bbff3ca4ba8002', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '74f3e889572be9dd25b732f65c491707f2d0e229', class: "legend bg-primary" }), h("p", { key: 'd987ade0d6ab4403761439da52d1f04cbbe91aaf', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'dc5ab037d03a70e211ad38f5d5accbfee01b1bc4', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '76b104471fe26639b9dab978691ea6a9c144b623', class: "legend secondary" }), h("p", { key: 'c07ec25bda499280e039de44b379486fcdf6cf14', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: 'c3dad66cda72c520b75afaeb494df8c854324ba1', class: 'd-flex mx-auto' }, h("ir-button", { key: 'ba894bd9e785c964f35e48b3fe715f02c5c42e6a', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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