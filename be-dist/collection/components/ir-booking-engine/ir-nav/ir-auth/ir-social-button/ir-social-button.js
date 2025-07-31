import { h } from "@stencil/core";
export class IrSocialButton {
    render() {
        return (h("button", { key: '85630f2f605e108922c4ec3d015463ff5ecb9d56', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: 'b645d841d48daf8e8dd8b7200986a6cc66c1ef5e', class: "icon" }, h("slot", { key: '8016665a0d887ee20866016c786ea0eb4c327542', name: "icon" })), h("span", { key: 'f8c81c1e12f7d3bdf459d51221914b3ef56bfd2f' }, this.label)));
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
