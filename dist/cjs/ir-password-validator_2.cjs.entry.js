'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.passwordValidationChange = index.createEvent(this, "passwordValidationChange", 7);
    }
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
        return (index.h("div", { key: '50e5a9b8d87891498b5303fffb9cedc8f249caad', class: "m-0 p-0" }, index.h("requirement-check", { key: 'b4d0ed1218ba63c7b5566e904a9f4f583ec4bbc7', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: 'd6a273b49a0b10f00f6159b92ca64dfd9b2493de', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '20b317336aa5f71e7e89c734d1b1a73fc14fa72b', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '75989c071e163310be4fe4ed5d1811a4269a9a8d', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '90a951924834aba27f29b31e93a88112d02f560f', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = IrPasswordValidatorStyle0;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--wa-color-success-fill-loud, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
const RequirementCheckStyle0 = requirementCheckCss;

const RequirementCheck = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Whether this requirement has been satisfied (true/false).
     */
    isValid = false;
    /**
     * The requirement text to display (e.g. "At least one lowercase letter").
     */
    text = '';
    render() {
        return (index.h("div", { key: 'e0d9a561a660da2411430f692d82f5415172a807', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '1432a52af9e9589f1816a377c6472042f091e26c', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '49b38b19f541e6e9cedbd9169ba3f63373758c67' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map