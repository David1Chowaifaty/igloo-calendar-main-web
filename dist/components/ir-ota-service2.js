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
        return (h("div", { key: '9625aeba8b180e1f4fdad5eb242ec2c857f4c09a', class: "p-1" }, h("div", { key: '9f1df8ca749aaab8f847fc894cb2b011eaa38e6a', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '770be3809fff93e8b6abbe751b29f6ffca3b03ec', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '26cde1a9c4b368cd676148bbaa0a7e4792c0c7ff' }, this.service.name), h("span", { key: '5bd22662014764b6cbf79a4425487f40e34a1b2d', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f1f0000126b01d0318e9ea29208c069668c8f50a', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: 'f340dfbdd64ee5f2649683dbb829221d31a79777' }, this.service.total_price)), h("div", { key: 'ab6af8c47c17ea65a4bbd9c16e7ffcf1b51baf41' }, h("ir-label", { key: '150cc10fbac5ab7e76a5fd6f43c1a3d48dfc1aeb', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: 'c5401a1f3284639eb9155f3141067f97c7c30c38', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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