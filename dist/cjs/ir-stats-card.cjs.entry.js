'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irStatsCardCss = ".sc-ir-stats-card-h{display:block}";
const IrStatsCardStyle0 = irStatsCardCss;

const IrStatsCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    icon;
    cardTitle;
    subtitle;
    value;
    render() {
        if (!this.value) {
            return null;
        }
        return (index.h(index.Host, { class: "card p-1 d-flex flex-column flex-fill m-0", style: { gap: '0.5rem' } }, index.h("div", { class: "d-flex align-items-center justify-content-between" }, index.h("slot", { slot: "card-header" }, index.h("p", { class: "m-0 p-0" }, index.h("slot", { name: "title" }, this.cardTitle)), index.h("ir-icons", { name: this.icon }))), index.h("slot", { name: "card-body" }, index.h("h4", { class: "m-0 p-0" }, index.h("b", { class: "m-0 p-0" }, index.h("slot", { name: "value" }, this.value)))), index.h("slot", { name: "card-footer" }, this.subtitle && (index.h("p", { class: "m-0 p-0 small text-muted" }, index.h("slot", { name: "subtitle" }, this.subtitle))))));
    }
};
IrStatsCard.style = IrStatsCardStyle0;

exports.ir_stats_card = IrStatsCard;

//# sourceMappingURL=ir-stats-card.cjs.entry.js.map