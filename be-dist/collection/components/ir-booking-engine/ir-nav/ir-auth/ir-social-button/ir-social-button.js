import { h } from "@stencil/core";
export class IrSocialButton {
    constructor() {
        this.label = undefined;
    }
    render() {
        return (h("button", { key: '6d28f39b049e8cb6536a3898f33acdc6656c15d4', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: '5d6c00c5d2af7917fbebf8772ac22f0ab4a57745', class: "icon" }, h("slot", { key: 'ba315aa361c262efc31ad4d53146557a32942293', name: "icon" })), h("span", { key: '4291e253a8cf258dd9781719b5bf8208c55d9c3c' }, this.label)));
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
