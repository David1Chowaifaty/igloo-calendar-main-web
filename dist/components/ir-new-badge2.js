import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irNewBadgeCss = ":host{display:inline-flex}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;width:fit-content;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.75rem !important;border-radius:4px}";
const IrNewBadgeStyle0 = irNewBadgeCss;

const IrNewBadge = /*@__PURE__*/ proxyCustomElement(class IrNewBadge extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return (h(Host, { key: 'a49e86b62dd8b68edf8d511f3a9acc32f8a403b2' }, h("span", { key: 'ce413bef6ea994c127c99b09a939ec9d2bdabd28', class: "new-badge" }, "new")));
    }
    static get style() { return IrNewBadgeStyle0; }
}, [1, "ir-new-badge"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-new-badge"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-new-badge":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrNewBadge);
            }
            break;
    } });
}

export { IrNewBadge as I, defineCustomElement as d };

//# sourceMappingURL=ir-new-badge2.js.map