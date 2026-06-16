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
        return (h("div", { key: '47823386465ac7015c0b7cb968c035e680b6419c', class: "p-1" }, h("div", { key: '827ea8697c925b3fc783bfe146d61f94c33f063a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'bc2f75bab958d9bbf1bf44cf6dcd355bb62c1023', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'a9b0708d0206f46ec7ac241d6dfe3ee09a9c43f1' }, this.service.name), h("span", { key: '34c27d504cf24fde9e4f4ee876f81fb81c1977fb', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'e5ae90a8b1c7b3c57ae879056e63a53de79fed4a', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '22e1d3c867239cb3b4af25f3bc0095d464b12ecc' }, this.service.total_price)), h("div", { key: 'fce185fcd3485c1c15f27e3616b259cb03b3f88e' }, h("ir-label", { key: 'fc774da22d327ee22cb4cf9990182242135135db', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '18d0a6a3d325859119970b60bace9735adb65ec5', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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