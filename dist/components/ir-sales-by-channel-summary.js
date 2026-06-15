import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irSalesByChannelSummaryCss = ".sc-ir-sales-by-channel-summary-h{display:block}";
const IrSalesByChannelSummaryStyle0 = irSalesByChannelSummaryCss;

const IrSalesByChannelSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannelSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '84094df7ab5b2ddc1b15d7f4846ac97e6d6b5fec' }, h("slot", { key: 'b743b32ec68fca435c02ea53f43be765ec242f08' })));
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