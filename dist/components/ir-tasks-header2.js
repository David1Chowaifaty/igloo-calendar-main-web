import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

const IrTasksHeader = /*@__PURE__*/ proxyCustomElement(class IrTasksHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        console.log('here');
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '669f31d694a11893484edc4ead47828809ac7893', class: "d-flex align-items-center justify-content-between" }, h("h4", { key: '3f8dfbb460ba7d59b0d4f8badec36465418e9d56' }, "Housekeeping Tasks"), h("div", { key: 'c12d4882bcc3e7ef44e19b717a157f293d3b50e4', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: '47e9c4e91f5754346a901dfec8b5892ce3b1b81a', size: "sm", btn_color: "outline", text: "Export" }), h("ir-button", { key: '25c43df1b09b0d96b5fc3ccc5dab1e0b33ac8b39', size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
    static get style() { return IrTasksHeaderStyle0; }
}, [2, "ir-tasks-header", {
        "isCleanedEnabled": [4, "is-cleaned-enabled"]
    }, [[16, "animateCleanedButton", "handleCleanedButtonAnimation"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-header", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksHeader);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksHeader as I, defineCustomElement as d };

//# sourceMappingURL=ir-tasks-header2.js.map