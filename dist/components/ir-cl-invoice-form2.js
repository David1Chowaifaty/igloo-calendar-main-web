import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$5 } from './ir-air-date-picker2.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-range-filter2.js';
import { d as defineCustomElement$2 } from './ir-date-select2.js';
import { d as defineCustomElement$1 } from './ir-input2.js';

const irClInvoiceFormCss = ".sc-ir-cl-invoice-form-h{display:flex;flex-direction:column;gap:1.25rem}.invoice-form__scope-banner.sc-ir-cl-invoice-form{display:flex;align-items:flex-start;gap:0.625rem;padding:0.75rem 1rem;background:var(--wa-color-primary-50, #eff6ff);border:1px solid var(--wa-color-primary-200, #bfdbfe);border-left:3px solid var(--wa-color-primary-500, #3b82f6);border-radius:0.375rem}.invoice-form__scope-icon.sc-ir-cl-invoice-form{flex-shrink:0;margin-top:1px;color:var(--wa-color-primary-500, #3b82f6)}.invoice-form__scope-text.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.125rem}.invoice-form__scope-label.sc-ir-cl-invoice-form{font-size:0.8125rem;font-weight:600;color:var(--wa-color-primary-700, #1d4ed8);letter-spacing:0.01em}.invoice-form__scope-desc.sc-ir-cl-invoice-form{font-size:0.75rem;color:var(--wa-color-primary-600, #2563eb);line-height:1.4}.invoice-form__date-error.sc-ir-cl-invoice-form ir-date-range-filter.sc-ir-cl-invoice-form{border:1px solid var(--wa-color-danger-500, #ef4444);border-radius:0.375rem}.invoice-form__date-error-msg.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-danger-600, #dc2626)}.invoice-form__field.sc-ir-cl-invoice-form{display:flex;flex-direction:column;gap:0.375rem}.invoice-form__label.sc-ir-cl-invoice-form{margin:0;font-size:0.8125rem;font-weight:500;color:var(--wa-color-text-normal, #374151)}.invoice-form__label-optional.sc-ir-cl-invoice-form{font-weight:400;color:var(--wa-color-text-quiet, #9ca3af)}.invoice-form__hint.sc-ir-cl-invoice-form{margin:0;font-size:0.75rem;color:var(--wa-color-text-quiet, #9ca3af);line-height:1.4}";
const IrClInvoiceFormStyle0 = irClInvoiceFormCss;

const IrClInvoiceForm = /*@__PURE__*/ proxyCustomElement(class IrClInvoiceForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    fromDate = '';
    toDate = '';
    scope = 'UNBILLED_CHECKED_OUT';
    dateError = false;
    onDateChange() {
        if (this.fromDate && this.toDate) {
            this.dateError = false;
        }
    }
    async validate() {
        if (!this.fromDate || !this.toDate) {
            this.dateError = true;
            return false;
        }
        this.dateError = false;
        return true;
    }
    async getValues() {
        return { fromDate: this.fromDate, toDate: this.toDate, scope: this.scope, is_checked_out_only: this.scope === 'UNBILLED_CHECKED_OUT' };
    }
    render() {
        return (h(Host, { key: '4c586e5ba77c3a7486334f4b5b76a5083345953e' }, h("wa-callout", { key: '0c3fd61a89023511bb063f52742f7aae922dd9ef' }, h("wa-icon", { key: '9bc582c00782f70d8bed620ab340800ecb909ab5', slot: "icon", name: "circle-info" }), h("div", { key: '59e25453857197db1d30c498a04495fc603c9a1b', class: "invoice-form__scope-text" }, h("span", { key: 'a8852711dfcac31f8e4c5471ac25d4259b0b61fe', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: 'eb9ba8a9ccfaaf0603bb611e7ab903815c6f6956', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges, adjustments and discounts."))), h("div", { key: '04e7c2992273ecbe7597401a2918ad8f8c5cdf9d', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: '4d1408392cec5cbd637b46813e41fde718e50c05', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '41ec6e37e80425c3eb9854c0748006911d902e77', class: "invoice-form__field" }, h("wa-checkbox", { key: 'ede653859917224c21b0b2523a8b3cc605557d13', checked: this.scope === 'UNBILLED_CHECKED_OUT', defaultChecked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
                this.scope = e.target.checked ? 'UNBILLED_CHECKED_OUT' : 'UNBILLED';
            } }, "Include checked-out bookings only"))));
    }
    static get watchers() { return {
        "fromDate": ["onDateChange"],
        "toDate": ["onDateChange"]
    }; }
    static get style() { return IrClInvoiceFormStyle0; }
}, [2, "ir-cl-invoice-form", {
        "fromDate": [32],
        "toDate": [32],
        "scope": [32],
        "dateError": [32],
        "validate": [64],
        "getValues": [64]
    }, undefined, {
        "fromDate": ["onDateChange"],
        "toDate": ["onDateChange"]
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