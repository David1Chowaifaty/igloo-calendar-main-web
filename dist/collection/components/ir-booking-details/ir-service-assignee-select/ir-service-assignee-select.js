import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
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
    label;
    /**
     * Emits when the service assignee changes.
     */
    assignmentChange;
    render() {
        return (h(Host, { key: '74002032f5f6abe4f238770496fecda923fac402' }, h("wa-radio-group", { key: 'a4e2d784f28e20875bd2bca744b8714dec776dba', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "s", label: this.label || t('Lcz_AssignToFolio', { fallback: 'Assign to folio' }), orientation: "vertical" }, h("wa-radio", { key: 'f7c87baf9832a9c4300fef1712a866e2007428bd', value: "agent", appearance: "button" }, t('Lcz_Agent', { fallback: 'Agent' }), ": ", this.agent?.name), h("wa-radio", { key: '652ffbb117e1139445cc09ff9aa8810a80750058', value: "guest", appearance: "button" }, t('Lcz_Guest', { fallback: 'Guest' })))));
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
                "attribute": "label"
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
