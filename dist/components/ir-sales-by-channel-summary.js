import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irSalesByChannelSummaryCss = ".sc-ir-sales-by-channel-summary-h{display:block}";
const IrSalesByChannelSummaryStyle0 = irSalesByChannelSummaryCss;

const IrSalesByChannelSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannelSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '86a115fb99a224ce1266a3cb225e465d3aa6bf04' }, h("slot", { key: '408e7396d49ad7ddecf524fdde390ab2a421e244' })));
    }
    static get style() { return IrSalesByChannelSummaryStyle0; }
}, [6, "ir-sales-by-channel-summary"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-sales-by-channel-summary"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-sales-by-channel-summary":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrSalesByChannelSummary$1);
            }
            break;
    } });
}

const IrSalesByChannelSummary = IrSalesByChannelSummary$1;
const defineCustomElement = defineCustomElement$1;

export { IrSalesByChannelSummary, defineCustomElement };

//# sourceMappingURL=ir-sales-by-channel-summary.js.map