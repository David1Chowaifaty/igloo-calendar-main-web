import { h } from "@stencil/core";
import { v4 } from "uuid";
import IMask from "imask";
export class IrPriceInput {
    el;
    /** The label for the input, optional */
    label;
    /** The readonly for the input, optional */
    readOnly;
    /** Extra classnames for the input, optional */
    inputStyle;
    /** Extra classnames for the label, optional */
    labelStyle;
    /** The disabled for the input, optional */
    disabled;
    /** The Currency for the input, optional */
    currency;
    /** The AutoValidate for the input, optional */
    autoValidate = true;
    /** Indicates the key to wrap the value (e.g., 'price' or 'cost') */
    wrapKey;
    /**
     * A Zod schema for validating the input
     * Example: z.coerce.number()
     */
    zod;
    /** Placeholder text for the input */
    placeholder = '';
    /** Initial value for the input */
    value = '';
    /** Whether the input is required */
    required = false;
    /** Minimum value for the price */
    minValue;
    /** Maximum value for the price */
    maxValue;
    /** Unique id for testing */
    testId;
    /** Error*/
    error;
    /**
     * Extra class names applied to the outer <fieldset> wrapper.
     * Useful for spacing (e.g., margins/padding), width/layout utilities,
     * or theming the whole input group from the outside.
     * Example: "w-100 mb-2 d-flex align-items-center"
     */
    containerClassname;
    /**
     * Extra class names applied to the label container (<div class="input-group-prepend">)
     * that wraps the <label>. Use this to control label width, alignment,
     * spacing, or visibility at different breakpoints.
     * Example: "min-w-120 text-nowrap pe-2"
     */
    labelContainerClassname;
    /** Emits the current value on change */
    textChange;
    /** Emits the current value on blur */
    inputBlur;
    /** Emits the current value on focus */
    inputFocus;
    id;
    opts = {
        mask: Number,
        scale: 2,
        radix: '.',
        mapToRadix: [','],
        normalizeZeros: true,
        padFractionalZeros: true,
        thousandsSeparator: ',',
    };
    mask;
    inputRef;
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4();
        }
    }
    componentDidLoad() {
        if (!this.mask) {
            this.initializeMask();
        }
    }
    initializeMask() {
        // Create options object with min/max if provided
        const maskOpts = {
            ...this.opts,
        };
        if (this.minValue !== undefined) {
            maskOpts['min'] = this.minValue;
        }
        if (this.maxValue !== undefined) {
            maskOpts['max'] = this.maxValue;
        }
        this.mask = IMask(this.inputRef, maskOpts);
        // Set initial value if provided
        if (this.value) {
            this.mask.value = this.value;
        }
        this.mask.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this.mask.unmaskedValue === '';
            if (isEmpty) {
                this.value = '';
                this.textChange.emit(null);
            }
            else {
                this.value = this.mask.unmaskedValue;
                this.textChange.emit(this.value);
            }
        });
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
    handleInputChange = () => {
        // The value is already being updated by the mask's 'accept' event
        // Just validate here if needed
        this.validateInput(this.value);
    };
    handleBlur = () => {
        this.validateInput(this.value);
        // Format to 2 decimal places on blur
        if (this.value) {
            const numValue = parseFloat(this.value);
            this.value = numValue.toFixed(2);
            // Update the mask value to show the formatted value
            if (this.mask) {
                this.mask.value = this.value;
            }
        }
        // Emit the blur event
        this.inputBlur.emit(this.value);
    };
    handleFocus = () => {
        // Emit the focus event
        this.inputFocus.emit();
    };
    render() {
        return (h("fieldset", { key: '04bdd48ec29d37e068b955b3ddef5d6dc17a83ab', class: `${this.containerClassname} input-group price-input-group m-0 p-0 ` }, this.label && (h("div", { key: 'db548ba9694635568d51bde9c85657842ecd8b6a', class: `input-group-prepend ${this.labelContainerClassname}` }, h("span", { key: '8b2e57e1868ff85fa7180dad6b7b197bdb53dd62', class: `input-group-text 
                ${this.labelStyle}
              ${this.hasSpecialClass('ir-bl-lbl-none') ? 'ir-bl-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-lbl-none') ? 'ir-br-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-none') ? 'ir-br-none' : ''} 
              ${this.hasSpecialClass('ir-bl-none') ? 'ir-bl-none' : ''} 
              ` }, h("label", { key: 'ad9c6a5697c6cb007fe22423073d09e953af5260', class: 'p-0 m-0 ', htmlFor: this.id }, this.label)))), h("div", { key: 'a80022f010d0247dcb73d93441718bda3794f214', class: "position-relative has-icon-left rate-input-container" }, this.currency && (h("div", { key: 'c66405a621139e5277c6feb6ea50ebc87c925b67' }, h("span", { key: '871dee106eef5125b5348e2763de644341892657', class: `input-group-text ${this.disabled ? 'disabled' : ''} currency-label ${this.error ? 'error' : ''} ${this.label ? 'with-label' : ''}` }, this.currency))), h("input", { key: 'b3d72e1c55c487d3b36bf5b2560db4ccbcb8fbe3', ref: el => (this.inputRef = el), "data-testid": this.testId, disabled: this.disabled, id: this.id, class: `form-control input-sm rate-input 
              ${this.inputStyle}
              ${this.hasSpecialClass('ir-br-input-none') ? 'ir-br-input-none' : ''} 
              ${this.hasSpecialClass('ir-bl-input-none') ? 'ir-bl-input-none' : ''} 
              ${this.error ? 'error' : ''} py-0 m-0 ${this.currency ? 'ir-bl-none' : ''}`, onInput: this.handleInputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, type: "text", placeholder: this.placeholder, readOnly: this.readOnly, "aria-label": this.el.ariaLabel ?? 'price-input', "aria-describedby": this.el.ariaDescription ?? 'price-input' }))));
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
            "readOnly": {
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
                    "text": "The readonly for the input, optional"
                },
                "getter": false,
                "setter": false,
                "attribute": "read-only",
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
                    "text": "A Zod schema for validating the input\nExample: z.coerce.number()"
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
            },
            "testId": {
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
                    "text": "Unique id for testing"
                },
                "getter": false,
                "setter": false,
                "attribute": "test-id",
                "reflect": false
            },
            "error": {
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
                    "text": "Error"
                },
                "getter": false,
                "setter": false,
                "attribute": "error",
                "reflect": false
            },
            "containerClassname": {
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
                    "text": "Extra class names applied to the outer <fieldset> wrapper.\nUseful for spacing (e.g., margins/padding), width/layout utilities,\nor theming the whole input group from the outside.\nExample: \"w-100 mb-2 d-flex align-items-center\""
                },
                "getter": false,
                "setter": false,
                "attribute": "container-classname",
                "reflect": false
            },
            "labelContainerClassname": {
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
                    "text": "Extra class names applied to the label container (<div class=\"input-group-prepend\">)\nthat wraps the <label>. Use this to control label width, alignment,\nspacing, or visibility at different breakpoints.\nExample: \"min-w-120 text-nowrap pe-2\""
                },
                "getter": false,
                "setter": false,
                "attribute": "label-container-classname",
                "reflect": false
            }
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
