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
        return (index.h("div", { key: '77e981e3a4ffffd4b842a4581f7214d55f17cd1e', class: "m-0 p-0" }, index.h("requirement-check", { key: '4f75518c086f4fbad4d10d65bb73a74bd1deb1d9', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '1fc436e4bce5cae51f879223217439d8051d6749', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'f0b2f4b8b296cb931a3087c2c754816490de8172', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: 'db709819cd8822b1952269135994676fa72e609b', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: 'a89918c6558552bbe655a7a60932f998bc3a3c8a', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '912c803cd4828a6ab91317a96c0e29221758f309', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'aac2c5af44a3ca01ca7fe838239417b175875bdd', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '647bd7da5c5e042b8e940712d5452a6a82d04595' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
