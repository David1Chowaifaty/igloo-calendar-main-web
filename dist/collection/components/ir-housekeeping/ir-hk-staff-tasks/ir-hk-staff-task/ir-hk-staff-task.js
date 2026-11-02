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
        return (h(Host, { key: '3470205aa15330cc25e1aeafbcbf9e01b5a5bf7b', class: { 'staff-task--future': this.future } }, h("button", { key: 'f1418bf6b01e9576de499efe4bdb641bbba5be9d', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: 'ca71e8db391e93ce023224084c40d44bd99ff3f8', class: "staff-task__card" }, h("div", { key: '1f36d954d9331f970c5760560df3839c373be244', class: "unit-label" }, h("span", { key: '4b7a664fe5a8f3c4ae4c963f02c4a1e72fd7c6d9', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '583047d937b502adff11950fc9cfbc40ea8cdc13', class: "task-content" }, !this.future && (h("div", { key: '5aff9ec9f7dcb2640039e3a01e59c48aa641228e', class: "task-status" }, h("span", { key: '8f2c2488c8cd19be2ccc6943cd8aa38fbd0db454', class: "task-status__label" }, this.task.status.description), h("span", { key: '22b90445ac9ce265519f74b06d8a81c92934ead8', class: "task-status__hint" }, this.task.hint))), h("div", { key: '033158fd1d94ed71529ce6eab0a37bdf30a41070', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: '35b61811809eed005633f1b32c885d0b462286f5', class: "task-guests", style: { paddingInlineStart: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, formatCount(g.count)), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: 'a59e6e3e241a831c3b0e45009a5d9ccfe24c9110', class: "task-action" }, h("wa-icon", { key: 'f79a46bd0e6f4d324eaf7109e8d73f92c920ff2b', name: "broom" })))))));
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
