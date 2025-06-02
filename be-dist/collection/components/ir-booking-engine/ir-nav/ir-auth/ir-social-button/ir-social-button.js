import { h } from "@stencil/core";
export class IrSocialButton {
    render() {
        return (h("button", { key: 'f315ca5471a77ae42a4f07407fcd8eb874962819', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: '999f6c41c8976028ee17c7e4d6244b9e6f30e23e', class: "icon" }, h("slot", { key: 'ee5e7bd58c4a04b95f7d4d923fbdf07d03bbf46c', name: "icon" })), h("span", { key: '29422dd7418f6ba51b7535e467df21d786abc3a1' }, this.label)));
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
