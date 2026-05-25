import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irClInvoiceVatPctCellCss = ".sc-ir-cl-invoice-vat-pct-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::before,.sc-ir-cl-invoice-vat-pct-cell-h *.sc-ir-cl-invoice-vat-pct-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-vat-pct-cell{display:none !important}.sc-ir-cl-invoice-vat-pct-cell-h{display:block;text-align:right}";
const IrClInvoiceVatPctCellStyle0 = irClInvoiceVatPctCellCss;

const IrClInvoiceVatPctCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceVatPctCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    vatPercent;
    render() {
        return h(Host, { key: '7720b553fbe312e33848bb3466ec371c65189526' }, this.vatPercent, "%");
    }
    static get style() { return IrClInvoiceVatPctCellStyle0; }
}, [2, "ir-cl-invoice-vat-pct-cell", {
        "vatPercent": [2, "vat-percent"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-vat-pct-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-vat-pct-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceVatPctCell);
            }
            break;
    } });
}

export { IrClInvoiceVatPctCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-vat-pct-cell2.js.map