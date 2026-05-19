'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const v4 = require('./v4-9b297151.js');
const type = require('./type-87fd01b8.js');
const agents_service = require('./agents.service-3088231b.js');
const utils = require('./utils-cf15d06a.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
require('./index-8bb117a0.js');
require('./axios-6e678d52.js');
require('./moment-1780b03a.js');
require('./locales.store-32782582.js');
require('./index-fbf1fe1d.js');

const irAgentEditorDrawerCss = ".sc-ir-agent-editor-drawer-h{display:block}.agent-form__tab-group.sc-ir-agent-editor-drawer::part(nav){position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}";
const IrAgentEditorDrawerStyle0 = irAgentEditorDrawerCss;

const IrAgentEditorDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentEditorClose = index.createEvent(this, "agentEditorClose", 7);
    }
    open = false;
    agent;
    countries;
    setupEntries;
    currentTab = 'profile';
    loading;
    agentEditorClose;
    baseId = `agent-form__id-${v4.v4()}`;
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
        return (index.h(index.Host, { key: 'f31c9ef7ce3900d58c03e4ac2e7cdaac9f7b6c3c', "data-testid": "agent-editor-drawer" }, index.h("ir-drawer", { key: 'fa7809e05fbdd81d88124216adcc1865b4955e6d', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? 'Edit Agent' : 'New Agent', open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
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
        index.h("ir-agent-editor-form", { key: '86826a4f10fee6df95df94c911bcf318cb2d4b3c', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), index.h("div", { key: '94579ecd41abedf31ec09e8c6786c3aca84ff6fb', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, index.h("ir-custom-button", { key: '788647ad9b65ef9223a211fc5fee7f7f01e210db', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, "Cancel"), index.h("ir-custom-button", { key: 'f214e4ef54821062a96b0dc79ca37312d3339a11', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "medium", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, "Save"), this.agent?.id !== -1 && (index.h("ir-custom-button", { key: 'bbbd4ed993b7434f49ec81a534d30156e429eb7d', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "medium", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, "Save & Close"))))));
    }
};
IrAgentEditorDrawer.style = IrAgentEditorDrawerStyle0;

const irAgentEditorFormCss = ".sc-ir-agent-editor-form-h{display:block}.agent-editor__content.sc-ir-agent-editor-form{display:flex;flex-direction:column;gap:1rem}.agent-editor__profile.sc-ir-agent-editor-form,.agent-editor__contract.sc-ir-agent-editor-form{flex:1 1 0%}@media (min-width: 768px){.agent-editor__content.sc-ir-agent-editor-form{flex-direction:row;gap:4rem}}";
const IrAgentEditorFormStyle0 = irAgentEditorFormCss;

const IrAgentEditorForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.upsertAgent = index.createEvent(this, "upsertAgent", 7);
        this.closeDrawer = index.createEvent(this, "closeDrawer", 7);
        this.loadingChanged = index.createEvent(this, "loadingChanged", 7);
    }
    agent;
    formId;
    countries;
    setupEntries;
    upsertAgent;
    closeDrawer;
    loadingChanged;
    agentService = new agents_service.AgentsService();
    handleAgentFieldChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const agent = this.agent || {};
        this.agent = { ...agent, ...e.detail };
    }
    async saveOrEditAgent(submitter) {
        try {
            this.loadingChanged.emit(submitter);
            type.AgentSchema.parse(this.agent);
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
        return (index.h("form", { key: '0aa9ae6d79247b4cc344b977cf5ea026f53dd80b', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(utils.getFormSubmitter(e));
            }, class: "agent-editor__content" }, index.h("ir-agent-profile", { key: 'b827f8371e15495b80481c129a8241ab19ed21f7', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), index.h("ir-agent-contract", { key: 'd50189ca102e5b634129d960d15475bb5eb6d640', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
    }
};
IrAgentEditorForm.style = IrAgentEditorFormStyle0;

const irAgentsTableCss = ".sc-ir-agents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-agents-table-h{box-sizing:border-box !important}.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge),.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::before,.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-agents-table{display:none !important}.agents-table__action.sc-ir-agents-table{display:flex;min-width:100px;justify-content:flex-end}.agents-table__muted.sc-ir-agents-table{font-size:0.75rem}@media (min-width: 1024px){.agents-table__action.sc-ir-agents-table{min-width:150px}}";
const IrAgentsTableStyle0 = irAgentsTableCss;

const tableCss = ".sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:left;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box}.table--container.sc-ir-agents-table{overflow-x:auto}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:#ececec;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:#374151;padding:0.5rem 1rem !important;text-align:left}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:1px solid var(--wa-color-neutral-90) !important;color:var(--wa-color-text-normal)}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-brand-fill-normal) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,\n    background-color 0.15s ease-in-out,\n    border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:#e2e6ea3f !important;background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.sticky-column.sc-ir-agents-table{position:sticky !important;right:0;background-color:white}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}";
const IrAgentsTableStyle1 = tableCss;

const IrAgentsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.upsertAgent = index.createEvent(this, "upsertAgent", 7);
        this.deleteAgent = index.createEvent(this, "deleteAgent", 7);
        this.toggleAgentActive = index.createEvent(this, "toggleAgentActive", 7);
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
            property_id: calendarData.calendar_data.property.id,
            provided_discount: null,
            is_active: true,
            is_send_guest_confirmation_email: false,
            verification_mode: 'code',
        });
    };
    render() {
        return (index.h(index.Host, { key: '9d036929cda0b208e79af4f357067329a3aeea0e' }, index.h("div", { key: 'a3a0ffe1c9efa295cc3ed840bc3d4b2f4ec9e236', class: "table--container" }, index.h("table", { key: '16b7ab3ad5f8aa243768e3f1f6429d8fd4c90c5a', class: "table" }, index.h("thead", { key: '2802334d1f40b997518d2c85fcd7b0b7579c2f2f' }, index.h("tr", { key: '3998cf1c1e81d031a2dd51dc4daf2a809f75a59e' }, index.h("th", { key: 'f8a5e5b23e2ad61262dcec3cc3f83e596bc43dff', class: "agents-table__header" }, "Name"), index.h("th", { key: '911b50734ceff6a9d16d04f4d20fb7799b73d4a0', class: "agents-table__header" }, "Type"), index.h("th", { key: 'c2ef7f82201861cdfd614085492b138e81e50c7b', class: "agents-table__header" }, "Email"), index.h("th", { key: '4573bf64295ba0b05223aae44221d8f5a7f6c5a2', class: "agents-table__header" }, "Phone"), index.h("th", { key: '675f0bb376ba000aa6705a9bc8170c8c9233ec50', class: "agents-table__header" }, "Active"), index.h("th", { key: 'aaee9eba6db0cd631910d71c029e9357f702173b', class: "agents-table__header " }, index.h("div", { key: '7db945004bd2bdb87bc5877430ebab4dc61644a3', class: "agents-table__action" }, index.h("wa-tooltip", { key: '1e5047dbf2335972ba8eb21f392b7ec66f588092', for: "create-agent-button" }, "New Agent"), index.h("ir-custom-button", { key: 'd9e583aac2af07f2e9acf8a746b3228fdea719bc', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, index.h("wa-icon", { key: 'bcb69ed7a9b33cb2745a44859ba9fb20b8d1fd7a', name: "plus", style: { fontSize: '1.2rem' }, label: "New Agent" })))))), index.h("tbody", { key: 'bd21ed4284e00e4acf67fc71c44cdea0f95b5f8b' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (index.h("tr", { class: "ir-table-row", key: agent.id }, index.h("td", { class: "agents-table__name" }, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, agent.name), index.h("p", { class: "agents-table__muted" }, agent.reference))), index.h("td", null, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, typeLabel), index.h("p", { class: "agents-table__muted" }, agent.code))), index.h("td", null, agent.email || 'N/A'), index.h("td", null, this.getAgentPhoneNumber(agent) || 'N/A'), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), index.h("td", null, index.h("div", { class: "agents-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (index.h("tr", { key: 'facbc8da96e25e8e6b7ec9f12c42f620e96efcbf', class: "empty-row" }, index.h("td", { key: 'adf60e78b430e846ad2f2ea358d2f648031eb769', colSpan: 6 }, index.h("ir-empty-state", { key: '071c4b0632d882e6b22d8a979092533cd934f4e7' })))))))));
    }
};
IrAgentsTable.style = IrAgentsTableStyle0 + IrAgentsTableStyle1;

exports.ir_agent_editor_drawer = IrAgentEditorDrawer;
exports.ir_agent_editor_form = IrAgentEditorForm;
exports.ir_agents_table = IrAgentsTable;

//# sourceMappingURL=ir-agent-editor-drawer_3.cjs.entry.js.map