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
        return (h("label", { key: 'c07840fac7f45ea8669ec33871e2fa8e2d37649c', class: `check-container ${this.labelPosition}` }, this.labelPosition === 'before' && h("span", null, this.label), h("input", { key: '4f83a4655152d64e14e25fbdf494eb58b3e6d9ff', type: "checkbox", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, onInput: this.handleInputChange }), h("span", { key: '0773ec115701df761c6513a686d29ed6c83eac16', class: "checkmark" }), this.labelPosition === 'after' && h("span", null, this.label)));
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
