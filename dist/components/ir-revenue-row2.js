import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$4 } from './ir-accordion2.js';
import { d as defineCustomElement$3 } from './ir-button2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-revenue-row-details2.js';

const irRevenueRowCss = ".sc-ir-revenue-row-h{--ir-border:#e5e7eb}.ir-revenue-row__accordion.sc-ir-revenue-row::part(base),.ir-revenue-row.sc-ir-revenue-row{border:0;border-radius:0;border-bottom:1px solid var(--ir-border, #e5e7eb);background:#fff;padding:0}.ir-revenue-row__header.sc-ir-revenue-row{display:flex;align-items:center;justify-content:space-between;padding:var(--ir-space-4, 1rem);border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger),.ir-revenue-row__title.sc-ir-revenue-row{display:inline-flex;align-items:center;gap:0.5rem;background:transparent;border:0;padding:0;cursor:pointer;text-align:left;width:100%;justify-content:space-between;padding:0.5rem;color:black}.ir-revenue-row__title.sc-ir-revenue-row{padding:0}.ir-revenue-row__header-left.sc-ir-revenue-row{display:flex;align-items:center;gap:0.5rem}.ir-revenue-row__accordion.sc-ir-revenue-row::part(trigger):hover{background:#f4f5fa}.ir-revenue-row__group.sc-ir-revenue-row{margin:0;font-weight:600}.ir-revenue-row__badge.sc-ir-revenue-row{background:lightgray;border-radius:0.25rem;font-size:0.75rem;padding:0 0.5rem;margin-left:0.375rem}.ir-revenue-row__total.sc-ir-revenue-row{font-weight:700;margin:0}.ir-revenue-row__accordion.sc-ir-revenue-row::part(content){padding:0.25rem 1rem}.ir-revenue-row__detail.sc-ir-revenue-row{display:block;border-bottom:1px solid var(--ir-border, #e5e7eb)}.ir-revenue-row__detail.sc-ir-revenue-row:last-child{border-bottom:none}";
const IrRevenueRowStyle0 = irRevenueRowCss;

let accId = 0;
const IrRevenueRow = /*@__PURE__*/ proxyCustomElement(class IrRevenueRow extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /** Array of payments for this method group */
        this.payments = [];
        this.contentId = `ir-rr-content-${++accId}`;
    }
    render() {
        const total = this.payments.reduce((prev, curr) => prev + curr.amount, 0);
        return (h(Host, { key: 'c49fd08907a81fc429426bdb20af1b30f6b7a16a' }, h("ir-accordion", { key: '4ad5f072dc8dd10c2e49e17e9448eae9308201dc', class: "ir-revenue-row__accordion" }, h("div", { key: 'f3d757d271b635b6ee284615049a5d5b198d2dc8', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: '49254aa0d09926ee3556132cfee6704bc3989a79', class: "ir-revenue-row__header-left" }, h("p", { key: '9c34bb843fcd6fafd76c756f91f261e135449a1e', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'ed16ab8b6c3cd74ea1088887ac07d8973ec50e75', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '0e481797d4b36db1c2bd8741ef16f24392c14cb9', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: 'b85b39c7a6ebde56503c9c90cf58b38595a45c92', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: 'fc0846eb25555ca17b7813e919e6339f3da760be', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
    }
    get host() { return this; }
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