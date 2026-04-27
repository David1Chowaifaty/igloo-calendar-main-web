import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irClInvoiceCityTaxPctCellCss = ".sc-ir-cl-invoice-city-tax-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::before,.sc-ir-cl-invoice-city-tax-pct-cell-h *.sc-ir-cl-invoice-city-tax-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-city-tax-pct-cell{display:none !important}.sc-ir-cl-invoice-city-tax-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceCityTaxPctCellStyle0 = irClInvoiceCityTaxPctCellCss;

const IrClInvoiceCityTaxPctCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceCityTaxPctCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    cityTaxPercent;
    render() {
        return h(Host, { key: '04d5d2f9adc5e347e42051e6615767509960646f' }, this.cityTaxPercent > 0 ? `${this.cityTaxPercent}%` : '');
    }
    static get style() { return IrClInvoiceCityTaxPctCellStyle0; }
}, [2, "ir-cl-invoice-city-tax-pct-cell", {
        "cityTaxPercent": [2, "city-tax-percent"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-city-tax-pct-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-city-tax-pct-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceCityTaxPctCell);
            }
            break;
    } });
}

export { IrClInvoiceCityTaxPctCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-city-tax-pct-cell2.js.map