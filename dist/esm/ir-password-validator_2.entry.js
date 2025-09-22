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
        return (h("div", { key: 'b5086159c01f3660c3aaf389daada5490a80d069', class: "m-0 p-0" }, h("requirement-check", { key: '9796059d319d5175b4b8257e2bec0275ae111600', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '25b0871c51a18c0c0869a1a6968f7c20cbdb68cc', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '1ee478c9b8b4856b5591f1f685080b12fd48a359', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '8a61c8cbe061c111825b4ee6469389bf1983907d', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'd5a2fa13145802a955b5ffbccbfa5115089753fa', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '1aa881b448c64f15b67725748cee3a5cf49c0eb0', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '900c50896c98046c2213946e17ad1f31d4563053', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '0940e27dfc5b4a044cb0b86641ad3f2f2de6c24f' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map