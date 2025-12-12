import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$4 } from './ir-custom-button2.js';
import { d as defineCustomElement$3 } from './ir-date-view2.js';
import { d as defineCustomElement$2 } from './ir-dialog2.js';
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
        return (h(Host, { key: '5cfe6357f160ae767179e3e8427e73e1977632c1' }, h("wa-card", { key: '5839cbdccefda272aeb50795743a37607af4bca6' }, h("p", { key: '2eff6df672b2a6972ffc9679efc5a7957ff883b9', slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { key: 'ed45783509f2b434326fe49561c4b5ffedbbc725', for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { key: '1dba162268d18a3e7b257cb63cd1e848c3d130a5', slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { key: 'b223df1af262afd7940d29174e4db85705a8adee', name: "plus", style: { fontSize: '1rem' } })), (this.booking.extra_services ?? [])?.length === 0 && (h("div", { key: '953732be6633ca4a90e9c0c528c5032aa071667a', class: "text-center p-1" }, h("p", { key: '6901b1df790e527932383becf3b1387f8f831b98', class: "text-muted" }, "No extra service recorded yet"))), this.booking.extra_services?.map((service, index) => (h(Fragment, null, h("ir-extra-service", { bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== this.booking.extra_services.length - 1 && h("wa-divider", null)))))));
    }
    static get style() { return IrExtraServicesStyle0; }
}, [2, "ir-extra-services", {
        "booking": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-services", "ir-custom-button", "ir-date-view", "ir-dialog", "ir-extra-service"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServices);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-date-view":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-dialog":
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