import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$4 } from './ir-accordion2.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-revenue-row-details2.js';

const irRevenueRowCss = ".sc-ir-revenue-row-h{--ir-border:#e5e7eb}.ir-revenue-row__accordion.sc-ir-revenue-row::part(base),.ir-revenue-row.sc-ir-revenue-row{border:0;border-radius:0;border-bottom:1px solid var(--ir-border, #e5e7eb);background:#fff;padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:0.5rem;background:transparent;border:0;padding:0;cursor:pointer;text-align:left;width:100%;justify-content:space-between;padding:0.5rem;color:rgb(83, 83, 83)}.ir-revenue-row__title.sc-ir-revenue-row{padding:0}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:0.5rem}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):hover{background:#f4f5fa}.ir-revenue-row__group.sc-ir-revenue-row{margin:0}.ir-revenue-row__badge.sc-ir-revenue-row{background:lightgray;border-radius:0.25rem;font-size:0.75rem;padding:0 0.5rem;margin-left:0.375rem}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__accordion.sc-ir-revenue-row::part(content){padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}@media (min-width: 1024px){.ir-revenue-row__header-left.sc-ir-revenue-row{width:40vw}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{justify-content:flex-start}}";
const IrRevenueRowStyle0 = irRevenueRowCss;

let accId = 0;
const IrRevenueRow = /*@__PURE__*/ proxyCustomElement(class IrRevenueRow extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    get host() { return this; }
    /** Array of payments for this method group */
    payments = [];
    /** Group display name (e.g., "Credit Card") */
    groupName;
    contentId = `ir-rr-content-${++accId}`;
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: '78587f95a8998e2f18f8dd0f434ded6d575924a0' }, h("ir-accordion", { key: 'ab912b435c7b0f0a05c1361fa1d347ff9b420a2b', class: "ir-revenue-row__accordion" }, h("div", { key: '84eafefa3450ca8767cd66da54965b5495302198', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '90c8af6da49597c669306d305286f397024636d0', class: "ir-revenue-row__header-left" }, h("p", { key: '06a7c311fb5c549dedb605d14cd3e2a8cfbe0fb7', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: '8b672cd60f6b6e87be0ecd7e79c55f98bd324139', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '22bca4f9ee826280a84c3225aaf3d59da6164354', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '4189ad8dceddc2d5bdc90d221af5e1baf14906d2', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '6268502a6a841be75009ee75fcf88c182acb450a', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    static get style() { return IrRevenueRowStyle0; }
}, [2, "ir-revenue-row", {
        "payments": [16],
        "groupName": [1, "group-name"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-revenue-row", "ir-accordion", "ir-button", "ir-icons", "ir-revenue-row-details"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-revenue-row":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRevenueRow);
            }
            break;
        case "ir-accordion":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
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
        case "ir-revenue-row-details":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrRevenueRow as I, defineCustomElement as d };

//# sourceMappingURL=ir-revenue-row2.js.map