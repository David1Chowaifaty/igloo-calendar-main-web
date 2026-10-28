import { Host, h } from "@stencil/core";
import { formatCount } from "../../../../utils/number";
export class IrHkStaffTask {
    task;
    future = false;
    taskClick;
    badgeVariant(code) {
        if (code === 'CLN')
            return 'danger';
        if (code === 'T1')
            return 'success';
        return 'brand';
    }
    unitNameSizeClass(name) {
        if (name.length <= 4)
            return 'unit-label__name--lg';
        if (name.length <= 10)
            return 'unit-label__name--md';
        return 'unit-label__name--sm';
    }
    get guests() {
        return [
            { label: 'adults', count: this.task.adult },
            { label: 'children', count: this.task.child },
            { label: 'infant', count: this.task.infant },
        ].filter(g => g.count > 0);
    }
    render() {
        return (h(Host, { key: '795727b28bdb5ab78bccd6b41671f1eb4c2a77cb', class: { 'staff-task--future': this.future } }, h("button", { key: 'eb91510193035c8b6ac507d0968d48d8ad73ea85', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '086901ee5326ae032f667f2bf6cc744b2918872b', class: "staff-task__card" }, h("div", { key: 'a00c58b2dc7f37a6b77cf7e656a11dcc164ed631', class: "unit-label" }, h("span", { key: '219327300f3b9926848f4592d06d79f321a6189f', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: 'ae6fb89b0a0982ce6823f5d41cb1daaa22b2a550', class: "task-content" }, !this.future && (h("div", { key: 'b879c9aec63f0b7dd1a38fde514b6bf0b89e21fe', class: "task-status" }, h("span", { key: 'b07355d007ab3f0eefa273b892119532a298902a', class: "task-status__label" }, this.task.status.description), h("span", { key: '2af34fd2c899945e8795a350c2ce4ced92be01e1', class: "task-status__hint" }, this.task.hint))), h("div", { key: 'ac89090fe93f9b5139609c27ff1565eb19c62e12', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: '46ac794f35facaff44c6c2b1b3a26fc58bb8da1a', class: "task-guests", style: { paddingInlineStart: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, formatCount(g.count)), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '236091b4b2e7abfccc7e932452d34dcb97f190bb', class: "task-action" }, h("wa-icon", { key: 'bcfcb7e33a78a3e8e1850e2ac136d612765d0a78', name: "broom" })))))));
    }
    static get is() { return "ir-hk-staff-task"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-staff-task.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-staff-task.css"]
        };
    }
    static get properties() {
        return {
            "task": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "future": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "future",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "taskClick",
                "name": "taskClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Task",
                    "resolved": "Task",
                    "references": {
                        "Task": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::Task",
                            "referenceLocation": "Task"
                        }
                    }
                }
            }];
    }
}
