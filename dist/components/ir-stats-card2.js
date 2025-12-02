import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irStatsCardCss = ".sc-ir-stats-card-h{display:block}";
const IrStatsCardStyle0 = irStatsCardCss;

const IrStatsCard = /*@__PURE__*/ proxyCustomElement(class IrStatsCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    icon;
    cardTitle;
    subtitle;
    value;
    render() {
        if (!this.value) {
            return null;
        }
        return (h(Host, { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("slot", { slot: "card-header" }, h("p", { class: "m-0 p-0" }, h("slot", { name: "title" }, this.cardTitle)), h("ir-icons", { name: this.icon }))), h("slot", { name: "card-body" }, h("h4", { class: "m-0 p-0" }, h("b", { class: "m-0 p-0" }, h("slot", { name: "value" }, this.value)))), h("slot", { name: "card-footer" }, this.subtitle && (h("p", { class: "m-0 p-0 small text-muted" }, h("slot", { name: "subtitle" }, this.subtitle))))));
    }
    static get style() { return IrStatsCardStyle0; }
}, [6, "ir-stats-card", {
        "icon": [1],
        "cardTitle": [1, "card-title"],
        "subtitle": [1],
        "value": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-stats-card", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-stats-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrStatsCard);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrStatsCard as I, defineCustomElement as d };

//# sourceMappingURL=ir-stats-card2.js.map