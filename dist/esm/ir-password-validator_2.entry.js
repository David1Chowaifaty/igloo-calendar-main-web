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
        return (h("div", { key: '805314ae66f8bb01a30fa13c6cbe475c4e5d8362', class: "m-0 p-0" }, h("requirement-check", { key: 'cca2a7ff0767fc0f3a35d830c212f2fc99a3e122', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '25d992778ceb673db22021f76f560643a454c949', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '4bcaf320b804d0645066fe8c5984fb74a54719ea', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '4f75be1b1f6f90e714e72445efa4c11b6bc53ef6', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'd3abd525245d71aafda4ac55ca9ce0e1d3dfb908', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '82cb3f4a9275245e5a7fbe188df4f59dafb14640', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '7469b7298ef0d874bf63e94e76bbe58fea138597', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '12a578ae2b71f7a5ed8f9210ef7ca9edbed6ded1' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map