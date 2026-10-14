'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-sd8HJHNy.js');
var v4 = require('./v4-_2BfiRUa.js');
var type = require('./type-Bj2x9EWc.js');
var agents_service = require('./agents.service-C9idZypK.js');
var utils = require('./utils-CpEd8z_J.js');
var calendarData = require('./calendar-data-DZk0v7WL.js');
var utils$1 = require('./utils-DdTHrEYB.js');
require('./locales.store-D6DJIhoZ.js');
require('./types-BVJQZ50e.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
require('./ir-date-Bjy8vNGm.js');
require('./language-observer-DKp37LIu.js');
require('./calendar-dates-BxDGM1ix.js');
require('./IBooking-hDE_y33g.js');
require('./commonSchemas-D4iFLV5-.js');

const irAgentEditorDrawerCss = () => `.sc-ir-agent-editor-drawer-h{display:block}.agent-form__tab-group.sc-ir-agent-editor-drawer::part(nav),.agent-form__tab-group.sc-ir-agent-editor-drawer [part~="nav"]{position:sticky;top:0;z-index:10;background-color:var(--wa-color-surface-default)}`;

const IrAgentEditorDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.agentEditorClose = index.createEvent(this, "agentEditorClose");
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
        return (index.h(index.Host, { key: 'cc462f81a9b70f3fefdf53468af4f5be11c253bb', "data-testid": "agent-editor-drawer" }, index.h("ir-drawer", { key: 'c3c9586e0ffff51bc32d21265e049f5c76b51df3', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? t.t('Lcz_EditAgent', { fallback: 'Edit Agent' }) : t.t('Lcz_NewAgent', { fallback: 'New Agent' }), open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
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
        index.h("ir-agent-editor-form", { key: 'aa66c5fefdaeb099f0760e1ae69b89e1242db5d2', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), index.h("div", { key: 'b58997ce439e4ae343596b80d8c78188f9e9a025', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, index.h("ir-custom-button", { key: '0737c31892157c7c5ed906e1ab5ab1aefd7109c6', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'dea2c4692a0ab572065f26188af8df3ef9026ea9', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "m", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, t.t('Lcz_Save', { fallback: 'Save' })), this.agent?.id !== -1 && (index.h("ir-custom-button", { key: 'c23f800657f4cb1009f52623087ca7f432e0e5f1', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "m", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, t.t('Lcz_SaveAndClose', { fallback: 'Save & Close' })))))));
    }
};
IrAgentEditorDrawer.style = irAgentEditorDrawerCss();

const irAgentEditorFormCss = () => `.sc-ir-agent-editor-form-h{display:block}.agent-editor__content.sc-ir-agent-editor-form{display:flex;flex-direction:column;gap:1rem}.agent-editor__profile.sc-ir-agent-editor-form,.agent-editor__contract.sc-ir-agent-editor-form{flex:1 1 0%}@media (min-width: 768px){.agent-editor__content.sc-ir-agent-editor-form{flex-direction:row;gap:4rem}}`;

const IrAgentEditorForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.upsertAgent = index.createEvent(this, "upsertAgent");
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
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
        return (index.h("form", { key: 'ef6430389fb36494654efee157223721b9d06663', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(utils.getFormSubmitter(e));
            }, class: "agent-editor__content" }, index.h("ir-agent-profile", { key: '1018b6a3eacff7aaeec6fff21600a225845aec24', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), index.h("ir-agent-contract", { key: 'fd4b33290b71df5335f358dd34940f73c78b1f3a', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
    }
};
IrAgentEditorForm.style = irAgentEditorFormCss();

const irAgentsTableCss = () => `.sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-agents-table{overflow-x:auto}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.cell--align-start.sc-ir-agents-table{text-align:start !important}.cell--align-center.sc-ir-agents-table{text-align:center !important}.cell--align-end.sc-ir-agents-table{text-align:end !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-agents-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-agents-table-h{display:flex;flex-direction:column;border-radius:0.5rem;overflow-x:auto;min-height:60vh;max-width:1920px;border:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);background-color:white}.sc-ir-agents-table-h{box-sizing:border-box !important}.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge),.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::before,.sc-ir-agents-table-h *.sc-ir-agents-table:not(wa-badge)::after{box-sizing:inherit !important;padding:0;margin:0}[hidden].sc-ir-agents-table{display:none !important}.agents-table__action.sc-ir-agents-table{display:flex;min-width:100px;justify-content:flex-end}.agents-table__muted.sc-ir-agents-table{font-size:0.75rem}@media (min-width: 1024px){.agents-table__action.sc-ir-agents-table{min-width:150px}}`;

const tableCss = () => `.sc-ir-agents-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-agents-table{overflow-x:auto}.table--container.sc-ir-agents-table,.data-table.sc-ir-agents-table{height:100%}.ir-table-row.sc-ir-agents-table td.sc-ir-agents-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-agents-table td.sc-ir-agents-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-agents-table tbody.sc-ir-agents-table tr.sc-ir-agents-table:last-child>td.sc-ir-agents-table{border-bottom:0 !important}.cell--align-start.sc-ir-agents-table{text-align:start !important}.cell--align-center.sc-ir-agents-table{text-align:center !important}.cell--align-end.sc-ir-agents-table{text-align:end !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-agents-table thead.sc-ir-agents-table th.sc-ir-agents-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-agents-table,.ir-table-row.sc-ir-agents-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-agents-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-agents-table thead.sc-ir-agents-table th.sortable.sc-ir-agents-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-agents-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-agents-table svg.sc-ir-agents-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-agents-table td.sc-ir-agents-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-agents-table:hover td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-agents-table:active td.sc-ir-agents-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-agents-table .empty-row.sc-ir-agents-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-agents-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-agents-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}`;

const IrAgentsTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.upsertAgent = index.createEvent(this, "upsertAgent");
        this.deleteAgent = index.createEvent(this, "deleteAgent");
        this.toggleAgentActive = index.createEvent(this, "toggleAgentActive");
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
        return utils$1.getSetupEntryLabel(agentType, this.language);
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
        return (index.h(index.Host, { key: '5dcaee36cc0bbacbfaba0bdec2f2e5314689d28b' }, index.h("div", { key: 'd2856be16b01b891f16ad540a04f7d2ef7996fa4', class: "table--container" }, index.h("table", { key: '006fad124c82c1977b054e0d9c5e5a3903b63450', class: "table" }, index.h("thead", { key: '78627ba82a1d426bb64be0ece5f1253df5b4cbc1' }, index.h("tr", { key: '987c84fc7ed040310222db97ab6a4efad081b453' }, index.h("th", { key: '799a8dc64e31e435f897875b761fa6fff990062f', class: "agents-table__header" }, t.t('Lcz_Name', { fallback: 'Name' })), index.h("th", { key: '3ad8da9b106a54c0d26f1450c0f4620a5c34bf0c', class: "agents-table__header" }, t.t('Lcz_Type', { fallback: 'Type' })), index.h("th", { key: 'a7c7715bb3b36158b16c179232635523c62dc74a', class: "agents-table__header" }, t.t('Lcz_Email', { fallback: 'Email' })), index.h("th", { key: '05df2ec229ffda5b6bd558cb15849bfdc911520b', class: "agents-table__header" }, t.t('Lcz_Phone', { fallback: 'Phone' })), index.h("th", { key: 'd8c500e9d34abf90a342dfa0dce977303fd09859', class: "agents-table__header" }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: '91bacaf24922f7833526c6492192529002c6035e', class: "agents-table__header " }, index.h("div", { key: 'ac8292ec063172ccb658cbba216babecc960b4a1', class: "agents-table__action" }, index.h("wa-tooltip", { key: '9afe28fe4ef77f0e0edd36ed4d12d2a13ceb4829', for: "create-agent-button" }, t.t('Lcz_NewAgent', { fallback: 'New Agent' })), index.h("ir-custom-button", { key: '9f5d1d530a5a9d7ba4c34303155397c6d83469f2', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, index.h("wa-icon", { key: '2cdb6f32b1dc66de77d4a9e2935686b913d82750', name: "plus", style: { fontSize: '1.2rem' }, label: t.t('Lcz_NewAgent', { fallback: 'New Agent' }) })))))), index.h("tbody", { key: '4ee9fc8ad1cd72e5d8a48321e24a037c5012bc83' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (index.h("tr", { class: "ir-table-row", key: agent.id }, index.h("td", { class: "agents-table__name" }, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, agent.name), index.h("p", { class: "agents-table__muted" }, agent.reference))), index.h("td", null, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, typeLabel), index.h("p", { class: "agents-table__muted" }, agent.code))), index.h("td", null, agent.email || t.t('Lcz_NotAvailable', { fallback: 'N/A' })), index.h("td", null, this.getAgentPhoneNumber(agent) || t.t('Lcz_NotAvailable', { fallback: 'N/A' })), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), index.h("td", null, index.h("div", { class: "agents-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (index.h("tr", { key: 'd8d6c1d56dc7a69dc76f1b9a4a84c5182229920e', class: "empty-row" }, index.h("td", { key: 'e662bffcb9daa3046751f5776249659eaa559cdc', colSpan: 6 }, index.h("ir-empty-state", { key: '8dba470d5b907f89778d3a087d5ea5d1a88a377d' })))))))));
    }
};
IrAgentsTable.style = irAgentsTableCss() + tableCss();

exports.ir_agent_editor_drawer = IrAgentEditorDrawer;
exports.ir_agent_editor_form = IrAgentEditorForm;
exports.ir_agents_table = IrAgentsTable;
