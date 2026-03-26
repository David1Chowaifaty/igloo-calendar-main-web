import { Host, h } from "@stencil/core";
export class IrHkStaffTask {
    task;
    future = false;
    taskClick;
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
        return (h(Host, { key: '5a364e151d7e275178d70aa4879d65a66b7c1877', class: { 'staff-task--future': this.future } }, h("button", { key: 'd6dd49e10023e5fdd3a2e73076abe20de3179553', onClick: () => this.taskClick.emit(this.task), class: "staff-task__button", disabled: this.future }, h("wa-card", { key: '51c1ce40f1e8a2d980f21e0f7abcd5a2dabba678', class: "staff-task__card" }, h("div", { key: 'b312664ab6505dff3cf7e20579fcdc1095c79539', class: "unit-label" }, h("span", { key: '175e0316fc0e21e3edcb31a6d3c94bde5e575433', class: `unit-label__name ${this.unitNameSizeClass(this.task.unit.name)}` }, this.task.unit.name)), h("div", { key: '56e7d9d671ae21398183bea8c81d437f6e600fcc', class: "task-content" }, !this.future && (h("div", { key: 'f9e2993ea1c4af80c5af63a713b56b344513c49f', class: "task-status" }, h("span", { key: '7ff4b2303d4f9b5f2fe5f61357de63ebe0f07f7f', class: "task-status__label" }, this.task.status.description), h("span", { key: '109804873b6e61083a1da0822817e97c484c65c3', class: "task-status__hint" }, this.task.hint))), h("div", { key: '0d15172fb35b370088b02c8d149f9d810c93db27', class: "task-badges" }, h("wa-badge", { key: '72f365dc57f35d82361fecb66fc4b86b39a01ba6', variant: "danger", appearance: "filled" }, "\u03BA\u03B1\u03B8\u03B1\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1"), h("wa-badge", { key: '4909947c5c61d8125c46a21e2c3067076aff2e2e', variant: "success", appearance: "filled" }, "\u03BB\u03B9\u03BD\u03AC"), h("wa-badge", { key: '3ba8c7fabb3dbff855f2f55f6dd2d27e656a3390', variant: "brand", appearance: "filled" }, "\u03C0\u03B5\u03C4\u03C3\u03AD\u03C4\u03B5\u03C2")), !this.future && this.guests.length > 0 && (h("div", { key: 'aaf7f6516802e194eaef7d6dcc7be4351a072454', class: "task-guests", style: { paddingLeft: '1px' } }, this.guests.map(g => (h("div", { key: g.label, class: "task-guest" }, h("span", { class: "task-guest__count" }, g.count), g.label === 'adults' ? (h("wa-icon", { name: "person", class: "task-guest__label" })) : g.label === 'children' ? (h("wa-icon", { name: "child", class: "task-guest__label" })) : (h("wa-icon", { name: "baby-carriage", class: "task-guest__label" })))))))), !this.future && (h("div", { key: 'e40fa2f0e8d234487fb100796a4440734988e4a0', class: "task-action" }, h("wa-icon", { key: '4f23eb1ff6f94d9cbb52ae32daccfc1fc147fa52', name: "broom" })))))));
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
