import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrRadio {
    constructor() {
        this.checked = false;
        this.radioId = v4();
    }
    render() {
        return (h("button", { key: '02136759392126f6e5b720f402d92d0475049376', role: "radio", class: "radio-button", onClick: () => {
                this.checkChange.emit(!this.checked);
            }, id: this.radioId, "data-state": this.checked ? 'checked' : 'unchecked', "aria-checked": this.checked ? 'true' : 'false' }, h("div", { key: '68dc037fdfd3088fdb97e530e4891a6a9586fa37', class: "thumb", "data-state": this.checked ? 'checked' : 'unchecked' }), h("input", { key: 'c5f86e38e0c4f89cfbc509639f7728866db1c101', type: "radio", "aria-hidden": "true", tabindex: "-1", checked: this.checked, class: 'radio-input' })));
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
