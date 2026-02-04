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
        return (h(Host, { key: '00b16c3867f2e1c365487f2d0c2a8557a5f86da7' }, h("span", { key: '610223b1b36742fc5941f5c396ce210ebc33b75d', class: "new-badge" }, "new")));
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