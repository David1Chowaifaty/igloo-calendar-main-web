import { h } from "@stencil/core";
export class IrSocialButton {
    constructor() {
        this.label = undefined;
    }
    render() {
        return (h("button", { key: 'fecf75304a228017c2e1d3b831b413847be0b965', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: '0ab1e02537c6f7e7bcdce1de034b5506046f10c8', class: "icon" }, h("slot", { key: '8a558dcb78c9beb6b4a9c001affee8a694ef1034', name: "icon" })), h("span", { key: '535c952cdbb28aafe18803561b6c875296e4376f' }, this.label)));
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
