import { r as registerInstance, h } from './index-2ef79026.js';

const irPasswordValidatorCss = ".sc-ir-password-validator-h{display:block}";
const IrPasswordValidatorStyle0 = irPasswordValidatorCss;

const IrPasswordValidator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: '31b7a8d67c3f337e91c2ba583a79cb2abe44b95d', class: "m-0 p-0" }, h("requirement-check", { key: '207e82851d212092d3ffb1e5c7748898a22c9bb3', isValid: this.validLength, text: "Minimum 8 characters" }), h("requirement-check", { key: 'e98932e82f2a83f773246bab009c8bb8e94e72bb', isValid: this.hasUppercase, text: "At least one uppercase letter" }), h("requirement-check", { key: '905653d9e0722135685aa34ff619907e59fef6e3', isValid: this.hasLowercase, text: "At least one lowercase letter" }), h("requirement-check", { key: 'b74215edc75dd204d697ea968e44fc5d3985a43a', isValid: this.hasDigit, text: "At least one digit" }), h("requirement-check", { key: '7bdfc88754f1a1af4253885c2266044b7e88778c', isValid: this.hasSpecialChar, text: "At least one special character" })));
    }
};
IrPasswordValidator.style = IrPasswordValidatorStyle0;

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
const RequirementCheckStyle0 = requirementCheckCss;

const RequirementCheck = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.isValid = false;
        this.text = '';
    }
    render() {
        return (h("div", { key: '600a03ebfd74f67a8b0772c44ae3217a35a1960d', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '23bee2bfc5b0324cd45dfbcd197d3b1a3d09f968', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'bda5ac48e18185e4a1c8aa4753bf811f12f20099' }, this.text)));
    }
};
RequirementCheck.style = RequirementCheckStyle0;

export { IrPasswordValidator as ir_password_validator, RequirementCheck as requirement_check };

//# sourceMappingURL=ir-password-validator_2.entry.js.map