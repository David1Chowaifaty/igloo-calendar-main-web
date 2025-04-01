import { r as registerInstance, c as createEvent, h } from './index-ChgcZQN7.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.passwordValidationChange = createEvent(this, "passwordValidationChange");
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
        return (h("div", { key: '69db8b081b5eec824c55bd05f542bd0ceba22d85', class: "m-0 p-0" }, h("requirement-check", { key: '480e656f7eba280005fe80fdd4747ea303e27bbc', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'de8ceb5bd48e2f29c1cf233a8140029a2347e327', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'f4c44e0aaed0ef137f7f922a4052656b5f74316a', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '58444de81823cd489c61a9256cad0858b94e7f06', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '962e012a87a705ef6f8e6bf5aa662b82b89a4a17', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
    static get watchers() { return {
        "password": ["handlePasswordChange"]
    }; }
};
IrPasswordValidator.style = irPasswordValidatorCss;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";

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
        return (h("div", { key: '1bdb48fb0df356b4911c2b9b30ff4a43678b2f92', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'd79f3715c3966f824bc53d4b33f60ca4874018f5', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'e8269a42d9059632c558f4250f0332cf7a444678' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
//# sourceMappingURL=ir-password-validator.requirement-check.entry.js.map

//# sourceMappingURL=ir-password-validator_2.entry.js.map