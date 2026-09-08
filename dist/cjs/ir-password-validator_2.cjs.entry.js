'use strict';

var index = require('./index-P5Mginch.js');

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
        return (index.h("div", { key: 'a4455c43e76282a1045bfab88749cdedb72155a3', class: "m-0 p-0" }, index.h("requirement-check", { key: '0364663c15e1110f5a6697e2a922b1f90b6163af', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '32af79810dadf70ff09c40e0db41794d3e4d8086', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '285197fb57acc20ee9249386ad31591c06560baa', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '74b12d0cd2af36788bd3b2c18770bc1529dc507e', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '6f62e9fc0f15e52fb89469a9baa09ced1a545620', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: 'b3ba6d6c452a395289b17bcbcd6aad09d5d011a8', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '4e1c862c31d07da13e2ef5024a34646a5c4af4e7', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '8fa017e5ae8714ee13ac94a0889e95860dbffaa3' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
