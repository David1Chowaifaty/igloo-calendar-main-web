import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-progress-indicator2.js';

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-table tfoot.sc-ir-sales-table td.sc-ir-sales-table{border-bottom:0}.flag.sc-ir-sales-table{height:16px;width:23px;border-radius:3px}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".sc-ir-sales-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-table{overflow-x:auto}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table tbody.sc-ir-sales-table tr.sc-ir-sales-table:last-child>td.sc-ir-sales-table{border-bottom:0 !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-table .empty-row.sc-ir-sales-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table,.ir-table-row.sc-ir-sales-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sortable.sc-ir-sales-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-sales-table:hover td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-table:active td.sc-ir-sales-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-sales-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-sales-table,.data-table.sc-ir-sales-table{height:100%}";
const IrSalesTableStyle1 = tableCss;

const IrSalesTable = /*@__PURE__*/ proxyCustomElement(class IrSalesTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    records = [];
    mappedCountries;
    visibleCount = 10;
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        return (h("div", { key: '2645f53f8813fb22529b82d81e016f4ad34b7480', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '574cf113dbee92c1c43c898a6adaf9c53ef826ee', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'e120ea835c5e09d3251527200f0bd5503a308eb8', class: "table-header" }, h("tr", { key: '6ab21336dcd24392317413ae11ac891418f01141' }, h("th", { key: '4cd3a5918dd7102e5828ceb1d243ef71ed09887c', class: "text-left" }, "Country"), h("th", { key: '4226c3c8ddd1200292ec33bbde5aac6fabc136ab', class: "text-center" }, "Room nights"), h("th", { key: 'b8c604996d6ac43ff30743863ddc6bd35439f8dd', class: "text-center" }, "No of guests"), h("th", { key: 'c4f2ec4531da5cad8701b060b7c0a02b2f10d5a8', class: "text-right" }, "Revenue"), h("th", { key: '0afa319d29cd48b51d925bdd4911bdfff85ff6f6', class: "" }))), h("tbody", { key: '72f2df35d0afa776d6102b9c718346beab634d0a' }, this.records.length === 0 && (h("tr", { key: '308a769d062dd3f608cee7f2739b440f44fb3a99' }, h("td", { key: 'e6f4e027af5d272afd7139dafb4870a3cb2c05a0', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.percentage.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.percentage.toString()).toFixed(2)}%` : null;
            const mappedCountry = this.mappedCountries.get(record.country_id);
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, mappedCountry?.flag && h("img", { class: "flag", alt: mappedCountry.name, src: mappedCountry.flag }), h("span", null, mappedCountry?.name ?? record.country))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.nights ? 'font-weight-bold' : ''}` }, record.nights), record.last_year?.nights && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.nights)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.number_of_guests ? 'font-weight-bold' : ''}` }, record.number_of_guests), record.last_year?.number_of_guests && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.number_of_guests)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.revenue ? 'font-weight-bold' : ''}` }, formatAmount(calendar_data.currency.symbol, record.revenue)), record.last_year?.revenue && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(calendar_data.currency.symbol, record.last_year.revenue))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.percentage && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: 'a0bb84013ef5602d887995bfaae4d2b623d31826' }, h("tr", { key: '9b5325ede0d550a2cd8d6b0eb2bd81de33f72e7a', style: { fontSize: '12px' } }, h("td", { key: 'f615f34cdc3a3d7be1570d08893719632dfe240a', colSpan: 4 }), h("td", { key: '7750aec108921a91d25331d7962381478b4959c0', style: { width: '250px' } }, h("div", { key: '39273bd6fb15738e5bc0585ba97ba5101da99f4d', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '45587b8cf023760e5648736dd18f5089a4ca8417', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '95f4d5a915012261e56c3492b4cb5162148b074e', class: "legend bg-primary" }), h("p", { key: '536955c318b18c65fc70e5069a45309c96d51382', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '89bc11af3daaa84f6d655484281ae4852153eff6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: 'e8435e8755a368d906ff1fd68d955c5274cfcdfc', class: "legend secondary" }), h("p", { key: 'a3f564717a0f6ea6e2d3ff2e9db0c073c66f0605', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '52f291ec9046637a1aa6bbb6ede12bed34f7375d', class: 'd-flex mx-auto' }, h("ir-button", { key: '766ff9821961f87838725951af78585ecaa0a141', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
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