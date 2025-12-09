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
        return (h("div", { key: 'e4175299af360724e6ad2cd76347fcf2ef19354b', class: "m-0 p-0" }, h("requirement-check", { key: '180b7cb425398ca58a6192f832ba339a0d97a9bd', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '216f054d6211e023dc1c42714c9f30cc94e90b15', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '6c3945ef5bd2abeea25bd53e3c04529a85803a4d', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '975824f5b690bf2d33001b342b563b1aa754a1bf', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '3a92adb05da6a670bf368c7599244c7ca4828da6', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '06aedf748972b11471b2c216cf0632de7f968d35', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '85e089c9381e5479a4c70bf161d7d8b0f23a89b5', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '5dd63e230e41011025a92aaad8c7db809cff64aa' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map