import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { A as AgentBaseSchema, b as AgentsTypes } from './type.js';
import { z } from './index2.js';
import { d as defineCustomElement$2 } from './ir-input2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irAgentContractCss = ".sc-ir-agent-contract-h{display:block}.contract-card.sc-ir-agent-contract::part(body){padding-inline:0;padding-bottom:0}.contract-card.sc-ir-agent-contract::part(header){border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.contract-card.sc-ir-agent-contract:first-of-type::part(header){padding-top:0 !important}.contract-card.sc-ir-agent-contract::part(body),.contract.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract::part(body){padding-top:1rem}.contract-form-group.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem}.contract-card.sc-ir-agent-contract p.sc-ir-agent-contract{padding:0;margin:0}.contract-card--horizontal.sc-ir-agent-contract::part(body){display:flex;align-items:center;gap:1rem}.contract-hint.sc-ir-agent-contract,.radio-hint.sc-ir-agent-contract{font-size:0.75rem;color:var(--wa-color-text-quiet);margin-top:0.25rem}.contract-row__text.sc-ir-agent-contract{flex:1 1 0%}.contract-row.sc-ir-agent-contract{display:flex;align-items:center;gap:1rem}.rate-mode.sc-ir-agent-contract::part(form-control-input){display:flex;flex-direction:column;gap:0.5rem}.rates-extra.sc-ir-agent-contract{display:flex;flex-direction:column;gap:1rem;margin-left:2rem}.rates-extra__slider.sc-ir-agent-contract{max-width:320px}.rates-extra__row.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;gap:1rem}.rates-extra__text.sc-ir-agent-contract{display:flex;flex-direction:column;gap:0.15rem}.rates-extra__title.sc-ir-agent-contract{font-weight:500;margin:0}.rates-extra__hint.sc-ir-agent-contract{font-size:0.75rem;opacity:0.7;margin:0}.rates-extra__slider-label.sc-ir-agent-contract{display:flex;align-items:center;justify-content:space-between;width:100%}.rates-extra__slider-label.sc-ir-agent-contract p.sc-ir-agent-contract{margin:0;padding:0}.rates-extra__switch.sc-ir-agent-contract{flex-shrink:0}@media (min-width: 768px){.contract-card.sc-ir-agent-contract::part(body){padding-inline-start:0.5rem}.rates-extra.sc-ir-agent-contract{padding:0.5rem 1rem;border-inline-start:1px solid var(--wa-color-surface-border)}}";
const IrAgentContractStyle0 = irAgentContractCss;

const IrAgentContract = /*@__PURE__*/ proxyCustomElement(class IrAgentContract extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.agentFieldChanged = createEvent(this, "agentFieldChanged", 7);
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
        return (h(Host, { key: '43e5ebf4d7621350902f5cc1cd855a6ae76d81c9', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: '235cea9d9b3d216752b5547597b7e624c0baa834', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: '4ae310a09aeb51971dd5dd1fc3fbbf8a20ba38a1', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), h("wa-radio-group", { key: '8dcbf53c8b2709ab5f5d94363aea287a18824aba', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: '6f7594cd391db90c96b67d31929eced7e9000b79', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: '7bab08d26bd1e2fc5ca2e0697fc638de23d49a1e', class: "radio-title" }, "Booking engine code"), h("div", { key: '8b171eb6e97e7bbf413db4772c74fa3a4d352e54', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (h("div", { key: '871aede5f377be5434e653628fe8950350106b90', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: 'aadabccc81d683af1f18e57d0941e1fa10c83103', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: 'be56cff7b28e9bd8c812a2bf17c7c98f760afb94', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: '576cf6c01543758dddb32930d7b104edf684499d', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: '0f8d13b344ec306d8c6745644f42e06a368b4a39', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '97133abaf3f79848c33acd84ae11197a9385e8fa', class: "radio-title" }, "Affiliation Yes/No question"), h("div", { key: 'ab4404488d894f4ed795ceb7a3aef55b92e072f1', class: "radio-hint" }, "Answering ", h("b", { key: 'a8c4a5dccc003077ebfb3a9b0a16a16876e33e58' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (h("div", { key: '5e4465a197a74991f7766b44a8127a9b1edff4fd', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: '765c3736f0fd2b852be5ecb84ce228f32ee61584', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: 'bba1a031c5538a922757d07274a6c5a547d3ec69', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail }) }))))))), h("wa-card", { key: '6f18fd3a72f72cd7bcae96b8b8a496b092425b52', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: 'e2680a7e8ac3b708753e805250dd46f3e71b8b07', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), h("ir-validator", { key: 'b908600225be052e0896744d97bc083024e7ebae', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: 'e93a2ba1f01a268cb56b39a7914ea66694f57087', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: 'e2719daa3752c9be8f97304d96cc87637920bc8a', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: '68b4a65f7c5516d6ade334da2d86f9f32e565746' }, h("div", { key: '6853b5191ee86be6a8ee005147821c266f7de626', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (h(Fragment, { key: '69708c5f0db7c96aab86d5b140b0ff0f78f9d806' }, h("wa-radio", { key: '50d74c7648d8d098847de6cd2a7ecc3a3c9f5830', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '88253fe39221177022e68d67265128e8bf341844' }, h("div", { key: '56b8c3b1d5e9618eb2ec3ff2153455e8f8f5bbdd', class: "radio-title" }, "Apply a percentage commission on BAR"), h("div", { key: 'e8a572c073bd2eccc5c90629017962e02e26af64', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: 'e0fd219d364bea5e23ad330679fc57acbad1acad', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '00185d673ebaa2c1668c1542b959d93cb82a80b2', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: 'ff323cb348aa0611b0d7e5295b966e96482f9c71', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '748164a791e0c4d68a40034081f5c37b013eff6c' }, "Commission"), this.agent?.provided_discount && h("p", { key: '7ad5cc1ed8850c0c446fd9d9f7e04f874091ed9f' }, this.agent?.provided_discount, "%"))), h("div", { key: 'd5ff85b4a8f6263cd89ebb8f63be3187da3e4a5c', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '6a5e5bf0cd86bb8b8a6d2502884a22838504a2ec', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: 'b0e4be9dee39bae197511358c77390545a6b54fc', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), h("wa-switch", { key: '67ad980cd896ee145b975b6fcb14189b0a9a3386', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: 'ede14a1f902a462d60e61ae108a0a9f3b8bc2287', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: '0db38a34d525ff4c1bea4a0b493208d0ba65fe02' }, h("div", { key: '05a10d1e8420964dbacbbd37aa92a8265a545ed1', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: '4e8fc0bb8c80ec975a54b68b00b772dcd49aaba0', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'ebc27c0491068ae3f35ce53834030858165ec9b8', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: '5bb5e09d2c4a577dc27045281238a04fb2733599', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: 'ce4b261dc0593953b8b2fdf655292ca746bf8c56', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: 'ca8d5fdbef946cb3575166bf2556044f2f46f9ef', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
    static get style() { return IrAgentContractStyle0; }
}, [2, "ir-agent-contract", {
        "agent": [16],
        "setupEntries": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agent-contract", "ir-input", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agent-contract":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentContract);
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrAgentContract as I, defineCustomElement as d };

//# sourceMappingURL=ir-agent-contract2.js.map