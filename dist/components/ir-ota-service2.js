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
        return (h("div", { key: 'e6e8563dec0ed71b68642e2a731daa0962c0f774', class: "p-1" }, h("div", { key: '75b0e18e3c9417298b1237be82c79190898b8ae8', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '31bf7df0c1a7ad225747882f77a866770c75e081', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '86d902d23ae943c3422666a38a14b33b016d878d' }, this.service.name), h("span", { key: '814ab94dd3f8cf0be9cc2548d1d67c08e35d829f', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'ca876eccd4e00390e6dc93cf57d1c803c8cb2954', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '20881fabee3d67d3d52e1be35f5a7c102ceffe3d' }, this.service.total_price)), h("div", { key: 'a3db1ef67b38f464ed2ac28eca0a03b312a5596c' }, h("ir-label", { key: 'e704fc71e256390e3ad5327845f101abc003b587', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'f636ea4d54813af6a166b0cd58cddce7175ac0ca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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