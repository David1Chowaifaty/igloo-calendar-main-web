import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irAgentAssignmentFormCss = ".sc-ir-agent-assignment-form-h{display:block}";
const IrAgentAssignmentFormStyle0 = irAgentAssignmentFormCss;

const IrAgentAssignmentForm$1 = /*@__PURE__*/ proxyCustomElement(class IrAgentAssignmentForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'cf708d3bc598d94c5147d947cee0d834c404a0a2' }, h("slot", { key: 'd9227020c8ab2c33d219893f38f058e37bda1da5' })));
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