import { h } from "@stencil/core";
export class IrBadgeGroup {
    constructor() {
        this.badge = '';
        this.message = '';
        this.variant = 'primary';
        this.clickable = undefined;
        this.messagePosition = 'default';
    }
    render() {
        return (h("div", { key: 'cd57e9fbc6ba71282d41ed03638ca0224f9442df', class: `badge-group ${this.variant} position-${this.messagePosition} ${this.clickable ? 'clickable' : ''}`, onClick: e => {
                if (this.clickable) {
                    this.badgeClick.emit(e);
                }
            } }, h("p", { key: 'a9c5a380812966ca1615a15fd8f17ec344d89087', class: "badge" }, this.badge), h("p", { key: '9eb04a08e1fde63b5ed955f6ca4743e2b95341f6', class: "message" }, this.message), this.clickable && (h("button", { key: '8366d78c61acab552f4bd3a9b524ecb1d188f605', onClick: e => {
                if (this.clickable) {
                    this.badgeClick.emit(e);
                }
            } }, h("ir-icons", { key: '8633dc4079c8d45a1bf9b1e2336d62f34a0f3970', name: "arrow_right" })))));
    }
    static get is() { return "ir-badge-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-badge-group.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-badge-group.css"]
        };
    }
    static get properties() {
        return {
            "badge": {
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
                    "text": ""
                },
                "attribute": "badge",
                "reflect": false,
                "defaultValue": "''"
            },
            "message": {
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
                    "text": ""
                },
                "attribute": "message",
                "reflect": false,
                "defaultValue": "''"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'error' | 'succes' | 'primary' | 'secondary'",
                    "resolved": "\"error\" | \"primary\" | \"secondary\" | \"succes\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'primary'"
            },
            "clickable": {
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
                "attribute": "clickable",
                "reflect": false
            },
            "messagePosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'center'",
                    "resolved": "\"center\" | \"default\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "message-position",
                "reflect": false,
                "defaultValue": "'default'"
            }
        };
    }
    static get events() {
        return [{
                "method": "badgeClick",
                "name": "badgeClick",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "MouseEvent",
                    "resolved": "MouseEvent",
                    "references": {
                        "MouseEvent": {
                            "location": "global",
                            "id": "global::MouseEvent"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-badge-group.js.map
