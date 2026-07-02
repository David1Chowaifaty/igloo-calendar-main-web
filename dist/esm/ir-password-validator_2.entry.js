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
        return (h("div", { key: 'ad1a287bab3294aeb8f8412fed08ede4f2b0805c', class: "m-0 p-0" }, h("requirement-check", { key: '76172ad9c7dad3525fbcc6d38130039ba5ecfb44', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'ef88b20fe38258d6781f5b85c75c31c7fc8147df', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '0cd142bd26113629cfb09513a28d0a9e0bd46378', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '0fcdefe049143adea7b8f42688e19328d7383266', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'f88392b16b7f3c45b9635ffd651c90027d0bb508', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '7f8cb7ba807f19680cbe279efe63ee58f078da6c', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '6184d6326e75083a87cf86c808c8f686bd4e87f0', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'a60a780c538d4b8a5e7ce14a0cd9cc40b0139815' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
