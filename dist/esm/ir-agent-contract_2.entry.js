import { r as registerInstance, c as createEvent, h, F as Fragment, H as Host } from './index-Nexq2OjX.js';
import { A as AgentBaseSchema, b as AgentsTypes } from './type-D7rOPtKA.js';
import { l as libExports } from './index-DeW5X45W.js';

const irAgentContractCss = () => `.sc-ir-agent-contract-h{display:block}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-inline:0;padding-bottom:0}.contract-card.sc-ir-agent-contract::part(header),.contract-card.sc-ir-agent-contract [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.contract-card.sc-ir-agent-contract:first-of-type::part(header),.contract-card.sc-ir-agent-contract:first-of-type [part~="header"]{padding-top:0 !important}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"],.contract.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-top:1rem}.contract-form-group.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract p.sc-ir-agent-contract{padding:0;margin:0}.contract-card--horizontal.sc-ir-agent-contract::part(body),.contract-card--horizontal.sc-ir-agent-contract [part~="body"]{display:flex;align-items:center;gap:1rem}.contract-hint.sc-ir-agent-contract,.radio-hint.sc-ir-agent-contract{font-size:0.75rem;color:var(--wa-color-text-quiet);margin-top:0.25rem}.contract-row__text.sc-ir-agent-contract{flex:1 1 0%}.contract-row.sc-ir-agent-contract{display:flex;align-items:center;gap:1rem}.rate-mode.sc-ir-agent-contract::part(form-control-input),.rate-mode.sc-ir-agent-contract [part~="form-control-input"]{display:flex;flex-direction:column;gap:0.5rem}.rates-extra.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem;margin-left:2rem}.rates-extra__slider.sc-ir-agent-contract{max-width:320px}.rates-extra__row.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;gap:1rem}.rates-extra__text.sc-ir-agent-contract{display:flex;flex-direction:column;gap:0.15rem}.rates-extra__title.sc-ir-agent-contract{font-weight:500;margin:0}.rates-extra__hint.sc-ir-agent-contract{font-size:0.75rem;opacity:0.7;margin:0}.rates-extra__slider-label.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;width:100%}.rates-extra__slider-label.sc-ir-agent-contract p.sc-ir-agent-contract{margin:0;padding:0}.rates-extra__switch.sc-ir-agent-contract{flex-shrink:0}@media (min-width: 768px){.contract-card.sc-ir-agent-contract::part(body){padding-inline-start:0.5rem}.rates-extra.sc-ir-agent-contract{padding:0.5rem 1rem;border-inline-start:1px solid var(--wa-color-surface-border)}}`;

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
        return (h(Host, { key: '8adcd17415267e9861e317a927762d375462e1d4', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: '7014af5bd109ed5546bb37b876bbf52c853be593', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: 'b80c5918ef968dc314089739e0f80c70057cc131', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), h("wa-radio-group", { key: '699b60475aec72081f7a091aa27ef7eab39ed3cf', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: '3ec9959af730a8dd8b86074b547cb45af2a68ed0', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '2e8d5b6e5ce1683cbca0a70f4eaa94d8e86d900c', class: "radio-title" }, "Booking engine code"), h("div", { key: '684b7da1a923994b188fbc447e5b70ba24488248', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (h("div", { key: 'b0745f3224f17cccbee30b28cab40f607ed13a1c', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '51c3f029ddc1e8e622411c54ff65609f87109324', schema: libExports.z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: '7cd4b1fafe4e9cc2c168162aabdc0f72d4869fce', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: 'a8acf1ea4682ec3d5a6b776801428c2123974457', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: 'ff2e4be454ccec222dbcc99cb3862f9b06ad1130', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: 'cfbbfab61c162c403b96a3591857a7dcdfe10621', class: "radio-title" }, "Affiliation Yes/No question"), h("div", { key: '564a861e1b77b0d1068bab1c6c11916f704bd92d', class: "radio-hint" }, "Answering ", h("b", { key: '656ff58fcc4be5e1115f07186866df3f9f7a605f' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (h("div", { key: '1561c29b71f8b20891c09e39cf97c60f471b70f2', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: '4eec016e58c12454e0d9a99e577558c28a728484', schema: libExports.z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: '06683a7ca8bebe6a59bbd8bae3f3383baa391d8d', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), h("wa-card", { key: '65504dd8a3b65b843918f9058d9040a5edfdd80c', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: 'e1c51596bbdbdceb424374006badfff21d80f87f', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), h("ir-validator", { key: 'cf9515f7696722be1d8ac99ec26e2e82d6014dac', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '4ad7bb762b79054ebac7e64dacb84f1c32981f35', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '139c4effb3c50335ff4714dbdecab5695e37a7f7', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '1b2209a1dc7635d48ed1137ab94d7976ad7791c5' }, h("div", { key: 'd7789b22cdce28ab930a8a3e159584045cee45ca', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (h(Fragment, { key: '9d1b619be1af374761bbc345ed3e59a8cf851a02' }, h("wa-radio", { key: 'c2ac0ae792b1c0ed56b26544cc0f56b524e0b640', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: 'e2b4346cf3ea9b68def9ff54efd7fd1ff694aebb' }, h("div", { key: '03064330d0e6224dfbad2f7f66bad1a99b059916', class: "radio-title" }, "Apply a percentage commission on BAR"), h("div", { key: '8599c6ad09b6be3b320eaea0d72a6ff265e8f4af', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: 'e56ec55801196a676da171fbc2016ad9edced226', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '05738e9907586ac5d3002b9adaa94fc8a6bba05b', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: 'e82b022afc100aa7b83831aea4a413cd2673acca', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '7a083f6abe0ea445558dc32b2d75fa47040b0591' }, "Commission"), this.agent?.provided_discount && h("p", { key: '9310e7ce2cb93ccc012b32fccc6c349bc7c75c04' }, this.agent?.provided_discount, "%"))), h("div", { key: 'b232942c46ae8d67f02e42e38c909a84032fe1bf', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: 'bb057fec933f87f8c93c6232af838ac2f1d5a5bb', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '0d6abc99e18edd6c74ae58afea9828bb9c665401', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), h("wa-switch", { key: '4074347fd1bfbb610d43367948246d9da949ba5c', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: '9133713ad6f6b02835f6caed7637c91002eea986', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: '1dadf8932b19bc86592a84c8fd85fba0e73036a7' }, h("div", { key: 'e3bbaadb6aca724870e5f581d5e2c634f157dce7', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: 'be96680817d5105126af3d67ef41617d32c03397', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'a0b322ab4da567eac935719af1c757fc3697cd09', schema: libExports.z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: 'c703733b2d42efbdb98a1c1f75109d6dca26b31a', placeholder: "Enter contract reference", onKeyDown: e => {
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
        return (h(Host, { key: '0e439aee224fc95fe521317be4c2ff80d0ba06c1', "data-testid": "agent-profile" }, h("wa-card", { key: 'f34b3349f3cc4f091a3fcda052ff35881a6578ad', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, h("p", { key: '73b7424f47c59f4d238df4a0f2ee3184ca20414f', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), h("div", { key: 'e3d6257d8ca7f844464a3972e5fce8cd398174bb', class: "agent-form-group" }, h("ir-validator", { key: '69b4349d8dd5bd3f062787b956ec4c2350da8ec9', schema: AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, h("wa-select", { key: '50c9030e4469c0fbc7443c07c3b828421b2a3048', size: "s", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.sort((a, b) => a.CODE_VALUE_EN.toLowerCase().localeCompare(b.CODE_VALUE_EN.toLowerCase()))
            ?.map(agent => (h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), h("ir-validator", { key: '8c7bc2f3bf51b86e096d4fe48b6dfe1a960ca918', schema: AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, h("ir-input", { key: '1518ff6879258463d808d473cdf3706a28b72512', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: 'd5c2953db37e88f8bf059fe1537f843a13b138ea', schema: AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, h("ir-input", { key: '834e9f2f253adb20d0e028f383f3ddb50473cd1a', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), h("ir-validator", { key: 'c4df10738c8f655befbb62643412aa6372a2e506', schema: AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, h("ir-input", { key: 'b6ee4f066dea555767de083c9c1abec9722db43e', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), h("wa-card", { key: '61f28e61e871137d67215dee528b71635ed41377', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, h("p", { key: '8bcc13d9e66d86cf163237cdd01f1545052a055a', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), h("div", { key: '6c6bc91e3b9140c61e95b3823ee3054a8d732c5e', class: "agent-form-group" }, h("ir-validator", { key: '7d2c2d055fc8610522bac1b3978513bd26eb2ea5', schema: AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, h("ir-country-picker", { key: 'b1fb649825eb13304ad31ad3d3ffb71b265259f1', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), h("ir-validator", { key: '30d5bfc6dddec191b4cb2bc6be21f0b1fc9f010e', schema: AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, h("ir-input", { key: '0a81cd4221d51fa70b270482aa5043d9f5a71216', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), h("ir-validator", { key: 'ebb5012bc84ae62e310277212fec09856b05c2d0', schema: AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, h("ir-input", { key: '36153365c6d7adc0561ab8e9ab55968c74bfbc44', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), h("wa-card", { key: '47c368e14e2f0702a8abf7fa8c3f103a3587349a', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, h("p", { key: 'c1df82897cdc578055d4779fb0993c8e6b00731e', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), h("div", { key: 'ae79925442c1eb8b9c163214879cb6dcd9f3485f', class: "agent-form-group" }, h("ir-validator", { key: '7597b45d73e82305f03e989c1f81baffa983e867', schema: AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, h("ir-input", { key: '1800014f2983c9874f1fea56214ef8dc686437a5', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), h("ir-validator", { key: '44ddfabf9b94e8c3e6c6cb7dd467f9578641a630', schema: AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, h("ir-input", { key: '3d94d6473448b7b6216721d3c8bb36651062e40d', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (h("span", { key: 'e76c09f0c09f65ea4a95e3f3a186a5d73f0116b2', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), h("ir-validator", { key: 'a61bbe6a3c71db1451191620e2339ca523465849', schema: AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, h("ir-input", { key: '0a8e46d3611b5171677acdad53fe88dd70ec8214', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), h("ir-validator", { key: '021082b8b34343a513bf9893f2148e17c8d57b76', schema: AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, h("ir-input", { key: '696cb314e934c0b4973e19db7704d10ddfaf9453', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), h("ir-validator", { key: '07074da5ba417af902860604308c4c7b4da9b742', schema: AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, h("wa-textarea", { key: '7e73970c9ce614818f1c6998ab1cb0c434a9d5bc', placeholder: "Note", size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

export { IrAgentContract as ir_agent_contract, IrAgentProfile as ir_agent_profile };
