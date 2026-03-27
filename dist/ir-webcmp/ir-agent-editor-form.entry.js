import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';
import { A as AgentSchema } from './type-a9ceb576.js';
import { A as AgentsService } from './agents.service-b5b93a30.js';
import { B as getFormSubmitter } from './utils-7eaed9ad.js';
import './index-40c31d5b.js';
import './index-5ba472df.js';
import './moment-ab846cee.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';
import './locales.store-daef23cc.js';

const irAgentEditorFormCss = ".sc-ir-agent-editor-form-h{display:block}.agent-editor__content.sc-ir-agent-editor-form{display:flex;flex-direction:column;gap:1rem}.agent-editor__profile.sc-ir-agent-editor-form,.agent-editor__contract.sc-ir-agent-editor-form{flex:1 1 0%}@media (min-width: 768px){.agent-editor__content.sc-ir-agent-editor-form{flex-direction:row;gap:4rem}}";

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
        return (h("form", { key: 'bf80fec23be5072d9eb2e4d02395b2f0591e9021', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(getFormSubmitter(e));
            }, class: "agent-editor__content" }, h("ir-agent-profile", { key: '1172867049a3f5af2c8187da7065040dabddd47e', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), h("ir-agent-contract", { key: '1c210dd89757ed3201c672251591b8ef125ff3e0', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
    }
};
IrAgentEditorForm.style = irAgentEditorFormCss;

export { IrAgentEditorForm as ir_agent_editor_form };

//# sourceMappingURL=ir-agent-editor-form.entry.js.map