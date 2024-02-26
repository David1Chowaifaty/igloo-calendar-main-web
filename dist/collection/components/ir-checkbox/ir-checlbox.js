import { h } from "@stencil/core";
export class IrCheckBox {
    constructor() {
        this.handleInputChange = () => {
            if (!this.disabled) {
                this.checked = !this.checked;
                this.checkboxChange.emit({ name: this.name, value: this.value, checked: this.checked });
            }
        };
        this.name = undefined;
        this.checked = false;
        this.label = '<label>';
        this.disabled = false;
        this.value = undefined;
        this.labelPosition = 'after';
    }
    render() {
        return (h("label", { key: '1a7d59a093af413f04166013e28e7ed0d8e1ac89', class: `check-container ${this.labelPosition}` }, this.labelPosition === 'before' && h("span", null, this.label), h("input", { key: '5b00c061face00451276f64c571f81e08ebc6b65', type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onInput: this.handleInputChange }), h("span", { key: 'a479b6d6c02634b22bc5e69f8be48ee5bf822e11', class: "checkmark" }), this.labelPosition === 'after' && h("span", null, this.label)));
    }
    static get is() { return "ir-checkbox"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-checkbox.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-checkbox.css"]
        };
    }
    static get properties() {
        return {
            "name": {
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
                "attribute": "name",
                "reflect": false
            },
            "checked": {
                "type": "boolean",
                "mutable": true,
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
                "reflect": false,
                "defaultValue": "'<label>'"
            },
            "disabled": {
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
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
            },
            "value": {
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
                "attribute": "value",
                "reflect": false
            },
            "labelPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'before' | 'after'",
                    "resolved": "\"after\" | \"before\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "label-position",
                "reflect": false,
                "defaultValue": "'after'"
            }
        };
    }
    static get events() {
        return [{
                "method": "checkboxChange",
                "name": "checkboxChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ name: string; value: string; checked: boolean }",
                    "resolved": "{ name: string; value: string; checked: boolean; }",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-checlbox.js.map
