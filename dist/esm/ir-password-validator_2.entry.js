import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.passwordValidationChange = createEvent(this, "passwordValidationChange", 7);
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
        return (h("div", { key: '85f5bc1794ea048f001ed75b36bf36cb5c1c43b4', class: "m-0 p-0" }, h("requirement-check", { key: 'c914939f70fb4e0777689574e7c70bffcaaf13ba', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '5ac9c1308e0ad3699e740253414d394ea968f9b7', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '3f7f7ef7c21e20cebb23ecb756cc435139d0b872', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '24ef5ab45f2854dfb3d28173a15f4eb4fd3ffe0d', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'ff66c441781d35bced8970dcd8f8b5d80e62a854', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'f2a905795718e8256bf3fb6a86bf7792eb254acb', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '4651c22d18a979125fd31a256f5594b421a9fa42', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '245de43f82a8400a4e49155cc10a52e902ebb86c' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map