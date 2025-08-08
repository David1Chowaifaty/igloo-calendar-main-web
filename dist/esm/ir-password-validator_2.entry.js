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
        return (h("div", { key: 'f12330c410935df6dd6c89775d579509f4f44946', class: "m-0 p-0" }, h("requirement-check", { key: '5ae045089749414a0f8aa86a93867129fc68253f', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '6a66bea8cb779bf519cb909b15635649f5d634d3', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '22106444ec66265301f01a2738ba8c729c8048ff', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '0418c44550744905b713474d7657cecb9c00abd1', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'bf6321aac17e3c1bb43be8430455f0fff738dba9', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'cb5c83d70c132c1c49a4f45a7926ef492c751288', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '4beb4cc5f5ef8aa2c7820bdd8355b06da12e5395', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'ca5a731d6ab2b8bd2b9119bf3502b7cee11b9433' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map