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
        const content = (h(Fragment, { key: 'cc6e91e8d2d442cda772b4477698d3ae5d11d517' }, h("span", { key: 'c548cbfa65572c9b44a808551f9744181bc5278f', class: "menu-item__icon" }, h("slot", { key: '97bfed049b24f08bfb96de1e9b15cdb9a9315656', name: "icon" })), h("span", { key: '0520aeaec6e6effe1a23c4cd855f265cb267a418', class: "menu-item__label" }, h("slot", { key: '9f260bea15086743e2614d047483e8e6520f122b' })), this.badge ? (h("wa-badge", { variant: "danger", class: "menu-item__badge", appearance: "accent" }, this.badge)) : null));
        return (h(Host, { key: 'b7035c70526112824cdc94c1426ba2a267acee05' }, this.href ? (h("a", { class: contentClass, href: this.href, "aria-current": this.selected ? 'page' : undefined }, content)) : (h("div", { class: contentClass }, content))));
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