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
        return (h(Host, { key: '0fa3ec69fbb28e64bf9dc3c52ec19d77e77b76ae' }, h("wa-radio-group", { key: '1539c35b7bb5646e6dc1831b2806fb785fe75506', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "small", label: this.label, orientation: "vertical" }, h("wa-radio", { key: 'de689fc3345609db158f40bb8c9a2a3870251568', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: '4b63e77038adbedacd9395aab1613d1859aaaaa1', value: "guest", appearance: "button" }, "Guest"))));
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