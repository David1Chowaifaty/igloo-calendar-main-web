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
        return (h("div", { key: 'f1e87a7a3f317d970ef262a8985d74521eb67c08', class: "m-0 p-0" }, h("requirement-check", { key: 'c4d635eab0ddd9e829d1e498b399f0e953de1028', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'db5d3255955739528c080ac4e56d162b744da811', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'dd5d40429f6740ffdc6f4c6ee18e6b84627d80ac', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'cc7823e4437de3a3285ae242705318135549a8c6', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'f06b303443367e9596d314a90813aaef1092a770', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: 'dff6743d3c4879e0a00a4e65536ce0ea66057b0b', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'c00d76f95ca597508e369c1e4e9f6a267acc2d40', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '0eb4b222c0ab84f637012fd3d928ae327668ca9d' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map