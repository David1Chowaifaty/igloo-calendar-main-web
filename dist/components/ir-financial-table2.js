import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid #e3ebf3;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;color:#374151;padding:0.5rem 1rem !important;text-align:left}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = /*@__PURE__*/ proxyCustomElement(class IrFinancialTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    render() {
        return (h("div", { key: '13fd99b157e27662b634580231844b69eac8ce91', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '9f36a2831a032b3032ac2960ecad66b08a046aed', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '994326f594f94a1087a52886c345215543ca664e', class: "table-header" }, h("tr", { key: '2d10126156ed8e96f2f5d7ea5bc474ed571bcd31' }, h("th", { key: 'b8cc90edd211b590347eece5e9dfe27e1c20f38c', class: "text-center" }, "Date"), h("th", { key: 'd54bef2aa998981a4251a3ab4dac8dfe7d6bee1e', class: "text-center" }, "Booking"), h("th", { key: '28363a37e84f59f21bd9b5be73d6ba3932c9f318', class: "text-center" }, "By direct"), h("th", { key: '71bc48070b0e4a8d13fba6db4b2573e53106058f', class: "text-right" }, "Amount"), h("th", { key: '2213433e4b8d9b58c4d7b08a6135fd43030e82a0', class: "text-center" }))), h("tbody", { key: 'e14fc72b9b2699ce18dd601690ada35bf327ace7' }, h("tr", { key: '77e398febb669dc9862952231f7e11ef3338c832', class: "ir-table-row" }, h("td", { key: '78b5a65b3c594f691789c3960b458e906c7547c7', class: "text-center" }, "1"), h("td", { key: '1f78ed672d8aca8b2d534d6a4ee23814f591a9ea', class: "text-center" }, h("ir-button", { key: '7fcc02aa75a89b88b5d3f3a1467fdeb79c1e3a33', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '097d3495d1ac8e5deef1666946e73af172d07930', class: "text-center" }, "1"), h("td", { key: 'dd925c129b7583c34f07616cca08ba7cbf144116', class: "text-right" }, "1"), h("td", { key: '5f97d5116d2f5880a86af4f6bbcc84c063c67dd0' }, h("ir-button", { key: '58007dc8d3b070bb587b5c3db8a26aae2fc90a20', size: "sm", text: "Pay", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'payment',
                    payload: {
                        payment: {
                            id: -1,
                            date: hooks().format('YYYY-MM-DD'),
                            amount: 120,
                            currency: calendar_data.currency,
                            designation: '',
                            reference: '',
                        },
                        bookingNumber: 31203720277,
                    },
                });
            } })))))));
    }
    static get style() { return IrFinancialTableStyle0 + IrFinancialTableStyle1; }
}, [2, "ir-financial-table"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-financial-table", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-financial-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFinancialTable);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrFinancialTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-financial-table2.js.map