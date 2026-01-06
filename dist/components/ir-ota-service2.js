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
        return (h("div", { key: '4ef42ab6718aa422a1681dfb190a2a5c32d4ea54', class: "p-1" }, h("div", { key: 'c51201201102b82c5ca5018031829bab00be4f4f', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'd6c529a0f4475fc211ea78d422457c54e74020e2', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '78617facfe36e626722d146144575cbbb6aab15a' }, this.service.name), h("span", { key: '60179615f5b2a07325b3cf11eeb1f72d9915b42e', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f1a9c1deebd135c6e96a44409d6b85e51a93540f', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'da3859495c3fa495dee325a7d922a6f1ad22dd6f' }, this.service.total_price)), h("div", { key: 'ced37fa728b6690396b0c27c74e09bacae161370' }, h("ir-label", { key: '10ee1eabc4d5b9b60d70e733eb2fba648b2c07a9', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '38c7a49e30bea4b1c2fd79142c8fa39fc57a28cf', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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