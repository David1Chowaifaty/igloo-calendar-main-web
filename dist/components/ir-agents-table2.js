import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$2 } from './ir-custom-button2.js';
import { d as defineCustomElement$1 } from './ir-empty-state2.js';

const irAgentsTableCss = ".sc-ir-agents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-agents-table-h{box-sizing:border-box !important}.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge),.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::before,.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-agents-table{display:none !important}.agents-table__action.sc-ir-agents-table{display:flex;min-width:100px;justify-content:flex-end}.agents-table__muted.sc-ir-agents-table{font-size:0.75rem}@media (min-width: 1024px){.agents-table__action.sc-ir-agents-table{min-width:150px}}";
const IrAgentsTableStyle0 = irAgentsTableCss;

const tableCss = ".sc-ir-agents-table-h{--ir-cell-padding:0.1rem 0.8rem}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-agents-table{overflow-x:auto}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-agents-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}";
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
        return (h(Host, { key: 'ba4a94706f93842cbb08dd55c0c3a33a9575877f' }, h("div", { key: '6f10cbe4cf97840d878b5e35e86f5c19eaf25d92', class: "table--container" }, h("table", { key: '926ce57dc23f930a3cb6f75fb6d83c67e307369e', class: "table" }, h("thead", { key: 'a747c33469479a3a96a0d5a1b07fb5f494c3437e' }, h("tr", { key: '626f129171237bfdb87dc641837ba57c1a1e59bb' }, h("th", { key: '8f5667a7ea77911abd757bcc341cbe3f9826790a', class: "agents-table__header" }, "Name"), h("th", { key: '89c335b14f3283f304980da977d08e63f6c4b6fc', class: "agents-table__header" }, "Type"), h("th", { key: '94662f35770961a8ad36d6b0989ff9d175c4d807', class: "agents-table__header" }, "Email"), h("th", { key: 'a2a9d7acb1fcceaccbe7c8e0b922727075a4b41a', class: "agents-table__header" }, "Phone"), h("th", { key: 'a6d517e8d95cdcace9393f0f0fff7fa9dc0b98eb', class: "agents-table__header" }, "Active"), h("th", { key: '98d5b442a6e28d0c9e585b0ee3c4dabdf38ff483', class: "agents-table__header " }, h("div", { key: 'c3b871c2ffb783118397f71e6cba373db7d97093', class: "agents-table__action" }, h("wa-tooltip", { key: 'bea070d61edb81ced3f4908ddfc5128f0c73feff', for: "create-agent-button" }, "New Agent"), h("ir-custom-button", { key: '124ed87bf677091edd4edac0eb49aaf48fb1def2', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, h("wa-icon", { key: 'dbb222fffa1749e961c74cabdf4b468ea7c790b8', name: "plus", style: { fontSize: '1.2rem' }, label: "New Agent" })))))), h("tbody", { key: '633d46668f935cdc2cca867d568617d3dba46492' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (h("tr", { class: "ir-table-row", key: agent.id }, h("td", { class: "agents-table__name" }, h("div", { class: "d-flex flex-column" }, h("p", null, agent.name), h("p", { class: "agents-table__muted" }, agent.reference))), h("td", null, h("div", { class: "d-flex flex-column" }, h("p", null, typeLabel), h("p", { class: "agents-table__muted" }, agent.code))), h("td", null, agent.email || 'N/A'), h("td", null, this.getAgentPhoneNumber(agent) || 'N/A'), h("td", null, h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), h("td", null, h("div", { class: "agents-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (h("tr", { key: '73a6f3a9e20b4f788f2a1f119a69ab91b2ac1065', class: "empty-row" }, h("td", { key: 'f906c5e4c979ec43b028866e6cddce98f6afebea', colSpan: 6 }, h("ir-empty-state", { key: '413a88d65e4e061c1d39668bc06e92750c99ea87' })))))))));
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