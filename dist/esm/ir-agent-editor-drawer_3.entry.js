import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { v as v4 } from './v4-964634d6.js';
import { b as AgentSchema } from './type-501de9b6.js';
import { A as AgentsService } from './agents.service-64531ba1.js';
import { I as getFormSubmitter } from './utils-3c91939f.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import './index-87419685.js';
import './axios-aa1335b8.js';
import './moment-ab846cee.js';
import './locales.store-cb784e95.js';
import './index-f100e9d2.js';

const irAgentEditorDrawerCss = ".sc-ir-agent-editor-drawer-h{display:block}.agent-form__tab-group.sc-ir-agent-editor-drawer::part(nav){position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}";
const IrAgentEditorDrawerStyle0 = irAgentEditorDrawerCss;

const IrAgentEditorDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.agentEditorClose = createEvent(this, "agentEditorClose", 7);
    }
    open = false;
    agent;
    countries;
    setupEntries;
    currentTab = 'profile';
    loading;
    agentEditorClose;
    baseId = `agent-form__id-${v4()}`;
    handleDrawerClose(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.currentTab = 'profile';
        this.agentEditorClose.emit();
    }
    // private handleTabChange(e: CustomEvent<{ name: String }>) {
    //   this.currentTab = (e.detail.name.toString() ?? 'profile') as 'profile' | 'contract';
    // }
    render() {
        const isEditMode = this.agent?.id !== -1;
        return (h(Host, { key: '690fbc7e569d4d006740042ced37eb23e1cff179', "data-testid": "agent-editor-drawer" }, h("ir-drawer", { key: '99787820989b65d22e8dc86a77fd581143099125', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? 'Edit Agent' : 'New Agent', open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
        // <wa-tab-group class="agent-form__tab-group" activation='manual' active={this.currentTab.toString()} onwa-tab-show={e => this.handleTabChange(e)}>
        //   <wa-tab panel="profile" >Profile</wa-tab>
        //   <wa-tab disabled={!isEditMode} panel="contract">Contract</wa-tab>
        //   <wa-tab-panel name="profile" active={this.currentTab === "profile"}>
        //     {this.currentTab === 'profile' && <ir-agent-profile formId={formId} agent={this.agent}></ir-agent-profile>}
        //   </wa-tab-panel>
        //   <wa-tab-panel name="contract" active={this.currentTab === "contract"}>
        //     {this.currentTab === 'contract' && <ir-agent-contract formId={formId} agent={this.agent}></ir-agent-contract>}
        //   </wa-tab-panel>
        // </wa-tab-group>
        h("ir-agent-editor-form", { key: '80d4f6b81321ed52bfef463bae144d23a068ea9c', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), h("div", { key: '8c6203415c17d6223aac2755ecde8433d571a94c', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, h("ir-custom-button", { key: '026cc10cf0a6f9478247744638d67a0c2e579efe', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, "Cancel"), h("ir-custom-button", { key: '04c29d2ac6bdef7f9ce31b1db2bc30bc3981cb10', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "medium", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, "Save"), this.agent?.id !== -1 && (h("ir-custom-button", { key: 'fe3b510e96c83d5f881d741434b491fbd580e3b3', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "medium", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, "Save & Close"))))));
    }
};
IrAgentEditorDrawer.style = IrAgentEditorDrawerStyle0;

const irAgentEditorFormCss = ".sc-ir-agent-editor-form-h{display:block}.agent-editor__content.sc-ir-agent-editor-form{display:flex;flex-direction:column;gap:1rem}.agent-editor__profile.sc-ir-agent-editor-form,.agent-editor__contract.sc-ir-agent-editor-form{flex:1 1 0%}@media (min-width: 768px){.agent-editor__content.sc-ir-agent-editor-form{flex-direction:row;gap:4rem}}";
const IrAgentEditorFormStyle0 = irAgentEditorFormCss;

const IrAgentEditorForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.upsertAgent = createEvent(this, "upsertAgent", 7);
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
    }
    agent;
    formId;
    countries;
    setupEntries;
    upsertAgent;
    closeDrawer;
    loadingChanged;
    agentService = new AgentsService();
    handleAgentFieldChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const agent = this.agent || {};
        this.agent = { ...agent, ...e.detail };
    }
    async saveOrEditAgent(submitter) {
        try {
            this.loadingChanged.emit(submitter);
            AgentSchema.parse(this.agent);
            await this.agentService.handleExposedAgent({ agent: { ...this.agent, code: this.agent.code ?? '' } });
            this.upsertAgent.emit(this.agent);
            if (submitter === 'save&close') {
                this.closeDrawer.emit();
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChanged.emit(null);
        }
    }
    render() {
        return (h("form", { key: '86ae3bd51b6b85ffdd5fc60f54d10f11f8a7e05d', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(getFormSubmitter(e));
            }, class: "agent-editor__content" }, h("ir-agent-profile", { key: 'e24d7dc44bba5cf2b9842686ef2f9c585d08e8b1', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), h("ir-agent-contract", { key: 'f3dd88aedb13cf9b577f4dbf2241252f8f06330d', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
    }
};
IrAgentEditorForm.style = IrAgentEditorFormStyle0;

const irAgentsTableCss = ".sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-agents-table{overflow-x:auto}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-agents-table{position:sticky !important;right:0;background-color:white}.sc-ir-agents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-agents-table-h{box-sizing:border-box !important}.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge),.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::before,.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-agents-table{display:none !important}.agents-table__action.sc-ir-agents-table{display:flex;min-width:100px;justify-content:flex-end}.agents-table__muted.sc-ir-agents-table{font-size:0.75rem}@media (min-width: 1024px){.agents-table__action.sc-ir-agents-table{min-width:150px}}";
const IrAgentsTableStyle0 = irAgentsTableCss;

const tableCss = ".sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-agents-table{overflow-x:auto}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-agents-table{position:sticky !important;right:0;background-color:white}";
const IrAgentsTableStyle1 = tableCss;

const IrAgentsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '1854f6074a5815b75b061c9068d299dc81bbbfb9' }, h("div", { key: '4ac4e60c709a358cff6c217a476faa5522dde83a', class: "table--container" }, h("table", { key: '080ad5f53b878aca9cf0767a1ac7960ef1ca23c8', class: "table" }, h("thead", { key: '12646c1c0e5bf418b4cda7c81d964ed8103f2acf' }, h("tr", { key: '8abb86a333044e96fa3aa36cb314d37a3115ef42' }, h("th", { key: '7fb0b85897f8ce2be4330b0df83d23ef10bf5ee4', class: "agents-table__header" }, "Name"), h("th", { key: '7229961c632057997783bde309ce6b37d48c7852', class: "agents-table__header" }, "Type"), h("th", { key: 'de6da55f9dc1ab38ffce6693f5f4d51f5b9a448d', class: "agents-table__header" }, "Email"), h("th", { key: 'f71763d7a96cb6b3a26d07a18bff10bb1e3d1fea', class: "agents-table__header" }, "Phone"), h("th", { key: 'e73e683b1abe5a3a29edfeb17eec8b9776229de7', class: "agents-table__header" }, "Active"), h("th", { key: 'a7c713d40db34340fca3586e411cba7c733d0afe', class: "agents-table__header " }, h("div", { key: 'feb13d745d54596847f0ed588dcf331094483b95', class: "agents-table__action" }, h("wa-tooltip", { key: 'ca97ab5ca5584597ab6f630e63d7f5f16161ecbb', for: "create-agent-button" }, "New Agent"), h("ir-custom-button", { key: '943628303d60b753703877eaade00c5a451eef3f', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, h("wa-icon", { key: 'd0313ce55d3b910a066a941944fc1b7d1d27ecc1', name: "plus", style: { fontSize: '1.2rem' }, label: "New Agent" })))))), h("tbody", { key: '609530ccc7acfa9184949faa426ea4cc0c40c328' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (h("tr", { class: "ir-table-row", key: agent.id }, h("td", { class: "agents-table__name" }, h("div", { class: "d-flex flex-column" }, h("p", null, agent.name), h("p", { class: "agents-table__muted" }, agent.reference))), h("td", null, h("div", { class: "d-flex flex-column" }, h("p", null, typeLabel), h("p", { class: "agents-table__muted" }, agent.code))), h("td", null, agent.email || 'N/A'), h("td", null, this.getAgentPhoneNumber(agent) || 'N/A'), h("td", null, h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), h("td", null, h("div", { class: "agents-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (h("tr", { key: 'd4c3422b006cfb179ebbcfa15fc6b28c699f2c83', class: "empty-row" }, h("td", { key: 'a90835bab301be51028f30bc32a804797f102e50', colSpan: 6 }, h("ir-empty-state", { key: 'bf9f610c819c39f533c2e1279f42860b01bd825d' })))))))));
    }
};
IrAgentsTable.style = IrAgentsTableStyle0 + IrAgentsTableStyle1;

export { IrAgentEditorDrawer as ir_agent_editor_drawer, IrAgentEditorForm as ir_agent_editor_form, IrAgentsTable as ir_agents_table };

//# sourceMappingURL=ir-agent-editor-drawer_3.entry.js.map