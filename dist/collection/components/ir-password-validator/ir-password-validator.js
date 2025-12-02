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
        return (h("div", { key: 'db35c7c2bb8a2215be943403adfabf4b2784cb5d', class: "m-0 p-0" }, h("requirement-check", { key: '4e3d92ca9d77475e151462be70de8d4d577be997', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'f356a848f0580f48cefafa39fadf31f95783caa1', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'c70281e7946654c2998677566f9120e0951f02bd', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '8e51527f358697f3e69751a004b41a958351e82d', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '44ea929be2690665646bdf5e9ca66e50ab3288ca', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
