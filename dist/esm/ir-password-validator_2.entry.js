import { r as registerInstance, h } from './index-jhiFt_tX.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The password string to validate
         */
        this.password = '';
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
        return (h("div", { key: '959845c86072b345d671037b874834c62fcd803a', class: "m-0 p-0" }, h("requirement-check", { key: 'e2dbb10f9af578a751c52c77371c25eeece0fc9e', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '54c2193f98c035532b7c80df8e2e2703d505cebc', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'd06707beeaa4e927b168e2a1b1285571f37fef3f', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '05b03708b478592d7819de4e2337d7a4010e151f', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '650e632a3fa5657c7e90b94efaad36f3ac91dcb4', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
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
        return (h("div", { key: 'd162f3f0f996d4c9a887a7d7c67e9ec559cb5f20', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '2eceebc42109fb484f4cf23a1a4e9ad2d1d75a29', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '5fd0a41f3027c6ccc976874399b2665039760662' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
//# sourceMappingURL=ir-password-validator.requirement-check.entry.js.map

//# sourceMappingURL=ir-password-validator_2.entry.js.map