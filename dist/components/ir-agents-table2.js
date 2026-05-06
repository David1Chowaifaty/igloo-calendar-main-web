import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-empty-state2.js';

const irAgentsTableCss = ".sc-ir-agents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-agents-table-h{box-sizing:border-box !important}.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge),.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::before,.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-agents-table{display:none !important}.agents-table__action.sc-ir-agents-table{display:flex;min-width:100px;justify-content:flex-end}.agents-table__muted.sc-ir-agents-table{font-size:0.75rem}@media (min-width: 1024px){.agents-table__action.sc-ir-agents-table{min-width:150px}}";
const IrAgentsTableStyle0 = irAgentsTableCss;

const tableCss = ".sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-agents-table{overflow-x:auto}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-agents-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}";
const IrAgentsTableStyle1 = tableCss;

const IrAgentsTable = /*@__PURE__*/ proxyCustomElement(class IrAgentsTable extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.upsertAgent = createEvent(this, "upsertAgent", 7);
        this.deleteAgent = createEvent(this, "deleteAgent", 7);
        this.toggleAgentActive = createEvent(this, "toggleAgentActive", 7);
    }
    agents = [];
    setupEntries;
    countries;
    language;
    upsertAgent;
    deleteAgent;
    toggleAgentActive;
    getAgentTypeLabel(agent) {
        const agentType = this.setupEntries.agent_type.find(t => t.CODE_NAME === agent.agent_type_code.code);
        if (!agentType) {
            console.warn(`couldn't find agent type ${agent?.agent_type_code?.code}`, agent);
            return;
        }
        return agentType[`CODE_VALUE_${this.language?.toUpperCase()}`] || agentType.CODE_VALUE_EN;
    }
    getAgentPhoneNumber({ phone, country_id }) {
        if (!phone) {
            return null;
        }
        if (!country_id) {
            return phone;
        }
        const country = this.countries.find(c => c.id.toString() === country_id.toString());
        if (!country) {
            return phone;
        }
        return `${country.phone_prefix} ${phone}`;
    }
    createAgent = () => {
        this.upsertAgent.emit({
            id: -1,
            name: '',
            code: '',
            address: '',
            city: '',
            country_id: null,
            phone: '',
            email: '',
            email_copied_upon_booking: null,
            contact_name: '',
            tax_nbr: '',
            notes: '',
            question: '',
            agent_rate_type_code: {
                code: '001',
            },
            agent_type_code: {
                code: '',
            },
            payment_mode: {
                code: '001',
            },
            contract_nbr: null,
            currency_id: null,
            due_balance: null,
            sort_order: null,
            property_id: calendar_data.property.id,
            provided_discount: null,
            is_active: true,
            is_send_guest_confirmation_email: false,
            verification_mode: 'code',
        });
    };
    render() {
        return (h(Host, { key: 'f954583ef2ead5d22e80d3cf29aff4f369619eea' }, h("div", { key: '26a570733e41138eb8a46d464bcc1d58a6e34a94', class: "table--container" }, h("table", { key: 'ae0df825ad04600484741ca2b8bab62356320e8a', class: "table" }, h("thead", { key: 'fa93bc7808f52cfe3274d99376f21aa86851c1df' }, h("tr", { key: '54dc7a9114e469b960c6756fc8e39b37ab7ac0b7' }, h("th", { key: '58ba5782499412e28dab7deb743eb2fea47a7a5e', class: "agents-table__header" }, "Name"), h("th", { key: '6c5e5ae3bd653b04a5c2e2e46210d44cac60b123', class: "agents-table__header" }, "Type"), h("th", { key: '9188faff2a2edeff01a99566e03a587927a0e3e7', class: "agents-table__header" }, "Email"), h("th", { key: '09f43c0b786094b0886f409e76d82e4c2979ba94', class: "agents-table__header" }, "Phone"), h("th", { key: '4a57d48d1508012ff8a0db61c9857a521daeab4b', class: "agents-table__header" }, "Active"), h("th", { key: '57a7e412a321cb9753ca18ea434dace3eb2deeb6', class: "agents-table__header " }, h("div", { key: 'ca49cb85b734e4a0f3c0d26af9d828ea8519899e', class: "agents-table__action" }, h("wa-tooltip", { key: 'ff69e03c806418ef2ae02e02ba306888f82fa96d', for: "create-agent-button" }, "New Agent"), h("ir-custom-button", { key: '5c317e6fbb0a62640feccf520c0fcef17f80ca4a', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, h("wa-icon", { key: '9ab22d657197d76f68578c3eb5c07c7f6e9ae017', name: "plus", style: { fontSize: '1.2rem' }, label: "New Agent" })))))), h("tbody", { key: '9efa74620c9a025ed78c3c950b64f12e2da05057' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (h("tr", { class: "ir-table-row", key: agent.id }, h("td", { class: "agents-table__name" }, h("div", { class: "d-flex flex-column" }, h("p", null, agent.name), h("p", { class: "agents-table__muted" }, agent.reference))), h("td", null, h("div", { class: "d-flex flex-column" }, h("p", null, typeLabel), h("p", { class: "agents-table__muted" }, agent.code))), h("td", null, agent.email || 'N/A'), h("td", null, this.getAgentPhoneNumber(agent) || 'N/A'), h("td", null, h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), h("td", null, h("div", { class: "agents-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (h("tr", { key: 'e3c19eb025e590d558f0048a2eff6ffb42fdf1d9', class: "empty-row" }, h("td", { key: 'ed2ec3aa31c726c3859d9cad6edc7baef6c74435', colSpan: 6 }, h("ir-empty-state", { key: '380254f898b253a5c7147a939cbc3946479188d5' })))))))));
    }
    static get style() { return IrAgentsTableStyle0 + IrAgentsTableStyle1; }
}, [2, "ir-agents-table", {
        "agents": [16],
        "setupEntries": [16],
        "countries": [16],
        "language": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agents-table", "ir-custom-button", "ir-empty-state"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agents-table":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentsTable);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-empty-state":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrAgentsTable as I, defineCustomElement as d };

//# sourceMappingURL=ir-agents-table2.js.map