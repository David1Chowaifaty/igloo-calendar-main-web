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
        return (h(Host, { key: '742be7aee3dcd215884b1f85ac6f6f8589c44a51' }, h("wa-card", { key: '34bb0bf51640a0e1e33d7255487bc064440d1a39' }, h("p", { key: '611b757654213c592475c948c353d3bc70fbdfce', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: 'cff42dd99e0e418f6d5b9ab4ef990fe7d4b1b0e2', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: 'bc2fce2917ef82705bd7bfb9f57c4ce2b8961419', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: '3f116f4d1110c1743d31e736c5f2612c3893f6ed', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && h("ir-empty-state", { key: '544b058420d651f9eabc58c1124b619105a3ff05' }), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
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