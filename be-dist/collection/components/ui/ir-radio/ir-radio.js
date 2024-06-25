import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrRadio {
    constructor() {
        this.checked = false;
        this.radioId = v4();
    }
    render() {
        return (h("button", { key: 'ac6e5347f4d2b056f84568c8505c94a67538c6d6', role: "radio", class: "radio-button", onClick: () => {
                this.checkChange.emit(!this.checked);
            }, id: this.radioId, "data-state": this.checked ? 'checked' : 'unchecked', "aria-checked": this.checked ? 'true' : 'false' }, h("div", { key: '3c2dd513a3ec3a0a1bd56acd10cb12cb9f9dfa46', class: "thumb", "data-state": this.checked ? 'checked' : 'unchecked' }), h("input", { key: 'fdac1c88ae2127e9f592723cc5bb830cee791bdf', type: "radio", "aria-hidden": "true", tabindex: "-1", checked: this.checked, class: 'radio-input' })));
    }
    static get is() { return "ir-radio"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-radio.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-radio.css"]
        };
    }
    static get properties() {
        return {
            "checked": {
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
                "attribute": "checked",
                "reflect": true,
                "defaultValue": "false"
            },
            "radioId": {
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
                "attribute": "radio-id",
                "reflect": false,
                "defaultValue": "v4()"
            }
        };
    }
    static get events() {
        return [{
                "method": "checkChange",
                "name": "checkChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-radio.js.map
