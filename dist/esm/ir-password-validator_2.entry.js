import { r as registerInstance, c as createEvent, h } from './index-C63jMJYk.js';

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
        return (h("div", { key: '6eac869238a7d0666a1c0831ffa5864143a0888e', class: "m-0 p-0" }, h("requirement-check", { key: '076ff43dc6c1abf88701c0b1dbca1483e9cb0ce4', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '3b5f3a639c5820fc78127cc6b5cd412e60835bb0', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '88dd2c8a64f0806cc1ab27964564b9743656328e', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '93c9844dfbb975a3ae97023349bbbc182a34be1e', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'b5d06a5d207abe8bfd49ec9fc134cad404c7abd3', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '07bb7af105cda1616e02ee4384d5227f3a5c5ba6', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'b6dc0551437b955af4fb1faa3af1eac8c469244e', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '9f2717658c12c2ab21297173961902a0e2627636' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
