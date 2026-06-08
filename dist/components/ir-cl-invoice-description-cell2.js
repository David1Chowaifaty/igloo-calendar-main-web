import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irClInvoiceDescriptionCellCss = ".sc-ir-cl-invoice-description-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::before,.sc-ir-cl-invoice-description-cell-h *.sc-ir-cl-invoice-description-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-description-cell{display:none !important}.sc-ir-cl-invoice-description-cell-h{display:block}.desc.sc-ir-cl-invoice-description-cell{display:block}";
const IrClInvoiceDescriptionCellStyle0 = irClInvoiceDescriptionCellCss;

const IrClInvoiceDescriptionCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceDescriptionCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    description;
    render() {
        return (h(Host, { key: '5d0700f99e7f3e60ca004a45882d22003c5ffd84' }, h("span", { key: 'ed6c8538336c400df5031de49fcb96cd15754f75', class: "desc" }, this.description)));
    }
    static get style() { return IrClInvoiceDescriptionCellStyle0; }
}, [2, "ir-cl-invoice-description-cell", {
        "description": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-description-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-description-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceDescriptionCell);
            }
            break;
    } });
}

export { IrClInvoiceDescriptionCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-description-cell2.js.map