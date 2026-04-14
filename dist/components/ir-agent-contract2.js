import { proxyCustomElement, HTMLElement, createEvent, h, Host, Fragment } from '@stencil/core/internal/client';
import { A as AgentBaseSchema, a as AgentsTypes } from './type.js';
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
        return (h(Host, { key: '663a08393bd5d6386665f1ab1e2055be835ee3be', "data-testid": "agent-contract" }, !isTourOperator && (h("wa-card", { key: 'd3c5ce1f4b2e5bfee389b8fbcfd851c5d2f572f5', appearance: "plain", class: "contract-card contract-card--identification", "data-testid": "agent-contract-identification-card" }, h("p", { key: '4d33114371559d4a939a0676c17929a216bb301c', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-identification-title" }, "Agent Identification"), h("wa-radio-group", { key: 'e1afdd061139357eba7f75c8e3e13fd9302b2cda', class: "identification-mode rate-mode", value: this.agent?.verification_mode, "data-testid": "agent-contract-verification-mode-group", onchange: e => {
                this.updateField({
                    verification_mode: e.currentTarget.value.toString(),
                });
            } }, h("wa-radio", { key: 'e2c5224126f4f1efca6f42276d8e994304f0c968', value: "code", "data-testid": "agent-contract-verification-code-radio" }, h("div", { key: 'a470659ac4196b4497221a6421f6ff7e2f713d6a', class: "radio-title" }, "Booking engine code"), h("div", { key: 'a784838f561bada9d197d0f6b51580c974aa9c7b', class: "radio-hint" }, "Used during the online booking")), this.agent?.verification_mode === 'code' && (h("div", { key: '7dc19088a961ce3290dd680f889443e40c51c02d', class: "rates-extra", "data-testid": "agent-contract-verification-code-section" }, h("ir-validator", { key: '465f916b0698796fe910ea2a35266fe79e810cca', schema: z.string().min(5).max(10), value: this.agent?.code, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-code-validator" }, h("ir-input", { key: '7890011b81795bc7aa7e9079e65291b3ff3a8d9a', mask: {
                mask: /^[A-Z0-9]{0,10}$/,
                prepare: (value) => value.toUpperCase(),
            }, onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "5 to 10 characters", maxlength: 10, minlength: 5, value: this.agent?.code, "data-testid": "agent-contract-verification-code-input", "onText-change": (e) => this.updateField({ code: e.detail }) }, this.agent?.code && this.agent?.id !== -1 && h("wa-copy-button", { key: 'aae60f4677a1c0296f3875a09fbc7d01b98f3f6d', slot: "end", value: this.agent?.code }))))), h("wa-radio", { key: '1a1ff29be8f5e43823c4c07f2c14930fd4abe8df', value: "question", "data-testid": "agent-contract-verification-question-radio" }, h("div", { key: '41c96925a4f4af4e7c77a21b3ac46b5e65b9e0d0', class: "radio-title" }, "Affiliation Yes/No question"), h("div", { key: '209ac34165b3d21d953907a89d4db94d15053ec7', class: "radio-hint" }, "Answering ", h("b", { key: '33b9e51a426b5364e59de633444fcdc4d5288451' }, "Yes"), " will apply the agency rates")), this.agent?.verification_mode === 'question' && (h("div", { key: '7daa893638ea320efedc2293d922366790d2978b', class: "rates-extra", "data-testid": "agent-contract-verification-question-section" }, h("ir-validator", { key: '5f1b80f3ada55f5d182e8f8d766c6d54db63f177', schema: z.string().nonempty(), value: this.agent?.question, valueEvent: "text-change input input-change", "data-testid": "agent-contract-verification-question-validator" }, h("ir-input", { key: 'f4e2bc1cca8a09a1a5ed126e00b4c001f9f7c400', onKeyDown: e => {
                e.stopPropagation();
            }, placeholder: "e.g. Are you a Wizz Air cabin crew?", value: this.agent?.question, "data-testid": "agent-contract-verification-question-input", "onText-change": (e) => this.updateField({ question: e.detail }) }))))))), h("wa-card", { key: '62570e50e6ebe529fe24d41682fe231869c00211', appearance: "plain", class: `contract-card`, "data-testid": "agent-contract-rates-card" }, h("p", { key: '22cc11eeb1290fc347bc5a4870dc5139a96a8082', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-rates-title" }, "Rates"), h("ir-validator", { key: '0a3c46c5b9deaefc33e269d88ed1aba2b14b1374', schema: AgentBaseSchema.shape.agent_rate_type_code, value: this.agent?.agent_rate_type_code, valueEvent: "change", "data-testid": "agent-contract-rates-validator" }, h("wa-radio-group", { key: '04cdb06181ea932245d3d2045d759ec9485eea23', name: "rates", class: "rate-mode", value: this.selectedRate, "data-testid": "agent-contract-rates-group", onchange: this.handleRatesChange }, h("wa-radio", { key: '337a09a336d17f3b86937c519affc5b75ed6e0f9', value: "agent_rate_plans", "data-testid": "agent-contract-rates-agent-rate-plans-radio" }, h("div", { key: 'd848d43590edf5928d0032c1993c81ea580f2b26' }, h("div", { key: '581d7d5f0bbe240c68026bc3e53b3c31656b08e2', class: "radio-title" }, "Use agent-assigned rate plans (Net)"))), !isTourOperator && (h(Fragment, { key: 'af380eb26b733a2babf748edd59d7aaf275d98d1' }, h("wa-radio", { key: '47119373dfb5ec3bab59af9053a4ccba1f28bf5e', value: "reduce_bar", "data-testid": "agent-contract-rates-reduce-bar-radio" }, h("div", { key: '5b43751ebaa70aeecb0f92f0e12f0ce04f254c4e' }, h("div", { key: '017fbac7c3b0566e218c10002f0f57ec11c82430', class: "radio-title" }, "Apply a percentage commission on BAR"), h("div", { key: '0d4abc18ec92fe6ce9e69a13b99eeac1848c7696', class: "radio-hint" }, "Reduce the nightly Best Available Rate by a fixed %"))), ['002', '003'].includes(this.agent?.agent_rate_type_code?.code) && (h("div", { key: 'ec3ea43b97520af7e66d085dc00e8e1812001178', class: "rates-extra", "data-testid": "agent-contract-rates-reduce-bar-section" }, h("wa-slider", { key: '1a6a46fe70ddd121ce6489498f6459d0cb6661d3', min: 4, max: 40, value: this.agent?.provided_discount ?? 4, "with-tooltip": true, label: "Commission", "data-testid": "agent-contract-rates-commission-slider", onKeyDown: event => event.stopPropagation(), onchange: event => {
                event.stopPropagation();
                this.updateField({ provided_discount: event.target.value });
            } }, h("div", { key: '9439ed215d3cd886ac4d93cef2b7d06cfaf32332', slot: "label", class: 'rates-extra__slider-label', "data-testid": "agent-contract-rates-commission-label" }, h("p", { key: '4cc8aaba04089cf182414b496d4222d5a8e50349' }, "Commission"), this.agent?.provided_discount && h("p", { key: '17f6f1480eb5b4dea8180391e699490edc81ea70' }, this.agent?.provided_discount, "%"))), h("div", { key: 'eb60d34751dd38391ba64ac102e0e9fde6f56aeb', class: "rates-extra__row", "data-testid": "agent-contract-rates-non-refundable-row" }, h("div", { key: '65e9c4196241f2da54a43490643d559d7429deee', class: "rates-extra__text", "data-testid": "agent-contract-rates-non-refundable-text" }, h("p", { key: '217c8b9d8489a28a0385db052433cf1e907ba0b2', class: "rates-extra__title" }, "Applies to Non-Refundable rates")), h("wa-switch", { key: 'b95b4389845e6b631587fdbeb31db7316aea35f7', class: "rates-extra__switch", checked: this.agent?.agent_rate_type_code?.code === '002', defaultChecked: this.agent?.agent_rate_type_code?.code === '002', "data-testid": "agent-contract-rates-non-refundable-switch", onKeyDown: event => {
                event.stopPropagation();
            }, onchange: event => {
                event.stopPropagation();
                this.updateField({ agent_rate_type_code: { code: event.target.checked ? '002' : '003' } });
            } })))))), h("wa-radio", { key: 'e937348c472dd0ff1a7243cacd521cabae81a10f', value: "contract_reference", "data-testid": "agent-contract-rates-contract-reference-radio" }, h("div", { key: 'b17b57d81de5290a1bace2a1f1490f13bf1a8a6f' }, h("div", { key: '566065f87ea257f735ea87ed0442ed6aa6c7759e', class: "radio-title" }, "Use contract-based rates"))), this.agent?.agent_rate_type_code?.code === '004' && (h("div", { key: '26851daca2b85a17a005cf6545b89956b8c04bae', class: "rates-extra", "data-testid": "agent-contract-rates-contract-reference-section" }, h("ir-validator", { key: 'f8a2bf5113ac3b98f40b7e9817b84783f3348a2f', schema: z.string().nonempty(), value: this.agent?.contract_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-contract-rates-contract-reference-validator" }, h("ir-input", { key: '85ff0b47f8f4c3ce437fc84054f2db3a26fbf2a4', placeholder: "Enter contract reference", onKeyDown: e => {
                e.stopPropagation();
            }, maxlength: 50, value: this.agent?.contract_nbr, "data-testid": "agent-contract-rates-contract-reference-input", "onText-change": e => this.updateField({ contract_nbr: e.detail }) }))))))), h("wa-card", { key: '59fa93af1bc19ae6134e8365a6f0f96c10eeabf2', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: '8c15908996c7796deb0ee180b7ada6fabf2d9d28', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Collection Method"), isTourOperator ? (h("div", { "data-testid": "agent-contract-collection-tour-operator" }, h("div", { class: "radio-title", "data-testid": "agent-contract-collection-tour-operator-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint", "data-testid": "agent-contract-collection-tour-operator-hint" }, "Agent pays on credit terms after guest checkout"))) : (h("wa-radio-group", { class: "rate-mode", name: "collection", value: this.agent?.payment_mode?.code, "data-testid": "agent-contract-collection-group", onchange: e => {
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
            } }, h("wa-radio", { value: "001", "data-testid": "agent-contract-collection-city-ledger-radio" }, h("div", null, h("div", { class: "radio-title" }, "Net pay later (City ledger)"), h("div", { class: "radio-hint" }, "Agent pays on credit terms after guest checkout"))), h("wa-radio", { value: "002", "data-testid": "agent-contract-collection-from-guest-radio" }, h("div", null, h("div", { class: "radio-title" }, "From guest"), h("div", { class: "radio-hint" }, "Payment collected directly from the guest")))))), h("wa-card", { key: '5e66ea412d3d8b05d14d79188a41385c1f809cee', appearance: "plain", class: "contract-card", "data-testid": "agent-contract-collection-card" }, h("p", { key: '2253a933add6e4fc7102377921dd7937f301e2b9', slot: "header", class: "contract-card__title", "data-testid": "agent-contract-collection-title" }, "Post Timing"), h("ir-validator", { key: '234b1c34529c7b7a14c329bd1b6a880fdc20355f', value: this.agent?.cl_post_timing?.code, schema: z.string().nonempty() }, h("wa-select", { key: 'ffbefe2536f767deb89282e900d438c6c80e3131', value: this.agent?.cl_post_timing?.code, defaultValue: this.agent?.cl_post_timing?.code, placeholder: "Select ...", onchange: e => this.updateField({
                cl_post_timing: { code: e.target.value?.toString() },
            }), size: "small" }, this.setupEntries?.cl_post_timing?.map(t => (h("wa-option", { value: t.CODE_NAME }, t.CODE_VALUE_EN))))))));
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