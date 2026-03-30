import { Host, h } from "@stencil/core";
export class IrServiceAssigneeSelect {
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
        return (h(Host, { key: 'f735f8f7afdd7172e7e9c950e47d6653a51e4d5c' }, h("wa-radio-group", { key: '68a3f2435bb1ae6478b555550970d54cae9cba5e', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "small", label: this.label, orientation: "vertical" }, h("wa-radio", { key: 'd40e343141467f6e67db46c0795d50b6b3a8c767', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: '0f11f59ce853ee08a0284dd47e496c4a47bf2f2a', value: "guest", appearance: "button" }, "Guest"))));
    }
    static get is() { return "ir-service-assignee-select"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-service-assignee-select.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-service-assignee-select.css"]
        };
    }
    static get properties() {
        return {
            "agent": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ id: number; name: string; code: string } | null",
                    "resolved": "{ id: number; name: string; code: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The agent to assign the service to."
                },
                "getter": false,
                "setter": false
            },
            "assigneeType": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'agent' | 'guest'",
                    "resolved": "\"agent\" | \"guest\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Currently selected service assignee type."
                },
                "getter": false,
                "setter": false,
                "attribute": "assignee-type",
                "reflect": false,
                "defaultValue": "'agent'"
            },
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label displayed above the assignment selector."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false,
                "defaultValue": "'Assign to folio'"
            }
        };
    }
    static get events() {
        return [{
                "method": "assignmentChange",
                "name": "assignmentChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits when the service assignee changes."
                },
                "complexType": {
                    "original": "'agent' | 'guest'",
                    "resolved": "\"agent\" | \"guest\"",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-service-assignee-select.js.map
