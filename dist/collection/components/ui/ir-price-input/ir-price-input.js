import { h } from "@stencil/core";
import { v4 } from "uuid";
export class IrPriceInput {
    constructor() {
        /** The AutoValidate for the input, optional */
        this.autoValidate = true;
        /** Placeholder text for the input */
        this.placeholder = '';
        /** Initial value for the input */
        this.value = '';
        /** Whether the input is required */
        this.required = false;
        this.handleInputChange = (event) => {
            const target = event.target;
            this.value = target.value;
            // Emit the change event
            this.textChange.emit(this.value);
        };
        this.handleBlur = () => {
            this.validateInput(this.value);
            // Emit the blur event
            if (this.value) {
                this.value = parseFloat(this.value).toFixed(2);
            }
            this.inputBlur.emit(this.value);
        };
        this.handleFocus = () => {
            // Emit the focus event
            this.inputFocus.emit();
        };
    }
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4();
        }
    }
    hasSpecialClass(className) {
        return this.el.classList.contains(className);
    }
    validateInput(value) {
        if (!this.autoValidate) {
            return;
        }
        if (this.zod) {
            try {
                this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value); // Validate the value using the Zod schema
                this.error = false; // Clear the error if valid
            }
            catch (error) {
                console.log(error);
                this.error = true; // Set the error message
            }
        }
    }
    render() {
        var _a, _b;
        return (h("fieldset", { key: '79c77e527da5ecb8234eee68ae65e28e7c5d73b5', class: "input-group price-input-group m-0 p-0" }, this.label && (h("div", { key: '3ed3161a93a9de63e02616050f65d246bc8c52fc', class: "input-group-prepend" }, h("span", { key: 'f83bf305b81dd29eb8c7fc35bc28247209e73dc2', class: `input-group-text 
                ${this.labelStyle}
              ${this.hasSpecialClass('ir-bl-lbl-none') ? 'ir-bl-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-lbl-none') ? 'ir-br-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-none') ? 'ir-br-none' : ''} 
              ${this.hasSpecialClass('ir-bl-none') ? 'ir-bl-none' : ''} 
              ` }, h("label", { key: 'debb04e8cd7423bfa2407ce7fbb7245b1b1050e8', class: 'p-0 m-0 ', htmlFor: this.id }, this.label)))), h("div", { key: '998e085d8d75abfe1227bdcba06ac5c9a4e1345f', class: "position-relative has-icon-left rate-input-container" }, this.currency && (h("div", { key: '4afe5a43f490615e42c62e5aea32bd33e4b95e3a', class: `input-group-prepend` }, h("span", { key: '91b9cc2c2b1b6d09f02289015c6b202221f94656', class: `input-group-text ${this.disabled ? 'disabled' : ''} currency-label ${this.error ? 'error' : ''} ${this.label ? 'with-label' : ''}` }, this.currency))), h("input", { key: '90a82f8e006d52adcf65203dc81762272ac56937', disabled: this.disabled, id: this.id, class: `form-control input-sm rate-input 
              ${this.inputStyle}
              ${this.hasSpecialClass('ir-br-input-none') ? 'ir-br-input-none' : ''} 
              ${this.hasSpecialClass('ir-bl-input-none') ? 'ir-bl-input-none' : ''} 
              ${this.error ? 'error' : ''} py-0 m-0 ${this.currency ? 'ir-bl-none' : ''}`, onInput: this.handleInputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, type: "number", step: "0.01", "aria-label": (_a = this.el.ariaLabel) !== null && _a !== void 0 ? _a : 'price-input', "aria-describedby": (_b = this.el.ariaDescription) !== null && _b !== void 0 ? _b : 'price-input', value: this.value }))));
    }
    static get is() { return "ir-price-input"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-price-input.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-price-input.css"]
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The label for the input, optional"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "inputStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Extra classnames for the input, optional"
                },
                "getter": false,
                "setter": false,
                "attribute": "input-style",
                "reflect": false
            },
            "labelStyle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Extra classnames for the label, optional"
                },
                "getter": false,
                "setter": false,
                "attribute": "label-style",
                "reflect": false
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The disabled for the input, optional"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false
            },
            "currency": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The Currency for the input, optional"
                },
                "getter": false,
                "setter": false,
                "attribute": "currency",
                "reflect": false
            },
            "autoValidate": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "The AutoValidate for the input, optional"
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-validate",
                "reflect": false,
                "defaultValue": "true"
            },
            "wrapKey": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Indicates the key to wrap the value (e.g., 'price' or 'cost')"
                },
                "getter": false,
                "setter": false,
                "attribute": "wrap-key",
                "reflect": false
            },
            "zod": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ZodType<any, any>",
                    "resolved": "ZodType<any, any, any>",
                    "references": {
                        "ZodType": {
                            "location": "import",
                            "path": "zod",
                            "id": "node_modules::ZodType"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "A Zod schema for validating the input\r\nExample: z.coerce.number()"
                },
                "getter": false,
                "setter": false
            },
            "placeholder": {
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
                    "text": "Placeholder text for the input"
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "''"
            },
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Initial value for the input"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false,
                "defaultValue": "''"
            },
            "required": {
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
                    "text": "Whether the input is required"
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": false,
                "defaultValue": "false"
            },
            "minValue": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Minimum value for the price"
                },
                "getter": false,
                "setter": false,
                "attribute": "min-value",
                "reflect": false
            },
            "maxValue": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Maximum value for the price"
                },
                "getter": false,
                "setter": false,
                "attribute": "max-value",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "error": {}
        };
    }
    static get events() {
        return [{
                "method": "textChange",
                "name": "textChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the current value on change"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "inputBlur",
                "name": "inputBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the current value on blur"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "inputFocus",
                "name": "inputFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits the current value on focus"
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=ir-price-input.js.map
