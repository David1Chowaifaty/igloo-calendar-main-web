import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { A as AgentBaseSchema, b as AgentsTypes } from './type.js';
import { d as defineCustomElement$6 } from './ir-country-picker2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-input-text2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irAgentProfileCss = ".agent-profile.sc-ir-agent-profile,.agent-form-group.sc-ir-agent-profile{display:flex;flex-direction:column;gap:1rem}.agent-card.--status-card.sc-ir-agent-profile::part(body){padding-top:0}.agent-card.sc-ir-agent-profile::part(body){padding-inline:0;padding-bottom:0;padding-top:1rem}.agent-card.--business-info.sc-ir-agent-profile::part(header){padding-top:0}.agent-card.sc-ir-agent-profile::part(header){border-bottom:0;padding-inline:0;padding-bottom:0;padding-top:var(--wa-space-l, 1.5rem)}.agent-card.sc-ir-agent-profile p.sc-ir-agent-profile{padding:0;margin:0}.agent-card--horizontal.sc-ir-agent-profile::part(body){display:flex;align-items:center;gap:1rem}.agent-card__header.sc-ir-agent-profile{flex:1 1 0%}.agent-card__description.sc-ir-agent-profile{font-size:0.75rem;color:var(--wa-color-text-quiet)}.agent-form-row.sc-ir-agent-profile{display:flex;align-items:center;justify-content:space-between;gap:1rem}@media (min-width: 768px){.agent-card.sc-ir-agent-profile::part(body){padding-inline-start:0.5rem}}";
const IrAgentProfileStyle0 = irAgentProfileCss;

const IrAgentProfile = /*@__PURE__*/ proxyCustomElement(class IrAgentProfile extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.agentFieldChanged = createEvent(this, "agentFieldChanged", 7);
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
        return (h(Host, { key: 'a6b01b93999693a3da6eebde6354db085e615f35', "data-testid": "agent-profile" }, h("wa-card", { key: '8a75125c3020b18f79c89e8f212023a599549538', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, h("p", { key: '6aae58c40c0347f1fe6bf06aa652352976a7fc2f', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), h("div", { key: 'f6987704afffbf297ea988432ac5effcc2a98720', class: "agent-form-group" }, h("ir-validator", { key: '7d18c501e2f826ad5724eaf0816a16dfc0d9adb2', schema: AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, h("wa-select", { key: 'f786b404527832c949dcc6456e365c24b2c39ade', size: "small", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), h("ir-validator", { key: 'be25dc8969354ded11566fe2bbc660fd8c8e0e44', schema: AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, h("ir-input", { key: '6dfe8ee23e5feee9f8560c001ae59f37554d90fd', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '0a963c0e922a6aaaf779bdecba058dd360d04791', schema: AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, h("ir-input", { key: '3f17375c6d9044cefd10cdbeb8e54b037ecff026', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), h("ir-validator", { key: '9d1dda3eb0f2237836036ca6b027d44d12cc25a9', schema: AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, h("ir-input", { key: '5fe20b09a29d6404396990e89cc03fef61a16d37', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail || null }) })))), h("wa-card", { key: '94c5d98e233eeff2435e67e00a7f3846656b02e9', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, h("p", { key: '12bbc580b808c265ed81362df814e4f59364ccd5', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), h("div", { key: 'bb18db3901c0a75dfa346c845d623e9972804d1c', class: "agent-form-group" }, h("ir-validator", { key: '6e75e954adf7e7e066ba75ff80f69cd9566949d1', schema: AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, h("ir-country-picker", { key: '8812a20e6d791a1ce30a292826a299e762cc6548', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), h("ir-validator", { key: '4afad2e66601829b6c58f9d47d5b7775eb78d563', schema: AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, h("ir-input", { key: 'feed84749328e6592bdcff6f4e8601054c453a22', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), h("ir-validator", { key: '8ebe1e7f1d2dc30d09bd1440f8f77f7a04bab288', schema: AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, h("ir-input", { key: '4c6f86e577f40e32ba4d247963a041e99a8234f1', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), h("wa-card", { key: '4d691632fb49b7bf87b0b3e3b9ed6efad289ab10', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, h("p", { key: '3d8f7188dc6d58981da81dbc6361cba76de1a413', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), h("div", { key: 'b9d519d4e1422aa4e01578ccfe2bbace4e71ef84', class: "agent-form-group" }, h("ir-validator", { key: '08a9eca23e02a7b8a24e501417cf8670ec687149', schema: AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, h("ir-input", { key: '0360c4f06f42cd73fa6c5cb569ee65a61f3a5230', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), h("ir-validator", { key: '9b4d9de842944b9420b294948bd634d95e62f3ab', schema: AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, h("ir-input", { key: '7486c474a1552bf81fd6e1da339f6f6e4729b48a', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (h("span", { key: '69007c1012626920c0f0c0c3e921f71d714806c3', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), h("ir-validator", { key: '5159c7952d1dbdd1668ee5448731c34b7518064b', schema: AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, h("ir-input", { key: '65bdd539ce478950fa4a2880f2fbfe58cca83be1', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), h("ir-validator", { key: 'e4fd911a45ac5894d094d43dea9bcaeba3e94ef5', schema: AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, h("ir-input", { key: 'eefe6781ab5c41225741dd31f06a669266339ad1', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail || null }) })), h("ir-validator", { key: 'fd723cd4dc09293a1702558ca34a01fae4d3a2fb', schema: AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, h("wa-textarea", { key: '72b8d329bc6e3b797c5fbe00b4459b8b0c09a866', placeholder: "Note", size: "small", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
    }
    static get style() { return IrAgentProfileStyle0; }
}, [2, "ir-agent-profile", {
        "agent": [16],
        "countries": [16],
        "setupEntries": [16]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agent-profile", "ir-country-picker", "ir-input", "ir-input-text", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agent-profile":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentProfile);
            }
            break;
        case "ir-country-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-picker-item":
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

export { IrAgentProfile as I, defineCustomElement as d };

//# sourceMappingURL=ir-agent-profile2.js.map