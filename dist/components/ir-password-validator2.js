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
        return (h("div", { key: '959845c86072b345d671037b874834c62fcd803a', class: "m-0 p-0" }, h("requirement-check", { key: 'e2dbb10f9af578a751c52c77371c25eeece0fc9e', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '54c2193f98c035532b7c80df8e2e2703d505cebc', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'd06707beeaa4e927b168e2a1b1285571f37fef3f', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '05b03708b478592d7819de4e2337d7a4010e151f', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '650e632a3fa5657c7e90b94efaad36f3ac91dcb4', isValid: this.hasSpecialChar, text: "At least one special character" })));
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