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
        return (h(Host, { key: '4c013c878f802b743a4bc23726ee99c7908c35f3', class: { 'staff-task--future': this.future } }, h("button", { key: '0f72de01c49fa192f898769aa075e686a08e410c', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '059a090d405048444b081f50471d51d19275e40b', class: "staff-task__card" }, h("div", { key: 'e2256ff3751203ab3031ebb3992e09910ea47f30', class: "unit-label" }, h("span", { key: '37c260feefe20ee2cb5385c4d78280ae68022894', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '5ccc2dcc7e1b725511e099bba64503513472f8ef', class: "task-content" }, !this.future && (h("div", { key: 'fa1b63d76888654783738e0db96a3a030dd01931', class: "task-status" }, h("span", { key: '25822a183e84a90f9053d2a141ac9ed3a6488c7d', class: "task-status__label" }, this.task.status.description), h("span", { key: '9cb797f20ffc96cae3cdde89e12e6f449d53ba01', class: "task-status__hint" }, this.task.hint))), h("div", { key: '3107e46d1b401f08c5473b6424cee9bc5ee07bfc', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: '10a22eac3973bc39c3444dd510c5b4782bd7bbc2', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '7452d72a5a8b18cbe24451d045c679a468f7e767', class: "task-action" }, h("wa-icon", { key: 'c10710e9f280e6002c42d5fa68d66ca8c74da479', name: "broom" })))))));
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
