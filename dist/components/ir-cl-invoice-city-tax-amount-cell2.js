import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';

const irClInvoiceCityTaxAmountCellCss = ".sc-ir-cl-invoice-city-tax-amount-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::before,.sc-ir-cl-invoice-city-tax-amount-cell-h *.sc-ir-cl-invoice-city-tax-amount-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-amount-cell{display:none !important}.sc-ir-cl-invoice-city-tax-amount-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxAmountCellStyle0 = irClInvoiceCityTaxAmountCellCss;

const IrClInvoiceCityTaxAmountCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceCityTaxAmountCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    currencySymbol;
    amount;
    cityTaxPercent;
    render() {
        return h(Host, { key: '0dc0422d0736c762fe035208172358671f39f142' }, this.cityTaxPercent > 0 ? formatAmount(this.currencySymbol, this.amount) : '');
    }
    static get style() { return IrClInvoiceCityTaxAmountCellStyle0; }
}, [2, "ir-cl-invoice-city-tax-amount-cell", {
        "currencySymbol": [1, "currency-symbol"],
        "amount": [2],
        "cityTaxPercent": [2, "city-tax-percent"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-city-tax-amount-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-city-tax-amount-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceCityTaxAmountCell);
            }
            break;
    } });
}

export { IrClInvoiceCityTaxAmountCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-city-tax-amount-cell2.js.map