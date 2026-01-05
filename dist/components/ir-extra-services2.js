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
        return (h(Host, { key: '15bd615a8f983c6b24a10b21665b57b35fcf7d68' }, h("wa-card", { key: '3419e1f44520424382f6a32c9427c3e100f2827c' }, h("p", { key: '11acaa222250b182a5404ded9381d3e13793f950', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: 'de38ecc295ddfa142a1a410fa60caf8a5f2e3275', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: 'ca3ef53225802dc1030aae80e41225578f35792d', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '40a060127e84beee6d024e38e28fb3effd710427', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && h("ir-empty-state", { key: 'c5c80ab3ce0160faec75821e9e6c7426d1339214' }), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
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