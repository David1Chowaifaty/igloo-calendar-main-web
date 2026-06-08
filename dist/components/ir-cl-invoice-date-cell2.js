import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';

const irClInvoiceDateCellCss = ".sc-ir-cl-invoice-date-cell-h{box-sizing:border-box !important}.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::before,.sc-ir-cl-invoice-date-cell-h *.sc-ir-cl-invoice-date-cell::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-cl-invoice-date-cell{display:none !important}.sc-ir-cl-invoice-date-cell-h{display:block;white-space:nowrap}";
const IrClInvoiceDateCellStyle0 = irClInvoiceDateCellCss;

const IrClInvoiceDateCell = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceDateCell extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    date;
    render() {
        return h(Host, { key: 'a9e40cdb4905d4ff12a153d0ac1899c51b69eb72' }, hooks(this.date, 'YYYY-MM-DD').format('MMM DD, YYYY'));
    }
    static get style() { return IrClInvoiceDateCellStyle0; }
}, [2, "ir-cl-invoice-date-cell", {
        "date": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-date-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-date-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceDateCell);
            }
            break;
    } });
}

export { IrClInvoiceDateCell as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-date-cell2.js.map