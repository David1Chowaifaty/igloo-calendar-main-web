'use strict';

var index = require('./index-Du1V06mp.js');

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
        return (index.h("div", { key: '618a55371a32b9339224531eb7d0e4dc96c54b30', class: "m-0 p-0" }, index.h("requirement-check", { key: '2b181fc6885e4abf2adb845bb02cc382bc9e5a9e', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '87f46edcd2d2835e6a961a9bc3b4fbc6aadb0cfa', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'd6f2214ca54b4a6fa397f0b6de9c6e48a94af2b8', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '5ac4e511080379a711079addedd7526efed33289', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: 'd6173488640dc64dbe6221342dc5e6f83e1e32c3', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: 'f24152d91db0341c6ddcd1e0a99900c00667fcc7', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '5abbfe2bb29ea31e450e04889845fa5daa76c942', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '33722a5ff8bd6aaf0e61b7d3bf494569888dffa6' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
