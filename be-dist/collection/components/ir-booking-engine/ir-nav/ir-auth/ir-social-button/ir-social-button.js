import { h } from "@stencil/core";
export class IrSocialButton {
    constructor() {
        this.label = undefined;
    }
    render() {
        return (h("button", { key: '6a94bf6341b3460e81573dee3443500e9344a4c0', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: 'f6ef6f04169244b8292eda14b38ee0d28fc9ddeb', class: "icon" }, h("slot", { key: '01b033526573a0cb9cb2ccf45ecf4437c9bbd5fb', name: "icon" })), h("span", { key: 'db540a427d990cd978848bc0c3817c274669f026' }, this.label)));
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
