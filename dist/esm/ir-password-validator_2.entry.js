import { r as registerInstance, c as createEvent, h } from './index-0Di74WDd.js';

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
        return (h("div", { key: '2778197ca4b94749c0c585a60d60c922469986d7', class: "m-0 p-0" }, h("requirement-check", { key: '6242c64cee943cbbee248a74d9a95e6acbdc5b1d', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '58a415e3d880c8d3f8c4299654b8050066e3abf5', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '33f85bb74619ec4aba430258727f58a7e1545499', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '50d3fb29b0f1adce8694726f1434483390c6d2c5', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '911e40efb9118c024c1466343f810b4729b57573', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '3fc6355f549a55d6de01108774894c02f4c96474', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'c5f2f93b7a269704fbf254623ccde9714d4c9fa9', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'ffe2d4faa0b7d59bdfcbf6a84a7e717c1b6076f6' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
