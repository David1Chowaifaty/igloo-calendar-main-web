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
        return (h(Host, { key: '8adcd17415267e9861e317a927762d375462e1d4', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: '7014af5bd109ed5546bb37b876bbf52c853be593', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: 'b80c5918ef968dc314089739e0f80c70057cc131', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), h("wa-radio-group", { key: '699b60475aec72081f7a091aa27ef7eab39ed3cf', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: '3ec9959af730a8dd8b86074b547cb45af2a68ed0', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '2e8d5b6e5ce1683cbca0a70f4eaa94d8e86d900c', class: "radio-title" }, "Booking engine code"), h("div", { key: '684b7da1a923994b188fbc447e5b70ba24488248', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (h("div", { key: 'b0745f3224f17cccbee30b28cab40f607ed13a1c', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '51c3f029ddc1e8e622411c54ff65609f87109324', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: '7cd4b1fafe4e9cc2c168162aabdc0f72d4869fce', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: 'a8acf1ea4682ec3d5a6b776801428c2123974457', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: 'ff2e4be454ccec222dbcc99cb3862f9b06ad1130', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: 'cfbbfab61c162c403b96a3591857a7dcdfe10621', class: "radio-title" }, "Affiliation Yes/No question"), h("div", { key: '564a861e1b77b0d1068bab1c6c11916f704bd92d', class: "radio-hint" }, "Answering ", h("b", { key: '656ff58fcc4be5e1115f07186866df3f9f7a605f' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (h("div", { key: '1561c29b71f8b20891c09e39cf97c60f471b70f2', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: '4eec016e58c12454e0d9a99e577558c28a728484', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '06683a7ca8bebe6a59bbd8bae3f3383baa391d8d', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '65504dd8a3b65b843918f9058d9040a5edfdd80c', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: 'e1c51596bbdbdceb424374006badfff21d80f87f', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), h("ir-validator", { key: 'cf9515f7696722be1d8ac99ec26e2e82d6014dac', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '4ad7bb762b79054ebac7e64dacb84f1c32981f35', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '139c4effb3c50335ff4714dbdecab5695e37a7f7', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '1b2209a1dc7635d48ed1137ab94d7976ad7791c5' }, h("div", { key: 'd7789b22cdce28ab930a8a3e159584045cee45ca', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (h(Fragment, { key: '9d1b619be1af374761bbc345ed3e59a8cf851a02' }, h("wa-radio", { key: 'c2ac0ae792b1c0ed56b26544cc0f56b524e0b640', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: 'e2b4346cf3ea9b68def9ff54efd7fd1ff694aebb' }, h("div", { key: '03064330d0e6224dfbad2f7f66bad1a99b059916', class: "radio-title" }, "Apply a percentage commission on BAR"), h("div", { key: '8599c6ad09b6be3b320eaea0d72a6ff265e8f4af', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: 'e56ec55801196a676da171fbc2016ad9edced226', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '05738e9907586ac5d3002b9adaa94fc8a6bba05b', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: 'e82b022afc100aa7b83831aea4a413cd2673acca', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '7a083f6abe0ea445558dc32b2d75fa47040b0591' }, "Commission"), this.agent?.provided_discount && h("p", { key: '9310e7ce2cb93ccc012b32fccc6c349bc7c75c04' }, this.agent?.provided_discount, "%"))), h("div", { key: 'b232942c46ae8d67f02e42e38c909a84032fe1bf', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: 'bb057fec933f87f8c93c6232af838ac2f1d5a5bb', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '0d6abc99e18edd6c74ae58afea9828bb9c665401', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), h("wa-switch", { key: '4074347fd1bfbb610d43367948246d9da949ba5c', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '9133713ad6f6b02835f6caed7637c91002eea986', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: '1dadf8932b19bc86592a84c8fd85fba0e73036a7' }, h("div", { key: 'e3bbaadb6aca724870e5f581d5e2c634f157dce7', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: 'be96680817d5105126af3d67ef41617d32c03397', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'a0b322ab4da567eac935719af1c757fc3697cd09', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'c703733b2d42efbdb98a1c1f75109d6dca26b31a', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: '2fa06fea372b2aa394d5aca164a840e6ef351b2a', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'f3b1cc6dfd8b7c9baea9c4e1233e45400d22eb33', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
                    "resolved": "{ name?: string; id?: number; email?: string; property_id?: any; code?: string; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
                    "references": {
                        "Partial": {
                            "location": "global",
                            "id": "global::Partial"
                        },
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
