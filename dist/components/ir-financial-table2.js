import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:white;white-space:nowrap}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{background:rgb(255, 255, 255) !important;padding-top:1rem !important;padding-bottom:1rem !important;border-bottom:1px solid var(--wa-color-neutral-70) !important}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;border-top:1px solid var(--wa-color-neutral-70)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = /*@__PURE__*/ proxyCustomElement(class IrFinancialTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'cb728529abf30b3ac4dfac2c8ab7a30106d468e2', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '5777202c09a262e0f8bf76a70ce24ed22671c94a', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'cddcd6397a5996c83a65517a0f64e56ac108525b', class: "table-header" }, h("tr", { key: 'dd4f3bf4690bb91e54b0fff91eca6abc555e57a2' }, h("th", { key: 'f6e6727331da815a6999b3519b87c49f51d3bb2b', class: "text-center" }, "Date"), h("th", { key: '4a4ff6ed7976a6a3e0b64408732ce9c363491dea', class: "text-center" }, "Booking"), h("th", { key: '1c1ca96efd06ae457b2dd3d20b75cfe020a85323', class: "text-center" }, "By direct"), h("th", { key: '90b7f9ed1628f77c173d67792fdd359cb7a89d2f', class: "text-right" }, "Amount"), h("th", { key: '64c1114dc23a43ca7852c9244018809e39e18e80', class: "text-center" }))), h("tbody", { key: '8b68305f59404416193227af98de8a662ed7d828' }, h("tr", { key: '3a1ceec31d9cd4b7796f96dd12ea40236a2cd3da', class: "ir-table-row" }, h("td", { key: 'df39eb7375869177e89134bfaf1630cfd8125273', class: "text-center" }, "1"), h("td", { key: '908fe01c3bf747cce24cacb234a34f4d6c3e74c7', class: "text-center" }, h("ir-button", { key: '8a5a80220e2e96ef0c6d51333f38ab65395cfb4c', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: '020a5f00de41307fcf79b412de7175b0fccf09bc', class: "text-center" }, "1"), h("td", { key: '2d9cd774e1aa7611d5951b85b1e386accb30c0c9', class: "text-right" }, "1"), h("td", { key: '6556cd3f72914b61b3903adec686c19b2be02f04' }, h("ir-button", { key: 'f899196eac7654c894de88e10bb05ac15bb57876', size: "sm", text: "Pay", onClickHandler: () => {
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