import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.passwordValidationChange = createEvent(this, "passwordValidationChange", 7);
        /**
         * The password string to validate
         */
        this.password = '';
    }
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
        return (h("div", { key: '70a62a8bfc71e540828a88330627f3c60d722772', class: "m-0 p-0" }, h("requirement-check", { key: 'ae9e4c32559da10c52698a20ab7faadfa0aacf12', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '7ccf246bad58ee9a1df986ea6596bdd0349fb1af', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'a745c07282a965b57a65f1ed9e1339c3b58938c1', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '42716462f6eebe05a86a2aee36fb85f0279f19b7', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'd5ff36080db70e245f7dd0b62d5c6270b620eef7', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = IrPasswordValidatorStyle0;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
const RequirementCheckStyle0 = requirementCheckCss;

const RequirementCheck = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Whether this requirement has been satisfied (true/false).
         */
        this.isValid = false;
        /**
         * The requirement text to display (e.g. "At least one lowercase letter").
         */
        this.text = '';
    }
    render() {
        return (h("div", { key: '71f023de2d12e0f68939efbd3043f67cbb5bf8d1', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'a436f3de17a36879eec97e453c3aab74182f378b', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '09260d52b719c2082e9dcaf5f1f49ce21b592f69' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map