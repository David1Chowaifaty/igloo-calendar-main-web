import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { E as ExposedAgentsPropsSchema, H as HandleExposedAgentPropsSchema, b as AgentSchema } from './type.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$8 } from './ir-agent-contract2.js';
import { d as defineCustomElement$7 } from './ir-agent-profile2.js';
import { d as defineCustomElement$6 } from './ir-country-picker2.js';
import { d as defineCustomElement$5 } from './ir-input2.js';
import { d as defineCustomElement$4 } from './ir-input-text2.js';
import { d as defineCustomElement$3 } from './ir-picker2.js';
import { d as defineCustomElement$2 } from './ir-picker-item2.js';
import { d as defineCustomElement$1 } from './ir-validator2.js';

class AgentsService {
    async getExposedAgents(props) {
        const payload = ExposedAgentsPropsSchema.parse(props);
        const { data } = await axios.post('/Get_Exposed_Agents', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
    async handleExposedAgent(props) {
        const payload = HandleExposedAgentPropsSchema.parse(props);
        const { data } = await axios.post('/Handle_Exposed_Agent', payload);
        if (data.ExceptionMsg !== '') {
            throw new Error(data.ExceptionMsg);
        }
        return data.My_Result;
    }
}

const irAgentEditorFormCss = ".sc-ir-agent-editor-form-h{display:block}.agent-editor__content.sc-ir-agent-editor-form{display:flex;flex-direction:column;gap:1rem}.agent-editor__profile.sc-ir-agent-editor-form,.agent-editor__contract.sc-ir-agent-editor-form{flex:1 1 0%}@media (min-width: 768px){.agent-editor__content.sc-ir-agent-editor-form{flex-direction:row;gap:4rem}}";
const IrAgentEditorFormStyle0 = irAgentEditorFormCss;

const IrAgentEditorForm = /*@__PURE__*/ proxyCustomElement(class IrAgentEditorForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.upsertAgent = createEvent(this, "upsertAgent", 7);
        this.closeDrawer = createEvent(this, "closeDrawer", 7);
    }
    agent;
    formId;
    countries;
    setupEntries;
    upsertAgent;
    closeDrawer;
    agentService = new AgentsService();
    handleAgentFieldChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const agent = this.agent || {};
        this.agent = { ...agent, ...e.detail };
    }
    async saveOrEditAgent() {
        try {
            console.log(this.agent);
            AgentSchema.parse(this.agent);
            await this.agentService.handleExposedAgent({ agent: this.agent });
            this.upsertAgent.emit(this.agent);
            this.closeDrawer.emit();
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h("form", { key: 'e4324c79f45df0ad546910df09ac89b2156ddcea', autoComplete: this.formId,
            // autoComplete="off"
            id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.saveOrEditAgent();
            }, class: "agent-editor__content" }, h("ir-agent-profile", { key: '54da9bcec96363e353c135359736c133d7e9c898', setupEntries: this.setupEntries, countries: this.countries, class: 'agent-editor__profile', agent: this.agent }), h("ir-agent-contract", { key: '8a35a9e4722c280de35c63c5c1dcc1f0360a0308', setupEntries: this.setupEntries, class: 'agent-editor__contract', agent: this.agent })));
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

export { AgentsService as A, IrAgentEditorForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-agent-editor-form2.js.map