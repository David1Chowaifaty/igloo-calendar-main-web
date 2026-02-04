import { h } from "@stencil/core";
import { AgentSchema } from "../../../../services/agents/type";
import { AgentsService } from "../../../../services/agents/agents.service";
export class IrAgentEditorForm {
    agent;
    formId;
    countries;
    setupEntries;
    upsertAgent;
    closeDrawer;
    agentService = new AgentsService();
    handleAgentFieldChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const agent = this.agent || {};
        this.agent = { ...agent, ...e.detail };
    }
    async saveOrEditAgent() {
        try {
            console.log(this.agent);
            AgentSchema.parse(this.agent);
            await this.agentService.handleExposedAgent({ agent: this.agent });
            this.upsertAgent.emit(this.agent);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h("form", { key: 'e4324c79f45df0ad546910df09ac89b2156ddcea', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent();
            }, class: "agent-editor__content" }, h("ir-agent-profile", { key: '54da9bcec96363e353c135359736c133d7e9c898', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), h("ir-agent-contract", { key: '8a35a9e4722c280de35c63c5c1dcc1f0360a0308', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
    }
    static get is() { return "ir-agent-editor-form"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agent-editor-form.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agent-editor-form.css"]
        };
    }
    static get properties() {
        return {
            "agent": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; email?: string; id?: number; reference?: string; address?: string; code?: string; notes?: string; is_active?: boolean; property_id?: any; country_id?: number; currency_id?: any; city?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; contact_name?: string; contract_nbr?: any; due_balance?: any; email_copied_upon_booking?: string; is_send_guest_confirmation_email?: boolean; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; verification_mode?: string; }",
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
            "formId": {
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
                "attribute": "form-id",
                "reflect": false
            },
            "countries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ICountry[]",
                    "resolved": "ICountry[]",
                    "references": {
                        "ICountry": {
                            "location": "import",
                            "path": "@/models/IBooking",
                            "id": "src/models/IBooking.ts::ICountry"
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
            "setupEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AgentSetupEntries",
                    "resolved": "{ agent_rate_type: IEntries[]; agent_type: IEntries[]; ta_payment_method: IEntries[]; }",
                    "references": {
                        "AgentSetupEntries": {
                            "location": "import",
                            "path": "../../types",
                            "id": "src/components/ir-agents/types.ts::AgentSetupEntries"
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
    static get events() {
        return [{
                "method": "upsertAgent",
                "name": "upsertAgent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ name?: string; email?: string; id?: number; reference?: string; address?: string; code?: string; notes?: string; is_active?: boolean; property_id?: any; country_id?: number; currency_id?: any; city?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; contact_name?: string; contract_nbr?: any; due_balance?: any; email_copied_upon_booking?: string; is_send_guest_confirmation_email?: boolean; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; verification_mode?: string; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
                        }
                    }
                }
            }, {
                "method": "closeDrawer",
                "name": "closeDrawer",
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
    static get listeners() {
        return [{
                "name": "agentFieldChanged",
                "method": "handleAgentFieldChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-agent-editor-form.js.map
