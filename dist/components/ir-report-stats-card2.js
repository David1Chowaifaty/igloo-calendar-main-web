import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irReportStatsCardCss = ":host{display:block}";
const IrReportStatsCardStyle0 = irReportStatsCardCss;

const IrReportStatsCard = /*@__PURE__*/ proxyCustomElement(class IrReportStatsCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        if (!this.value) {
            return null;
        }
        return (h(Host, { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("p", { class: "m-0 p-0" }, this.cardTitle), h("ir-icons", { name: this.icon })), h("h4", { class: "m-0 p-0" }, h("b", { class: "m-0 p-0" }, this.value)), this.subtitle && h("p", { class: "m-0 p-0 small text-muted" }, this.subtitle)));
    }
    static get style() { return IrReportStatsCardStyle0; }
}, [0, "ir-report-stats-card", {
        "icon": [1],
        "cardTitle": [1, "card-title"],
        "subtitle": [1],
        "value": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-report-stats-card", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-report-stats-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrReportStatsCard);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrReportStatsCard as I, defineCustomElement as d };

//# sourceMappingURL=ir-report-stats-card2.js.map