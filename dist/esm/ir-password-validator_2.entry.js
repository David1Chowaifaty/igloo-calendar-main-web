import { r as registerInstance, c as createEvent, h } from './index-7e96440e.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.passwordValidationChange = createEvent(this, "passwordValidationChange", 7);
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
        return (h("div", { key: '0789dc1f1c8497ae9239da3dae23720a6d8ae4ad', class: "m-0 p-0" }, h("requirement-check", { key: '5792c2a557b657598033d9c72792e946979abed4', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'c649e98a61ff3ddfb27ee46faa6ada6d643dc22a', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '1ed6fb748797438f8cd7e1773e98bc61f21559c9', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '753947af102d48cd270d7914930c9eecdb74199f', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'e8ca3c7ecc95ea95f1a00a4ff8ef9be47eb5b6ec', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = IrPasswordValidatorStyle0;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--wa-color-success-fill-loud, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
const RequirementCheckStyle0 = requirementCheckCss;

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
        return (h("div", { key: '0ef8303e35ffbd01ed6d493aea29a2f5ecff8dd5', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '95e5a8bedd505afd92f8607252e263c15328d3c6', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '1a628e26fd79327f503152c72a918c843c13b0b4' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map