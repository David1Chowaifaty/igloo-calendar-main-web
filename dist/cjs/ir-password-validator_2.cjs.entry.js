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
        return (index.h("div", { key: 'eba5d29a99771a3372a697bd8a7c5d9ba4307523', class: "m-0 p-0" }, index.h("requirement-check", { key: '10fbe23111bfca011296c1e1f814404f0e35e2d4', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '37c69c3215c65fbb532ce0b6918bef69a93524b1', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: 'baa739c844c3a272f46cb78db3ec3d0030c10197', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: 'f1abcb25b63decae2e2cad63530bdef2d880a8d5', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '985eefe2cdf2dee04fce81f572f8d41c37444cb1', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '696170cef77a0285ac7edc1548fab4d301eff6de', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '0fa2a40c4ada28ca6d4ad942b197440197ae2322', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'c122182c09af65eced57b979e571a2605b1eed3a' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
