'use strict';

var index = require('./index-DtXemfU-.js');
var type = require('./type-Dy9pVS4V.js');
var index$1 = require('./index-CLqkDPTC.js');

const irAgentContractCss = () => `.sc-ir-agent-contract-h{display:block}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-inline:0;padding-bottom:0}.contract-card.sc-ir-agent-contract::part(header),.contract-card.sc-ir-agent-contract [part~="header"]{border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.contract-card.sc-ir-agent-contract:first-of-type::part(header),.contract-card.sc-ir-agent-contract:first-of-type [part~="header"]{padding-top:0 !important}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"],.contract.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract::part(body),.contract-card.sc-ir-agent-contract [part~="body"]{padding-top:1rem}.contract-form-group.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract p.sc-ir-agent-contract{padding:0;margin:0}.contract-card--horizontal.sc-ir-agent-contract::part(body),.contract-card--horizontal.sc-ir-agent-contract [part~="body"]{display:flex;align-items:center;gap:1rem}.contract-hint.sc-ir-agent-contract,.radio-hint.sc-ir-agent-contract{font-size:0.75rem;color:var(--wa-color-text-quiet);margin-top:0.25rem}.contract-row__text.sc-ir-agent-contract{flex:1 1 0%}.contract-row.sc-ir-agent-contract{display:flex;align-items:center;gap:1rem}.rate-mode.sc-ir-agent-contract::part(form-control-input),.rate-mode.sc-ir-agent-contract [part~="form-control-input"]{display:flex;flex-direction:column;gap:0.5rem}.rates-extra.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem;margin-left:2rem}.rates-extra__slider.sc-ir-agent-contract{max-width:320px}.rates-extra__row.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;gap:1rem}.rates-extra__text.sc-ir-agent-contract{display:flex;flex-direction:column;gap:0.15rem}.rates-extra__title.sc-ir-agent-contract{font-weight:500;margin:0}.rates-extra__hint.sc-ir-agent-contract{font-size:0.75rem;opacity:0.7;margin:0}.rates-extra__slider-label.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;width:100%}.rates-extra__slider-label.sc-ir-agent-contract p.sc-ir-agent-contract{margin:0;padding:0}.rates-extra__switch.sc-ir-agent-contract{flex-shrink:0}@media (min-width: 768px){.contract-card.sc-ir-agent-contract::part(body){padding-inline-start:0.5rem}.rates-extra.sc-ir-agent-contract{padding:0.5rem 1rem;border-inline-start:1px solid var(--wa-color-surface-border)}}`;

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
        return (index.h(index.Host, { key: '155cd19ad3e5239d558fa9610a1df0c9d6cebd71', "data-testid": "agent-contract" }, !isTourOperator && (index.h("wa-card", { key: '3546915154e011e6b4fb64af1e885fe8def555ae', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, index.h("p", { key: 'e7c8ea3d5b528f6e646da161ea525dc921044df7', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), index.h("wa-radio-group", { key: '6cf5d61c30f6b7516ee6a44796e39baffc65d347', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, index.h("wa-radio", { key: '55b5ca95aee8534cab054bdb89b78cfcfa975031', value: "code", "data-testid": "agent-contract-verification-code-radio" }, index.h("div", { key: 'cff2a540cbb8342c997c2c45bb62e83ed7530653', class: "radio-title" }, "Booking engine code"), index.h("div", { key: '808df73091105f44d97b0efc514f238653ac88cc', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (index.h("div", { key: '68663716e148056a47b6a4bb3f2af9b3291b7156', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, index.h("ir-validator", { key: 'cca4a68df91e05793fb712cdae8c20f2475f1978', schema: index$1.libExports.z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, index.h("ir-input", { key: 'f997bca18fbaf429156196636a39fd7d833d4487', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail || null }) }, this.agent?.code && this.agent?.id !== -1 && index.h("wa-copy-button", { key: '892c51f152c4021fa38e395756556f376352e6cf', slot: "end", value: this.agent?.code }))))), index.h("wa-radio", { key: 'fff9af95fcb452575a57a06c2192b4e758232bb6', value: "question", "data-testid": "agent-contract-verification-question-radio" }, index.h("div", { key: '83c7e951fb390b9fecbcf9b19f2d3d5ba0775b03', class: "radio-title" }, "Affiliation Yes/No question"), index.h("div", { key: '5f4503f0f62d085b9c6ddef686c950578d7803dd', class: "radio-hint" }, "Answering ", index.h("b", { key: '44cf71cc4de14f37dc6c18647548dae6048ea85f' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (index.h("div", { key: '5f7f041796c47647564ff175618e98f7d32e71df', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, index.h("ir-validator", { key: '6fcc6f7c9d21142bdce6e807dc6222990e2eede4', schema: index$1.libExports.z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, index.h("ir-input", { key: '31f66e40e6bb7a4d995d3315ba406396c6622a42', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail || null }) }))))))), index.h("wa-card", { key: '7520db323ac2636ae98ffdf75207f353ccf11c03', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, index.h("p", { key: '9bd1f3b47ca5be19515fc8e71fd4dbbf7c644239', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), index.h("ir-validator", { key: 'cf8ef042d49bec476b6bd483b2bd6da7204fb7d5', schema: type.AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, index.h("wa-radio-group", { key: 'f55d315a309cc53d283415392c1779947259046f', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, index.h("wa-radio", { key: 'c0e7dec8f5c8a07335697f271482377ddb0efee2', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, index.h("div", { key: '2ddc7f61c685fa77aa23683e446f1c19c09e6b07' }, index.h("div", { key: 'aecabbc66fa8cc20cd729239143271cbf502b562', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (index.h(index.Fragment, { key: 'bd3f901699c7507382da1e70c52f8ebe1346b966' }, index.h("wa-radio", { key: '26fd8663ae7a5262d1782503e86f618dd89eba91', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, index.h("div", { key: '423b24cb61717db52b18002fdf81856c893e1c61' }, index.h("div", { key: '63e2af67c6b8ecacd6951104ddbf18b9a6f0270a', class: "radio-title" }, "Apply a percentage commission on BAR"), index.h("div", { key: '8a60608b10c59cc5d41c80354ff3b89607921ab5', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (index.h("div", { key: '409812fe6b45fc607c68e47f7ef7f7fe9ff94adf', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, index.h("wa-slider", { key: '57dc5b4ace11c21727e9b6d632b68bb3a1c6a737', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, index.h("div", { key: '05b2f35871c7bbfb92db35e30f10366281554a2c', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, index.h("p", { key: '52979c6f170b5535e88175eebf02c1042b011ace' }, "Commission"), this.agent?.provided_discount && index.h("p", { key: '1e0bd3b52d95019e8976e2d3e9a34bee791b5f8b' }, this.agent?.provided_discount, "%"))), index.h("div", { key: '10762b20ca74fb20a71585837d367c78e7f24eff', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, index.h("div", { key: 'a927b6129f854ea35693b3f6e26bade831daf701', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, index.h("p", { key: 'd928c816dac69684ca3468c7ee4afe6e6993c9bb', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), index.h("wa-switch", { key: '638633e955d747303a9e511fa052558437767d7c', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), index.h("wa-radio", { key: '120b668236b0aacab4a0bc99fea068a445a5176b', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, index.h("div", { key: '607cfed5dcf36efa7270ee5573e0b657d1cf7fc9' }, index.h("div", { key: '8ee64cc28b75e927b373ded77fa5b109d5867a9a', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (index.h("div", { key: '9dbb623f9d4c8fa7683d3a6d6daea0ec0699d50a', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, index.h("ir-validator", { key: 'ac0be97eacd2c9f36385a3185af09ffd38f6e75a', schema: index$1.libExports.z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, index.h("ir-input", { key: 'cab514d534e4cdc86fb4550647ab6f192ef6c498', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), index.h("wa-card", { key: 'fc0c0c8b53f8cc504740a542a190ca7a06ff7f29', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, index.h("p", { key: 'aa520017cfc190bcd1d1da42f78ad3c4931e18ae', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (index.h("div", { "data-testid": "agent-contract-collection-tour-operator" }, index.h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), index.h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (index.h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
        return (index.h(index.Host, { key: 'a85cd2c107f9b11d4bc60b51ad747f221bdddad5', "data-testid": "agent-profile" }, index.h("wa-card", { key: 'df7530b9b08af218928f24669206301abf6c719f', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, index.h("p", { key: '39724e376d2201ed120776c40092de2d84000396', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), index.h("div", { key: '69a64584e91a1474ac3b3d77a338bc894432142c', class: "agent-form-group" }, index.h("ir-validator", { key: '6c83840fd25c07755b3756d72c27545c9ebf8ed3', schema: type.AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, index.h("wa-select", { key: '48c7f0919270b67f7dafd861c4577a397225f869', size: "s", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (index.h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), index.h("ir-validator", { key: '82685dba0e33991589e5cf73ec5196e9fa33064d', schema: type.AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, index.h("ir-input", { key: '6c03418f15dc0c99501e09e82551ef0c3ee453dc', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), index.h("ir-validator", { key: '758a422569763bea6627778f3512c8aa67054aef', schema: type.AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, index.h("ir-input", { key: '6aebdf98cea8a04a2f9437dbb854214cc1bf452b', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), index.h("ir-validator", { key: 'b0956ea583f32f7a8293706a1d6b6932bbdf623d', schema: type.AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, index.h("ir-input", { key: '25e68d2562d24de5890af7b4c525ddde017741d5', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), index.h("wa-card", { key: 'f68b6284d461d65f755068b270ca54095f7c9b02', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, index.h("p", { key: 'a4cacbc5457839405a3afa0b99501339d11eae56', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), index.h("div", { key: '9d26cdfb2be5c8286aa43439a5b62509a5c9b7d6', class: "agent-form-group" }, index.h("ir-validator", { key: '33e284740a9a32c9865d852f2cb3003f268e03dc', schema: type.AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, index.h("ir-country-picker", { key: 'a090d846fbd3f29555de0eb57982dbae7607a9eb', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), index.h("ir-validator", { key: 'cfea0eefeb163fc2a7f1f45cbef004d0b0a5d328', schema: type.AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, index.h("ir-input", { key: '42583aac73bd876bdb8308c433e2e7f30ffe500a', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), index.h("ir-validator", { key: 'a53d63c5ac1d9c1a87ec3bd3310987943860ac5b', schema: type.AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, index.h("ir-input", { key: '1c4b63d786edb3220941cd2d06a9b59c36dc871c', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), index.h("wa-card", { key: '8979a2e602a2339d27d5ad0cac8b1ec4988e6676', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, index.h("p", { key: '1ba4dfce2e9c258d73b2362e0d0b987d35274fe2', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), index.h("div", { key: 'e6a6a69a43e34ef6e7950c0d303132e05cb43e73', class: "agent-form-group" }, index.h("ir-validator", { key: 'efd666ee05264a84cc67aea7acf549e4c59585e2', schema: type.AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, index.h("ir-input", { key: '8adeed950f24531ba7a783c5b5b883a9186a4db1', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), index.h("ir-validator", { key: '04d7b8fa8e2e8fe9af015db84bf61dca851870ec', schema: type.AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, index.h("ir-input", { key: '6ee6a31f5fcead94a17e337616739c198b128816', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (index.h("span", { key: 'e1ce64f9770355fa942ff51545a3ccbbfae3220c', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), index.h("ir-validator", { key: '2b8a454743654590b106e52226bf2b6d646751c2', schema: type.AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, index.h("ir-input", { key: 'fbd70f3b56f7c31139115e92647806a4a9e1ff2f', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), index.h("ir-validator", { key: '33c5d7c4a2ed7746ecfb0dbc71e3f202e801c00f', schema: type.AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, index.h("ir-input", { key: 'a9e4328a7cec994b065fd9523549b82fea9b8138', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), index.h("ir-validator", { key: 'bc1fa4191f209398d9793aebf2354ae8c851846e', schema: type.AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, index.h("wa-textarea", { key: '5c2d87a0555a30f487b53fa86a3c473034056f49', placeholder: "Note", size: "s", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
};
IrAgentProfile.style = irAgentProfileCss();

exports.ir_agent_contract = IrAgentContract;
exports.ir_agent_profile = IrAgentProfile;
