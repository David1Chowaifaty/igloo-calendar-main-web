import { Host, h, Fragment } from "@stencil/core";
import { AgentBaseSchema } from "../../../../services/agents/type";
import { AgentsTypes } from "../../types";
import { z } from "zod";
import { t } from "../../../../services/locale/t";
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
        return (h(Host, { key: '2f4679054ccd506b43e5dd684c2b73f23e4946cc', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: '32e66639b0b8c0a69ad1d1d7b18bbadb58da7a89', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: '204c1e5a9816c970a0b844de16a2667bdcfa4ecd', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), h("wa-radio-group", { key: 'cef3a327350a41efa3b245df0b33c57771820d49', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: '8f8da3e7076d3434d27b29f11e0cb08b42ca585f', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '977c99471be157ba58e8c7a72a5b686ea12b4e45', class: "radio-title" }, t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), h("div", { key: 'cf30a3d31683211990acd9a82b3bd9dc65878381', class: "radio-hint" }, t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (h("div", { key: '23199558cc6f27c502171170eaf8b356a8fa9e9b', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '8e3dcd064b8ff7a65c02905a1744f0acc9cc1d18', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: '84656ae93a4512eb4edf319c09e9b3910525fd89', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: 'd95352f8ca9ead54aac2ec7ecbcf1330796618d6', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: 'a3394f8bc9c338ff8dc458d4b44081f3242e1e00', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '7a92be5113ced98d740f146d1434d750bc74ce2f', class: "radio-title" }, t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), h("div", { key: '96b31b8ad354344e925e5d0f3cf33ff401d74b9e', class: "radio-hint" }, t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (h("div", { key: '010538f295cf4df5094d3c2ce66f730853fe3c94', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: 'a34d027a78d6f2b37c41b5fad97421f595c817a2', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '241a427a3b731092bf93ba83d7c359dfcfb6e0aa', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '793f2358c6905612495deacb35ef095cb4bfb30b', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '29bc98f84ff10d13dbfc7a14a41340722cbde7ec', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t('Lcz_Rates', { fallback: 'Rates' })), h("ir-validator", { key: '023038d5abe0da1dcb60400157895ebcd0ca3f68', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: 'b292ae17b2993d9d4ba9ae567a8dd9093bc0abb1', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '3bb65a5ce453de910d32544dfa9993b9438d4664', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: 'e86cc43effefc0cef36660754d9caa304134a18c' }, h("div", { key: 'da0a68172b94ed5580e1593332836c72db29e94b', class: "radio-title" }, t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (h(Fragment, { key: 'e40956994da55d78e7ad44afacbf053fe6ed4850' }, h("wa-radio", { key: '73512cecf545e4257d5fedac85ca0f7d2b03d8ef', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '68a8497302755c38ce30d90bd53083190867bd27' }, h("div", { key: '09d3db12878974085eddc43b55e6eaf4495da2e6', class: "radio-title" }, t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), h("div", { key: '9612d2a0e5bb5825a65b53a8742f4921b8f6bdab', class: "radio-hint" }, t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: 'ef1a92bb4117cb2d89c40adc6e877c33cc3eca29', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: 'f4c0d06c63ac0c6d48bb402a7aec28c0cb9f4c9d', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: '7a3d194995bfcfc0f10951c94d8e8e2176171827', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '4fcb02972cbae8803adcb63b23deb8c2c5267790' }, t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && h("p", { key: '4107d0b6db134f05a94fbe62d7a50308afa1172b' }, this.agent?.provided_discount, "%"))), h("div", { key: '8a43479bc0ef3962730caac8888e954cb98b4c0d', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '7869196bfad8e79053e3f8491563caced54fd20f', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '335e25a28e8e5937d3b3e2aac86f646938b947ca', class: "rates-extra__title" }, t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), h("wa-switch", { key: '5faf8167558731ce5a8fb80ab3b2d6806d7b92cc', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '99e7c9bafe27f1af45a860d119ad019c79cc7660', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: 'e4e10260b1e1d88ef054b0560f226cd5a61a1956' }, h("div", { key: '570266a5cc4822710d2aca4eec7813b7e05ed1b7', class: "radio-title" }, t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: '1b3d40b2841d5c7f825950b1701a610050bedd9d', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: '840d00a4c46c6dc857decacd1f50ca78f8cf84a6', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'd6437d9d62e0ef85a3935b6ab7bf620c45579237', placeholder: t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: '8499efcd81c782d0df366ba56ff4d4ccf7820804', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'b16ba444d8c8829055ede6aae42c65de15a545bd', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, h("div", null, h("div", { class: "radio-title" }, t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), h("div", { class: "radio-hint" }, t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))), h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, h("div", null, h("div", { class: "radio-title" }, t('Lcz_FromGuest', { fallback: 'From guest' })), h("div", { class: "radio-hint" }, t('Lcz_PaymentCollectedDirectlyFromGuest', { fallback: 'Payment collected directly from the guest' })))))))));
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
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
                    "resolved": "{ agent_rate_type: SetupEntries[]; agent_type: SetupEntries[]; ta_payment_method: SetupEntries[]; cl_post_timing: SetupEntries[]; }",
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
                    "resolved": "{ code?: string; name?: string; id?: number; email?: string; property_id?: any; address?: string; agent_rate_type_code?: { code?: string; description?: string; }; agent_type_code?: { code?: string; description?: string; }; city?: string; contact_name?: string; contract_nbr?: any; country_id?: number; currency_id?: any; due_balance?: any; email_copied_upon_booking?: string; is_active?: boolean; is_send_guest_confirmation_email?: boolean; notes?: string; payment_mode?: { code?: string; description?: string; }; phone?: string; provided_discount?: any; question?: string; sort_order?: any; tax_nbr?: string; reference?: string; verification_mode?: string; has_opening_balance?: boolean; cl_post_timing?: { code?: string; description?: string; }; }",
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
