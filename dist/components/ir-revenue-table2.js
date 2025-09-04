import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-accordion2.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-icons2.js';
import { d as defineCustomElement$2 } from './ir-revenue-row2.js';
import { d as defineCustomElement$1 } from './ir-revenue-row-details2.js';

const irRevenueTableCss = ".sc-ir-revenue-table-h{overflow-x:hidden;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.sc-ir-revenue-table-h *.sc-ir-revenue-table{font-family:inherit !important;font-family:'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important}.revenue-table__header.sc-ir-revenue-table{box-sizing:border-box;background:#ececec;color:#374151;display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem}.revenue-table__header.sc-ir-revenue-table p.sc-ir-revenue-table{padding:0;margin:0;font-size:1rem;font-weight:700}.revenue-table__title-section.sc-ir-revenue-table{display:flex;align-items:center;justify-content:center;padding-bottom:0.875rem}.revenue-table__table.sc-ir-revenue-table{min-height:50vh}";
const IrRevenueTableStyle0 = irRevenueTableCss;

const IrRevenueTable = /*@__PURE__*/ proxyCustomElement(class IrRevenueTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.payments = new Map();
    }
    componentWillLoad() {
        let pt = {};
        this.payTypes.forEach(p => {
            pt = Object.assign(Object.assign({}, pt), { [p.CODE_NAME]: p.CODE_VALUE_EN });
        });
        this.payTypesObj = pt;
    }
    render() {
        return (h("div", { key: '63cfcf4c699ff6b4668b43153795abb8147e9e9a', class: "card p-1 revenue-table__table" }, this.payments.size > 0 ? (h(Fragment, null, h("div", { class: "revenue-table__header" }, h("p", null, "Method"), h("p", null, "Amount")), Array.from(this.payments.entries()).map(([key, p]) => {
            return h("ir-revenue-row", { key: key, payments: p, groupName: this.payTypesObj[key] });
        }))) : (h("p", { class: "text-center my-auto mx-auto" }, "There are no payment transactions recorded for the selected date."))));
    }
    static get style() { return IrRevenueTableStyle0; }
}, [2, "ir-revenue-table", {
        "payments": [16],
        "payTypes": [16],
        "filters": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revenue-table", "ir-accordion", "ir-button", "ir-icons", "ir-revenue-row", "ir-revenue-row-details"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revenue-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevenueTable);
            }
            break;
        case "ir-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-revenue-row":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRevenueTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-revenue-table2.js.map