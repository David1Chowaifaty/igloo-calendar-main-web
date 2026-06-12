import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irSalesByChannelSummaryCss = ".sc-ir-sales-by-channel-summary-h{display:block}";
const IrSalesByChannelSummaryStyle0 = irSalesByChannelSummaryCss;

const IrSalesByChannelSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannelSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'fab2a2f5f82ea2356e22a435e1872f7147adb146' }, h("slot", { key: 'aec5687b4f9e851d670963b0e92f0fc0a135851d' })));
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