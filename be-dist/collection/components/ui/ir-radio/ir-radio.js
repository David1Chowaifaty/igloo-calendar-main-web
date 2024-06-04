import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrRadio {
    constructor() {
        this.checked = false;
        this.radioId = v4();
    }
    render() {
        return (h("button", { key: 'bef6a024305d5669eb1997f5860d7158619e34f5', role: "radio", class: "radio-button", onClick: () => {
                this.checkChange.emit(!this.checked);
            }, id: this.radioId, "data-state": this.checked ? 'checked' : 'unchecked', "aria-checked": this.checked ? 'true' : 'false' }, h("div", { key: '4adc830cd870009066a8bcc1e07328de81fe8dd7', class: "thumb", "data-state": this.checked ? 'checked' : 'unchecked' }), h("input", { key: '926ce9f9081b67e26d4f95b03d12d8b70bb60a2c', type: "radio", "aria-hidden": "true", tabindex: "-1", checked: this.checked, class: 'radio-input' })));
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
