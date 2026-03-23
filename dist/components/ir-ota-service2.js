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
        return (h("div", { key: '129479d1d192fef53cdd5f7d0a79a7b875e64ddd', class: "p-1" }, h("div", { key: '1777da3d31975a6189da892602cdb1f4272f1b87', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '2497d0dce87f16b7218ff7fc52162c168c944c88', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'eaf54ae113afeecd690e34af47eabda396fc683a' }, this.service.name), h("span", { key: '32246bacbbf7cf831c3c37c1d99b0920eae10397', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '0fb0c8b9c12ba1109406926cd4753490371a3560', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '38f912944fd767616ce881aba0de39ed2d8f6f53' }, this.service.total_price)), h("div", { key: '3033df9315db83e4ca5ce52d46c2971c217e89b8' }, h("ir-label", { key: '0ee458e5f4176c12b34334f35df5beb879196ca8', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '3603c372681e9537fa722765d49397c15d6bf6c6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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