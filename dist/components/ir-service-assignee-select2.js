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
        return (h(Host, { key: 'aef677bb83dec7f4caaddbe21ff64da3cbaaea10' }, h("wa-radio-group", { key: '8b37400b0a137be0b202a299b622e278cb404be3', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "small", label: this.label, orientation: "vertical" }, h("wa-radio", { key: 'c9bb0d48214fdc350911717ea57f6e8f3f3c6305', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: '2076a38ad82ef7a3df4ef13bc28b31ac42bf92ea', value: "guest", appearance: "button" }, "Guest"))));
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