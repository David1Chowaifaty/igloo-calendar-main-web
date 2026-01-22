import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = /*@__PURE__*/ proxyCustomElement(class IrPasswordValidator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.passwordValidationChange = createEvent(this, "passwordValidationChange", 7);
    }
    /**
     * The password string to validate
     */
    password = '';
    passwordValidationChange;
    handlePasswordChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.passwordValidationChange.emit(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/.test(newValue));
        }
    }
    get validLength() {
        if (!this.password) {
            return false;
        }
        return this.password.length >= 8 && this.password.length <= 16;
    }
    get hasUppercase() {
        if (!this.password) {
            return false;
        }
        return /[A-Z]/.test(this.password);
    }
    get hasLowercase() {
        if (!this.password) {
            return false;
        }
        return /[a-z]/.test(this.password);
    }
    get hasDigit() {
        if (!this.password) {
            return false;
        }
        return /[0-9]/.test(this.password);
    }
    get hasSpecialChar() {
        if (!this.password) {
            return false;
        }
        return /[!@#$%^&*()\-_=+]/.test(this.password);
    }
    render() {
        return (h("div", { key: '16f3aaac089898bfcf3688c906de660736962ea3', class: "m-0 p-0" }, h("requirement-check", { key: 'ae0933d2b5d5ccce843189aa361d62a0ad875a9d', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'd846317e4359d564e96d2654d9676593d3560d47', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '63d68e07dd9bf2045e4499896407f1d492873e38', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '3f1e7fd898644152c7ad38701cf68028a669ee2c', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'e2bfd8a0e89af7b114a0c48b5bbfe73b749ee054', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
    static get style() { return IrPasswordValidatorStyle0; }
}, [2, "ir-password-validator", {
        "password": [1]
    }, undefined, {
        "password": ["handlePasswordChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-password-validator", "ir-icons", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPasswordValidator);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPasswordValidator as I, defineCustomElement as d };

//# sourceMappingURL=ir-password-validator2.js.map