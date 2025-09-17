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
        return (h("div", { key: '7279954327f25704f43335b60ddc5352aad6f0d4', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'c70dcda091ed81efe64d0669c8f460129d2a9b3b', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '27cf7827495e93ec2c7943dc2e3dc6018e490508', class: "table-header" }, h("tr", { key: '047ebbe627c8e68358a7aacafb583e9df7f5814f' }, h("th", { key: '1eeb63031f06db8bf8d5e0a23573ed071cf7eb05', class: "text-center" }, "Date"), h("th", { key: '6750db269906518f18d37555850a0739c03c9d1e', class: "text-center" }, "Booking"), h("th", { key: '12799bcff598eb4cac0150f2505db35e6995a8e9', class: "text-center" }, "By direct"), h("th", { key: '4fd1dd0bd0a8d0c482f7d9783f01ee6669b6e9df', class: "text-right" }, "Amount"), h("th", { key: 'd8f7210dd4d92b0339ec489c3991c2f39c2a039f', class: "text-center" }))), h("tbody", { key: 'ed3417a2550fa756442ad5862d68e633098f3570' }, h("tr", { key: 'f116fbb64253fbd133f741226ca40383613a2ced', class: "ir-table-row" }, h("td", { key: '28a25466372e52f911069df7464d6f5ba5335cc8', class: "text-center" }, "1"), h("td", { key: '784a5a541384ead7c996f054dde65517f6315a7f', class: "text-center" }, h("ir-button", { key: 'a92819256bfd771974cab364ae856fed9a11e63c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b8b3facd676f13f755efe1db602ec40fa2c3632c', class: "text-center" }, "1"), h("td", { key: '08bb16b5e4a25e755eea9fcac355e0d621d68dee', class: "text-right" }, "1"), h("td", { key: '7b9e43f61e10fa288246432db4bc0a469c323297' }, h("ir-button", { key: '92d84ff8360748f2b15a9c0551b4e1545dafb570', size: "sm", text: "Pay", onClickHandler: () => {
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