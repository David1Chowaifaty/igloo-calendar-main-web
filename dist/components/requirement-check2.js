import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
const RequirementCheckStyle0 = requirementCheckCss;

const RequirementCheck = /*@__PURE__*/ proxyCustomElement(class RequirementCheck extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: '82c2aad4070316b1223e2eec011a31a9998448bd', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '69b44fb61f7f40a6ae4cf80bf3690c1da6378e8e', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: '29abd778721601027c94efa3eb55365da990cea0' }, this.text)));
    }
    static get style() { return RequirementCheckStyle0; }
}, [2, "requirement-check", {
        "isValid": [4, "is-valid"],
        "text": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["requirement-check", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "requirement-check":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, RequirementCheck);
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { RequirementCheck as R, defineCustomElement as d };

//# sourceMappingURL=requirement-check2.js.map