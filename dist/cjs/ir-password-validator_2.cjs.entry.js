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
        return (index.h("div", { key: 'c4a852913c0c57bd927b954b6477234bf001da21', class: "m-0 p-0" }, index.h("requirement-check", { key: '51693d916a21e3517cc252ddcb6d52e9a9039c66', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '8dc5332c6f737bb34b5ebc135aa927fa3ea8f495', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '3f1fd2d539ca6c2a7d116ab44b07c431a60d0f08', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '389b88f0bd34d0e2740448d3e9cfde6536e89c1c', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '6fc34d2cdb7303e9aa5a7c3864be8d0f7841cfb3', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = IrPasswordValidatorStyle0;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
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
        return (index.h("div", { key: '654e4743542088623db0c4ff293a05ad76e86d6b', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'd665f7274def4112e9a7665eab40465402d43262', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '3ffc1a1b2eb0a7b9f719f81d2707acc517d4ca60' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map