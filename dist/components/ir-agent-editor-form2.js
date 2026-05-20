import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { c as AgentSchema } from './type.js';
import { A as AgentsService } from './agents.service.js';
import { C as getFormSubmitter } from './utils.js';
import { d as defineCustomElement$8 } from './ir-agent-contract2.js';
import { d as defineCustomElement$7 } from './ir-agent-profile2.js';
import { d as defineCustomElement$6 } from './ir-country-picker2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-input-text2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

const irAgentEditorFormCss = ".sc-ir-agent-editor-form-h{display:block}.agent-editor__content.sc-ir-agent-editor-form{display:flex;flex-direction:column;gap:1rem}.agent-editor__profile.sc-ir-agent-editor-form,.agent-editor__contract.sc-ir-agent-editor-form{flex:1 1 0%}@media (min-width: 768px){.agent-editor__content.sc-ir-agent-editor-form{flex-direction:row;gap:4rem}}";
const IrAgentEditorFormStyle0 = irAgentEditorFormCss;

const IrAgentEditorForm = /*@__PURE__*/ proxyCustomElement(class IrAgentEditorForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("form", { key: 'b74b706bb3a9138b6f875a48d406c08d6b6a8fb1', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent(getFormSubmitter(e));
            }, class: "agent-editor__content" }, h("ir-agent-profile", { key: '8008cf97e8c6012ab566478fb7cabbca655955f4', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), h("ir-agent-contract", { key: 'a4e081213846b2008ee2787e6c694e23e6321ca9', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
    }
    static get style() { return IrAgentEditorFormStyle0; }
}, [2, "ir-agent-editor-form", {
        "agent": [1040],
        "formId": [1, "form-id"],
        "countries": [16],
        "setupEntries": [16]
    }, [[0, "agentFieldChanged", "handleAgentFieldChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agent-editor-form", "ir-agent-contract", "ir-agent-profile", "ir-country-picker", "ir-input", "ir-input-text", "ir-picker", "ir-picker-item", "ir-validator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agent-editor-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentEditorForm);
            }
            break;
        case "ir-agent-contract":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-agent-profile":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
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

export { IrAgentEditorForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-agent-editor-form2.js.map