import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-label2.js';

const irOtaServiceCss = ".sc-ir-ota-service-h{display:block}.extra-channel-service-container.sc-ir-ota-service{display:flex;align-items:center;justify-content:space-between;gap:0.5rem}.extra-channel-service-container.sc-ir-ota-service *.sc-ir-ota-service{padding:0;margin:0;box-sizing:border-box}.extra-channel-service-actions.sc-ir-ota-service{display:flex;align-items:center;gap:0.5rem}.extra-channel-service-conditional-date.sc-ir-ota-service{margin-top:0.5rem}";
const IrOtaServiceStyle0 = irOtaServiceCss;

const IrOtaService = /*@__PURE__*/ proxyCustomElement(class IrOtaService extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h("div", { key: '5d331ac9ec1f043a91a6be2f632cc12ec000a58a', class: "p-1" }, h("div", { key: '3bc7484e049e50e4372da29f92ef3af7a64c3ec9', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '8846350369b2ae4b809b3c8fff28be5d93c4e886', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: 'e77e56abf18cc0f7f25b4d96a11d5f7b95265101' }, this.service.name), h("span", { key: 'eb90b5a6ff76a6e414aac9eead00a8f8e3244012', class: "p-0 m-0" }, (_b = (_a = this.service) === null || _a === void 0 ? void 0 : _a.persons) === null || _b === void 0 ? void 0 :
            _b.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'cf1cc0e8fd762b97908fe6940fd33f1faf38294a', class: "p-0 m-0" }, (_d = (_c = this.service) === null || _c === void 0 ? void 0 : _c.nights) === null || _d === void 0 ? void 0 :
            _d.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'fc5644c66a8cd5d8c67dad15bc5f83fe93232531' }, this.service.total_price)), h("div", { key: '9bc2e3842622396342bf6231e40dc28c54582918' }, h("ir-label", { key: '5a28d6bd557ae3e00e6b514e7fb9e90ae0bb0035', containerStyle: { margin: '0', padding: '0' }, content: (_e = this.service) === null || _e === void 0 ? void 0 : _e.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'd2d772c4bb63f2c75c8a60dbb3fcab3e1b85852e', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: (_g = (_f = this.service) === null || _f === void 0 ? void 0 : _f.price_per_unit) === null || _g === void 0 ? void 0 : _g.toString(), labelText: `Price per unit:` }))));
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