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
        return (h("div", { key: 'ce81bcfbdb7071d9f7a4a4d38001b4d82d9c12b6', class: "m-0 p-0" }, h("requirement-check", { key: '3bf656c609fc94cd210f0c562158c8523223acd7', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '6772d85b1379c1ffbc047dbec87c9a4191d111a6', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'a4a5271dbe6085353b40fba553af80edc2719c51', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '6b8d24ad3cb6090778276b8f00fb21e17b36a7de', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'acd938d62e9acdc85d2fefa4d04bfdda5284fb50', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'c401899942f3209238cba36445bbcc0e34c1c8a9', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'd8f7d770e093ad6dd1f4c8262b0621f826dddbfa', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'f3837149d724f3319b941d65a323e6ed8721235d' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map