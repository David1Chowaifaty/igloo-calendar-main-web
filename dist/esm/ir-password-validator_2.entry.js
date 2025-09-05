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
        return (h("div", { key: '3833f0833bba308a9f411ab96c0c71766645b741', class: "m-0 p-0" }, h("requirement-check", { key: '5b79cfb35dc75aa0085a289e0ffa4a0330157229', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '7f821477b72769b17d902449ed24ddb3937c0791', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '806d92b2ef47b446240b9b63c3eec691e5c3097c', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'f3cc72853249cc45ab5d00d41d11d1242988d518', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '085bf3ab01956126b1ff5d6b4f1afa6963a1254c', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'fa0add413634a0504603aafb31f49ce0e8228b5a', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'aa925977559a9c48d4884390e03be64c4bc86f38', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'c3eacaf6f40007284e34d4f70965a924359043c6' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map