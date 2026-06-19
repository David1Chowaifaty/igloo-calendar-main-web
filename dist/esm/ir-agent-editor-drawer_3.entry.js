import { r as registerInstance, c as createEvent, h, H as Host } from './index-BvoylR5O.js';
import { v as v4 } from './v4-CK3_k8jD.js';
import { c as AgentSchema } from './type-D7rOPtKA.js';
import { A as AgentsService } from './agents.service-CfKXQqnt.js';
import { x as getFormSubmitter } from './utils-BDVP7IDp.js';
import { c as calendar_data } from './calendar-data-Cnv5ncgJ.js';
import './index-DeW5X45W.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './moment-Mki5YqAR.js';
import './locales.store-BZFQn8-s.js';
import './index-U7zaiBri.js';

const irAgentEditorDrawerCss = () => `.sc-ir-agent-editor-drawer-h{display:block}.agent-form__tab-group.sc-ir-agent-editor-drawer::part(nav),.agent-form__tab-group.sc-ir-agent-editor-drawer [part~="nav"]{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}`;

const IrAgentEditorDrawer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.agentEditorClose = createEvent(this, "agentEditorClose");
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
        return (h(Host, { key: '2d42a1108876d5dc46d5dfa6777df208a94fcc06', "data-testid": "agent-editor-drawer" }, h("ir-drawer", { key: 'acd9ff2207da11a340cf0a10062603750fa4010b', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? 'Edit Agent' : 'New Agent', open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
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
        h("ir-agent-editor-form", { key: '1a379bad8d4ae77c6a70bec5c11e4f3f24178d63', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), h("div", { key: 'fde023fe272b277d9045fa94bce97191c57f22b5', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, h("ir-custom-button", { key: 'f3a010f5ede9e6ee379c12719efce6caf45d997b', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, "Cancel"), h("ir-custom-button", { key: '8ba8627e29ff2aff49bb4d3c23b1a5c5da8c28e7', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "m", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, "Save"), this.agent?.id !== -1 && (h("ir-custom-button", { key: '2d8b092ee675a31323d5ac5aa8bced105a412c67', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "m", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, "Save & Close"))))));
    }
};
IrAgentEditorDrawer.style = irAgentEditorDrawerCss();

const irAgentEditorFormCss = () => `.sc-ir-agent-editor-form-h{display:block}.agent-editor__content.sc-ir-agent-editor-form{display:flex;flex-direction:column;gap:1rem}.agent-editor__profile.sc-ir-agent-editor-form,.agent-editor__contract.sc-ir-agent-editor-form{flex:1 1 0%}@media (min-width: 768px){.agent-editor__content.sc-ir-agent-editor-form{flex-direction:row;gap:4rem}}`;

const IrAgentEditorForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.upsertAgent = createEvent(this, "upsertAgent");
        this.closeDrawer = createEvent(this, "closeDrawer");
        this.loadingChanged = createEvent(this, "loadingChanged");
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
        return (h("form", { key: 'f484a63d1e2e2bed31982dd0a86aa45692ed4194', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(getFormSubmitter(e));
            }, class: "agent-editor__content" }, h("ir-agent-profile", { key: 'fe6e17317e2d694014713fd29fb2dcb4c61d7456', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), h("ir-agent-contract", { key: '4f1a4d8683f89038d92062fe53c06b1ca20f22ad', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
    }
};
IrAgentEditorForm.style = irAgentEditorFormCss();

const irAgentsTableCss = () => `.sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-agents-table{overflow-x:auto}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-agents-table{position:sticky !important;right:0;background-color:white}.sc-ir-agents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-agents-table-h{box-sizing:border-box !important}.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge),.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::before,.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-agents-table{display:none !important}.agents-table__action.sc-ir-agents-table{display:flex;min-width:100px;justify-content:flex-end}.agents-table__muted.sc-ir-agents-table{font-size:0.75rem}@media (min-width: 1024px){.agents-table__action.sc-ir-agents-table{min-width:150px}}`;

const tableCss = () => `.sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-agents-table{overflow-x:auto}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-agents-table{position:sticky !important;right:0;background-color:white}`;

const IrAgentsTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.upsertAgent = createEvent(this, "upsertAgent");
        this.deleteAgent = createEvent(this, "deleteAgent");
        this.toggleAgentActive = createEvent(this, "toggleAgentActive");
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
        return (h(Host, { key: 'd93c7e167ca424c037d91ce536287de3c36f182a' }, h("div", { key: '987faf967c9d25cd8e081569e7ff1c3075beb08c', class: "table--container" }, h("table", { key: 'c05050b0f735070f87ff4f15dde626a7e6b33c30', class: "table" }, h("thead", { key: 'ef8ee14b395a61d81332cf2abda49ee0ca569b50' }, h("tr", { key: '1c498a68cb4f017bcbba60a353000fd423263768' }, h("th", { key: '8bd502d57e812f88aedf2ee6cf5cb2b21bf1e369', class: "agents-table__header" }, "Name"), h("th", { key: '871b8b4c69932423be887ea2fdb4e6bd431b982e', class: "agents-table__header" }, "Type"), h("th", { key: 'fe782437d3d719f037f23658be2296b6135445f7', class: "agents-table__header" }, "Email"), h("th", { key: '405ba66671f734a1b3f4e5ee75c1cf8468853a53', class: "agents-table__header" }, "Phone"), h("th", { key: '199947935dd16c4f715f06620c1c753aece280ca', class: "agents-table__header" }, "Active"), h("th", { key: '353b65bcf569f2e9b701923bf119a4bb296f656f', class: "agents-table__header " }, h("div", { key: '66f3869b92bd50bc3f9146e30d0a225081a689b2', class: "agents-table__action" }, h("wa-tooltip", { key: '1c093ff3562015d28ba9c6c904169d2abfe09dd5', for: "create-agent-button" }, "New Agent"), h("ir-custom-button", { key: '9fc1712da8ae6b0f4db21c2934c89747a98a9b8f', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, h("wa-icon", { key: 'e7485d21d2c16c5b53c3a8811c38b5b6187a8dd7', name: "plus", style: { fontSize: '1.2rem' }, label: "New Agent" })))))), h("tbody", { key: 'f7422b8a03c00203c68bcba64eccb0a06294ef52' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (h("tr", { class: "ir-table-row", key: agent.id }, h("td", { class: "agents-table__name" }, h("div", { class: "d-flex flex-column" }, h("p", null, agent.name), h("p", { class: "agents-table__muted" }, agent.reference))), h("td", null, h("div", { class: "d-flex flex-column" }, h("p", null, typeLabel), h("p", { class: "agents-table__muted" }, agent.code))), h("td", null, agent.email || 'N/A'), h("td", null, this.getAgentPhoneNumber(agent) || 'N/A'), h("td", null, h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), h("td", null, h("div", { class: "agents-table__action" }, h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (h("tr", { key: '38c1b03ac4476d5a3e3113b239868010ac58fde1', class: "empty-row" }, h("td", { key: '864ff040590adb296edca4140c5443beeef91723', colSpan: 6 }, h("ir-empty-state", { key: 'ba65a47c043989f6472bd06d269b92c6f3e65037' })))))))));
    }
};
IrAgentsTable.style = irAgentsTableCss() + tableCss();

export { IrAgentEditorDrawer as ir_agent_editor_drawer, IrAgentEditorForm as ir_agent_editor_form, IrAgentsTable as ir_agents_table };
