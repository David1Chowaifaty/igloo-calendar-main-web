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
        return (h("div", { key: '764d31e7b7d1e96409af39ea90d69e1aa737a300', class: "p-1" }, h("div", { key: 'd62288ccbc35a159074957bbddb967cf015dbaf6', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '715a18276b8e4ae76dd2daf75542a81261ea0bcd', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '82f925165355e74c7cc75ab3fa04c372f8d1b262' }, this.service.name), h("span", { key: '454f9c1f88200ecf26ed227941738e6f90f12841', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '547d120be801b6398a245e8aa345a8bac383480d', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'b98054a342d286d3ae4c744512c8ae5ff8b5dff9' }, this.service.total_price)), h("div", { key: '9a6ae67a40b0e336839a060252036918fcf05b82' }, h("ir-label", { key: '33d1b35ce22c403ff9da2d4a2602f47ff2b1d8a5', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '22475b141384d2b3ffb3732fc32dbd6e7f0194e4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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