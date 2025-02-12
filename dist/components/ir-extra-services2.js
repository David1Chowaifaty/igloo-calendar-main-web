import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-date-view2.js';
import { d as defineCustomElement$3 } from './ir-extra-service2.js';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './ir-modal2.js';

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}";
const IrExtraServicesStyle0 = irExtraServicesCss;

const IrExtraServices = /*@__PURE__*/ proxyCustomElement(class IrExtraServices extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.booking = undefined;
    }
    render() {
        var _a;
        return (h(Host, { key: '2c13c5e0d17c70776fb892ed7239753c451e2e39', class: 'card p-0 ' }, (_a = this.booking.extra_services) === null || _a === void 0 ? void 0 : _a.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("hr", { class: "mr-2 ml-2 my-0 p-0" }))))));
    }
    static get style() { return IrExtraServicesStyle0; }
}, [2, "ir-extra-services", {
        "booking": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-services", "ir-button", "ir-date-view", "ir-extra-service", "ir-icons", "ir-modal"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServices);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrExtraServices as I, defineCustomElement as d };

//# sourceMappingURL=ir-extra-services2.js.map