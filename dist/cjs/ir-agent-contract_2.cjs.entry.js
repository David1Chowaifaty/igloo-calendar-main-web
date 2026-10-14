'use strict';

var index = require('./index-IDeZZwEK.js');
var type = require('./type-Bj2x9EWc.js');
var t = require('./t-sd8HJHNy.js');
var types = require('./types-BVJQZ50e.js');
var utils = require('./utils-DdTHrEYB.js');
require('./locales.store-D6DJIhoZ.js');
require('./IBooking-hDE_y33g.js');
require('./commonSchemas-D4iFLV5-.js');

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
        return (index.h(index.Host, { key: '1f5b7e70d554bdd20e02f11e2579eaa1225d794e', "data-testid": "agent-contract" }, !isTourOperator && (index.h("wa-card", { key: 'a7c7d02175840f7982bd1f9ec75d47673375f4ee', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: '8ef5507e82f69ee33d549bbe340ccc27adeafe8c', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, t.t('Lcz_AgentIdentification', { fallback: 'Agent Identification' })), index.h("wa-radio-group", { key: '12472ce5e6afa0dab3f77df46dffd9a37cae1d1c', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: '72971d4090f01945b2b4a5265790c3ad0327d419', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: '97a97087e75cd1ac0da2d9497e8740b7e17ae8c4', class: "radio-title" }, t.t('Lcz_BookingEngineCode', { fallback: 'Booking engine code' })), index.h("div", { key: '85d58b39f4e31e67e5e05d0b90de0167b819e5ad', class: "radio-hint" }, t.t('Lcz_UsedDuringOnlineBooking', { fallback: 'Used during the online booking' }))), this.agent?.verification_mode === 'code' && (index.h("div", { key: '38ccb492e181f1e4d5f6ca42d169578ecddd8f92', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: '8d13dd9dfaed530a174d07cc57d8f5efceb9be75', schema: types.stringType().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: 'e2c5e2122121aa23001d386cc183d28a69ec1f89', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_FiveToTenCharactersPlaceholder', { fallback: '5 to 10 characters' }), maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: '0bbac032d745c42bfbb22deb14c22acd4935bddd', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: '5a8928f7813e285403b280b315c1a5f92f423cba', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '71fe911659b760b9dd55afc7b61746aada4dbdc3', class: "radio-title" }, t.t('Lcz_AffiliationYesNoQuestion', { fallback: 'Affiliation Yes/No question' })), index.h("div", { key: '3e69f903fb8255cfcbec1ac69c1bd28caea77501', class: "radio-hint" }, t.t('Lcz_AnsweringYesAppliesAgencyRates', { fallback: 'Answering **Yes** will apply the agency rates' }))), this.agent?.verification_mode === 'question' && (index.h("div", { key: '7c0bc37f16ea6d0d4dd9b03327a15c408f6b94af', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: '9eed7f74168bd57e3d81126daf36813f98192a7f', schema: types.stringType().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: '24ac3ec305dff652a47cf7d424c01a24c94a11e6', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: t.t('Lcz_ExampleAffiliationQuestionPlaceholder', { fallback: 'e.g. Are you a Wizz Air cabin crew?' }), value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), index.h("wa-card", { key: '066614f484f9a2a9193166c56a364e83128986a3', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: 'e1a54ea3c6cb072d3a5840626f3e1f2ffc7a1e0c', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, t.t('Lcz_Rates', { fallback: 'Rates' })), index.h("ir-validator", { key: '71df6eaf79a405881c2108e653febf25057da143', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: 'a56682951590e560cbf8594f2e16c78866a3d078', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: 'e42eccf2eee10147b92ff4ffaf6596f499479b3a', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: 'e50424d5b84fd459202543080693f0c26c3ae560' }, index.h("div", { key: 'b4ea7d59162e30b7c330c841a08eec8deb7b3bc8', class: "radio-title" }, t.t('Lcz_UseAgentAssignedRatePlans', { fallback: 'Use agent-assigned rate plans (Net)' })))), !isTourOperator && (index.h(index.Fragment, { key: '6f900d7efc6ae92aa96602921d8d628f14aaa694' }, index.h("wa-radio", { key: '3b2877ca03c3d59c5d6b6efac51d7fc60a5b265d', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '800aed4e791a78a38cb70bea04d8ee8a6ba4b4da' }, index.h("div", { key: '9204cd579f9eae07b20c889d45f993368e6d210c', class: "radio-title" }, t.t('Lcz_ApplyPercentageCommissionOnBar', { fallback: 'Apply a percentage commission on BAR' })), index.h("div", { key: '4afa0d9cca277ae355a1a5c7abd700a3c2947926', class: "radio-hint" }, t.t('Lcz_ReduceNightlyBarByFixedPercent', { fallback: 'Reduce the nightly Best Available Rate by a fixed %' })))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: '57bcf973c7ae1d6bef531eddabaec8917ed13f73', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: 'c8bbfe5de6044ec240b42b187890146e717e16c8', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: t.t('Lcz_Commission', { fallback: 'Commission' }), "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: '11033f01df341709e9327817bf0db1a993dbcc23', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: '80d903dcd84f9047969dcc0cc75f112f75e35229' }, t.t('Lcz_Commission', { fallback: 'Commission' })), this.agent?.provided_discount && index.h("p", { key: '0405f6f8247e7dbca0da5ff5b18d0a25243ea02e' }, this.agent?.provided_discount, "%"))), index.h("div", { key: 'd66d60e2a291e4c3653a51dd07c0b169c1cb7e9a', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: '043cfc1e877c937cdb9a101aae0c5ff94960fd51', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: '9c41ad1c9d59b0d6d32a0599f67014d6ad16ffe1', class: "rates-extra__title" }, t.t('Lcz_AppliesToNonRefundableRates', { fallback: 'Applies to Non-Refundable rates' }))), index.h("wa-switch", { key: 'f019b1eba07346a1e50973f041b697d3eefbda13', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: 'c171a846632087cd706085126a01d5e603e23f13', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: '5ea7d6ed526a8e8eb6b8b21576d31486ff1833f0' }, index.h("div", { key: '947f7839b15178813ac81e03b4d18f3b5700ac72', class: "radio-title" }, t.t('Lcz_UseContractBasedRates', { fallback: 'Use contract-based rates' })))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: 'a8277a58c921bbdd73a0c830c39aa3c00c873663', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: '40f18e5ea16cae984cb68f50207b173cbbb8b709', schema: types.stringType().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: '11b19bb5c6bf9b2599368cdf37851da2831ab6c6', placeholder: t.t('Lcz_EnterContractReferencePlaceholder', { fallback: 'Enter contract reference' }), onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: '6c4bcf4033d3061654bc2af93ec9ed6b680cc673', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: '95e0b1bc4f164689d839fb1297374822282c925c', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, t.t('Lcz_CollectionMethod', { fallback: 'Collection Method' })), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, t.t('Lcz_NetPayLaterCityLedger', { fallback: 'Net pay later (City ledger)' })), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, t.t('Lcz_AgentPaysOnCreditTermsAfterCheckout', { fallback: 'Agent pays on credit terms after guest checkout' })))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
        return (index.h(index.Host, { key: 'fa469ed27b123f6400ef6bd67dd0809e878639eb', "data-testid": "agent-profile" }, index.h("wa-card", { key: 'f10fd8ed4ad9c1d7339e4f968068fae469167c23', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '7680858992bf9823684881d01219622864b91467', slot: "header", "data-testid": "agent-profile-business-title" }, t.t('Lcz_BusinessInformation', { fallback: 'Business Information' })), index.h("div", { key: '531ee0e082daaaacd4f1ce384373bbaa9f34be5b', class: "agent-form-group" }, index.h("ir-validator", { key: '4eccffed6bf730a67461f4fffad0fcc869d22182', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: 'b69396af96721daf93c7fe3d6fa2b724168db3a4', size: "s", placeholder: t.t('Lcz_SelectAgentTypePlaceholder', { fallback: 'Select agent type ...' }), value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, utils.getSetupEntryLabel(agent)))))), index.h("ir-validator", { key: '710f2f73950f731250358e829b0826c7a707043f', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: '02b52b4dfef9b82834ccd7f84fefd97a321e784c', autocomplete: "none", placeholder: t.t('Lcz_BusinessNamePlaceholder', { fallback: 'Business name' }), value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '67c976a8e831a37f289c62122b94e2e36d4f7ba9', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: 'e4021637c049b4340a00be7bf32782774ca5dced', placeholder: t.t('Lcz_TaxNumberPlaceholder', { fallback: 'Tax number' }), value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: '498586071af6f3951ced46cd5dec4012f992a93c', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '279971442564e87680db575587f5cc9122e13889', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: t.t('Lcz_CodenamePlaceholder', { fallback: 'Codename' }), value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), index.h("wa-card", { key: '04c18b3a0c80e71656c1ae711ab7e225650d0756', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: 'd49f91b2d3ee5faaab9b5959de29b90f159cf384', slot: "header", "data-testid": "agent-profile-billing-title" }, t.t('Lcz_BillingAddress', { fallback: 'Billing Address' })), index.h("div", { key: '8c916b5914d07658f17d422580b8bbf97be968ce', class: "agent-form-group" }, index.h("ir-validator", { key: '08be6076041c5f2eefb4a21bd47f0436a672a128', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: '310d3a5f53ffaf08a42302900bb7501b98786cca', placeholder: t.t('Lcz_Country', { fallback: 'Country' }), country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: 'aaa87312bdb869eb6bd25f4178a64f49757dc506', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: '92957c178e2ab272c35677dbe67657174d28afd8', placeholder: t.t('Lcz_CityPlaceholder', { fallback: 'City' }), value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: 'e091f8c8ea02aaeb659275bd5bd854ed9e14a628', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: 'f6eef385777fc32e6ca87c901effbbb976854834', placeholder: t.t('Lcz_Address', { fallback: 'Address' }), value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: '61fb17f03c0ea64fed1a9a409e9c015b8ccf44a4', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '62ddd04048e6682c4d6e7dcdc0530d5d328c1c48', slot: "header", "data-testid": "agent-profile-contact-title" }, t.t('Lcz_ContactInformation', { fallback: 'Contact Information' })), index.h("div", { key: 'bb89b4746987e468480dfc36fd8eac95c381730a', class: "agent-form-group" }, index.h("ir-validator", { key: '7c8d2c830b720087717b37984d89aed606e608e2', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: '084d19d92b53b06c2b922de35e157acc63a47577', placeholder: t.t('Lcz_Name', { fallback: 'Name' }), value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: '4931f1d2224cfc1e9c3fe7a986740939709b7cda', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '38c5c2c9b78e0667a75e6455545332b40fbc6c51', placeholder: t.t('Lcz_Phone', { fallback: 'Phone' }), value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: 'acda78f1a6167c70903d98df8beb18f4435895f8', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: 'f33e92c9cc6c84dac118268b22ae101644f66289', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: '3fa817e8422e94e11c81d674ebf850590721e0a4', placeholder: t.t('Lcz_Email', { fallback: 'Email' }), value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: '39c387f57110523d6ceeea2794d6913c268891c5', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: '71516a739e5553ddf631665450e8ea0214b60463', placeholder: t.t('Lcz_EmailBccOnBookingNotifications', { fallback: 'Email BCCed on booking notifications' }),
            // hint={t('Lcz_AdditionalEmailHint', { fallback: 'Additional email address to receive booking notifications' })}
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), index.h("ir-validator", { key: 'e03cceb727fdece3451facec7e3627d076787d6d', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: '3359f355a3891fae8fc1d63734003f3e649434c1', placeholder: t.t('Lcz_Note', { fallback: 'Note' }), size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;
