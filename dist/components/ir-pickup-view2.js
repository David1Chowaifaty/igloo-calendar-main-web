import { proxyCustomElement, HTMLElement, h, Host, Fragment } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { l as locales } from './locales.store.js';
import { _ as _formatTime, i as isAgentMode } from './functions.js';
import { h as hooks } from './moment.js';
import { m as mapClTxToFolioRow } from './types3.js';
import { d as defineCustomElement$3 } from './ir-cl-status-tag2.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-empty-state2.js';

const irPickupViewCss = ".sc-ir-pickup-view-h{display:block}.pickup-body.sc-ir-pickup-view{display:flex;flex-direction:column;gap:0.5rem}.pickup-body--guest.sc-ir-pickup-view{border-left:3px solid var(--wa-color-neutral-300, #d4d4d8);padding-left:0.625rem}.pickup-body--agent.sc-ir-pickup-view{border-left:3px solid var(--wa-color-brand-fill-loud, #60a5fa);padding-left:0.625rem}.service-group__label.sc-ir-pickup-view{display:flex;align-items:center;gap:0.4rem;margin:0 0 0.5rem;font-size:0.75rem;font-weight:700;letter-spacing:0.06em;color:var(--wa-color-neutral-500, #71717a)}.service-group__label.--agent.sc-ir-pickup-view{color:var(--wa-color-primary-600, #2563eb)}.pickup-row--header.sc-ir-pickup-view{display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem}.pickup-datetime.sc-ir-pickup-view{font-size:0.925rem;font-weight:600;color:var(--wa-color-neutral-900, #18181b)}.pickup-time.sc-ir-pickup-view{font-weight:400;color:var(--wa-color-neutral-600, #52525b)}.pickup-price.sc-ir-pickup-view{color:var(--wa-color-neutral-900, #18181b);white-space:nowrap}.pickup-dl.sc-ir-pickup-view{margin:0;display:flex;flex-direction:column;gap:0.2rem}.pickup-dl__row.sc-ir-pickup-view{display:flex;gap:0.35rem;font-size:0.875rem;flex-wrap:wrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view{font-weight:600;color:var(--wa-color-neutral-600, #52525b);white-space:nowrap}.pickup-dl__row.sc-ir-pickup-view dt.sc-ir-pickup-view::after{content:':'}.pickup-dl__row.sc-ir-pickup-view dd.sc-ir-pickup-view{margin:0;color:var(--wa-color-neutral-800, #27272a)}.pickup-note.sc-ir-pickup-view{margin:0;font-size:0.825rem;color:var(--wa-color-neutral-500, #71717a);line-height:1.4;border-top:1px solid var(--wa-color-neutral-100, #f4f4f5);padding-top:0.4rem}";
const IrPickupViewStyle0 = irPickupViewCss;

const IrPickupView = /*@__PURE__*/ proxyCustomElement(class IrPickupView extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    booking;
    agent;
    clTransactions = [];
    get matchedTx() {
        const sysId = this.booking.pickup_info?.system_id;
        if (sysId == null)
            return null;
        return this.clTransactions.find(tx => tx.REL_ENTITY_KEY === sysId) ?? null;
    }
    render() {
        if (!calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        const { pickup_info } = this.booking;
        const isAgent = isAgentMode(this.agent);
        const tx = this.matchedTx;
        const statusTag = tx ? (h("ir-cl-status-tag", { style: { marginInlineStart: '0.5rem' }, transaction: { _rowId: '', ...mapClTxToFolioRow(tx), balance: 0 }, size: "extra-small" })) : null;
        return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales.entries.Lcz_Pickup), h("wa-tooltip", { for: "pickup" }, pickup_info ? 'Edit' : 'Add', " pickup"), h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), pickup_info ? (h(Fragment, null, isAgent && (h("p", { class: `service-group__label${pickup_info.agent ? ' --agent' : ''}` }, pickup_info.agent ? pickup_info.agent.name : 'Guest', h("span", null, "Folio"))), h("div", { class: `pickup-body${isAgent ? (pickup_info.agent ? ' pickup-body--agent' : ' pickup-body--guest') : ''}` }, h("div", { class: "pickup-row pickup-row--header" }, h("span", { class: "pickup-datetime" }, hooks(pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'), pickup_info.hour && pickup_info.minute && h("span", { class: "pickup-time" }, " \u00B7 ", _formatTime(pickup_info.hour.toString(), pickup_info.minute.toString())), statusTag), h("strong", { class: "pickup-price" }, pickup_info.currency.symbol, pickup_info.total)), h("dl", { class: "pickup-dl" }, h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_FlightDetails), h("dd", null, pickup_info.details)), h("div", { class: "pickup-dl__row" }, h("dt", null, "Vehicle"), h("dd", null, pickup_info.selected_option.vehicle.description)), h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_NbrOfVehicles), h("dd", null, pickup_info.nbr_of_units))), (calendar_data.pickup_service.pickup_instruction?.description || calendar_data.pickup_service.pickup_cancelation_prepayment?.description) && (h("p", { class: "pickup-note" }, calendar_data.pickup_service.pickup_instruction?.description, calendar_data.pickup_service.pickup_cancelation_prepayment?.description))))) : (h("ir-empty-state", { showIcon: false })))));
    }
    static get style() { return IrPickupViewStyle0; }
}, [2, "ir-pickup-view", {
        "booking": [16],
        "agent": [16],
        "clTransactions": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-pickup-view", "ir-cl-status-tag", "ir-custom-button", "ir-empty-state"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-pickup-view":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPickupView);
            }
            break;
        case "ir-cl-status-tag":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPickupView as I, defineCustomElement as d };

//# sourceMappingURL=ir-pickup-view2.js.map