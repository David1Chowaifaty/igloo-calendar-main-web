import { h } from "@stencil/core";
export class IrBadgeGroup {
    constructor() {
        this.badge = '';
        this.message = '';
        this.variant = 'primary';
        this.messagePosition = 'default';
    }
    render() {
        return (h("div", { key: '4e8d1dd7fd91a2d662932304f67a0a534ad45124', class: `badge-group ${this.variant} position-${this.messagePosition} ${this.clickable ? 'clickable' : ''}`, onClick: e => {
                if (this.clickable) {
                    this.badgeClick.emit(e);
                }
            } }, h("p", { key: '97f9f18c56c74bfdaefc5cc979e760dd5251b485', class: "badge" }, this.badge), h("p", { key: '4714e2f64d14c011115f217e7fed1edc19869e21', class: "message" }, this.message), this.clickable && (h("button", { key: 'e16f279c5039ba1065aa96aa296d28bed3cdc48b', onClick: e => {
                if (this.clickable) {
                    this.badgeClick.emit(e);
                }
            } }, h("ir-icons", { key: '112efc68da05ca443acfeaa8476f48a9f2aa1ddb', name: "arrow_right" })))));
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
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
