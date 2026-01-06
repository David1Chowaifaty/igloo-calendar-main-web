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
        return (index.h("div", { key: 'b4b9a69a272a5ae10eb95c58aea725a8ba350c9d', class: "m-0 p-0" }, index.h("requirement-check", { key: '9d2e393a2c6c4963f9897cd9f23989498a8f427f', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '56412f57dba1351c36b71dacc7416e4d6778633c', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '01cb41b715a9c4306740d34a1de3f85ce0195232', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '6dcd82d4eaefc8bd70161c63921cc067b26feddd', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '3316fad79883fc1c9f25185c433a3e4b31bd06b5', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '826a3126194bfcad046a08c944d7c82bdcb76b59', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '3f18287ab791a2376d44d538a2128bd8b747474b', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '854cceed712cc582e58a2f4792cb4c7868bc09da' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map