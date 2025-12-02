import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irFinancialSummaryCss = ".sc-ir-financial-summary-h{display:block}";
const IrFinancialSummaryStyle0 = irFinancialSummaryCss;

const IrFinancialSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrFinancialSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '5a3e05a37cb7ce5c7399bbe3d772704f758f2d62' }, h("slot", { key: 'fb3dcf3dafac1aff49f121dbaf57430043c70bb8' })));
    }
    static get style() { return IrFinancialSummaryStyle0; }
}, [6, "ir-financial-summary"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-financial-summary"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-financial-summary":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFinancialSummary$1);
            }
            break;
    } });
}

const IrFinancialSummary = IrFinancialSummary$1;
const defineCustomElement = defineCustomElement$1;

export { IrFinancialSummary, defineCustomElement };

//# sourceMappingURL=ir-financial-summary.js.map