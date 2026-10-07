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
        return (h(Host, { key: 'e898a39cdef51c2d934c466d1afe79853144e029' }, h("wa-radio-group", { key: 'f44ca0a624c403460db44819080f07888e4d7b8e', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "s", label: this.label || t('Lcz_AssignToFolio', { fallback: 'Assign to folio' }), orientation: "vertical" }, h("wa-radio", { key: 'df5cfd82a5d7bcaafd6277bcfe08755ff611a100', value: "agent", appearance: "button" }, t('Lcz_Agent', { fallback: 'Agent' }), ": ", this.agent?.name), h("wa-radio", { key: 'd754b1aa67d5563bc1277739aa505f02b5f75bfb', value: "guest", appearance: "button" }, t('Lcz_Guest', { fallback: 'Guest' })))));
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
