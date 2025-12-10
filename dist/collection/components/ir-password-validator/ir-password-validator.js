import { h } from "@stencil/core";
export class IrPasswordValidator {
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
        return (h("div", { key: '50a67c8a323633787c0dd672723d6b8725a6cb92', class: "m-0 p-0" }, h("requirement-check", { key: '2706aefc2cc9f6c34afc0ce32ffd99b4470c4613', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'f095a7f8f6708af63d178d12fe76ef910bb260fb', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '76290b0c3457c2b0f8595c326d4031472e28e4c9', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'dca42cc2be2e6746fff3233a6dcafa38a22b455b', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '875b7fd4136b779be2e3d502a0d516f40e8bd31f', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
