import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { I as IMask } from './index4.js';
import { v as v4 } from './v4.js';

const irInputTextCss = ".sc-ir-input-text-h{margin:0;padding:0;display:inline}.border-theme.sc-ir-input-text{border:1px solid #cacfe7}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid #cacfe7;font-size:0.975rem;height:2rem;background:rgb(255, 255, 255);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:#1e9ff2 !important}.error-message.sc-ir-input-text{font-size:0.875rem;padding:0;margin:0.5rem 0 0;color:var(--red, #ff4961)}.ir-input[data-state='empty'].sc-ir-input-text{color:#bbbfc6}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--blue)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--red, #ff4961)}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = /*@__PURE__*/ proxyCustomElement(class IrInputText extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.textChange = createEvent(this, "textChange", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
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
        /** Variant of the input: default or icon */
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
    }
    componentDidLoad() {
        if (this.mask)
            this.initMask();
    }
    handleMaskChange() {
        this.initMask();
    }
    handleMaskChange1() {
        console.log(this.autoValidate);
    }
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
    async validateInput(value, forceValidation = false) {
        console.log('autoValidate=>', this.autoValidate);
        if (!this.autoValidate && !forceValidation) {
            console.log('here', 'error', this.error);
            if (this.error) {
                this.updateErrorState(false);
            }
            return;
        }
        console.log('first');
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
    render() {
        if (this.variant === 'icon') {
            return (h("fieldset", { class: "position-relative has-icon-left input-container" }, h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, h("slot", { name: "icon" }))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })));
        }
        return (h("div", { class: 'form-group' }, h("div", { class: "input-group row m-0" }, this.label && (h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && h("p", { class: "error-message" }, this.errorMessage)));
    }
    get el() { return this; }
    static get watchers() { return {
        "mask": ["handleMaskChange"],
        "autoValidate": ["handleMaskChange1"],
        "value": ["handleValueChange"]
    }; }
    static get style() { return IrInputTextStyle0; }
}, [6, "ir-input-text", {
        "name": [1],
        "value": [1],
        "label": [1],
        "placeholder": [1],
        "inputStyles": [1, "input-styles"],
        "required": [4],
        "readonly": [4],
        "type": [1],
        "submitted": [4],
        "inputStyle": [4, "input-style"],
        "textSize": [1, "text-size"],
        "labelPosition": [1, "label-position"],
        "labelBackground": [1, "label-background"],
        "labelColor": [1, "label-color"],
        "labelBorder": [1, "label-border"],
        "labelWidth": [2, "label-width"],
        "variant": [1],
        "disabled": [4],
        "error": [1028],
        "mask": [1],
        "autoValidate": [4, "auto-validate"],
        "zod": [16],
        "asyncParse": [4, "async-parse"],
        "wrapKey": [1, "wrap-key"],
        "inputForcedStyle": [16],
        "testId": [1, "test-id"],
        "maxLength": [2, "max-length"],
        "clearBaseStyles": [4, "clear-base-styles"],
        "errorMessage": [1, "error-message"],
        "inputFocused": [32]
    }, undefined, {
        "mask": ["handleMaskChange"],
        "autoValidate": ["handleMaskChange1"],
        "value": ["handleValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-input-text"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrInputText);
            }
            break;
    } });
}

export { IrInputText as I, defineCustomElement as d };

//# sourceMappingURL=ir-input-text2.js.map