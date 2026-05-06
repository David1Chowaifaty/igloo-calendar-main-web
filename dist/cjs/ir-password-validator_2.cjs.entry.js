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
        return (index.h("div", { key: 'f79611278a1a898d787dbdd946bb002f51e05774', class: "m-0 p-0" }, index.h("requirement-check", { key: 'c531907fdf1f7bce3d2a30976a0344415009bfb4', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: 'd149e9cf04bd0f87b647adc7b9c15f18edf5c071', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '1fc9d6075255940d6d16d33ced755f297f6f2ef3', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '4255f8e496bc59ad34f7f6e24e5108b3f71c265d', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '8f0d959b9e9185da7a855d1cd3ee6fb02242b3c1', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '6cc353f6383f4497feb48579fb8662db3f201d1d', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '2ced0313a2bdcc59aaa3da038281a30abd2b95b2', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'c0aae192ffa7806f897d88ae4e6c8be1eb8bf5f2' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map