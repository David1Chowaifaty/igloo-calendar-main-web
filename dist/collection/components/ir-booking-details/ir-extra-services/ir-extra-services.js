import { Fragment, Host, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
export class IrExtraServices {
    booking;
    agent;
    language;
    svcCategories;
    isAgentMode = false;
    renderServiceList(services) {
        return services.map((service, index) => (h(Fragment, null, h("ir-extra-service", { language: this.language, svcCategories: this.svcCategories, booking: this.booking, bookingNumber: this.booking.booking_nbr, currencySymbol: this.booking.currency.symbol, key: service.booking_system_id, service: service, agent: this.agent }), index !== services.length - 1 && h("wa-divider", null))));
    }
    render() {
        const services = this.booking.extra_services ?? [];
        if (this.isAgentMode) {
            const guestServices = services.filter(s => s.agent === null || s.agent === undefined);
            const agentServices = services.filter(s => s.agent !== null && s.agent !== undefined);
            const agentName = this.booking.agent?.name ?? 'Agent';
            return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 ? (h("ir-empty-state", null)) : (h(Fragment, null, h("p", { class: "service-group__label --agent" }, agentName, h("span", null, "Folio")), h("div", { class: "service-group service-group--agent" }, h("div", { class: "service-group__body" }, agentServices.length === 0 ? h("p", { class: "service-group__empty" }, "No agent services added") : this.renderServiceList(agentServices))), h("wa-divider", null), h("p", { class: "service-group__label" }, "Guest", h("span", null, "Folio")), h("div", { class: "service-group service-group--guest" }, h("div", { class: "service-group__body" }, guestServices.length === 0 ? h("p", { class: "service-group__empty" }, "No guest services added") : this.renderServiceList(guestServices))))))));
        }
        return (h(Host, null, h("wa-card", null, h("p", { slot: "header", class: 'font-size-large p-0 m-0 ' }, locales.entries.Lcz_ExtraServices), h("wa-tooltip", { for: "extra_service_btn" }, "Add extra service"), h("ir-custom-button", { slot: "header-actions", id: "extra_service_btn", size: "small", appearance: "plain", variant: "neutral" }, h("wa-icon", { name: "plus", style: { fontSize: '1rem' } })), services.length === 0 && h("ir-empty-state", null), this.renderServiceList(services))));
    }
    static get is() { return "ir-extra-services"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-extra-services.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-extra-services.css"]
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
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "language",
                "reflect": false
            },
            "svcCategories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IEntries[]",
                    "resolved": "IEntries[]",
                    "references": {
                        "IEntries": {
                            "location": "import",
                            "path": "@/models/property",
                            "id": "src/models/property.ts::IEntries"
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
}
//# sourceMappingURL=ir-extra-services.js.map
