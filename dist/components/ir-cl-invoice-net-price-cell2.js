import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';

const irClInvoiceNetPriceCellCss = ".sc-ir-cl-invoice-net-price-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::before,.sc-ir-cl-invoice-net-price-cell-h *.sc-ir-cl-invoice-net-price-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-net-price-cell{display:none !important}.sc-ir-cl-invoice-net-price-cell-h{display:block;text-align:right}";
const IrClInvoiceNetPriceCellStyle0 = irClInvoiceNetPriceCellCss;

const IrClInvoiceNetPriceCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceNetPriceCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: '095e812bb8ebea467b28a2d5c8d76a8f11d9cd8e' }, formatAmount(this.currencySymbol, this.amount));
    }
    static get style() { return IrClInvoiceNetPriceCellStyle0; }
}, [2, "ir-cl-invoice-net-price-cell", {
        "currencySymbol": [1, "currency-symbol"],
        "amount": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-net-price-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-net-price-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceNetPriceCell);
            }
            break;
    } });
}

export { IrClInvoiceNetPriceCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-net-price-cell2.js.map