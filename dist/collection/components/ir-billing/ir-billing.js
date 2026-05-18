import { AgentsService } from "../../services/agents/agents.service";
import { Host, h } from "@stencil/core";
import { isAgentMode } from "../ir-booking-details/functions";
export class IrBilling {
    el;
    isAgentMode = false;
    agentsService = new AgentsService();
    booking;
    isAllServicesAgentOwned;
    agent;
    async handleBookingChange() {
        if (this.booking) {
            await this.resolveAgent();
            this.isAgentMode = isAgentMode(this.resolvedAgent);
        }
    }
    currentTab = 'agent';
    resolvedAgent;
    billingClose;
    async componentWillLoad() {
        if (this.booking) {
            await this.resolveAgent();
            this.isAgentMode = isAgentMode(this.resolvedAgent);
        }
    }
    componentDidLoad() {
        if (this.isAgentMode) {
            const tabGroup = this.el.querySelector('wa-tab-group');
            tabGroup?.show?.(this.currentTab);
        }
    }
    async resolveAgent() {
        if (this.agent) {
            this.resolvedAgent = this.agent;
        }
        else if (this.booking?.agent) {
            this.resolvedAgent = await this.agentsService.getExposedAgent({ id: this.booking.agent.id });
        }
    }
    render() {
        if (this.isAgentMode) {
            return (h(Host, null, h("wa-tab-group", { activation: "manual", "onwa-tab-show": e => {
                    this.currentTab = e.detail.name.toString();
                }, active: this.currentTab }, h("wa-tab", { panel: "guest", disabled: this.isAllServicesAgentOwned }, "Guest"), h("wa-tab", { panel: "agent" }, "Agent"), h("wa-tab-panel", { name: "guest" }, this.currentTab === 'guest' && h("ir-guest-billing", { booking: this.booking })), h("wa-tab-panel", { name: "agent" }, this.currentTab === 'agent' && h("ir-agent-billing", { booking: this.booking })))));
        }
        return h("ir-guest-billing", { booking: this.booking });
    }
    static get is() { return "ir-billing"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-billing.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-billing.css"]
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
            "isAllServicesAgentOwned": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-all-services-agent-owned",
                "reflect": false
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
            "isAgentMode": {},
            "currentTab": {},
            "resolvedAgent": {}
        };
    }
    static get events() {
        return [{
                "method": "billingClose",
                "name": "billingClose",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "booking",
                "methodName": "handleBookingChange"
            }];
    }
}
//# sourceMappingURL=ir-billing.js.map
