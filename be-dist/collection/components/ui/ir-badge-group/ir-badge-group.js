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
        return (h("div", { key: 'cd53f08866ca77abae2455f7684cda22058bf275', class: `badge-group ${this.variant} position-${this.messagePosition} ${this.clickable ? 'clickable' : ''}`, onClick: e => {
                if (this.clickable) {
                    this.badgeClick.emit(e);
                }
            } }, h("p", { key: 'a54feb2f17577672aed5eae2f42f29f9abaf72f0', class: "badge" }, this.badge), h("p", { key: '4ab3316a776f390e8d19884ca16fab67c2173c31', class: "message" }, this.message), this.clickable && (h("button", { onClick: e => {
                if (this.clickable) {
                    this.badgeClick.emit(e);
                }
            } }, h("ir-icons", { name: "arrow_right" })))));
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
