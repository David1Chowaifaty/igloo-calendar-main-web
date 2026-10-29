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
        return (index.h("div", { key: 'a928f0a2435f924621f70bdd652a745d4eb753ea', class: "m-0 p-0" }, index.h("requirement-check", { key: '817b7033718675f64676f879868e58b3b7c945cf', isValid: this.validLength, text: t.t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), index.h("requirement-check", { key: '14897c54883718c9211a07d80c94261169af2115', isValid: this.hasUppercase, text: t.t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), index.h("requirement-check", { key: '5e4578f9528b9b434ce1b4594a18966cd447b445', isValid: this.hasLowercase, text: t.t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), index.h("requirement-check", { key: '990a18d0193fa4bce4ecb3c76429f26b704f2dc3', isValid: this.hasDigit, text: t.t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), index.h("requirement-check", { key: '9f0a312e3813ce72d49940b972149f6931dd0ce7', isValid: this.hasSpecialChar, text: t.t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
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
        return (index.h("div", { key: '0af6227ba763064fe0bd1b940d4593f012df1b97', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: 'c706cee566c885d9dddf808a9a972acfe7511efc', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: 'debbc8cd930895b26328e491dd3f865670530f9b' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
