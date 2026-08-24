'use strict';

var index = require('./index-DgHWBwDV.js');

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
        return (index.h("div", { key: '93a9c79f7eaf47657082006b3af37dd315e12564', class: "m-0 p-0" }, index.h("requirement-check", { key: 'b70dd0552502769388b8c9cb8036f4e6bd515500', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: 'e7cfab6c3479bf6903742f70c5167d36a6889d20', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'b34138da69b0248c30d3c19eea2947f2f3fa7ef1', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '1db10918e22ab98d036863ff4bebeaf2be2b9bf3', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '8287c926843004106f74958a0b8959b639c7401d', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: 'ffd1f0abd50c4e9267790b159a4a49e882ece87d', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'f4df77c49b2fdf07d6a0cc88e9a56d99fddb6fbc', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '96fc1b6593f3960d5083b4228513e3806f7dec80' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
