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
        return (h(Host, { key: 'a75b319c101e475d60fa97c820d3e253c72fbf83' }, h("wa-radio-group", { key: '1660cf6dbdbd2d6e651b471c696db891fcbdfc5b', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "small", label: this.label, orientation: "vertical" }, h("wa-radio", { key: 'ecce5e9831ca421c17d467bc03456ba63262f0a4', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: '1c1a1a94fbd9ef6337a0fd9bb81e8d7b4dc49dca', value: "guest", appearance: "button" }, "Guest"))));
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