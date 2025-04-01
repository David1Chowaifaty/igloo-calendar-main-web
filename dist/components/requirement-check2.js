import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const requirementCheckCss = ".sc-requirement-check-h{display:block;font-size:0.875rem}.valid.sc-requirement-check{color:var(--green, #28d094)}.requirement.sc-requirement-check{display:flex;align-items:center;gap:0.5rem}";

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
        return (h("div", { key: 'a3a94491c072c9539ab0c59f7858b2e199a11b2c', class: { requirement: true, valid: this.isValid } }, h("ir-icons", { key: '0aa4831f2b271c51d5b781249a0da558813f7377', style: { '--icon-size': '0.875rem' }, name: this.isValid ? 'check' : 'xmark' }), h("span", { key: 'a9cbdbfcf36b179fd6ba3e9bab5737637c7c9e40' }, this.text)));
    }
    static get style() { return requirementCheckCss; }
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

//# sourceMappingURL=requirement-check2.js.map