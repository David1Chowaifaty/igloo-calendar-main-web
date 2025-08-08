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
        return (h("div", { key: 'f12330c410935df6dd6c89775d579509f4f44946', class: "m-0 p-0" }, h("requirement-check", { key: '5ae045089749414a0f8aa86a93867129fc68253f', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '6a66bea8cb779bf519cb909b15635649f5d634d3', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '22106444ec66265301f01a2738ba8c729c8048ff', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '0418c44550744905b713474d7657cecb9c00abd1', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'bf6321aac17e3c1bb43be8430455f0fff738dba9', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
