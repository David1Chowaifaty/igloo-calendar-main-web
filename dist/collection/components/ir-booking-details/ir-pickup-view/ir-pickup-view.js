import calendar_data from "../../../stores/calendar-data";
import locales from "../../../stores/locales.store";
import { AgentsService } from "../../../services/agents/agents.service";
import { Fragment, Host, h } from "@stencil/core";
import { _formatTime, isAgentMode } from "../functions";
import moment from "moment";
export class IrPickupView {
    agentsService = new AgentsService();
    booking;
    agent;
    resolvedAgent;
    async componentWillLoad() {
        if (this.agent) {
            this.resolvedAgent = this.agent;
        }
        else if (this.booking?.agent) {
            this.resolvedAgent = await this.agentsService.getExposedAgent({ id: this.booking.agent.id });
        }
    }
    render() {
        if (!calendar_data.pickup_service.is_enabled || !this.booking.is_editable) {
            return null;
        }
        const { pickup_info } = this.booking;
        const isAgent = isAgentMode(this.resolvedAgent);
        return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales.entries.Lcz_Pickup), h("wa-tooltip", { for: "pickup" }, pickup_info ? 'Edit' : 'Add', " pickup"), h("ir-custom-button", { slot: "header-actions", id: "pickup", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "edit", style: { fontSize: '1rem' } })), pickup_info ? (h(Fragment, null, isAgent && (h("p", { class: `service-group__label ${pickup_info.agent ? '--agent' : ''}` }, h("span", null, "Bill to"), pickup_info.agent ? pickup_info.agent.name : 'Guest')), h("div", { class: `pickup-body${isAgent ? (pickup_info.agent ? ' pickup-body--agent' : ' pickup-body--guest') : ''}` }, h("div", { class: "pickup-row pickup-row--header" }, h("span", { class: "pickup-datetime" }, moment(pickup_info.date, 'YYYY-MM-DD').format('MMM DD, YYYY'), pickup_info.hour && pickup_info.minute && h("span", { class: "pickup-time" }, " \u00B7 ", _formatTime(pickup_info.hour.toString(), pickup_info.minute.toString()))), h("strong", { class: "pickup-price" }, pickup_info.currency.symbol, pickup_info.total)), h("dl", { class: "pickup-dl" }, h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_FlightDetails), h("dd", null, pickup_info.details)), h("div", { class: "pickup-dl__row" }, h("dt", null, "Vehicle"), h("dd", null, pickup_info.selected_option.vehicle.description)), h("div", { class: "pickup-dl__row" }, h("dt", null, locales.entries.Lcz_NbrOfVehicles), h("dd", null, pickup_info.nbr_of_units))), (calendar_data.pickup_service.pickup_instruction?.description || calendar_data.pickup_service.pickup_cancelation_prepayment?.description) && (h("p", { class: "pickup-note" }, calendar_data.pickup_service.pickup_instruction?.description, calendar_data.pickup_service.pickup_cancelation_prepayment?.description))))) : (h("ir-empty-state", null)))));
    }
    static get is() { return "ir-pickup-view"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-pickup-view.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-pickup-view.css"]
        };
    }
    static get properties() {
        return {
            "booking": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Booking",
                    "resolved": "Booking",
                    "references": {
                        "Booking": {
                            "location": "import",
                            "path": "@/models/booking.dto",
                            "id": "src/models/booking.dto.ts::Booking"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "resolvedAgent": {}
        };
    }
}
//# sourceMappingURL=ir-pickup-view.js.map
