import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const irSalesTableCss = ".sc-ir-sales-table-h{display:block;width:100%}.legend.sc-ir-sales-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-table{background:#6692b3}.channel-cell.sc-ir-sales-table{width:100%}.task-row.sc-ir-sales-table,.table.sc-ir-sales-table th.sc-ir-sales-table,.table.sc-ir-sales-table td.sc-ir-sales-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}";
const IrSalesTableStyle0 = irSalesTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-table td.sc-ir-sales-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap;width:max-content;max-width:max-content}.ir-table-row.sc-ir-sales-table td.sc-ir-sales-table:last-child{width:100%}.table.sc-ir-sales-table td.sc-ir-sales-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-table thead.sc-ir-sales-table th.sc-ir-sales-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-table td.sc-ir-sales-table{background:#e3f3fa !important}.selected.sc-ir-sales-table td.sc-ir-sales-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table{text-transform:capitalize;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.sortable.sc-ir-sales-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-table svg.sc-ir-sales-table{color:var(--blue)}";
const IrSalesTableStyle1 = tableCss;

const sampleSalesData = [
    {
        id: '1',
        country: 'United States',
        nights: 120,
        percentage: 65.5,
        last_year_percentage: 60.2,
    },
    {
        id: '2',
        country: 'United Kingdom',
        nights: 90,
        percentage: 55.3,
        last_year_percentage: 50.1,
    },
    {
        id: '3',
        country: 'Germany',
        nights: 75,
        percentage: 48.7,
        last_year_percentage: 45.0,
    },
    {
        id: '4',
        country: 'France',
        nights: 60,
        percentage: 42.9,
        last_year_percentage: 39.5,
    },
    {
        id: '5',
        country: 'Australia',
        nights: 30,
        percentage: 21.0,
        last_year_percentage: 19.0,
    },
];
const IrSalesTable = /*@__PURE__*/ proxyCustomElement(class IrSalesTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.records = sampleSalesData;
    }
    render() {
        return (h("div", { key: '1d6c5ee57fff0efcdbbcbee84c6f3d4a9213ce7c', class: "table-container h-100 p-1 m-0 table-responsive" }, h("table", { key: '4fbca8ce67e80200ba3698f12d3766a07e765115', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '72175fc2e753f099d0c3ec23d9844466e1c7c708', class: "table-header" }, h("tr", { key: '38a7870beae6984e33270f3319a2b54a6ec864ff' }, h("th", { key: '276a2930af87caf8fe4c2a578f3d42d9f20cc37e', class: "text-left" }, "Country"), h("th", { key: 'd31f4444ad45c3993f9b5f624752acda783b8560', class: "" }, "Room nights"), h("th", { key: 'f9cc8a77d4c2c8f30e3824e2f7921013b95571c8', class: "" }))), h("tbody", { key: '34965a68deb120173ed726c67ee8e96af3a2d7da' }, this.records.length === 0 && (h("tr", { key: 'd5ce079a12a8bef6f8c600fc9c760c9c0ea508ba' }, h("td", { key: '881af8cb3d94b8b7a1361a755e1938f22b211d16', colSpan: 4, style: { height: '300px' } }, "No data found."))), this.records.map(record => {
            const mainPercentage = `${parseFloat(Math.ceil(record.percentage).toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year_percentage ? `${parseFloat(Math.ceil(record.last_year_percentage).toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true }, key: record.id }, h("td", { class: "text-left" }, record.country), h("td", null, record.nights), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, mainPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress bg-primary mb-0", style: { width: mainPercentage } }))), record.last_year_percentage && (h("div", { class: "progress-main" }, h("span", { class: "progress-totle" }, secondaryPercentage), h("div", { class: "progress-line" }, h("div", { class: "progress secondary mb-0", style: { width: secondaryPercentage } }))))))));
        })), h("tfoot", { key: '1a30ce6cf24c8bb3e0c6a2272a15c40f1414a553' }, h("tr", { key: '89b24fbe5aab5e9eb2db0d758a3072e3a5e4c085', style: { fontSize: '12px' } }, h("td", { key: '2b508b104e3f37a9c3cc48a1e8f343bb1b230a9f', colSpan: 2 }), h("td", { key: '9465074188c0afb7a090a24bb312c54150ff6d65', style: { width: '250px' } }, h("div", { key: '51bcf2def6249dcf9bd95ae5a9aea2d813b1f289', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem' } }, h("div", { key: '305a3e3a00b1ae60907e80f652b69473904b80a6', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '8bb7ad3d8713a589951c01d95d07ed0aea6e2cba', class: "legend bg-primary" }), h("p", { key: 'db8e19f4eb1e190f6eb26d1e6b919487afb5077b', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '7ae1dd4e6ffc2ab07fc611936c9aa26ec6d75a8c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '53a5b979d44604630ea13a8c87ed7a76a6964421', class: "legend secondary" }), h("p", { key: 'd00749f3c97a719449753885b637b0f568f7a941', class: "p-0 m-0" }, "Previous year")))))))));
    }
    static get style() { return IrSalesTableStyle0 + IrSalesTableStyle1; }
}, [2, "ir-sales-table", {
        "records": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-table"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesTable);
            }
            break;
    } });
}

export { IrSalesTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-sales-table2.js.map