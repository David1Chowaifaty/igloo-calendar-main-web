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
        return (h("div", { key: '31b7a8d67c3f337e91c2ba583a79cb2abe44b95d', class: "m-0 p-0" }, h("requirement-check", { key: '207e82851d212092d3ffb1e5c7748898a22c9bb3', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'e98932e82f2a83f773246bab009c8bb8e94e72bb', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '905653d9e0722135685aa34ff619907e59fef6e3', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'b74215edc75dd204d697ea968e44fc5d3985a43a', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '7bdfc88754f1a1af4253885c2266044b7e88778c', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
