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
        return (h("div", { key: 'b7fd875fdd6812c722959c996c8c7f0840c88ed8', class: "m-0 p-0" }, h("requirement-check", { key: 'cc78f884f36837c530559b2113f3d00cf6f23f17', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '3eff9cab68edd5b94d3e8f3908815016d5489841', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'b315ea86472eae5c967bebd683d04e9c6c03f135', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'e9d8ec3d30e5faa993cdce48d4fed896b03af990', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'e1bff160b8c1045f571c2c89c6e80dd7a23b531f', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '1d730010baee840330bc22c9383e9854473bf836', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'b6d115d50eb0247683e5ceab8f6ba026953f833f', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'a3bdb0d0624788ee2512909c97671f44e6130265' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map