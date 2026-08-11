'use strict';

var index = require('./index-CJa_TWt0.js');

const irPasswordValidatorCss = () => `.sc-ir-password-validator-h{display:block}`;

const IrPasswordValidator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.passwordValidationChange = index.createEvent(this, "passwordValidationChange");
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
        return (index.h("div", { key: '7fd30539df699d879dfad323aae1150e76cec116', class: "m-0 p-0" }, index.h("requirement-check", { key: '421f49dd0dcbe111ca23797a6b5153abfec2f54c', isValid: this.validLength, text: "Minimum 8 characters" }), index.h("requirement-check", { key: '9f7e8a3bcdf81077843fb842b57fafad1af43a79', isValid: this.hasUppercase, text: "At least one uppercase letter" }), index.h("requirement-check", { key: '5ffc0cd141c6af2da955fe0a868939adb289aa69', isValid: this.hasLowercase, text: "At least one lowercase letter" }), index.h("requirement-check", { key: '0508b497ff843d1621f1ed52a0ca9b5c43bfa303', isValid: this.hasDigit, text: "At least one digit" }), index.h("requirement-check", { key: '1907d6cbea983fe68a9fd59f31395ae3670ca484', isValid: this.hasSpecialChar, text: "At least one special character" })));
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
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '068531cd6df842247eb382f9a2bf30c5ea80fdd8', class: { requirement: true, valid: this.isValid } }, index.h("ir-icons", { key: '4e3322716a5a480be98f7ce0933ae67e296bdb00', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), index.h("span", { key: '02a860a5ae660221278ab24427bcf5ebe5e3147f' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss();

exports.ir_password_validator = IrPasswordValidator;
exports.requirement_check = RequirementCheck;
