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
        return (h("div", { key: '3cb1ffb38208585371dcfe973a43a8f2722ccd1c', class: "p-1" }, h("div", { key: '30499b497db746f4937cfde6f971e7c02a1a09e8', class: "m-0 p-0 d-flex align-items-center justify-content-between" }, h("p", { key: '5c8d3b7cefccd280db91215f79a03004c25387ec', class: "m-0 d-flex align-items-center", style: { gap: '0.5rem' } }, h("b", { key: '4341205e4b19385d5f37073e725ddf16477228eb' }, this.service.name), h("span", { key: '258f1c84b9ec7b01456f5b9ae4db4b352e9b7cc5', class: "p-0 m-0" }, this.service?.persons?.toString(), " ", this.service.persons > 1 ? 'persons' : 'person'), h("span", { key: '5be3b5fb8518caa8872bc34d8796f12787839651', class: "p-0 m-0" }, this.service?.nights?.toString(), " ", this.service.nights > 1 ? 'nights' : 'night')), h("b", { key: '04d12d599a89d933122213935fd74733c6dcfb4a' }, this.service.total_price)), h("div", { key: 'dd10e4bde3b6c26437f9cd3cdca18c107b41715f' }, h("ir-label", { key: 'af2ad1c536c18900dd383b9885b306e1a72fe4df', containerStyle: { margin: '0', padding: '0' }, content: this.service?.price_mode, labelText: `Price mode:` }), h("ir-label", { key: '3fafbf6bdb3ae09cd41fd572f9d261308d6b76f4', containerStyle: { margin: '0', padding: '0' }, class: "m-0 p-0", content: this.service?.price_per_unit?.toString(), labelText: `Price per unit:` }))));
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