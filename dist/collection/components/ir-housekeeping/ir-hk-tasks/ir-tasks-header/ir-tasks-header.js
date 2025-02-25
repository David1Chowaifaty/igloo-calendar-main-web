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
        return (h("div", { key: '0fb69ae27aef47926a49835d0f49f0439ab35cbe', class: "d-flex align-items-center justify-content-between" }, h("h3", { key: '785df026ec5dbf5c31984dc8afa2da67d62314c9' }, "Housekeeping Tasks"), h("div", { key: 'c9c46273041cc8a49c4d9192da2dd9701a19a58c', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: 'a5118066c4cb623bf48d2ea864b44a6b3b8e8192', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }), h("ir-button", { key: 'ba35aa15ee0b0433e460d54fb3f8db7e1b6fc33f', size: "sm", btn_color: "outline", text: "Archive", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '8051f04da3df7ac5c66daa14d31791a03e41b4c2', onClickHandler: e => {
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
