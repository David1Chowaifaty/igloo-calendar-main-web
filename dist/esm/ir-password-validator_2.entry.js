import { r as registerInstance, c as createEvent, h } from './index-D8DCR0yx.js';

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
        return (h("div", { key: 'ca50424c9d9e63ac8c86aee644ac90dc3d0ccaff', class: "m-0 p-0" }, h("requirement-check", { key: '70bffbf1fef60a0a3ea37c94eeea05e5cbfcdb8d', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: '106ad67a3b703287a3aac1a90bcfe4ac482c7782', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: 'c362f34e3766ff8cd5c3a0e34512fe316c7579a1', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'd9edc88ae1297327650120e9916c3a7a1ec09428', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: 'dde8b7361fa0205d61851a7e3c1baa3a2da8053f', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        return (h("div", { key: '7c9e93fdd3dba8debb49aa0f0fe93f4732b8b97a', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '77dd41ae762b271dd5946ffd995350848a2b7ea6', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'b6e9a4b634e64f40de7e1d67143c72f535d7ee98' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };
