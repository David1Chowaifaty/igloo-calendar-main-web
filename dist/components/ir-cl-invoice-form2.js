import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-custom-date-range2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irClInvoiceFormCss = ".sc-ir-cl-invoice-form-h{display:flex;flex-direction:column;gap:1.25rem}.invoice-form__scope-banner.sc-ir-cl-invoice-form{display:flex;align-items:flex-start;gap:0.625rem;padding:0.75rem 1rem;background:var(--wa-color-primary-50, #eff6ff);border:1px solid var(--wa-color-primary-200, #bfdbfe);border-left:3px solid var(--wa-color-primary-500, #3b82f6);border-radius:0.375rem}.invoice-form__scope-icon.sc-ir-cl-invoice-form{flex-shrink:0;margin-top:1px;color:var(--wa-color-primary-500, #3b82f6)}.invoice-form__scope-text.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.125rem}.invoice-form__scope-label.sc-ir-cl-invoice-form{font-size:0.8125rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);letter-spacing:0.01em}.invoice-form__scope-desc.sc-ir-cl-invoice-form{font-size:0.75rem;color:var(--wa-color-primary-600, #2563eb);line-height:1.4}.invoice-form__field.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.375rem}.invoice-form__label.sc-ir-cl-invoice-form{margin:0;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #374151)}.invoice-form__label-optional.sc-ir-cl-invoice-form{font-weight:400;color:var(--wa-color-text-quiet, #9ca3af)}.invoice-form__hint.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #9ca3af);line-height:1.4}";
const IrClInvoiceFormStyle0 = irClInvoiceFormCss;

const IrClInvoiceForm = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED';
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope };
    }
    render() {
        return (h(Host, { key: '5a67f34667cae63b33db2c7e9b9fff5dc5802f44' }, h("wa-callout", { key: 'c34b21d493f40fee087d893d1022e0c94b9ca2c5' }, h("wa-icon", { key: '9f99d9c9b259a22700ef48c52fac055e1f107227', slot: "icon", name: "circle-info" }), h("div", { key: 'a6c8607fc70d99f14961f08b8f13b92c275cef39', class: "invoice-form__scope-text" }, h("span", { key: '6cde4e0bb0c4f36caa4a6ec5a894fc3d316e32ac', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '58f8984c20cffc6246b43351a7bae46538d839c4', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: 'f27d6fa0346c4f21403cc9b220842d479b9b76d6', class: "invoice-form__field" }, h("ir-date-range-filter", { key: '84f40359c1f67484d15d6889f22f15431b5cd294', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate || undefined, toDate: this.toDate || undefined, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '8a081f89acd6febdbcf3a360b3892c0ed9a9529f', class: "invoice-form__field" }, h("wa-checkbox", { key: '091e5c750c89ea4ca3f2847045b65920b754e3fa', checked: this.scope === 'UNBILLED_CHECKED_OUT', "onwa-change": e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, "Include checked-out bookings only"))));
    }
    static get style() { return IrClInvoiceFormStyle0; }
}, [2, "ir-cl-invoice-form", {
        "fromDate": [32],
        "toDate": [32],
        "scope": [32],
        "getValues": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-cl-invoice-form", "ir-custom-button", "ir-custom-date-range", "ir-date-range-filter", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceForm);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-date-range":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-range-filter":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-date-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrClInvoiceForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-cl-invoice-form2.js.map