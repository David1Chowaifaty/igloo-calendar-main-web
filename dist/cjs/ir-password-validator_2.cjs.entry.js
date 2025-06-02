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
        return (index.h("div", { key: 'e0deb44571e9620a241642feebdc0ffd8e7d7650', class: "m-0 p-0" }, index.h("requirement-check", { key: '283f1a8b8d3150cfc1a620c8fe09ae4c30ff0f99', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: 'd2028662c3b7afa2fc1d98f4efce66dbbdbe360c', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'cd2e7a33094321376210062b90744626c0a4c53c', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '6d5f77458b86de61cca0d8723dcb2eb8903dc47e', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '51ea426959cf107a2c7a02b12007c54cbdf18ad0', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '8172e42d3de9a827d84ebb9b70698174cb6d69dd', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '9f7b32a02116e84c790f7d0f4144f7b3e1b5eb0e', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '05b6ecbf415dbfb5df8ebd546351424a2b36fd57' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map