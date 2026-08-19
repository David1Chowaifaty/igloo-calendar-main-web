import { r as registerInstance, c as createEvent, h } from './index-Kqbk9HdW.js';

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
        return (h("div", { key: '638096b4f9a267c6ce4e2c151e6b09d7ebfff571', class: "m-0 p-0" }, h("requirement-check", { key: '9f01861ac168c155044ad76c4cabff107f4fa92d', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '721dfdc457c42261cf900ed7c4a97eab6e180a09', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '5c47cdeecd789f360c3415302cb3ee8e5c178044', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '88a4a4ecf4b9992e704084385da379ce6acdfbf7', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'e507ef6c1e055795e5497a70526fb57f0cd91bb7', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'f7e6682caa43aa0cb5da62bd90d5a54c03c6b896', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '52e62f4fe6d0ff1d578ef2eac8240e742b7c458e', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'ef246632d87dcb8ab16d0d382fe566dbdc55da76' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
