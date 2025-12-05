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
        return (h("div", { key: '79f060da49cdaf4482ba78f5f65729536de1f2b7', class: "p-1" }, h("div", { key: '850c08082821a9df2c0b841cebdd489c0eaec7c6', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '89de1b8c728829bcf8e7a4d9bb7a13a83387f845', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'c14aa6ef1eb3bb328e6c56ee7838874fb9174faf' }, this.service.name), h("span", { key: 'eee48004c3a39dda6f05d2cf588aad956569379e', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'c9b26663e8ba6ecf4d390eb915c19d767bcc781d', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'c46c221470f41865bc43c335689d3a7674e8018a' }, this.service.total_price)), h("div", { key: '82a13493cc3bcc18bbe6f9df3f379f282da58f04' }, h("ir-label", { key: '76054f72025af8c3c8690e2831302418a91b9688', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '5c3a259cad4d2815d5c1be0743afdd8e575e05d2', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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