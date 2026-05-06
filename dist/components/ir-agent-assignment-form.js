import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irAgentAssignmentFormCss = ".sc-ir-agent-assignment-form-h{display:block}";
const IrAgentAssignmentFormStyle0 = irAgentAssignmentFormCss;

const IrAgentAssignmentForm$1 = /*@__PURE__*/ proxyCustomElement(class IrAgentAssignmentForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'a79106238bf473037e602ed53c4f4c7d30a166c2' }, h("slot", { key: '3f9bdd30e342657fb35219295560aeeb705898ce' })));
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