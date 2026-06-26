'use strict';

var index = require('./index-DYQrLNin.js');

const irPasswordValidatorCss = () => `.sc-ir-password-validator-h{display:block}`;

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.passwordValidationChange = index.createEvent(this, "passwordValidationChange");
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
        return (index.h("div", { key: 'c724670831bb6a12080d1a529f2e2d6004f596c9', class: "m-0 p-0" }, index.h("requirement-check", { key: '15e476743ac45af38943710042d8232af47d1eb2', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '582e65f5c96c0b564bc160e627b94df11877b502', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '14104c2476822221b31eefff7f8c2a2fa1146fac', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '9fd50eb04cb1b71daf7ca88e618f4837bbf676bc', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '020e28a55658e9bc9be625e1a9fa9c83e0bcd610', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": [{
                "handlePasswordChange": 0
            }]
    }; }
};
IrPasswordValidator.style = irPasswordValidatorCss();

const requirementCheckCss = () => `.sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--wa-color-success-fill-loud, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}`;

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
        return (index.h("div", { key: '74b380ff13e5829d44e8a4bda20ada4281a60f9f', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '755ac94a9ddbb1c6df6582651f7925c237bd4d3b', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'dd6f1624487af79ebd942681b23abb98d16291f0' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
