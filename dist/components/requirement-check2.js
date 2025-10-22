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
        return (h("div", { key: '81c5ffdfeef5630ea95511af08a178235d3072ba', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '75c100a4a9d2d3b504d741d4e1f82debe718e391', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'b0fb1404efb549170acfc062d6727060b2d369d9' }, this.text)));
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