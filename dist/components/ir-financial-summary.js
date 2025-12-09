import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irFinancialSummaryCss = ".sc-ir-financial-summary-h{display:block}";
const IrFinancialSummaryStyle0 = irFinancialSummaryCss;

const IrFinancialSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrFinancialSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'fabc18de22d8fcc41ac43b9db7ddd75874f128de' }, h("slot", { key: '5d840f15f07a87372ff62773898f23c6d7ec4ea7' })));
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