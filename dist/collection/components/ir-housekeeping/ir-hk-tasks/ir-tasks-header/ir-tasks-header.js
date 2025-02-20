import { h } from "@stencil/core";
export class IrTasksHeader {
    constructor() {
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '7436da2916d4143ce980d37e902d863d730c64d2', class: "d-flex align-items-center justify-content-between" }, h("h4", { key: 'da2cc88f796d97aa49a8657bf7b50605a27b1202' }, "Housekeeping Tasks"), h("div", { key: '70cd45c5b82d2b92a3a6a0f4f6d2bb874e708627', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: 'ef279318d82b66910c2926f26477876183820d9a', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }), h("ir-button", { key: 'b5ba4d73ad75674c1fc1ea74fd697e846134938a', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
    static get is() { return "ir-tasks-header"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-tasks-header.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-tasks-header.css"]
        };
    }
    static get properties() {
        return {
            "isCleanedEnabled": {
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
                "attribute": "is-cleaned-enabled",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "headerButtonPress",
                "name": "headerButtonPress",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ name: 'cleaned' | 'export' | 'archive' }",
                    "resolved": "{ name: \"cleaned\" | \"export\" | \"archive\"; }",
                    "references": {}
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "animateCleanedButton",
                "method": "handleCleanedButtonAnimation",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-tasks-header.js.map
