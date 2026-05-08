'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const v4 = require('./v4-9b297151.js');
const type = require('./type-87fd01b8.js');
const agents_service = require('./agents.service-3088231b.js');
const utils = require('./utils-535ec4cf.js');
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
        return (index.h(index.Host, { key: '4c7042db3590b5f133a882524619a934415a22e8', "data-testid": "agent-editor-drawer" }, index.h("ir-drawer", { key: '8bb460783bfd0877bba63ea823bac746066d8629', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? 'Edit Agent' : 'New Agent', open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
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
        index.h("ir-agent-editor-form", { key: 'cc5c6d3d1456bd9230bdc87cb8ed96c8456a4d38', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), index.h("div", { key: '685a90dba7014f51e13331c4d4163c87e5299c04', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, index.h("ir-custom-button", { key: '3bf803a4fc77dc9543681223ebc34df750d5f382', size: "medium", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, "Cancel"), index.h("ir-custom-button", { key: '794f081272bc56774812a700c8094d9ccac90e9b', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "medium", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, "Save"), this.agent?.id !== -1 && (index.h("ir-custom-button", { key: '73c0d17208c47f1bc20c22dbf12ce81b0a24d88e', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "medium", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, "Save & Close"))))));
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
        return (index.h("form", { key: '5c16b67e988772a0957e9d307dd9efdc07edb7c4', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(utils.getFormSubmitter(e));
            }, class: "agent-editor__content" }, index.h("ir-agent-profile", { key: 'e1175f9c157cc482821d192ad66bdf432df59c64', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), index.h("ir-agent-contract", { key: '59264fe4b43d3eeccd7d3c9a9e06b19c07184c25', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
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
        return (index.h(index.Host, { key: 'f954583ef2ead5d22e80d3cf29aff4f369619eea' }, index.h("div", { key: '26a570733e41138eb8a46d464bcc1d58a6e34a94', class: "table--container" }, index.h("table", { key: 'ae0df825ad04600484741ca2b8bab62356320e8a', class: "table" }, index.h("thead", { key: 'fa93bc7808f52cfe3274d99376f21aa86851c1df' }, index.h("tr", { key: '54dc7a9114e469b960c6756fc8e39b37ab7ac0b7' }, index.h("th", { key: '58ba5782499412e28dab7deb743eb2fea47a7a5e', class: "agents-table__header" }, "Name"), index.h("th", { key: '6c5e5ae3bd653b04a5c2e2e46210d44cac60b123', class: "agents-table__header" }, "Type"), index.h("th", { key: '9188faff2a2edeff01a99566e03a587927a0e3e7', class: "agents-table__header" }, "Email"), index.h("th", { key: '09f43c0b786094b0886f409e76d82e4c2979ba94', class: "agents-table__header" }, "Phone"), index.h("th", { key: '4a57d48d1508012ff8a0db61c9857a521daeab4b', class: "agents-table__header" }, "Active"), index.h("th", { key: '57a7e412a321cb9753ca18ea434dace3eb2deeb6', class: "agents-table__header " }, index.h("div", { key: 'ca49cb85b734e4a0f3c0d26af9d828ea8519899e', class: "agents-table__action" }, index.h("wa-tooltip", { key: 'ff69e03c806418ef2ae02e02ba306888f82fa96d', for: "create-agent-button" }, "New Agent"), index.h("ir-custom-button", { key: '5c317e6fbb0a62640feccf520c0fcef17f80ca4a', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, index.h("wa-icon", { key: '9ab22d657197d76f68578c3eb5c07c7f6e9ae017', name: "plus", style: { fontSize: '1.2rem' }, label: "New Agent" })))))), index.h("tbody", { key: '9efa74620c9a025ed78c3c950b64f12e2da05057' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (index.h("tr", { class: "ir-table-row", key: agent.id }, index.h("td", { class: "agents-table__name" }, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, agent.name), index.h("p", { class: "agents-table__muted" }, agent.reference))), index.h("td", null, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, typeLabel), index.h("p", { class: "agents-table__muted" }, agent.code))), index.h("td", null, agent.email || 'N/A'), index.h("td", null, this.getAgentPhoneNumber(agent) || 'N/A'), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), index.h("td", null, index.h("div", { class: "agents-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (index.h("tr", { key: 'e3c19eb025e590d558f0048a2eff6ffb42fdf1d9', class: "empty-row" }, index.h("td", { key: 'ed2ec3aa31c726c3859d9cad6edc7baef6c74435', colSpan: 6 }, index.h("ir-empty-state", { key: '380254f898b253a5c7147a939cbc3946479188d5' })))))))));
    }
};
IrAgentsTable.style = IrAgentsTableStyle0 + IrAgentsTableStyle1;

exports.ir_agent_editor_drawer = IrAgentEditorDrawer;
exports.ir_agent_editor_form = IrAgentEditorForm;
exports.ir_agents_table = IrAgentsTable;

//# sourceMappingURL=ir-agent-editor-drawer_3.cjs.entry.js.map