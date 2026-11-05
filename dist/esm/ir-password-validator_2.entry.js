import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

const irPasswordValidatorCss = () => `.sc-ir-password-validator-h{display:block}`;

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.passwordValidationChange = createEvent(this, "passwordValidationChange");
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
        return (h("div", { key: 'e34df600354c141ccc8a2e5ef46b6467ae7771e8', class: "m-0 p-0" }, h("requirement-check", { key: 'd360673bf7316849ff05b5a658d34ddbfee13bd2', isValid: this.validLength, text: t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), h("requirement-check", { key: 'caf9855945b1b7debf4222c314e45b9219192ecb', isValid: this.hasUppercase, text: t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), h("requirement-check", { key: '7a889b9733a00a0a7210f5051ff8fa94cd5850f2', isValid: this.hasLowercase, text: t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), h("requirement-check", { key: '72163a0ea115bd168a4f6f8671c9aa16390d8913', isValid: this.hasDigit, text: t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), h("requirement-check", { key: '1e9638539615a5b1d2c168b8a3ffa512f4c2ecbb', isValid: this.hasSpecialChar, text: t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
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
        registerInstance(this, hostRef);
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
        return (h("div", { key: '71f1c94ebd0e4fe8a467aa9174ac41e2de0b7027', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '0354ab26c9d5fd7b60a215bef008935586ce5bc1', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '53ebb9e0ea2b83e2acde5e521954f5c64a97599f' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
