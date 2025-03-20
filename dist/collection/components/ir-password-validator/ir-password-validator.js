import { h } from "@stencil/core";
export class IrPasswordValidator {
    constructor() {
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
    static get is() { return "ir-password-validator"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-password-validator.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-password-validator.css"]
        };
    }
    static get properties() {
        return {
            "password": {
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
                    "text": "The password string to validate"
                },
                "getter": false,
                "setter": false,
                "attribute": "password",
                "reflect": false,
                "defaultValue": "''"
            }
        };
    }
}
//# sourceMappingURL=ir-password-validator.js.map
