'use strict';

var index = require('./index-Dt9a74kn.js');

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.passwordValidationChange = index.createEvent(this, "passwordValidationChange");
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
        return (index.h("div", { key: '767cb36eeb9e2382980b5f2159f1f682ea228a17', class: "m-0 p-0" }, index.h("requirement-check", { key: '6d567ab334adbee96a2805f868a3b2efe485e960', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '55ecf1b1ead93e304d327afb43b107a5432916e6', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '9ca21d966567794f31fb0eb1fa170dc389b20e2a', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '4920685d64d277ac9c7f5a71c288057423fdf693', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '5a57bfe0a084c573899be36acd03e3a1e97a5d06', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = irPasswordValidatorCss;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";

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
        return (index.h("div", { key: '77000d2fe09e79d438dc47e6d80d5ee365762070', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '8d3cf1dd73948dceafb72d453a8960c160e57e0c', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '8c4c8b94291303c62b41898ffba0d7a355e299c3' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss;

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
//# sourceMappingURL=ir-password-validator.requirement-check.entry.cjs.js.map

//# sourceMappingURL=ir-password-validator_2.cjs.entry.js.map