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
        return (h("div", { key: '61f01138f5937355d0361f4100cb4221cd85f37e', class: "m-0 p-0" }, h("requirement-check", { key: '550c35a249b74de4a61ffd3bbfc81dfd328a9f98', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '55f50a544b45325c094803bfd1ba807a316054c7', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '052d3cfcf7e3b272cf930b647b133ca24dab9b7c', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '8c69af6d7f3723ce5b569b7d6e3da1940298b0a6', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '745dcbf1d0085be8bd7005a0b38262d451f56f2e', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '66aaa6a7c4bf1f76856aed4a6c28037ac83ce6bb', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'b079ad819e282bc89f881f91f34827a3e2f5bb64', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '7cede992a90816dc18c7a3a8b0b1d76f18ddf783' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
