import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irPriceInputCss = ".sc-ir-price-input-h{display:block;--ir-input-border-color:#cacfe7;flex:1 1 0%}.sc-ir-price-input-h .input-group-text.sc-ir-price-input{border-color:var(--ir-input-border-color)}.sc-ir-price-input-h .form-control.sc-ir-price-input,.currency-label.sc-ir-price-input{font-size:14px !important}.ir-bl-lbl-none.sc-ir-price-input,.ir-bl-input-none.sc-ir-price-input{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.ir-br-lbl-none.sc-ir-price-input,.ir-br-input-none.sc-ir-price-input{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}.ir-br-none.sc-ir-price-input{border-right:none}.ir-bl-none.sc-ir-price-input{border-left:none}.rate-input-container.sc-ir-price-input{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1;padding:0 !important}[class='special-style'].sc-ir-price-input-h .rate-input.sc-ir-price-input{background:black !important}.rate-input.sc-ir-price-input{font-size:0.875rem;line-height:0;padding:0;height:0;box-sizing:border-box;border-left:0;padding-left:0px !important;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.currency-label.with-label.sc-ir-price-input{border-radius:0}.currency-label.sc-ir-price-input{box-sizing:border-box;color:#3b4781;border:1px solid #cacfe7;font-size:0.875rem;height:2rem;background:white;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;pointer-events:none;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.currency-label.disabled.sc-ir-price-input,.rate-input.sc-ir-price-input:disabled{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.price-input-group.sc-ir-price-input:focus-within .currency-label.sc-ir-price-input{border-top:1px solid #1e9ff2;border-bottom:1px solid #1e9ff2;border-left:1px solid #1e9ff2}[data-state='error'].sc-ir-price-input-h .currency-label.sc-ir-price-input,[data-state='error'].sc-ir-price-input-h .rate-input.sc-ir-price-input,.error.sc-ir-price-input{border-color:var(--red, #ff4961) !important}.price-input.sc-ir-price-input:focus{border-right-width:1px !important}.is-invalid.sc-ir-price-input{background-image:none !important}";
const IrPriceInputStyle0 = irPriceInputCss;

const IrPriceInput = /*@__PURE__*/ proxyCustomElement(class IrPriceInput extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.textChange = createEvent(this, "textChange", 7);
        this.inputBlur = createEvent(this, "inputBlur", 7);
        this.inputFocus = createEvent(this, "inputFocus", 7);
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
        this.label = undefined;
        this.inputStyle = undefined;
        this.labelStyle = undefined;
        this.disabled = undefined;
        this.currency = undefined;
        this.autoValidate = true;
        this.wrapKey = undefined;
        this.zod = undefined;
        this.placeholder = '';
        this.value = '';
        this.required = false;
        this.minValue = undefined;
        this.maxValue = undefined;
        this.error = undefined;
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
        return (h("fieldset", { key: 'de154e33fc36f9c00956dbe88a4c250cc8765d15', class: "input-group price-input-group m-0 p-0" }, this.label && (h("div", { key: 'c0b28eb9542b90f136c57d05108b60efc56963ba', class: "input-group-prepend" }, h("span", { key: '92db7bef637e2009c60da3fc49b8af2c0ece572f', class: `input-group-text 
                ${this.labelStyle}
              ${this.hasSpecialClass('ir-bl-lbl-none') ? 'ir-bl-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-lbl-none') ? 'ir-br-lbl-none' : ''}
              ${this.hasSpecialClass('ir-br-none') ? 'ir-br-none' : ''} 
              ${this.hasSpecialClass('ir-bl-none') ? 'ir-bl-none' : ''} 
              ` }, h("label", { key: 'da1aea05176b5c7cd1c2fcf265c6ed1af8eabe1c', class: 'p-0 m-0 ', htmlFor: this.id }, this.label)))), h("div", { key: '12778a1b99e326e947b2af74cbcad572928a600b', class: "position-relative has-icon-left rate-input-container" }, this.currency && (h("div", { key: '64f2a6554891e62f2540b8cc37ee2a8267475b2d', class: `input-group-prepend` }, h("span", { key: '9574f028bd54ebbe4f16b3edd6e3e0d2a8b6cb4c', class: `input-group-text ${this.disabled ? 'disabled' : ''} currency-label ${this.error ? 'error' : ''} ${this.label ? 'with-label' : ''}` }, this.currency))), h("input", { key: 'ca3b5084073a2d8d986828ef2e8a0feb5dd718bb', disabled: this.disabled, id: this.id, class: `form-control input-sm rate-input 
              ${this.inputStyle}
              ${this.hasSpecialClass('ir-br-input-none') ? 'ir-br-input-none' : ''} 
              ${this.hasSpecialClass('ir-bl-input-none') ? 'ir-bl-input-none' : ''} 
              ${this.error ? 'error' : ''} py-0 m-0 ${this.currency ? 'ir-bl-none' : ''}`, onInput: this.handleInputChange, onBlur: this.handleBlur, onFocus: this.handleFocus, type: "number", step: "0.01", "aria-label": (_a = this.el.ariaLabel) !== null && _a !== void 0 ? _a : 'price-input', "aria-describedby": (_b = this.el.ariaDescription) !== null && _b !== void 0 ? _b : 'price-input', value: this.value }))));
    }
    get el() { return this; }
    static get style() { return IrPriceInputStyle0; }
}, [2, "ir-price-input", {
        "label": [1],
        "inputStyle": [1, "input-style"],
        "labelStyle": [1, "label-style"],
        "disabled": [4],
        "currency": [1],
        "autoValidate": [4, "auto-validate"],
        "wrapKey": [1, "wrap-key"],
        "zod": [16],
        "placeholder": [1],
        "value": [1025],
        "required": [4],
        "minValue": [2, "min-value"],
        "maxValue": [2, "max-value"],
        "error": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-price-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-price-input":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPriceInput);
            }
            break;
    } });
}

export { IrPriceInput as I, defineCustomElement as d };

//# sourceMappingURL=ir-price-input2.js.map