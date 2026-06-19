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
        return (index.h("div", { key: 'ac6ec39627092b2427c5b3398a89b63af69ffffe', class: "m-0 p-0" }, index.h("requirement-check", { key: 'a7169581c5ed4abbfd19e25a62a303ccded3164d', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: 'ed43f70e543cc35a52236857342f805164f54d49', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '5fcc7c2b7b2c47a8a9fcaf0e2e0ab6fcdc6565ba', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '6d6e059ac82481acd744f8db42e4ffd7cc0e5e7b', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: 'a827463a7aa999c6e8ed5d12a055dcb912e88748', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '4dae2680bdc30cdbdad0b58d4f01447f7037f391', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '1aa51c3cdecd902ee2aac7ece83e709fc339e3f8', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '8e2e9088334d05fc5c0e3d4e37359b691840a5b9' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
