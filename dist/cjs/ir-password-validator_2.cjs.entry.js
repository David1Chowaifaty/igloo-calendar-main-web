'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-BqKJTQbm.js');
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
        return (index.h("div", { key: '7ac206dde9565e656f0f9f6d60bc31a1271db104', class: "m-0 p-0" }, index.h("requirement-check", { key: 'af95bc0a8afc102533090530e40645147544fd2e', isValid: this.validLength, text: t.t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), index.h("requirement-check", { key: '2fa5a3a8b277d357437f0ec326cfcdaa7b7fbf5e', isValid: this.hasUppercase, text: t.t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), index.h("requirement-check", { key: '500be85e611ccaee44ef9ab893204af483dc5c6f', isValid: this.hasLowercase, text: t.t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), index.h("requirement-check", { key: '154e781ce08a8ba2b6235dddbaae858111f57e1e', isValid: this.hasDigit, text: t.t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), index.h("requirement-check", { key: 'd10ba3978a54b3b28ec571a390c5fae1672d9140', isValid: this.hasSpecialChar, text: t.t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
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
        return (index.h("div", { key: '4260204f5d8d905f94971c0c85a9fa2ee121fe23', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '9dff7e9fbb85ed0b1e8ef9296f68c2b68a3675ba', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'a59af5712a4cb617a3b0ecab15511e6893616795' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
