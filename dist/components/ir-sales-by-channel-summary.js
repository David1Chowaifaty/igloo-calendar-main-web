import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irSalesByChannelSummaryCss = ".sc-ir-sales-by-channel-summary-h{display:block}";
const IrSalesByChannelSummaryStyle0 = irSalesByChannelSummaryCss;

const IrSalesByChannelSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrSalesByChannelSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'c70fa198a20a082eabdf15df98aa62cf7126efd9' }, h("slot", { key: '92e137bc9dbcbdcfda0d9dd04e7a78ba240a7144' })));
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