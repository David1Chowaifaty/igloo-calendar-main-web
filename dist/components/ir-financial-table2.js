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
        return (h("div", { key: 'd714b5ee7768da9650ce2a5beb9098fd1e7a4b58', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '87514e9c65cc068d0705389d3e40d9b72584edf9', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: '3cfc530746c651ef301b4119fb5cdc94bcac4689', class: "table-header" }, h("tr", { key: '4554370dfb838ebe92cebd061061f09f8ec5a4af' }, h("th", { key: '061964a545060c591633d67f1a206947a39024b5', class: "text-center" }, "Date"), h("th", { key: '7de25d5419c65939fb754f5acf251db8533b3ae6', class: "text-center" }, "Booking"), h("th", { key: '9d6c200c985e4de3d4e9f48c6ac87f1cb0ee5c0c', class: "text-center" }, "By direct"), h("th", { key: '0069f7ba1c5962672b448a94349ab82022dbb271', class: "text-right" }, "Amount"), h("th", { key: '5b1070999f684ae3b5009f76152303c043f3bb4e', class: "text-center" }))), h("tbody", { key: 'ee46bdd5eca4d9ba6b27198d5cd0c8bca133521f' }, h("tr", { key: '7fccf79c097e6d8d8518333f8b0888a96fcb5d87', class: "ir-table-row" }, h("td", { key: '4f6e69964e280e98d2854e338696b684f76dabec', class: "text-center" }, "1"), h("td", { key: '6a37e4886170c29f2350e3a5ee11fbd58173613f', class: "text-center" }, h("ir-button", { key: '05519a1092c198d68c3a61667315017f92b686fd', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '331f21aaeec78e313f226395b11d325bd4bbc2a1', class: "text-center" }, "1"), h("td", { key: 'ed7cfef583038f0e24c54910dfdebbdc74258d72', class: "text-right" }, "1"), h("td", { key: '63375e18e9a17710bab8a8b823defdb28c2e41e6' }, h("ir-button", { key: 'ca85eede61a2dea1c567689a67c18ecd3e9789af', size: "sm", text: "Pay", onClickHandler: () => {
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