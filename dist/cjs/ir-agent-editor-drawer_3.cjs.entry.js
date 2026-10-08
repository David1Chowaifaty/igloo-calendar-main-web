'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-wyGILxEL.js');
var v4 = require('./v4-_2BfiRUa.js');
var type = require('./type-Bj2x9EWc.js');
var agents_service = require('./agents.service-C9idZypK.js');
var utils = require('./utils-HVSePjFf.js');
var calendarData = require('./calendar-data-Br2L_0sg.js');
var utils$1 = require('./utils-S4ztg9KF.js');
require('./locale-scope-C7rmpwuA.js');
require('./types-BVJQZ50e.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
require('./ir-date-wIaf9EWb.js');
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
        return (index.h(index.Host, { key: '0f119ac7f5670e41e73dc5daf4d9e79937895e14', "data-testid": "agent-editor-drawer" }, index.h("ir-drawer", { key: '00131591d094174bdedbc066468c2cf55bbf752f', class: "agent__drawer", style: { '--ir-drawer-width': '60rem' }, label: isEditMode ? t.t('Lcz_EditAgent', { fallback: 'Edit Agent' }) : t.t('Lcz_NewAgent', { fallback: 'New Agent' }), open: this.open, "data-testid": "agent-editor-drawer-container", onDrawerHide: e => this.handleDrawerClose(e) }, this.open && (
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
        index.h("ir-agent-editor-form", { key: '145e68e577215be7dbf6d6cae3b04d6febd8e7eb', onCloseDrawer: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.agentEditorClose.emit();
            }, onLoadingChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.loading = e.detail;
            }, setupEntries: this.setupEntries, countries: this.countries, agent: this.agent, formId: this.baseId, "data-testid": "agent-editor-form" })), index.h("div", { key: '63850739df9b0e6828868338590f58e214d1d39f', slot: "footer", class: "ir__drawer-footer", "data-testid": "agent-editor-drawer-footer" }, index.h("ir-custom-button", { key: '19dd43c4ebcc98cd3543db58f6de51298c7bdd10', size: "m", "data-drawer": "close", appearance: "filled", variant: "neutral", "data-testid": "agent-editor-cancel-button" }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '6e31d7d924c332077c9ead28b7a5234bf0a1e7a4', loading: this.loading === (this.agent?.id === -1 ? 'save&close' : 'save'), type: "submit", form: this.baseId, size: "m", value: this.agent?.id === -1 ? 'save&close' : 'save', appearance: this.agent?.id === -1 ? 'accent' : 'outlined', variant: "brand", "data-testid": "agent-editor-save-button" }, t.t('Lcz_Save', { fallback: 'Save' })), this.agent?.id !== -1 && (index.h("ir-custom-button", { key: '5bb0dc4c1a3113a1f5dd430e81b681b12e98e9d7', loading: this.loading === 'save&close', type: "submit", form: this.baseId, size: "m", value: "save&close", appearance: "accent", variant: "brand", "data-testid": "agent-editor-save-button" }, t.t('Lcz_SaveAndClose', { fallback: 'Save & Close' })))))));
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
        return (index.h("form", { key: 'ffc6463d0f98f0dd9060b028b8e0ee7554efdae6', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(utils.getFormSubmitter(e));
            }, class: "agent-editor__content" }, index.h("ir-agent-profile", { key: '81f3a3979d48f2e1f06c45908e8b3f98e4f124c4', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), index.h("ir-agent-contract", { key: '38212d1783f96247b73efe19280445d8493bb31f', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
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
        return (index.h(index.Host, { key: '22f8bb259ee8c91d3385ced28fa2894bed34c5db' }, index.h("div", { key: '0e5ec273ae1be59193f77462014aa418fd0dbfe9', class: "table--container" }, index.h("table", { key: '9c6fc8ff215abdf284da1c6d78759197a8ea39cd', class: "table" }, index.h("thead", { key: 'ba894ead607fae0cf54eca49d612afeeaeee9ba2' }, index.h("tr", { key: '05904662aa4ebcc567c450bcd6d3842aa979eb50' }, index.h("th", { key: '1b6f65b72d8021ece06d2fbf991cff1f30189de1', class: "agents-table__header" }, t.t('Lcz_Name', { fallback: 'Name' })), index.h("th", { key: '4447a953e4f4b4225b59dacd8099ad0128d0b733', class: "agents-table__header" }, t.t('Lcz_Type', { fallback: 'Type' })), index.h("th", { key: '7f49253fc09cd9c0a08f6f5fbc1c5699f27fb388', class: "agents-table__header" }, t.t('Lcz_Email', { fallback: 'Email' })), index.h("th", { key: '0f8a775051128ebc9d7d97e6e472eced2a08827b', class: "agents-table__header" }, t.t('Lcz_Phone', { fallback: 'Phone' })), index.h("th", { key: '615df93ccca051097311396445422286b55eb88c', class: "agents-table__header" }, t.t('Lcz_Active', { fallback: 'Active' })), index.h("th", { key: 'e9cce3707f1ae5960dfbeeb50c8da1d52d1add1f', class: "agents-table__header " }, index.h("div", { key: '848ef344b95195a3d1555dac022c5ee88dc3732b', class: "agents-table__action" }, index.h("wa-tooltip", { key: '16f714ba55fd31e985287425139875243346fa94', for: "create-agent-button" }, t.t('Lcz_NewAgent', { fallback: 'New Agent' })), index.h("ir-custom-button", { key: 'b37e01cf446af01e46e955c4e79fbbe9ba87bdb8', onClickHandler: this.createAgent, variant: "neutral", appearance: "plain", id: "create-agent-button", "data-testid": "create-agent-button" }, index.h("wa-icon", { key: '5c5bf4e232c22383b97e3f3cb4a96176aa21d9a4', name: "plus", style: { fontSize: '1.2rem' }, label: t.t('Lcz_NewAgent', { fallback: 'New Agent' }) })))))), index.h("tbody", { key: '11098474bfdd6c1b2f42eb113728065e902688db' }, this.agents.map(agent => {
            // const status = this.getStatusLabel(agent);
            const typeLabel = this.getAgentTypeLabel(agent);
            return (index.h("tr", { class: "ir-table-row", key: agent.id }, index.h("td", { class: "agents-table__name" }, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, agent.name), index.h("p", { class: "agents-table__muted" }, agent.reference))), index.h("td", null, index.h("div", { class: "d-flex flex-column" }, index.h("p", null, typeLabel), index.h("p", { class: "agents-table__muted" }, agent.code))), index.h("td", null, agent.email || t.t('Lcz_NotAvailable', { fallback: 'N/A' })), index.h("td", null, this.getAgentPhoneNumber(agent) || t.t('Lcz_NotAvailable', { fallback: 'N/A' })), index.h("td", null, index.h("wa-switch", { onchange: e => this.toggleAgentActive.emit({ ...agent, is_active: e.target.checked }), defaultChecked: agent.is_active, checked: agent.is_active })), index.h("td", null, index.h("div", { class: "agents-table__action" }, index.h("ir-custom-button", { appearance: "plain", variant: "neutral", onClickHandler: () => this.upsertAgent.emit(agent) }, index.h("wa-icon", { name: "edit", "aria-hidden": "true", style: { fontSize: '1.2rem' } }))))));
        }), this.agents?.length === 0 && (index.h("tr", { key: '7642294f05935de1f08de98e452aaa82d8af34d3', class: "empty-row" }, index.h("td", { key: '27b74a24af33aa8627d985781f8c5220799f22f0', colSpan: 6 }, index.h("ir-empty-state", { key: 'b45199f3e5a63ce78547d31490342a7721906fb7' })))))))));
    }
};
IrAgentsTable.style = irAgentsTableCss() + tableCss();

exports.ir_agent_editor_drawer = IrAgentEditorDrawer;
exports.ir_agent_editor_form = IrAgentEditorForm;
exports.ir_agents_table = IrAgentsTable;
