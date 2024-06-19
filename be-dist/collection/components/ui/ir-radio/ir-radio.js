import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrRadio {
    constructor() {
        this.checked = false;
        this.radioId = v4();
    }
    render() {
        return (h("button", { key: 'cc5e6276e02ab8e801db2c3b578c6320578a6e54', role: "radio", class: "radio-button", onClick: () => {
                this.checkChange.emit(!this.checked);
            }, id: this.radioId, "data-state": this.checked ? 'checked' : 'unchecked', "aria-checked": this.checked ? 'true' : 'false' }, h("div", { key: 'fda6d01265621a72b6e7c3a592e533896bb8365e', class: "thumb", "data-state": this.checked ? 'checked' : 'unchecked' }), h("input", { key: 'b5f3a0b6b966dbc3c28e2312d53264aef018951c', type: "radio", "aria-hidden": "true", tabindex: "-1", checked: this.checked, class: 'radio-input' })));
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
