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
        return (h(Host, { key: 'f5cf0923f9a52765933db5d2bf82b30ac76402f7', "data-testid": "agent-profile" }, h("wa-card", { key: 'c8ea1e6b16704a483a28dca364e2a0df5558d929', appearance: "plain", class: "agent-card --business-info", "data-testid": "agent-profile-business-card" }, h("p", { key: '841008adebebf7be892332fa3a74b31aeb95e4dd', slot: "header", "data-testid": "agent-profile-business-title" }, "Business Information"), h("div", { key: '2fd6c2020d0a220fbe7e8ba09bd7fafda50e57e0', class: "agent-form-group" }, h("ir-validator", { key: '138dbb8f1855f3ead7529941866ab53e2d58a36b', schema: AgentBaseSchema?.shape?.agent_type_code, value: agent?.agent_type_code, valueEvent: "change", "data-testid": "agent-profile-agent-type-validator" }, h("wa-select", { key: '9733e9b8b429ea5267edfe5f477b985c28e729af', size: "small", placeholder: "Select agent type ...", value: agent?.agent_type_code?.code, defaultValue: agent?.agent_type_code?.code, "data-testid": "agent-profile-agent-type-select", onchange: e => {
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
            ?.map(agent => (h("wa-option", { key: agent.CODE_NAME, value: agent.CODE_NAME, "data-testid": `agent-profile-agent-type-option-${agent.CODE_NAME}` }, agent.CODE_VALUE_EN))))), h("ir-validator", { key: '57af200007e151b2729c6eb05ac66eed325d0e8d', schema: AgentBaseSchema.shape.name, value: agent?.name, valueEvent: "text-change input input-change", "data-testid": "agent-profile-business-name-validator" }, h("ir-input", { key: '9d2f316e2923c63906db39caf672e38b664c9f18', autocomplete: "none", placeholder: "Business name", value: agent?.name, "data-testid": "agent-profile-business-name-input", "onText-change": (e) => this.updateField({ name: e.detail }) })), h("ir-validator", { key: '9eb764fe7b16dc595c19c053107b8cec547798a0', schema: AgentBaseSchema.shape.tax_nbr, value: agent?.tax_nbr, valueEvent: "text-change input input-change", "data-testid": "agent-profile-tax-number-validator" }, h("ir-input", { key: 'd0cd8e2c6ed6bca492c8efee419e9241fb96a9aa', placeholder: "Tax number", value: agent?.tax_nbr, "data-testid": "agent-profile-tax-number-input", "onText-change": (e) => this.updateField({ tax_nbr: e.detail }) })), h("ir-validator", { key: 'ca041faf68da4009c04a6f8cffa2369db6092cc3', schema: AgentBaseSchema.shape.reference, value: agent?.reference, valueEvent: "text-change input input-change", "data-testid": "agent-profile-reference-validator" }, h("ir-input", { key: '3340861bd2f12801d2bada329c970c767980330d', mask: {
                mask: /^[A-Za-z0-9 ]*$/,
            }, maxlength: 20, placeholder: "Codename", value: agent?.reference, "data-testid": "agent-profile-reference-input", "onText-change": (e) => this.updateField({ reference: e.detail }) })))), h("wa-card", { key: '3e235b3d36df3fdc56b1be6fe89b9be08dffd25a', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-billing-card" }, h("p", { key: 'ae6936f5bbaa6821afb39a96ab80fdcf00f0a309', slot: "header", "data-testid": "agent-profile-billing-title" }, "Billing Address"), h("div", { key: 'cfe48c67902f5ec04c9efc3f802d4e785cc2fd01', class: "agent-form-group" }, h("ir-validator", { key: '63040b8d1154f04f579955ea05ad3f154e61b2ba', schema: AgentBaseSchema.shape.country_id, value: agent?.country_id, valueEvent: "text-change input input-change", "data-testid": "agent-profile-country-validator" }, h("ir-country-picker", { key: '2a3de67c2ed8c6d9596d4a257362398273c7a33d', placeholder: "Country", country: this.countries.find(c => agent?.country_id?.toString() === c.id?.toString()), countries: this.countries, variant: "modern", "data-testid": "agent-profile-country-picker", onCountryChange: event => this.updateField({ country_id: event.detail.id }) })), h("ir-validator", { key: 'e35882650724037328f11d651d7e875beff1e816', schema: AgentBaseSchema.shape.city, value: agent?.city, valueEvent: "text-change input input-change", "data-testid": "agent-profile-city-validator" }, h("ir-input", { key: '755704775c9f1efe934e24544524bb453c36584e', placeholder: "City", value: agent?.city, "data-testid": "agent-profile-city-input", "onText-change": (e) => this.updateField({ city: e.detail }) })), h("ir-validator", { key: '080b1e828f82fe7d1da7f16aeb4a8d4d07052873', schema: AgentBaseSchema.shape.address, value: agent?.address, valueEvent: "text-change input input-change", "data-testid": "agent-profile-address-validator" }, h("ir-input", { key: 'f96d4b9998bcf279a1fa8742475a85a1953e849f', placeholder: "Address", value: agent?.address, "data-testid": "agent-profile-address-input", "onText-change": (e) => this.updateField({ address: e.detail }) })))), h("wa-card", { key: 'd3abfd389413c8d954e5d4c0abd5acabdd4d32be', appearance: "plain", class: "agent-card", "data-testid": "agent-profile-contact-card" }, h("p", { key: '2f4b2d77642f879764c010f1b4644fc3e78ff41c', slot: "header", "data-testid": "agent-profile-contact-title" }, "Contact Information"), h("div", { key: '028a3d118c8cbde9572da8b74e2076a4eaa27bb8', class: "agent-form-group" }, h("ir-validator", { key: '838273e427b2b46a447dad6a1623e3ea293a3573', schema: AgentBaseSchema.shape.contact_name, value: agent?.contact_name, "data-testid": "agent-profile-contact-name-validator" }, h("ir-input", { key: 'a5d446550d451b51fc16a3438e355aa65ba5fef5', placeholder: "Name", value: agent?.contact_name, "data-testid": "agent-profile-contact-name-input", "onText-change": (e) => this.updateField({ contact_name: e.detail }) })), h("ir-validator", { key: 'e3085ae4ea89020a76e03dad6e2fba5f243be8c4', schema: AgentBaseSchema.shape.phone, value: agent?.phone, "data-testid": "agent-profile-phone-validator" }, h("ir-input", { key: '6a96b9967e846480112fa517d6514b2c2393a05c', placeholder: "Phone", value: agent?.phone, "data-testid": "agent-profile-phone-input", "onText-change": (e) => this.updateField({ phone: e.detail }) }, phone_prefix && (h("span", { key: '833b2daaba5e562c0f0b1373a7be34602fe00d60', slot: "start", "data-testid": "agent-profile-phone-prefix" }, phone_prefix)))), h("ir-validator", { key: '88f8dce73cc246f9a5d40a78d1d9c294e776f4d4', schema: AgentBaseSchema.shape.email, value: agent?.email, "data-testid": "agent-profile-email-validator" }, h("ir-input", { key: 'f184f3c3f9c5d02ed6e6c341b8aac4e62be2a8f6', placeholder: "Email", value: agent?.email, "data-testid": "agent-profile-email-input", "onText-change": (e) => this.updateField({ email: e.detail ?? null }) })), h("ir-validator", { key: '5cbaae010e3ed82ff1f7510a434b6d2d989450a3', schema: AgentBaseSchema.shape.email_copied_upon_booking, value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-validator" }, h("ir-input", { key: 'f766c07cbfe56988bd78531f2364c4784ac48834', placeholder: "Email BCCed on booking notifications",
            // hint="Additional email address to receive booking notifications"
            value: agent?.email_copied_upon_booking, "data-testid": "agent-profile-email-bcc-input", "onText-change": (e) => this.updateField({ email_copied_upon_booking: e.detail }) })), h("ir-validator", { key: '1fe21743f304ef07fbe269ffbe1cbb7bb7558681', schema: AgentBaseSchema.shape.notes, value: agent?.notes, valueEvent: "input change", "data-testid": "agent-profile-notes-validator" }, h("wa-textarea", { key: 'ce14108e4cf5df4d5e8efd63e9f76fac9c3f7374', placeholder: "Note", size: "small", value: agent?.notes, defaultValue: agent?.notes, "data-testid": "agent-profile-notes-textarea", onchange: e => this.updateField({ notes: e.target.value }) }))))));
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