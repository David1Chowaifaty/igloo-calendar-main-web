import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-progress-indicator2.js';

const irSalesByChannelTableCss = ".sc-ir-sales-by-channel-table-h{display:block;width:100%}.legend.sc-ir-sales-by-channel-table{height:12px;aspect-ratio:1;background:#000;border-radius:4px}.secondary.sc-ir-sales-by-channel-table{background:#6692b3}.channel-cell.sc-ir-sales-by-channel-table{width:100%}.task-row.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table,.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{white-space:nowrap;max-width:max-content !important;padding:0.25rem 1rem !important}.outer-container.sc-ir-sales-by-channel-table{padding:1rem;box-sizing:border-box}.table.sc-ir-sales-by-channel-table tfoot.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-bottom:0}.flag.sc-ir-sales-by-channel-table{height:16px;width:23px;border-radius:3px}";
const IrSalesByChannelTableStyle0 = irSalesByChannelTableCss;

const tableCss = ".ir-table-row.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-sales-by-channel-table thead.sc-ir-sales-by-channel-table th.sc-ir-sales-by-channel-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{background:#e3f3fa !important}.selected.sc-ir-sales-by-channel-table td.sc-ir-sales-by-channel-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table,.ir-table-row.sc-ir-sales-by-channel-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-sales-by-channel-table{text-transform:capitalize}.sortable.sc-ir-sales-by-channel-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-sales-by-channel-table:hover td.sc-ir-sales-by-channel-table{background:#e2e6ea3f !important}.sortable.sc-ir-sales-by-channel-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-sales-by-channel-table svg.sc-ir-sales-by-channel-table{color:var(--blue)}";
const IrSalesByChannelTableStyle1 = tableCss;

const IrSalesByChannelTable = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannelTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.visibleCount = 10;
        this.properties = new Map();
        this.handleLoadMore = () => {
            this.visibleCount = Math.min(this.visibleCount + 10, this.records.length);
        };
    }
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
    render() {
        const visibleRecords = this.records.slice(0, this.visibleCount);
        const haveMultipleProperties = this.allowedProperties.length > 1;
        return (h("div", { key: '46aef23542658a0cf44b595e8f687667c3476231', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'edd821501afad683a1af48ec248c2f084b261175', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '20c9148a9e7544d17078ecc90622bb08d2be6bb5', class: "table-header" }, h("tr", { key: '3947f64bf5786f6d92023443c954c4646e5e7815' }, haveMultipleProperties && h("th", { key: 'd57ac18919e1d21fd462f5880d4da53f66fcdef5', class: "text-center" }, "Property"), h("th", { key: '8ba0b1dfd5d3c28a9436323d3bb767185db3e3bc', class: "text-center" }, "Channel"), h("th", { key: '0c2f93741932d008e27dd67f05aba13f57b2ffd3', class: "text-center" }, "Room nights"), h("th", { key: '9cbe2e6327f6a48b1728cf88bf53071cff7e2d60', class: "text-right" }, "Room Revenue"), h("th", { key: '987e440d17acf051e3b3af86250a1e4a5bbc30a9', class: "" }))), h("tbody", { key: 'afc86014ddae0ae9ff55d529b5e8796e80d4e3c0' }, this.records.length === 0 && (h("tr", { key: '451994014ec5d7ceb65ba1a14a5018ec1e8b658a' }, h("td", { key: 'a2012945104f48ce014e6ff3aa6b063b56402277', colSpan: 5, style: { height: '300px' } }, "No data found."))), visibleRecords.map(record => {
            var _a, _b, _c, _d, _e, _f, _g;
            const mainPercentage = `${parseFloat(record.PCT.toString()).toFixed(2)}%`;
            const secondaryPercentage = record.last_year ? `${parseFloat(record.last_year.REVENUE.toString()).toFixed(2)}%` : null;
            return (h("tr", { "data-testid": `record_row`, class: { 'task-table-row ir-table-row': true } }, haveMultipleProperties && h("td", { class: "text-center" }, record.PROPERTY_NAME), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_a = record.last_year) === null || _a === void 0 ? void 0 : _a.SOURCE) ? 'font-weight-bold' : ''}` }, record.SOURCE), ((_b = record.last_year) === null || _b === void 0 ? void 0 : _b.SOURCE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.SOURCE)))), h("td", { class: "text-center" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_c = record.last_year) === null || _c === void 0 ? void 0 : _c.NIGHTS) ? 'font-weight-bold' : ''}` }, record.NIGHTS), ((_d = record.last_year) === null || _d === void 0 ? void 0 : _d.NIGHTS) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, record.last_year.NIGHTS)))), h("td", { class: "text-right" }, h("div", { class: "d-flex flex-column", style: { gap: '0.25rem' } }, h("p", { class: `p-0 m-0 ${((_e = record.last_year) === null || _e === void 0 ? void 0 : _e.REVENUE) ? 'font-weight-bold' : ''}` }, formatAmount(record.currency.symbol, record.REVENUE)), ((_f = record.last_year) === null || _f === void 0 ? void 0 : _f.REVENUE) && (h("p", { class: "p-0 mx-0", style: { marginTop: '0.25rem', marginBottom: '0' } }, formatAmount(record.currency.symbol, record.last_year.REVENUE))))), h("td", null, h("div", { class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("ir-progress-indicator", { percentage: mainPercentage }), ((_g = record.last_year) === null || _g === void 0 ? void 0 : _g.PCT) && h("ir-progress-indicator", { percentage: secondaryPercentage, color: "secondary" })))));
        })), h("tfoot", { key: '3ae6923ad8c450a53c08425529c9e63942055f37' }, h("tr", { key: '1449d74bfa714a64c9c9c96b8c5fe8c9fceb7e42', style: { fontSize: '12px' } }, h("td", { key: '55bf64ca0027599b99255b77c322b281e6b37f24', colSpan: haveMultipleProperties ? 5 : 4 }, h("div", { key: '21d3e8520180d4900569240baceb018811c164ac', class: 'd-flex align-items-center justify-content-end', style: { gap: '1rem', paddingTop: '0.5rem' } }, h("div", { key: 'ca9c0f24f7dce50e141a884c9c4a014d64c537bb', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '18c4cab6123f8b77e9600ebef8322ee4c6d775ad', class: "legend bg-primary" }), h("p", { key: 'ef11f408c0c780300d30217fdb93eae38cac1b87', class: "p-0 m-0" }, "Selected period ")), h("div", { key: 'c4865d7ee1a0f47bc11b9f3a94968605a66b500c', class: "d-flex align-items-center", style: { gap: '0.5rem' } }, h("div", { key: '1cfb7f7475e18cb22383b3a93ab9008ff7c3b5db', class: "legend secondary" }), h("p", { key: 'e408465ffa81483cc05f6342ad704d19e3de0988', class: "p-0 m-0" }, "Previous year"))))))), this.visibleCount < this.records.length && (h("div", { key: '437d5b4537dabae99d0e91ac064801c84b689dcf', class: 'd-flex mx-auto' }, h("ir-button", { key: 'ce05d8ad345dc2b4884be4691a560896dec42ce0', class: "mx-auto", size: "sm", text: "Load More", onClickHandler: this.handleLoadMore })))));
    }
    static get watchers() { return {
        "allowedProperties": ["handlePropertiesChange"]
    }; }
    static get style() { return IrSalesByChannelTableStyle0 + IrSalesByChannelTableStyle1; }
}, [2, "ir-sales-by-channel-table", {
        "records": [16],
        "allowedProperties": [16],
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