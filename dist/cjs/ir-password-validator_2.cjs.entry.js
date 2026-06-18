'use strict';

var index = require('./index-CJ0kc5p1.js');

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
        return (index.h("div", { key: '322c71bbb42f6928f343307a7cbf73d4143b5c6b', class: "m-0 p-0" }, index.h("requirement-check", { key: '93a5468b5a2e69ccacad63b43826add405b7153a', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '471b5c0d5dc1f8367af5bd97788b710b5cc6babe', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '228cb0dc52f4c9a999612e51181235b50967717c', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '37eebd6a4c8407f7d43942ad276c232b1d85767f', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '1a039d137abab2f06443d02ac0101787bbcc6f88', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '5cec2db19fe8770700a4593d5541f38903eb2b38', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'e5b2e3052ce2626718db41a568352bfb95deb04a', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '5db91f9c5e5ec1a7620cda392777913ce755537a' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
