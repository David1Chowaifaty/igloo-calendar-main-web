'use strict';

var index = require('./index-Bp205iz4.js');

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
        return (index.h("div", { key: '7332cc03a568cce9b77b625d4b34f91307cc6ac7', class: "m-0 p-0" }, index.h("requirement-check", { key: '4a1fb95725298dc50a2c6d66f77db5b96b3506f4', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '0ecd56504bcb75ce540e480d9a40b9195499422c', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '0725a560c0f17f0a01f57f9f48fbe4e23236c154', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '6290339c9efa3ee5b2697fbf7da5a23e7e2e34ab', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '2709a7e782eeebaf2d26b9fac442606642add9d6', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '49c2fc1eb90517ec4fa4d20ba69bc27320440cc1', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '86cd50b7656f5d6a9c3b39e523952404f8dd2ed0', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '4a478611d7e8d5f5fca4ffd52c222e4b730e3710' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
