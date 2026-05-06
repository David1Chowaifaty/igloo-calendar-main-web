'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const type = require('./type-87fd01b8.js');
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
        return (index.h(index.Host, { key: '0b25033ee54048907324a84ff04241b11aea88e3', "data-testid": "agent-contract" }, !isTourOperator && (index.h("wa-card", { key: '6cc376f58adbf0d299528221bd7f9a74a5aa8280', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: '8938b9db3df227331934ce61f21ed3a3cc34b89c', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), index.h("wa-radio-group", { key: 'd74d098391475bb42afd57c60628b8185b1b94ed', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: 'd4ad99d0f5a0f536891a51576f67e1426263b563', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: '4e5b9b8b71f931e126ecd30a5f8353ecb3534e03', class: "radio-title" }, "Booking engine code"), index.h("div", { key: '569047bf6174dc0629d7dae5bbb75d87d5f062c9', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (index.h("div", { key: 'ff191fd0b0a0fb8a11743fb294f726e7460468ac', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: 'b309306388b0fc72798ddee15aa43f463d38152f', schema: index$1.z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: 'cd98ed3787db8912de75e383a63ef42181ad0244', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: 'a9f5a3d6fb51cf655d96e75b2697b80aa70c5398', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: '58f9b7442da18d4c18f910cc317b455ab0b7b50b', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '0927c061cc744b2aee3b51bfcccbc644d8bcb156', class: "radio-title" }, "Affiliation Yes/No question"), index.h("div", { key: 'adee4fc460fd64282dbbc3415f00d2dbd31421c1', class: "radio-hint" }, "Answering ", index.h("b", { key: 'f9b0d81778e72a2d441ec8dfd4d190707c7a7b3a' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (index.h("div", { key: '0dc0107d23c2d05029ff784daefec71c8703424d', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: '9672626cf8178da809ea6c777078fd3c50049d9f', schema: index$1.z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: '7ff2c3a80ec4fb511bbac80f3328ec215b0f9763', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail }) }))))))), index.h("wa-card", { key: '5125495adf3de2d3b14165408645ec5e92fa8153', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: '359bd09d8d80424a1527372f12cf383d5d49b3f8', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), index.h("ir-validator", { key: '5ef01b4cef592f73ec7fe5cf28051c9b2eccb498', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: '7e7bf6a95d12053a745a33425c7e130af1be9bc4', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: '87d0081bceb5a184c5a038e39f8cabd93b3c2c48', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: '6c7f1ec69f3645c2ff1410871f2c55708eb337a2' }, index.h("div", { key: '57ababa1706241db527f6d78f3de6b73863ea40c', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (index.h(index.Fragment, { key: '808613f4ac819e7a6e84fcfb46b2dae3c782e90d' }, index.h("wa-radio", { key: '79897cde44356c9bb30e7fdf56b7895a9042eb5d', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: 'e46b86885aaa0a533d080ba3aedd1718c4184fdb' }, index.h("div", { key: '37571cfdacad070fb1321144996ee49248fc61e6', class: "radio-title" }, "Apply a percentage commission on BAR"), index.h("div", { key: 'd980b560f46a07b357ec12a4172f72b855f877af', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: '79e367a27d67ecafc2dbcdc614879e61c7f48f80', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: '5772235a27fc7400e5d9eb952d445f767d79c3be', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: '6161a1d88e4d68978a646d572133e26bd2215105', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: 'f1fd72f15f9e2e38b4c446931799a270ab7834b1' }, "Commission"), this.agent?.provided_discount && index.h("p", { key: 'cdac02a1ecd71f12de3b8d68d658d7852fe238a2' }, this.agent?.provided_discount, "%"))), index.h("div", { key: '055e3e1867735977d1d1e3de551c7719336b396f', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: '9f8577c54f8c70b2157cfeb5dcfb6c21e3f05dfe', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: '437e7f260588df294c295dabe7dc5f57c5bbc28e', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), index.h("wa-switch", { key: '34c78a4101ab5f8486fccaabab2a154df4014876', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: '8b3f0599243be9d9ab424cc4e78a765b1bb867bd', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: '5fcf390d89220f7f39a98c69666f9b7339b32b8e' }, index.h("div", { key: 'c919dd07f845c86938c38fb89e20eecbf9b620c7', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: 'f046ea33608047b9821f1164a463e540ad94903b', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: 'b830e85c58d7122643cdc81dadbb56da8caa5bf9', schema: index$1.z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: '4df25d7d7c5a5b6dcbd6a1bc453d5b86d8aee75d', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: '659383c18ca7684f8d482fa5ea241a7167532ab4', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: 'e81652a5534974997d971dc2060d57ff3445416e', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, index.h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, "Net pay later (City ledger)"), index.h("div", { class: "radio-hint" }, "Agent pays on credit terms after guest checkout"))), index.h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, index.h("div", null, index.h("div", { class: "radio-title" }, "From guest"), index.h("div", { class: "radio-hint" }, "Payment collected directly from the guest")))))), index.h("wa-card", { key: '413336f4244085f777e8369ece4326fbb64e47c3', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: '2e04f1be378d59412705d71242fbfee4f8c4c254', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Post Timing"), index.h("ir-validator", { key: '8ca203b468d7b6ade87c1a56a26cae4bda136a81', value: this.agent?.cl_post_timing?.code, schema: index$1.z.string().nonempty() }, index.h("wa-select", { key: '00e618b733e468ce5d739334473ea845cbe1edfd', value: this.agent?.cl_post_timing?.code, defaultValue: this.agent?.cl_post_timing?.code, placeholder: "Select ...", onchange: e => this.updateField({
                cl_post_timing: { code: e.target.value?.toString() },
            }), size: "small" }, this.setupEntries?.cl_post_timing?.map(t => (index.h("wa-option", { value: t.CODE_NAME }, t.CODE_VALUE_EN))))))));
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
        return (index.h(index.Host, { key: 'a602bc784704f221f898086998e614072f215edb', "data-testid": "agent-profile" }, index.h("wa-card", { key: '0324e913a18c94a4e56c2a1bec588691c0a78787', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '5b5440d3923a97fd26a09ab871c7818e76dd213d', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), index.h("div", { key: 'dc7549152513fd4095d7e8516b929a1ea18ea7f2', class: "agent-form-group" }, index.h("ir-validator", { key: '5e1529086c2ccf2777e8683d13b0ace6feae7a22', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: 'ffb1f2f3f7d97318dcb6129f88d9d46e34ff1d3a', size: "small", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), index.h("ir-validator", { key: '33febc544e0dc08db38662688e451aba1c4c15d6', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: '697b89afc2c78c4f8480137843b0cd737d7d3cd6', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '3f8cf9633032b346b9be2d43eda48b8dde149821', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: '2ae62dc903e09d531507f362687096d992905fca', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: '0d9c8ed07567b2313c11ccbce3efd2b2ea3c7ff2', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: 'c155a745f3e8b87e626443c4fef9191e992a1596', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail }) })))), index.h("wa-card", { key: '7553ab5145bee23a844e580f1750e4050a187143', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: '9998e0ab1bd98da895b98aba52c7bd5fa50165cf', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), index.h("div", { key: 'bef854527306a09404bc98b17500a147520d5f8b', class: "agent-form-group" }, index.h("ir-validator", { key: 'ebd4544ffebf0720b6dcb5055ec9237744afb77f', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: '0f36f262f0acc6cf5e6af7a6b4f2c5746220b6f5', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: '9d6281eed9716d99bc1721675bd58379048f116a', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: '324b0034f36836914e9c17c52ee8b08948b0c675', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: '3b56e90232b3642c943a4d45343cdfc290dc883d', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: '89ce603313c418e2d42b1c81a3e582997d3279e1', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: '3d2d9e2b4a0ec434787b33ec1d7a7e4ac86bda57', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '5847512d83e269dc3e50190e3eeba0c236c24982', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), index.h("div", { key: 'f16400d0983fdf66bf0ff78fe25e2a23988deb76', class: "agent-form-group" }, index.h("ir-validator", { key: '5e6bc3a4f2485d5187a96e139f861d9441aac1d9', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: 'ca1def3a70aab0038bb88d8201fcd41d6c9e2b75', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: 'ac913ce904e2075437c64896e738b7331852016e', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: 'adae21e70c3faee71b5a81159601714737b6695d', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: '24b85c57ab9582c26127e00e4d923ee3f5d4b058', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: '1873f090b8c46649910a4b2c8ecbd94ebf871c64', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: '83d63b35355d36be723837370445606b7e175761', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: 'affd4f34ff67e9fe237035235a3505111324efda', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: 'ac5a50ff5a4e6b548a3f3e0cf5c58150121ecaba', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail }) })), index.h("ir-validator", { key: '5e84e90d3f1a3342d2a172abc3e5a8ee3f667b0f', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: '09ae7d40277564e2e59ae3cc249505a1c188b6c5', placeholder: "Note", size: "small", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = IrAgentProfileStyle0;

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;

//# sourceMappingURL=ir-agent-contract_2.cjs.entry.js.map