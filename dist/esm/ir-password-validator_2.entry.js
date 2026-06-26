import { r as registerInstance, c as createEvent, h } from './index-D7D7fhZS.js';

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
        return (h("div", { key: 'd8df37476603cfc27971c6b28e8117dad68abe84', class: "m-0 p-0" }, h("requirement-check", { key: '2d2861735eff6eb3883eaabbc45bfbdb4b5c8d3a', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '6b741672dbd8564cfb35ab39fc5e03738465ba5d', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '4470e9da6fe16d4c143aca8d9f0d8b72391d3c72', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '9d28386277e49b6f38ce2a55a92384d90d37c08d', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '7a795dbbfaf4a7f4c6fc6b855a606d632af1bc85', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '91f225aaec476744f3b9d013468775490acdeb64', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '0fcb088666fda45cab4aa9caf64a0c20177f823b', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '3c608a591c516ca93c8caae59df528a365ef5a35' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
