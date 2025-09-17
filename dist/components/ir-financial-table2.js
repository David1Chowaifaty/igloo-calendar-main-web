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
        return (h("div", { key: '407afa82ed3122422cc7181cc12875dc49cbd181', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '05c5acbc6e8ddb2b93bd843bcc994966061a1392', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ccbbb486d171c2366b6fa1051ac7f0170f340b60', class: "table-header" }, h("tr", { key: 'c6a7697fdd9e9674ab10700cba565a8d079fbfd8' }, h("th", { key: '5289e505419a0b174b55a4dd99eabe6968f331ec', class: "text-center" }, "Date"), h("th", { key: '632e7c9f32c4d0ec22841a7c4fed7ef648efaa65', class: "text-center" }, "Booking"), h("th", { key: '71de05f829351c517e98c674e4075784f0694ed4', class: "text-center" }, "By direct"), h("th", { key: 'f720f2b2b2ca9b7c70ef6666b651a9890c2f99d4', class: "text-right" }, "Amount"), h("th", { key: '93a411ab0bda2b3c7533ca4efc192f3343502673', class: "text-center" }))), h("tbody", { key: '56d6cf833cfababcbdb26f4e465762b539687dec' }, h("tr", { key: '7cb2aedd87e1faf3b1bc421d7429210e81969d16', class: "ir-table-row" }, h("td", { key: '0c32b4f3bdcab2529116fa45208e7f52c98d9193', class: "text-center" }, "1"), h("td", { key: '049cc09beadf71588d5f906944c93017e9c58c34', class: "text-center" }, h("ir-button", { key: '43c29dda56ccabfb40befd0116258a9b7c43aaab', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'dc0720ff6b2f8dd58d36dc0b330e91bd121fe20c', class: "text-center" }, "1"), h("td", { key: '440088c5076bf7486f437d94ca796ed49218238e', class: "text-right" }, "1"), h("td", { key: '5be457308621314feb26c6c5b6f13fc98cc62438' }, h("ir-button", { key: 'e6bd5742fe933bbd4dd0787d7bcff52eece81cc0', size: "sm", text: "Pay", onClickHandler: () => {
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