import { r as registerInstance, c as createEvent, h } from './index-b3dce66a.js';

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
        return (h("div", { key: 'db35c7c2bb8a2215be943403adfabf4b2784cb5d', class: "m-0 p-0" }, h("requirement-check", { key: '4e3d92ca9d77475e151462be70de8d4d577be997', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'f356a848f0580f48cefafa39fadf31f95783caa1', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'c70281e7946654c2998677566f9120e0951f02bd', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '8e51527f358697f3e69751a004b41a958351e82d', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '44ea929be2690665646bdf5e9ca66e50ab3288ca', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '8f3135bf92973691c85e0f4f9db86c0c563b189c', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '0faef90e86e65916d216b7d811d4840a3406692e', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'af9181c0aeb51487a2112a889d940689d828cbff' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map