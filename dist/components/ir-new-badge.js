import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irNewBadgeCss = ":host{display:block}";
const IrNewBadgeStyle0 = irNewBadgeCss;

const IrNewBadge$1 = /*@__PURE__*/ proxyCustomElement(class IrNewBadge extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: '8efb7762bb0f28a1c481ab48822087ad43f09161' }, h("slot", { key: '57686c142da979a21ec6e74e653e7f58fdf30ec0' })));
    }
    static get style() { return IrNewBadgeStyle0; }
}, [1, "ir-new-badge"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-new-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrNewBadge$1);
            }
            break;
    } });
}

const IrNewBadge = IrNewBadge$1;
const defineCustomElement = defineCustomElement$1;

export { IrNewBadge, defineCustomElement };

//# sourceMappingURL=ir-new-badge.js.map