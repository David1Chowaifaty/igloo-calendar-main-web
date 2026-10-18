import { Host, h } from "@stencil/core";
import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
import { getSetupEntryLabel } from "../../../services/setup/index";
export class IrAgentsTable {
    agents = [];
    setupEntries;
    countries;
    language;
    upsertAgent;
    deleteAgent;
    toggleAgentActive;
    getAgentTypeLabel(agent) {
        const agentType = this.setupEntries.agent_type.find(t => t.CODE_NAME === agent.agent_type_code.code);
        if (!agentType) {
            console.warn(`couldn't find agent type ${agent?.agent_type_code?.code}`, agent);
            return;
        }
        return getSetupEntryLabel(agentType, this.language);
    }
    getAgentPhoneNumber({ phone, country_id }) {
        if (!phone) {
            return null;
        }
        if (!country_id) {
            return phone;
        }
        const country = this.countries.find(c => c.id.toString() === country_id.toString());
        if (!country) {
            return phone;
        }
        return `${country.phone_prefix} ${phone}`;
    }
    createAgent = () => {
        this.upsertAgent.emit({
            id: -1,
            name: '',
            code: '',
            address: '',
            city: '',
            country_id: null,
            phone: '',
            email: '',
            email_copied_upon_booking: null,
            contact_name: '',
            tax_nbr: '',
            notes: '',
            question: '',
            agent_rate_type_code: {
                code: '001',
            },
            agent_type_code: {
                code: '',
            },
            payment_mode: {
                code: '001',
            },
            contract_nbr: null,
            currency_id: null,
            due_balance: null,
            sort_order: null,
            property_id: calendar_data.property.id,
            provided_discount: null,
            is_active: true,
            is_send_guest_confirmation_email: false,
            verification_mode: 'code',
        });
    };
    render() {
        return (h(Host, { key: 'ca59b82c0c080c1862f64ce403f842453bc9b633' }, h("div", { key: '686cb7fe012a9b2b897e6f5a0c0bdc9aad782325', class: "table--container" }, h("table", { key: '13aee5229d2f2c4b95df7b000fac163233fcc6d9', class: "table" }, h("thead", { key: '35933ff3d3baac5a1bd5ab5e366729d489c5a9e1' }, h("tr", { key: 'bd767928738db4f47f2240251ef58cda5eaf7256' }, h("th", { key: 'feb0c2c71f382ecfa3407ee9c05da566b568b30a', class: "agents-table__header" }, t('Lcz_Name', { fallback: 'Name' })), h("th", { key: '40b95b4f988120f207033cb6fb9cb97ccecf4aa7', class: "agents-table__header" }, t('Lcz_Type', { fallback: 'Type' })), h("th", { key: '49a2b7ebcdf325569af63b78f4de807b77317a3e', class: "agents-table__header" }, t('Lcz_Email', { fallback: 'Email' })), h("th", { key: 'd1155ae61c07ffa7125d1baa99b2f0a37a1eafec', class: "agents-table__header" }, t('Lcz_Phone', { fallback: 'Phone' })), h("th", { key: 'f4042bc2251a2b73548c32719680e5ca12fbeccc', class: "agents-table__header" }, t('Lcz_Active', { fallback: 'Active' })), h("th", { key: '9470859a3b603630881bdcbbe948126f7c49e1f5', class: "agents-table__header " }, h("div", { key: 'a6087c3a89a19ab21a034a61e6a6de3dd39c829b', class: "agents-table__action" }, h("wa-tooltip", { key: '09264b773923a80798cd830cc49d1a60ac586447', for: "create-agent-button" }, t('Lcz_NewAgent', { fallback: 'New Agent' })), h("ir-custom-button", { key: 'dfb4ffbdfa6c749632a312dca38645b19623f521', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, h("wa-icon", { key: '00c2bb31aa39cee62a894435d0fe906fe6df5a44', name: "plus", style: { fontSize: '1.2rem' }, label: t('Lcz_NewAgent', { fallback: 'New Agent' }) })))))), h("tbody", { key: '8f8df81abc04cb2258a5e58a83314ab8107644a2' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (h("tr", { class: "ir-table-row", key: agent.id }, h("td", { class: "agents-table__name" }, h("div", { class: "d-flex flex-column" }, h("p", null, agent.name), h("p", { class: "agents-table__muted" }, agent.reference))), h("td", null, h("div", { class: "d-flex flex-column" }, h("p", null, typeLabel), h("p", { class: "agents-table__muted" }, agent.code))), h("td", null, agent.email || t('Lcz_NotAvailable', { fallback: 'N/A' })), h("td", null, this.getAgentPhoneNumber(agent) || t('Lcz_NotAvailable', { fallback: 'N/A' })), h("td", null, h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), h("td", null, h("div", { class: "agents-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (h("tr", { key: '56dd7b71ca7efc99927408f9b9961276facd4e6e', class: "empty-row" }, h("td", { key: 'bc24ec9c3dccf882c77a7b95bc0b1e389c7c76b5', colSpan: 6 }, h("ir-empty-state", { key: '4c3b7e28b75ac054e6f6b06fa6a24abb44cd40bf' })))))))));
    }
    static get is() { return "ir-agents-table"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agents-table.css", "../../../common/table.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agents-table.css", "../../../common/table.css"]
        };
    }
    static get properties() {
        return {
            "agents": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Agent[]",
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }[]",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "setupEntries": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AgentSetupEntries",
                    "resolved": "{ agent_rate_type: SetupEntries[]; agent_type: SetupEntries[]; ta_payment_method: SetupEntries[]; cl_post_timing: SetupEntries[]; }",
                    "references": {
                        "AgentSetupEntries": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-agents/types.ts::AgentSetupEntries",
                            "referenceLocation": "AgentSetupEntries"
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
                            "id": "src/models/IBooking.ts::ICountry",
                            "referenceLocation": "ICountry"
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
                "reflect": false,
                "attribute": "language"
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
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
                        }
                    }
                }
            }, {
                "method": "deleteAgent",
                "name": "deleteAgent",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
                        }
                    }
                }
            }, {
                "method": "toggleAgentActive",
                "name": "toggleAgentActive",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Agent",
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent",
                            "referenceLocation": "Agent"
                        }
                    }
                }
            }];
    }
}
