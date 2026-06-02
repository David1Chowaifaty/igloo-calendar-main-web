import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';

const irClInvoiceVatAmountCellCss = ".sc-ir-cl-invoice-vat-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::before,.sc-ir-cl-invoice-vat-amount-cell-h *.sc-ir-cl-invoice-vat-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-amount-cell{display:none !important}.sc-ir-cl-invoice-vat-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceVatAmountCellStyle0 = irClInvoiceVatAmountCellCss;

const IrClInvoiceVatAmountCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceVatAmountCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    currencySymbol;
    amount;
    render() {
        return h(Host, { key: 'c296392475d0ccea91520355edf8b1ae3d5aca75' }, formatAmount(this.currencySymbol, this.amount));
    }
    static get style() { return IrClInvoiceVatAmountCellStyle0; }
}, [2, "ir-cl-invoice-vat-amount-cell", {
        "currencySymbol": [1, "currency-symbol"],
        "amount": [2]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-vat-amount-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-vat-amount-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceVatAmountCell);
            }
            break;
    } });
}

export { IrClInvoiceVatAmountCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-vat-amount-cell2.js.map