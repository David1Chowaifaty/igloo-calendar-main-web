'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '84aaea8b010e33343c820a9a8b993b0ffb2534dc', class: "m-0 p-0" }, index.h("requirement-check", { key: '1363bb5bf0f457fb19ae97f5edc3c74fe1cb6d75', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '0b8d3eeecadf98675c94e9984b7128d1da2b928c', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'c44f367633c29069136661bd804d8ca310165598', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: 'b517ff2a3880caad8b35931e11e129e6a8eddf95', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '39c594ed457a802e4f6b0210c32e209da62eca98', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
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
        return (index.h("div", { key: '9487536ea464fa04a9deff5f7b3a5ec3adf244a5', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '2836ba404db1132633842149385002d03df79ca4', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '382010c6ac3f6599a75812edc799d2082aa9c413' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map