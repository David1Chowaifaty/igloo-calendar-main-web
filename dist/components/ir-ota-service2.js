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
        return (h("div", { key: '37cbc0671103efb78897f84bebde380f480cc731', class: "p-1" }, h("div", { key: '5bfe0474194e1c284f399694d978b7e8ed107576', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '982535e40ba6ec946c607cd58ecca1904cae767f', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '4a6ed186a210e1593a076f63478190adfc8dbcf2' }, this.service.name), h("span", { key: '349db7374c0a3203712822f0f54b8c231ff30996', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: 'f43c554e823a122a6cbd408262cfc3b7f0c26c92', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '2cdafa10f1ad5b0093278714b7b6b9dc683c4ad6' }, this.service.total_price)), h("div", { key: '53982ca0b73ab7f4f13273c5ff3a88fdc6951871' }, h("ir-label", { key: 'a4afb38e8b3160666da52f3faa9c50b9944cfb48', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '15ef233507b35c25290449d12ea2b3b1a899496b', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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