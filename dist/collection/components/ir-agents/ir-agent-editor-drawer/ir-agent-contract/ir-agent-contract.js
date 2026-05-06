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
        return (h(Host, { key: '0b25033ee54048907324a84ff04241b11aea88e3', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: '6cc376f58adbf0d299528221bd7f9a74a5aa8280', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: '8938b9db3df227331934ce61f21ed3a3cc34b89c', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), h("wa-radio-group", { key: 'd74d098391475bb42afd57c60628b8185b1b94ed', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: 'd4ad99d0f5a0f536891a51576f67e1426263b563', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '4e5b9b8b71f931e126ecd30a5f8353ecb3534e03', class: "radio-title" }, "Booking engine code"), h("div", { key: '569047bf6174dc0629d7dae5bbb75d87d5f062c9', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (h("div", { key: 'ff191fd0b0a0fb8a11743fb294f726e7460468ac', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: 'b309306388b0fc72798ddee15aa43f463d38152f', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: 'cd98ed3787db8912de75e383a63ef42181ad0244', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: 'a9f5a3d6fb51cf655d96e75b2697b80aa70c5398', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: '58f9b7442da18d4c18f910cc317b455ab0b7b50b', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '0927c061cc744b2aee3b51bfcccbc644d8bcb156', class: "radio-title" }, "Affiliation Yes/No question"), h("div", { key: 'adee4fc460fd64282dbbc3415f00d2dbd31421c1', class: "radio-hint" }, "Answering ", h("b", { key: 'f9b0d81778e72a2d441ec8dfd4d190707c7a7b3a' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (h("div", { key: '0dc0107d23c2d05029ff784daefec71c8703424d', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: '9672626cf8178da809ea6c777078fd3c50049d9f', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '7ff2c3a80ec4fb511bbac80f3328ec215b0f9763', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail }) }))))))), h("wa-card", { key: '5125495adf3de2d3b14165408645ec5e92fa8153', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '359bd09d8d80424a1527372f12cf383d5d49b3f8', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), h("ir-validator", { key: '5ef01b4cef592f73ec7fe5cf28051c9b2eccb498', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '7e7bf6a95d12053a745a33425c7e130af1be9bc4', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '87d0081bceb5a184c5a038e39f8cabd93b3c2c48', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '6c7f1ec69f3645c2ff1410871f2c55708eb337a2' }, h("div", { key: '57ababa1706241db527f6d78f3de6b73863ea40c', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (h(Fragment, { key: '808613f4ac819e7a6e84fcfb46b2dae3c782e90d' }, h("wa-radio", { key: '79897cde44356c9bb30e7fdf56b7895a9042eb5d', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: 'e46b86885aaa0a533d080ba3aedd1718c4184fdb' }, h("div", { key: '37571cfdacad070fb1321144996ee49248fc61e6', class: "radio-title" }, "Apply a percentage commission on BAR"), h("div", { key: 'd980b560f46a07b357ec12a4172f72b855f877af', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: '79e367a27d67ecafc2dbcdc614879e61c7f48f80', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '5772235a27fc7400e5d9eb952d445f767d79c3be', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: '6161a1d88e4d68978a646d572133e26bd2215105', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: 'f1fd72f15f9e2e38b4c446931799a270ab7834b1' }, "Commission"), this.agent?.provided_discount && h("p", { key: 'cdac02a1ecd71f12de3b8d68d658d7852fe238a2' }, this.agent?.provided_discount, "%"))), h("div", { key: '055e3e1867735977d1d1e3de551c7719336b396f', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '9f8577c54f8c70b2157cfeb5dcfb6c21e3f05dfe', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '437e7f260588df294c295dabe7dc5f57c5bbc28e', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), h("wa-switch", { key: '34c78a4101ab5f8486fccaabab2a154df4014876', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '8b3f0599243be9d9ab424cc4e78a765b1bb867bd', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: '5fcf390d89220f7f39a98c69666f9b7339b32b8e' }, h("div", { key: 'c919dd07f845c86938c38fb89e20eecbf9b620c7', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: 'f046ea33608047b9821f1164a463e540ad94903b', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'b830e85c58d7122643cdc81dadbb56da8caa5bf9', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: '4df25d7d7c5a5b6dcbd6a1bc453d5b86d8aee75d', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: '659383c18ca7684f8d482fa5ea241a7167532ab4', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'e81652a5534974997d971dc2060d57ff3445416e', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, h("div", null, h("div", { class: "radio-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint" }, "Agent pays on credit terms after guest checkout"))), h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, h("div", null, h("div", { class: "radio-title" }, "From guest"), h("div", { class: "radio-hint" }, "Payment collected directly from the guest")))))), h("wa-card", { key: '413336f4244085f777e8369ece4326fbb64e47c3', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: '2e04f1be378d59412705d71242fbfee4f8c4c254', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Post Timing"), h("ir-validator", { key: '8ca203b468d7b6ade87c1a56a26cae4bda136a81', value: this.agent?.cl_post_timing?.code, schema: z.string().nonempty() }, h("wa-select", { key: '00e618b733e468ce5d739334473ea845cbe1edfd', value: this.agent?.cl_post_timing?.code, defaultValue: this.agent?.cl_post_timing?.code, placeholder: "Select ...", onchange: e => this.updateField({
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
