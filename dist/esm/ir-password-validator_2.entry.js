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
        return (h("div", { key: '24f4efe1cf4535fcb0865f8b2b4a563f3387a7c8', class: "m-0 p-0" }, h("requirement-check", { key: 'c085a79023cb81c6c6de4097736607b7cba3ecfa', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '282d8c3fe4c3a49562b7a018b54f2f1c033fec26', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '333656c7dacf0bc60b52c048d51ced0babde1269', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '1fa59a4984db382b687489bcfa06600800853870', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '9d676b6297093793dc6a35e5e8d8979f9e4bbd76', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '54cd1db0ebd952c43ce49ab58edc893ccc9fa06c', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'aa9fad7578ceed7249a15b054111cda8831fd204', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '828e9afbc108d34f1b0667df7ea75a85d3f2cced' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
