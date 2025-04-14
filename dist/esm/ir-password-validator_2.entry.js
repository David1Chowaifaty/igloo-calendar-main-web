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
        return (h("div", { key: '9b5f8a0bb646206b3157cb0f612527e21c7d183a', class: "m-0 p-0" }, h("requirement-check", { key: '65f7e8cbceb5d17ba488bfd6a8ef2afc600ee93b', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '8b7696b933865eff8713101046c409456edbd978', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '148ea22b97b49aeb8a6f8d7b015c630891ec4942', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '5d21d1cdfefe4e25a11a81896e4ea7f9904d38f5', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '1e205e0ffef26905771957d01e6455ef4f61e45c', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '3d908abd2cbdc6c19819b87ea7300c85ddd5e81c', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'cbf7ac693e874157eb38445294654694fcc808e0', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'a0254d322b4ae74cf52ed345f7705c156d49ad01' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map