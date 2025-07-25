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
        return (h("div", { key: '488e69fb575c57690c7a691603af9bb34afe78f1', class: "m-0 p-0" }, h("requirement-check", { key: '2379afeaef7a5e07b8f9968bebc1b84457ef7dec', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '6646a7e44b1a0f038ca6a02f460b3a8fcc3cbf98', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'd46591dabdf2dcd6b77275029adc52f4728f19fb', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'b3f6f9dc80c635a811f1a70d5497b06c41e56f8c', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'cc23060bb3c89be01dd6e2236cd70131c58da6f5', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'f8108746cde5f4e05bd962ba25a53ffc2affceb6', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '04312466869fe289dc35de6d8c9eba3d34d17b33', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '10a873a95a8885114486c5398918b6f021c451ed' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map