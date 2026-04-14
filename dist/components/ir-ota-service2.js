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
        return (h("div", { key: 'f0a5c402e07f377ce47ab0219620e5913575cc55', class: "p-1" }, h("div", { key: '4548293e57702ec7eea49a694b4e9474021796f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '12f4039081c9c523efacf243d19ea5d6a56bb643', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '085843020482bbbcbe787dd42bf72c7325c2ac22' }, this.service.name), h("span", { key: 'b92b8a7b34b7adab6e18780f5b703df773421665', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f9b63bd5b932a342df45de3bd47cc9bd28540fd5', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '87a1b2d64f2f871973b9861b69139e3a1b7d930d' }, this.service.total_price)), h("div", { key: '36a6f701cdbf3300aec3b027e8d674b078d0aa27' }, h("ir-label", { key: 'f1024a19a797aa964c5c78ad3ba5556d1bd00c43', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '7b2d66ad11d83389a53220243c7aed39c5f8b3a6', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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