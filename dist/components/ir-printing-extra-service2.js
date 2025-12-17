import { proxyCustomElement, HTMLElement, h, Fragment } from '@stencil/core/internal/client';
import { f as formatAmount } from './utils.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$1 } from './ir-printing-label2.js';

const irPrintingExtraServiceCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block}.ir-print-extra-services{padding:1rem 0;border-top:1px solid #d1d5db}.ir-print-extra-services__title{font-weight:600;font-size:1.125rem ;line-height:1.75rem ;color:#111827;margin-bottom:0.625rem}.ir-print-extra-services__list{display:flex;flex-direction:column;gap:0.75rem}.ir-print-extra-services__item{display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap}.ir-print-extra-services__details{display:flex;flex-direction:column;gap:0.25rem;max-width:80%}.ir-print-extra-services__description{word-break:break-word}.ir-print-extra-services__dates{font-size:0.75rem;color:#374151}.ir-print-extra-services__date-wrapper{display:inline-flex;align-items:center;gap:0.25rem}.ir-print-extra-services__date{white-space:nowrap}.ir-print-extra-services__date-separator{margin:0 0.25rem}.ir-print-extra-services__date::part(content){font-size:0.875rem}.ir-print-extra-services__price{font-weight:700;white-space:nowrap}";
const IrPrintingExtraServiceStyle0 = irPrintingExtraServiceCss;

const IrPrintingExtraService = /*@__PURE__*/ proxyCustomElement(class IrPrintingExtraService extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /** Extra services attached to the booking */
    extraServices;
    /** Booking currency */
    currency;
    invocableKeys;
    render() {
        return (h("section", { key: '5b694d8793e6841e624d3e50ffefafdcc025bc70', class: "ir-print-extra-services" }, h("h3", { key: 'de45dc624cd017daade9f2892775a9233cf67abd', class: "ir-print-extra-services__title" }, "Extra services"), h("div", { key: 'a58b646721eae9db2297c4f18dc47017dfd1e8e2', class: "ir-print-extra-services__list" }, this.extraServices?.map(service => {
            if (!this.invocableKeys.has(service.system_id)) {
                return null;
            }
            return (h("div", { key: `service_${service.system_id}`, class: "ir-print-extra-services__item" }, h("div", { class: "ir-print-extra-services__details" }, h("ir-printing-label", { display: "inline", label: "", class: "ir-print-extra-services__description", content: service.description }), (service.start_date || service.end_date) && (h("div", { class: "ir-print-extra-services__dates" }, h("span", { class: "ir-print-extra-services__date-wrapper" }, "(", service.start_date && (h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: hooks(service.start_date).format('dddd, DD MMM YYYY') })), service.end_date && (h(Fragment, null, h("span", { class: "ir-print-extra-services__date-separator" }, "\u2013"), h("ir-printing-label", { class: "ir-print-extra-services__date", label: "", content: hooks(service.end_date).format('dddd, DD MMM YYYY') }))), ")")))), h("div", { class: "ir-print-extra-services__price" }, formatAmount(this.currency?.symbol, service?.price || 0))));
        }))));
    }
    static get style() { return IrPrintingExtraServiceStyle0; }
}, [1, "ir-printing-extra-service", {
        "extraServices": [16],
        "currency": [16],
        "invocableKeys": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-printing-extra-service", "ir-printing-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-printing-extra-service":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPrintingExtraService);
            }
            break;
        case "ir-printing-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPrintingExtraService as I, defineCustomElement as d };

//# sourceMappingURL=ir-printing-extra-service2.js.map