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
        return (h("div", { key: '86c84147164e5352d8a4615ba56e25bba1bac50e', class: "m-0 p-0" }, h("requirement-check", { key: '5e71bd662bdedb8de653632f1c9f7edbb37a10a7', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'f2e2962101cfc1d3bd6dcbdc2e840d2109c45677', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '2a822ef31240ab86ff703e5fdfc5490cf847b512', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'f794bb7baa5663b0e9b5912266c5621867b8bf43', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'ee306345ac6b9a0a11164467d82e130162d3b41b', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'e91cde56977a9d6774fea29a60aa3177bf250f9c', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'b6be35e806f5492d4a2e6685872544cf96eda2c0', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'f12978d75791c084ef0c7a6d6cf92adae6cb1c8c' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
