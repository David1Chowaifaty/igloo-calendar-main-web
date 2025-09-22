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
        return (h("div", { key: '86fc1931ec67a29b3b73049cc7821e695689e2e7', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: 'f2a3c49f0c0334036ebf225bf746aff4c5bad6a8', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'ed8aab3b14e391f629bc49411031ee6f7921ce84', class: "table-header" }, h("tr", { key: '60df683f0127e101e2a5fc4407c6f7288b22ee58' }, h("th", { key: 'e9de64ead7cefbf25494ca47f74da6df4b726275', class: "text-center" }, "Date"), h("th", { key: '6b1dd3af28f034ec35f51bc68734eb522b99149b', class: "text-center" }, "Booking"), h("th", { key: '7bf4abb7ac30740a7ece8829a5b003b8e2864cf3', class: "text-center" }, "By direct"), h("th", { key: 'f21f9700253d4acb01f40376921c2c3be5463ab0', class: "text-right" }, "Amount"), h("th", { key: 'f1dbac4edcb628a485555e6da5266a6db2b98906', class: "text-center" }))), h("tbody", { key: '40481afd7a0e55064a82c9d1992217d929f60b48' }, h("tr", { key: '8900d30d620efbadf93ef7da0e7e7b5eb959808f', class: "ir-table-row" }, h("td", { key: 'c0e288d16c00cd79044069108cbadf57ca02556b', class: "text-center" }, "1"), h("td", { key: 'd2ae47b96d31da8d13cff3124c938b7f70b961d4', class: "text-center" }, h("ir-button", { key: '5637be213340c6f60184944560f775bc44b8bb1f', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '9c97200989090949046d43725380dc234fb6a6c0', class: "text-center" }, "1"), h("td", { key: '426b1d2f97172b65559f7b7bfb480f9953a855fb', class: "text-right" }, "1"), h("td", { key: '1c6d024cc03e652cf093b3f18288f91536ce1086' }, h("ir-button", { key: 'f21bbee3cb6d477e51ed41f7c28522098e7297b7', size: "sm", text: "Pay", onClickHandler: () => {
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