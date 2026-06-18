import { r as registerInstance, c as createEvent, h } from './index-BvoylR5O.js';

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
        return (h("div", { key: 'a841491c4cc81375563aaca26288717698ecdd82', class: "m-0 p-0" }, h("requirement-check", { key: 'e357034a93ead8d5113583fa7ebacead52737bca', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'a35b8c27067d64c8a5b08b6fc5b6b30637760a44', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'db75ca8acd9801595e812df3a201c04f14c44a2c', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'c5613679f361a9e5e1423efac87f140f95bbc7af', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '33830ebd730df60d10859c413771e7d7252b9339', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '7c5456f89b729d191a9321f9ebf634aed50f8d3c', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'd1876093d1e7c8b03095036746efdb35378a6021', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '606330fa39e728bed278fbfca283e280fa23cde4' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
