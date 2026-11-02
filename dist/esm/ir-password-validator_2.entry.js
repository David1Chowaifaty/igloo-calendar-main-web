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
        return (h("div", { key: 'ed6764bc15b882de6c76f1286ab8bb6920912542', class: "m-0 p-0" }, h("requirement-check", { key: '4929edd0106b4d9fbe1d3b949f8ef02cc7797c0f', isValid: this.validLength, text: t('Lcz_Minimum8Characters', { fallback: 'Minimum 8 characters' }) }), h("requirement-check", { key: 'b9ba8e745b7b66516f2d0164adcea533841aab4e', isValid: this.hasUppercase, text: t('Lcz_AtLeastOneUppercaseLetter', { fallback: 'At least one uppercase letter' }) }), h("requirement-check", { key: '2f25e6ce3b04bb6a6e310dc3ee1721b54ea7358c', isValid: this.hasLowercase, text: t('Lcz_AtLeastOneLowercaseLetter', { fallback: 'At least one lowercase letter' }) }), h("requirement-check", { key: 'b93a2bf737091ebc04b3de268fdf8cef34df078b', isValid: this.hasDigit, text: t('Lcz_AtLeastOneDigit', { fallback: 'At least one digit' }) }), h("requirement-check", { key: 'ef84b4e84e5bb9395296a36c5527c79333111810', isValid: this.hasSpecialChar, text: t('Lcz_AtLeastOneSpecialCharacter', { fallback: 'At least one special character' }) })));
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
        return (h("div", { key: '6247f1c4e94f412c95804e762d7b475498aa27d7', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'e5365880b802743c0ddce16928cd5f9c06b82666', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '4076c815853a5e5273d868d908ad552069e760fd' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
