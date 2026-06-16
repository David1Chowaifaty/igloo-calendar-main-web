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
        return (index.h(index.Host, { key: '86910220d5deb9d36041373f014d8905790195d8', "data-testid": "agent-contract" }, !isTourOperator && (index.h("wa-card", { key: 'ab197b3949d6b77e6ac061c1e7825b3f4982c7b6', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: 'a0cd0d47624ee1b1f2ff2d4477e57a6a466442d6', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), index.h("wa-radio-group", { key: '2f8106067aab9c74821dbbca3766489b3bd59f30', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: 'e85e8925d9bbf177d9ef092d10274620c761829e', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: 'c37728a6c49dab3423e8c784df3b64872b41e592', class: "radio-title" }, "Booking engine code"), index.h("div", { key: '868fc0054b9e4ce4fe6db2a64feca83df2b9d111', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (index.h("div", { key: 'f994eb1bd66cda93762a541be19f1aef1c4f2df6', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: '292dd3f01e39b268dbc5d73849d4cc573f7446e6', schema: index$1.z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: '411a3c7ebc8a2f2d3e9ba33df0ef5867ea356a01', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: '1e25f9520b619aeb972257ae1faa3517ed147c25', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: 'd61b2cc576627d5242e7c992aa831b6a67331d4c', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '94720b630356698f332eb7bb9dff540c954d8f59', class: "radio-title" }, "Affiliation Yes/No question"), index.h("div", { key: '9aa03d58969653cf644606bf9144ac0c14e0c88f', class: "radio-hint" }, "Answering ", index.h("b", { key: '5e37873f24b6fb65da32f96bfab1e1c1ee0333c4' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (index.h("div", { key: '55d1c7f1e14e2dc59f3b6bcd8161bcaab25605aa', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: 'f4ac3a626b0aa77b2c699fb1a26a3e1689eec6e4', schema: index$1.z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: 'd063e1846de451f46d3b02870a6be2ed5f241e94', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), index.h("wa-card", { key: '62a879456521429f7872f3b93ba3f93d3ac73782', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: '071055cd0cd4fbc6e486741b88c67d9e198d42e0', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), index.h("ir-validator", { key: 'bbc97a9aa0d92aecd4dd12c18917b4ccf788abf9', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: 'a13430ab553d3f528b70ba3a684367d82e110ab1', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: '19cd6a82240d73548b627addc10e49410a0631b1', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: 'f9a2eb31fafbb1212cbca3585d845e9eca13515d' }, index.h("div", { key: '62207a3a063f233440d008635d0ab0f582f8ba60', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (index.h(index.Fragment, { key: '8c7669c69f563b9b69b29cb9cd60f35da3c99ccf' }, index.h("wa-radio", { key: 'd0c8a714d895ad8a5027d8d71dd647962c525032', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '53dd5f6087f763cc45263553ebac3dffb894eb0a' }, index.h("div", { key: 'e0d5c805285ba694508fe5b709799e2d9ea479cf', class: "radio-title" }, "Apply a percentage commission on BAR"), index.h("div", { key: '0928a65e91d6e8da1c7f31f6c6e3dc8ca5f8fedf', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: '82e0d3c15ca3f0d2ed3986171c507dd700df9011', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: 'b8eae2e7d68cd78477652ba745b3ea2c01d6e5f3', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: 'fc9df36620c053a33c307a1c5442d9356683a4cf', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: '6b682609878fedd74108c008edb290d66eb40fa7' }, "Commission"), this.agent?.provided_discount && index.h("p", { key: 'f786f7bc87ec845f415e5c3e5ed10ecb5b8d2b46' }, this.agent?.provided_discount, "%"))), index.h("div", { key: 'eb65ab7632fb238f841cfe43d0eecab96eec5495', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: 'db4fff264a119372668e5ad12a0e68719de6a289', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: '639bf00ddb20997688d81638294ac97ffdfa673a', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), index.h("wa-switch", { key: '4cc4701dfb69d1320151e08a8fcfda7f8ea9e45f', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: '31becfefd5aa1fdd6439e93d554be47fafa03c30', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: '0b5c18e1403734483bbc3f7e15dc3d285783eef4' }, index.h("div", { key: '0e72d091dbf3e854a89eeea58f94c99d38ee7b6d', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: '8e4cfa846817dc5fc92c66a51c4d4bc2f9d417b0', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: '0b418c08188a3326713776494a4fcaf0ab9702c6', schema: index$1.z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: 'bbb39b6f12c6deeb4d8bd3d7e3b1ffcd86c3d502', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: 'd41f6b2ce22417944e0fda2f07da01ff76b47f0b', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: 'b630b52f71213624260c3a797a713dee184e61e5', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
        return (index.h(index.Host, { key: 'a6b01b93999693a3da6eebde6354db085e615f35', "data-testid": "agent-profile" }, index.h("wa-card", { key: '8a75125c3020b18f79c89e8f212023a599549538', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '6aae58c40c0347f1fe6bf06aa652352976a7fc2f', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), index.h("div", { key: 'f6987704afffbf297ea988432ac5effcc2a98720', class: "agent-form-group" }, index.h("ir-validator", { key: '7d18c501e2f826ad5724eaf0816a16dfc0d9adb2', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: 'f786b404527832c949dcc6456e365c24b2c39ade', size: "small", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), index.h("ir-validator", { key: 'be25dc8969354ded11566fe2bbc660fd8c8e0e44', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: '6dfe8ee23e5feee9f8560c001ae59f37554d90fd', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '0a963c0e922a6aaaf779bdecba058dd360d04791', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: '3f17375c6d9044cefd10cdbeb8e54b037ecff026', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: '9d1dda3eb0f2237836036ca6b027d44d12cc25a9', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '5fe20b09a29d6404396990e89cc03fef61a16d37', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), index.h("wa-card", { key: '94c5d98e233eeff2435e67e00a7f3846656b02e9', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: '12bbc580b808c265ed81362df814e4f59364ccd5', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), index.h("div", { key: 'bb18db3901c0a75dfa346c845d623e9972804d1c', class: "agent-form-group" }, index.h("ir-validator", { key: '6e75e954adf7e7e066ba75ff80f69cd9566949d1', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: '8812a20e6d791a1ce30a292826a299e762cc6548', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: '4afad2e66601829b6c58f9d47d5b7775eb78d563', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: 'feed84749328e6592bdcff6f4e8601054c453a22', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: '8ebe1e7f1d2dc30d09bd1440f8f77f7a04bab288', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: '4c6f86e577f40e32ba4d247963a041e99a8234f1', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: '4d691632fb49b7bf87b0b3e3b9ed6efad289ab10', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '3d8f7188dc6d58981da81dbc6361cba76de1a413', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), index.h("div", { key: 'b9d519d4e1422aa4e01578ccfe2bbace4e71ef84', class: "agent-form-group" }, index.h("ir-validator", { key: '08a9eca23e02a7b8a24e501417cf8670ec687149', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: '0360c4f06f42cd73fa6c5cb569ee65a61f3a5230', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: '9b4d9de842944b9420b294948bd634d95e62f3ab', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '7486c474a1552bf81fd6e1da339f6f6e4729b48a', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: '69007c1012626920c0f0c0c3e921f71d714806c3', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: '5159c7952d1dbdd1668ee5448731c34b7518064b', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: '65bdd539ce478950fa4a2880f2fbfe58cca83be1', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: 'e4fd911a45ac5894d094d43dea9bcaeba3e94ef5', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: 'eefe6781ab5c41225741dd31f06a669266339ad1', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), index.h("ir-validator", { key: 'fd723cd4dc09293a1702558ca34a01fae4d3a2fb', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: '72b8d329bc6e3b797c5fbe00b4459b8b0c09a866', placeholder: "Note", size: "small", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = IrAgentProfileStyle0;

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;

//# sourceMappingURL=ir-agent-contract_2.cjs.entry.js.map