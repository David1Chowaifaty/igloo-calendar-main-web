import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irStatsCardCss = ".sc-ir-stats-card-h{display:block}";
const IrStatsCardStyle0 = irStatsCardCss;

const IrStatsCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        if (!this.value) {
            return null;
        }
        return (h(Host, { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, h("div", { class: "d-flex align-items-center justify-content-between" }, h("slot", { slot: "card-header" }, h("p", { class: "m-0 p-0" }, h("slot", { name: "title" }, this.cardTitle)), h("ir-icons", { name: this.icon }))), h("slot", { name: "card-body" }, h("h4", { class: "m-0 p-0" }, h("b", { class: "m-0 p-0" }, h("slot", { name: "value" }, this.value)))), h("slot", { name: "card-footer" }, this.subtitle && (h("p", { class: "m-0 p-0 small text-muted" }, h("slot", { name: "subtitle" }, this.subtitle))))));
    }
};
IrStatsCard.style = IrStatsCardStyle0;

export { IrStatsCard as ir_stats_card };

//# sourceMappingURL=ir-stats-card.entry.js.map