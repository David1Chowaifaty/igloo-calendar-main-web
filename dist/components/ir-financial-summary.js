import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irFinancialSummaryCss = ".sc-ir-financial-summary-h{display:block}";
const IrFinancialSummaryStyle0 = irFinancialSummaryCss;

const IrFinancialSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrFinancialSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '5cb006014f6d00ac9305a5fddc6c2bde646a2cbd' }, h("slot", { key: '0f1afa0de31d37f8bd5e2ab7f59c1841553d699b' })));
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