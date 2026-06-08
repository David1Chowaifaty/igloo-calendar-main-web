'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const type = require('./type-53035218.js');
const index$1 = require('./index-8bb117a0.js');

const irAgentContractCss = ".sc-ir-agent-contract-h{display:block}.contract-card.sc-ir-agent-contract::part(body){padding-inline:0;padding-bottom:0}.contract-card.sc-ir-agent-contract::part(header){border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.contract-card.sc-ir-agent-contract:first-of-type::part(header){padding-top:0 !important}.contract-card.sc-ir-agent-contract::part(body),.contract.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract::part(body){padding-top:1rem}.contract-form-group.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract p.sc-ir-agent-contract{padding:0;margin:0}.contract-card--horizontal.sc-ir-agent-contract::part(body){display:flex;align-items:center;gap:1rem}.contract-hint.sc-ir-agent-contract,.radio-hint.sc-ir-agent-contract{font-size:0.75rem;color:var(--wa-color-text-quiet);margin-top:0.25rem}.contract-row__text.sc-ir-agent-contract{flex:1 1 0%}.contract-row.sc-ir-agent-contract{display:flex;align-items:center;gap:1rem}.rate-mode.sc-ir-agent-contract::part(form-control-input){display:flex;flex-direction:column;gap:0.5rem}.rates-extra.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem;margin-left:2rem}.rates-extra__slider.sc-ir-agent-contract{max-width:320px}.rates-extra__row.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;gap:1rem}.rates-extra__text.sc-ir-agent-contract{display:flex;flex-direction:column;gap:0.15rem}.rates-extra__title.sc-ir-agent-contract{font-weight:500;margin:0}.rates-extra__hint.sc-ir-agent-contract{font-size:0.75rem;opacity:0.7;margin:0}.rates-extra__slider-label.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;width:100%}.rates-extra__slider-label.sc-ir-agent-contract p.sc-ir-agent-contract{margin:0;padding:0}.rates-extra__switch.sc-ir-agent-contract{flex-shrink:0}@media (min-width: 768px){.contract-card.sc-ir-agent-contract::part(body){padding-inline-start:0.5rem}.rates-extra.sc-ir-agent-contract{padding:0.5rem 1rem;border-inline-start:1px solid var(--wa-color-surface-border)}}";
const IrAgentContractStyle0 = irAgentContractCss;

const IrAgentContract = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentFieldChanged = index.createEvent(this, "agentFieldChanged", 7);
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
        return (index.h(index.Host, { key: '43e5ebf4d7621350902f5cc1cd855a6ae76d81c9', "data-testid": "agent-contract" }, !isTourOperator && (index.h("wa-card", { key: '235cea9d9b3d216752b5547597b7e624c0baa834', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: '4ae310a09aeb51971dd5dd1fc3fbbf8a20ba38a1', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), index.h("wa-radio-group", { key: '8dcbf53c8b2709ab5f5d94363aea287a18824aba', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: '6f7594cd391db90c96b67d31929eced7e9000b79', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: '7bab08d26bd1e2fc5ca2e0697fc638de23d49a1e', class: "radio-title" }, "Booking engine code"), index.h("div", { key: '8b171eb6e97e7bbf413db4772c74fa3a4d352e54', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (index.h("div", { key: '871aede5f377be5434e653628fe8950350106b90', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: 'aadabccc81d683af1f18e57d0941e1fa10c83103', schema: index$1.z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: 'be56cff7b28e9bd8c812a2bf17c7c98f760afb94', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: '576cf6c01543758dddb32930d7b104edf684499d', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: '0f8d13b344ec306d8c6745644f42e06a368b4a39', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '97133abaf3f79848c33acd84ae11197a9385e8fa', class: "radio-title" }, "Affiliation Yes/No question"), index.h("div", { key: 'ab4404488d894f4ed795ceb7a3aef55b92e072f1', class: "radio-hint" }, "Answering ", index.h("b", { key: 'a8c4a5dccc003077ebfb3a9b0a16a16876e33e58' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (index.h("div", { key: '5e4465a197a74991f7766b44a8127a9b1edff4fd', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: '765c3736f0fd2b852be5ecb84ce228f32ee61584', schema: index$1.z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: 'bba1a031c5538a922757d07274a6c5a547d3ec69', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail }) }))))))), index.h("wa-card", { key: '6f18fd3a72f72cd7bcae96b8b8a496b092425b52', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: 'e2680a7e8ac3b708753e805250dd46f3e71b8b07', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), index.h("ir-validator", { key: 'b908600225be052e0896744d97bc083024e7ebae', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: 'e93a2ba1f01a268cb56b39a7914ea66694f57087', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: 'e2719daa3752c9be8f97304d96cc87637920bc8a', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: '68b4a65f7c5516d6ade334da2d86f9f32e565746' }, index.h("div", { key: '6853b5191ee86be6a8ee005147821c266f7de626', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (index.h(index.Fragment, { key: '69708c5f0db7c96aab86d5b140b0ff0f78f9d806' }, index.h("wa-radio", { key: '50d74c7648d8d098847de6cd2a7ecc3a3c9f5830', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '88253fe39221177022e68d67265128e8bf341844' }, index.h("div", { key: '56b8c3b1d5e9618eb2ec3ff2153455e8f8f5bbdd', class: "radio-title" }, "Apply a percentage commission on BAR"), index.h("div", { key: 'e8a572c073bd2eccc5c90629017962e02e26af64', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: 'e0fd219d364bea5e23ad330679fc57acbad1acad', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: '00185d673ebaa2c1668c1542b959d93cb82a80b2', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: 'ff323cb348aa0611b0d7e5295b966e96482f9c71', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: '748164a791e0c4d68a40034081f5c37b013eff6c' }, "Commission"), this.agent?.provided_discount && index.h("p", { key: '7ad5cc1ed8850c0c446fd9d9f7e04f874091ed9f' }, this.agent?.provided_discount, "%"))), index.h("div", { key: 'd5ff85b4a8f6263cd89ebb8f63be3187da3e4a5c', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: '6a5e5bf0cd86bb8b8a6d2502884a22838504a2ec', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: 'b0e4be9dee39bae197511358c77390545a6b54fc', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), index.h("wa-switch", { key: '67ad980cd896ee145b975b6fcb14189b0a9a3386', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: 'ede14a1f902a462d60e61ae108a0a9f3b8bc2287', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: '0db38a34d525ff4c1bea4a0b493208d0ba65fe02' }, index.h("div", { key: '05a10d1e8420964dbacbbd37aa92a8265a545ed1', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: '4e8fc0bb8c80ec975a54b68b00b772dcd49aaba0', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: 'ebc27c0491068ae3f35ce53834030858165ec9b8', schema: index$1.z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: '5bb5e09d2c4a577dc27045281238a04fb2733599', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: 'ce4b261dc0593953b8b2fdf655292ca746bf8c56', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: 'ca8d5fdbef946cb3575166bf2556044f2f46f9ef', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, index.h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, "Net pay later (City ledger)"), index.h("div", { class: "radio-hint" }, "Agent pays on credit terms after guest checkout"))), index.h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, "From guest"), index.h("div", { class: "radio-hint" }, "Payment collected directly from the guest"))))))));
    }
};
IrAgentContract.style = IrAgentContractStyle0;

const irAgentProfileCss = ".agent-profile.sc-ir-agent-profile,.agent-form-group.sc-ir-agent-profile{display:flex;flex-direction:column;gap:1rem}.agent-card.--status-card.sc-ir-agent-profile::part(body){padding-top:0}.agent-card.sc-ir-agent-profile::part(body){padding-inline:0;padding-bottom:0;padding-top:1rem}.agent-card.--business-info.sc-ir-agent-profile::part(header){padding-top:0}.agent-card.sc-ir-agent-profile::part(header){border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.agent-card.sc-ir-agent-profile p.sc-ir-agent-profile{padding:0;margin:0}.agent-card--horizontal.sc-ir-agent-profile::part(body){display:flex;align-items:center;gap:1rem}.agent-card__header.sc-ir-agent-profile{flex:1 1 0%}.agent-card__description.sc-ir-agent-profile{font-size:0.75rem;color:var(--wa-color-text-quiet)}.agent-form-row.sc-ir-agent-profile{display:flex;align-items:center;justify-content:space-between;gap:1rem}@media (min-width: 768px){.agent-card.sc-ir-agent-profile::part(body){padding-inline-start:0.5rem}}";
const IrAgentProfileStyle0 = irAgentProfileCss;

const IrAgentProfile = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentFieldChanged = index.createEvent(this, "agentFieldChanged", 7);
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
        return (index.h(index.Host, { key: 'f5cf0923f9a52765933db5d2bf82b30ac76402f7', "data-testid": "agent-profile" }, index.h("wa-card", { key: 'c8ea1e6b16704a483a28dca364e2a0df5558d929', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '841008adebebf7be892332fa3a74b31aeb95e4dd', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), index.h("div", { key: '2fd6c2020d0a220fbe7e8ba09bd7fafda50e57e0', class: "agent-form-group" }, index.h("ir-validator", { key: '138dbb8f1855f3ead7529941866ab53e2d58a36b', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: '9733e9b8b429ea5267edfe5f477b985c28e729af', size: "small", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.sort((a, b) => a.CODE_VALUE_EN.toLowerCase().localeCompare(b.CODE_VALUE_EN.toLowerCase()))
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), index.h("ir-validator", { key: '57af200007e151b2729c6eb05ac66eed325d0e8d', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: '9d2f316e2923c63906db39caf672e38b664c9f18', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '9eb764fe7b16dc595c19c053107b8cec547798a0', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: 'd0cd8e2c6ed6bca492c8efee419e9241fb96a9aa', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: 'ca041faf68da4009c04a6f8cffa2369db6092cc3', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '3340861bd2f12801d2bada329c970c767980330d', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail }) })))), index.h("wa-card", { key: '3e235b3d36df3fdc56b1be6fe89b9be08dffd25a', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: 'ae6936f5bbaa6821afb39a96ab80fdcf00f0a309', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), index.h("div", { key: 'cfe48c67902f5ec04c9efc3f802d4e785cc2fd01', class: "agent-form-group" }, index.h("ir-validator", { key: '63040b8d1154f04f579955ea05ad3f154e61b2ba', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: '2a3de67c2ed8c6d9596d4a257362398273c7a33d', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: 'e35882650724037328f11d651d7e875beff1e816', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: '755704775c9f1efe934e24544524bb453c36584e', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: '080b1e828f82fe7d1da7f16aeb4a8d4d07052873', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: 'f96d4b9998bcf279a1fa8742475a85a1953e849f', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: 'd3abfd389413c8d954e5d4c0abd5acabdd4d32be', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '2f4b2d77642f879764c010f1b4644fc3e78ff41c', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), index.h("div", { key: '028a3d118c8cbde9572da8b74e2076a4eaa27bb8', class: "agent-form-group" }, index.h("ir-validator", { key: '838273e427b2b46a447dad6a1623e3ea293a3573', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: 'a5d446550d451b51fc16a3438e355aa65ba5fef5', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: 'e3085ae4ea89020a76e03dad6e2fba5f243be8c4', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '6a96b9967e846480112fa517d6514b2c2393a05c', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: '833b2daaba5e562c0f0b1373a7be34602fe00d60', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: '88f8dce73cc246f9a5d40a78d1d9c294e776f4d4', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: 'f184f3c3f9c5d02ed6e6c341b8aac4e62be2a8f6', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: '5cbaae010e3ed82ff1f7510a434b6d2d989450a3', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: 'f766c07cbfe56988bd78531f2364c4784ac48834', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail }) })), index.h("ir-validator", { key: '1fe21743f304ef07fbe269ffbe1cbb7bb7558681', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: 'ce14108e4cf5df4d5e8efd63e9f76fac9c3f7374', placeholder: "Note", size: "small", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = IrAgentProfileStyle0;

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;

//# sourceMappingURL=ir-agent-contract_2.cjs.entry.js.map