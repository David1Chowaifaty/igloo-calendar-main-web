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
        return (h("div", { key: '341752847ca846bffc32683dae12a50f6489a0b5', class: "p-1" }, h("div", { key: 'a4d15471da8d950565bee29148d17c27d992a100', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '4aa316da60f31eba3ba74eacfbc1f9fc6d65d38f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'bf72054de97ce5396c6a59ceb37e4ba9bec1e5be' }, this.service.name), h("span", { key: 'ec77baa3df9b702c8384918bdff7f7309551f679', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '5fd6c2d388709731b38359d17a382eba88a4f6ed', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'b27caa0ec954ea25b77981c55e83515b580cbb6c' }, this.service.total_price)), h("div", { key: 'ce896f4a30ce48e89f59902489067db8119b9894' }, h("ir-label", { key: 'b94ca80286df5ba2cfdbe9b4d94e38f09de507fc', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '5c7d634024902f7eb96fe6b58192735136b4c6b9', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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