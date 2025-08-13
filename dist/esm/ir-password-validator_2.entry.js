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
        return (h("div", { key: '4a58433572d830a8b4c5d45c65df5cf8a01005b0', class: "m-0 p-0" }, h("requirement-check", { key: '2382e6c8a0ecc4b2b3afaad4693088d84aa670cc', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '6285cf8cbc42254410ae2e975fb8e405daf7d7fb', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'e01e4d54e15f2ec29559ae05ef21b69b6bfc3406', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '4bc6d8a4d75bcf981c0e9c2f2770aefc5047a302', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'f71855a87d5f449858c51a15165831f21a5801e9', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '3b21a9ac6d8c7003627b3f57269351bf34e5ab55', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '51bf49facde0d62e7e9f79efefddaca2ac534b18', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '52c8b0e782d8f9afdb4037929e1850b57c1a22d4' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map