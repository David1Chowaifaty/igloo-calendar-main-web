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
        return (h("div", { key: '1d96c4e42a07bf2e2592f7a2270642b49ddc016a', class: "p-1" }, h("div", { key: '3681618ae396770e824c4ef7c85754b311b4e861', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '5b0328b671b539940680a4ba541285295317f9fb', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e356b745cf9b4216124d507a5b65a2c511a442bf' }, this.service.name), h("span", { key: 'fb931c47116d8ea6d76475bba0b6bb0594073ba1', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '605690e92aa1c5bb9a23ffc0f4fc8e044269c85d', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'e74975d52c0b6d7e33d777d552946f5c0afdb96f' }, this.service.total_price)), h("div", { key: '9bb73bc0cab02f8d4b11f8cb8c9d64f160a6fe2b' }, h("ir-label", { key: '79444a89f63753b9553e8a72f4a0e896b83ec85f', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '034a75f316848ef5c6c04bd1b3662643375adfc8', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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