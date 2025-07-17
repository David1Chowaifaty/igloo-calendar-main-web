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
        return (index.h("div", { key: '257f133f10302f8416c06f0a21a80c54f95a92a4', class: "m-0 p-0" }, index.h("requirement-check", { key: 'b8fd409ec44f1c9036a0a398837d3f936cdb99cb', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '81069e3579fce77d1a57974a088d0cbeb7c84482', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'eaea95e39d8fe32002fe4d679c0a5228d1849602', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '6afa0e8a2704ba218d824e01a3bb6fbf4b44277d', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: 'fa9d1756fd5ba3dc1d8d84416072d3372778d0fe', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '70d2ef7db24cdc1c8b5c61e97b5ad56745bcba13', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '25b0a2be5a8215f5d9e443d18e52fcbb9ede9ab3', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '61e390f3923cdcd5f3f52a4fbdde1afd72a06066' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map