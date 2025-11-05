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
        return (h("div", { key: 'c96a585731477f8d9d80d8a3ad6f195dc150fc42', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'a6a54571ebcc2943b5094b01084862a216f7edc7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '2296cfddd60e689323b09b4db3d69fe06c05f484', class: "table-header" }, h("tr", { key: '5f6a012adda62d340eb2f2728705a7c03b54ee4b' }, h("th", { key: '315e921630c11e448d4c888baf6cac27a349e9e0', class: "text-center" }, "Date"), h("th", { key: '48a72b1fe5a20a96dca4dd8565fb8a6ca990e30a', class: "text-center" }, "Booking"), h("th", { key: '76889cb97cac4b9d8be0b9d8c885e39300ad1417', class: "text-center" }, "By direct"), h("th", { key: '40ebe0cbe0e0299c780843e47e2aeaa9e236d01e', class: "text-right" }, "Amount"), h("th", { key: 'cc3bcf396140e83978ffc0eb8ea5f8faa10fe626', class: "text-center" }))), h("tbody", { key: '531f7ec7c3bb03a054340e9557f9180f0e687df2' }, h("tr", { key: '959537259ad10d3105817f4c7ec87f95455edeb4', class: "ir-table-row" }, h("td", { key: 'c8323151c906ed8f285fcadb7eabb603d3332db9', class: "text-center" }, "1"), h("td", { key: '82eb999963c1e261b7eeead51b7d9be7f152c51c', class: "text-center" }, h("ir-button", { key: '6f58afaaef4edaaaca8ed833fa6a93454033deaa', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '7a1ea5edfc3016797251b8d73cac6b16402be276', class: "text-center" }, "1"), h("td", { key: '9d27c61c21c90c555ce53d9a1e0e8145a5cbb8d4', class: "text-right" }, "1"), h("td", { key: 'b82b2b13bcfd4990d130cf8ba7a1dadc581d4e9a' }, h("ir-button", { key: 'a3c1488984e895f3dc20e818253a9be8ee399073', size: "sm", text: "Pay", onClickHandler: () => {
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