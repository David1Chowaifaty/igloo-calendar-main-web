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
        return (index.h("div", { key: 'ec6cb50003855a6f1fbddbec9f44d020c7f979ca', class: "m-0 p-0" }, index.h("requirement-check", { key: '4a5f0f99ed37c2ccf2b04fd91fe4249bf2f64edb', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '81750768a6376d0b4de9af44f89105b429ad0940', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '25a53fc507ca9a44bc99067389102814ec742606', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '4598ea4dea1d28b7f98257dc1526dc587c732d33', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: 'b2aa2e34a8ec1b2c9f88aae5d449955b5c3b6111', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (index.h("div", { key: 'ecdc2d89f8627cd95f667b520b4033ac441e1d1e', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '33fe7e8239a6052d1b31055a89eb403fa309bd0b', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '78253e47823ab04e6768790253f030a8e7952166' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
