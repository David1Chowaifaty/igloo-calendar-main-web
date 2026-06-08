import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--wa-color-success-fill-loud, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";
const RequirementCheckStyle0 = requirementCheckCss;

const RequirementCheck = /*@__PURE__*/ proxyCustomElement(class RequirementCheck extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h("div", { key: '9e1131a68df52a192ea3a4f0a46a9b9dc48f3b86', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: 'cf464123aa618ae43e4306db383a6ef5bef25f65', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'ab69415489b25d009792aa6e3f9437f544bf9a86' }, this.text)));
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