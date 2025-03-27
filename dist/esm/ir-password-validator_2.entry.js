import { r as registerInstance, h } from './index-jhiFt_tX.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
};
IrPasswordValidator.style = irPasswordValidatorCss;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";

const RequirementCheck = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether this requirement has been satisfied (true/false).
         */
        this.isValid = false;
        /**
         * The requirement text to display (e.g. "At least one lowercase letter").
         */
        this.text = '';
    }
    render() {
        return (h("div", { key: '77000d2fe09e79d438dc47e6d80d5ee365762070', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '8d3cf1dd73948dceafb72d453a8960c160e57e0c', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '8c4c8b94291303c62b41898ffba0d7a355e299c3' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
//# sourceMappingURL=ir-password-validator.requirement-check.entry.js.map

//# sourceMappingURL=ir-password-validator_2.entry.js.map