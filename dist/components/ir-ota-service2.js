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
        return (h("div", { key: 'b5ec77880b95532dc8389e558dd0b04efc36a975', class: "p-1" }, h("div", { key: '9bb0f8e99da1819519a37b6b869a557c9d33950c', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '7389c2fdc5f6ae2c861f97a5de3a5c9bbb45f52a', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '1d628a5d5ea70967e7414382b60755024afcd97b' }, this.service.name), h("span", { key: 'cc1dfb8933386312214651dad639a70346a91286', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '3b79075b2cbbeb3e1a29b4d77fe235093e3cb33c', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '84ce6918b942909c297b8c364a607d8927e05c9e' }, this.service.total_price)), h("div", { key: 'c162e49df6b86a1cd7a52414f01812a3b9edae5a' }, h("ir-label", { key: '62765ecb8ffb1c44b842f4272fca9d7819693cf7', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '7a31e5ed02aaea974143977894d44a20890b1067', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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