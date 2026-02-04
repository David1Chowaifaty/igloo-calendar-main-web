import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-label2.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = /*@__PURE__*/ proxyCustomElement(class IrOtaService extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    service;
    render() {
        return (h("div", { key: 'dcadf8a0c953c4522f38b6cd7545aa2a770aafc1', class: "p-1" }, h("div", { key: 'e845a87cf1cca8b3a5731a3820086e98b853c12b', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '71da46d45b57b6dd890fb4ddf6d5a6a6e9f9c9b2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c922a7a61e40e72270900ad787342afa10cf9cc2' }, this.service.name), h("span", { key: 'f0704850230762c458b4c34b12248f1dedc47365', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '4d1ae6ec3273dfa6f71a7bbe2a34378129c98882', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'becf4f9b8415d28830e0ec9d41ceb637707b33aa' }, this.service.total_price)), h("div", { key: '8df20586351dcb2e0e89a225f560c4fc1c8d9c11' }, h("ir-label", { key: 'd7027559700b8f38bb52c6e692258d3762ba7c68', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '6e3569f86f62ba0dbe55391ddf92705b9e1d39a3', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
    }
    static get style() { return IrOtaServiceStyle0; }
}, [2, "ir-ota-service", {
        "service": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ota-service", "ir-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ota-service":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrOtaService);
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrOtaService as I, defineCustomElement as d };

//# sourceMappingURL=ir-ota-service2.js.map