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
        return (h(Host, { key: '11b18c0c3dc68de7a448f3fd86db10420740b523', class: { 'staff-task--future': this.future } }, h("button", { key: '1cd0ac282c47235f43914e3decbe503c4ade8f3a', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '2ae5f9cbb6bf8811dc1b5fe5ca902ccfc8e9eeca', class: "staff-task__card" }, h("div", { key: '1a26d706a63ae2a9362dce60b726f10f252f4b10', class: "unit-label" }, h("span", { key: 'cc99878bf926e55676550e55938bd441e02bed2b', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '41d056e2d2da3ffe277573234685c57ac710b777', class: "task-content" }, !this.future && (h("div", { key: '93542d8fdb89159d34474e796e5396ecd246724e', class: "task-status" }, h("span", { key: 'e457ddfc63f431a3a68803eed3dd307d10ca6638', class: "task-status__label" }, this.task.status.description), h("span", { key: '78d9996c693dd727eb72712b635eea507dbe9ff8', class: "task-status__hint" }, this.task.hint))), h("div", { key: '39283d4604a5b0d5d07f744e34b96cc25862336a', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: '319ef12d5f5e8a6bc7ce5c79d6f6db0038c6d319', class: "task-guests", style: { paddingInlineStart: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, formatCount(g.count)), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '616bfe6a700132547fd0a2ddcd5759683a2aab61', class: "task-action" }, h("wa-icon", { key: '5c6a297e7f1354e79131fa07182a0daaad9b2b81', name: "broom" })))))));
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
