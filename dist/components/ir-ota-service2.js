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
        return (h("div", { key: '2dcbede52e597441453dc77d98670086ddafa2ee', class: "p-1" }, h("div", { key: 'c50ab0e452389e4afc45e03db5bb35bb58edf8f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '06c7d45b46dfcb74cfd1d6b91f94e83b80e0960a', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'fc1330294eb581e01f8563a0d3d5de3f2ca51669' }, this.service.name), h("span", { key: 'e5f6a472295aa6727c4f0bf20bf4379724a74117', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'c187169930c933e5f28beea9c93b29d3c11bb566', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '986bab3ca8dc5e0cf8f35e4c49cab5479337d07a' }, this.service.total_price)), h("div", { key: 'c945e5ce915f36f21a8ee795d83d6766d44ed122' }, h("ir-label", { key: 'c11717c11c82ad766220bc0c79b873138f281836', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'abdbbf3607e3f88609a46b167742f7fdaed406ca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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