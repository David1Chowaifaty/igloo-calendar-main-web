import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = /*@__PURE__*/ proxyCustomElement(class IrPasswordValidator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The password string to validate
         */
        this.password = '';
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
        return (h("div", { key: '84aaea8b010e33343c820a9a8b993b0ffb2534dc', class: "m-0 p-0" }, h("requirement-check", { key: '1363bb5bf0f457fb19ae97f5edc3c74fe1cb6d75', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '0b8d3eeecadf98675c94e9984b7128d1da2b928c', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'c44f367633c29069136661bd804d8ca310165598', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'b517ff2a3880caad8b35931e11e129e6a8eddf95', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '39c594ed457a802e4f6b0210c32e209da62eca98', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get style() { return IrPasswordValidatorStyle0; }
}, [2, "ir-password-validator", {
        "password": [1]
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