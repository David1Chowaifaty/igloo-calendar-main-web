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
        return (h("div", { key: '4fecb34a60bbbff92ed6c50d2992843901d2fe3c', class: "p-1" }, h("div", { key: '45e5660d971941e79de651d0ac175f815d1b94f3', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'b6b1334cee69b160ec66c644c693aaa945e20c25', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '9410ff43f6b4f72c232588cd1a60e5397f5d292d' }, this.service.name), h("span", { key: '039da441143e53c5b7e57db7bb1372a877fa5b1c', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'd0b443bf5032edb7e1a44c8f5cfcd5229892281c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '14e62a13be326c77b3d839736ba4b0e819c5b609' }, this.service.total_price)), h("div", { key: 'e6b35d31f31c238c320058876e5a0784efb87625' }, h("ir-label", { key: '59337a595df93c90a9585d1cec2a3a3bbdcbf90b', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '5da21e858d1aef4e5075d123048411eb2c18b0ea', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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