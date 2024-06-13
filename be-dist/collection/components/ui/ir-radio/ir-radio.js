import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrRadio {
    constructor() {
        this.checked = false;
        this.radioId = v4();
    }
    render() {
        return (h("button", { key: 'edc612e1de6a13a546881fbe6c7515ed76f45382', role: "radio", class: "radio-button", onClick: () => {
                this.checkChange.emit(!this.checked);
            }, id: this.radioId, "data-state": this.checked ? 'checked' : 'unchecked', "aria-checked": this.checked ? 'true' : 'false' }, h("div", { key: 'a9a56ccdb246a66f54fbdf1843caca383e758bbf', class: "thumb", "data-state": this.checked ? 'checked' : 'unchecked' }), h("input", { key: '64c3189bd77da5bf326f79f329b1a8b9daca0674', type: "radio", "aria-hidden": "true", tabindex: "-1", checked: this.checked, class: 'radio-input' })));
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
