import { Host, h, Fragment } from "@stencil/core";
import { AgentBaseSchema } from "../../../../services/agents/type";
import { AgentsTypes } from "../../types";
import { z } from "zod";
export class IrAgentContract {
    agent;
    setupEntries;
    agentFieldChanged;
    componentWillLoad() { }
    updateField(value) {
        const agent = this.agent ?? {};
        this.agentFieldChanged.emit({ ...agent, ...value });
    }
    handleRatesChange = (event) => {
        const value = event.currentTarget.value;
        let payload = {};
        // Reduce BAR → default to 003
        if (value === 'reduce_bar') {
            payload = { agent_rate_type_code: { code: '003' } };
            const discount = this.agent?.provided_discount;
            if (discount == null || Number.isNaN(discount)) {
                payload = { ...payload, provided_discount: 4 };
            }
        }
        // Other modes
        if (value === 'agent_rate_plans') {
            payload = { agent_rate_type_code: { code: '001' } };
        }
        if (value === 'contract_reference') {
            payload = { agent_rate_type_code: { code: '004' } };
        }
        this.updateField(payload);
    };
    get selectedRate() {
        const code = this.agent?.agent_rate_type_code?.code;
        if (code === '002' || code === '003')
            return 'reduce_bar';
        if (code === '001')
            return 'agent_rate_plans';
        if (code === '004')
            return 'contract_reference';
        return undefined;
    }
    render() {
        const isTourOperator = this.agent?.agent_type_code?.code === AgentsTypes.TOUR_OPERATOR;
        return (h(Host, { key: '86910220d5deb9d36041373f014d8905790195d8', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: 'ab197b3949d6b77e6ac061c1e7825b3f4982c7b6', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: 'a0cd0d47624ee1b1f2ff2d4477e57a6a466442d6', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), h("wa-radio-group", { key: '2f8106067aab9c74821dbbca3766489b3bd59f30', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: 'e85e8925d9bbf177d9ef092d10274620c761829e', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: 'c37728a6c49dab3423e8c784df3b64872b41e592', class: "radio-title" }, "Booking engine code"), h("div", { key: '868fc0054b9e4ce4fe6db2a64feca83df2b9d111', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (h("div", { key: 'f994eb1bd66cda93762a541be19f1aef1c4f2df6', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '292dd3f01e39b268dbc5d73849d4cc573f7446e6', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: '411a3c7ebc8a2f2d3e9ba33df0ef5867ea356a01', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: '1e25f9520b619aeb972257ae1faa3517ed147c25', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: 'd61b2cc576627d5242e7c992aa831b6a67331d4c', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '94720b630356698f332eb7bb9dff540c954d8f59', class: "radio-title" }, "Affiliation Yes/No question"), h("div", { key: '9aa03d58969653cf644606bf9144ac0c14e0c88f', class: "radio-hint" }, "Answering ", h("b", { key: '5e37873f24b6fb65da32f96bfab1e1c1ee0333c4' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (h("div", { key: '55d1c7f1e14e2dc59f3b6bcd8161bcaab25605aa', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: 'f4ac3a626b0aa77b2c699fb1a26a3e1689eec6e4', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: 'd063e1846de451f46d3b02870a6be2ed5f241e94', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '62a879456521429f7872f3b93ba3f93d3ac73782', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '071055cd0cd4fbc6e486741b88c67d9e198d42e0', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), h("ir-validator", { key: 'bbc97a9aa0d92aecd4dd12c18917b4ccf788abf9', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: 'a13430ab553d3f528b70ba3a684367d82e110ab1', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '19cd6a82240d73548b627addc10e49410a0631b1', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: 'f9a2eb31fafbb1212cbca3585d845e9eca13515d' }, h("div", { key: '62207a3a063f233440d008635d0ab0f582f8ba60', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (h(Fragment, { key: '8c7669c69f563b9b69b29cb9cd60f35da3c99ccf' }, h("wa-radio", { key: 'd0c8a714d895ad8a5027d8d71dd647962c525032', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '53dd5f6087f763cc45263553ebac3dffb894eb0a' }, h("div", { key: 'e0d5c805285ba694508fe5b709799e2d9ea479cf', class: "radio-title" }, "Apply a percentage commission on BAR"), h("div", { key: '0928a65e91d6e8da1c7f31f6c6e3dc8ca5f8fedf', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: '82e0d3c15ca3f0d2ed3986171c507dd700df9011', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: 'b8eae2e7d68cd78477652ba745b3ea2c01d6e5f3', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: 'fc9df36620c053a33c307a1c5442d9356683a4cf', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '6b682609878fedd74108c008edb290d66eb40fa7' }, "Commission"), this.agent?.provided_discount && h("p", { key: 'f786f7bc87ec845f415e5c3e5ed10ecb5b8d2b46' }, this.agent?.provided_discount, "%"))), h("div", { key: 'eb65ab7632fb238f841cfe43d0eecab96eec5495', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: 'db4fff264a119372668e5ad12a0e68719de6a289', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '639bf00ddb20997688d81638294ac97ffdfa673a', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), h("wa-switch", { key: '4cc4701dfb69d1320151e08a8fcfda7f8ea9e45f', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '31becfefd5aa1fdd6439e93d554be47fafa03c30', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: '0b5c18e1403734483bbc3f7e15dc3d285783eef4' }, h("div", { key: '0e72d091dbf3e854a89eeea58f94c99d38ee7b6d', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: '8e4cfa846817dc5fc92c66a51c4d4bc2f9d417b0', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: '0b418c08188a3326713776494a4fcaf0ab9702c6', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'bbb39b6f12c6deeb4d8bd3d7e3b1ffcd86c3d502', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: 'd41f6b2ce22417944e0fda2f07da01ff76b47f0b', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'b630b52f71213624260c3a797a713dee184e61e5', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
                const code = e.currentTarget.value.toString();
                const paymentMethod = this.setupEntries.ta_payment_method.find(c => c.CODE_NAME === code);
                if (!paymentMethod) {
                    return;
                }
                this.updateField({
                    payment_mode: {
                        code: paymentMethod.CODE_NAME,
                        description: paymentMethod.CODE_VALUE_EN,
                    },
                });
            } }, h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, h("div", null, h("div", { class: "radio-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint" }, "Agent pays on credit terms after guest checkout"))), h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, h("div", null, h("div", { class: "radio-title" }, "From guest"), h("div", { class: "radio-hint" }, "Payment collected directly from the guest"))))))));
    }
    static get is() { return "ir-agent-contract"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-agent-contract.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-agent-contract.css"]
        };
    }
    static get properties() {
        return {
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
                "optional": true,
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
                    "resolved": "{ agent_rate_type: IEntries[]; agent_type: IEntries[]; ta_payment_method: IEntries[]; cl_post_timing: IEntries[]; }",
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
                "method": "agentFieldChanged",
                "name": "agentFieldChanged",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Partial<Agent>",
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; id?: number; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
                        "Agent": {
                            "location": "import",
                            "path": "@/services/agents/type",
                            "id": "src/services/agents/type.ts::Agent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-agent-contract.js.map
