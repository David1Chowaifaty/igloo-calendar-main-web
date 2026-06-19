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
        return (h(Host, { key: 'a9af5bee84f7c579db2a02a55e377eabdd68962e' }, h("wa-radio-group", { key: '3ea37e2de2893217fd40e077ec2834468854e9a3', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "s", label: this.label, orientation: "vertical" }, h("wa-radio", { key: 'f8460541b2f18a8e21159128924c83673384d970', value: "agent", appearance: "button" }, "Agent: ", this.agent?.name), h("wa-radio", { key: 'ef36ce5dbecb31bb84baa943a4a132dbc859340d', value: "guest", appearance: "button" }, "Guest"))));
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
                "reflect": false,
                "attribute": "assignee-type",
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
                "reflect": false,
                "attribute": "label",
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
