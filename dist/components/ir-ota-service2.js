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
        return (h("div", { key: 'bf79c3f6292ac50da4ce32f39d389bf428261871', class: "p-1" }, h("div", { key: '0429e56fff27f4a6772c7d13be1436dc9c15ba67', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'ad8b7de7ab8a9573929eefccc5d25ae9a4f468ab', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e233badcd2e34ca80a31b09c99feebcdb09317e2' }, this.service.name), h("span", { key: '7b07525c485c0fb7735c024370ee8e58487ebcd9', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '88d2aa58cd8f4161ef24698caa076546c517c5d9', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '45c0de7dfde53b806ee4273e1173ed9d7e356cb5' }, this.service.total_price)), h("div", { key: 'b9b650b17b501f8ee88f7ac1e51c06a1e57784ae' }, h("ir-label", { key: 'ecb0696822bd5d1d8bc008a9bd2a634e2f6e2f2f', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'a55875b2547f15324cdd6095851ee4edea812b4c', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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