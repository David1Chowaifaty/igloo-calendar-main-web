import { h } from "@stencil/core";
export class IrSocialButton {
    constructor() {
        this.label = undefined;
    }
    render() {
        return (h("button", { key: '156b9619c7bb6ec603e464591c92d7b68a1fd9bc', class: "social-button", type: "button", onClick: e => this.socialButtonClick.emit(e) }, h("div", { key: 'b2094a875e73309e35c54ea935fa8ab9d0190e48', class: "icon" }, h("slot", { key: '390da1733b68cde2322789986c24852d167022ff', name: "icon" })), h("span", { key: '3e3baa77adff4a9ac1dc4c2f823ef05fa7b4a817' }, this.label)));
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
