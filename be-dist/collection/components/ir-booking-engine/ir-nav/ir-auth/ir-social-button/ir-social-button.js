import { h } from "@stencil/core";
export class IrSocialButton {
    render() {
        return (h("button", { key: '0751cc090c2b3a0623efcb0d26378e284f12a802', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: '38bfbd4d801d9a4e35b1d70ff43830e19aa99cac', class: "icon" }, h("slot", { key: 'f5854c3c52076448c9fd22ac18db46df54eb3ae9', name: "icon" })), h("span", { key: 'cd6c08ace5d3119a1ee6f28f19fbdb5bc7685055' }, this.label)));
    }
    static get is() { return "ir-social-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-social-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-social-button.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                "attribute": "label",
                "reflect": false
            }
        };
    }
    static get events() {
        return [{
                "method": "socialButtonClick",
                "name": "socialButtonClick",
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
//# sourceMappingURL=ir-social-button.js.map
