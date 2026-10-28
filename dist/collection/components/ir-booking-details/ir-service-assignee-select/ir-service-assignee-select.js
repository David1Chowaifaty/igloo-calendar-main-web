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
        return (h(Host, { key: '042aad78ad86553c27837b4e4c49741388210db8' }, h("wa-radio-group", { key: '205c7fdf75a89362fae6a91cee0b555892e5d841', onchange: e => this.assignmentChange.emit(e.target.value), defaultValue: this.assigneeType, value: this.assigneeType, size: "s", label: this.label || t('Lcz_AssignToFolio', { fallback: 'Assign to folio' }), orientation: "vertical" }, h("wa-radio", { key: 'b3ccd2803ea59e6f60a0476b125a251ea403e857', value: "agent", appearance: "button" }, t('Lcz_Agent', { fallback: 'Agent' }), ": ", this.agent?.name), h("wa-radio", { key: 'b9b3a3c1720bb8e9d1d73eddbfc3bb4d32e62204', value: "guest", appearance: "button" }, t('Lcz_Guest', { fallback: 'Guest' })))));
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
