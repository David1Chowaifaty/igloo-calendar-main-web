import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-progress-indicator2.js';

const irSalesByChannelTableCss = ".sc-ir-sales-by-channel-table-h{display:block;width:100%}.legend.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-by-channel-table{background:#6692b3}.channel-cell.sc-ir-sales-by-channel-table{width:100%}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.sales-by-channel-table__progress-col.sc-ir-sales-by-channel-table{width:50%}.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:none !important}@media (min-width: 768px){.sales-by-channel-table__progress-col.single.sc-ir-sales-by-channel-table{display:table-cell !important}}.outer-container.sc-ir-sales-by-channel-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}.flag.sc-ir-sales-by-channel-table{height:16px;width:23px;border-radius:3px}";
const IrSalesByChannelTableStyle0 = irSalesByChannelTableCss;

const tableCss = ".sc-ir-sales-by-channel-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-sales-by-channel-table{overflow-x:auto}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table tbody.sc-ir-sales-by-channel-table tr.sc-ir-sales-by-channel-table:last-child>td.sc-ir-sales-by-channel-table{border-bottom:0 !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-sales-by-channel-table .empty-row.sc-ir-sales-by-channel-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-sales-by-channel-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sortable.sc-ir-sales-by-channel-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-sales-by-channel-table:active td.sc-ir-sales-by-channel-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-sales-by-channel-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-sales-by-channel-table,.data-table.sc-ir-sales-by-channel-table{height:100%}";
const IrSalesByChannelTableStyle1 = tableCss;

const IrSalesByChannelTable = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannelTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    records;
    allowedProperties;
    mode;
    visibleCount = 10;
    properties = new Map();
    componentWillLoad() {
        this.setupProperties();
    }
    handlePropertiesChange() {
        this.setupProperties();
    }
    setupProperties() {
        const map = new Map();
        for (const property of this.allowedProperties) {
            map.set(property.id, property.name);
        }
        this.properties = new Map(map);
    }
    handleLoadMore = () => {
        this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
    };
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const isSingleProperty = this.mode === 'property';
        return (h("div", { key: '829fafb4780ab8f0f060b1badf4af170c626479c', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '57a6515b46354e1e7d5a5264d34fbf7211307301', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '158c1d3d2a0d04cd8a954ac917f06c79508a2565', class: "table-header" }, h("tr", { key: '3e6e01458d76b5aa9a678a8a8663a578a41baded' }, h("th", { key: 'e366d7c58cc2b05e404cd10211e2ec13f89713d3', class: "text-left" }, "Channel"), h("th", { key: '23e9c222f64772fec6c7a5a03a33dcb74810147b', class: "text-center" }, "Room nights"), h("th", { key: '4f7e3ef5010a0b4cb51a70d8ca4c20a44a556e51', class: "text-right" }, "Room Revenue"), h("th", { key: '9a95cdf9e912246fdbc292d687dc1efeda9e74f5', class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }))), h("tbody", { key: '30c3f8db82b9d53456b9d6e6ddd4a987f8254596' }, this.records.length === 0 && (h("tr", { key: '8357e852259afba2a4fec356ab8f2dd15f17551f' }, h("td", { key: 'e0fa9f79e5a2f382d5c43a00b268529c7fca5002', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.PCT.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, h("td", { class: "text-left" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.SOURCE ? 'font-weight-bold' : ''}` }, record.SOURCE), record.last_year?.SOURCE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.NIGHTS ? 'font-weight-bold' : ''}` }, record.NIGHTS), record.last_year?.NIGHTS && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right " }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${record.last_year?.REVENUE ? 'font-weight-bold' : ''}` }, formatAmount(record.currency, record.REVENUE)), record.last_year?.REVENUE && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency, record.last_year.REVENUE))))), h("td", { class: `sales-by-channel-table__progress-col ${!isSingleProperty ? 'single' : ''}` }, isSingleProperty && (h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), record.last_year?.PCT && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" }))))));
        })), isSingleProperty && (h("tfoot", { key: '31f8e473f409f5dfbcadd5ac03cfffcc7072398c' }, h("tr", { key: 'd1f3b4d92fb7ee2a26de5b641f5fd56a1d828eed', style: { fontSize: '12px' } }, h("td", { key: '978ea759f62886a1756680a05a58146d5b3b7158', colSpan: 4 }, h("div", { key: '0cd29f0fc9efd1d3a5a472da39050e0c20cca9f1', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: '0cba56066a4260639578f9cf70eda8a3b84cd886', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '5117431cea37703a9530b6906ee47ed3751f2d19', class: "legend bg-primary" }), h("p", { key: 'd3556010656d0b9401f370ac656cb68687b8fa1e', class: "p-0 m-0" }, "Selected period ")), h("div", { key: '90ca26ef445d6c537072efc9a0030cb5cef62464', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '58c06dcb2cd4c4cc137781cb32297acad6553c53', class: "legend secondary" }), h("p", { key: '4c73eb81baf7b6360032955c931a5c7f5c402ec0', class: "p-0 m-0" }, "Previous year")))))))), this.visibleCount < this.records.length && (h("div", { key: '2c3476b4f54a6667e8852209e449ecd5264aa597', class: 'd-flex mx-auto' }, h("ir-button", { key: '68b4c0fdcfd0f98e77c2157990c301ba1b081413', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get watchers() { return {
        "allowedProperties": ["handlePropertiesChange"]
    }; }
    static get style() { return IrSalesByChannelTableStyle0 + IrSalesByChannelTableStyle1; }
}, [2, "ir-sales-by-channel-table", {
        "records": [16],
        "allowedProperties": [16],
        "mode": [1],
        "visibleCount": [32],
        "properties": [32]
    }, undefined, {
        "allowedProperties": ["handlePropertiesChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-by-channel-table", "ir-button", "ir-icons", "ir-progress-indicator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-by-channel-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesByChannelTable);
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

export { IrSalesByChannelTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-sales-by-channel-table2.js.map