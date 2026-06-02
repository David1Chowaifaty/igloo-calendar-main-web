import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';

const irClInvoiceTotalCellCss = ".sc-ir-cl-invoice-total-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::before,.sc-ir-cl-invoice-total-cell-h *.sc-ir-cl-invoice-total-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-total-cell{display:none !important}.sc-ir-cl-invoice-total-cell-h{display:block;text-align:right}";
const IrClInvoiceTotalCellStyle0 = irClInvoiceTotalCellCss;

const IrClInvoiceTotalCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceTotalCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: '5932e65f9bbb9e031805ed7f91241b6ca47147ee' }, formatAmount(this.currencySymbol, this.amount));
    }
    static get style() { return IrClInvoiceTotalCellStyle0; }
}, [2, "ir-cl-invoice-total-cell", {
        "currencySymbol": [1, "currency-symbol"],
        "amount": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-total-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-total-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceTotalCell);
            }
            break;
    } });
}

export { IrClInvoiceTotalCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-total-cell2.js.map