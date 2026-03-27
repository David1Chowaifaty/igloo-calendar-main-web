import { proxyCustomElement, HTMLElement, h, Fragment, Host } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { i as isAgentMode } from './functions.js';
import { d as defineCustomElement$6 } from './ir-assignment-toggle-dialog2.js';
import { d as defineCustomElement$5 } from './ir-custom-button2.js';
import { d as defineCustomElement$4 } from './ir-date-view2.js';
import { d as defineCustomElement$3 } from './ir-dialog2.js';
import { d as defineCustomElement$2 } from './ir-empty-state2.js';
import { d as defineCustomElement$1 } from './ir-extra-service2.js';

const irExtraServicesCss = ".sc-ir-extra-services-h{display:block}.service-group.sc-ir-extra-services{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.service-group--guest.sc-ir-extra-services{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-extra-services{border-left-color:var(--wa-color-primary-500, #3b82f6)}.service-group__label.sc-ir-extra-services{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-extra-services{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-extra-services{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-extra-services .service-group__dot.sc-ir-extra-services{background-color:var(--wa-color-primary-500, #3b82f6)}.service-group__empty.sc-ir-extra-services{margin:0;padding:0.375rem 0;font-size:0.85rem;color:var(--wa-color-neutral-400, #a1a1aa);font-style:italic}";
const IrExtraServicesStyle0 = irExtraServicesCss;

const IrExtraServices = /*@__PURE__*/ proxyCustomElement(class IrExtraServices extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    booking;
    language;
    svcCategories;
    isAgentMode = false;
    componentWillLoad() {
        if (this.booking) {
            this.isAgentMode = isAgentMode(this.booking);
        }
    }
    handleBookingChange() {
        this.isAgentMode = isAgentMode(this.booking);
    }
    renderServiceList(services) {
        return services.map((service, index) => (h(Fragment, null, h("ir-extra-service", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service }), index !== services.length - 1 && h("wa-divider", null))));
    }
    render() {
        const services = this.booking.extra_services ?? [];
        if (this.isAgentMode) {
            const guestServices = services.filter(s => s.agent === null || s.agent === undefined);
            const agentServices = services.filter(s => s.agent !== null && s.agent !== undefined);
            const agentName = this.booking.agent?.name ?? 'Agent';
            return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 ? (h("ir-empty-state", null)) : (h(Fragment, null, h("p", { class: "service-group__label" }, "Guest", h("span", null, "Folio")), h("div", { class: "service-group service-group--guest" }, h("div", { class: "service-group__body" }, guestServices.length === 0 ? h("p", { class: "service-group__empty" }, "No guest services added") : this.renderServiceList(guestServices))), h("wa-divider", null), h("p", { class: "service-group__label --agent" }, agentName, h("span", null, "Folio")), h("div", { class: "service-group service-group--agent" }, h("div", { class: "service-group__body" }, agentServices.length === 0 ? h("p", { class: "service-group__empty" }, "No agent services added") : this.renderServiceList(agentServices))))))));
        }
        return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 && h("ir-empty-state", null), this.renderServiceList(services))));
    }
    static get watchers() { return {
        "booking": ["handleBookingChange"]
    }; }
    static get style() { return IrExtraServicesStyle0; }
}, [2, "ir-extra-services", {
        "booking": [16],
        "language": [1],
        "svcCategories": [16]
    }, undefined, {
        "booking": ["handleBookingChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-extra-services", "ir-assignment-toggle-dialog", "ir-custom-button", "ir-date-view", "ir-dialog", "ir-empty-state", "ir-extra-service"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-extra-services":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrExtraServices);
            }
            break;
        case "ir-assignment-toggle-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
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