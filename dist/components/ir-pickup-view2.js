import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { i as isAgentMode, _ as _formatTime } from './functions.js';
import { h as hooks } from './moment.js';
import { d as defineCustomElement$3 } from './ir-custom-button2.js';
import { d as defineCustomElement$2 } from './ir-empty-state2.js';
import { d as defineCustomElement$1 } from './ir-label2.js';

const irPickupViewCss = ".sc-ir-pickup-view-h{display:block}.pickup-info.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.75rem}.service-group.sc-ir-pickup-view{padding:0.125rem 0 0.25rem;border-left:3px solid transparent;padding-left:0.625rem}.service-group--guest.sc-ir-pickup-view{border-left-color:var(--wa-color-neutral-300, #d4d4d8)}.service-group--agent.sc-ir-pickup-view{border-left-color:var(--wa-color-primary-500, #3b82f6)}.service-group__label.sc-ir-pickup-view{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.75rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-pickup-view{color:var(--wa-color-primary-600, #2563eb)}.service-group__dot.sc-ir-pickup-view{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:var(--wa-color-neutral-400, #a1a1aa);flex-shrink:0}.service-group--agent.sc-ir-pickup-view .service-group__dot.sc-ir-pickup-view{background-color:var(--wa-color-primary-500, #3b82f6)}.pickup-info__summary.sc-ir-pickup-view{display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:space-between;align-items:center;color:#1f2a37}.pickup-info__datetime.sc-ir-pickup-view{font-weight:600;margin:0}.pickup-info__due.sc-ir-pickup-view{margin:0;color:#1f2a37}.pickup-info__details.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.3rem;color:#1f2a37}.pickup-info__line.sc-ir-pickup-view{margin:0;display:flex;flex-wrap:wrap;gap:0.25rem}.pickup-info__label.sc-ir-pickup-view{font-weight:600}.pickup-info__divider.sc-ir-pickup-view{opacity:0.4}.pickup-info__note.sc-ir-pickup-view{margin:0;color:#6b7280;font-size:0.875rem}@media (max-width: 600px){.pickup-info__summary.sc-ir-pickup-view{flex-direction:column;align-items:flex-start}}";
const IrPickupViewStyle0 = irPickupViewCss;

const IrPickupView = /*@__PURE__*/ proxyCustomElement(class IrPickupView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    booking;
    render() {
        if (!calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_Pickup), h("wa-tooltip", { for: "pickup" }, this.booking.pickup_info ? 'Edit' : 'Add', " pickup"), h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), this.booking.pickup_info ? (h(Fragment, null, isAgentMode(this.booking) && (h("p", { class: `service-group__label ${isAgentMode(this.booking) ? (this.booking?.pickup_info?.agent ? '--agent' : '') : ''}` }, h("span", null, "Bill to"), this.booking.pickup_info.agent ? this.booking.pickup_info.agent.name : 'Guest')), h("div", { class: `pickup-info${isAgentMode(this.booking) ? (this.booking.pickup_info.agent ? ' service-group service-group--agent' : ' service-group service-group--guest') : ''}` }, h("div", { class: "pickup-info__summary" }, h("div", null, h("p", { class: "pickup-info__datetime" }, hooks(this.booking.pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'), this.booking.pickup_info.hour && this.booking.pickup_info.minute && (h("span", null, " \u2022 ", _formatTime(this.booking.pickup_info.hour.toString(), this.booking.pickup_info.minute.toString()))))), h("p", { class: "pickup-info__due" }, h("strong", null, this.booking.pickup_info.currency.symbol, this.booking.pickup_info.total))), h("div", { class: "pickup-info__details" }, h("ir-label", { display: "inline", labelText: `${locales.entries.Lcz_FlightDetails}:`, content: this.booking.pickup_info.details }), h("p", { class: "pickup-info__line" }, h("span", { class: "pickup-info__label" }, "Vehicle:"), h("span", null, this.booking.pickup_info.selected_option.vehicle.description)), h("p", { class: "pickup-info__line" }, h("span", { class: "pickup-info__label" }, locales.entries.Lcz_NbrOfVehicles, ":"), h("strong", null, this.booking.pickup_info.nbr_of_units))), h("p", { class: "pickup-info__note" }, calendar_data.pickup_service.pickup_instruction.description, calendar_data.pickup_service.pickup_cancelation_prepayment.description)))) : (h("ir-empty-state", null)))));
    }
    static get style() { return IrPickupViewStyle0; }
}, [2, "ir-pickup-view", {
        "booking": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pickup-view", "ir-custom-button", "ir-empty-state", "ir-label"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPickupView);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPickupView as I, defineCustomElement as d };

//# sourceMappingURL=ir-pickup-view2.js.map