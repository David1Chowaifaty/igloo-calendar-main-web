import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";

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
        return (h("div", { key: '3adf54a9ddad29f8a34a0891a3ea51605c59f516', class: "m-0 p-0" }, h("requirement-check", { key: 'dde886794bbacf298851c105b2fd54e78fd873b3', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'a8bb2e842cd7dd5ef3f37687425208832ac51381', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '9dc0e54cc064e9dd9de846b494e95c76b69480de', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '7ce3118a42807387e4853c2bc387cb3b20aa7b37', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '6d16c78eafffd73419ae11467b469889d7961f4c', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = irPasswordValidatorCss;

export { IrPasswordValidator as ir_password_validator };

//# sourceMappingURL=ir-password-validator.entry.js.map