import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irFinancialSummaryCss = ".sc-ir-financial-summary-h{display:block}";
const IrFinancialSummaryStyle0 = irFinancialSummaryCss;

const IrFinancialSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrFinancialSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '9a0ed56fd7359dcc05ceee323307db0ee664be17' }, h("slot", { key: '62b2a0f823ea142c4e0d6d957ae4e39aa59e0a3b' })));
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