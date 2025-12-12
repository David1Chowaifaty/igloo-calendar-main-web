import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irFinancialTableCss = ".sc-ir-financial-table-h{display:block}";
const IrFinancialTableStyle0 = irFinancialTableCss;

const tableCss = ".ir-table-row.sc-ir-financial-table td.sc-ir-financial-table{padding:0.5rem 1rem !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-financial-table{flex:1 1 0%}.table--container.sc-ir-financial-table{overflow-x:auto}.table.sc-ir-financial-table td.sc-ir-financial-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.table.sc-ir-financial-table tbody.sc-ir-financial-table tr.sc-ir-financial-table:last-child>td.sc-ir-financial-table{border-bottom:0 !important}.table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-financial-table thead.sc-ir-financial-table th.sc-ir-financial-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-financial-table .empty-row.sc-ir-financial-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-financial-table{padding:0.5rem 1rem;position:sticky;bottom:0;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-financial-table td.sc-ir-financial-table{background:#e3f3fa !important}.selected.sc-ir-financial-table td.sc-ir-financial-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table,.ir-table-row.sc-ir-financial-table{transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.sortable.sc-ir-financial-table{text-transform:capitalize}.sortable.sc-ir-financial-table:hover{color:#212529;background-color:#e2e8f0 !important;border-color:#dae0e5;cursor:pointer}.ir-table-row.sc-ir-financial-table:hover td.sc-ir-financial-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.sortable.sc-ir-financial-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-financial-table svg.sc-ir-financial-table{color:var(--blue)}.sticky-column.sc-ir-financial-table{position:sticky !important;right:0;background-color:white}";
const IrFinancialTableStyle1 = tableCss;

const IrFinancialTable = /*@__PURE__*/ proxyCustomElement(class IrFinancialTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.financialActionsOpenSidebar = createEvent(this, "financialActionsOpenSidebar", 7);
    }
    financialActionsOpenSidebar;
    render() {
        return (h("div", { key: 'b192d941aa6e78ff2e950656ae780e6bc655ea47', class: "table-container h-100 p-1 m-0 mb-2 table-responsive" }, h("table", { key: '384c952ab67da543e1d0b4505c6badb07f5d28f7', class: "table", "data-testid": "hk_tasks_table" }, h("thead", { key: 'a602590df5c1deb2d62694aaa982ac84c3025c2f', class: "table-header" }, h("tr", { key: '9f8b6ab04a8dbdf47e1662d1880e99176ac94558' }, h("th", { key: 'cca9d6cbc4c85187e96d6b063d23ca5a21d31e6a', class: "text-center" }, "Date"), h("th", { key: '7a678286b679b0f3d9a1920b388517504a846947', class: "text-center" }, "Booking"), h("th", { key: 'e9cfd87a35408890aa63fa6faf13dd6ade7276dc', class: "text-center" }, "By direct"), h("th", { key: '8ad0b55f1c46a29f57c7258356ee9d6948732a60', class: "text-right" }, "Amount"), h("th", { key: '28d58bfb7bd5f83934213fe27bba55fa44e95081', class: "text-center" }))), h("tbody", { key: '86911c69f263c41e53fd3a0732a674882d1fece7' }, h("tr", { key: 'fc81182e12ed74e327dff2a84b7660682cb019f3', class: "ir-table-row" }, h("td", { key: 'd3b47bed6288e7c4bfd696bb89a174e9ab53fc07', class: "text-center" }, "1"), h("td", { key: 'a947153a29fee5e0c021f78bfe5fe743eecb55c7', class: "text-center" }, h("ir-button", { key: '0d90fbd5ef688fa2f1c175f1b9ffcfb0fd8c1c73', btn_color: "link", size: "sm", text: "31203720277", onClickHandler: () => {
                this.financialActionsOpenSidebar.emit({
                    type: 'booking',
                    payload: {
                        bookingNumber: 31203720277,
                    },
                });
            } })), h("td", { key: 'b2010963153cb3bff2ad618397e09d50613804ac', class: "text-center" }, "1"), h("td", { key: '35f37204b1d2d9722b13a00fa161f698cce86453', class: "text-right" }, "1"), h("td", { key: 'bc79b9d9b2e9873afd5ad2cc28a23c03c0cec8ac' }, h("ir-button", { key: 'f7b3aa9036387f7027657ed77b6fdae39887cf21', size: "sm", text: "Pay", onClickHandler: () => {
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