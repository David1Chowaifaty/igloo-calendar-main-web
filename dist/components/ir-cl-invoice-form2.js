import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
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
        return (h(Host, { key: 'a33b98775a2df783298e2183010f94ad44f286cf' }, h("wa-callout", { key: 'a2798bab1cbc4452aa80f21d638851c50cc3b2da' }, h("wa-icon", { key: 'e2c7d6e675766780e04788194b47de4c85fa2735', slot: "icon", name: "circle-info" }), h("div", { key: '9f34ffaf5c4e2b779e0ee9a3ee3ecbed25d3d043', class: "invoice-form__scope-text" }, h("span", { key: 'ba8a64f4468cc1b782926fdf588abf573ca93c74', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: 'a0ad815574ae2a4214aa5f553f05ec9591cc431b', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: 'b759cff922ad83d880cf335049edfd09e1744acf', class: "invoice-form__field" }, h("ir-date-range-filter", { key: '807914dbc87dbf5f283b23e4389ad2aa3393a333', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate || undefined, toDate: this.toDate || undefined, onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '6584eb0a0e8949580bf29e973663930df5cf30bd', class: "invoice-form__field" }, h("wa-checkbox", { key: 'c278f5f5083b23931153d98423427d2111e6a41c', checked: this.scope === 'UNBILLED_CHECKED_OUT', "onwa-change": e => {
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
    const components = ["ir-cl-invoice-form", "ir-air-date-picker", "ir-custom-button", "ir-date-range-filter", "ir-date-select", "ir-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-cl-invoice-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrClInvoiceForm);
            }
            break;
        case "ir-air-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-custom-button":
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