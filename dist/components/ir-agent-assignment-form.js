import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irAgentAssignmentFormCss = ".sc-ir-agent-assignment-form-h{display:block}";
const IrAgentAssignmentFormStyle0 = irAgentAssignmentFormCss;

const IrAgentAssignmentForm$1 = /*@__PURE__*/ proxyCustomElement(class IrAgentAssignmentForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'f64cf0b4e7b2d4a124649fef1b0e238de0fa0e2e' }, h("slot", { key: 'ad425b95edf76bea1e5f1039b7221fa63036e102' })));
    }
    static get style() { return IrAgentAssignmentFormStyle0; }
}, [6, "ir-agent-assignment-form"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agent-assignment-form"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agent-assignment-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentAssignmentForm$1);
            }
            break;
    } });
}

const IrAgentAssignmentForm = IrAgentAssignmentForm$1;
const defineCustomElement = defineCustomElement$1;

export { IrAgentAssignmentForm, defineCustomElement };

//# sourceMappingURL=ir-agent-assignment-form.js.map