'use strict';

var index = require('./index-CQkpA5n3.js');
var type = require('./type-BRhg-bzd.js');
var t = require('./t-CyRK1btk.js');
var types = require('./types-BlCoz3jZ.js');
var utils = require('./utils-CQGL0l4_.js');
require('./locales.store-BMTss6fG.js');
require('./IBooking-C1lok6Tq.js');

const irAgentContractCss = () => `.sc-ir-agent-contract-h{display:block}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-inline:0;padding-bottom:0}.contract-card.sc-ir-agent-contract::part(header),.contract-card.sc-ir-agent-contract [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.contract-card.sc-ir-agent-contract:first-of-type::part(header),.contract-card.sc-ir-agent-contract:first-of-type [part~="header"]{padding-top:0 !important}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"],.contract.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-top:1rem}.contract-form-group.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract p.sc-ir-agent-contract{padding:0;margin:0}.contract-card--horizontal.sc-ir-agent-contract::part(body),.contract-card--horizontal.sc-ir-agent-contract [part~="body"]{display:flex;align-items:center;gap:1rem}.contract-hint.sc-ir-agent-contract,.radio-hint.sc-ir-agent-contract{font-size:0.75rem;color:var(--wa-color-text-quiet);margin-top:0.25rem}.contract-row__text.sc-ir-agent-contract{flex:1 1 0%}.contract-row.sc-ir-agent-contract{display:flex;align-items:center;gap:1rem}.rate-mode.sc-ir-agent-contract::part(form-control-input),.rate-mode.sc-ir-agent-contract [part~="form-control-input"]{display:flex;flex-direction:column;gap:0.5rem}.rates-extra.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem;margin-inline-start:2rem}.rates-extra__slider.sc-ir-agent-contract{max-width:320px}.rates-extra__row.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;gap:1rem}.rates-extra__text.sc-ir-agent-contract{display:flex;flex-direction:column;gap:0.15rem}.rates-extra__title.sc-ir-agent-contract{font-weight:500;margin:0}.rates-extra__hint.sc-ir-agent-contract{font-size:0.75rem;opacity:0.7;margin:0}.rates-extra__slider-label.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;width:100%}.rates-extra__slider-label.sc-ir-agent-contract p.sc-ir-agent-contract{margin:0;padding:0}.rates-extra__switch.sc-ir-agent-contract{flex-shrink:0}@media (min-width: 768px){.contract-card.sc-ir-agent-contract::part(body){padding-inline-start:0.5rem}.rates-extra.sc-ir-agent-contract{padding:0.5rem 1rem;border-inline-start:1px solid var(--wa-color-surface-border)}}`;

const IrAgentContract = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentFieldChanged = index.createEvent(this, "agentFieldChanged");
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
        const isTourOperator = this.agent?.agent_type_code?.code === type.AgentsTypes.TOUR_OPERATOR;
        return (index.h(index.Host, { key: '3f0771ae96a5e1c42e5a16ed9507e0b5edab87ea', "data-testid": "agent-contract" }, !isTourOperator && (index.h("wa-card", { key: '010bc2259540fe979c619caac1018a4e96b920fc', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: '922448ecaceec17459fbf127fc8fd53dfdb0a07e', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t.t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), index.h("wa-radio-group", { key: '3371a169aba0afed70d068929c84095591b89b18', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: '2ae54d88d53496ffecf76d64f3101e4c2d9cf083', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: '1a33bb6bf6c153b53df1ce48a7e197f77498422d', class: "radio-title" }, t.t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), index.h("div", { key: '26bbb3ac349b82024fb0b8d2a67b2abe58f45e13', class: "radio-hint" }, t.t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (index.h("div", { key: '7313c5c3bef5cc93fd193df165ddeaefc04df231', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: '2e58a70968bb5896576c40f643df12ddb7e72e9c', schema: types.stringType().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: '877d66c4988753b6e4d5010d7d5e7d666a0f6386', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: '14fc5874400715791b7f33b1dbc0e2ac7b80f239', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: '82d28ecf42e5b714af46ec2dedfcdafb98a48997', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '1462ec1ad02e754abdfe0db7308eec35bbbd2870', class: "radio-title" }, t.t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), index.h("div", { key: '3a36be003722b18c65b067feef76fd4a4f98cac2', class: "radio-hint" }, t.t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (index.h("div", { key: 'cdd0ff2cc214cb7d3e5561f705c67566426a77ed', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: 'dc1b7627cb2ab6e5b4350eb5ba6da0ad9a151d50', schema: types.stringType().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: '334b3480df96759916591ca0c77554eeca3cc7e3', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), index.h("wa-card", { key: '02dbdc81739b9685fb0f53750c18d7567d7e1530', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: '0ced46b8066377721d91147d3ec1971dcb069694', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t.t('Lcz_Rates', { fallback: 'Rates' })), index.h("ir-validator", { key: '9ad0dc8440a53dd2a0082d634bf16af304753ac6', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: '5d5612d51662735e929a7dbbba9619dacd277bb3', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: '7275bc6a5457e4c76897627bff324dc70ce1ba19', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: '5b9f01741a87f130bf451293f30910f88acc7ea4' }, index.h("div", { key: '3a9461749adf4c1c017cc93e9f35285ea4be0222', class: "radio-title" }, t.t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (index.h(index.Fragment, { key: '1c5db641cd5985a09b4863c77756cd6dd51863ff' }, index.h("wa-radio", { key: '4b3cccdc008646256864826a8db45736ed29496e', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '018748ed7ebabb653ffac7f34d61d6d2c6271fb3' }, index.h("div", { key: '3eb9671dc3fa40a0ee406ad3f858bdc99082520c', class: "radio-title" }, t.t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), index.h("div", { key: '9ec64675ee8d07721efe2efb8a5b8739955f7d85', class: "radio-hint" }, t.t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: 'bea87b067607b6b7eda1c7b61cb2b2d436fdb8a0', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: 'f8adfb298a1de7920b7177f877e456fa5bb13ad3', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t.t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: 'a5f9ce0e5205a3734df1626ba10fc289fd0df2f6', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: 'b17f026ee55acfaca2ff1698f38fa845455245b4' }, t.t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && index.h("p", { key: '46529983d7e758c15eb37297861afe52dee7a11a' }, this.agent?.provided_discount, "%"))), index.h("div", { key: 'c411791f13bed527e2e4fdfad89c852fe82a060e', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: 'f5d2c5279f9b015b639b1a2c69a49b6350edee93', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: '89229db1674550c72a6664803f5296e687210301', class: "rates-extra__title" }, t.t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), index.h("wa-switch", { key: '87dc145e29c1d80dfae14b4ec4c33f19a98d32f5', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: '4813cadfc4a2182f211cd6e1f570e4b699aac32e', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: 'ed2278749cd6791d83b5e025455b6915fcb9ee31' }, index.h("div", { key: '1f0b342d1b3a1339c82529dad1566ce4c4488f52', class: "radio-title" }, t.t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: 'a963c33906fefde4afb955c4d1bbb4156355cf56', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: '30babbb8b54859d54a94a039b03e0b11122b02ac', schema: types.stringType().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: '2b6487bafa647debdc7ce4805255a7de174f30bf', placeholder: t.t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: '47e6c933e02e36b42061ad2536b9da83b9874eca', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: '1e385cb246781a48628fb08048c0636d6c0679da', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t.t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t.t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t.t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, index.h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, t.t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), index.h("div", { class: "radio-hint" }, t.t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))), index.h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, t.t('Lcz_FromGuest', { fallback: 'From guest' })), index.h("div", { class: "radio-hint" }, t.t('Lcz_PaymentCollectedDirectlyFromGuest', { fallback: 'Payment collected directly from the guest' })))))))));
    }
};
IrAgentContract.style = irAgentContractCss();

const irAgentProfileCss = () => `.agent-profile.sc-ir-agent-profile,.agent-form-group.sc-ir-agent-profile{display:flex;flex-direction:column;gap:1rem}.agent-card.--status-card.sc-ir-agent-profile::part(body),.agent-card.--status-card.sc-ir-agent-profile [part~="body"]{padding-top:0}.agent-card.sc-ir-agent-profile::part(body),.agent-card.sc-ir-agent-profile [part~="body"]{padding-inline:0;padding-bottom:0;padding-top:1rem}.agent-card.--business-info.sc-ir-agent-profile::part(header),.agent-card.--business-info.sc-ir-agent-profile [part~="header"]{padding-top:0}.agent-card.sc-ir-agent-profile::part(header),.agent-card.sc-ir-agent-profile [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.agent-card.sc-ir-agent-profile p.sc-ir-agent-profile{padding:0;margin:0}.agent-card--horizontal.sc-ir-agent-profile::part(body),.agent-card--horizontal.sc-ir-agent-profile [part~="body"]{display:flex;align-items:center;gap:1rem}.agent-card__header.sc-ir-agent-profile{flex:1 1 0%}.agent-card__description.sc-ir-agent-profile{font-size:0.75rem;color:var(--wa-color-text-quiet)}.agent-form-row.sc-ir-agent-profile{display:flex;align-items:center;justify-content:space-between;gap:1rem}@media (min-width: 768px){.agent-card.sc-ir-agent-profile::part(body){padding-inline-start:0.5rem}}`;

const IrAgentProfile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentFieldChanged = index.createEvent(this, "agentFieldChanged");
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
        return (index.h(index.Host, { key: 'c8af587f5e767f47280ae5fe1930b87cb1095eec', "data-testid": "agent-profile" }, index.h("wa-card", { key: '3d24070d09bbcd99b9dce3d293b774e1314dcc17', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '531b0e7c7ff292869d62ddebfc023d93c67f5a40', slot: "header", "data-testid": "agent-profile-business-title" }, t.t('Lcz_BusinessInformation', { fallback: 'Business Information' })), index.h("div", { key: '799e9a4cf6d94ca96da883bfc4b0a16c2d6b3415', class: "agent-form-group" }, index.h("ir-validator", { key: 'd248363b2f7b37fdbac9004b65a6d7b567609717', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: 'c7337404d96e188252d2769b07825856c44658dc', size: "s", placeholder: t.t('Lcz_SelectAgentTypePlaceholder', { fallback: 'Select agent type ...' }), value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
                const code = e.target.value;
                let payload = { agent_type_code: { code, description: '' } };
                if (code === type.AgentsTypes.TOUR_OPERATOR) {
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
            ?.sort((a, b) => utils.getSetupEntryLabel(a).toLowerCase().localeCompare(utils.getSetupEntryLabel(b).toLowerCase()))
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, utils.getSetupEntryLabel(agent)))))), index.h("ir-validator", { key: 'fabf00bb2e856045e3236e17bedb5ececa70cf16', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: 'd915ede353f86df8de4e034c5d6eef4435047124', autocomplete: "none", placeholder: t.t('Lcz_BusinessNamePlaceholder', { fallback: 'Business name' }), value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: 'a835addce9353bde94cc38b67477df6f8a41689c', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: '70ab80a86c5253d8d821706d72786d01ffe6111b', placeholder: t.t('Lcz_TaxNumberPlaceholder', { fallback: 'Tax number' }), value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: '1a879606c916b7ba454ee6e7c5c269e7fef0aec1', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '0ddb85a3ca40c2bb693ebd403a1c59ea43f9196f', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: t.t('Lcz_CodenamePlaceholder', { fallback: 'Codename' }), value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), index.h("wa-card", { key: 'a94c8f8f7fdecf33eb89c16f5e47700c28166600', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: '6d3e17af4871ce435a420b62c771d8f3785f8442', slot: "header", "data-testid": "agent-profile-billing-title" }, t.t('Lcz_BillingAddress', { fallback: 'Billing Address' })), index.h("div", { key: '151cbbeaa5e14486a9fac19c35f0c2807d2b5568', class: "agent-form-group" }, index.h("ir-validator", { key: 'f8c4fd2c6e08514162dacb8e974fabf584134630', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: '6b43cfb1963d6c288d024f0f3e9d00f7d2236612', placeholder: t.t('Lcz_Country', { fallback: 'Country' }), country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: '29e8deed7b7153b851dbe2805137a9995e45cfb5', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: '7bd3506ce78b175ef2c983b0b2f22a536b9d7eba', placeholder: t.t('Lcz_CityPlaceholder', { fallback: 'City' }), value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: '789c56c5bd93aaaa05189998343a501dfdedec08', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: 'c26136d432a033f50be593cb04fd137f68ad9ad4', placeholder: t.t('Lcz_AddressPlaceholder', { fallback: 'Address' }), value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: 'a0913983af2b0f151d9c2e2ccc234c76e593fb4e', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '1b6302fac5fdade2e0126093eb3669a40abe490e', slot: "header", "data-testid": "agent-profile-contact-title" }, t.t('Lcz_ContactInformation', { fallback: 'Contact Information' })), index.h("div", { key: '2f4520076d8ca85d7c17a18f08f6e48be444c359', class: "agent-form-group" }, index.h("ir-validator", { key: '27d4ec54666f8eb883c8a0c06b96676bcac92567', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: '64ac2c82f23c61d8b51e8b230191369287116ed5', placeholder: t.t('Lcz_Name', { fallback: 'Name' }), value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: '5cd4ba45c241c38fee3ab237623bd580cc6a3584', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '053474d24cb1cabdd3d5cc6aee21c80d57564d4c', placeholder: t.t('Lcz_Phone', { fallback: 'Phone' }), value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: 'e82efb0a4f75eda40adb03b4180946575efbd37f', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: '260faabd7294f2cdf535423e0f9e04629e8f8211', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: 'bb119dcde46e7500548710237080bb40bef794a6', placeholder: t.t('Lcz_Email', { fallback: 'Email' }), value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: 'c92db39c5cc7ee63917978b8ad749367b6d3f16b', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: 'd136eef0d34251f1376f03f609e129d774388de8', placeholder: t.t('Lcz_EmailBccOnBookingNotifications', { fallback: 'Email BCCed on booking notifications' }),
            // hint={t('Lcz_AdditionalEmailHint', { fallback: 'Additional email address to receive booking notifications' })}
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), index.h("ir-validator", { key: '992690d6c64a796aedc7dd69803cda2dcfc60eb7', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: '9f987e7c2fca4e818e1ad2fb49f38fe6c8c523e3', placeholder: t.t('Lcz_NotePlaceholder', { fallback: 'Note' }), size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;
