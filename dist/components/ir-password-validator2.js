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
        return (h("div", { key: '93f2c8897a310be22577185d2e8aabbcd2a0db36', class: "m-0 p-0" }, h("requirement-check", { key: '94569a1ec2132e0d772163d2ed2c7432ea8c3dd9', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'ed469b9c86a9f06a13bb58a81edcc9c2e9aac850', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'ada97645c7ce40f48c8fd1843245596f0ae7b7d3', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '94e5fafd25fc041b0f9f68dfdced5f21f50b6db0', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'ed098ce5fa5f005f730b8a9c31fa7baf2cc45edb', isValid: this.hasSpecialChar, text: "At least one special character" })));
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