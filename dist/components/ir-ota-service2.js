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
        return (h("div", { key: '802241217d4609955528c3afcad98c37a7ed50f7', class: "p-1" }, h("div", { key: '27353e9cf19536a61b5d46458ee9cdfbc5f65156', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '218ea163ad610cecc5322ebe309ab7787e89b568', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e5d1127bdbc9912887df803ef7004d1137bb3764' }, this.service.name), h("span", { key: 'c0f4a19dc3b6465ec8ac9d422fd290b46b281f3a', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f6a78cfffc8a964b35689a26e8158350e5eb5afd', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '8337961f09ff913772d9b810353edc8f3c677673' }, this.service.total_price)), h("div", { key: '5196c349047cbde3fb6ca0ab9df74ef2eb68c085' }, h("ir-label", { key: '4db3d664123a4b10044c2553b307e2fa718f6679', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '80c0a39d6fb8e05196dd41a649de4d7adb2cc4e4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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