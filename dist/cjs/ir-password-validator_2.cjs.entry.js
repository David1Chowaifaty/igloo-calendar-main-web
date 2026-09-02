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
        return (index.h("div", { key: 'b11e3fd9c0f840d4ac4af13d29c4fae2e08e3e89', class: "m-0 p-0" }, index.h("requirement-check", { key: '71e41d338746095cc7e6229bb8eb249cb36bfa4f', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '20fe6227446b602af7331a58ebb135c76021c5a9', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '534fed74850aa9d611af90f42f1a60ac51992098', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '3d1f7151c37708f529c728d409ba80e596700b75', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '9eaeb293f1f147a77196843fb922a06ab6926575', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: 'cef15ee452e61814e064a8dfbb72fc9b94296877', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '77b44cac00bb3dc02e461e2f17023c1118a639e5', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'ca98210eae3a6e5733d0d2faea2a21171b228cb5' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
