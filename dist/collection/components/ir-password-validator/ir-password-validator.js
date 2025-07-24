import { h } from "@stencil/core";
export class IrPasswordValidator {
    constructor() {
        /**
         * The password string to validate
         */
        this.password = '';
    }
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
        return (h("div", { key: 'f17444803c5d6808b696cf11d2b5f014a8ef6a67', class: "m-0 p-0" }, h("requirement-check", { key: '1d2b8c17586c66a0fc06f8c7e585c8f3cc262237', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '0126ac2c40297df891d93be096210a63dcd52bfe', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '0cb88d02c9c6aaf21fbc32907dcf69547b980a08', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '19644748610f77c515aa3eeaa58d9da1b28ebb70', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '972fe2efd9b3c1ba577e81800cdce196d219c164', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
    static get events() {
        return [{
                "method": "passwordValidationChange",
                "name": "passwordValidationChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "password",
                "methodName": "handlePasswordChange"
            }];
    }
}
//# sourceMappingURL=ir-password-validator.js.map
