import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './ir-label2.js';
import { d as defineCustomElement$2 } from './ir-ota-service2.js';

const irOtaServicesCss = ".sc-ir-ota-services-h{display:block}.bottom-border.sc-ir-ota-services{border-bottom:1px solid rgba(0, 0, 0, 0.1)}";

const IrOtaServices$1 = /*@__PURE__*/ proxyCustomElement(class IrOtaServices extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.services = [];
    }
    render() {
        var _a, _b;
        if (!this.services || ((_a = this.services) === null || _a === void 0 ? void 0 : _a.length) === 0) {
            return null;
        }
        return (h(Host, null, h("div", { class: "font-size-large d-flex justify-content-between align-items-center mb-1" }, h("p", { class: 'font-size-large p-0 m-0 ' }, "Channel Services")), h("div", { class: "card" }, (_b = this.services) === null || _b === void 0 ? void 0 : _b.map((service, idx) => (h(Fragment, null, h("ir-ota-service", { service: service }), idx !== this.services.length - 1 && h("hr", { class: "mr-2 ml-2 my-0 p-0" })))))));
    }
    static get style() { return irOtaServicesCss; }
}, [2, "ir-ota-services", {
        "services": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-ota-services", "ir-label", "ir-ota-service"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-ota-services":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrOtaServices$1);
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-ota-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrOtaServices = IrOtaServices$1;
const defineCustomElement = defineCustomElement$1;

export { IrOtaServices, defineCustomElement };
//# sourceMappingURL=ir-ota-services.js.map

//# sourceMappingURL=ir-ota-services.js.map