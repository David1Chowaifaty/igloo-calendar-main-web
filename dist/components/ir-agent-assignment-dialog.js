import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irAgentAssignmentDialogCss = ".sc-ir-agent-assignment-dialog-h{display:block}";
const IrAgentAssignmentDialogStyle0 = irAgentAssignmentDialogCss;

const IrAgentAssignmentDialog$1 = /*@__PURE__*/ proxyCustomElement(class IrAgentAssignmentDialog extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'fd3d431ef5bf67d396063416bf709e7c529682d6' }, h("slot", { key: '7db917ac547e0d79633f2b3c8e451843551f0443' })));
    }
    static get style() { return IrAgentAssignmentDialogStyle0; }
}, [6, "ir-agent-assignment-dialog"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-agent-assignment-dialog"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-agent-assignment-dialog":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAgentAssignmentDialog$1);
            }
            break;
    } });
}

const IrAgentAssignmentDialog = IrAgentAssignmentDialog$1;
const defineCustomElement = defineCustomElement$1;

export { IrAgentAssignmentDialog, defineCustomElement };

//# sourceMappingURL=ir-agent-assignment-dialog.js.map