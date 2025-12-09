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
        return (h("div", { key: 'be3892df14092a60cdfc377235445ef846db54f0', class: "p-1" }, h("div", { key: '8d95b5d8078d7232d0b51afdd103549fa94f6100', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'fd8b68da7a782406fd388179eebde215f681f403', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e1316bcacf0dd9c364273b09a8c1c021d93b7b4f' }, this.service.name), h("span", { key: 'f61226b5f4a87d0c48c7983de2aa2dfb11b24e8c', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'b132fba53a5681d992054e109eec7eda96fcbd26', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '64ce65fddb8e16ea1af322d9aa331d459726d09e' }, this.service.total_price)), h("div", { key: 'c17290e741bb4da7a9e1ff9acbd8ce6d2e4bf798' }, h("ir-label", { key: '6b0503bd1c7ddd7c93142ae10ced3e9f4a6446ca', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'a71b00b299aeefc122b9bb04dc0e7321f36900f1', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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