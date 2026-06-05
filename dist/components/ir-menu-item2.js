import { proxyCustomElement, HTMLElement, h, Fragment, Host } from '@stencil/core/internal/client';

const irMenuItemCss = ":host{display:block;width:100%}.menu-item__link{all:unset;display:flex;align-items:center;box-sizing:border-box;width:100%;color:var(--wa-color-text-quiet);padding:0.5rem;cursor:pointer;transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-item__label{flex:1 1 0%}.menu-item__link:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet))}.menu-item__link:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-item__link:focus{outline:none}.menu-item__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.menu-item__link--selected{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb));font-weight:600}.menu-item__link--selected:hover{color:var(--wa-color-primary-600, var(--wa-color-primary-text, #2563eb))}.menu-item__link--clickable{padding-left:1rem;padding-right:1rem}";
const IrMenuItemStyle0 = irMenuItemCss;

const IrMenuItem = /*@__PURE__*/ proxyCustomElement(class IrMenuItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    href;
    selected;
    badge;
    render() {
        const contentClass = {
            'menu-item__link': true,
            'menu-item__link--selected': !!this.selected,
            'menu-item__link--clickable': !!this.href,
        };
        const content = (h(Fragment, { key: '8d8b2e9c7e4e04037313452230c9015ab2f00032' }, h("span", { key: '86da11c76bc91c03e92905aa3b4f6c6bcfaa3c8c', class: "menu-item__icon" }, h("slot", { key: 'adb696f72f6875d51cd44b7ace2e62a19e5711bf', name: "icon" })), h("span", { key: 'ecef6f7cf09f7889848318b5bc3503ffdf63f872', class: "menu-item__label" }, h("slot", { key: 'bbc319aa1e87e2e463ab8662474cfee18907226d' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: 'f887f62046d4555ff8de5caec78a6bc29e576175' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
    }
    static get style() { return IrMenuItemStyle0; }
}, [1, "ir-menu-item", {
        "href": [513],
        "selected": [516],
        "badge": [513]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenuItem);
            }
            break;
    } });
}

export { IrMenuItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-menu-item2.js.map