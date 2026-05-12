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
    scope = 'UNBILLED';
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
        return (h(Host, { key: 'b0aec56588163f2ad391ca3fc6a4eac0e269a03a' }, h("wa-callout", { key: '6ca6f613473e6f9c6c361105304b13a0be5f8875' }, h("wa-icon", { key: '290038c061f420d3530289a12c4a494302e9a3da', slot: "icon", name: "circle-info" }), h("div", { key: '5f561e130f367a7c49d5628c3ba3cff830c583a8', class: "invoice-form__scope-text" }, h("span", { key: '1e540aca98811c4e6421aefdd37354bbc5f55ab7', class: "invoice-form__scope-label" }, "Unbilled Folio Entries"), h("span", { key: 'c3f8c68081ef7bf12d139d77b0e31273071cd44a', class: "invoice-form__scope-desc" }, "Including all services from bookings, manual charges and adjustments."))), h("div", { key: 'f64eedd5b72a209bb92ec9ef16a4a3da67391c3d', class: `invoice-form__field${this.dateError ? ' invoice-form__date-error' : ''}` }, h("ir-date-range-filter", { key: 'b0d0f90115233359ca163658e302f81fb91418bd', showQuickActions: false, style: { width: '100%' }, fromDate: this.fromDate, toDate: this.toDate, maxDate: hooks().format('YYYY-MM-DD'), onDatesChanged: e => {
                this.fromDate = e.detail.from ?? '';
                this.toDate = e.detail.to ?? '';
            } })), h("div", { key: '732fb6736b092e162706ca31d1efdc95bcaa1c5d', class: "invoice-form__field" }, h("wa-checkbox", { key: '695ae87325af56ab77ef6168305c8667eb9483bf', checked: this.scope === 'UNBILLED_CHECKED_OUT', onchange: e => {
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