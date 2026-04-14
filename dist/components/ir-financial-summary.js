import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irFinancialSummaryCss = ".sc-ir-financial-summary-h{display:block}";
const IrFinancialSummaryStyle0 = irFinancialSummaryCss;

const IrFinancialSummary$1 = /*@__PURE__*/ proxyCustomElement(class IrFinancialSummary extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'b70e3461553dd8a69c758518650afb4cbdb3e2e9' }, h("slot", { key: '1327d94590c4418e935693f32959ab2b696b3fa7' })));
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