import { r as registerInstance, c as createEvent, h } from './index-60982d00.js';

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
        return (h("div", { key: '29fe82e7dc23a5bb2164614d611cb6ef0375b46b', class: "m-0 p-0" }, h("requirement-check", { key: 'd563a380e71c819d93c8903e02c5f40569087d6c', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '2017a8bdbc48185131728e1ad397b779d8c25550', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '5f2ef1c2768ca5669b5abe9636af1e17ce6fd5a4', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '1ccb3e26b2a8f6d99d07552fc981b0f8e4b27fb9', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '9d1fb0379715f0c5df60a1d5a13c61a9c7e3eb96', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '48a3fd1f0dc3c4e9b908b365d09b44035cf13acb', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '7d1bdf50b712d4d9f14cd34ba661ebeef86b4728', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '4e69b294cbfc721e95c09477dadf4dfa18a26e4d' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map