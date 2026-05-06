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
        return (h(Host, { key: 'a602bc784704f221f898086998e614072f215edb', "data-testid": "agent-profile" }, h("wa-card", { key: '0324e913a18c94a4e56c2a1bec588691c0a78787', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, h("p", { key: '5b5440d3923a97fd26a09ab871c7818e76dd213d', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), h("div", { key: 'dc7549152513fd4095d7e8516b929a1ea18ea7f2', class: "agent-form-group" }, h("ir-validator", { key: '5e1529086c2ccf2777e8683d13b0ace6feae7a22', schema: AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, h("wa-select", { key: 'ffb1f2f3f7d97318dcb6129f88d9d46e34ff1d3a', size: "small", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), h("ir-validator", { key: '33febc544e0dc08db38662688e451aba1c4c15d6', schema: AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, h("ir-input", { key: '697b89afc2c78c4f8480137843b0cd737d7d3cd6', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '3f8cf9633032b346b9be2d43eda48b8dde149821', schema: AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, h("ir-input", { key: '2ae62dc903e09d531507f362687096d992905fca', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), h("ir-validator", { key: '0d9c8ed07567b2313c11ccbce3efd2b2ea3c7ff2', schema: AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, h("ir-input", { key: 'c155a745f3e8b87e626443c4fef9191e992a1596', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail }) })))), h("wa-card", { key: '7553ab5145bee23a844e580f1750e4050a187143', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, h("p", { key: '9998e0ab1bd98da895b98aba52c7bd5fa50165cf', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), h("div", { key: 'bef854527306a09404bc98b17500a147520d5f8b', class: "agent-form-group" }, h("ir-validator", { key: 'ebd4544ffebf0720b6dcb5055ec9237744afb77f', schema: AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, h("ir-country-picker", { key: '0f36f262f0acc6cf5e6af7a6b4f2c5746220b6f5', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), h("ir-validator", { key: '9d6281eed9716d99bc1721675bd58379048f116a', schema: AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, h("ir-input", { key: '324b0034f36836914e9c17c52ee8b08948b0c675', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), h("ir-validator", { key: '3b56e90232b3642c943a4d45343cdfc290dc883d', schema: AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, h("ir-input", { key: '89ce603313c418e2d42b1c81a3e582997d3279e1', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), h("wa-card", { key: '3d2d9e2b4a0ec434787b33ec1d7a7e4ac86bda57', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, h("p", { key: '5847512d83e269dc3e50190e3eeba0c236c24982', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), h("div", { key: 'f16400d0983fdf66bf0ff78fe25e2a23988deb76', class: "agent-form-group" }, h("ir-validator", { key: '5e6bc3a4f2485d5187a96e139f861d9441aac1d9', schema: AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, h("ir-input", { key: 'ca1def3a70aab0038bb88d8201fcd41d6c9e2b75', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), h("ir-validator", { key: 'ac913ce904e2075437c64896e738b7331852016e', schema: AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, h("ir-input", { key: 'adae21e70c3faee71b5a81159601714737b6695d', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (h("span", { key: '24b85c57ab9582c26127e00e4d923ee3f5d4b058', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), h("ir-validator", { key: '1873f090b8c46649910a4b2c8ecbd94ebf871c64', schema: AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, h("ir-input", { key: '83d63b35355d36be723837370445606b7e175761', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), h("ir-validator", { key: 'affd4f34ff67e9fe237035235a3505111324efda', schema: AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, h("ir-input", { key: 'ac5a50ff5a4e6b548a3f3e0cf5c58150121ecaba', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail }) })), h("ir-validator", { key: '5e84e90d3f1a3342d2a172abc3e5a8ee3f667b0f', schema: AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, h("wa-textarea", { key: '09ae7d40277564e2e59ae3cc249505a1c188b6c5', placeholder: "Note", size: "small", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
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