import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-icons2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";

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
        return (h("div", { key: 'a5d5ab8b1c4fde4675c8bd95bff826004c7f7956', class: "m-0 p-0" }, h("requirement-check", { key: '0e9b2b6f3511e4b7582b09cce205a28118b1123d', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '5006ccccd86b024559991c97a2db6b4671540fb4', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'a690506f50c0342e1b3f4bf50f73c1ccc3807179', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'f05818d5db99c9c73aa5d289da738c23813e8dc7', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '088fa44c2b1b11616df72bd2eb747fdc34dde6bf', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get style() { return irPasswordValidatorCss; }
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

//# sourceMappingURL=ir-password-validator2.js.map