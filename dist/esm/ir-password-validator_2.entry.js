import { r as registerInstance, c as createEvent, h } from './index-b3dce66a.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

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
        return (h("div", { key: 'c1e3ebd388c521eb44a2f1ec948c5ae0fd231fb8', class: "m-0 p-0" }, h("requirement-check", { key: 'b30f3544332c119f1647e0534b2d0eeb57cd30ee', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'ad471393e9f9498154320a48fd390ddc749c5b91', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '211270ca68b5bbdbe1342c742dad672094a7b704', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: '1ffe0678410a68f477a3c24d01fafc3adb1631b0', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '98dbfb886145a2a9386fa54fde5114722d1962fe', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'fe4150cbe9ab67071d0367716ae461737d2d7f0b', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '5158c454eed000823522cf4e3f1c5b41332f1fcc', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '48be927ae8592c789b632b447b347276a8121838' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map