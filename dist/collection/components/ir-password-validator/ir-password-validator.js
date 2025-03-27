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
        return (h("div", { key: 'a5d5ab8b1c4fde4675c8bd95bff826004c7f7956', class: "m-0 p-0" }, h("requirement-check", { key: '0e9b2b6f3511e4b7582b09cce205a28118b1123d', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '5006ccccd86b024559991c97a2db6b4671540fb4', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'a690506f50c0342e1b3f4bf50f73c1ccc3807179', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'f05818d5db99c9c73aa5d289da738c23813e8dc7', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '088fa44c2b1b11616df72bd2eb747fdc34dde6bf', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
