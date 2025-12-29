import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irPropertySwitcherCss = ":host{display:block}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher$1 = /*@__PURE__*/ proxyCustomElement(class IrPropertySwitcher extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    render() {
        return h(Host, { key: '21dfdf86f05a255c61d11459f22ae6ad5ea2c580' }, "hello");
    }
    static get style() { return IrPropertySwitcherStyle0; }
}, [1, "ir-property-switcher"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-property-switcher"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-property-switcher":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPropertySwitcher$1);
            }
            break;
    } });
}

const IrPropertySwitcher = IrPropertySwitcher$1;
const defineCustomElement = defineCustomElement$1;

export { IrPropertySwitcher, defineCustomElement };

//# sourceMappingURL=ir-property-switcher.js.map