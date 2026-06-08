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
        return (h("div", { key: 'f8cd268332a8d467209cbc7b68ecdebd10eea83a', class: "p-1" }, h("div", { key: '28a07b7abfb5f68efc1d6a52182b762963bce363', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: 'e3d31bfc95889d2941b5b6046a867547a03c9b93', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'bea65152e433da2abf9f08730cf35249d1b120e9' }, this.service.name), h("span", { key: '952b75ed29bff3e6a512a770ac2f353e5ca5fb7f', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '186b2f589e857d46993bb7dac4a609dc25c749ca', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '2ed5e9658efb6d1da7804e8deda1be22303258a7' }, this.service.total_price)), h("div", { key: '48b88bde8e1b27f6685a046cafb4ed9e884d6091' }, h("ir-label", { key: '9bf1c1ffabf107e6fb4212430796f9b48c45e226', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '6a61b060c8b3122608c408b4849593e0dbdabbca', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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