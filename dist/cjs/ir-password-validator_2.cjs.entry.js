'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.passwordValidationChange = index.createEvent(this, "passwordValidationChange", 7);
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
        return (index.h("div", { key: 'c8810a08fcd6cc58b2bc168812c5a7f74ea57d31', class: "m-0 p-0" }, index.h("requirement-check", { key: '41ebf2ee59d6105ca717eab3b4f8e48104ff5db9', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '6a8f7739f3c3015e6f92af9d6e5b647bc92423d9', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'c55bb6f53b672ad14e6c3ad47f66272e43a4fee8', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '10fc3d06dde483498a7acb745700c87622afbacf', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: 'a894ed40ef2c47dfd738c815d15d46af92fd0ff1', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '05b577577ff55254c97b2c40ee30be58f4537557', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '438f53a4af961416c46a22474d2bcd49c7bce621', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '226ce5fe4d9c70769bf8ca466c70cba0fa8d0292' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map