import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
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
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope, is_checked_out_only: this.scope === 'UNBILLED_CHECKED_OUT' };
    }
    render() {
        return (h(Host, { key: 'f1a561a09fd33239214ed04b178fa896c3ce6e94' }, h("wa-callout", { key: 'b8bcfdf8223f206c96f2fcdd31ad00c5e666ef5c' }, h("wa-icon", { key: 'f2b071748fc3b65f2f35ec3775a559050e8cb5b6', slot: "icon", name: "circle-info" }), h("div", { key: 'b905c807f32c3e739952dd1d34a870e776868db3', class: "invoice-form__scope-text" }, h("span", { key: '564080c647b05c683f1ac1a7fed9ac336dd2ab27', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: '05c982e295624a5dbd26acc083847c2fb7d09842', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: '87341fed2dc5db35f3c2870e86a502a60faa1861', class: "invoice-form__field" }, h("ir-date-range-filter", { key: '20731a36d2bd0e4aff148198cef61e7c37d94fd5', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '2d06ddb34889e7b5d27e736f7cfa97d70844ec88', class: "invoice-form__field" }, h("wa-checkbox", { key: '577cba5b9b4903f2788d23e0c0054b832d54a5c6', checked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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