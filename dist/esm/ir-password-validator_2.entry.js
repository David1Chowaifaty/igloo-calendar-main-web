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
        return (h("div", { key: '9b0445c667f7596063ae7d5939b65a3df9d3ea64', class: "m-0 p-0" }, h("requirement-check", { key: 'f4bd75a04585c3d1a46e26b2eea5c83963a8219f', isValid: this.validLength, text: t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), h("requirement-check", { key: '560fb0dfbe78289d6101923b40951f62d445d953', isValid: this.hasUppercase, text: t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), h("requirement-check", { key: '8bb16a675e94b2fbd42c12eba6a4206edf1c57d2', isValid: this.hasLowercase, text: t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), h("requirement-check", { key: '962e8974e211e3337c7190d727883a9f860f1546', isValid: this.hasDigit, text: t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), h("requirement-check", { key: 'ff465b1ea307bf7920a3424d58010db9e1d2ddbd', isValid: this.hasSpecialChar, text: t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
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
        return (h("div", { key: 'baa0341d75149621ed8ff7d7d208b4360ed4da4b', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'cf3a73986f1010bfe5a78a3d69edb087fb168833', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '9cb863af2d1b29cfb67c558cd861804af3d85dc2' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
