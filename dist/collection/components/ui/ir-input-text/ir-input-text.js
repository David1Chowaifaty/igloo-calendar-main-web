import { h } from "@stencil/core";
import { v4 } from "uuid";
import IMask from "imask";
export class IrInputText {
    constructor() {
        /** Additional inline styles for the input */
        this.inputStyles = '';
        /** Whether the input field is read-only */
        this.readonly = false;
        /** Input type (e.g., text, password, email) */
        this.type = 'text';
        /** Whether the form has been submitted */
        this.submitted = false;
        /** Whether to apply default input styling */
        this.inputStyle = true;
        /** Text size inside the input field */
        this.textSize = 'md';
        /** Position of the label: left, right, or center */
        this.labelPosition = 'left';
        /** Background color of the label */
        this.labelBackground = null;
        /** Text color of the label */
        this.labelColor = 'dark';
        /** Border color/style of the label */
        this.labelBorder = 'theme';
        /** Label width as a fraction of 12 columns (1-11) */
        this.labelWidth = 3;
        /** Variant of the input: default or icon or floating-label */
        this.variant = 'default';
        /** Whether the input is disabled */
        this.disabled = false;
        /** Whether the input has an error */
        this.error = false;
        /** Whether the input should auto-validate */
        this.autoValidate = true;
        this.inputFocused = false;
    }
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4();
        }
        this.hasPrefixSlot = this.haveSlotPresent('prefix');
        this.hasSuffixSlot = this.haveSlotPresent('suffix');
    }
    componentDidLoad() {
        if (this.mask)
            this.initMask();
    }
    handleMaskChange() {
        this.initMask();
    }
    // @Watch('autoValidate')
    // handleMaskChange1() {
    //   console.log(this.autoValidate);
    // }
    // @Watch('error')
    // handleErrorChange(newValue: boolean, oldValue: boolean) {
    //   if (newValue !== oldValue) {
    //     if (this.autoValidate) {
    //       this.validateInput(this.value, true);
    //     }
    //   }
    // }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.validateInput(this.value);
        }
    }
    initMask() {
        if (!this.mask || this.maskInstance) {
            return;
        }
        this.maskInstance = IMask(this.inputRef, this.mask);
        this.maskInstance.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this.maskInstance.unmaskedValue === '';
            if (isEmpty) {
                this.inputRef.value = '';
                this.textChange.emit(null);
            }
            else {
                this.inputRef.value = this.maskInstance.value;
                this.textChange.emit(this.maskInstance.value);
            }
        });
    }
    haveSlotPresent(name) {
        const slot = this.el.querySelector(`[slot="${name}"]`);
        return slot !== null;
    }
    async validateInput(value, forceValidation = false) {
        if (!this.autoValidate && !forceValidation) {
            if (this.error) {
                this.updateErrorState(false);
            }
            return;
        }
        if (this.zod) {
            try {
                if (!this.asyncParse) {
                    this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                else {
                    await this.zod.parseAsync(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                if (this.error) {
                    this.updateErrorState(false);
                }
            }
            catch (error) {
                console.log(error);
                this.updateErrorState(true);
            }
        }
    }
    handleInputChange(event) {
        const value = event.target.value;
        const isEmpty = value === '';
        if (this.maskInstance) {
            this.maskInstance.value = value;
        }
        const maskedValue = isEmpty ? null : this.maskInstance ? this.maskInstance.value : value;
        this.textChange.emit(maskedValue);
    }
    updateErrorState(b) {
        this.error = b;
        this.inputRef.setAttribute('aria-invalid', b ? 'true' : 'false');
    }
    handleBlur(e) {
        this.validateInput(this.value, this.submitted);
        this.inputFocused = false;
        this.inputBlur.emit(e);
    }
    renderFloatingLabel() {
        const labelText = this.label || this.placeholder || '';
        const hasValue = !!(this.value && String(this.value).length > 0);
        return (h("div", { class: "form-group", style: this.inputContainerStyle }, h("div", { class: `ir-floating-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''} ${this.readonly ? 'is-readonly' : ''}`, "data-has-value": String(hasValue), "data-focused": String(this.inputFocused), "data-have-prefix": String(this.hasPrefixSlot), "data-have-suffix": String(this.hasSuffixSlot), part: "form-group" }, h("span", { part: "prefix-container", class: { 'prefix-container': true, 'no-slot': !this.hasPrefixSlot } }, h("slot", { name: "prefix" })), h("input", { part: "input", "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, id: this.id, name: this.name, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input ir-floating-input ${this.inputStyles || ''} ${this.error ? 'danger-border' : ''} text-${this.textSize}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: " ", autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, "aria-invalid": String(this.error), "aria-required": String(this.required) }), h("label", { part: "label", htmlFor: this.id, class: "ir-floating-label" }, labelText, this.required ? ' *' : ''), h("span", { part: "suffix-container", class: { 'suffix-container': true, 'no-slot': !this.hasSuffixSlot } }, h("slot", { name: "suffix" }))), this.errorMessage && this.error && (h("p", { part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    render() {
        if (this.variant === 'floating-label') {
            return this.renderFloatingLabel();
        }
        if (this.variant === 'icon') {
            return (h("fieldset", { class: "position-relative has-icon-left input-container" }, h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, h("slot", { name: "icon" }))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, autoComplete: this.autoComplete })));
        }
        return (h("div", { class: 'form-group', style: this.inputContainerStyle }, h("div", { class: "input-group row m-0" }, this.label && (h("div", { class: `input-group-prepend col-${this.labelWidth} ${this.labelContainerClassname} p-0 text-${this.labelColor}` }, h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && h("p", { class: "error-message" }, this.errorMessage)));
    }
    static get is() { return "ir-input-text"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-input-text.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-input-text.css"]
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
                    "text": "Name attribute for the input field"
                },
                "getter": false,
                "setter": false,
                "attribute": "name",
                "reflect": false
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
                    "text": "Value of the input field"
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": false
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
                    "text": "Label text for the input"
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
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
                "reflect": false
            },
            "inputStyles": {
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
                    "text": "Additional inline styles for the input"
                },
                "getter": false,
                "setter": false,
                "attribute": "input-styles",
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
                    "text": "Whether the input field is required"
                },
                "getter": false,
                "setter": false,
                "attribute": "required",
                "reflect": false
            },
            "readonly": {
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
                    "text": "Whether the input field is read-only"
                },
                "getter": false,
                "setter": false,
                "attribute": "readonly",
                "reflect": false,
                "defaultValue": "false"
            },
            "type": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "| 'text'\n    | 'password'\n    | 'email'\n    | 'number'\n    | 'tel'\n    | 'url'\n    | 'search'\n    | 'date'\n    | 'datetime-local'\n    | 'month'\n    | 'week'\n    | 'time'\n    | 'color'\n    | 'file'\n    | 'hidden'\n    | 'checkbox'\n    | 'radio'\n    | 'range'\n    | 'button'\n    | 'reset'\n    | 'submit'\n    | 'image'",
                    "resolved": "\"number\" | \"color\" | \"button\" | \"time\" | \"image\" | \"text\" | \"hidden\" | \"search\" | \"file\" | \"email\" | \"date\" | \"url\" | \"week\" | \"month\" | \"reset\" | \"password\" | \"submit\" | \"range\" | \"tel\" | \"datetime-local\" | \"checkbox\" | \"radio\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Input type (e.g., text, password, email)"
                },
                "getter": false,
                "setter": false,
                "attribute": "type",
                "reflect": false,
                "defaultValue": "'text'"
            },
            "submitted": {
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
                    "text": "Whether the form has been submitted"
                },
                "getter": false,
                "setter": false,
                "attribute": "submitted",
                "reflect": false,
                "defaultValue": "false"
            },
            "inputStyle": {
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
                    "text": "Whether to apply default input styling"
                },
                "getter": false,
                "setter": false,
                "attribute": "input-style",
                "reflect": false,
                "defaultValue": "true"
            },
            "textSize": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text size inside the input field"
                },
                "getter": false,
                "setter": false,
                "attribute": "text-size",
                "reflect": false,
                "defaultValue": "'md'"
            },
            "labelPosition": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right' | 'center' | 'top'",
                    "resolved": "\"center\" | \"left\" | \"right\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the label: left, right, or center"
                },
                "getter": false,
                "setter": false,
                "attribute": "label-position",
                "reflect": false,
                "defaultValue": "'left'"
            },
            "labelBackground": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Background color of the label"
                },
                "getter": false,
                "setter": false,
                "attribute": "label-background",
                "reflect": false,
                "defaultValue": "null"
            },
            "labelColor": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"primary\" | \"secondary\" | \"success\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text color of the label"
                },
                "getter": false,
                "setter": false,
                "attribute": "label-color",
                "reflect": false,
                "defaultValue": "'dark'"
            },
            "labelBorder": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'theme' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none'",
                    "resolved": "\"danger\" | \"dark\" | \"info\" | \"light\" | \"none\" | \"primary\" | \"secondary\" | \"success\" | \"theme\" | \"warning\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Border color/style of the label"
                },
                "getter": false,
                "setter": false,
                "attribute": "label-border",
                "reflect": false,
                "defaultValue": "'theme'"
            },
            "labelWidth": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11",
                    "resolved": "1 | 10 | 11 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label width as a fraction of 12 columns (1-11)"
                },
                "getter": false,
                "setter": false,
                "attribute": "label-width",
                "reflect": false,
                "defaultValue": "3"
            },
            "variant": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'icon' | 'floating-label'",
                    "resolved": "\"default\" | \"floating-label\" | \"icon\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Variant of the input: default or icon or floating-label"
                },
                "getter": false,
                "setter": false,
                "attribute": "variant",
                "reflect": false,
                "defaultValue": "'default'"
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
                    "text": "Whether the input is disabled"
                },
                "getter": false,
                "setter": false,
                "attribute": "disabled",
                "reflect": false,
                "defaultValue": "false"
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
                    "text": "Whether the input has an error"
                },
                "getter": false,
                "setter": false,
                "attribute": "error",
                "reflect": false,
                "defaultValue": "false"
            },
            "mask": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FactoryArg",
                    "resolved": "string | RegExp | NumberConstructor | DateConstructor | FactoryOpts | Masked<any> | ((value: string, masked: Masked<any>) => boolean) | DynamicMaskType",
                    "references": {
                        "FactoryArg": {
                            "location": "import",
                            "path": "imask",
                            "id": "node_modules::FactoryArg"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Mask for the input field (optional)"
                },
                "getter": false,
                "setter": false,
                "attribute": "mask",
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
                    "text": "Whether the input should auto-validate"
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-validate",
                "reflect": false,
                "defaultValue": "true"
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
                    "text": "A Zod schema for validating the input"
                },
                "getter": false,
                "setter": false
            },
            "asyncParse": {
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
                    "text": "A Zod parse type for validating the input"
                },
                "getter": false,
                "setter": false,
                "attribute": "async-parse",
                "reflect": false
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
                    "text": "Key to wrap the value (e.g., 'price' or 'cost')"
                },
                "getter": false,
                "setter": false,
                "attribute": "wrap-key",
                "reflect": false
            },
            "inputForcedStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Forcing css style to the input"
                },
                "getter": false,
                "setter": false
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Input id for testing purposes"
                },
                "getter": false,
                "setter": false,
                "attribute": "test-id",
                "reflect": false
            },
            "maxLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Input max character length"
                },
                "getter": false,
                "setter": false,
                "attribute": "max-length",
                "reflect": false
            },
            "clearBaseStyles": {
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
                    "text": "To clear all the Input base styling"
                },
                "getter": false,
                "setter": false,
                "attribute": "clear-base-styles",
                "reflect": false
            },
            "errorMessage": {
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
                    "text": "To clear all the Input base styling"
                },
                "getter": false,
                "setter": false,
                "attribute": "error-message",
                "reflect": false
            },
            "autoComplete": {
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
                    "text": "Autocomplete behavior for the input (e.g., 'on', 'off', 'email', etc.)"
                },
                "getter": false,
                "setter": false,
                "attribute": "auto-complete",
                "reflect": false
            },
            "inputContainerStyle": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Forcing css style to the input container"
                },
                "getter": false,
                "setter": false
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
    static get states() {
        return {
            "inputFocused": {}
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
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
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
                    "text": ""
                },
                "complexType": {
                    "original": "FocusEvent",
                    "resolved": "FocusEvent",
                    "references": {
                        "FocusEvent": {
                            "location": "global",
                            "id": "global::FocusEvent"
                        }
                    }
                }
            }, {
                "method": "inputFocus",
                "name": "inputFocus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "FocusEvent",
                    "resolved": "FocusEvent",
                    "references": {
                        "FocusEvent": {
                            "location": "global",
                            "id": "global::FocusEvent"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "mask",
                "methodName": "handleMaskChange"
            }, {
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
}
//# sourceMappingURL=ir-input-text.js.map
