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
        return (index.h("div", { key: 'e4d9b623f03fd04948afc29f43d76bd802263087', class: "m-0 p-0" }, index.h("requirement-check", { key: 'b4c1c7fd91cac026a9cc3780160fee1e1c1cb119', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '71b59c2a65a12f2b786d4d9b088bcc734429c3b3', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '690c5b16a7dbe08a52b32de30b5d5f7980b95094', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: 'c34ee41d5da377c74cdb69279793ddc85ba1c452', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '1021a97ac599580ecf477f880bfd67431479da3d', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: 'f3e4aedb17f0686f64f1691ecf1d71d3ba7b78f8', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '4a3e94ba14c85162e11dd63b6e974364883ea8b9', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'cf4448e7ff3648988a04b77d1d1859fea5a7c12f' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
