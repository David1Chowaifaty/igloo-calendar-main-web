'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-CyRK1btk.js');
require('./locales.store-BMTss6fG.js');

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
        return (index.h("div", { key: 'fc242e5dd20b3e1eba274273b527f6bc5b958045', class: "m-0 p-0" }, index.h("requirement-check", { key: '10e22e05d0381c72b147eef39207c910c54275be', isValid: this.validLength, text: t.t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), index.h("requirement-check", { key: '7d81bc82cf5013a35661fc63636a520149a594a2', isValid: this.hasUppercase, text: t.t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), index.h("requirement-check", { key: '9489fe72e1e066755a37dc7bc0ca5a8f115f9f65', isValid: this.hasLowercase, text: t.t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), index.h("requirement-check", { key: 'aa71d73602ef1446b70ea5b29a74f720d353f190', isValid: this.hasDigit, text: t.t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), index.h("requirement-check", { key: '85509cf0862073a5ea83c230eb26f0f7f306fc61', isValid: this.hasSpecialChar, text: t.t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
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
        return (index.h("div", { key: 'd25087e0b31d750062767ee17028391291904bf4', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '08620cc92351c0442530b34c2350bd1225c4f891', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '5f6bf4abb035ecbece8d5f556a94861b8b0662db' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
