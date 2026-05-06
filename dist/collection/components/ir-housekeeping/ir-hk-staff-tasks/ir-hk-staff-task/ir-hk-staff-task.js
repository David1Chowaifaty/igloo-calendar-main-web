import { Host, h } from "@stencil/core";
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
        return (h(Host, { key: '01a9e9e9f34edb3f750f8b2a0612635968eea5a8', class: { 'staff-task--future': this.future } }, h("button", { key: 'ac3d9b8ba150d2b032787e9e4f8d543f455556a6', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '0b407e838707e4ae3a1163ed4bd5997fa8089d88', class: "staff-task__card" }, h("div", { key: '52630c64cad6f458a7544dd258109ca480f3e31e', class: "unit-label" }, h("span", { key: 'c822d0546234cecbf188d6b6fd1fd60087211902', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '6ce8ebd452aafb14b732d43621b6a21294c5455b', class: "task-content" }, !this.future && (h("div", { key: 'e3b37fe3f711b09213bd8be5747515770dcecbcf', class: "task-status" }, h("span", { key: 'b86c2fd1f662a209fe880bbcc38ddb1f18428446', class: "task-status__label" }, this.task.status.description), h("span", { key: '22ff33067fc0fd467f1af47e3c09df5865d88ae6', class: "task-status__hint" }, this.task.hint))), h("div", { key: '8e749f9498c7e3ba13616467f8af0524db004b3a', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: 'c45bd255ee507ac9a53d915232d2bec498123687', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: 'a2344f8cf361f64a0522e566f90d368f10d315bc', class: "task-action" }, h("wa-icon", { key: 'dd96db8a4eb602f8e56ceb18bb7b6d884ead4b76', name: "broom" })))))));
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
                            "id": "src/models/housekeeping.ts::Task"
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
                "attribute": "future",
                "reflect": true,
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
                            "id": "src/models/housekeeping.ts::Task"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-hk-staff-task.js.map
