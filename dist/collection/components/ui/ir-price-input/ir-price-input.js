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
        return (h("fieldset", { key: 'd7173796a4ef2bf7eceff19d452c6b4f55bed98c', class: `${this.containerClassname} input-group price-input-group m-0 p-0 ` }, this.label && (h("div", { key: '877a125e8ce741965602b3ea69cba773eecca309', class: `input-group-prepend ${this.labelContainerClassname}` }, h("span", { key: '2d5f6a56ac5aa9509de2ca402bb91f6ea39b67e3', class: `input-group-text 
                ${this.labelStyle}
              ${this.hasSpecialClass('ir-bl-lbl-none') ? 'ir-bl-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-lbl-none') ? 'ir-br-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-none') ? 'ir-br-none' : ''} 
              ${this.hasSpecialClass('ir-bl-none') ? 'ir-bl-none' : ''} 
              ` }, h("label", { key: '20c180a0c373a236590fdf1678725556f89c4a4f', class: 'p-0 m-0 ', htmlFor: this.id }, this.label)))), h("div", { key: 'ed544f0fcf82d4b143a3e2fa14c55ed921368591', class: "position-relative has-icon-left rate-input-container" }, this.currency && (h("div", { key: '902bbfc3124c0955d6e254152093fb48112d0219' }, h("span", { key: '5f82faf9fc650a2a12067b85709fd9f47332de2a', class: `input-group-text ${this.disabled ? 'disabled' : ''} currency-label ${this.error ? 'error' : ''} ${this.label ? 'with-label' : ''}` }, this.currency))), h("input", { key: '1098c5f818f41e0b1c4b8d2704167f862803d132', ref: el => (this.inputRef = el), "data-testid": this.testId, disabled: this.disabled, id: this.id, class: `form-control input-sm rate-input 
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
                "reflect": false,
                "attribute": "label"
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
                "reflect": false,
                "attribute": "read-only"
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
                "reflect": false,
                "attribute": "input-style"
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
                "reflect": false,
                "attribute": "label-style"
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
                "reflect": false,
                "attribute": "disabled"
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
                "reflect": false,
                "attribute": "currency"
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
                "reflect": false,
                "attribute": "auto-validate",
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
                "reflect": false,
                "attribute": "wrap-key"
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
                            "id": "node_modules::ZodType",
                            "referenceLocation": "ZodType"
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
                "reflect": false,
                "attribute": "placeholder",
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
                "reflect": false,
                "attribute": "value",
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
                "reflect": false,
                "attribute": "required",
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
                "reflect": false,
                "attribute": "min-value"
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
                "reflect": false,
                "attribute": "max-value"
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
                "reflect": false,
                "attribute": "test-id"
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
                "reflect": false,
                "attribute": "error"
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
                "reflect": false,
                "attribute": "container-classname"
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
                "reflect": false,
                "attribute": "label-container-classname"
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
