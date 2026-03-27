import { r as registerInstance, h } from './index-7b3961ed.js';

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--wa-color-success-fill-loud, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";

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
        return (h("div", { key: '3f02b4a9e9cbd0f35499257f1149f31859345520', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '879d053e73098ca836de2438613d153e70b24b0e', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'c7a845804ad8ece4b741848aa25061dca7a68852' }, this.text)));
    }
};
RequirementCheck.style = requirementCheckCss;

export { RequirementCheck as requirement_check };

//# sourceMappingURL=requirement-check.entry.js.map