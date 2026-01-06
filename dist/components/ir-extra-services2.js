import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-view2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-empty-state2.js';
import { d as defineCustomElement$1 } from './ir-extra-service2.js';

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}";
const IrExtraServicesStyle0 = irExtraServicesCss;

const IrExtraServices = /*@__PURE__*/ proxyCustomElement(class IrExtraServices extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    booking;
    render() {
        return (h(Host, { key: '44722d4f9ad4098ef4c3156a91d33803093a9db2' }, h("wa-card", { key: 'cc784fc9789af3ea94da0ba8800c3f91ed1f46cd' }, h("p", { key: '860b54279bc03750f2a3ef9502db184bbc095357', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: '61876e77ac9c9a3a844e52effb09cd83db14611c', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: 'cfe0d04133911b81e09170266f7663f1ff34686e', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'deeae04807a6d4cdf2b961c3f6684d4adb6c147b', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && h("ir-empty-state", { key: '634d54a186a0ff25d1867b16570d3c12aa729442' }), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
    }
    static get style() { return IrExtraServicesStyle0; }
}, [2, "ir-extra-services", {
        "booking": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-services", "ir-custom-button", "ir-date-view", "ir-dialog", "ir-empty-state", "ir-extra-service"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServices);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-extra-service":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrExtraServices as I, defineCustomElement as d };

//# sourceMappingURL=ir-extra-services2.js.map