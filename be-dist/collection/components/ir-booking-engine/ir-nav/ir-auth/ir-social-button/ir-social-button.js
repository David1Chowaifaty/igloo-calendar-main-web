import { h } from "@stencil/core";
export class IrSocialButton {
    constructor() {
        this.label = undefined;
    }
    render() {
        return (h("button", { key: '795dd1bccbdd76370a813e485b4a26b49e67a4d1', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: 'd9028db9cbbf9ae5505d231f45b26ae1ef3d9068', class: "icon" }, h("slot", { key: '91e3b71603280c3181098c9ad24b7a0cc024e647', name: "icon" })), h("span", { key: 'af9884b2268c234f0ec6251889358b223379b2b2' }, this.label)));
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
