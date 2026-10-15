'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');

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
        return (index.h("div", { key: 'f939583bba60d9bcd59d61e3cb52877f611240b1', class: "m-0 p-0" }, index.h("requirement-check", { key: '2af4670a96c89beb8c3700f0a24781777cd93544', isValid: this.validLength, text: t.t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), index.h("requirement-check", { key: '3aea70e25990b6b842400c5b5aa24458c6d3cb35', isValid: this.hasUppercase, text: t.t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), index.h("requirement-check", { key: '68584b174410604d5899eaec17f2faa7b65c6d26', isValid: this.hasLowercase, text: t.t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), index.h("requirement-check", { key: '7bfc4a93e1fdb249ff91b0347d21deaad17bb141', isValid: this.hasDigit, text: t.t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), index.h("requirement-check", { key: '09548993f1df615e596b430c0d5d27666dc7fee7', isValid: this.hasSpecialChar, text: t.t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
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
        return (index.h("div", { key: '99c0cd61341f1e8d399c6a472d91537cd437b7e3', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'ad0e649e4cdac5674a9e69f7c9a6da00f99f16e7', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '632f2db80b1497477ac8cce9adddb2b6d45ee570' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
