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
        return (h(Host, { key: 'dad8e6ef0221a653b491da8c87f536a9068d5f68' }, h("wa-radio-group", { key: 'b2b66824b51698e3758f0e9716b168e11cca9b81', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "small", label: this.label, orientation: "vertical" }, h("wa-radio", { key: 'd397f03a38f5d1a2fab349e507c944e19112eb61', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: 'c30260aa30aadaf927b13eecde0df9ed80602287', value: "guest", appearance: "button" }, "Guest"))));
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