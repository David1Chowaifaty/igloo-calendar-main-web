import { h } from "@stencil/core";
export class IrSocialButton {
    render() {
        return (h("button", { key: '2648584b67f90700630db8de2d26ae8b4cdb7cae', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: '9fa8ac95e674705e1931412b065068773704a507', class: "icon" }, h("slot", { key: '3748830a72b5df2e676e4be61551abb141f38fa9', name: "icon" })), h("span", { key: 'f6aa4d10ac479bd1110a63b8433b90719b99252f' }, this.label)));
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
