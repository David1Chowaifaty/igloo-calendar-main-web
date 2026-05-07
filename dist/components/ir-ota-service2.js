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
        return (h("div", { key: 'f88f935775506c609ce26971220180e442ce0501', class: "p-1" }, h("div", { key: 'bd1dd733dc675c3d78f8d7314a8d7d690ee982d5', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '8989a953c4ad139b5584db927b9b742e8ae90239', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '23ff99c49452ee55b54496df41012c0d9a079f8e' }, this.service.name), h("span", { key: '6cab4ce3f8100798e9302de4480de46f6bf3f4d3', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'bc79905c5e2ab99e0b5ec94c14818ebd4d44248e', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'a749e6d551c2a41d047ca6adc1ded5bf6b680164' }, this.service.total_price)), h("div", { key: 'f6e85c2abe26c69dcdbfa427618732491404c328' }, h("ir-label", { key: 'c768818c5aafca39aaf5fcdccc30715eda6f4da7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '98430c9d80acb020181f438786fd1474976031a3', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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