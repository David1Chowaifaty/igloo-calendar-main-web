import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-DKZeCK8T.js';
import { A as AgentBaseSchema, b as AgentsTypes } from './type-D_dKkSLY.js';
import { t } from './t-Bvz1wS_D.js';
import { s as stringType } from './types-BLb1NO3I.js';
import { d as getSetupEntryLabel } from './utils-Cz9i5CF5.js';
import './locale-scope-Jre4lb6k.js';
import './IBooking-BFuEU3Ic.js';
import './commonSchemas-BNnUj2OT.js';

const irAgentContractCss = () => `.sc-ir-agent-contract-h{display:block}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-inline:0;padding-bottom:0}.contract-card.sc-ir-agent-contract::part(header),.contract-card.sc-ir-agent-contract [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.contract-card.sc-ir-agent-contract:first-of-type::part(header),.contract-card.sc-ir-agent-contract:first-of-type [part~="header"]{padding-top:0 !important}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"],.contract.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-top:1rem}.contract-form-group.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract p.sc-ir-agent-contract{padding:0;margin:0}.contract-card--horizontal.sc-ir-agent-contract::part(body),.contract-card--horizontal.sc-ir-agent-contract [part~="body"]{display:flex;align-items:center;gap:1rem}.contract-hint.sc-ir-agent-contract,.radio-hint.sc-ir-agent-contract{font-size:0.75rem;color:var(--wa-color-text-quiet);margin-top:0.25rem}.contract-row__text.sc-ir-agent-contract{flex:1 1 0%}.contract-row.sc-ir-agent-contract{display:flex;align-items:center;gap:1rem}.rate-mode.sc-ir-agent-contract::part(form-control-input),.rate-mode.sc-ir-agent-contract [part~="form-control-input"]{display:flex;flex-direction:column;gap:0.5rem}.rates-extra.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem;margin-inline-start:2rem}.rates-extra__slider.sc-ir-agent-contract{max-width:320px}.rates-extra__row.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;gap:1rem}.rates-extra__text.sc-ir-agent-contract{display:flex;flex-direction:column;gap:0.15rem}.rates-extra__title.sc-ir-agent-contract{font-weight:500;margin:0}.rates-extra__hint.sc-ir-agent-contract{font-size:0.75rem;opacity:0.7;margin:0}.rates-extra__slider-label.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;width:100%}.rates-extra__slider-label.sc-ir-agent-contract p.sc-ir-agent-contract{margin:0;padding:0}.rates-extra__switch.sc-ir-agent-contract{flex-shrink:0}@media (min-width: 768px){.contract-card.sc-ir-agent-contract::part(body){padding-inline-start:0.5rem}.rates-extra.sc-ir-agent-contract{padding:0.5rem 1rem;border-inline-start:1px solid var(--wa-color-surface-border)}}`;

const IrAgentContract = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.agentFieldChanged = createEvent(this, "agentFieldChanged");
    }
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
            } }, h("wa-radio", { key: '8f8da3e7076d3434d27b29f11e0cb08b42ca585f', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '977c99471be157ba58e8c7a72a5b686ea12b4e45', class: "radio-title" }, t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), h("div", { key: 'cf30a3d31683211990acd9a82b3bd9dc65878381', class: "radio-hint" }, t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (h("div", { key: '23199558cc6f27c502171170eaf8b356a8fa9e9b', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '8e3dcd064b8ff7a65c02905a1744f0acc9cc1d18', schema: stringType().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: '84656ae93a4512eb4edf319c09e9b3910525fd89', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: 'd95352f8ca9ead54aac2ec7ecbcf1330796618d6', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: 'a3394f8bc9c338ff8dc458d4b44081f3242e1e00', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '7a92be5113ced98d740f146d1434d750bc74ce2f', class: "radio-title" }, t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), h("div", { key: '96b31b8ad354344e925e5d0f3cf33ff401d74b9e', class: "radio-hint" }, t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (h("div", { key: '010538f295cf4df5094d3c2ce66f730853fe3c94', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: 'a34d027a78d6f2b37c41b5fad97421f595c817a2', schema: stringType().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '241a427a3b731092bf93ba83d7c359dfcfb6e0aa', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '793f2358c6905612495deacb35ef095cb4bfb30b', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '29bc98f84ff10d13dbfc7a14a41340722cbde7ec', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t('Lcz_Rates', { fallback: 'Rates' })), h("ir-validator", { key: '023038d5abe0da1dcb60400157895ebcd0ca3f68', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: 'b292ae17b2993d9d4ba9ae567a8dd9093bc0abb1', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '3bb65a5ce453de910d32544dfa9993b9438d4664', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: 'e86cc43effefc0cef36660754d9caa304134a18c' }, h("div", { key: 'da0a68172b94ed5580e1593332836c72db29e94b', class: "radio-title" }, t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (h(Fragment, { key: 'e40956994da55d78e7ad44afacbf053fe6ed4850' }, h("wa-radio", { key: '73512cecf545e4257d5fedac85ca0f7d2b03d8ef', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '68a8497302755c38ce30d90bd53083190867bd27' }, h("div", { key: '09d3db12878974085eddc43b55e6eaf4495da2e6', class: "radio-title" }, t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), h("div", { key: '9612d2a0e5bb5825a65b53a8742f4921b8f6bdab', class: "radio-hint" }, t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: 'ef1a92bb4117cb2d89c40adc6e877c33cc3eca29', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: 'f4c0d06c63ac0c6d48bb402a7aec28c0cb9f4c9d', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: '7a3d194995bfcfc0f10951c94d8e8e2176171827', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '4fcb02972cbae8803adcb63b23deb8c2c5267790' }, t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && h("p", { key: '4107d0b6db134f05a94fbe62d7a50308afa1172b' }, this.agent?.provided_discount, "%"))), h("div", { key: '8a43479bc0ef3962730caac8888e954cb98b4c0d', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '7869196bfad8e79053e3f8491563caced54fd20f', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '335e25a28e8e5937d3b3e2aac86f646938b947ca', class: "rates-extra__title" }, t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), h("wa-switch", { key: '5faf8167558731ce5a8fb80ab3b2d6806d7b92cc', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '99e7c9bafe27f1af45a860d119ad019c79cc7660', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: 'e4e10260b1e1d88ef054b0560f226cd5a61a1956' }, h("div", { key: '570266a5cc4822710d2aca4eec7813b7e05ed1b7', class: "radio-title" }, t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: '1b3d40b2841d5c7f825950b1701a610050bedd9d', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: '840d00a4c46c6dc857decacd1f50ca78f8cf84a6', schema: stringType().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'd6437d9d62e0ef85a3935b6ab7bf620c45579237', placeholder: t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
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
};
IrAgentContract.style = irAgentContractCss();

const irAgentProfileCss = () => `.agent-profile.sc-ir-agent-profile,.agent-form-group.sc-ir-agent-profile{display:flex;flex-direction:column;gap:1rem}.agent-card.--status-card.sc-ir-agent-profile::part(body),.agent-card.--status-card.sc-ir-agent-profile [part~="body"]{padding-top:0}.agent-card.sc-ir-agent-profile::part(body),.agent-card.sc-ir-agent-profile [part~="body"]{padding-inline:0;padding-bottom:0;padding-top:1rem}.agent-card.--business-info.sc-ir-agent-profile::part(header),.agent-card.--business-info.sc-ir-agent-profile [part~="header"]{padding-top:0}.agent-card.sc-ir-agent-profile::part(header),.agent-card.sc-ir-agent-profile [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.agent-card.sc-ir-agent-profile p.sc-ir-agent-profile{padding:0;margin:0}.agent-card--horizontal.sc-ir-agent-profile::part(body),.agent-card--horizontal.sc-ir-agent-profile [part~="body"]{display:flex;align-items:center;gap:1rem}.agent-card__header.sc-ir-agent-profile{flex:1 1 0%}.agent-card__description.sc-ir-agent-profile{font-size:0.75rem;color:var(--wa-color-text-quiet)}.agent-form-row.sc-ir-agent-profile{display:flex;align-items:center;justify-content:space-between;gap:1rem}@media (min-width: 768px){.agent-card.sc-ir-agent-profile::part(body){padding-inline-start:0.5rem}}`;

const IrAgentProfile = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.agentFieldChanged = createEvent(this, "agentFieldChanged");
    }
    agent;
    countries;
    setupEntries;
    agentFieldChanged;
    updateField(value) {
        const agent = this.agent ?? {};
        this.agentFieldChanged.emit({ ...agent, ...value });
    }
    getCountryPhonePrefix() {
        if (!this.agent?.country_id) {
            return;
        }
        const country = this.countries.find(c => c.id.toString() === this.agent.country_id.toString());
        if (!country) {
            return;
        }
        return country.phone_prefix;
    }
    render() {
        const agent = this.agent;
        const phone_prefix = this.getCountryPhonePrefix();
        return (h(Host, { key: '656c776baac0bdf0b30ea9a949ce545425f72ba0', "data-testid": "agent-profile" }, h("wa-card", { key: 'ef79309a5e1dbabfb7e6794dff7211814a6a5304', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, h("p", { key: '085fb2c656e16ea37b657964c43e28a5098d7e33', slot: "header", "data-testid": "agent-profile-business-title" }, t('Lcz_BusinessInformation', { fallback: 'Business Information' })), h("div", { key: 'e2b282b966d5372ae04eb68eb9b30be5f32a4ee0', class: "agent-form-group" }, h("ir-validator", { key: 'a31c23676cac947954e66e32d8f5e942ca812cb2', schema: AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, h("wa-select", { key: 'b9163b30a0749e0daf3c433c50cff590e028362d', size: "s", placeholder: t('Lcz_SelectAgentTypePlaceholder', { fallback: 'Select agent type ...' }), value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
                const code = e.target.value;
                let payload = { agent_type_code: { code, description: '' } };
                if (code === AgentsTypes.TOUR_OPERATOR) {
                    payload = {
                        ...payload,
                        payment_mode: {
                            code: '001',
                        },
                        verification_mode: null,
                        provided_discount: null,
                        code: null,
                        question: null,
                        agent_rate_type_code: {
                            code: '001',
                        },
                    };
                }
                this.updateField(payload);
            } }, this.setupEntries.agent_type
            ?.filter(t => t.CODE_NAME !== '004')
            ?.sort((a, b) => getSetupEntryLabel(a).toLowerCase().localeCompare(getSetupEntryLabel(b).toLowerCase()))
            ?.map(agent => (h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, getSetupEntryLabel(agent)))))), h("ir-validator", { key: 'c7ef85b76c44d45ba04f24c0dbba11193d2eb27b', schema: AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, h("ir-input", { key: '5ec4cf13d09dc774e13dcbe121c78a39742ec255', autocomplete: "none", placeholder: t('Lcz_BusinessNamePlaceholder', { fallback: 'Business name' }), value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '634b9976e09f734a933bc6843c1d70a7d3e5b342', schema: AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, h("ir-input", { key: '4473b4bd42c96a9b661e063bc246ae1427fcb10b', placeholder: t('Lcz_TaxNumberPlaceholder', { fallback: 'Tax number' }), value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), h("ir-validator", { key: 'fb5f7e3706e4fe7ee709c5081579036ba29d756a', schema: AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, h("ir-input", { key: 'c0efa07d82bc7af3e703afc5f532c76749a8c109', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: t('Lcz_CodenamePlaceholder', { fallback: 'Codename' }), value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), h("wa-card", { key: 'e8d3964a0ef6a9c0e0fd01074ae6f715ea9f8de1', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, h("p", { key: '06b218022d7fe33c7788d44edae2930528d236d4', slot: "header", "data-testid": "agent-profile-billing-title" }, t('Lcz_BillingAddress', { fallback: 'Billing Address' })), h("div", { key: '1ee1ba481c5f84b3a76ff6c1799381270cdd520b', class: "agent-form-group" }, h("ir-validator", { key: 'cb785f4d71fb2a491fb90bf02c6c207d34260976', schema: AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, h("ir-country-picker", { key: 'b926a61056e35f86b04c19d9d964a46a3bf9243f', placeholder: t('Lcz_Country', { fallback: 'Country' }), country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), h("ir-validator", { key: 'c6c285b21b18011217e18424c85a6e1fbddfbea2', schema: AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, h("ir-input", { key: 'e0add24630baa527e8f659becf696fedbb84295d', placeholder: t('Lcz_CityPlaceholder', { fallback: 'City' }), value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), h("ir-validator", { key: 'ecf81712af075e73f124310d4f87d7214916615c', schema: AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, h("ir-input", { key: '08e652ac8e208df30c046a6164f0a5703578040a', placeholder: t('Lcz_Address', { fallback: 'Address' }), value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), h("wa-card", { key: '08b87d2bc056ebf055d7da6b9772bd302965696a', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, h("p", { key: '276ee40833f2481a6094a80b888672d6fd1de724', slot: "header", "data-testid": "agent-profile-contact-title" }, t('Lcz_ContactInformation', { fallback: 'Contact Information' })), h("div", { key: '1d94a32b0fd0a02f931ccf38139332e133810159', class: "agent-form-group" }, h("ir-validator", { key: '2fa45e788b55987bfd0cbb8c1a9805f507764484', schema: AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, h("ir-input", { key: 'd42f737ca23cdc05078e303362ff623fcd0e76d0', placeholder: t('Lcz_Name', { fallback: 'Name' }), value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), h("ir-validator", { key: '6eac0916bbf125b98cac5124e4fdda3244ba1d6a', schema: AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, h("ir-input", { key: '4c566aa70da588f9e2bf845b9517c31542165c1e', placeholder: t('Lcz_Phone', { fallback: 'Phone' }), value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (h("span", { key: '5c40ea1e7f32f2288dc1245c638ef14ddc7a4a3a', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), h("ir-validator", { key: '4a7a211e46f06d2ff9a0ef3e78b46feb64d38fd8', schema: AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, h("ir-input", { key: '16202882d1806dcc1e654210ce49de4915107258', placeholder: t('Lcz_Email', { fallback: 'Email' }), value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), h("ir-validator", { key: 'ae223a1f28c13a9659c4ab9864f4e6177bcaf209', schema: AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, h("ir-input", { key: 'fcd63c395cf70705e4c38664d922642f0ba83f9a', placeholder: t('Lcz_EmailBccOnBookingNotifications', { fallback: 'Email BCCed on booking notifications' }),
            // hint={t('Lcz_AdditionalEmailHint', { fallback: 'Additional email address to receive booking notifications' })}
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), h("ir-validator", { key: '178016d0ea7431bee834f3144aa974dc80142ff6', schema: AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, h("wa-textarea", { key: '5941db46d386b925513962a67b6192e378a8eef3', placeholder: t('Lcz_Note', { fallback: 'Note' }), size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

export { IrAgentContract as ir_agent_contract, IrAgentProfile as ir_agent_profile };
