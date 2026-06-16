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
        return (h(Host, { key: '0b5856601f3a56492d83d788e8a4610c6c8469af', class: { 'staff-task--future': this.future } }, h("button", { key: '51f5738a475796068adb42bd6704893f92679169', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: 'b4e7e0bc3966be93cb9278e2caf1d45ad9a595eb', class: "staff-task__card" }, h("div", { key: 'a54b17d423f6f439f22d2ad684801b7164310b4e', class: "unit-label" }, h("span", { key: '63901ed472c94c16f15dfc49706f5fb2021ce7a8', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: 'f99b7a12261cf46e2c71e623b24c6476a81dee0b', class: "task-content" }, !this.future && (h("div", { key: '9010a9193aa8a7941984324061bde78afc81044b', class: "task-status" }, h("span", { key: 'ad6b0ff35ed011963153300e4b718e0523c4b77c', class: "task-status__label" }, this.task.status.description), h("span", { key: 'deea196fac56d6edbe4f058a779af2e6c0770c19', class: "task-status__hint" }, this.task.hint))), h("div", { key: '6bcd4bdc0dd9c1fdd345ef192db00c12143eb904', class: "task-badges" }, [this.task, ...(this.task.extra_task ?? [])].map(t => (h("wa-badge", { key: t.task_type.code, variant: this.badgeVariant(t.task_type.code), appearance: "filled" }, t.task_type.description)))), !this.future && this.guests.length > 0 && (h("div", { key: 'ed94630c90fa4d639d2680775a82824a29fa0e26', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: '9d1047eb8342092cd74d2303b42979a2cfc34d30', class: "task-action" }, h("wa-icon", { key: 'ccfe1fcc9896c53e037ee22c1ddbeac83ceef90f', name: "broom" })))))));
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
