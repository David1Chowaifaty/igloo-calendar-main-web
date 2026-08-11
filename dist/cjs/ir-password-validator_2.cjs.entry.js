'use strict';

var index = require('./index-CJa_TWt0.js');

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
        return (index.h("div", { key: 'ec0241a4467b17e162ee1604959c3fb2e7b16890', class: "m-0 p-0" }, index.h("requirement-check", { key: 'd765d0e1a178acfb2ab52d8219ce13c3a1ea1eb7', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: 'b7aff8e9e83903012605d9702b1126fcb25e0eb8', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'd202c13da98aa66c7abfa01bfac6019d381d3aa9', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: 'e15d0587e749f8ffbf7f8d70239d0662b928171b', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '6fab1ef0e34ff853ff71609e5ef7f0dfabff75c8', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '10bc9db24a03ee80469bb7ed01f7598b6b74d5bf', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'e807bf7d3ed0e01a41ef1feaec786636f27663bf', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '7851a089b5f96c083e84d866e38822e40352aff5' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
