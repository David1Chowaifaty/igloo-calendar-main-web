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
        return (h(Host, { key: '92cad65c597a3b7f1375c7c3dffb82ef42dcbf57', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: 'd9f1450900a3954b69d42227e8a1abe2e8bfcea1', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: '28528bf0b347b5c5b6b33474367df827d80f6b02', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), h("wa-radio-group", { key: 'a8006ebd1f1ff02be88f7d3140222cef861b8f7e', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: '4a089062a602f73c7916eb2cb7613100f1eb9800', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: 'ed1217659e206a8d952cde3dc6cdd0138bcd4d7f', class: "radio-title" }, "Booking engine code"), h("div", { key: 'aa4db6e84cbbe36ab24aec831858b829e7f05e5e', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (h("div", { key: '41dbdd016d5f1108a8d6ce25cbe440eb1674f5f0', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '3ab4022729cb5bff825f0aed1ecf8a95e9944a0f', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: 'fbddb989c285067191e48b1178dca45bfba7e66f', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: '426e70d3d5231b3f1914818f3e013922f86914b0', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: '4c5fe5c9165c4b9156a51671fbdf44a794cb2a8a', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '820dfcf93f89202a04bf32dd2f3c35003918bc5f', class: "radio-title" }, "Affiliation Yes/No question"), h("div", { key: '21f5ca8dfe5d82850d3ce10d3ee42adc6ddd2592', class: "radio-hint" }, "Answering ", h("b", { key: 'b6156ed45a94c70b77788e9367d65920bc7ced55' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (h("div", { key: '7d392d0b1f236353a411dd970b6d5d844df7af31', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: 'dec2821c793625ab6e23634c46b5719e1e4407f7', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: 'b3773eb0eaca0abc9c2f926c9cff3195b2e60df0', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail }) }))))))), h("wa-card", { key: 'd8bf0d0481bf2fd8f061378fde814c099cacc8b9', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '2f749bee0cc9bd461e12428e48286c384bcbf71b', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), h("ir-validator", { key: '30a9c215ba1f7925b5e900b3c48638a124b973f1', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '9a86fe1828aeb57ac5959efe1cf615ad70c138a9', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '100d4cfe501998a29f932afc1da1006b850e8ddf', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: 'f5bb3220bb55fa6f67bc99d47d31904d1dae2d29' }, h("div", { key: '654d96c782705eb9f227ee897c308948e282fe21', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (h(Fragment, { key: '9d4913eebbf6b593ea354b3dbec4ae429db6614a' }, h("wa-radio", { key: '8d2aff7dd02a62b260de777cf538fde40f8fa793', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '09a81a18dd44748665013b29df8ee58a215ffd3f' }, h("div", { key: '1266bfdcbfd60ef34bb79fca2b32b93537cf6c58', class: "radio-title" }, "Apply a percentage commission on BAR"), h("div", { key: 'f013c23eb2281692639f0e2e875fe7c33e6e4a53', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: '2c005cfea3256bcafc28813185bde29e93ca73ee', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '23f0acc1c3ea8e5bda96fa9cbfc39143f14b3aeb', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: 'edb0ff236821f8a44195873159a11d8372b7a2c7', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: 'a1b697279ee67957c3a1159648a290682169daa9' }, "Commission"), this.agent?.provided_discount && h("p", { key: 'ae97e984c581aa983f8e8fd61f3932f52440beaa' }, this.agent?.provided_discount, "%"))), h("div", { key: '1aba8fd32db720ff5f6e2dd7f5d560b3e06b3431', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '5abef596fb38027f75cc0971dc649904f45a58af', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: 'b800016ae9f20e507903293047c12304c49acf38', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), h("wa-switch", { key: 'caebf419226554a94754626140d0b028d2b96732', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '23bd3f977fcb3631886521934859ac5c13e7fd8b', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: '503e69573ba3215ac3f4716e0d84d49b55475264' }, h("div", { key: 'd0364c2db94b2a5519c81c0f9e53667a1d462feb', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: '12aed429f81e0430832dc4ba27765724fb180999', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: '500d37386d288dfd282a098b41d193f2530d413a', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'f3c8db87f1c2ec3bcd35b2372499c92ebdaddd31', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: 'cf7463359c6ec5a96da699c15c167c953ce5d51e', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'a4e644382f0746e3b00817dd6fa6c093c6a70d1c', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, h("div", null, h("div", { class: "radio-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint" }, "Agent pays on credit terms after guest checkout"))), h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, h("div", null, h("div", { class: "radio-title" }, "From guest"), h("div", { class: "radio-hint" }, "Payment collected directly from the guest")))))), h("wa-card", { key: 'c4ed45ca0b23d9e201ca56d1e5c85d7251d29e73', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: '1736d30874242ee4731abfff6b5a53450be8114f', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Post Timing"), h("ir-validator", { key: 'aec989094f1a39f214daba64105c90d9eaf1080b', value: this.agent?.cl_post_timing?.code, schema: z.string().nonempty() }, h("wa-select", { key: '6da04643a51774871975a404750b46c25b43e23c', value: this.agent?.cl_post_timing?.code, defaultValue: this.agent?.cl_post_timing?.code, placeholder: "Select ...", onchange: e => this.updateField({
                cl_post_timing: { code: e.target.value?.toString() },
            }), size: "small" }, this.setupEntries?.cl_post_timing?.map(t => (h("wa-option", { value: t.CODE_NAME }, t.CODE_VALUE_EN))))))));
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
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; id?: number; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; cl_post_timing?: { code?: string; description?: string; }; }",
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
                    "resolved": "{ name?: string; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; id?: number; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; cl_post_timing?: { code?: string; description?: string; }; }",
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
