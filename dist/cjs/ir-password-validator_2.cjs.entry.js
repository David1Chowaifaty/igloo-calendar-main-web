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
        return (index.h("div", { key: 'd94b04ce4f9401c4203cdd5083877ed60747419d', class: "m-0 p-0" }, index.h("requirement-check", { key: '0c56db4a5699da708fe9f9d31280ee3355be9523', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '694c7c3f71fe52b770e46037d912b50949e19ee3', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '93fe4cb83cd589f917ccf4959a13642e6592b43d', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '5710a6eaf9c759301eb2c790d4f86ac5dc8ac15f', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '79ffa331da9c17399dd10908322a4f900a624ad0', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: '529e45ca6aea537ed22fd61067242606d526cdc9', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '292b13749f4495ef053ccb0faf26723a9c20277e', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '4aaa464d06ca6723fdf01d417fe3d05987773cdc' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
