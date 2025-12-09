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
        return (h(Host, { key: 'f327dba45e9d7494ab4522fa15f26479302051ac' }, h("ir-accordion", { key: '1f41f1a622d2d3d636a29c45ab7fc13e3bbc95e3', class: "ir-revenue-row__accordion" }, h("div", { key: 'd17b9c2fdde1a1dbdb547b0b0aea2ab7620315f1', slot: "trigger", class: "ir-revenue-row__title" }, h("div", { key: 'aa9894aec1be46f9e12c6037cc5ca74b610b43dc', class: "ir-revenue-row__header-left" }, h("p", { key: 'd952a085f54c7866045a5bc0730648fce01050bb', class: "ir-revenue-row__group" }, this.groupName, ' ', h("span", { key: 'd5e95f7ceeb7621fa17d52a623595a294fca9b53', class: "ir-revenue-row__badge", "aria-label": `${this.payments.length} transactions` }, this.payments.length))), h("p", { key: '78b45131524ad71e93a546b327550ededb755cb7', class: "ir-revenue-row__total" }, formatAmount(calendar_data.currency.symbol, total))), h("div", { key: '4672905de9216c347ea04a85799e01fe3e49fb5e', class: "ir-revenue-row__details", id: this.contentId }, h("div", { key: '21d852dd3bb378b3b67ffdb452e07f92932283a8', class: "ir-revenue-row__details-inner" }, this.payments.map(payment => (h("ir-revenue-row-details", { class: "ir-revenue-row__detail", id: payment.id, payment: payment, key: payment.id }))))))));
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