import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irServiceAssigneeSelectCss = ".sc-ir-service-assignee-select-h{display:block}";
const IrServiceAssigneeSelectStyle0 = irServiceAssigneeSelectCss;

const IrServiceAssigneeSelect = /*@__PURE__*/ proxyCustomElement(class IrServiceAssigneeSelect extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.assignmentChange = createEvent(this, "assignmentChange", 7);
    }
    /**
     * The agent to assign the service to.
     */
    agent;
    /**
     * Currently selected service assignee type.
     */
    assigneeType = 'agent';
    /**
     * Label displayed above the assignment selector.
     */
    label = 'Assign to folio';
    /**
     * Emits when the service assignee changes.
     */
    assignmentChange;
    render() {
        return (h(Host, { key: 'cfe037d914ed7b6ad4d80edbf37ce1e189216005' }, h("wa-radio-group", { key: '4904c63688f4a2f8bf0210943851b32a5f1daa3d', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "small", label: this.label, orientation: "vertical" }, h("wa-radio", { key: '92a780bf42a5b620d60d4f486394b07ce295e178', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: 'a7e6b96dc241210f158df0cab42ac221648cad49', value: "guest", appearance: "button" }, "Guest"))));
    }
    static get style() { return IrServiceAssigneeSelectStyle0; }
}, [2, "ir-service-assignee-select", {
        "agent": [16],
        "assigneeType": [1, "assignee-type"],
        "label": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-service-assignee-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-service-assignee-select":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrServiceAssigneeSelect);
            }
            break;
    } });
}

export { IrServiceAssigneeSelect as I, defineCustomElement as d };

//# sourceMappingURL=ir-service-assignee-select2.js.map